"use client";

import type { SVGProps } from "react";
import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";

const ic = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

function CartIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} aria-hidden="true" {...p}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.5l2 12.5h11l2-9H6" />
    </svg>
  );
}
function PillIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} aria-hidden="true" {...p}>
      <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(45 12 12)" />
      <path d="M9 9l6 6" />
    </svg>
  );
}
function StoreIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} aria-hidden="true" {...p}>
      <path d="M4 9v10h16V9" />
      <path d="M3 9l1.5-5h15L21 9a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}
function HotelIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} aria-hidden="true" {...p}>
      <path d="M5 21V4h9v17" />
      <path d="M14 9h5v12" />
      <path d="M8 8h.01M11 8h.01M8 12h.01M11 12h.01M8 16h.01M11 16h.01" />
    </svg>
  );
}
function CutleryIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} aria-hidden="true" {...p}>
      <path d="M7 2v9m-3-9v6a3 3 0 0 0 3 3m0 0v9M4 2v5" />
      <path d="M17 2c-1.5 1-2 3-2 6s.5 3 2 3v11" />
    </svg>
  );
}
function BoxIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} aria-hidden="true" {...p}>
      <path d="M21 8l-9-5-9 5 9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}
function HeartIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...ic} aria-hidden="true" {...p}>
      <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
    </svg>
  );
}

const CHANNELS = [
  { name: "Supermarkets", desc: "Shelf-ready stock for high-traffic grocery aisles.", Icon: CartIcon },
  { name: "Pharmacies", desc: "Trusted natural wellness products your customers ask for.", Icon: PillIcon },
  { name: "Retail Stores", desc: "Reliable resupply for independent and chain retailers.", Icon: StoreIcon },
  { name: "Hotels", desc: "Premium breakfast and in-room amenities, naturally.", Icon: HotelIcon },
  { name: "Restaurants", desc: "Wholesome, plant-based ingredients for healthier menus.", Icon: CutleryIcon },
  { name: "Bulk Buyers", desc: "Wholesale volumes with consistent quality and pricing.", Icon: BoxIcon },
  { name: "Health Stores", desc: "Certified natural nutrition for wellness-focused shoppers.", Icon: HeartIcon },
];

export function WhoWeSupply() {
  return (
    <section className="bg-pure-white py-24 sm:py-28 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-deep-green">
            Who We Supply
          </span>
          <h2 className="mt-4 text-h1 text-charcoal">Stocking healthier shelves across Nigeria.</h2>
          <p className="mt-5 text-body-lg leading-relaxed text-muted">
            From national supermarket chains to neighbourhood health stores, our products reach the partners
            who bring plant-based nutrition to more homes.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map(({ name, desc, Icon }) => (
            <motion.article
              key={name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex items-start gap-5 rounded-[var(--radius-card)] bg-cream p-7 ring-1 ring-hairline transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[var(--radius-button)] bg-light-sage text-deep-green transition-colors duration-300 group-hover:bg-deep-green group-hover:text-cream">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-h5 font-sans font-bold text-charcoal">{name}</h3>
                <p className="mt-1.5 text-small leading-relaxed text-muted">{desc}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
