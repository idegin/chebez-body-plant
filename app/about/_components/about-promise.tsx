"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { KenBurns } from "@/app/components/ui/media";
import { CheckIcon, LeafIcon } from "@/app/components/ui/icons";
import { img, PHOTO } from "@/app/lib/media";

const PROMISES = [
  "100% natural ingredients wherever possible",
  "Honest product claims — we educate, never exaggerate",
  "Consistent quality in every batch",
  "Safe manufacturing practices",
  "Genuine nutritional value families can rely on",
  "Continuous innovation without compromising nature",
];

export function AboutPromise() {
  return (
    <section className="relative overflow-hidden bg-light-sage py-24 sm:py-28 lg:py-32">
      <LeafIcon className="pointer-events-none absolute left-4 top-16 h-24 w-24 text-natural-green/20" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-natural-green/15 blur-3xl" />

      <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
        {/* Media */}
        <Reveal className="relative order-2 lg:order-1">
          <KenBurns
            src={img(PHOTO.familyTable, 1000)}
            alt="A Nigerian family sharing a healthy meal together"
            className="aspect-[5/4] w-full shadow-[var(--shadow-card)] ring-1 ring-white/50"
          />
          <div className="absolute -bottom-6 right-6 rounded-[var(--radius-card)] bg-deep-green px-6 py-5 text-cream shadow-[var(--shadow-card)]">
            <p className="font-serif text-h5 leading-tight">One goal</p>
            <p className="mt-1 max-w-[12rem] text-small text-cream/85">
              To help people live healthier lives, naturally.
            </p>
          </div>
        </Reveal>

        {/* Copy + promise list */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
              Our Promise
            </span>
            <h2 className="mt-4 text-h1">Every Bodyplant product is developed with one goal.</h2>
            <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-muted">
              To help people live healthier lives naturally. That promise shapes everything — the ingredients
              we choose, the way we manufacture, and the words we use to talk about it.
            </p>
          </Reveal>

          <Stagger className="mt-9 grid gap-3.5 sm:grid-cols-2">
            {PROMISES.map((promise) => (
              <motion.div
                key={promise}
                variants={staggerItem}
                className="flex items-start gap-3 rounded-[var(--radius-card)] bg-pure-white/80 p-4 ring-1 ring-white/60"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-deep-green/10 text-deep-green">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-small leading-relaxed text-charcoal/85">{promise}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
