import contactTitle from "../assets/icons/contact.png";
import logoEmail from "../assets/icons/email.png";
import logoLinkedIn from "../assets/icons/linkedin.WebP";
import logoGitHub from "../assets/icons/github_logo.WebP";
import wave from "../assets/icons/wave.svg";

const footerLinks = [
  {
    img: logoEmail,
    title: "Email",
    url: "mailto:melina.mouri@epitech.eu",
  },
  {
    img: logoLinkedIn,
    title: "Mélina Mouri",
    url: "https://www.linkedin.com/in/melina-mouri",
  },
  {
    img: logoGitHub,
    title: "Melina-13",
    url: "https://github.com/Melina-13",
  },
];

export default function Footer() {
  const handleOpen = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <footer
      className="relative w-full px-0 pt-0 pb-0"
      style={{
        backgroundImage: "url('/portfolio/background2.jpg')", // <-- chemin pour GitHub Pages
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Wave tout en haut */}
      <div className="absolute top-0 left-0 w-full pointer-events-none select-none z-10">
        <img src={wave} alt="wave" className="w-full h-[85px] md:h-[100%] block" />
      </div>

      <div className="pt-[80px]">
        {/* Titre CONTACT */}
        <div className="mb-8 flex justify-center">
          <img
            src={contactTitle}
            alt="CONTACT"
            className="w-[210px] sm:w-[320px] md:w-[520px] mx-auto mt-40"
          />
        </div>

        {/* Texte */}
        <p className="mb-8 text-center text-[#bb6bab] text-base sm:text-lg font-semibold max-w-xl mx-auto">
          Une question, une opportunité ou un projet à discuter ?<br />
          N'hésitez pas à me contacter, je vous répondrai rapidement.
        </p>

        {/* Boutons contact */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row gap-6 max-w-4xl mb-8 items-center">
            {footerLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleOpen(link.url)}
                className="
                  group relative bg-white rounded-3xl shadow-lg overflow-hidden
                  w-[54px] h-[54px] sm:w-[72px] sm:h-[72px] flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  hover:w-[180px] sm:hover:w-[210px] hover:justify-start hover:px-7
                  cursor-pointer outline-none focus:ring-2 focus:ring-pink-400
                "
                style={{ minWidth: "54px" }}
                aria-label={link.title}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  group-hover:static group-hover:translate-x-0 group-hover:translate-y-0
                  flex items-center justify-center transition-all duration-300 w-full h-full">
                  <img
                    src={link.img}
                    alt={link.title}
                    className="transition-all duration-300
                      w-6 h-6 sm:w-7 sm:h-7
                      group-hover:w-5 group-hover:h-5
                      sm:group-hover:w-6 sm:group-hover:h-6 mx-auto"
                  />
                </div>
                <span
                  className="font-bold text-sm sm:text-base text-[#bb6bab]
                    opacity-0 group-hover:opacity-100 ml-3 whitespace-nowrap transition-all duration-300"
                >
                  {link.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="w-full py-5 px-2 text-center text-xs sm:text-sm font-semibold"
          style={{ color: "#bb6bab" }}
        >
          <span>© 2025 Mélina Mouri — Tous droits réservés.</span>
          <span className="mx-2">|</span>
          <a
            href="/mentions-legales"
            className="underline hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#bb6bab" }}
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
