import { useEffect } from "react";
import "../styles/Skills.css";

export default function Skills() {

  const skillGroups = [
    {
      title: "Lenguajes",
      icon: "💻",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "PHP", level: 70 },
        { name: "SQL", level: 90 },
        { name: "Bash", level: 70 },
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 80 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Bootstrap", level: 70 },
      ],
    },
    {
      title: "Backend / Infraestructura",
      icon: "⚙️",
      skills: [
        { name: "Node.js + Express", level: 70 },
        { name: "Docker", level: 85 },
        { name: "Nginx", level: 70 },
      ],
    },
    {
      title: "Bases de datos",
      icon: "🗄️",
      skills: [
        { name: "SQL Server", level: 70 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      title: "Ciberseguridad",
      icon: "🛡️",
      skills: [
        { name: "Kali Linux", level: 85 },
        { name: "Metasploit", level: 70 },
        { name: "Wireshark", level: 70 },
        { name: "OSINT", level: 70 },
      ],
    },
  ];

  /*
  ============================================
  Scroll reveal animation
  ============================================
  */

  useEffect(() => {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });

      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

  }, []);

  return (

    <section id="Skills" className="skills-section">

      <div className="skills-container reveal">

        <h2 className="skills-title">
          Skills
        </h2>

        <div className="skills-grid">

          {skillGroups.map((group) => (

            <div key={group.title} className="skill-card reveal">

              <h3 className="skill-group-title">
                <span className="skill-icon">
                  {group.icon}
                </span>
                {group.title}
              </h3>

              <ul className="skill-list">

                {group.skills.map((skill) => (

                  <li key={skill.name} className="skill-item">

                    <div className="skill-header">

                      <span className="skill-name">
                        {skill.name}
                      </span>

                      <span className="skill-stars">
                        {"★".repeat(Math.round(skill.level / 20))}
                        {"☆".repeat(5 - Math.round(skill.level / 20))}
                      </span>

                    </div>

                    <div className="skill-bar-container">

                      <div
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>

                    </div>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}