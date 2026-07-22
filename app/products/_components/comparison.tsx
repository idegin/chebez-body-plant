"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { CheckIcon } from "@/app/components/ui/icons";
import { PRODUCTS } from "@/app/lib/site";

type Row = { label: string; values: boolean[] };

/** Feature comparison across both products. Uses check / dash + SR text (not color-only). */
const ROWS: Row[] = [
  { label: "100% Natural", values: [true, true] },
  { label: "Plant-Based", values: [true, true] },
  { label: "Sugar-Free", values: [true, true] },
  { label: "Caffeine-Free", values: [false, true] },
  { label: "Family-Friendly", values: [true, true] },
];

function Mark({ on }: { on: boolean }) {
  return on ? (
    <span className="mx-auto inline-grid h-8 w-8 place-items-center rounded-full bg-deep-green/10 text-deep-green">
      <CheckIcon className="h-4 w-4" />
      <span className="sr-only">Yes</span>
    </span>
  ) : (
    <span className="mx-auto inline-grid h-8 w-8 place-items-center rounded-full bg-hairline/50 text-muted">
      <span aria-hidden="true" className="block h-0.5 w-3.5 rounded-full bg-current" />
      <span className="sr-only">Not applicable</span>
    </span>
  );
}

const accents = ["text-earth-orange", "text-deep-green"] as const;

export function Comparison() {
  return (
    <section className="relative bg-warm-gray py-24 sm:py-28 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">Side by side</span>
          <h2 className="mt-4 text-h2">Two products, one promise of natural nutrition.</h2>
          <p className="mt-4 text-body-lg text-muted">
            Both are wholesome and certified — pick the one that fits your shelves, or stock them together.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden rounded-[var(--radius-card)] bg-pure-white shadow-[var(--shadow-card)] ring-1 ring-hairline/70">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-hairline/70 bg-cream px-5 py-5 sm:px-8">
              <span className="text-caption font-bold uppercase tracking-[0.12em] text-muted">Feature</span>
              {PRODUCTS.map((p, i) => (
                <span
                  key={p.slug}
                  className={`text-center text-small font-bold sm:text-body ${accents[i]}`}
                >
                  {p.shortName}
                </span>
              ))}
            </div>

            <Stagger>
              {ROWS.map((row) => (
                <motion.div
                  key={row.label}
                  variants={staggerItem}
                  className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-hairline/60 px-5 py-4 last:border-b-0 odd:bg-warm-gray/40 sm:px-8"
                >
                  <span className="text-small font-semibold text-charcoal sm:text-body">{row.label}</span>
                  {row.values.map((v, i) => (
                    <div key={i} className="text-center">
                      <Mark on={v} />
                    </div>
                  ))}
                </motion.div>
              ))}
            </Stagger>
          </div>

          <p className="mt-5 text-center text-caption text-muted">
            &ldquo;—&rdquo; indicates not applicable. Date Tea is naturally caffeine-free; Date Syrup is a sweetener.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
