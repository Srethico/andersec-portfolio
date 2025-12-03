import { useEffect } from "react";

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

  // --- Scroll Reveal ---
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="Skills" style={styles.section}>
      <div style={styles.container} className="reveal">
        <h2 style={styles.title}>Skills</h2>

        <div style={styles.groupsContainer}>
          {skillGroups.map((group) => (
            <div key={group.title} style={styles.group} className="skill-card reveal">
              <h3 style={styles.groupTitle}>
                <span style={styles.icon}>{group.icon}</span> {group.title}
              </h3>

              <ul style={styles.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill.name} style={styles.skillItem}>
                    <div style={styles.skillHeader}>
                      <span style={styles.skillName}>{skill.name}</span>

                      <span style={styles.stars}>
                        {"★".repeat(Math.round(skill.level / 20))}
                        {"☆".repeat(5 - Math.round(skill.level / 20))}
                      </span>
                    </div>

                    <div style={styles.barContainer}>
                      <div
                        className="progress-bar"
                        style={{ ...styles.barFill, width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Scroll reveal */
        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tarjeta glass con hover neon */
        .skill-card {
          backdrop-filter: blur(12px);
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 25px rgba(30, 144, 255, 0.55),
                      0 0 10px rgba(0, 255, 255, 0.3);
        }

        /* Barra animada */
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #1E90FF, #00eaff);
          border-radius: 50px;
          transition: width 1.3s ease;
          box-shadow: 0 0 15px rgba(0, 200, 255, .6);
        }
      `}</style>
    </section>
  );
}

// --- ESTILOS ---
const styles = {
  section: {
    padding: "100px 0",
    backgroundColor: "#050505",
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "auto",
  },
  title: {
    fontSize: "34px",
    color: "#1E90FF",
    marginBottom: "50px",
    textAlign: "center",
    textShadow: "0 0 20px rgba(30,144,255,0.6)",
  },
  groupsContainer: {
    display: "grid",
    gap: "40px",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  },
  group: {
    background: "rgba(255,255,255,0.06)",
    borderRadius: "16px",
    padding: "25px",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  groupTitle: {
    fontSize: "22px",
    color: "#1E90FF",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textShadow: "0 0 12px rgba(30,144,255,0.8)",
  },
  icon: {
    fontSize: "26px",
  },
  skillList: { listStyle: "none", padding: 0, margin: 0 },
  skillItem: { marginBottom: "25px" },
  skillHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
  },
  skillName: {
    color: "#e0e0e0",
    fontSize: "16px",
    fontWeight: 500,
  },
  stars: {
    color: "#FFD700",
    fontSize: "14px",
    letterSpacing: "2px",
  },
  barContainer: {
    width: "100%",
    background: "#0e0e0e",
    height: "10px",
    borderRadius: "40px",
    overflow: "hidden",
    border: "1px solid rgba(30,144,255,0.3)",
  },
  barFill: {
    height: "100%",
    borderRadius: "50px",
  },
};
