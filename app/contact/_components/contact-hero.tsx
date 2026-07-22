"use client";

import { motion, useReducedMotion } from "motion/react";
import { VideoBackdrop } from "@/app/components/ui/video-backdrop";
import { Button } from "@/app/components/ui/button";
import { LeafIcon, PhoneIcon } from "@/app/components/ui/icons";
import { staggerContainer, staggerItem } from "@/app/components/ui/reveal";
import { VIDEO, img, PHOTO } from "@/app/lib/media";
import { CONTACT } from "@/app/lib/site";

export function ContactHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32 pb-24 text-cream sm:pt-40 sm:pb-32">
      <VideoBackdrop
        src={VIDEO.leaves}
        poster={img(PHOTO.kitchen, 1600)}
        overlay="bg-gradient-to-b from-[#0a3d1e]/90 via-[#0a3d1e]/62 to-[#0a3d1e]/94"
      />

      {/* ambient botanical accents */}
      <LeafIcon className="pointer-events-none absolute -left-8 top-40 h-28 w-28 text-natural-green/25 animate-float-slow" />
      <LeafIcon className="pointer-events-none absolute right-6 bottom-32 h-20 w-20 -scale-x-100 text-natural-green/20 animate-float-med" />

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
            Contact
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-6 text-[length:var(--text-hero)] leading-[1.04] text-cream"
          >
            Let&rsquo;s <span className="italic text-natural-green">Talk.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-body-lg leading-relaxed text-cream/85"
          >
            Have a question about our products, want wholesale pricing, or ready to become a distributor?
            Our team would love to hear from you — we speak like a trusted partner, not a salesperson.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={CONTACT.salesHref} size="lg" arrow>
              Call Sales
            </Button>
            <Button
              href={CONTACT.whatsappHref}
              size="lg"
              variant="secondary"
              className="!bg-transparent !text-cream !ring-cream/50 hover:!bg-cream/10"
            >
              Chat on WhatsApp
            </Button>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mt-8 inline-flex items-center gap-2 text-caption text-cream/70"
          >
            <PhoneIcon className="h-4 w-4 text-natural-green" />
            <span>
              Prefer to call now?{" "}
              <a href={CONTACT.phoneHref} className="font-semibold text-cream underline-offset-4 hover:underline">
                {CONTACT.phoneDisplay}
              </a>
            </span>
          </motion.p>
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
