"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaXTwitter, FaLinkedin, FaDribbble } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { brands } from "@/data/brands";
import { PreviewPopover } from "@/components/PreviewPopover";

interface AccordionItemData {
  title: string;
  image: string;
  description: string;
  link: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  onItemClick: (item: AccordionItemData) => void;
}

function AccordionItem({ item, onItemClick }: AccordionItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current || !textRef.current || !bgRef.current) return;

    const currentItem = itemRef.current;
    const textEl = textRef.current;
    const bgEl = bgRef.current;

    const handleMouseEnter = () => {
      gsap.to(bgEl, {
        backgroundColor: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(textEl, {
        color: "#000000",
        x: 4,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(bgEl, {
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(textEl, {
        color: "#ffffff",
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    currentItem.addEventListener("mouseenter", handleMouseEnter);
    currentItem.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      currentItem.removeEventListener("mouseenter", handleMouseEnter);
      currentItem.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className="relative cursor-pointer overflow-hidden border-b border-gray-700"
      onClick={() => onItemClick(item)}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 left-0 right-0 bg-transparent"
        style={{ zIndex: 0 }}
      />
      <div ref={textRef} className="relative py-1 md:py-1.5 text-white text-sm md:text-base lg:text-lg" style={{ zIndex: 1 }}>
        {item.title}
      </div>
    </div>
  );
}

export default function Hero() {
  const [openPreview, setOpenPreview] = useState<AccordionItemData | null>(null);

  const handleItemClick = (item: AccordionItemData) => {
    setOpenPreview(item);
  };

  const handleClosePreview = () => {
    setOpenPreview(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center pt-8 md:pt-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center space-y-8 md:space-y-12 mb-8 md:mb-12">
        {/* Top: Intro with Profile Picture and Description */}
        <div className="flex flex-col items-center space-y-3 md:space-y-4">
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-xl border border-black/10 bg-white/10 flex items-center justify-center flex-shrink-0">
              <Image
                src="/pfp.png"
                alt="pfp_image"
                width={128}
                height={128}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="https://x.com/vedXdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/vedxdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a66c2] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href="https://dribbble.com/vedxdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ea4c89] transition-colors duration-200"
                aria-label="Dribbble"
              >
                <FaDribbble className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">vedXdev</h1>
            <p className="text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed max-w-sm mx-auto">
             I create websites where polish and performance go hand in hand. I don&apos;t ship anything until I&apos;m genuinely proud of it.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom: Projects and Brands Sections */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
        {/* Projects Section */}
        <div className="flex-1">
          <h2 className="text-xs md:text-sm uppercase text-gray-400 mb-3 md:mb-4 tracking-wider text-center md:text-left">
            PROJECTS_
          </h2>
          <div className="space-y-0 border-t border-gray-700">
            {projects.map((project, index) => (
              <AccordionItem
                key={index}
                item={project}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="flex-1">
          <h2 className="text-xs md:text-sm uppercase text-gray-400 mb-3 md:mb-4 tracking-wider text-center md:text-left">
            BRANDS I&apos;VE HELPED_
          </h2>
          <div className="space-y-0 border-t border-gray-700">
            {brands.map((brand, index) => (
              <AccordionItem
                key={index}
                item={brand}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>
      </div>

      {openPreview && (
        <PreviewPopover item={openPreview} onClose={handleClosePreview} isOpen={!!openPreview} />
      )}
    </div>
  );
}