import { useState } from "react";
import skillsTitle from "../assets/icons/skills.png";
import htmlLogo from "../assets/logos/canva.png";
import cssLogo from "../assets/logos/canva.png";
import swiftLogo from "../assets/logos/canva.png";

const skillsData = {
  "Langages de programmation": [
    {
      icon: htmlLogo,
      title: "HTML",
      category: "Frontend",
      description: "Langage de base pour créer des pages web.",
      level: "Avancé",
      percent: 70,
    },
    {
      icon: cssLogo,
      title: "CSS",
      category: "Frontend",
      description: "Langage utilisé pour styliser et mettre en forme les pages web.",
      level: "Avancé",
      percent: 65,
    },
    {
      icon: swiftLogo,
      title: "Swift",
      category: "Frontend",
      description: "Langage de programmation d'Apple pour créer des apps mobiles.",
      level: "Intermédiaire",
      percent: 60,
    },
  ],
  "Outils & Environnements": [
    // Ajoute tes autres skills ici
  ],
  "Frameworks & Bibliothèques": [
    // Ajoute tes autres skills ici
  ],
};

const tabs = Object.keys(skillsData);

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-bleuPastel py-8 px-2 sm:px-6 lg:px-12 mx-auto max-w-7xl">
      <div className="mb-5 text-center">
        <img
          src={skillsTitle}
          alt="SKILLS"
          className="w-full max-w-xs sm:max-w-md mx-auto h-auto"
        />
      </div>
      {/* Barre tabs, fond doux, arrondi doux, texte couleur demandée */}
      <div className="w-full rounded-xl bg-[#F8F8F8] mb-6 flex shadow-sm overflow-hidden">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              flex-1 py-2 sm:py-3 px-0 text-xs sm:text-base lg:text-lg font-bold transition
              rounded-lg
              ${activeTab === tab
                ? "bg-[#F2CFE7] text-white"
                : "bg-[#F8F8F8]"}
            `}
            style={{
              color: activeTab === tab ? "#fff" : "#D896C3",
              border: "none",
              outline: "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <p className="text-gray-700 text-xs sm:text-base mb-4 sm:mb-6 text-left">
        {activeTab === "Langages de programmation"
          ? "Voici mes langages de programmation principaux."
          : activeTab === "Outils & Environnements"
          ? "Voici mes outils et environnements préférés."
          : "Voici mes frameworks et bibliothèques favoris."}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {skillsData[activeTab].map((skill, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col
              hover:shadow-2xl transition-all duration-300 w-full max-w-md mx-auto"
          >
            <div className="flex items-center gap-2 mb-2">
              <img src={skill.icon} alt={skill.title} className="w-8 h-8 flex-shrink-0" />
              <span className="font-bold text-base sm:text-lg text-gray-800">{skill.title}</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold ml-2">
                {skill.category}
              </span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mb-1">{skill.description}</p>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">{skill.level}</h4>
            <div className="w-full bg-gray-100 rounded h-2 mb-2 overflow-hidden">
              <div
                className="bg-pink-200 h-2 rounded"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <span className="text-right text-gray-400 text-xs">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
