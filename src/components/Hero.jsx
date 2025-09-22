import React, { useState } from "react";
import SplashScreen from "./SplashScreen"; // <-- ajout de l'import
import melinaTitle from "../assets/icons/melina.png";

const bandeau = "• DEVELOPPEUSE WEB JUNIOR ".repeat(18);

export default function Hero() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeInSite, setFadeInSite] = useState(false);

  // Quand la splash se termine, lance le fondu entrant du site
  const handleSplashFinish = () => {
    setShowSplash(false);
    setTimeout(() => setFadeInSite(true), 100);
  };

  return (
    <section
      className="flex flex-col justify-center items-center relative bg-cover bg-center min-h-screen pb-20 px-4 md:px-8"
      style={{ backgroundImage: "url('/portfolio/background.jpg')" }}
    >
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <div
        style={{
          opacity: fadeInSite ? 1 : 0,
          transition: "opacity 1s cubic-bezier(.5,1,.89,1)",
        }}
      >
        {!showSplash && (
          <>
            {/* Image */}
            <img
              src={melinaTitle}
              alt="MELINA"
              className="block mx-auto w-[300px] md:w-[600px] mt-24 mb-6"
            />

            {/* Texte */}
            <p className="text-lg md:text-2xl text-[#bb6bab] text-center font-bold max-w-6xl mb-7">
              Bienvenue dans mon univers, où design et code se rencontrent pour
              donner vie à des idées.
              <br />
              Envie d’en savoir plus sur mon parcours et découvrir mes projets ?
            </p>

            {/* Bouton */}
            <a href="#rubrique_about">
              <div className="flex items-center justify-center">
                <button
                  className="px-8 py-2 rounded-3xl font-semibold shadow-md transition"
                  style={{ backgroundColor: "#FCBEF8", color: "#BB6BAB" }}
                >
                  Clique ici
                </button>
              </div>
            </a>

            {/* Bandeau animé */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
              <div className="relative w-full h-12 flex items-center">
                <div
                  className="absolute top-0 left-0 flex marquee"
                  style={{ width: "200%", height: "100%" }}
                >
                  <div
                    className="whitespace-nowrap font-bold text-[#bb6bab] text-base md:text-lg bg-pink-200 rounded-t-3xl px-8 shadow-md"
                    style={{
                      background: "rgba(196,180,218,0.7)",
                      width: "100%",
                      paddingTop: "0.7rem",
                      paddingBottom: "0.5rem",
                    }}
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
          </>
        )}
      </div>
    </section>
  );
}
