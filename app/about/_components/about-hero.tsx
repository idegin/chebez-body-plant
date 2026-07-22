"use client";

import { motion, useReducedMotion } from "motion/react";
import { VideoBackdrop } from "@/app/components/ui/video-backdrop";
import { LeafIcon } from "@/app/components/ui/icons";
import { staggerContainer, staggerItem } from "@/app/components/ui/reveal";
import { VIDEO, img, PHOTO } from "@/app/lib/media";

export function AboutHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden pt-32 pb-20 text-cream sm:pt-40 sm:pb-28">
      <VideoBackdrop
        src={VIDEO.nature}
        poster={img(PHOTO.harvestHands, 1600)}
        overlay="bg-gradient-to-b from-[#0a3d1e]/85 via-[#0a3d1e]/55 to-[#0a3d1e]/90"
      />

      {/* ambient botanical accents */}
      <LeafIcon className="pointer-events-none absolute -left-6 top-32 h-28 w-28 text-natural-green/25 animate-float-slow" />
      <LeafIcon className="pointer-events-none absolute right-6 bottom-24 h-24 w-24 -scale-x-100 text-natural-green/20 animate-float-med" />

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
            Our Story
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-6 text-[length:var(--text-hero)] leading-[1.04] text-cream"
          >
            Natural Nutrition, <span className="italic text-natural-green">Inspired by Nature.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-body-lg leading-relaxed text-cream/85"
          >
            Bodyplant Nature Resources is a Nigerian health and wellness company committed to improving
            everyday living through premium plant-based nutrition — combining the richness of nature with
            uncompromising quality standards.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mx-auto mt-11 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8"
          >
            {[
              { n: "100%", l: "Plant-Based" },
              { n: "3", l: "Certifications" },
              { n: "36", l: "States Reached" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-h3 text-natural-green">{s.n}</dt>
                <dd className="mt-1 text-caption font-medium text-cream/70">{s.l}</dd>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* organic wave divider into next section */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-pure-white sm:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 60C240 20 480 100 720 70S1200 0 1440 40V100H0Z" />
      </svg>
    </section>
  );
}
