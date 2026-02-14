const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", title: "Java" },
      { icon: "https://cdn.simpleicons.org/python", title: "Python" },
      { icon: "https://cdn.simpleicons.org/javascript", title: "JavaScript" },
      { icon: "https://cdn.simpleicons.org/dart", title: "Dart" }
    ]
  },
  {
    name: "Frontend Development",
    skills: [
      { icon: "https://cdn.simpleicons.org/react", title: "React" },
      { icon: "https://cdn.simpleicons.org/html5", title: "HTML5" },
      { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", title: "CSS3" }
    ]
  },
  {
    name: "Mobile Development",
    skills: [
      { icon: "https://cdn.simpleicons.org/flutter", title: "Flutter" }
    ]
  },
  {
    name: "Backend & Database",
    skills: [
      { icon: "https://cdn.simpleicons.org/nodedotjs", title: "Node.js" },
      { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", title: "MySQL" },
      { icon: "https://img.icons8.com/m_sharp/512/settings.png", title: "REST API" }
    ]
  },
  {
    name: "Tools & Environment",
    skills: [
      { icon: "https://cdn.simpleicons.org/github", title: "Git & GitHub" },
      { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", title: "VS Code" },
      { icon: "https://cdn.simpleicons.org/androidstudio", title: "Android Studio" },
      { icon: "https://cdn.simpleicons.org/kalilinux", title: "Kali Linux" }
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="route-page">
      <header className="route-header glass-card reveal">
        <p className="section-kicker">Core Stack</p>
        <h1>Interactive Skill Matrix</h1>
        <p>Expertise categorized by domain, presented through interactive glass orbs.</p>
      </header>

      {skillCategories.map((category) => (
        <section key={category.name} className="skill-category-section reveal">
          <h2 className="category-title">{category.name}</h2>
          <div className="skills-grid">
            {category.skills.map((skill) => (
              <article key={skill.title} className="skill-orb glass-card refract reveal">
                <span className="skill-icon">
                  <img src={skill.icon} alt={skill.title} width="32" height="32" />
                </span>
                <h3>{skill.title}</h3>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
