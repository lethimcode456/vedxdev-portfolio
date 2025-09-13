"use client";
import { useRef, useEffect, type CSSProperties } from "react";

type NoiseProps = {
  patternAlpha?: number; // 1..255
  borderRadius?: number;
  blendMode?: CSSProperties["mixBlendMode"];
  className?: string;
  style?: CSSProperties;
};

// Animated film-grain noise overlay using canvas
export default function Noise({
  patternAlpha = 15,
  borderRadius = 0,
  blendMode = "soft-light",
  className,
  style,
}: NoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number | null = null;
    const size = 256; // small tile, scaled by CSS for performance
    const draw = () => {
      canvas.width = size;
      canvas.height = size;
      const imageData = ctx.createImageData(size, size);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = Math.max(1, Math.min(255, patternAlpha));
      }
      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [patternAlpha]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        imageRendering: "pixelated",
        borderRadius,
        mixBlendMode: blendMode,
        ...style,
      }}
      aria-hidden
    />
  );
}


