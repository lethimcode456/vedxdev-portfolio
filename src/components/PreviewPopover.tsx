"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // lock background scroll
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-xl border border-white/10 bg-black p-6 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={200}
              className="mb-4 w-full rounded-md object-cover"
            />

            <h3 className="mb-2 text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mb-4 text-sm text-gray-400">
              {item.description}
            </p>

            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
            >
              View Project
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
