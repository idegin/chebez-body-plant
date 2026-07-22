"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { CONTACT, CTA } from "@/app/lib/site";

type Card = {
  title: string;
  body: string;
  action: string;
  href: string;
  external?: boolean;
  icon: "chat" | "phone" | "handshake";
};

const CARDS: Card[] = [
  {
    title: "Chat on WhatsApp",
    body: "Get quick answers to wholesale and product questions from our sales team.",
    action: "Message us",
    href: CONTACT.whatsappHref,
    external: true,
    icon: "chat",
  },
  {
    title: "Speak with Sales",
    body: "Prefer to talk it through? Call us about pricing, supply and orders.",
    action: CONTACT.salesDisplay,
    href: CONTACT.salesHref,
    icon: "phone",
  },
  {
    title: "Become a Distributor",
    body: "Ready to stock Bodyplant? Apply and we'll follow up with wholesale terms.",
    action: CTA.primary.label,
    href: CTA.primary.href,
    icon: "handshake",
  },
];

export function StillQuestions() {
  return (
    <section className="relative bg-light-sage py-24 sm:py-28">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
            Still have questions?
          </span>
          <h2 className="mt-4 text-h2">We&apos;re here to help.</h2>
          <p className="mt-4 text-body-lg text-muted">
            Our team responds quickly and warmly — whether you&apos;re a family curious about our products or a
            business ready to partner.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {CARDS.map((c) => {
            const inner = (
              <>
                <div className="grid place-items-center rounded-[var(--radius-button)] bg-light-sage text-deep-green transition-colors duration-300 group-hover:bg-deep-green group-hover:text-cream" style={{ width: "3.25rem", height: "3.25rem" }}>
                  <CardIcon name={c.icon} />
                </div>
                <h3 className="mt-6 text-h5 font-sans font-bold text-charcoal">{c.title}</h3>
                <p className="mt-2 flex-1 text-body leading-relaxed text-muted">{c.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-deep-green transition-colors duration-200 group-hover:text-earth-orange">
                  {c.action}
                  <svg
                    className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </>
            );

            const cardClass =
              "group flex h-full flex-col rounded-[var(--radius-card)] border border-hairline/70 bg-pure-white p-8 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]";

            return (
              <motion.div
                key={c.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                {c.external ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={c.href} className={cardClass}>
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

function CardIcon({ name }: { name: Card["icon"] }): ReactNode {
  const p = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "chat":
      return (
        <svg {...p}>
          <path d="M21 11.5a7.5 7.5 0 0 1-10.9 6.7L4 20l1.8-4.1A7.5 7.5 0 1 1 21 11.5Z" />
          <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
        </svg>
      );
    case "phone":
      return (
        <svg {...p}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M11 5 8 8l3 3 2-2 4 4-3 3-2-2-3 3-4-4 3-3-2-2 3-3 3 3Z" />
        </svg>
      );
  }
}
