"use client";

import { motion, useReducedMotion } from "motion/react";
import { VideoBackdrop } from "@/app/components/ui/video-backdrop";
import { Button } from "@/app/components/ui/button";
import { LeafIcon, CheckIcon } from "@/app/components/ui/icons";
import { staggerContainer, staggerItem } from "@/app/components/ui/reveal";
import { VIDEO, img, PHOTO } from "@/app/lib/media";
import { CONTACT } from "@/app/lib/site";

const TRUST = [
  "Higher retail margins",
  "NAFDAC · SON · HALAL certified",
  "Reliable nationwide supply",
];

export function DistributorHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-32 pb-20 text-cream sm:pt-40 sm:pb-28">
      <VideoBackdrop
        src={VIDEO.leaves}
        poster={img(PHOTO.harvestHands, 1600)}
        overlay="bg-gradient-to-br from-[#0a3d1e]/90 via-[#0a3d1e]/60 to-[#0a3d1e]/92"
      />

      <LeafIcon className="pointer-events-none absolute -left-6 top-36 h-28 w-28 text-natural-green/25 animate-float-slow" />
      <LeafIcon className="pointer-events-none absolute right-8 bottom-28 h-24 w-24 -scale-x-100 text-natural-green/20 animate-float-med" />

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
            Wholesale Partnership
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-6 text-[length:var(--text-hero)] leading-[1.04] text-cream"
          >
            Let&rsquo;s Grow <span className="italic text-natural-green">Together.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-body-lg leading-relaxed text-cream/85"
          >
            Partner with a trusted Nigerian manufacturer of premium plant-based products. Stock Date Syrup
            and Date Seed Infusion your customers keep coming back for — backed by consistent quality, dependable
            supply and dedicated account management.
          </motion.p>

          <motion.ul variants={staggerItem} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST.map((t) => (
              <li key={t} className="inline-flex items-center gap-2 text-body text-cream/90">
                <CheckIcon className="h-5 w-5 shrink-0 text-natural-green" />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={staggerItem} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#apply" size="lg" arrow>
              Apply Now
            </Button>
            <Button href={CONTACT.whatsappHref} size="lg" variant="secondary">
              Chat with Sales
            </Button>
          </motion.div>
        </motion.div>
      </div>

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
