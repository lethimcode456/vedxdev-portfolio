export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container-padding mx-auto max-w-6xl py-6 text-center text-xs text-gray-400">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>© 2025 vedXdev. All rights reserved.</span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Analytics enabled
          </span>
        </div>
      </div>
    </footer>
  );
}


