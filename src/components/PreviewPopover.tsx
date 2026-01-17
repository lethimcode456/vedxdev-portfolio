"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Using Lucide for the close icon

interface PreviewPopoverProps {
  item: {
    title: string;
    image: string;
    description: string;
    link: string;
  };
  onClose: () => void;
  isOpen: boolean;
}

export function PreviewPopover({ item, onClose, isOpen }: PreviewPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <motion.div
      ref={popoverRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        pointerEvents: isOpen ? "auto" : "none",
      }}
      className="bg-black border border-gray-700 rounded-lg shadow-lg p-6 max-w-sm w-full"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Close preview"
      >
        <X className="h-5 w-5" />
      </button>

      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={150}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{item.description}</p>
      <Link
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
      >
        View Project
      </Link>
    </motion.div>
  );
}
