"use client";
import Magnet from "@/components/Magnet";
import { useMemo, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-40">
      <nav className={`pointer-events-auto mx-auto mt-4`}>
        <div className="relative py-3">
          <div className="hidden md:flex items-center justify-center gap-10">
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
          <button
            aria-label="Open Menu"
            className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span className="i-[hamburger]">☰</span>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-3">
            {navItems.map((i) => (
              <Magnet key={i.href} intensity={1.5}>
                <button 
                  onClick={() => scrollToSection(i.href)} 
                  className="inline-block text-gray-300 hover:text-white cursor-pointer text-left"
                >
                  {i.label}
                </button>
              </Magnet>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}


