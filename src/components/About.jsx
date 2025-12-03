import { useEffect, useRef } from "react";

export default function About() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      requestAnimationFrame(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0px)";
      });
    }
  }, []);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Sobre mí</h2>

        {/* AGREGAMOS ID PARA RESPONSIVE */}
        <div
          id="about-card"
          ref={cardRef}
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow =
              "0 0 18px 3px rgba(30,144,255,0.25)";
            e.currentTarget.style.border = "1px solid #1E90FF55";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.border = "1px solid #1e1e1e";
          }}
        >
          <div className="photo-wrapper">
            <img
              src="/img/perfil_empresa.png"
              alt="Foto profesional"
              className="photo"
            />
          </div>

          <div className="text-content" style={styles.text}>
            <h3 style={styles.name}>Anderson Ortiz Muñoz</h3>
            <p style={styles.role}>
              Ingeniero de Sistemas • Ciberseguridad • Desarrollo • DevOps
            </p>

            <p style={styles.description}>
              Profesional centrado en el desarrollo tecnológico y la seguridad
              informática, con experiencia en análisis, despliegue y protección
              de infraestructuras.
            </p>

            <p style={styles.description}>
              Disfruto crear soluciones eficientes, seguras y escalables, desde
              backend, frontend o DevOps.
            </p>

            <a href="/cv_anderson.pdf" download style={styles.cvButton}>
              Descargar CV
            </a>
          </div>
        </div>
      </div>

      {/* -------- estilos responsivos -------- */}
      <style>{`
        /* Mobile y tablets */
        @media (max-width: 900px) {
          #about-card {
            flex-direction: column !important;
            text-align: center !important;
            padding: 25px !important;
          }

          #about-card .photo-wrapper {
            width: 160px !important;
            height: 160px !important;
            margin: auto !important;
          }

          #about-card .photo {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }

          #about-card .text-content {
            margin-top: 20px;
          }
        }

        /* Celulares pequeños */
        @media (max-width: 600px) {
          #about-card {
            padding: 20px !important;
          }

          #about-card .photo-wrapper {
            width: 140px !important;
            height: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* -------- estilos base -------- */

const styles = {
  section: {
    padding: "100px 0",
    backgroundColor: "#0a0a0a",
  },
  container: {
    width: "90%",
    maxWidth: "1100px",
    margin: "auto",
  },
  title: {
    fontSize: "32px",
    color: "#1E90FF",
    textAlign: "center",
    marginBottom: "50px",
  },

  card: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    background: "#121212",
    borderRadius: "14px",
    border: "1px solid #1e1e1e",
    opacity: 0,
    transform: "translateY(40px)",
    transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
  },

  text: { flex: 1 },

  name: { fontSize: "26px", color: "#e0e0e0", marginBottom: "5px" },
  role: { fontSize: "18px", color: "#1E90FF", marginBottom: "20px" },
  description: {
    fontSize: "16px",
    color: "#cfcfcf",
    lineHeight: "1.7",
    marginBottom: "15px",
  },

  cvButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 26px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(30,144,255,0.4)",
    color: "#1E90FF",
    textDecoration: "none",
  },
};
