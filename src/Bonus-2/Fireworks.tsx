import anime from "animejs";
import React from "react";
import { useState } from "react";
import "./Fireworks.css";

const launchHeight = 700;

function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Firework() {
  const [fireworks, setFireworks] = useState<{ x: number; y: number }[]>([]);

  const createFirework = (x: number, y: number) => {
    const projectile = document.createElement("div");
    projectile.classList.add("projectile");
    document.body.appendChild(projectile);
    projectile.style.left = `${x}px`;
    projectile.style.top = `${y}px`;

    anime({
      targets: projectile,
      translateY: -launchHeight,
      duration: 1200,
      easing: "easeOutQuad",
      complete: () => {
        projectile.remove();
        createBurst(x, y - launchHeight);
      },
    });
  };

  const createBurst = (x: number, y: number) => {
    for (let i = 0; i < 20; i++) {
      const burstParticle = document.createElement("div");
      burstParticle.classList.add("burst");
      document.body.appendChild(burstParticle);

      burstParticle.style.left = `${x}px`;
      burstParticle.style.top = `${y}px`;

      const randomColor = getRandomColor();
      burstParticle.style.backgroundColor = randomColor;

      anime({
        targets: burstParticle,
        translateX: {
          value: anime.random(-100, 100),
          duration: 800,
        },
        translateY: {
          value: anime.random(-100, 100),
          duration: 800,
        },
        opacity: {
          value: 0,
          duration: 800,
        },
        easing: "easeOutQuad",
        complete: () => burstParticle.remove(),
      });
    }
  };

  const handleLaunchClick = () => {
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight - 50;
    setFireworks([...fireworks, { x, y }]);
    createFirework(x, y);
  };

  return (
    <div className="section firework">
      <button type="button" id="launchButton" onClick={handleLaunchClick}>
        Launch Firework
      </button>
    </div>
  );
}
