import { useState } from "react";
import aboutTitle from "../assets/icons/a_propos.png";
import melinaPerso from "../assets/images/melina_perso.WebP";
import linkedinIcon from "../assets/icons/linkedin.WebP";
import githubIcon from "../assets/icons/github_logo.WebP";
import cvPdf from "../assets/document/melina_mouri_dev-web.pdf";

// Ajoute autant de rubriques que nécessaire
const pages = [
  {
    titleImg: aboutTitle,
    mainImg: melinaPerso,
    content: (
      <>
        <p className="font-bold text-lg mb-3 text-center lg:text-left" style={{ color: "#BB6BAB" }}>
          Moi c’est Mélina, étudiante à la Web@cadémie by Epitech !
        </p>
        <p className="mb-3 text-sm md:text-base text-center lg:text-left" style={{ color: "#BB6BAB" }}>
          Je me suis lancée dans le développement web avec enthousiasme, guidée par ma passion pour le design et mon envie de créer.<br />
          Je suis à la recherche d’une alternance à partir de septembre 2025, afin de continuer à apprendre, coder et surtout m’exprimer à travers des projets concrets.<br />
          N’hésitez pas à découvrir mes réalisations et à me contacter pour échanger ou collaborer !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-2 justify-center lg:justify-start">
          <a
            href={cvPdf}
            download
            className="text-white font-semibold rounded-full px-6 py-2 shadow hover:brightness-90 text-center"
            style={{ backgroundColor: "#BB6BAB" }}
          >
            Télécharger le CV
          </a>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <a href="http://www.linkedin.com/in/melina-mouri" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="logo linkedin" className="w-8 h-8 rounded-full" />
            </a>
            <a href="https://github.com/Melina-13" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="logo github" className="w-8 h-8 rounded-full" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    titleImg: aboutTitle,
    mainImg: melinaPerso,
    content: (
      <>
        <p className="font-bold text-lg mb-3 text-center lg:text-left" style={{ color: "#BB6BAB" }}>
          Mon parcours
        </p>
        <p className="mb-3 text-sm md:text-base text-center lg:text-left" style={{ color: "#BB6BAB" }}>
          Après le bac, j’ai décidé de me spécialiser dans le web et l’UX/UI pour allier créativité et technique.<br />
          J’ai développé plusieurs projets scolaires et personnels, à la fois en équipe et en autonomie, tout en me formant aux outils modernes du secteur (Figma, Git, React…).
        </p>
      </>
    ),
  },
];

export default function About() {
  const [page, setPage] = useState(0);
  const lastPage = pages.length - 1;

  return (
    <section id="rubrique_about" className="bg-bleuPastel py-10 px-4">
      <h2 className="text-center mb-4">
        <img src={pages[page].titleImg} alt="rubrique à propos" className="mx-auto w-10/12 max-w-lg" />
      </h2>
      <div className="flex items-center justify-center gap-4">
        {/* Flèche gauche */}
        <button
          onClick={() => setPage(page === 0 ? lastPage : page - 1)}
          className="text-[#BB6BAB] w-10 h-10 flex items-center justify-center transition"
          aria-label="Précédent"
        >
          &#8592;
        </button>

        {/* Bloc de contenu central */}
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-3xl">
          <img src={pages[page].mainImg} alt="illustration" className="rounded-3xl w-40 md:w-56 mb-6 lg:mb-0" />
          <div className="max-w-xl">{pages[page].content}</div>
        </div>

        {/* Flèche droite */}
        <button
          onClick={() => setPage(page === lastPage ? 0 : page + 1)}
          className="text-[#BB6BAB] w-10 h-10 flex items-center justify-center transition"
          aria-label="Suivant"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
