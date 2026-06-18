import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars =
      "アァイィウヴエカキクケコサシスセソタチツテト0123456789";

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff66";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text =
          chars[Math.floor(Math.random() * chars.length)];

        ctx.fillText(
          text,
          i * fontSize,
          rainDrops[i] * fontSize
        );

        if (
          rainDrops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          rainDrops[i] = 0;
        }

        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20"
    />
  );
}