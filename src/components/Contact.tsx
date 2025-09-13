"use client";
import Link from "next/link";
import Reveal from "./Reveal";
import { Mail, Github, Instagram, Linkedin, Dribbble, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto py-24">
      <div className="flex flex-col gap-12">
        <Reveal animation="fadeUp" delay={0.2}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal animation="slideLeft" delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-[#c71610]" />
                    <a href="mailto:vedantbagwale.dev@gmail.com" className="hover:text-white transition-colors">
                      vedantbagwale.dev@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-[#c71610]" />
                    <span>Nagpur, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  <Reveal animation="scale" delay={0.6}>
                    <Link className="btn-glow inline-flex items-center gap-2 group hover:scale-105 transition-all duration-300" href="https://github.com/lethimcode456" target="_blank">
                      <Github className="w-4 h-4 text-gray-300 transition-colors group-hover:text-[#2dba4e]" aria-hidden />
                      GitHub
                    </Link>
                  </Reveal>
                  <Reveal animation="scale" delay={0.7}>
                    <Link className="btn-glow inline-flex items-center gap-2 group hover:scale-105 transition-all duration-300" href="https://www.linkedin.com/in/vedant-bagwale-123634311/" target="_blank">
                      <Linkedin className="w-4 h-4 text-gray-300 transition-colors group-hover:text-[#0A66C2]" aria-hidden />
                      LinkedIn
                    </Link>
                  </Reveal>
                  <Reveal animation="scale" delay={0.8}>
                    <Link className="btn-glow inline-flex items-center gap-2 group hover:scale-105 transition-all duration-300" href="https://dribbble.com/vedant-bagwale" target="_blank">
                      <Dribbble className="w-4 h-4 text-gray-300 transition-colors group-hover:text-[#ea4c89]" aria-hidden />
                      Dribbble
                    </Link>
                  </Reveal>
                  <Reveal animation="scale" delay={0.9}>
                    <Link className="btn-glow inline-flex items-center gap-2 group hover:scale-105 transition-all duration-300" href="https://x.com/vedXdev" target="_blank">
                      <span className="w-4 h-4 text-gray-300 transition-colors group-hover:text-[#F4CE14] text-sm">𝕏</span>
                      Twitter
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal animation="slideRight" delay={0.6}>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 hover:bg-white/[0.04] transition-all duration-300">
              <h3 className="text-xl font-medium mb-6">Let's Start a Conversation</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
                </p>
                <p>
                  I'm particularly interested in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web development projects</li>
                  <li>UI/UX design opportunities</li>
                  <li>Creative collaborations</li>
                  <li>Open source contributions</li>
                </ul>
                <div className="pt-4">
                  <a 
                    href="mailto:vedantbagwale.dev@gmail.com" 
                    className="btn-glow inline-flex items-center gap-2 group text-center hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Send me an email
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
