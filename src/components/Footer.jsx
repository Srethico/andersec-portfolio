import "../styles/Footer.css";

export default function Footer() {

  // Email ofuscado — ensamblado en runtime para evitar scraping de bots
  function handleEmail(e) {
    e.preventDefault();
    window.location.href = "mailto:" + "ethicoander" + "@" + "protonmail.com";
  }

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Marca */}
        <div className="footer-brand">

          <img
            src="/logo.svg"
            alt="AnderSec Logo"
            className="footer-logo"
          />

          <h3>AnderSec</h3>

          <p className="footer-tagline">
            Arquitectura • Ciberseguridad • Tecnología
          </p>

          <p className="footer-brand-desc">
            Soluciones backend seguras, arquitectura limpia y desarrollo orientado a resultados.
          </p>

        </div>

        {/* Navegación */}
        <nav className="footer-nav">

          <h4>Navegación</h4>

          <ul className="footer-links">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>

        </nav>

        {/* Redes */}
        <div className="footer-socials">

          <h4>Conecta</h4>

          <div className="footer-icons">

            {/* GitHub */}
            <a
              href="https://github.com/Srethico"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="ri-github-fill"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anderson-ortiz-mu%C3%B1oz-25b4b63b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>

            {/* Email */}
            <a
              href="#contact"
              onClick={handleEmail}
              aria-label="Correo"
            >
              <i className="ri-mail-send-fill"></i>
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AnderSec — Ingeniería, Seguridad y Desarrollo
        </p>
      </div>

    </footer>
  );
}