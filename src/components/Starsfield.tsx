"use client";
import * as React from "react";

type StarsfieldProps = {
  starCount?: number;
  speed?: number;
  spread?: number;
  focal?: number;
  twinkle?: number;
  trail?: number;
  starSize?: number;
  bgColor?: string;
  starColor?: string;
  className?: string;
};

function parseColor(input?: string) {
  const c = (input || "#000000").trim().toLowerCase();
  if (c[0] === "#") {
    const h = c.slice(1);
    if (h.length === 3 || h.length === 4) {
      const r = parseInt(h[0] + h[0], 16);
      const g = parseInt(h[1] + h[1], 16);
      const b = parseInt(h[2] + h[2], 16);
      const a = h.length === 4 ? parseInt(h[3] + h[3], 16) / 255 : 1;
      return { r, g, b, a };
    }
    if (h.length === 6 || h.length === 8) {
      const r = parseInt(h.slice(0, 2), 16);
      const g = parseInt(h.slice(2, 4), 16);
      const b = parseInt(h.slice(4, 6), 16);
      const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
      return { r, g, b, a };
    }
  }
  const m = c.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+)\s*)?\)/);
  if (m) {
    const r = Math.max(0, Math.min(255, Number(m[1])));
    const g = Math.max(0, Math.min(255, Number(m[2])));
    const b = Math.max(0, Math.min(255, Number(m[3])));
    const a = m[4] !== undefined ? Math.max(0, Math.min(1, Number(m[4]))) : 1;
    return { r, g, b, a };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}

type Star = {
  x: number;
  y: number;
  z: number;
  px: number | null;
  py: number | null;
  phase: number;
  twinkle: number;
  size: number;
};

export default function Starsfield(props: StarsfieldProps) {
  const {
    starCount = 350,
    speed = 0.3,
    spread = 2,
    focal = 0.8,
    twinkle = 0.7,
    trail = 0.15,
    starSize = 0.5,
    bgColor = "#000000",
    starColor = "#FFFFFF",
    className,
  } = props;

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const starsRef = React.useRef<Star[]>([]);
  const rafRef = React.useRef<number | null>(null);
  const settingsRef = React.useRef({ starCount, speed, spread, focal, twinkle, trail, starSize, bgColor, starColor });
  settingsRef.current = { starCount, speed, spread, focal, twinkle, trail, starSize, bgColor, starColor };

  const resize = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const w = Math.max(1, parent.clientWidth);
    const h = Math.max(1, parent.clientHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const ctxWithReset = ctx as CanvasRenderingContext2D & { resetTransform?: () => void };
      if (typeof ctxWithReset.resetTransform === "function") {
        ctxWithReset.resetTransform();
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }, []);

  const initStars = React.useCallback(() => {
    const { starCount, spread, starSize } = settingsRef.current;
    const arr: Star[] = new Array(starCount).fill(0).map(() => ({
      x: (Math.random() * 2 - 1) * spread,
      y: (Math.random() * 2 - 1) * spread,
      z: Math.random(),
      px: null,
      py: null,
      phase: Math.random() * Math.PI * 2,
      twinkle: 0.5 + Math.random() * 1.5,
      size: starSize * (0.6 + Math.random() * 0.8),
    }));
    starsRef.current = arr;
  }, []);

  const respawn = (s: Star, spread: number, starSize: number) => {
    s.x = (Math.random() * 2 - 1) * spread;
    s.y = (Math.random() * 2 - 1) * spread;
    s.z = 1;
    s.px = null;
    s.py = null;
    s.phase = Math.random() * Math.PI * 2;
    s.twinkle = 0.5 + Math.random() * 1.5;
    s.size = starSize * (0.6 + Math.random() * 0.8);
  };

  React.useEffect(() => {
    resize();
    initStars();
    let last = performance.now();
    const loop = () => {
      const now = performance.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h / 2;
      const { speed, spread, focal, twinkle, trail, starSize, bgColor, starColor } = settingsRef.current;
      const bg = parseColor(bgColor);
      const sc = parseColor(starColor);
      ctx.globalCompositeOperation = "source-over" as GlobalCompositeOperation;
      const clearA = (1 - Math.min(0.98, Math.max(0, trail))) * bg.a;
      ctx.fillStyle = `rgba(${bg.r},${bg.g},${bg.b},${clearA})`;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter" as GlobalCompositeOperation;
      const f = Math.min(w, h) * focal;
      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];
        s.z -= dt * speed * 0.7;
        if (s.z <= 0.02) {
          respawn(s, spread, starSize);
        }
        const invz = 1 / s.z;
        const x2d = s.x * f * invz + cx;
        const y2d = s.y * f * invz + cy;
        if (x2d < -20 || x2d > w + 20 || y2d < -20 || y2d > h + 20) {
          respawn(s, spread, starSize);
          continue;
        }
        const twv = Math.max(0, Math.min(1, 0.65 + twinkle * 0.35 * Math.sin(s.phase + now * 0.0015 * s.twinkle)));
        const size = Math.max(0.3, s.size * invz * 0.9);
        const alpha = Math.min(1, (0.15 + twv * 0.9) * sc.a);
        if (s.px !== null && s.py !== null) {
          ctx.lineWidth = Math.min(3, size);
          ctx.strokeStyle = `rgba(${sc.r},${sc.g},${sc.b},${alpha})`;
          ctx.beginPath();
          ctx.moveTo(x2d, y2d);
          const k = Math.min(1.5, 0.6 + speed * 0.6);
          const tx = s.px + (x2d - s.px) * k;
          const ty = s.py + (y2d - s.py) * k;
          ctx.lineTo(tx, ty);
          ctx.stroke();
        }
        ctx.fillStyle = `rgba(${sc.r},${sc.g},${sc.b},${alpha})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        s.px = x2d;
        s.py = y2d;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [initStars, resize]);

  React.useEffect(() => {
    initStars();
  }, [starCount, initStars]);

  return (
    <div className={className} style={{ width: "100%", height: "100%", background: bgColor, overflow: "hidden" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}


