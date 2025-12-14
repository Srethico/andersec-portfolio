import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ==== Scroll + sección activa ==== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "Skills", "projects", "Contact", "architecture"];
      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offset =
            el.offsetTop - (window.innerWidth > 768 ? 200 : 120);

          if (window.scrollY >= offset) current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic en un link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    ["hero", "Inicio"],
    ["about", "Sobre mí"],
    ["Skills", "Skills"],
    ["projects", "Proyectos"],
    ["Contact", "Contacto"],
    ["architecture", "Arquitectura/Frameworks"],
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="logo-container">
          <img src="/logo.svg" alt="AnderSec Logo" className="logo-img" />
          <h2 className="logo-text">
            Ander<span>Sec</span>
          </h2>
        </div>

        {/* Menú Desktop */}
        <ul className="menu desktop-menu">
          {menuItems.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Iconos Desktop */}
        <div className="social-icons desktop-icons">
          <a
            href="https://github.com/Srethico"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon github"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/573132791203?text=Hola%20Anderson%2C%20revis%C3%A9%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20oportunidad%20profesional."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="icon whatsapp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Botón Hamburguesa (solo móvil) */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Overlay oscuro */}
      <div
        className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menú Móvil Lateral */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h2 className="logo-text">
            Ander<span>Sec</span>
          </h2>
          <button
            className="close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX size={24} />
          </button>
        </div>

        <ul className="mobile-menu-list">
          {menuItems.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-social-icons">
          <a
            href="https://github.com/Srethico"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon github"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon linkedin"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://wa.me/573132791203?text=Hola%20Anderson%2C%20revis%C3%A9%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20oportunidad%20profesional."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="icon whatsapp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </>
  );
}