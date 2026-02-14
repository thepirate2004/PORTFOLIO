const timeline = [
  {
    role: "Flutter Developer | Academic & Personal Projects",
    copy: "Developed cross-platform mobile applications using Flutter and Dart. Integrated REST APIs and implemented structured state management. Designed responsive UI components with clean architecture principles. Built QR-based system prototype with modular design for future scalability"
  },
  {
    role: "Full-Stack Development Exposure",
    copy: "Designed relational database schemas using MySQL. Implemented CRUD operations and optimized SQL queries. Connected frontend applications to backend services via REST APIs"
  },
  {
    role: "Technical Contributor & Volunteer",
    copy: "Assisted peers in debugging application issues and resolving technical problems. Collaborated in academic project development and system design discussions. Actively participated in volunteer initiatives, demonstrating teamwork and leadership"
  }
];

export default function ExperiencePage() {
  return (
    <div className="route-page">
      <header className="route-header glass-card reveal">
        <p className="section-kicker">Experience</p>

        <p>Growing developer with experience in building structured, scalable applications through academic and personal projects.</p>
      </header>

      <section className="timeline glass-card reveal">
        {timeline.map((item) => (
          <article key={item.role} className="timeline-item">
            <h3>{item.role}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
