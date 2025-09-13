"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import { 
  CLogo,
  JavaScriptLogo,
  TypeScriptLogo,
  CSSLogo,
  NextJSLogo,
  ExpressLogo,
  TailwindLogo,
  NodeJSLogo,
  MongoLogo,
  SupabaseLogo
} from "./SkillLogos";

const skillCategories: Array<{
  title: string;
  skills: Array<{
    name: string;
    icon: any;
    type: "svg" | "image";
  }>;
}> = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: "/c.png", type: "image" },
      { name: "C++", icon: "/c++.png", type: "image" },
      { name: "JavaScript", icon: "/js.png", type: "image" },
      { name: "TypeScript", icon: "/ts.png", type: "image" },
      { name: "HTML", icon: "/html.png", type: "image" },
      { name: "CSS", icon: "/css.png", type: "image" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "/react.png", type: "image" },
      { name: "Next.js", icon: "/nextjs.png", type: "image" },
      { name: "Express", icon: ExpressLogo, type: "svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss.png", type: "image" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/nodejs.png", type: "image" },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "/mongodb.png", type: "image" },
      { name: "Supabase", icon: SupabaseLogo, type: "svg" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-4 py-16">

      <Reveal animation="fadeUp" delay={0.2}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
      </Reveal>
      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <Reveal key={category.title} animation="slideLeft" delay={categoryIndex * 0.1}>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-300">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => {
                  return (
                    <Reveal 
                      key={`${category.title}-${skill.name}-${index}`} 
                      animation="scale" 
                      delay={index * 0.05}
                    >
                      <div className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-[#F4CE14] transition-all duration-300 hover:scale-105">
                        {skill.type === "image" ? (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                        ) : (
                          <skill.icon className="w-4 h-4" />
                        )}
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
