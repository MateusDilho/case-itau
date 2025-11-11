import { useState } from "react";
import Banner from "../assets/Banner.png";
import { supabase } from "../lib/supabaseClient";
import { Eye, EyeOff } from "lucide-react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setMensagem("");

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    if (error) {
      setMensagem("Credenciais inválidas. Verifique e tente novamente.");
      setLoading(false);
      return;
    }

    // Guarda o token JWT no localStorage
    localStorage.setItem("token", data.session?.access_token || "");

    setMensagem("Login realizado com sucesso!");
    setEmail("");
    setSenha("");

    // Redirecionamento após login
    window.location.href = "/produtos";
  } catch (error) {
    setMensagem("Erro de conexão com o Supabase.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex min-h-screen">
      {/* Parte esquerda - imagem */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-top"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>

      {/* Parte direita - conteúdo */}
      <div className="flex w-full md:w-1/2 flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-8 sm:py-10 lg:py-12">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-10 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base font-semibold">
              🌐 <span>BR</span>
            </div>
            <button className="text-gray-500 text-sm sm:text-base hover:text-gray-700 font-semibold">
              ✕ Close
            </button>
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-15 sm:mb-20 lg:mb-40">
            Faça seu login
          </h1>

          {/* Formulário */}
          <form onSubmit={handleSubmit}>
            {/* Localização */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <label className="block text-sm sm:text-base text-[#545454] mb-1">
                Selecione sua localização
              </label>
              <select className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2">
                <option value="br">São Paulo</option>
              </select>
            </div>

            {/* Email */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Email"
                required
              />
            </div>

            {/* Senha */}
            <div className="mb-6 sm:mb-8 relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Senha"
                required
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Link esqueci senha */}
            <div className="mb-8">
              <a href="/reset-senha" className="text-sm sm:text-base text-blue-700 hover:underline inline-block">
                Esqueci minha senha
              </a>
            </div>

            {/* Botão continuar */}
            <div>
              <button
                type="submit"
                disabled={loading || !email || !senha}
                className={`w-full sm:w-1/3 py-3 rounded-md font-semibold transition-all duration-200 ${
                  loading || !email || !senha
                    ? "bg-[#CFD1D3] text-[#999999] cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}>
                {loading ? "Entrando..." : "Continue"}
              </button>
            </div>

            {/* Mensagem de status */}
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