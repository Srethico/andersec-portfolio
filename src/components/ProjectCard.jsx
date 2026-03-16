import "../styles/Projects.css";
import { techIcons } from "../utils/techIcons";

export default function ProjectCard({ project }) {

  return (
    <div className="project-card">

      <div className="project-header">
        <h3>{project.title}</h3>

        {project.type && (
          <span className="project-type">
            {project.type}
          </span>
        )}
      </div>

      <p className="project-description">
        {project.description}
      </p>

      {project.responsibilities && (
        <ul className="project-responsibilities">
          {project.responsibilities.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}

      <div className="project-tech">

        {project.tech.map((tech, index) => {

          const Icon = techIcons[tech];

          return (
            <span className="tech-badge" key={index}>

              {Icon && <Icon className="tech-icon" />}

              {tech}

            </span>
          );

        })}

      </div>

      <div className="project-actions">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn github-btn"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn demo-btn"
          >
            Demo
          </a>
        )}

      </div>

    </div>
  );
}