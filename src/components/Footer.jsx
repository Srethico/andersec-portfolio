export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / Marca */}
        <div className="footer-brand">
          <img src="/logo.svg" alt="AnderSec Logo" className="footer-logo" />
          <h3>AnderSec</h3>
          <p className="footer-tagline">Arquitectura • Ciberseguridad • Tecnología</p>
        </div>

        {/* Navegación */}
        <ul className="footer-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#Contact">Contacto</a></li>
        </ul>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a href="#"><i className="ri-github-fill"></i></a>
          <a href="#"><i className="ri-linkedin-box-fill"></i></a>
          <a href="#"><i className="ri-mail-send-fill"></i></a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} AnderSec. Todos los derechos reservados.
      </p>
    </footer>
  );
}
