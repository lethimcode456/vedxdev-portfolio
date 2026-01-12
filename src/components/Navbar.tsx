"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Get time in IST (India Standard Time - Asia/Kolkata)
      const istTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(now);
      
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80   border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex ">
        
        <div className="text-gray-400 text-sm">
          Nagpur, IN <span className="text-white font-mono">{time || "--:--:--"}</span>
        </div>
      </div>
    </nav>
  );
}
