"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { KenBurns } from "@/app/components/ui/media";
import { CheckIcon } from "@/app/components/ui/icons";
import { img, PHOTO } from "@/app/lib/media";

const SERVED = [
  "Supermarkets & grocery chains",
  "Pharmacies & health stores",
  "Independent retail stores",
  "Hotels & restaurants",
  "Bulk buyers & wholesalers",
];

/** Approximate scatter of coverage points across a stylized Nigeria silhouette. */
const DOTS = [
  { x: 20, y: 42 }, { x: 30, y: 30 }, { x: 42, y: 24 }, { x: 55, y: 20 },
  { x: 68, y: 26 }, { x: 78, y: 36 }, { x: 24, y: 58 }, { x: 38, y: 50 },
  { x: 50, y: 46 }, { x: 62, y: 48 }, { x: 74, y: 56 }, { x: 33, y: 72 },
  { x: 48, y: 66 }, { x: 60, y: 70 }, { x: 44, y: 82 },
];

const STATS = [
  { n: "36", l: "States & FCT" },
  { n: "7+", l: "Retail channels" },
  { n: "100%", l: "Certified products" },
];

export function CoverageBand() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-warm-gray py-24 sm:py-28 lg:py-32">
      <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-deep-green">
              Nationwide Coverage
            </span>
            <h2 className="mt-4 max-w-lg text-h1 text-charcoal">
              Reaching healthier homes in all 36 states.
            </h2>
            <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-muted">
              From Lagos to Kano, our distribution network delivers premium plant-based nutrition nationwide —
              and we&rsquo;re expanding to serve even more communities every year.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-3">
            {SERVED.map((s) => (
              <motion.div key={s} variants={staggerItem} className="flex items-center gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-deep-green/10 text-deep-green">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-body font-medium text-charcoal">{s}</span>
              </motion.div>
            ))}
          </Stagger>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-hairline pt-8">
            {STATS.map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-h3 text-deep-green">{s.n}</dt>
                <dd className="mt-1 text-caption font-medium text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 rounded-[var(--radius-button)] bg-light-sage px-5 py-4 text-small leading-relaxed text-charcoal">
            <span className="font-bold text-deep-green">Expanding:</span> new regional hubs and distributor
            partnerships are opening across the country. Reach out to bring Bodyplant to your market.
          </p>
        </div>

        {/* Map motif + media */}
        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-[var(--radius-hero)] bg-deep-green p-8 shadow-[var(--shadow-card)] sm:p-10">
            <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <p className="relative text-caption font-bold uppercase tracking-[0.16em] text-natural-green">
              Coverage map
            </p>
            <p className="relative mt-1 font-serif text-h4 text-cream">Nationwide reach</p>

            {/* stylized Nigeria silhouette with pulsing coverage points */}
            <svg
              viewBox="0 0 100 100"
              className="relative mt-6 w-full"
              role="img"
              aria-label="Stylized map of Nigeria showing nationwide Bodyplant distribution coverage points"
            >
              <path
                d="M14 44 L26 26 L44 18 L58 16 L72 22 L84 34 L82 50 L86 62 L74 74 L60 80 L46 86 L34 78 L24 66 L18 56 Z"
                fill="rgba(255,248,241,0.06)"
                stroke="rgba(155,197,61,0.55)"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              {DOTS.map((d, i) => (
                <g key={i}>
                  {!reduce && (
                    <motion.circle
                      cx={d.x}
                      cy={d.y}
                      r={2}
                      fill="none"
                      stroke="#9BC53D"
                      strokeWidth="0.8"
                      initial={{ scale: 0.6, opacity: 0.7 }}
                      animate={{ scale: [0.6, 2.4], opacity: [0.7, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: (i % 5) * 0.4,
                        ease: "easeOut",
                      }}
                      style={{ transformOrigin: `${d.x}px ${d.y}px` }}
                    />
                  )}
                  <motion.circle
                    cx={d.x}
                    cy={d.y}
                    r={1.6}
                    fill="#DFA44B"
                    initial={reduce ? undefined : { scale: 0, opacity: 0 }}
                    whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.06 }}
                    style={{ transformOrigin: `${d.x}px ${d.y}px` }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* logistics accent */}
          <div className="mt-5 overflow-hidden rounded-[var(--radius-image)]">
            <KenBurns
              src={img(PHOTO.bottles, 900)}
              alt="Bodyplant products packaged and ready for nationwide wholesale distribution"
              rounded="rounded-none"
              className="aspect-[16/7]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
