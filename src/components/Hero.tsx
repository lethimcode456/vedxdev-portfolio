"use client";

export default function Hero() {
  return (
    <div className="w-full h-screen flex items-end pb-20 px-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        {/* Left side - vedXdev and description */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            vedXdev
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
            I&apos;m a designer as well as a full stack developer focusing on creating cutting-edge frontend experiences.
          </p>
        </div>

        {/* Right side - Brands I've worked with */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Brands I&apos;ve worked with
          </h2>
          <div className="space-y-4">
            {/* Placeholder for brands - you can add actual brand logos/names here */}
            <div className="text-gray-400 text-lg" >Incurify</div>
          </div>
        </div>
      </div>
    </div>
  );
}
