export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full md:w-3/4 min-h-[400px] p-8 flex flex-col">
        {/* Bouton retour en haut à droite */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-rose-baby hover:text-rose-600 text-3xl font-bold cursor-pointer"
          title="Retour"
        >
          &#10005;
        </button>

        {/* Titre du projet */}
        <h2 className="font-black text-2xl text-rose-baby mb-5">{project.title}</h2>

        {/* Image principale */}
        <img
          src={project.moreImg}
          alt={project.title}
          className="rounded-xl w-full h-48 object-cover mb-6"
        />

        {/* Description */}
        <div className="text-blue-pastel mb-7 text-lg">{project.description}</div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.skills.map((s) => (
            <span
              key={s}
              className="bg-pink-200 text-white px-3 py-1 rounded-full text-sm font-bold"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Lien Github */}
        <div className="flex flex-row justify-end items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-baby hover:text-rose-600 transition"
              title="Voir sur Github"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.84 10.94c.55.1.75-.24.75-.53v-2.01c-3.21.7-3.89-1.55-3.89-1.55-.5-1.29-1.22-1.64-1.22-1.64-.99-.68.07-.67.07-.67 1.09.08 1.67 1.12 1.67 1.12.97 1.66 2.54 1.18 3.16.9.09-.7.38-1.18.68-1.44-2.56-.29-5.26-1.28-5.26-5.67 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.03 0 0 .98-.31 3.2 1.17a11.01 11.01 0 0 1 5.82 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.58.24 2.74.12 3.03.74.8 1.19 1.82 1.19 3.07 0 4.4-2.7 5.38-5.27 5.67.39.33.73.98.73 1.98v2.93c0 .29.19.63.76.52A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
