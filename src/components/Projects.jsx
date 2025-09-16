import { useState } from "react";
import ProjectModal from "./ProjectModal";
import projetTitle from "../assets/icons/mes_projets.png";

// Import des images projets
import imgTweeter from "../assets/images/tweeter.WebP";
import imgLovly from "../assets/images/lovly.WebP";
import imgCinemascoop from "../assets/images/CinemaScoop.WebP";
import imgQuizz from "../assets/images/quizz.WebP";
import imgOmega from "../assets/images/omega_maquette.png";
import imgEditeur from "../assets/images/editeur.WebP";
import imgToDo from "../assets/images/to_do_list.WebP";
import imgMorpion from "../assets/images/morpion.WebP";
import imgPuissance4 from "../assets/images/puissance4.WebP";
import imgPMRide from "../assets/images/PMRide.WebP";
import imgPartely from "../assets/images/partely.png";

// Données projets
const projectsData = [
  {
    id: 1,
    title: "Partely - E-commerce",
    image: imgPartely,
    short: "Site e-commerce spécialisé dans les produits gaming.",
    description:
      "Partely est une boutique en ligne spécialisée dans les produits gaming, offrant une expérience d’achat fluide et immersive pour les passionnés de jeux vidéo.",
    skills: ["React", "Python", "Flask", "SqlLite"],
    github: "https://github.com/Melina-13/Tweeter.git",
    moreImg: imgPartely,
  },
  {
    id: 2,
    title: "Tweeter - Réseau social",
    image: imgTweeter,
    short: "Réseau social inspiré de X avec fonctionnalités essentielles.",
    description:
      "Tweeter est un réseau social inspiré de X offrant les fonctionnalités essentielles comme la publication de messages courts, le suivi d'autres utilisateurs et l'interaction avec les publications. Intègre également CoqIA, un assistant intelligent similaire à ChatGPT.",
    skills: ["Html", "Css", "JavaScript", "Php", "Sql"],
    github: "https://github.com/Melina-13/Tweeter.git",
    moreImg: imgTweeter,
    web: "https://tweeter.stefan-paris.fr/login",
  },
  {
    id: 3,
    title: "PMRide – Application mobile IOS",
    image: imgPMRide,
    short: "Aide aux personnes en situation de handicap pour transport et activités.",
    description:
      "Prototype mobile pour faciliter la recherche d’options accessibles et favoriser la mobilité et l'autonomie.",
    skills: ["Swift"],
    github: "https://github.com/Melina-13/PMRide.git",
    moreImg: imgPMRide,
    web: "https://www.figma.com/proto/Zv5FwsZkN39d39DYQomuae/PMRide-Application?node-id=1502-50306&t=utdm5TpPihWtVqjy-1",
  },
  {
    id: 4,
    title: "LovLy – Plateforme de Rencontres",
    image: imgLovly,
    short: "Site web inspiré de Meetic, plateforme sécurisée.",
    description:
      "LovLy est un projet étudiant inspiré des sites de rencontres modernes comme Meetic. Plateforme intuitive et sécurisée où les utilisateurs peuvent créer un profil, matcher et échanger.",
    skills: ["Html", "Css", "JavaScript", "Php", "Sql"],
    github: "https://github.com/Melina-13/LovLy.git",
    moreImg: imgLovly,
  },
  {
    id: 5,
    title: "CinemaScoop – Gestion de Billetterie",
    image: imgCinemascoop,
    short: "Gestion simplifiée de billetterie en ligne.",
    description:
      "CinemaScoop facilite la gestion de billetterie pour les cinémas : consultation des films, réservation de billets, choix des sièges.",
    skills: ["Html", "Css", "JavaScript", "Php", "Sql"],
    github: "https://github.com/Melina-13/CinemaScoop.git",
    moreImg: imgCinemascoop,
  },
  {
    id: 6,
    title: "Puissance 4 – Jeu de stratégie",
    image: imgPuissance4,
    short: "Version web du célèbre jeu Puissance 4.",
    description:
      "Ce projet est une version web du célèbre jeu Puissance 4, fidèle au jeu original avec une interface moderne et intuitive.",
    skills: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Melina-13/Puissance4.git",
    moreImg: imgPuissance4,
    web: "https://melina-13.github.io/Puissance4",
  },
  {
    id: 7,
    title: "Morpion – Jeu de réflexion",
    image: imgMorpion,
    short: "Version web du jeu Morpion (Tic-Tac-Toe).",
    description:
      "Recréation du jeu Morpion avec interface fluide, moderne et intuitive.",
    skills: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Melina-13/Morpion.git",
    moreImg: imgMorpion,
    web: "https://melina-13.github.io/Morpion",
  },
  {
    id: 8,
    title: "Quiz Interactif – Testez vos connaissances",
    image: imgQuizz,
    short: "Jeu de quiz en ligne ludique et dynamique.",
    description:
      "Quiz interactif pour tester ses connaissances sur différents sujets avec interface intuitive et réactive.",
    skills: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Melina-13/Quizz.git",
    moreImg: imgQuizz,
    web: "https://melina-13.github.io/Quizz/",
  },
  {
    id: 9,
    title: "To-Do List – Gestion simple de tâches",
    image: imgToDo,
    short: "Application web de gestion de tâches.",
    description:
      "Application pour organiser son quotidien : ajouter, modifier et supprimer des tâches facilement.",
    skills: ["Css", "JavaScript", "Php"],
    github: "https://github.com/Melina-13/Todolist",
    moreImg: imgToDo,
  },
  {
    id: 10,
    title: "Éditeur de texte en ligne",
    image: imgEditeur,
    short: "Créer et sauvegarder des documents texte dans le navigateur.",
    description:
      "Éditeur en ligne permettant de créer, modifier et sauvegarder des documents sans logiciel externe.",
    skills: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Melina-13/Editeur-de-texte",
    moreImg: imgEditeur,
  },
  {
    id: 11,
    title: "OMEGA GAMING – Maquette de site web e-commerce",
    image: imgOmega,
    short: "Maquette de site e-commerce pour PC gaming performants.",
    description:
      "Omega Gaming est une maquette de site web e-commerce spécialisée dans la vente de PC gaming performants et personnalisables.",
    skills: ["Maquette"],
    github: "",
    moreImg: imgOmega,
    web: "https://www.figma.com/proto/CqI8Uhob6rVIJD5yoW4ZfX/Omega?node-id=0-1&t=Bdw3LNQ3f0PMMGbS-1",
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const openModal = (idx) => {
    setSelected(idx);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelected(null);
  };

  return (
    <section id="rubrique_projet" className="bg-bleuPastel py-10 px-4">
      <div className="text-center mb-8">
        <img src={projetTitle} alt="projets" className="w-10/12 max-w-lg mx-auto" />
      </div>

      {/* Grille de projets */}
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {visibleProjects.map((p, idx) => (
          <div
            key={p.id}
            className="relative bg-white rounded-3xl shadow-lg w-80 min-h-60 p-4 flex flex-col justify-between hover:shadow-2xl transition cursor-pointer"
          >
            {/* Image principale */}
            <img
              src={p.image}
              alt={p.title}
              className="rounded-xl w-full h-28 object-cover mb-3 border-2 border-blue-100"
            />

            {/* Titre + résumé */}
            <h3
              className="font-black text-xl mb-2"
              style={{ color: "rgb(187, 107, 171)" }}
            >
              {p.title}
            </h3>
            <div className="text-blue-pastel text-base mb-3">{p.short}</div>

            {/* Badges compétences */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.skills.map((s) => (
                <span key={s} className="bg-pink-200 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {s}
                </span>
              ))}
            </div>

            {/* Bouton Lire plus */}
            <button
              onClick={() => openModal(idx)}
              className="flex items-center gap-2 px-4 py-1 rounded-2xl font-semibold text-rose-baby self-end mb-1 transition"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#DFA1C8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <span>Lire plus</span>
              <span className="text-lg">&#8594;</span>
            </button>
          </div>
        ))}
      </div>

      {/* Bouton voir tous les projets */}
      <div className="flex justify-center mt-8">
        {projectsData.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            style={{ backgroundColor: "#FCBEF8" }}
            className="text-white px-8 py-2 rounded-3xl font-semibold shadow hover:brightness-90 transition"
          >
            {showAll ? "Masquer les projets" : "Voir tous les projets"}
          </button>
        )}
      </div>

      {/* Modal */}
      {modalOpen && selected !== null && (
        <ProjectModal project={visibleProjects[selected]} onClose={closeModal} />
      )}
    </section>
  );
}
