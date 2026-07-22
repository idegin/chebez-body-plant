"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";

type Value = { title: string; body: string; icon: string };

const VALUES: Value[] = [
  {
    title: "Integrity",
    body: "Every ingredient, every process and every promise reflects honesty and transparency.",
    icon: "shield",
  },
  {
    title: "Innovation",
    body: "We continuously improve our products while staying true to nature.",
    icon: "spark",
  },
  {
    title: "Quality",
    body: "From sourcing to packaging, excellence is our standard.",
    icon: "check",
  },
  {
    title: "People First",
    body: "Every decision begins with the wellbeing of our customers, partners and team.",
    icon: "heart",
  },
  {
    title: "Sustainability",
    body: "Healthy products should never come at the expense of the environment.",
    icon: "leaf",
  },
  {
    title: "Excellence",
    body: "Good enough is never enough.",
    icon: "star",
  },
];

export function AboutValues() {
  return (
    <section className="relative scroll-mt-24 bg-warm-gray py-24 sm:py-28 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
            Core Values
          </span>
          <h2 className="mt-4 text-h2">The principles behind every product we make.</h2>
          <p className="mt-4 text-body-lg text-muted">
            Six commitments that guide how we source, manufacture and partner — from the first date to the
            final bottle.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <motion.article
              key={v.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-hairline/70 bg-pure-white p-8 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-light-sage/70 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-[var(--radius-button)] bg-light-sage text-deep-green transition-colors duration-300 group-hover:bg-deep-green group-hover:text-cream">
                  <ValueIcon name={v.icon} />
                </div>
                <h3 className="mt-6 text-h5 font-sans font-bold">{v.title}</h3>
                <p className="mt-3 text-body leading-relaxed text-muted">{v.body}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ValueIcon({ name }: { name: string }) {
  const p = {
    className: "h-7 w-7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "spark":
      return (
        <svg {...p}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M12 8l1.4 2.6L16 12l-2.6 1.4L12 16l-1.4-2.6L8 12l2.6-1.4Z" />
        </svg>
      );
    case "check":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l2.5 2.5L16 9" />
        </svg>
      );
    case "heart":
      return (
        <svg {...p}>
          <path d="M12 20s-7-4.3-9.2-8.4C1.3 8.9 3 6 6 6c1.8 0 3 1 4 2.3C11 7 12.2 6 14 6c3 0 4.7 2.9 3.2 5.6C19 15.7 12 20 12 20Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...p}>
          <path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 8-3 14-9 16Z" />
          <path d="M8 16c2-4 5-6 9-8" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-2.8L7 19l1-6-4-4 5.5-.5Z" />
        </svg>
      );
  }
}
