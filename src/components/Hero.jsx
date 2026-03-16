import { Typewriter } from "react-simple-typewriter";
import Terminal from "./Terminal";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-grid"></div>

      <div className="hero-container">

        <h1 className="hero-title glow-text">
          Anderson Ortiz Muñoz
        </h1>

        <h2 className="hero-subtitle">
          Ingeniero de Sistemas • Ciberseguridad • Pentesting • Desarrollo
        </h2>

        <p className="hero-terminal">
          &gt;{" "}
          <Typewriter
            words={[
              "scanning vulnerabilities...",
              "analyzing network traffic...",
              "securing infrastructures...",
              "building secure APIs..."
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>

        <p className="hero-description">
          Backend Engineer enfocado en sistemas seguros, automatización
          y arquitectura de software.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="hero-btn-primary">
            Ver Proyectos
          </a>

          <a
            href="/cv-andersec.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-secondary"
          >
            Descargar CV
          </a>

        </div>

        {/* TERMINAL DENTRO DEL HERO */}
        <div className="hero-terminal-wrapper">
          <Terminal />
        </div>

      </div>

    </section>
  );
}