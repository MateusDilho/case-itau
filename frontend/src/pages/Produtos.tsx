import logoItau from "../assets/logoItauBranca.png";
import cardIcon from "../assets/cardIcon.png";
import plusIcon from "../assets/plusIcon.png";
import homeIcon from "../assets/homeIcon.png";

export default function Produtos() {
  const produtos = ["Login", "Pix", "Crédito", "Cartões"];

   return (
    <div className="flex min-h-screen bg-[#0D0E0F] text-white">
      {/* Sidebar */}
      <aside className="w-[220px] p-6 flex flex-col justify-start">
        {/* Logo Itaú */}
        <div className="flex justify-end mb-12">
          <img src={logoItau} alt="Itaú" className="w-12" />
        </div>

        {/* Item “Portal” */}
        <div className="flex items-center gap-3 mb-10">
          <img src={cardIcon} alt="Card" className="w-6 h-6"/>
          <span className="text-sm font-medium text-gray-200">Portal</span>
        </div>

        {/* Menu lateral */}
        <nav className="flex flex-col gap-5 text-sm font-medium">
          <a href="#" className="flex items-center gap-2 hover:text-orange-300">
            <img src={homeIcon} alt="Home" className="w-4 h-4" />
            Home
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-start p-12 bg-gradient-to-b from-[#121314] to-[#0C0C0C]">
        <div className="w-[60%] flex flex-col items-start">
          {/* Topo - título e botão criar */}
          <div className="flex justify-between items-center w-full mb-10">
            <h2 className="text-lg font-medium text-gray-200">4 produtos criados</h2>

            <button className="flex items-center gap-2 text-sm text-gray-200 hover:text-orange-400 transition">
              <img src={plusIcon} alt="Adicionar" className="w-5 h-5" />
              Criar
            </button>
          </div>

          {/* Grid de produtos */}
          <div className="flex gap-8">
            {produtos.map((nome, index) => (
              <div
                key={index}
                className="relative w-48 h-48 bg-[#121921] hover:bg-[#1A222C] transition-all rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
              >
                {/* Imagem do card */}
                <img
                  src={cardIcon}
                  alt={nome}
                  className="w-24 h-24 object-contain z-0"
                />
                {/* Texto sobreposto */}
                <span className="absolute text-lg font-semibold text-white z-10">
                  {nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}