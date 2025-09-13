"use client";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

type MagnetProps = {
  children: ReactNode;
  intensity?: number; // 0..2
};

export default function Magnet({ children, intensity = 1 }: MagnetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHoveringRef = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useAnimationFrame(() => {
    const point = lastPoint.current;
    const el = containerRef.current;
    if (!isHoveringRef.current || !point || !el) return;

    const rect = el.getBoundingClientRect();
    const localX = point.x - rect.left - rect.width / 2;
    const localY = point.y - rect.top - rect.height / 2;
    const targetX = localX * intensity;
    const targetY = localY * intensity;

    x.set(targetX);
    y.set(targetY);
  });

  return (
    <motion.div
      ref={containerRef}
      style={{ x, y, display: "inline-block", willChange: "transform", pointerEvents: "auto" }}
      onMouseEnter={() => { isHoveringRef.current = true; }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
        lastPoint.current = null;
        x.set(0);
        y.set(0);
      }}
      onMouseMove={(e) => {
        lastPoint.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerMove={(e) => {
        lastPoint.current = { x: e.clientX, y: e.clientY };
      }}
    >
      {children}
    </motion.div>
  );
}


