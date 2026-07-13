import React, { useEffect, useState } from "react";
import "../../styles/background.css";

export function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const particles = Array.from({ length: 30 });

  return (
    <div className="animated-bg">

      {/* Cursor Glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
      />

      {/* Aurora */}
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>

      {/* Grid */}
      <div className="bg-grid"></div>

      {/* Particles */}
      {particles.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${12 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}