"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * KenBurns — a slow, cinematic auto-zoom/pan on an image so still photography
 * feels like moving footage. Reduced-motion → static.
 */
export function KenBurns({
  src,
  alt,
  className = "",
  rounded = "rounded-[var(--radius-image)]",
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? undefined : { scale: 1.12 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 14, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  );
}

/**
 * Parallax — shifts a child on scroll for depth. `strength` in px.
 */
export function Parallax({
  children,
  strength = 80,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : strength, reduce ? 0 : -strength]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
