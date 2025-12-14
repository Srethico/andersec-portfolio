import "../styles/Architecture.css";

export default function Architecture() {
  const stacks = [
    {
      title: "Frameworks Backend",
      items: [
        "Laravel (MVC, Eloquent, APIs REST)",
        "FastAPI (arquitectura modular)",
        "Express.js",
        "Node.js",
      ],
    },
    {
      title: "Frameworks Frontend",
      items: [
        "React (SPA, component-driven)",
        "Vite",
        "CSS moderno / UI personalizada",
      ],
    },
    {
      title: "Arquitectura de Software",
      items: [
        "Arquitectura por capas",
        "MVC y separación de responsabilidades",
        "RESTful APIs",
        "RBAC (Role-Based Access Control)",
        "Autenticación JWT",
      ],
    },
    {
      title: "DevOps & Entorno",
      items: [
        "Docker",
        "CI/CD con GitHub Actions",
        "Deploy en Vercel",
        "Gestión de variables de entorno",
      ],
    },
  ];

  return (
    <section id="architecture" className="architecture-section">
      <h2 className="architecture-title">Frameworks & Arquitectura</h2>
      <p className="architecture-subtitle">
        Frameworks modernos aplicados con criterio de ingeniería
      </p>

      <div className="architecture-grid">
        {stacks.map((stack, index) => (
          <div className="architecture-card" key={index}>
            <h3>{stack.title}</h3>
            <ul>
              {stack.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
