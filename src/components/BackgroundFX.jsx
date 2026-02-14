import { useEffect, useRef } from "react";

const glyphs = "01{}[]<>/\\|$#*+-=;~".split("");

export default function BackgroundFX({ hasMotion }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!hasMotion || !canvasRef.current) {
      return undefined;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops = [];
    const fontSize = 15;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * (height / fontSize));
    };

    const draw = () => {
      context.fillStyle = "rgba(2, 6, 15, 0.16)";
      context.fillRect(0, 0, width, height);
      context.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let index = 0; index < columns; index += 1) {
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = index * fontSize;
        const y = drops[index] * fontSize;
        const hue = Math.random() > 0.84 ? 270 : 188;
        const alpha = Math.random() * 0.45 + 0.3;

        context.fillStyle = `hsla(${hue}, 100%, 74%, ${alpha})`;
        context.fillText(glyph, x, y);

        if (y > height && Math.random() > 0.974) {
          drops[index] = 0;
        }

        drops[index] += Math.random() * 0.75 + 0.35;
      }
    };

    resize();
    const rainTimer = window.setInterval(draw, 65);

    window.addEventListener("resize", resize);

    return () => {
      window.clearInterval(rainTimer);
      window.removeEventListener("resize", resize);
    };
  }, [hasMotion]);

  return (
    <div className="background" aria-hidden="true">
      <canvas ref={canvasRef} id="code-rain" />
      <div className="bg-gradient" />
      <div className="bg-nebula nebula-a parallax-layer" data-depth="16" />
      <div className="bg-nebula nebula-b parallax-layer" data-depth="10" />
      <div className="bg-circuit" />
      <div className="bg-noise" />
    </div>
  );
}
