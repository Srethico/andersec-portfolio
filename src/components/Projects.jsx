import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Web Pentesting Lab",
      type: "Ciberseguridad · Ethical Hacking",
      description:
        "Laboratorio local para prácticas reales de hacking ético, escaneo, explotación y análisis de vulnerabilidades en un entorno controlado.",
      responsibilities: [
        "Escaneo de servicios y puertos",
        "Análisis de vulnerabilidades",
        "Pruebas de explotación controladas",
        "Hardening y mitigación",
      ],
      tech: ["Kali Linux", "OWASP ZAP", "Burp Suite", "Nmap", "Metasploit"],
      link: "https://github.com/Srethico",
    },

    

    {
      title: "Sistema de Facturación Electrónica (DIAN)",
      type: "Backend · Facturación · Cumplimiento Normativo",
      
      description:
        "Sistema backend de facturación electrónica conforme a la normativa DIAN (UBL 2.1), con generación de XML, firma electrónica, control de estados, persistencia de CUFE y generación de PDF representativo con QR.",
      responsibilities: [
        "Diseño de arquitectura backend por capas",
        "Generación de XML UBL 2.1 conforme a DIAN",
        "Cálculo y persistencia del CUFE",
        "Firma electrónica XAdES-BES con certificado digital",
        "Validación de XML contra esquemas XSD oficiales",
        "Generación de PDF representativo con QR DIAN",
        "Gestión de estados del ciclo de facturación",
        "Persistencia transaccional y control de errores",
      ],

      tech: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Alembic",
      "ReportLab",
      "XML / UBL 2.1",
      "XAdES-BES",
      "Docker",
    ],

      github: "https://github.com/Srethico/FACTURACION_ELECTRONICA",
    },

    {
      title: "AnderSec – Portafolio Profesional",
      type: "Frontend · Branding Técnico",
      description:
        "Portafolio profesional para mostrar proyectos reales de ingeniería de sistemas, ciberseguridad y desarrollo de software con enfoque moderno y claro.",
      responsibilities: [
        "Diseño UI moderno y responsive",
        "Componentización con React",
        "Arquitectura limpia de frontend",
        "Integración de EmailJS y WhatsApp",
        "Optimización para despliegue",
        "Deploy en Vercel",
      ],
      tech: ["React", "Vite", "CSS", "EmailJS", "Vercel"],
      github: "https://github.com/Srethico/andersec-portfolio.git",
      demo: "https://andersec.vercel.app",
    },
    {
      title: "API de Gestión Empresarial",
      type: "Backend · Arquitectura Modular",
      description:
        "Backend profesional orientado a entornos empresariales, con seguridad, control de acceso y escalabilidad desde el diseño.",
      responsibilities: [
        "Arquitectura por capas (routes, services, repository)",
        "Autenticación JWT",
        "Control de acceso por roles (RBAC)",
        "CRUD modular por dominio",
        "Middlewares de seguridad",
        "Logging y rate limiting",
      ],
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "JWT",
        "RBAC",
      ],
      github: "https://github.com/Srethico/API-Gestion-Empresarial.git",
    },
    {
      title: "DevOps Automation",
      type: "DevOps · CI/CD",
      description:
        "Automatización de despliegues con pipelines CI/CD para entornos modernos.",
      responsibilities: [
        "Dockerización de aplicaciones",
        "Pipelines CI/CD",
        "Automatización de despliegue",
        "Configuración de servidores",
      ],
      tech: ["Docker", "GitHub Actions", "Nginx", "Linux"],
      link: "https://github.com/Srethico",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Proyectos</h2>
      <p className="projects-subtitle">
        Sistemas reales, arquitectura clara y foco en seguridad
      </p>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.title}</h3>

            {p.type && <span className="project-type">{p.type}</span>}

            <p>{p.description}</p>

            {p.responsibilities && (
              <ul className="project-responsibilities">
                {p.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            )}

            <div className="project-tech">
              {p.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="project-actions">
  {(p.github || p.link) && (
    <a
      href={p.github || p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn github-btn"
    >
      <svg
        className="github-icon"
        viewBox="0 0 256 250"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Z" />
      </svg>
      GitHub
    </a>
  )}

  {p.demo && (
    <a
      href={p.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn demo-btn"
    >
      Demo
    </a>
  )}
</div>

          </div>
        ))}
      </div>
    </section>
  );
}
