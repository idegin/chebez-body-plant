"use client";

import { motion, useReducedMotion } from "motion/react";
import { ImageBackdrop } from "@/app/components/ui/image-backdrop";
import { LeafIcon } from "@/app/components/ui/icons";
import { staggerContainer, staggerItem } from "@/app/components/ui/reveal";
import { FAQ_CATEGORIES } from "./data";
import { img, PHOTO } from "@/app/lib/media";

export function FaqHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden pt-32 pb-24 text-cream sm:pt-40 sm:pb-32">
      <ImageBackdrop
        src={img(PHOTO.teaCup, 1600)}
        overlay="bg-gradient-to-b from-[#0a3d1e]/88 via-[#0a3d1e]/60 to-[#0a3d1e]/92"
      />

      <LeafIcon className="pointer-events-none absolute -left-6 top-28 h-28 w-28 text-natural-green/25 animate-float-slow" />
      <LeafIcon className="pointer-events-none absolute right-8 bottom-28 h-20 w-20 -scale-x-100 text-natural-green/20 animate-float-med" />

      <div className="container-shell relative">
        <motion.div
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "show"}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-caption font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-natural-green" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-natural-green" />
            </span>
            Help &amp; Support
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-6 text-[length:var(--text-hero)] leading-[1.04] text-cream"
          >
            Frequently Asked <span className="italic text-natural-green">Questions</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-body-lg leading-relaxed text-cream/85"
          >
            Everything you need to know about our natural Date Syrup and Date Seed Infusion, our certifications, and
            how to partner with Bodyplant as a distributor or retailer. Can&apos;t find your answer? We&apos;re
            just a message away.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap justify-center gap-2.5"
          >
            {FAQ_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-caption font-semibold text-cream/90 backdrop-blur transition-colors duration-200 hover:border-natural-green/60 hover:bg-white/15 hover:text-cream"
              >
                {cat.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-cream sm:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 60C240 20 480 100 720 70S1200 0 1440 40V100H0Z" />
      </svg>
    </section>
  );
}
