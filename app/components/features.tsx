"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "./ui/reveal";

const FEATURES = [
  {
    title: "Premium Ingredients",
    body: "Naturally sourced plant ingredients, carefully selected for wholesome nutrition.",
    icon: "leaf",
  },
  {
    title: "Strict Quality Control",
    body: "Produced under rigorous, food-safe standards for consistent quality.",
    icon: "shield",
  },
  {
    title: "Nationwide Distribution",
    body: "Reliable wholesale supply reaching retailers across all 36 states.",
    icon: "truck",
  },
  {
    title: "Trusted Certifications",
    body: "NAFDAC, SON and HALAL certified — quality you and your customers can trust.",
    icon: "badge",
  },
  {
    title: "Competitive Wholesale Pricing",
    body: "Margins designed for retail success and long-term partnership.",
    icon: "tag",
  },
  {
    title: "Dedicated Support",
    body: "A responsive team and account management built for distributors.",
    icon: "chat",
  },
];

export function Features() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
            Why Bodyplant
          </span>
          <h2 className="mt-4 text-h2">
            Healthy products. Trusted manufacturing. Reliable distribution.
          </h2>
          <p className="mt-4 text-body-lg text-muted">
            Everything we make reinforces three promises — natural &amp; healthy,
            trusted &amp; certified, and built for business.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <motion.article
              key={f.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-[var(--radius-card)] border border-hairline/70 bg-pure-white p-8 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-[var(--radius-button)] bg-light-sage text-deep-green transition-colors duration-300 group-hover:bg-deep-green group-hover:text-cream">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="mt-6 text-h5 font-sans font-bold">{f.title}</h3>
              <p className="mt-3 text-body leading-relaxed text-muted">{f.body}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
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
    case "leaf":
      return (
        <svg {...p}>
          <path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 8-3 14-9 16Z" />
          <path d="M8 16c2-4 5-6 9-8" />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "truck":
      return (
        <svg {...p}>
          <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="17.5" cy="18" r="1.6" />
        </svg>
      );
    case "badge":
      return (
        <svg {...p}>
          <circle cx="12" cy="9" r="6" />
          <path d="M9 14l-1.5 7L12 18l4.5 3L15 14" />
          <path d="M9.5 9l1.7 1.7L15 7" />
        </svg>
      );
    case "tag":
      return (
        <svg {...p}>
          <path d="M3 12l9-9 8 8-9 9-8-8Z" />
          <circle cx="8.5" cy="8.5" r="1.4" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M4 5h16v11H8l-4 4z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );
  }
}
