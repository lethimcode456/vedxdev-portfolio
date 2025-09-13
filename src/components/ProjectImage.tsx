"use client";
import { useState } from "react";

interface ProjectImageProps {
  fallbackColor: string;
  title: string;
  icon?: string;
}

export default function ProjectImage({ fallbackColor, title, icon = "📱" }: ProjectImageProps) {
  const [imageError] = useState(true);

  if (imageError) {
    return (
      <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${fallbackColor} flex items-center justify-center`}>
        <div className="text-center text-white/80">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-2xl">{icon}</span>
          </div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs opacity-70">Project Preview</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
          Preview
        </div>
      </div>
    );
  }

  return (
    <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${fallbackColor}`}>
     
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
        Preview
      </div>
      <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">
        {title}
      </div>
    </div>
  );
}
