export default function AboutPage() {
  return (
    <div className="route-page">
      <header className="route-header glass-card reveal">
        <p className="section-kicker">About</p>
        <h1>Computer Science Student | App & Web Developer</h1>
        <p>Product intuition, clean architecture, and premium interface execution.</p>
      </header>

      <section className="about-grid">
        <article className="glass-card about-card reveal">
          <h2>How I Build</h2>
          <p>
            I focus on building clean, scalable, and user-friendly applications.
            I enjoy working on both frontend and backend systems, ensuring smooth performance and structured architecture.
            I prioritize maintainable code, responsive design, and practical problem-solving.
          </p>
          <p>
            Typical ownership includes architecture decisions, component systems, CI quality gates, and progressive release
            strategies with clear observability.
          </p>
        </article>

        <article className="glass-card focus-card reveal">
          <h3>Current Focus</h3>
          <ul>
            <li>Flutter application development</li>
            <li>REST API integration</li>
            <li>Database-driven web applications</li>
            <li>Improving problem-solving & DSA</li>
            <li>Learning scalable architecture patterns</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
