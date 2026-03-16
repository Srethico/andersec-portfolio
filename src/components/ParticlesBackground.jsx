/*
=====================================================
PARTICLES BACKGROUND
Fondo animado con partículas tecnológicas
=====================================================
*/

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /*
    Crear partículas
    */

    for (let i = 0; i < 80; i++) {

      particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        size: Math.random() * 2,

        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3

      });

    }

    function animate() {

      ctx.clearRect(0,0,canvas.width,canvas.height);

      particles.forEach(p => {

        p.x += p.speedX;
        p.y += p.speedY;

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);

        ctx.fillStyle = "rgba(30,144,255,0.5)";
        ctx.fill();

      });

      requestAnimationFrame(animate);

    }

    animate();

  }, []);

  return (

    <canvas
      ref={canvasRef}
      className="particles-canvas"
    />

  );

}