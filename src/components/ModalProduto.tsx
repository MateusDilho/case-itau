interface ModalProdutoProps {
  show: boolean;
  onClose: () => void;
  nome: string;
  setNome: (value: string) => void;
  codigo: string;
  setCodigo: (value: string) => void;
  onSave: () => void;
  loading: boolean;
}

export default function ModalProduto({
  show,
  onClose,
  nome,
  setNome,
  codigo,
  setCodigo,
  onSave,
  loading,
}: ModalProdutoProps) {
  if (!show) return null;

  return (
    <>
      {/* Fundo escurecido */}
      <div
        className="fixed inset-0 z-40"
        style={{ backgroundColor: "rgba(60, 60, 60, 0.7)" }}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6">
        <div className="relative bg-[#0E0E0E] text-white rounded-2xl p-12 sm:p-20 w-[90%] max-w-2xl h-[80vh] shadow-2xl border border-[#2A2A2A] flex flex-col justify-between">
          {/* Botão de fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 font-semibold hover:text-white transition"
          >
            ✕
          </button>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-10 text-center">
              Criar novo produto
            </h2>

            {/* Campo: Nome do produto */}
            <div className="mb-8">
              <label className="block mb-3 text-sm font-semibold text-gray-300">
                Nome do produto
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Insira o nome do produto"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:border-orange-500 text-white placeholder-gray-500"
              />
            </div>

            {/* Campo: Código do produto */}
            <div className="mb-10">
              <label className="block mb-3 text-sm font-semibold text-gray-300">
                Código do produto
              </label>
              <input
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Insira o código do produto"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:border-orange-500 text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-4 mt-8 w-full">
            <button
              onClick={onClose}
              className="w-1/2 px-5 py-3 rounded-md bg-[#3A3A3A] hover:bg-[#4A4A4A] transition text-gray-200 font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={onSave}
              disabled={loading || !nome || !codigo}
              className={`w-1/2 px-5 py-3 rounded-md font-semibold transition ${
                loading || !nome || !codigo
                  ? "bg-[#CFD1D3] text-[#999999] cursor-not-allowed"
                  : "bg-[#FF6600] hover:bg-[#FF7518] text-white"
              }`}
            >
              {loading ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
