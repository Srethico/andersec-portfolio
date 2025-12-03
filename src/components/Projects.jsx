import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Web Pentesting Lab",
      description:
        "Laboratorio local para prácticas de hacking ético, escaneo, explotación y análisis de vulnerabilidades.",
      tech: ["Kali Linux", "OWASP ZAP", "Burp Suite"],
      link: "https://github.com/AnderSec",
    },
    {
      title: "AnderSec Portfolio",
      description:
        "Sitio web profesional construido con React, enfocado en branding personal y experiencia de usuario.",
      tech: ["React", "Vite", "EmailJS"],
      link: "https://github.com/AnderSec",
    },
    {
      title: "API de Gestión Empresarial",
      description:
        "Backend modular para empresas, con autenticación JWT, roles y CRUD avanzado.",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      link: "https://github.com/AnderSec",
    },
    {
      title: "DevOps Automation",
      description:
        "Pipeline CI/CD con Docker, GitHub Actions y despliegue automatizado.",
      tech: ["Docker", "GitHub Actions", "Nginx"],
      link: "https://github.com/AnderSec",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Proyectos</h2>
      <p className="projects-subtitle">Lo que he construido y sigo mejorando</p>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div className="project-tech">
              {p.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a href={p.link} target="_blank" className="project-btn">
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
