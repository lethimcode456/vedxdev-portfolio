"use client";
import Starsfield from "@/components/Starsfield";

export default function AnimatedBackground() {
  return (
    <Starsfield className="fixed inset-0 -z-10 pointer-events-none" starCount={450} speed={0.25} spread={2} focal={0.95} twinkle={0.6} trail={0.2} starSize={0.45} bgColor="#000000" starColor="rgba(255,255,255,0.85)" />
  );
}


