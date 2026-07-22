"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";

type Req = { step: string; title: string; body: string };

const REQUIREMENTS: Req[] = [
  {
    step: "01",
    title: "Business Name",
    body: "A registered trading name — supermarket, pharmacy, store or distribution outfit.",
  },
  {
    step: "02",
    title: "Store",
    body: "A retail outlet or storage point where products will be sold or distributed.",
  },
  {
    step: "03",
    title: "Location",
    body: "The state and area you operate in, so we can plan reliable delivery to you.",
  },
  {
    step: "04",
    title: "Expected Volume",
    body: "A rough monthly order estimate — it helps us tailor pricing and supply for you.",
  },
];

export function DistributorRequirements() {
  return (
    <section className="relative overflow-hidden bg-deep-green py-24 text-cream sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
        <div className="animate-blob absolute -left-10 top-6 h-64 w-64 bg-natural-green/20 blur-3xl" />
        <div className="animate-blob absolute -bottom-10 right-0 h-72 w-72 bg-golden-honey/15 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="container-shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-natural-green">
            What You&rsquo;ll Need
          </span>
          <h2 className="mt-4 text-h2 text-cream">A simple checklist to get started.</h2>
          <p className="mt-4 text-body-lg text-cream/80">
            Getting onboarded is straightforward. Have these four things ready and you&rsquo;re set to apply.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REQUIREMENTS.map((r) => (
            <motion.div
              key={r.step}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="rounded-[var(--radius-card)] border border-white/15 bg-cream/10 p-7 backdrop-blur-sm"
            >
              <span className="font-serif text-h3 text-natural-green">{r.step}</span>
              <h3 className="mt-4 text-h5 font-sans font-bold text-cream">{r.title}</h3>
              <p className="mt-2 text-body leading-relaxed text-cream/75">{r.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
