"use client";
import Link from "next/link";
import Reveal from "./Reveal";
import { useEffect, useState } from "react";
import { Download,Github,Dribbble ,Mail, Linkedin } from "lucide-react";  
import Image from "next/image";
import { JetBrains_Mono } from 'next/font/google';
import { animate } from "framer-motion";

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });



export default function Hero() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
      setTime(new Intl.DateTimeFormat(undefined, opts).format(now));
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="w-full max-w-4xl pt-32 pb-24 mx-auto px-4 ">
      <div className="flex flex-col gap-8">
         <Reveal animation="fadeUp" delay={0.2}> 
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 bg-white/10 flex items-center justify-center">
            <Link
  href="https://github.com/lethimcode456"
  target="_blank"
  className="w-16 h-16 rounded-full overflow-hidden border border-white/10 bg-white/10 flex items-center justify-center cursor-pointer hover:animate-glow-pulse"
>
  <Image
    src="/profile.jpg"
    alt="Vedant"
    width={64}
    height={64}
    className="object-cover w-full h-full"
  />
</Link>


            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-3">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Vedant</h1>
                
              </div>
              <Link
  href="https://x.com/vedXdev"
  target="_blank"
  className={`text-[#F4CE14] text-sm hover:text-[#F4CE14] hover:underline ${jetbrains.className}`}
>
  @vedXdev
</Link>
              {/* <div className="text-xs text-gray-500">Nagpur, India [{time || "--:--"}]</div> */}
            </div>
          </div>
        </Reveal>

        <Reveal animation="fadeUp" delay={0.4}>
<div className="max-w-2xl space-y-4 text-[15px] leading-7 text-gray-300">
        <p>
  Hi, I'm <span className="word-highlight">Vedant</span>. I'm a 20-year-old <span className="word-highlight">UI/UX designer</span> and <span className="word-highlight">web developer</span> from <span className="word-highlight">Nagpur, India</span>.
</p>
<p>
  I work mainly with <span className="word-highlight">Next.js</span> and the <span className="word-highlight">MERN stack</span>, focusing on building websites that are not just <span className="word-highlight">functional</span> but also <span className="word-highlight">clean</span>, <span className="word-highlight">aesthetic</span>, and <span className="word-highlight">easy to use</span>. I like to code, but only when things also <span className="word-highlight">look good</span>.
</p>
<p>
  My approach is <span className="word-highlight">detail-driven</span> — from typography to spacing — because small choices shape the entire <span className="word-highlight">user experience</span>. I enjoy creating <span className="word-highlight">minimal</span>, <span className="word-highlight">fast</span>, and <span className="word-highlight">accessible</span> products.
</p>
<p>
  Outside of work, I spend time with <span className="word-highlight">music</span>, <span className="word-highlight">running</span>, or playing <span className="word-highlight">badminton</span>. These keep me creative, focused, and balanced.
</p>
</div>

        </Reveal>
        <Reveal animation="fadeUp" delay={0.6}>
          <div className="flex flex-wrap items-center gap-3">
            <Link className="btn-glow inline-flex items-center gap-2 group animate-glow-pulse" href="/resume.pdf" download>
              <Download className="w-4 h-4 text-gray-300 transition-colors group-hover:text-[#F4CE14]" aria-hidden />
              Download Resume
            </Link>
          </div>
        </Reveal>
      </div>
    </section>


  );

}


