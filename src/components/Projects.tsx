"use client";
import Reveal from "./Reveal";
import ProjectImage from "./ProjectImage";

const projects = [
  {
    title: "Bol Bharat",
    desc: "A twitter clone for INDIA.",
    stack: ["Mongodb","Expressjs","Reactjs","Nodejs"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    fallbackColor: "from-green-500 to-teal-500",
    icon: "🚀",
  },
  {
    title: "project 2",
    desc: "project 2",
    stack: ["Nextjs","Typescript","React"],
    image: "",
    fallbackColor: "from-green-500 to-teal-500",
    icon: "🚀",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-4 py-16">

      <Reveal animation="fadeUp" delay={0.2}>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Projects</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {projects.map((p, index) => (
          <Reveal key={p.title} animation="fadeUp" delay={index * 0.1}>
            <div className="h-full project-card group">
              {/* Project Image */}
              <ProjectImage
                fallbackColor={p.fallbackColor}
                title={p.title}
                icon={p.icon}
              />
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow bg-white/[0.02] backdrop-blur-sm">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#F4CE14] transition-colors duration-300">{p.title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-grow">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.stack.map((s) => (
                    <span 
                      key={s} 
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300 bg-white/[0.05] hover:border-[#F4CE14]/50 hover:bg-white/[0.08] transition-colors duration-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
