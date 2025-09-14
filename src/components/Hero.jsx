import melinaTitle from "../assets/icons/melina.png";

const bandeau = "• DEVELOPPEUSE WEB JUNIOR ".repeat(18);

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center py-10 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <img src={melinaTitle} alt="MELINA" className="block w-[380px] md:w-[580px] mb-2" />
      <p className="text-lg md:text-xl text-[#bb6bab] text-center font-bold max-w-xl mb-1">
        Bienvenue dans mon univers, où design et code se rencontrent pour donner vie à des idées.
        Envie d’en savoir plus sur mon parcours et découvrir mes projets ?
      </p>
      
      <a href="#rubrique_about">
        <button className="bg-pink-400 text-white px-8 py-2 rounded-3xl font-semibold shadow-md hover:bg-pink-500 transition">
          Clique ici
        </button>
      </a>
      {/* Bandeau animé infini avec fond pastel arrondi */}
      <div className="w-full overflow-hidden mt-12 mb-2">
        <div className="relative w-full h-12 flex items-center">
          <div
            className="absolute top-0 left-0 flex marquee"
            style={{ width: "200%", height: "100%" }}
          >
            <div
              className="whitespace-nowrap font-bold text-[#bb6bab] text-base md:text-lg py-2 bg-pink-200 rounded-3xl px-8 shadow-md"
              style={{ background: "rgba(196,180,218,0.7)", width: "100%" }}
            >
              {bandeau}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </section>
  );
}
