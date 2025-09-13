"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "stagger";

interface RevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

export default function Reveal({ 
  children, 
  animation = "fadeUp", 
  delay = 0,
  duration = 0.6 
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setInView(true), delay * 1000);
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = "transition-all ease-out";
    const durationClass = `duration-[${duration * 1000}ms]`;
    
    switch (animation) {
      case "fadeUp":
        return `${baseClass} ${durationClass} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
      case "fadeIn":
        return `${baseClass} ${durationClass} ${inView ? "opacity-100" : "opacity-0"}`;
      case "slideLeft":
        return `${baseClass} ${durationClass} ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`;
      case "slideRight":
        return `${baseClass} ${durationClass} ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`;
      case "scale":
        return `${baseClass} ${durationClass} ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`;
      case "stagger":
        return `${baseClass} ${durationClass} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`;
      default:
        return `${baseClass} ${durationClass} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
    }
  };

  return (
    <div ref={ref} className={getAnimationClass()}>
      {children}
    </div>
  );
}


