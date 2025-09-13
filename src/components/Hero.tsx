"use client";
import Link from "next/link";
import Reveal from "./Reveal";
import { Download } from "lucide-react";  
import Image from "next/image";
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });



export default function Hero() {

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
  Hi, I&apos;m <span className="word-highlight">Vedant</span> — a <span className="word-highlight">UI/UX designer</span> and <span className="word-highlight">web developer</span> based in <span className="word-highlight">Nagpur, India</span>.
</p>
<p>
  I specialize in building <span className="word-highlight">clean</span>, <span className="word-highlight">minimal</span>, and <span className="word-highlight">functional</span> web experiences using <span className="word-highlight">Next.js</span> and the <span className="word-highlight">MERN stack</span>. For me, design and development go hand-in-hand — I like to code, but only when it <span className="word-highlight">looks good</span> too.
</p>
<p>
  When I&apos;m not working, I spend time with <span className="word-highlight">music</span>, which keeps me creative and balanced.
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

        <Reveal animation="fadeUp" delay={0.8}>
          <div className="mt-6 text-center">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
            >
              <span className="group-hover:text-[#F4CE14] transition-colors duration-200">
                Want to contact me?
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>


  );

}


