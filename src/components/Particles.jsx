import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 900;

    const centerX = canvas.width / 2;
    const particles = [];

    for (let i = 0; i < 180; i++) {
      particles.push({
        x: centerX + (Math.random() - 0.5) * 500,
        y: canvas.height - Math.random() * 250,

        radius: Math.random() * 1.5 + 0.5,

        speedY: Math.random() * 0.35 + 0.15,
        speedX: (Math.random() - 0.5) * 0.15,

        opacity: Math.random() * 0.5 + 0.15,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y -= particle.speedY;
        particle.x += particle.speedX;

        // Recreate particle when it goes above the screen
        if (particle.y < -20) {
          particle.y = canvas.height + 20;
          particle.x = centerX + (Math.random() - 0.5) * 500;
        }

        // Wrap horizontally
        if (particle.x < 0) {
          particle.x = canvas.width;
        }

        if (particle.x > canvas.width) {
          particle.x = 0;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`;
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });
    }

    let animationId;

    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 900;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}