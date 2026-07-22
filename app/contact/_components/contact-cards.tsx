"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { PhoneIcon, MailIcon, ArrowIcon } from "@/app/components/ui/icons";
import { CONTACT } from "@/app/lib/site";

type Card = {
  key: string;
  eyebrow: string;
  title: string;
  body: string;
  linkLabel: string;
  href: string;
  external?: boolean;
  icon: "phone" | "mail" | "handshake";
  accent: "orange" | "green" | "clay";
};

const CARDS: Card[] = [
  {
    key: "sales",
    eyebrow: "Talk to a person",
    title: "Sales",
    body: "Get wholesale pricing, minimum order quantities and delivery details straight from our sales team.",
    linkLabel: "Call sales",
    href: CONTACT.salesHref,
    external: true,
    icon: "phone",
    accent: "orange",
  },
  {
    key: "distribution",
    eyebrow: "Grow your business",
    title: "Distribution",
    body: "Ready to stock Bodyplant across your stores or region? Apply to become a distributor.",
    linkLabel: "Become a distributor",
    href: "/become-a-distributor",
    icon: "handshake",
    accent: "green",
  },
  {
    key: "general",
    eyebrow: "Everything else",
    title: "General enquiries",
    body: "Questions about our products, ingredients or certifications? Send us a note and we'll reply.",
    linkLabel: CONTACT.email,
    href: CONTACT.emailHref,
    external: true,
    icon: "mail",
    accent: "clay",
  },
];

const accentClasses: Record<Card["accent"], { ring: string; icon: string; glow: string }> = {
  orange: {
    ring: "hover:ring-earth-orange/40",
    icon: "bg-earth-orange/10 text-earth-orange",
    glow: "from-earth-orange/12",
  },
  green: {
    ring: "hover:ring-deep-green/40",
    icon: "bg-deep-green/10 text-deep-green",
    glow: "from-deep-green/12",
  },
  clay: {
    ring: "hover:ring-warm-clay/40",
    icon: "bg-warm-clay/10 text-warm-clay",
    glow: "from-warm-clay/12",
  },
};

function CardIcon({ icon, className }: { icon: Card["icon"]; className?: string }) {
  if (icon === "phone") return <PhoneIcon className={className} />;
  if (icon === "mail") return <MailIcon className={className} />;
  // handshake
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M11 17 8.5 14.5a1.8 1.8 0 0 1 0-2.6l3.9-3.9a2 2 0 0 1 2.6 0L20 12" />
      <path d="m14 15 2.5 2.5a1.8 1.8 0 0 0 2.6-2.6" />
      <path d="M4 8 2 10l4 5 2-2" />
      <path d="M20 12h2V6h-4l-2 2" />
      <path d="M4 8h4l2-2h4" />
    </svg>
  );
}

export function ContactCards() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-pure-white py-20 sm:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-deep-green">
            Choose your route
          </span>
          <h2 className="mt-4 text-h2">How can we help you today?</h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-muted">
            Pick the fastest way to reach the right people — or use the form below for anything in between.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => {
            const a = accentClasses[c.accent];
            const inner = (
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-cream p-8 shadow-[var(--shadow-card)] ring-1 ring-hairline transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] ${a.ring}`}
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  aria-hidden="true"
                />
                <span
                  className={`relative grid h-14 w-14 place-items-center rounded-[var(--radius-input)] ${a.icon}`}
                >
                  <CardIcon icon={c.icon} className="h-6 w-6" />
                </span>
                <span className="relative mt-6 text-caption font-bold uppercase tracking-[0.14em] text-muted">
                  {c.eyebrow}
                </span>
                <h3 className="relative mt-1.5 text-h4 text-charcoal">{c.title}</h3>
                <p className="relative mt-3 flex-1 text-body text-muted">{c.body}</p>
                <span className="relative mt-6 inline-flex items-center gap-2 font-semibold text-deep-green transition-colors group-hover:text-earth-orange">
                  {c.linkLabel}
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1" />
                </span>
              </motion.div>
            );

            return (
              <motion.div key={c.key} variants={staggerItem} className="h-full">
                {c.external ? (
                  <a
                    href={c.href}
                    className="block h-full rounded-[var(--radius-card)] focus-visible:outline-none"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    href={c.href}
                    className="block h-full rounded-[var(--radius-card)] focus-visible:outline-none"
                  >
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
