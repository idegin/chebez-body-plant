"use client";

import { motion, useReducedMotion } from "motion/react";
import { VideoBackdrop } from "@/app/components/ui/video-backdrop";
import { Button } from "@/app/components/ui/button";
import { LeafIcon } from "@/app/components/ui/icons";
import { staggerContainer, staggerItem } from "@/app/components/ui/reveal";
import { VIDEO, img, PHOTO } from "@/app/lib/media";
import { CTA } from "@/app/lib/site";

const STATS = [
  { n: "36", l: "States Reached" },
  { n: "7+", l: "Retail Channels" },
  { n: "3", l: "Certifications" },
];

export function DistributionHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-24 text-cream sm:pt-40 sm:pb-32">
      <VideoBackdrop
        src={VIDEO.nature}
        poster={img(PHOTO.produce, 1600)}
        overlay="bg-gradient-to-b from-[#0a3d1e]/88 via-[#0a3d1e]/60 to-[#0a3d1e]/92"
      />

      {/* ambient botanical accents */}
      <LeafIcon className="pointer-events-none absolute -left-8 top-36 h-32 w-32 text-natural-green/25 animate-float-slow" />
      <LeafIcon className="pointer-events-none absolute right-4 bottom-28 h-24 w-24 -scale-x-100 text-natural-green/20 animate-float-med" />

      <div className="container-shell relative">
        <motion.div
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "show"}
          className="max-w-3xl"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-caption font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-natural-green" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-natural-green" />
            </span>
            Distribution
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-6 text-[length:var(--text-hero)] leading-[1.04] text-cream"
          >
            Nigeria&rsquo;s Trusted Distribution Partner for{" "}
            <span className="italic text-natural-green">Plant-Based Nutrition.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-body-lg leading-relaxed text-cream/85"
          >
            We manufacture and distribute premium natural products with reliable supply, consistent quality
            and dedicated account management — so supermarkets, pharmacies, retailers and bulk buyers across
            the country can stock products their customers trust.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={CTA.primary.href} size="lg" arrow>
              {CTA.primary.label}
            </Button>
            <Button
              href={CTA.sales.href}
              size="lg"
              variant="secondary"
              className="!bg-transparent !text-cream !ring-cream/50 hover:!bg-cream/10"
            >
              Speak to Sales
            </Button>
          </motion.div>

          <motion.dl
            variants={staggerItem}
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8"
          >
            {STATS.map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-h3 text-natural-green">{s.n}</dt>
                <dd className="mt-1 text-caption font-medium text-cream/70">{s.l}</dd>
              </div>
            ))}
          </motion.dl>
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
