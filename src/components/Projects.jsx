import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Web Pentesting Lab",
      description:
        "Laboratorio local para prácticas de hacking ético, escaneo, explotación y análisis de vulnerabilidades.",
      tech: ["Kali Linux", "OWASP ZAP", "Burp Suite"],
      link: "https://github.com/Srethico",
    },
    {
      title: "AnderSec Portafolio",
      description:
        "Sitio web profesional construido con React, enfocado en branding personal y experiencia de usuario.",
      tech: ["React", "Vite", "EmailJS"],
      link: "https://github.com/Srethico/mi-portafolio.git",
    },
    {
      title: "API de Gestión Empresarial",
      description:
        "Backend modular para empresas, con autenticación JWT, roles y CRUD avanzado.",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      link: "https://github.com/Srethico/API-Gestion-Empresarial.git",
    },
    {
      title: "DevOps Automation",
      description:
        "Pipeline CI/CD con Docker, GitHub Actions y despliegue automatizado.",
      tech: ["Docker", "GitHub Actions", "Nginx"],
      link: "https://github.com/Srethico",
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

            <a href={p.link} target="_blank" className="project-btn github-btn">
              <svg className="github-icon" viewBox="0 0 256 250" width="20" height="20" fill="currentColor">
                <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Z"/>
              </svg>
              GitHub
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}
