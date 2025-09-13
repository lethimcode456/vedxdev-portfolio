"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LandingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Animated logo/initial */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center animate-float">
          {/* <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 bg-white/10 flex items-center justify-center"> */}
  <Image
    src="/profile.jpg"
    alt="Vedant"
    width={64}
    height={64}
    className="object-cover w-full h-full"
  />
          </div>
          
          {/* Animated text */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-white animate-fade-in-up">
              vedXdev
            </h1>
            <p className="text-gray-400 text-sm animate-fade-in-up-delay">
              Developer & Designer
            </p>
          </div>
          
          {/* Loading dots */}
          <div className="flex justify-center mt-6 space-x-1">
            <div className="w-2 h-2 bg-[#F4CE14] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#F4CE14] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-[#F4CE14] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
