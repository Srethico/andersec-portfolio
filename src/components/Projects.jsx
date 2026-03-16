import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "../styles/Projects.css";

export default function Projects() {

  return (

    <section id="projects" className="projects-section">

      <h2 className="projects-title">
        Proyectos
      </h2>

      <p className="projects-subtitle">
        Sistemas reales, arquitectura clara y foco en seguridad
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}

      </div>

    </section>

  );
}