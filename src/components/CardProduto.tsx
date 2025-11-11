import cardIcon from "../assets/cardIcon.png";

interface Produto {
  id: string | number;
  nome: string;
}

interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {
  const nomeCurto =
    produto.nome.length > 7 ? produto.nome.slice(0, 7) + "..." : produto.nome;

  return (
    <div
      key={produto.id}
      className="relative w-40 h-40 bg-[#121921] hover:bg-[#1A222C] transition-all rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
    >
      <div className="w-40 h-40 flex items-center justify-center">
        <img
          src={cardIcon}
          alt={produto.nome}
          className="max-w-[6rem] max-h-[6rem] object-contain z-0"
        />
      </div>
      <span className="absolute text-lg font-semibold text-white z-10 text-center px-2">
        {nomeCurto}
      </span>
    </div>
  );
}
