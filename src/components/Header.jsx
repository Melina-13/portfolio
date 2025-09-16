import { useState } from "react";
import menuIcon from "../assets/icons/menu-icon.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-30 pt-5">
      {/* Barre de navigation */}
      <nav className="w-full flex items-center justify-between px-4 py-5">
        {/* Hamburger (mobile) */}
        <button
          className="md:hidden"
          aria-label="Ouvrir/Fermer le menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menuIcon} alt="menu hamburger" className="w-8 h-8" />
        </button>

        {/* Menu horizontal desktop */}
        <ul className="hidden md:flex gap-8 text-custom-pink font-bold text-md md:text-lg mx-auto">
          <li><a href="#about">A PROPOS</a></li>
          <li><a href="#projects">PROJETS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#footer">CONTACT</a></li>
        </ul>
      </nav>

      {/* Menu mobile */}
      <ul
        className={`absolute top-0 left-0 w-60 h-screen flex flex-col gap-8 pt-24 pl-6 text-custom-pink font-bold text-lg
        bg-pink-100 shadow-xl transition-transform duration-200 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:hidden`}
      >
        <li>
          <button
            onClick={() => setIsOpen(false)}
            className="mb-6 self-start bg-transparent p-0"
            aria-label="Fermer le menu"
          >
            <img src={menuIcon} alt="fermer menu" className="w-8 h-8" />
          </button>
        </li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>A PROPOS</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>PROJETS</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>SKILLS</a></li>
        <li><a href="#footer" onClick={() => setIsOpen(false)}>CONTACT</a></li>
      </ul>

      {/* Overlay pour fermer le menu mobile au clic extérieur */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          style={{ background: "transparent" }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
