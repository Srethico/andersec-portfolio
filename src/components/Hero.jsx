export default function Hero() {
  return (
    <section id="hero" style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.title}>Anderson Ortiz Muñoz</h1>

        <h2 style={styles.subtitle}>
          Ingeniero de Sistemas | Ciberseguridad | Desarrollo de software
        </h2>

        <p style={styles.text}>
          Especialista en desarrollo web, seguridad informática,
          análisis de vulnerabilidades y automatización con Python.
          Construyendo soluciones modernas, seguras y escalables.
        </p>

        <div style={styles.buttons}>
          <a href="#projects" style={styles.btnPrimary}>Ver Proyectos</a>
          <a href="#contact" style={styles.btnOutline}>Descargar</a>
        </div>

      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "calc(100vh - 80px)",  
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "0px",
    textAlign: "center",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "20px",
    color: "#1E90FF",
    marginBottom: "20px",
  },

  text: {
    fontSize: "18px",
    maxWidth: "700px",
    margin: "0 auto",
    opacity: 0.85,
    lineHeight: 1.6,
  },

  buttons: {
    marginTop: "40px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },

  btnPrimary: {
    padding: "12px 24px",
    background: "#1E90FF",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
  },

  btnOutline: {
    padding: "12px 24px",
    border: "1px solid #1E90FF",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#fff",
  }
};
