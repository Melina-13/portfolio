import { useState } from "react";
import ProjectModal from "./ProjectModal";
import projetTitle from "../assets/icons/mes_projets.png";

// Import des images projets -- adapte les chemins à tes fichiers !
import imgTwitter from "../assets/images/tweeter.WebP";
import imgLovly from "../assets/images/tweeter.WebP";
import imgCinemascoop from "../assets/images/tweeter.WebP";
import imgQuizzPHP from "../assets/images/tweeter.WebP";

// Exemple de contenu des projets, à personnaliser
const projectsData = [
  {
    id: 1,
    title: "Mini Twitter",
    image: imgTwitter,
    short: "Mini réseau social façon Twitter, APIs et responsive.",
    description: "Mini Twitter reprend l’expérience utilisateur du vrai réseau avec authentification, tweets, gestion profil.",
    skills: ["Html", "Css", "JavaScript", "ApiRest"],
    github: "https://github.com/...",
    moreImg: imgTwitter,
  },
  {
    id: 2,
    title: "LovLy – Plateforme de Rencontres",
    image: imgLovly,
    short: "Site web inspiré de Meetic, plateforme sécurisée.",
    description: "Projet complet : interface intuitive, sécurité, matching, frontend & backend.",
    skills: ["Html", "Css", "JavaScript", "Php", "Sql"],
    github: "https://github.com/...",
    moreImg: imgLovly,
  },
  {
    id: 3,
    title: "Cinemascoop",
    image: imgCinemascoop,
    short: "Gestionnaire de films, séances et abonnements.",
    description: "Recherche de films, gestion de séances, historique et abonnés.",
    skills: ["React", "Tailwind", "Nodejs"],
    github: "https://github.com/...",
    moreImg: imgCinemascoop,
  },
  {
    id: 4,
    title: "Quizz PHP",
    image: imgQuizzPHP,
    short: "Application pour tester ses connaissances PHP.",
    description: "Quizz interactif avec correction en direct et statistiques.",
    skills: ["Html", "Css", "JavaScript", "Php"],
    github: "",
    moreImg: imgQuizzPHP,
  }
  // Ajoute tous les autres projets ici avec les imports/images correspondants !
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Affiche 3 projets par défaut, tous si showAll
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  // Gestion modal
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
      <div className="flex flex-row flex-wrap gap-8 justify-center">
        {visibleProjects.map((p, idx) => (
          <div
            key={p.id}
            className="relative bg-white rounded-3xl shadow-lg w-96 min-h-72 p-6 flex flex-col justify-between hover:shadow-2xl transition cursor-pointer"
          >
            {/* Image principale */}
            <img src={p.image} alt={p.title}
              className="rounded-xl w-full h-36 object-cover mb-4 border-2 border-blue-100" />
            {/* Titre + résumé */}
            <h3 className="font-black text-xl text-pink-700 mb-3">{p.title}</h3>
            <div className="text-pink-700 text-lg mb-4">{p.short}</div>
            {/* Badges compétences */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.skills.map(s =>
                <span key={s} className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm font-bold">{s}</span>
              )}
            </div>
            {/* Bouton Lire plus */}
            <button
              onClick={() => openModal(idx)}
              className="flex items-center gap-2 bg-pink-300 hover:bg-pink-400 px-6 py-2 rounded-2xl font-semibold text-white shadow transition mt-auto"
            >
              <span>Lire plus</span>
              <span className="text-xl">&#8594;</span>
            </button>
          </div>
        ))}
      </div>
      {/* -- Bouton voir tous les projets -- */}
      <div className="flex justify-center mt-8">
        {projectsData.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={showAll
              ? "bg-pink-200 text-pink-700 px-8 py-2 rounded-3xl font-semibold shadow hover:bg-pink-300 transition"
              : "bg-pink-400 text-white px-8 py-2 rounded-3xl font-semibold shadow hover:bg-pink-500 transition"}
          >
            {showAll ? "Masquer les projets" : "Voir tous les projets"}
          </button>
        )}
      </div>
      {/* Modal */}
      {modalOpen && selected !== null && (
        <ProjectModal
          project={visibleProjects[selected]}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
