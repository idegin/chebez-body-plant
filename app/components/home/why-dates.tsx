"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "../ui/reveal";
import { KenBurns } from "../ui/media";
import { img, PHOTO } from "@/app/lib/media";

const REASONS = [
  { t: "Naturally sweet", d: "Rich caramel sweetness with no refined sugar." },
  { t: "Nutrient dense", d: "Dates carry fibre, potassium and natural minerals." },
  { t: "Kid friendly", d: "A wholesome swap the whole family can enjoy." },
  { t: "Natural energy", d: "Slow-release energy for busy days." },
  { t: "Coffee alternative", d: "Caffeine-free warmth, any time of day." },
  { t: "Rich in antioxidants", d: "Supporting everyday wellbeing, naturally." },
];

export function WhyDates() {
  return (
    <section className="relative overflow-hidden bg-warm-gray py-24 sm:py-28 lg:py-32">
      <div className="container-shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="lg:sticky lg:top-32">
          <Reveal>
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">The power of dates</span>
            <h2 className="mt-4 text-h1">Why date-based nutrition?</h2>
            <p className="mt-5 max-w-md text-body-lg text-muted">
              Nature already provides what our bodies need to thrive. Dates are one of the most complete natural
              ingredients — which is exactly why they sit at the heart of everything we make.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <KenBurns src={img(PHOTO.hCalm, 900)} alt="Healthy date-based breakfast" className="aspect-[16/10] w-full shadow-[var(--shadow-card)]" />
          </Reveal>
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.t}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-[var(--radius-card)] border border-hairline/70 bg-pure-white p-6 shadow-[var(--shadow-card)]"
            >
              <span className="font-serif text-h4 text-natural-green">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-h5 font-sans font-bold">{r.t}</h3>
              <p className="mt-2 text-small leading-relaxed text-muted">{r.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
