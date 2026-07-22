"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";

type Benefit = { title: string; body: string; icon: string };

const BENEFITS: Benefit[] = [
  {
    title: "Higher Margins",
    body: "Competitive wholesale pricing engineered for healthy retail margins and repeat sales.",
    icon: "margin",
  },
  {
    title: "Premium Products",
    body: "Certified, naturally made Date Syrup and Date Tea that customers trust and return for.",
    icon: "leaf",
  },
  {
    title: "Marketing Support",
    body: "Product knowledge, promotional assets and shelf-ready guidance to help you sell faster.",
    icon: "megaphone",
  },
  {
    title: "Reliable Supply",
    body: "Consistent production and dependable delivery, so your shelves are never left empty.",
    icon: "truck",
  },
  {
    title: "Dedicated Account Manager",
    body: "A single point of contact for pricing, ordering and support — the whole way through.",
    icon: "handshake",
  },
];

export function DistributorBenefits() {
  return (
    <section className="relative scroll-mt-24 bg-pure-white py-24 sm:py-28 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
            Why Partner With Us
          </span>
          <h2 className="mt-4 text-h2">Everything you need to grow, in one partnership.</h2>
          <p className="mt-4 text-body-lg text-muted">
            We don&rsquo;t just manufacture products — we build long-term relationships with retailers and
            distributors who share our commitment to healthier communities.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <motion.article
              key={b.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-hairline/70 bg-pure-white p-8 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-light-sage/70 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-[var(--radius-button)] bg-light-sage text-deep-green transition-colors duration-300 group-hover:bg-deep-green group-hover:text-cream">
                  <BenefitIcon name={b.icon} />
                </div>
                <h3 className="mt-6 text-h5 font-sans font-bold">{b.title}</h3>
                <p className="mt-3 text-body leading-relaxed text-muted">{b.body}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function BenefitIcon({ name }: { name: string }) {
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
    case "margin":
      return (
        <svg {...p}>
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
          <path d="M16 6l3-3 3 3" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...p}>
          <path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 8-3 14-9 16Z" />
          <path d="M8 16c2-4 5-6 9-8" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...p}>
          <path d="M3 11v2a1 1 0 0 0 1 1h2l6 4V7L6 11H4a1 1 0 0 0-1 0Z" />
          <path d="M15 8a4 4 0 0 1 0 8M18 5a8 8 0 0 1 0 14" />
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
    case "handshake":
      return (
        <svg {...p}>
          <path d="M12 7 9 4 3 9l3 3 2-2 4 4 2-2 3 3 3-3-6-6-3 3" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M5 13l4 4L19 7" />
        </svg>
      );
  }
}
