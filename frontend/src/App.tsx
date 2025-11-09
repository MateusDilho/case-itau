import Banner from "./assets/Banner.png";

export default function App() {
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
          <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-medium text-gray-900 mb-12 sm:mb-16 lg:mb-20">
            Faça seu login
          </h1>

          {/* Select de localização */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <label className="block text-sm sm:text-base text-[#545454] mb-1">
              Selecione sua localização
            </label>
            <select className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2">
              <option value="br">São Paulo</option>
              <option value="us">Estados Unidos</option>
              <option value="jp">Japão</option>
            </select>
          </div>

          {/* Campo: email */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <input
              type="email"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500"
              placeholder="Email"
            />
          </div>

          {/* Campo: senha */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center">
              <input
                type="password"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-orange-500"
                placeholder="Senha"
              />
            </div>
          </div>

          {/* Link esqueci senha */}
          <div className="mb-8">
            <a
              href="#"
              className="text-sm sm:text-base text-blue-700 hover:underline inline-block"
            >
              Esqueci minha senha
            </a>
          </div>

          {/* Botão continuar */}
          <div>
            <button
              disabled
              className="w-full sm:w-1/3 md:w-2/8 py-3 rounded-md bg-[#CFD1D3] font-semibold text-[#999999] cursor-not-allowed mb-12 transition-all duration-200"
            >
              Continue
            </button>
          </div>
        </div>

        {/* Rodapé */}
        <footer className="text-xs sm:text-sm text-gray-500 text-center mt-auto">
          2023 - Itaú Private Bank. All rights reserved.{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </footer>
      </div>
    </div>
  );
}
