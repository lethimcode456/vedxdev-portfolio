"use client";
import { useMemo, useState } from "react";
import Reveal from "./Reveal";

type Post = { title: string; date: string; excerpt: string; tags: string[] };

const allPosts: Post[] = [
  { title: "Designing in the dark", date: "2025-08-10", excerpt: "Thoughts on dark UI systems.", tags: ["design", "dark"] },
  { title: "Edge-first Next.js", date: "2025-07-02", excerpt: "Patterns for fast UX.", tags: ["nextjs", "performance"] },
  { title: "Micro-interactions", date: "2025-06-12", excerpt: "Small details, big feel.", tags: ["ux", "animation"] },
];

export default function Blog() {
  const [tag, setTag] = useState<string>("all");
  const tags = useMemo(() => ["all", ...Array.from(new Set(allPosts.flatMap((p) => p.tags)))], []);
  const posts = allPosts.filter((p) => tag === "all" || p.tags.includes(tag));

  return (
    <section id="blog" className="w-full max-w-5xl mx-auto py-24">
      <Reveal animation="fadeUp" delay={0.2}>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Blog</h2>
      </Reveal>
      
      <Reveal animation="fadeUp" delay={0.4}>
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tags.map((t, index) => (
            <Reveal key={t} animation="scale" delay={index * 0.05}>
              <button
                onClick={() => setTag(t)}
                className={`text-xs rounded-full px-3 py-1 border transition-all duration-300 hover:scale-105 ${tag === t ? "border-white/40 text-white" : "border-white/10 text-gray-400 hover:text-white"}`}
              >
                #{t}
              </button>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <div className="space-y-6">
        {posts.map((p, index) => (
          <Reveal key={p.title} animation="slideLeft" delay={index * 0.1}>
            <article className="border-b border-white/10 pb-6 hover:bg-white/[0.02] p-4 rounded-lg transition-all duration-300">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <div className="text-xs text-gray-500 mt-1">{new Date(p.date).toDateString()}</div>
              <p className="text-sm text-gray-400 mt-2">{p.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
