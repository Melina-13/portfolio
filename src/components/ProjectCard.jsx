export default function ProjectCard({ title, image, description, skills, onClick }) {
  return (
    <div
      className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-4 w-full max-w-3xl hover:shadow-2xl transition cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-40 h-40 mb-4 md:mb-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl border-2 border-blue-100"
        />
      </div>

      {/* Contenu */}
      <div className="flex flex-col md:ml-4 flex-1">
        <h3
          className="font-black text-xl mb-2"
          style={{ color: "rgb(187, 107, 171)" }}
        >
          {title}
        </h3>
        <p className="text-blue-pastel text-base mb-3">{description}</p>

        {/* Badges compétences */}
        {skills && (
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((s) => (
              <span
                key={s}
                className="bg-pink-200 text-white px-2 py-1 rounded-full text-xs font-bold"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Bouton Lire plus */}
        {onClick && (
          <button
            className="self-end flex items-center gap-2 px-4 py-1 rounded-2xl font-semibold text-rose-baby transition hover:text-pink-300"
          >
            <span>Lire plus</span>
            <span className="text-lg">&#8594;</span>
          </button>
        )}
      </div>
    </div>
  );
}
