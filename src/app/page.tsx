import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen page-enter-active">
      <Hero />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}
