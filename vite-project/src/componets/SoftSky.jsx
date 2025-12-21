import { useEffect, useState } from "react";

export const SoftSky = () => {
const [particles, setParticles] = useState([]);

  useEffect(() => {
    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  const generateParticles = () => {
    const count = Math.floor(
      (window.innerWidth * window.innerHeight) / 20000
    );

    const newParticles = [];

    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 3 + 1.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.2,
        duration: Math.random() * 10 + 10,
      });
    }

    setParticles(newParticles);
  };

  return (
    <div className="fixed inset-0 cosmic-light pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="nebula-particle animate-nebula"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            left: p.x + "%",
            top: p.y + "%",
            opacity: p.opacity,
            animationDuration: p.duration + "s",
          }}
        />
      ))}
    </div>
  );
};
