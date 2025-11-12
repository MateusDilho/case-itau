import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import ModalProduto from "../components/ModalProduto";
import CardProduto from "../components/CardProduto";
import logoItau from "../assets/logoItauBranca.png";
import cardIcon from "../assets/cardIcon.png";
import plusIcon from "../assets/plusIcon.png";
import homeIcon from "../assets/homeIcon.png";

interface Produto {
  id: string;
  nome: string;
  codigo: string;
  usuario_id: string;
}

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(false);

  // Busca produtos do usuário logado
  const fetchProdutos = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("produtos")
      .select("*")
      .eq("usuario_id", user.id);


    if (error) {
      console.error(error.message);
      return;
    }

    if (data) setProdutos(data);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const handleCriarProduto = async () => {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Usuário não autenticado.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("produtos").insert([
      {
        nome,
        codigo,
        usuario_id: user.id,
      },
    ]);

    if (error) {
      alert("Erro ao criar produto: " + error.message);
    } else {
      setShowModal(false);
      setNome("");
      setCodigo("");
      await fetchProdutos(); // Atualiza a lista
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-[#0D0E0F] text-white relative">
      {/* Sidebar */}
      <aside className="w-[220px] p-6 flex flex-col justify-start">
        <div className="flex justify-end mb-12">
          <img src={logoItau} alt="Itaú" className="w-12" />
        </div>

        <div className="flex items-center gap-3 mb-10">
          <img src={cardIcon} alt="Card" className="w-6 h-6" />
          <span className="text-sm font-medium text-gray-200">Portal</span>
        </div>

        <nav className="flex flex-col gap-5 text-sm font-medium">
          <a
            href="/produtos"
            className="flex items-center gap-2 hover:text-orange-300"
          >
            <img src={homeIcon} alt="Home" className="w-4 h-4" />
            Home
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-start p-12 bg-[#171A1A]">
        <div className="w-[60%] flex flex-col items-start">
          <div className="flex justify-between items-center w-full mb-10">
            <h2 className="text-lg font-semibold text-gray-200">
              {produtos.length} produtos criados
            </h2>

            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-orange-400 transition"
            >
              <img src={plusIcon} alt="Adicionar" className="w-7 h-7" />
              Criar
            </button>
          </div>

          {/* Grid responsivo */}
          <div
            className="grid gap-10 justify-items-center w-full px-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
            }}
          >
            {produtos.map((p) => {
              return <CardProduto key={p.id} produto={p} />;
            })}
          </div>
        </div>
      </main>

      {/* Modal de criação */}
      <ModalProduto
        show={showModal}
        onClose={() => setShowModal(false)}
        nome={nome}
        setNome={setNome}
        codigo={codigo}
        setCodigo={setCodigo}
        onSave={handleCriarProduto}
        loading={loading}
      />

    </div>
  );
}
