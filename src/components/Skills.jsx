import { useState } from "react";
import skillsTitle from "../assets/icons/skills.png";

// Logos
import htmlLogo from "../assets/logos/html.WebP";
import cssLogo from "../assets/logos/css.WebP";
import swiftLogo from "../assets/logos/swift.WebP";
import phpLogo from "../assets/logos/php.WebP";
import jsLogo from "../assets/logos/js.WebP";
import pythonLogo from "../assets/logos/python.png";
import sqlLogo from "../assets/logos/sql.WebP";
import mongoLogo from "../assets/logos/mongodb.png";

import gitLogo from "../assets/logos/git.WebP";
import figmaLogo from "../assets/logos/figma.WebP";
import canvaLogo from "../assets/logos/canva.WebP";
import photoshopLogo from "../assets/logos/photoshop.jpg";

import reactLogo from "../assets/logos/react.png";
import symfonyLogo from "../assets/logos/symfony.png";
import laravelLogo from "../assets/logos/laravel.png";
import bootstrapLogo from "../assets/logos/bootstrap.WebP";
import swiftUiLogo from "../assets/logos/swiftui.webP";
import nodeLogo from "../assets/logos/node.WebP";
import tailwindLogo from "../assets/logos/tailwind.png"

const skillsData = {
  "Langages de programmation": [
    { icon: htmlLogo, title: "HTML", category: "Frontend", description: "Langage de base pour créer des pages web.", level: "Avancé", percent: 70 },
    { icon: cssLogo, title: "CSS", category: "Frontend", description: "Langage utilisé pour styliser et mettre en forme les pages web.", level: "Avancé", percent: 65 },
    { icon: swiftLogo, title: "Swift", category: "Frontend", description: "Langage de programmation d'Apple pour créer des applications.", level: "Avancé", percent: 50 },
    { icon: phpLogo, title: "PHP", category: "Backend", description: "Langage de programmation serveur utilisé pour créer des sites web dynamiques.", level: "Intermédiaire", percent: 45 },
    { icon: jsLogo, title: "JavaScript", category: "Fullstack", description: "Langage de programmation utilisé pour rendre les pages web interactives.", level: "Intermédiaire", percent: 45 },
    { icon: pythonLogo, title: "Python", category: "Backend", description: "Langage polyvalent utilisé pour le développement web, la data science, l'automatisation et l'IA.", level: "Débutant", percent: 10 },
    { icon: sqlLogo, title: "SQL", category: "Base de données", description: "Langage utilisé pour gérer et interagir avec des bases de données.", level: "Intermédiaire", percent: 55 },
    { icon: mongoLogo, title: "MongoDb", category: "Base de données", description: "Langage utilisé pour gérer et interagir avec des bases de données.", level: "Débutant", percent: 15 },
  ],
  "Outils & Environnements": [
    { icon: gitLogo, title: "Git", category: "DevOps", description: "Outil de gestion de versions qui permet de suivre les modifications du code et collaborer.", level: "Débutant", percent: 40 },
    { icon: figmaLogo, title: "Figma", category: "Design", description: "Conception UI/UX et prototypage.", level: "Avancé", percent: 75 },
    { icon: canvaLogo, title: "Canva", category: "Design", description: "Conception UI/UX et prototypage.", level: "Avancé", percent: 85 },
    { icon: photoshopLogo, title: "Photoshop", category: "Design", description: "Logiciel de création et de retouche d'images utilisé en design graphique, web et UI/UX.", level: "Avancé", percent: 75 },
  ],
  "Frameworks & Bibliothèques": [
    { icon: reactLogo, title: "React", category: "Frontend", description: "Librairie JavaScript pour créer des interfaces user dynamiques et réactives.", level: "Débutant", percent: 40 },
    { icon: symfonyLogo, title: "Symfony", category: "Backend", description: "Framework PHP robuste utilisé pour développer des applications web complexes et sécurisées.", level: "Débutant", percent: 35 },
    { icon: laravelLogo, title: "Laravel", category: "Backend", description: "Framework PHP moderne et intuitif, conçu pour faciliter le développement d'application web.", level: "Débutant", percent: 35 },
    { icon: bootstrapLogo, title: "Bootstrap", category: "Frontend", description: "Framework CSS pour créer des sites web responsive et modernes.", level: "Débutant", percent: 35 },
    { icon: swiftUiLogo, title: "SwiftUi", category: "Mobile", description: "Framework d'Apple pour créer des interfaces utilisateur.", level: "Avancé", percent: 50 },
    { icon: nodeLogo, title: "Node.js", category: "Backend", description: "Environnement d'exécution JavaScript côté serveur.", level: "Débutant", percent: 15 },
    { icon: tailwindLogo, title: "Tailwind", category: "Frontend", description: "Framework CSS utilitaire offrant un contrôle précis du design via des classes prédéfinies.", level: "Débutant", percent: 30 },
  ],
};

const tabs = Object.keys(skillsData);

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-bleuPastel py-8 px-2 sm:px-6 lg:px-12 mx-auto max-w-7xl">
      <div className="mb-5 text-center">
        <img src={skillsTitle} alt="SKILLS" className="w-full max-w-xs sm:max-w-md mx-auto h-auto" />
      </div>

      <div className="w-full rounded-xl bg-[#F8F8F8] mb-6 flex shadow-sm overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              flex-1 py-2 sm:py-3 px-0 text-xs sm:text-base lg:text-lg font-bold transition
              rounded-lg
              ${activeTab === tab ? "bg-[#F2CFE7] text-white" : "bg-[#F8F8F8]"}
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
          ? "Découvrez ici mes outils et environnements de travail."
          : "Vous trouverez ici mes frameworks et bibliothèques."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {skillsData[activeTab].map((skill, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col
              hover:shadow-2xl transition-all duration-300 w-full max-w-md mx-auto"
          >
            <div className="flex items-center gap-2 mb-2">
              <img src={skill.icon} alt={skill.title} className="w-12 h-8 flex-shrink-0" />
              <span className="font-bold text-base sm:text-lg text-gray-800">{skill.title}</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold ml-2">
                {skill.category}
              </span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mb-1">{skill.description}</p>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">{skill.level}</h4>
            <div className="w-full bg-gray-100 rounded h-2 mb-2 overflow-hidden">
              <div className="bg-pink-200 h-2 rounded" style={{ width: `${skill.percent}%` }}></div>
            </div>
            <span className="text-right text-gray-400 text-xs">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
