"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { staggerContainer, staggerItem } from "./ui/reveal";
import { VideoBackdrop } from "./ui/video-backdrop";
import { CheckIcon, LeafIcon } from "./ui/icons";
import { CTA } from "@/app/lib/site";
import { VIDEO, img, PHOTO } from "@/app/lib/media";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const yStage = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const yLeaf = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_-10%,var(--color-light-sage),transparent_55%),radial-gradient(90%_70%_at_0%_10%,rgba(223,164,75,0.14),transparent_55%)]" />
        <motion.div style={{ y: yBlob }} className="animate-blob absolute -left-24 top-24 h-80 w-80 bg-natural-green/25 blur-3xl" />
        <motion.div style={{ y: yBlob }} className="animate-blob absolute right-[-6rem] top-40 h-96 w-96 bg-deep-green/15 blur-3xl [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-grain opacity-70" />
      </div>

      <div className="container-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <motion.div variants={staggerContainer} initial={reduce ? false : "hidden"} animate={reduce ? undefined : "show"}>
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

            <motion.h1 variants={staggerItem} className="mt-6 text-[length:var(--text-hero)] leading-[1.03]">
              Nature&rsquo;s Goodness, <span className="text-gradient-brand italic">Crafted</span> for Healthier Living.
            </motion.h1>

            <motion.p variants={staggerItem} className="mt-6 max-w-xl text-body-lg leading-relaxed text-muted">
              We create premium plant-based food products that make healthy living simple, delicious and accessible — from
              naturally sweet date syrup to caffeine-free roasted date seed infusion, trusted by distributors, supermarkets and families.
            </motion.p>

            <motion.div variants={staggerItem} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={CTA.primary.href} size="lg" arrow>
                {CTA.primary.label}
              </Button>
              <Button href="/products" size="lg" variant="secondary">
                Explore Products
              </Button>
            </motion.div>

            <motion.dl variants={staggerItem} className="mt-11 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline/80 pt-7">
              {[
                { n: "3", l: "Certifications" },
                { n: "100%", l: "Natural Ingredients" },
                { n: "36", l: "States Reached" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-serif text-h3 text-deep-green">{s.n}</dt>
                  <dd className="mt-1 text-caption font-medium text-muted">{s.l}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Cinematic video stage */}
          <motion.div
            style={{ y: yStage }}
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <motion.div style={{ y: yLeaf }} className="pointer-events-none absolute -left-8 -top-6 z-10 text-natural-green/80">
              <LeafIcon className="h-20 w-20 animate-float-slow" />
            </motion.div>
            <motion.div style={{ y: yLeaf }} className="pointer-events-none absolute -bottom-6 right-2 z-10 text-deep-green/60">
              <LeafIcon className="h-16 w-16 -scale-x-100 animate-float-med" />
            </motion.div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-hero)] shadow-[var(--shadow-card)] ring-1 ring-white/40">
              <VideoBackdrop
                src={VIDEO.hero}
                poster={img(PHOTO.vShelf, 900)}
                overlay="bg-gradient-to-t from-[#0d3b1e]/80 via-[#0d3b1e]/10 to-transparent"
              />
              <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
                <span className="w-fit rounded-full bg-cream/90 px-3 py-1 text-caption font-bold uppercase tracking-[0.14em] text-deep-green">
                  Flagship Products
                </span>
                <p className="mt-4 font-serif text-h3 leading-tight text-cream">Date Syrup &amp; Date Seed Infusion</p>
                <p className="mt-2 max-w-xs text-small text-cream/85">
                  Naturally sweet. Wholesomely simple. Crafted from carefully selected dates.
                </p>
              </div>
            </div>

            <motion.div className="absolute -left-4 top-10 z-20 hidden sm:block sm:-left-8" animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <BadgeChip>100% Natural</BadgeChip>
            </motion.div>
            <motion.div className="absolute -right-3 top-1/3 z-20 hidden sm:block sm:-right-6" animate={reduce ? undefined : { y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
              <BadgeChip tone="orange">NAFDAC Certified</BadgeChip>
            </motion.div>
            <motion.div className="absolute -bottom-3 left-6 z-20 hidden sm:block" animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
              <BadgeChip tone="honey">HALAL Certified</BadgeChip>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Certification marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-hairline/70 bg-pure-white/50 py-5 backdrop-blur lg:mt-24">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[
            "100% Natural", "NAFDAC Certified", "HALAL Certified", "Made in Nigeria", "SON Certified", "No Refined Sugar", "Caffeine-Free Tea",
            "100% Natural", "NAFDAC Certified", "HALAL Certified", "Made in Nigeria", "SON Certified", "No Refined Sugar", "Caffeine-Free Tea",
          ].map((t, i) => (
            <span key={i} className="flex shrink-0 items-center gap-3 text-body font-semibold text-charcoal/70">
              <LeafIcon className="h-4 w-4 text-natural-green" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BadgeChip({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "orange" | "honey" }) {
  const tones = {
    green: "text-deep-green ring-deep-green/15",
    orange: "text-earth-orange ring-earth-orange/20",
    honey: "text-date-fruit ring-golden-honey/30",
  } as const;
  return (
    <div className={`flex items-center gap-2 rounded-[var(--radius-pill)] bg-pure-white/90 px-4 py-2.5 text-[0.85rem] font-bold shadow-[var(--shadow-float)] ring-1 backdrop-blur ${tones[tone]}`}>
      <span className="grid h-6 w-6 place-items-center rounded-full bg-light-sage">
        <CheckIcon className="h-3.5 w-3.5 text-deep-green" />
      </span>
      {children}
    </div>
  );
}
