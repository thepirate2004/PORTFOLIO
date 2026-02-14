import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import BackgroundFX from "./BackgroundFX";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact Page" }
];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Layout({ children }) {
  const location = useLocation();
  const hasMotion = useMemo(() => !prefersReducedMotion(), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: hasMotion ? "smooth" : "auto" });
  }, [location.pathname, hasMotion]);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll(".reveal"));

    if (revealTargets.length === 0) {
      return undefined;
    }

    if (!hasMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, ref) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          ref.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [location.pathname, hasMotion]);

  useEffect(() => {
    const refractionTargets = Array.from(document.querySelectorAll(".refract"));

    if (refractionTargets.length === 0) {
      return undefined;
    }

    const onMove = (event) => {
      const node = event.currentTarget;
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      node.style.setProperty("--mx", `${x.toFixed(2)}%`);
      node.style.setProperty("--my", `${y.toFixed(2)}%`);
    };

    const onLeave = (event) => {
      event.currentTarget.style.setProperty("--mx", "50%");
      event.currentTarget.style.setProperty("--my", "50%");
    };

    refractionTargets.forEach((node) => {
      node.addEventListener("pointermove", onMove);
      node.addEventListener("pointerleave", onLeave);
    });

    return () => {
      refractionTargets.forEach((node) => {
        node.removeEventListener("pointermove", onMove);
        node.removeEventListener("pointerleave", onLeave);
      });
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!hasMotion) {
      return undefined;
    }

    const layers = Array.from(document.querySelectorAll(".parallax-layer"));

    if (layers.length === 0) {
      return undefined;
    }

    const onPointerMove = (event) => {
      const offsetX = event.clientX / window.innerWidth - 0.5;
      const offsetY = event.clientY / window.innerHeight - 0.5;

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 8);
        layer.style.setProperty("--px", `${(offsetX * depth).toFixed(2)}px`);
        layer.style.setProperty("--py", `${(offsetY * depth).toFixed(2)}px`);
      });
    };

    const resetLayers = () => {
      layers.forEach((layer) => {
        layer.style.setProperty("--px", "0px");
        layer.style.setProperty("--py", "0px");
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", resetLayers);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", resetLayers);
    };
  }, [hasMotion]);

  return (
    <div className="app-shell">
      <BackgroundFX hasMotion={hasMotion} />

      <header className="top-nav glass-card reveal">
        <NavLink className="brand" to="/">
          ADITHYA.DEV
        </NavLink>

        <nav aria-label="Primary" className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-wrap">{children}</main>
    </div>
  );
}
