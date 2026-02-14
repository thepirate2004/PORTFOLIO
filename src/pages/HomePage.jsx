import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const roles = [
  "Web Developer",
  "Blockchain / Web3 Developer",
  "Flutter App Developer",
  "Technical Product Builder",
  "Cybersecurity Analyst"
];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HomePage() {
  const [roleText, setRoleText] = useState(roles[0]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setRoleText(roles[0]);
      return undefined;
    }

    let active = true;
    let timeoutId = 0;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const runTyping = () => {
      const role = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      setRoleText(role.slice(0, charIndex));

      let delay = deleting ? 42 : 88;

      if (!deleting && charIndex === role.length) {
        deleting = true;
        delay = 1400;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 320;
      }

      if (active) {
        timeoutId = window.setTimeout(runTyping, delay);
      }
    };

    runTyping();

    return () => {
      active = false;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="route-page">
      <section className="hero glass-card reveal">

        <h1 className="glitch-title">
          Adithya <span className="name-accent">J Nair</span>
        </h1>
        <p className="subtitle">
          <span>{roleText}</span>
          <span className="typing-cursor" aria-hidden="true">
            |
          </span>
        </p>
        <p className="hero-copy">
          I design resilient digital products with premium frontend execution and production-grade full-stack architecture.
        </p>

        <div className="hero-actions">
          <Link className="btn btn-primary" to="/projects">
            View Projects
          </Link>
          <Link className="btn btn-ghost" to="/contact">
            Contact
          </Link>
        </div>

        <div className="hero-stats">
          <article>
            <span>2+</span>
            <p>Years of Building</p>
          </article>
          <article>
            <span>10+</span>
            <p>Projects Delivered</p>
          </article>
          <article>
            <span>99.9%</span>
            <p>Platform Uptime</p>
          </article>
        </div>
      </section>

      <section className="quick-links">
        <Link to="/skills" className="quick-card glass-card reveal">
          <p className="section-kicker">Explore</p>
          <h2>Skill Matrix</h2>
          <p>Interactive glass orbs with refraction hover and stack depth.</p>
        </Link>

        <Link to="/experience" className="quick-card glass-card reveal">
          <p className="section-kicker">Review</p>
          <h2>Timeline</h2>
          <p>High-impact engineering history with measurable outcomes.</p>
        </Link>

        <Link to="/about" className="quick-card glass-card reveal">
          <p className="section-kicker">Know Me</p>
          <h2>About + Focus</h2>
          <p>Operating principles, systems mindset, and execution strategy.</p>
        </Link>
      </section>
    </div>
  );
}
