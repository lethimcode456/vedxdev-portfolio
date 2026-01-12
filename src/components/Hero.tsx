"use client";
import { useState } from "react";

const brands = [
  "Incurify",
  "TechFlow",
  "DesignLab",
];

export default function Hero() {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  return (
    <div className="w-full h-full relative pb-12 px-8">
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col">
        {/* Top right - Brands I've worked with */}
        <div className="absolute top-0 right-8 lg:right-0">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Brands I&apos;ve worked with
            </h2>
            <div className="space-y-0">
              {brands.map((brand, index) => (
                <div key={index}>
                  <div
                    className={`inline-block py-2 px-2 -mx-2 transition-all duration-300 cursor-pointer ${
                      hoveredBrand === index ? "bg-white" : "bg-transparent"
                    }`}
                    onMouseEnter={() => setHoveredBrand(index)}
                    onMouseLeave={() => setHoveredBrand(null)}
                  >
                    <span className="text-gray-400 text-sm md:text-base font-light">
                      {brand}
                    </span>
                  </div>
                  {index < brands.length - 1 && (
                    <div className="h-px bg-gray-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left side - vedXdev and description */}
        <div className="flex-1 flex items-end">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              vedXdev
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
              I&apos;m a designer as well as a full stack developer focusing on creating cutting-edge frontend experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
