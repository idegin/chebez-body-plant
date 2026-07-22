"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./ui/reveal";
import logo from "@/app/brand/body-plant-logo.png";

const COLUMNS = [
  {
    title: "Company",
    links: [
      ["About", "#about"],
      ["Distribution", "#distribution"],
      ["Become a Distributor", "#become-distributor"],
      ["FAQs", "#faqs"],
      ["Contact", "#contact"],
    ],
  },
  {
    title: "Products",
    links: [
      ["Date Syrup", "#products"],
      ["Date Tea", "#products"],
      ["Wholesale Pricing", "#become-distributor"],
      ["Product Catalogue", "#contact"],
    ],
  },
];

const CERTS = ["NAFDAC", "SON", "HALAL"];

export function SiteFooter() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer
      id="contact"
      className="relative mt-24 overflow-hidden bg-deep-green text-cream/90"
    >
      {/* organic top curve */}
      <div className="pointer-events-none absolute inset-x-0 -top-px" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-16 w-full fill-cream sm:h-24">
          <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,128 1440,72 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-60" aria-hidden="true">
        <div className="animate-blob absolute -right-20 top-10 h-72 w-72 bg-natural-green/20 blur-3xl" />
        <div className="animate-blob absolute -left-24 bottom-0 h-72 w-72 bg-golden-honey/15 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="container-shell relative pt-28 sm:pt-32">
        {/* Newsletter / CTA band */}
        <Reveal className="grid gap-8 rounded-[var(--radius-hero)] bg-cream/10 p-8 ring-1 ring-white/15 backdrop-blur-sm sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="max-w-md text-h2 text-cream">
              Ready to grow with Bodyplant?
            </h2>
            <p className="mt-3 max-w-md text-body text-cream/75">
              Get product updates, wholesale pricing and distributor
              opportunities delivered to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSent(true);
            }}
            className="w-full"
          >
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-14 flex-1 rounded-[var(--radius-input)] border border-white/20 bg-cream/95 px-5 text-body text-charcoal placeholder:text-muted focus:border-natural-green focus:outline-none"
              />
              <motion.button
                type="submit"
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="h-14 shrink-0 rounded-[var(--radius-button)] bg-earth-orange px-7 font-semibold text-pure-white transition-colors duration-300 hover:bg-golden-honey"
              >
                {sent ? "Subscribed ✓" : "Subscribe"}
              </motion.button>
            </div>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-caption text-natural-green"
              >
                Thanks — you&rsquo;re on the list. We&rsquo;ll be in touch.
              </motion.p>
            )}
          </form>
        </Reveal>

        {/* Main footer grid */}
        <div className="mt-16 grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="inline-flex rounded-[var(--radius-button)] bg-cream px-4 py-3">
              <Image src={logo} alt="Bodyplant Nature Resources" className="h-9 w-auto" />
            </div>
            <p className="mt-5 max-w-xs text-body text-cream/75">
              Premium plant-based food products made from carefully selected
              natural ingredients — nourishing lives naturally, one household at
              a time.
            </p>
            <div className="mt-6 flex gap-3">
              {["instagram", "facebook", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream ring-1 ring-white/15 transition-colors hover:bg-earth-orange hover:ring-earth-orange"
                >
                  <Social name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-sans text-caption font-bold uppercase tracking-[0.14em] text-cream/60">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-2 text-body text-cream/85 transition-colors hover:text-natural-green"
                    >
                      <span className="h-px w-0 bg-natural-green transition-all duration-300 group-hover:w-4" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact + certs */}
          <div>
            <h3 className="font-sans text-caption font-bold uppercase tracking-[0.14em] text-cream/60">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-body text-cream/85">
              <li>Lagos, Nigeria</li>
              <li>
                <a href="tel:+2348000000000" className="transition-colors hover:text-natural-green">
                  +234 800 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@bodyplant.ng" className="transition-colors hover:text-natural-green">
                  hello@bodyplant.ng
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {CERTS.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-cream/10 px-3.5 py-1.5 text-caption font-semibold text-cream ring-1 ring-white/15"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 py-7 text-caption text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Bodyplant Nature Resources. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-cream">Privacy Policy</Link>
            <Link href="#" className="transition-colors hover:text-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ name }: { name: string }) {
  const common = { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": true } as const;
  if (name === "instagram")
    return (
      <svg {...common}>
        <path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3a4 4 0 0 1-1 1.5 4 4 0 0 1-1.5 1c-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3a4 4 0 0 1 1-1.5 4 4 0 0 1 1.5-1c.6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4ZM17.4 6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
      </svg>
    );
  if (name === "facebook")
    return (
      <svg {...common}>
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.4v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
    </svg>
  );
}
