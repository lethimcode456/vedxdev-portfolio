"use client";
import Magnet from "@/components/Magnet";
import { useMemo } from "react";

export default function Navbar() {
  const navItems = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#blog", label: "Blog" },
      { href: "#contact", label: "Contact Me" },
    ],
    []
  );

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-40">
      <nav className={`pointer-events-auto mx-auto mt-4 flex justify-center`}>
        <div className="bg-white/[0.02] border border-white/10 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300 inline-flex items-center gap-10">
          {navItems.map((i) => (
            <Magnet key={i.href} intensity={1.5}>
              <button 
                onClick={() => scrollToSection(i.href)} 
                className="inline-block text-gray-200 hover:text-white text-[16px] cursor-pointer"
              >
                {i.label}
              </button>
            </Magnet>
          ))}
        </div>
      </nav>
    </div>
  );
}


