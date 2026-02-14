const projects = [
  {
    title: "QuantumDash Analytics",
    copy: "Real-time telemetry dashboard with edge caching and anomaly detection for IoT fleets.",
    stack: ["Next.js", "WebSockets", "Redis"],
    preview: "preview-a",
    span: "span-lg"
  },
  {
    title: "Pulse Commerce",
    copy: "Composable storefront with instant checkout and adaptive recommendation engine.",
    stack: ["React", "Node", "Stripe"],
    preview: "preview-b",
    span: "span-sm"
  },
  {
    title: "Orbit Docs",
    copy: "Collaborative editor with presence cursors, revision graph, and role-governed workflows.",
    stack: ["TypeScript", "CRDT", "Prisma"],
    preview: "preview-c",
    span: "span-sm"
  },
  {
    title: "Nexus FinOps",
    copy: "Financial operations suite automating reconciliation, invoice intelligence, and forecasting.",
    stack: ["Vue", "Python", "PostgreSQL"],
    preview: "preview-d",
    span: "span-lg"
  }
];

export default function ProjectsPage() {
  return (
    <div className="route-page">
      <header className="route-header glass-card reveal">
        <p className="section-kicker">Selected Work</p>
        <h1>Asymmetric Project Grid</h1>
        <p>High-contrast previews, layered blur states, and interactive glass lift on hover.</p>
      </header>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className={`project-card glass-card refract reveal ${project.span}`}>
            <div className={`project-preview ${project.preview}`} />
            <h3>{project.title}</h3>
            <p>{project.copy}</p>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
