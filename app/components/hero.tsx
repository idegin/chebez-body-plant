"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Button } from "./ui/button";
import { staggerContainer, staggerItem } from "./ui/reveal";
import logo from "@/app/brand/body-plant-logo.png";

const BADGES = ["100% Natural", "NAFDAC Certified", "HALAL Certified", "Made in Nigeria"];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBlob = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const yStage = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yLeaf = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* ---- Ambient background ---- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_-10%,var(--color-light-sage),transparent_55%),radial-gradient(90%_70%_at_0%_10%,rgba(223,164,75,0.14),transparent_55%)]" />
        <motion.div
          style={{ y: yBlob }}
          className="animate-blob absolute -left-24 top-24 h-80 w-80 bg-natural-green/25 blur-3xl"
        />
        <motion.div
          style={{ y: yBlob }}
          className="animate-blob absolute right-[-6rem] top-40 h-96 w-96 bg-deep-green/15 blur-3xl [animation-delay:-6s]"
        />
        <div className="absolute inset-0 bg-grain opacity-70" />
      </div>

      <div className="container-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ---- Copy ---- */}
          <motion.div
            variants={staggerContainer}
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "show"}
          >
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full border border-deep-green/15 bg-pure-white/70 px-4 py-1.5 text-caption font-semibold uppercase tracking-[0.14em] text-deep-green backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-natural-green" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-natural-green" />
              </span>
              Plant-Based Nutrition · Made in Nigeria
            </motion.span>

            <motion.h1
              variants={staggerItem}
              className="mt-6 text-[length:var(--text-hero)] leading-[1.03]"
            >
              Nature&rsquo;s Goodness,{" "}
              <span className="text-gradient-brand italic">Crafted</span> for
              Healthier Living.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-xl text-body-lg leading-relaxed text-muted"
            >
              We create premium plant-based food products that make healthy
              living simple, delicious and accessible — from naturally sweet
              date syrup to caffeine-free roasted date tea, trusted by
              distributors, supermarkets and families.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#become-distributor" size="lg" arrow>
                Become a Distributor
              </Button>
              <Button href="#products" size="lg" variant="secondary">
                Explore Products
              </Button>
            </motion.div>

            <motion.dl
              variants={staggerItem}
              className="mt-11 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline/80 pt-7"
            >
              {[
                { n: "3", l: "Certifications" },
                { n: "100%", l: "Natural Ingredients" },
                { n: "36", l: "States Reached" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-serif text-h3 text-deep-green">{s.n}</dt>
                  <dd className="mt-1 text-caption font-medium text-muted">
                    {s.l}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* ---- Product stage ---- */}
          <motion.div
            style={{ y: yStage }}
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Decorative leaves */}
            <motion.div style={{ y: yLeaf }} className="pointer-events-none absolute -left-8 -top-6 -z-0 text-natural-green/70">
              <Leaf className="h-20 w-20 animate-float-slow" />
            </motion.div>
            <motion.div style={{ y: yLeaf }} className="pointer-events-none absolute -bottom-6 right-2 -z-0 text-deep-green/50">
              <Leaf className="h-16 w-16 -scale-x-100 animate-float-med" />
            </motion.div>

            {/* Main organic panel */}
            <div className="animate-blob relative aspect-square overflow-hidden bg-gradient-to-br from-light-sage via-pure-white to-cream p-8 shadow-[var(--shadow-card)] ring-1 ring-white/60 sm:p-12">
              <div className="absolute inset-0 bg-grain opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(155,197,61,0.18),transparent_70%)]" />
              <div className="relative flex h-full flex-col items-center justify-center">
                <Image
                  src={logo}
                  alt="Bodyplant Nature Resources — Date Syrup & Date Tea"
                  priority
                  placeholder="blur"
                  className="w-[78%] max-w-xs drop-shadow-sm"
                />
                <p className="mt-6 max-w-[16rem] text-center font-serif text-body italic text-warm-clay">
                  &ldquo;Pure by nature. Trusted by families.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating trust badges */}
            <motion.div
              className="absolute -left-4 top-10 sm:-left-8"
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <BadgeChip>100% Natural</BadgeChip>
            </motion.div>
            <motion.div
              className="absolute -right-3 top-1/3 sm:-right-6"
              animate={reduce ? undefined : { y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <BadgeChip tone="orange">NAFDAC Certified</BadgeChip>
            </motion.div>
            <motion.div
              className="absolute -bottom-3 left-6"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <BadgeChip tone="honey">HALAL Certified</BadgeChip>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ---- Certification marquee ---- */}
      <div className="relative mt-16 overflow-hidden border-y border-hairline/70 bg-pure-white/50 py-5 backdrop-blur lg:mt-24">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[...BADGES, "SON Certified", "No Refined Sugar", "Caffeine-Free", ...BADGES, "SON Certified", "No Refined Sugar", "Caffeine-Free"].map(
            (t, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-3 text-body font-semibold text-charcoal/70"
              >
                <Sprout className="h-5 w-5 text-natural-green" />
                {t}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function BadgeChip({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "orange" | "honey";
}) {
  const tones = {
    green: "text-deep-green ring-deep-green/15",
    orange: "text-earth-orange ring-earth-orange/20",
    honey: "text-date-fruit ring-golden-honey/30",
  } as const;
  return (
    <div
      className={`flex items-center gap-2 rounded-[var(--radius-pill)] bg-pure-white/90 px-4 py-2.5 text-[0.85rem] font-bold shadow-[var(--shadow-float)] ring-1 backdrop-blur ${tones[tone]}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-light-sage">
        <Check />
      </span>
      {children}
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-deep-green" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
      <path d="M56 8C36 8 12 16 10 40c-1 12 6 16 6 16s2-14 14-24C42 22 56 8 56 8z" />
      <path d="M16 56C22 40 34 28 50 18" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Sprout({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12" />
      <path d="M12 12C12 8 9 5 4 5c0 4 3 7 8 7z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 14c0-4 3-7 8-7 0 4-3 7-8 7z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}
