import "../styles/Architecture.css";

export default function Architecture() {
  const stacks = [
    {
      title: "Frameworks Backend",
      items: [
        "FastAPI (APIs REST de alto rendimiento)",
        "SQLAlchemy (ORM, modelos transaccionales)",
        "Pydantic (validación estricta de datos)",
        "Alembic (migraciones controladas)",
        "Python 3.12",
      ],
    },
    {
      title: "Frameworks Frontend",
      items: [
        "React (SPA, arquitectura por componentes)",
        "Vite (build rápido y moderno)",
        "CSS moderno / UI personalizada",
        "Consumo de APIs REST",
      ],
    },
    {
      title: "Arquitectura de Software",
      items: [
        "Arquitectura por capas (API / Services / Domain / Persistence)",
        "Separación de responsabilidades (SRP)",
        "RESTful APIs bien definidas",
        "Flujos de negocio basados en estados",
        "Persistencia de eventos críticos (XML, CUFE, firma)",
        "Diseño orientado a cumplimiento normativo",
      ],
    },
    {
      title: "Seguridad & Cumplimiento",
      items: [
        "Firma electrónica XAdES-BES",
        "Gestión de certificados digitales (.p12)",
        "Generación y persistencia de CUFE",
        "Validación XSD (normativa DIAN)",
        "QR oficial de validación",
        "Preparación para entornos regulados",
      ],
    },
    {
      title: "DevOps & Entorno",
      items: [
        "Docker (entornos reproducibles)",
        "CI/CD con GitHub Actions",
        "Gestión segura de variables de entorno",
        "Deploy frontend en Vercel",
        "Preparación para despliegue backend productivo",
      ],
    },
  ];

  return (
    <section id="architecture" className="architecture-section">
      <h2 className="architecture-title">Frameworks & Arquitectura</h2>
      <p className="architecture-subtitle">
        Arquitecturas y frameworks aplicados en sistemas reales, con foco en
        seguridad, cumplimiento normativo y escalabilidad.
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
