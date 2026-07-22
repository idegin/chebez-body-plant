"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "../ui/reveal";
import { KenBurns } from "../ui/media";
import { VideoBackdrop } from "../ui/video-backdrop";
import { Button } from "../ui/button";
import { CheckIcon, LeafIcon } from "../ui/icons";
import { PRODUCTS } from "@/app/lib/site";
import { img, VIDEO } from "@/app/lib/media";

const syrup = PRODUCTS[0];
const tea = PRODUCTS[1];

export function ProductShowcase() {
  return (
    <div id="products">
      <SyrupSection />
      <TeaSection />
    </div>
  );
}

/* ============ 01 · DATE SYRUP — dark cinematic, video-led ============ */
function SyrupSection() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[#20130c] py-24 text-cream sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <VideoBackdrop
          src={VIDEO.amberPour}
          poster={img(syrup.hero, 1400)}
          overlay="bg-[#20130c]/72"
        />
      </div>

      <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
        {/* Media collage */}
        <Reveal className="relative order-2 lg:order-1">
          <KenBurns
            src={img(syrup.gallery[0], 900)}
            alt="Bodyplant Date Syrup pouring"
            className="aspect-[4/5] w-full shadow-[var(--shadow-card)] ring-1 ring-white/10"
            priority
          />
          <motion.div
            className="absolute -bottom-6 -right-4 w-44 overflow-hidden rounded-[var(--radius-image)] shadow-[var(--shadow-card)] ring-4 ring-[#20130c] sm:w-56"
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={img(syrup.gallery[1], 500)} alt="Golden natural sweetness" width={500} height={500} className="aspect-square object-cover" />
          </motion.div>
          <div className="absolute -left-3 top-6 rounded-[var(--radius-pill)] bg-earth-orange px-4 py-2 text-caption font-bold text-pure-white shadow-[var(--shadow-float)]">
            No refined sugar
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="font-serif text-h2 text-earth-orange/90">01</span>
            <span className="ml-3 text-caption font-bold uppercase tracking-[0.18em] text-golden-honey">Date Syrup</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-md text-h1 text-cream">{syrup.tagline}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-cream/80">{syrup.description}</p>
          </Reveal>

          <Stagger className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
            {syrup.benefits.map((b) => (
              <motion.div key={b} variants={staggerItem} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-earth-orange/20 text-golden-honey">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-small text-cream/85">{b}</span>
              </motion.div>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-9">
            <Button href={`/products/${syrup.slug}`} size="lg" arrow>
              Learn More
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ 02 · DATE SEED INFUSION — light sage, editorial collage ============ */
function TeaSection() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-light-sage py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-natural-green/15 blur-3xl" />
      <LeafIcon className="pointer-events-none absolute left-4 top-16 h-24 w-24 text-natural-green/20" />

      <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="font-serif text-h2 text-deep-green/80">02</span>
            <span className="ml-3 text-caption font-bold uppercase tracking-[0.18em] text-deep-green">Date Seed Infusion</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-md text-h1">{tea.tagline}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-muted">{tea.description}</p>
          </Reveal>

          <Stagger className="mt-8 flex flex-col gap-3">
            {tea.benefits.map((b) => (
              <motion.div key={b} variants={staggerItem} className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-deep-green/10 text-deep-green">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-body text-charcoal/85">{b}</span>
              </motion.div>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-9">
            <Button href={`/products/${tea.slug}`} size="lg" variant="secondary" arrow>
              Learn More
            </Button>
          </Reveal>
        </div>

        {/* Overlapping media collage */}
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <KenBurns
            src={img(tea.hero, 900)}
            alt="Bodyplant Date Seed Infusion"
            className="aspect-[4/5] w-full shadow-[var(--shadow-card)] ring-1 ring-white/50"
          />
          <motion.div
            className="absolute -bottom-8 -left-6 w-40 overflow-hidden rounded-[var(--radius-image)] shadow-[var(--shadow-card)] ring-4 ring-light-sage sm:w-52"
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={img(tea.gallery[1], 500)} alt="Bodyplant Date Seed Infusion" width={500} height={500} className="aspect-square object-cover" />
          </motion.div>
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-[var(--radius-pill)] bg-pure-white/90 px-4 py-2 text-caption font-bold text-deep-green shadow-[var(--shadow-float)] backdrop-blur">
            <LeafIcon className="h-4 w-4 text-natural-green" /> Caffeine-Free
          </div>
        </Reveal>
      </div>
    </section>
  );
}
