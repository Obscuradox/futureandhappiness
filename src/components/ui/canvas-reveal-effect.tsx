"use client";
import React, { useRef, useEffect, useState } from "react";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  containerClassName?: string;
  colors?: number[][];
  dotSize?: number;
  opacities?: number[];
}

export const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({
  animationSpeed = 0.4,
  containerClassName = "bg-black",
  colors = [[64, 19, 68], [165, 55, 253]],
  dotSize = 3,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      time += animationSpeed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = dotSize * 6;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          const wave1 = Math.sin((x * 0.01) + (time * 0.02)) * 0.5 + 0.5;
          const wave2 = Math.cos((y * 0.01) + (time * 0.025)) * 0.5 + 0.5;
          const wave3 = Math.sin(((x + y) * 0.008) + (time * 0.03)) * 0.5 + 0.5;

          const opacity = wave1 * wave2 * wave3;
          const opacityIndex = Math.floor(opacity * (opacities.length - 1));
          const finalOpacity = opacities[opacityIndex] || 0;

          if (finalOpacity > 0.1) {
            const colorIndex = Math.floor(opacity * colors.length);
            const color = colors[colorIndex] || colors[0];

            ctx.beginPath();
            ctx.arc(x, y, dotSize * opacity, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${finalOpacity})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationSpeed, colors, dotSize, opacities]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${containerClassName} ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      style={{
        mixBlendMode: "screen",
      }}
    />
  );
};