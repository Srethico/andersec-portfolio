import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  /* ==== Detectar scroll para navbar sticky ==== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "Skills", "projects", "Contact"];
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop =
            el.offsetTop - (window.innerWidth > 768 ? 250 : 150);

          if (window.scrollY >= offsetTop) current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src="/logo.svg" alt="AnderSec" className="logo-img" />
        <h2 className="logo-text">AnderSec</h2>
      </div>

      <ul className="menu">
        <li>
          <a
            href="#hero"
            className={activeSection === "hero" ? "active" : ""}
          >
            Inicio
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            Sobre mí
          </a>
        </li>

        <li>
          <a
            href="#Skills"
            className={activeSection === "Skills" ? "active" : ""}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Proyectos
          </a>
        </li>

        <li>
          <a
            href="#Contact"
            className={activeSection === "Contact" ? "active" : ""}
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
