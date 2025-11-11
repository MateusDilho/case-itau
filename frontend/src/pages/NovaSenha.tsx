import { useState } from "react";
import Banner from "../assets/Banner.png";
import { supabase } from "../lib/supabaseClient";
import { Eye, EyeOff } from "lucide-react";

export default function NovaSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("");

    if (novaSenha !== confirmarSenha) {
      setMensagem("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: novaSenha,
    });

    if (error) {
      setMensagem("Erro ao redefinir senha.");
    } else {
      setMensagem("Senha redefinida com sucesso! Você já pode fazer login.");
      setNovaSenha("");
      setConfirmarSenha("");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Parte esquerda - imagem */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-top"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>

      {/* Parte direita */}
      <div className="flex w-full md:w-1/2 flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-8 sm:py-10 lg:py-12">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-10 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base font-semibold">
              🌐 <span>BR</span>
            </div>
            <button
              onClick={() => (window.location.href = "/")}
              className="text-gray-500 text-sm sm:text-base hover:text-gray-700 font-semibold"
            >
              ✕ Close
            </button>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-15 sm:mb-20 lg:mb-40">
            Altere sua senha
          </h1>

          {/* Formulário */}
          <form onSubmit={handleUpdate}>
            {/* Nova senha */}
            <div className="mb-8 sm:mb-10 lg:mb-12 relative">
              <input
                type={mostrarNovaSenha ? "text" : "password"}
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Nova senha"
                required
              />
              <button
                type="button"
                onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                {mostrarNovaSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirmar senha */}
            <div className="mb-8 sm:mb-10 lg:mb-12 relative">
              <input
                type={mostrarConfirmarSenha ? "text" : "password"}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Confirmar nova senha"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setMostrarConfirmarSenha(!mostrarConfirmarSenha)
                }
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                {mostrarConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Link para login */}
            <div className="mb-8">
              <a
                href="/"
                className="text-sm sm:text-base text-blue-700 hover:underline inline-block"
              >
                Fazer login
              </a>
            </div>

            {/* Botão Salvar */}
            <button
              type="submit"
              disabled={
                loading || !novaSenha || !confirmarSenha || novaSenha !== confirmarSenha
              }
              className={`w-full sm:w-1/3 py-3 rounded-md font-semibold transition-all duration-200 ${
                loading || !novaSenha || !confirmarSenha || novaSenha !== confirmarSenha
                  ? "bg-[#CFD1D3] text-[#999999] cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              {loading ? "Redefinindo..." : "Salvar"}
            </button>

            {/* Mensagem */}
            {mensagem && (
              <p
                className={`mt-6 text-sm text-center ${
                  mensagem.includes("sucesso")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {mensagem}
              </p>
            )}
          </form>
        </div>

        {/* Rodapé */}
        <footer className="text-xs sm:text-sm text-gray-500 text-center mt-auto">
          2023 - Itaú Private Bank. All rights reserved.{" "}
          <a href="" className="hover:underline">
            Privacy Policy
          </a>
        </footer>
      </div>
    </div>
  );
}
