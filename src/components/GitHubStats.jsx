import "../styles/GitHubStats.css";

export default function GitHubStats() {

  return (

    <section className="github-section">

      <h2 className="github-title">
        Actividad en GitHub
      </h2>

      <p className="github-subtitle">
        Estadísticas de mis proyectos y tecnologías
      </p>

      <div className="github-stats">

        <img
          src="https://github-readme-stats.vercel.app/api?username=Srethico&show_icons=true&theme=tokyonight"
          alt="GitHub stats"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Srethico&layout=compact&theme=tokyonight"
          alt="Top languages"
        />

      </div>

    </section>

  );

}