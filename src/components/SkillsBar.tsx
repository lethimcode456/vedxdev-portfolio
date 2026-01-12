"use client";

const skills = [
  "TypeScript",
  "JavaScript",
  "CSS",
  "Tailwind CSS",
  "HTML",
  "Node.js",
  "Express",
  "MongoDB",
  "MongoDB Atlas",
  "SQLite3",
  "SQL",
  "GSAP",
  "Three.js",
  "Lenis",
  "React",
  "Supabase",
  "Figma",
  "Git",
  "GitHub",
  "Vercel",
  "AWS",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "GraphQL",
  "Prisma",
  "Docker",
  "Firebase",
  "WebSockets",
  "Socket.io",
  "Jest",
  "Testing",
  "UI/UX Design",
  "Prototyping",
  "Adobe XD",
  "Photoshop",
  "Postman",
  "CI/CD",
  "GitHub Actions",
  "Netlify",
  "Cloudflare",
  "Nginx",
  "Linux",
  "Webpack",
  "Vite",
];

// Fisher-Yates shuffle algorithm for randomizing
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle once at module level
const shuffledSkills = shuffleArray(skills);

export default function SkillsBar() {
  // Duplicate the array to create seamless loop
  const duplicatedSkills = [...shuffledSkills, ...shuffledSkills];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="overflow-hidden py-2">
        <div className="flex animate-scroll-slow whitespace-nowrap">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="mx-6 text-xs text-gray-400 font-light"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
