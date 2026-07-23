"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./ui/reveal";
import { SocialIcon, MailIcon, ArrowIcon } from "./ui/icons";
import { NAV, PRODUCTS, SOCIALS, CONTACT, CERTIFICATIONS, CTA, SITE } from "@/app/lib/site";
import logo from "@/app/brand/body-plant-logo.png";

export function SiteFooter() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" className="relative mt-24 overflow-hidden bg-deep-green text-cream/90">
      <div className="pointer-events-none absolute inset-x-0 -top-px" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-16 w-full fill-cream sm:h-24">
          <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,128 1440,72 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-0 opacity-60" aria-hidden="true">
        <div className="animate-blob absolute -right-20 top-10 h-72 w-72 bg-natural-green/20 blur-3xl" />
        <div className="animate-blob absolute -left-24 bottom-0 h-72 w-72 bg-golden-honey/15 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="container-shell relative pt-28 sm:pt-32">
        <Reveal className="grid gap-8 rounded-[var(--radius-hero)] bg-cream/10 p-8 ring-1 ring-white/15 backdrop-blur-sm sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="max-w-md text-h2 text-cream">Ready to grow with Bodyplant?</h2>
            <p className="mt-3 max-w-md text-body text-cream/75">
              Get product updates, wholesale pricing and distributor opportunities delivered to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSent(true);
            }}
            className="w-full"
          >
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <MailIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-14 w-full rounded-[var(--radius-input)] border border-white/20 bg-cream/95 pl-12 pr-4 text-[length:var(--text-small)] text-charcoal placeholder:text-muted focus:border-natural-green focus:outline-none focus:ring-2 focus:ring-natural-green/40"
                />
              </div>
              <motion.button
                type="submit"
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-earth-orange px-7 font-semibold text-pure-white shadow-[var(--shadow-cta)] transition-colors duration-300 hover:bg-golden-honey"
              >
                {sent ? "Subscribed ✓" : "Subscribe"}
                {!sent && <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
              </motion.button>
            </div>
            {sent && (
              <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-caption text-natural-green">
                Thanks — you&rsquo;re on the list. We&rsquo;ll be in touch.
              </motion.p>
            )}
          </form>
        </Reveal>

        <div className="mt-16 grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-[var(--radius-button)] bg-cream px-4 py-3">
              <Image src={logo} alt={SITE.name} className="h-9 w-auto" />
            </div>
            <p className="mt-5 max-w-xs text-body text-cream/75">
              Premium plant-based food products made from carefully selected natural ingredients — nourishing lives
              naturally, one household at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream ring-1 ring-white/15 transition-colors hover:bg-earth-orange hover:ring-earth-orange"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Company">
            <h3 className="text-caption font-bold uppercase tracking-[0.14em] text-cream/60">Company</h3>
            <ul className="mt-5 space-y-3">
              {NAV.filter((n) => n.href !== "/").map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href={CTA.primary.href}>{CTA.primary.label}</FooterLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Products">
            <h3 className="text-caption font-bold uppercase tracking-[0.14em] text-cream/60">Products</h3>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <FooterLink href={`/products/${p.slug}`}>{p.shortName}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/become-a-distributor">Wholesale Pricing</FooterLink>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-caption font-bold uppercase tracking-[0.14em] text-cream/60">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-body text-cream/85">
              <li>{CONTACT.addressLine}</li>
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-natural-green">{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="transition-colors hover:text-natural-green">{CONTACT.email}</a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {CERTIFICATIONS.map((c) => (
                <span key={c.code} className="rounded-full bg-cream/10 px-3.5 py-1.5 text-caption font-semibold text-cream ring-1 ring-white/15">
                  {c.code}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 py-7 text-caption text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="transition-colors hover:text-cream">Privacy Policy</Link>
            <Link href="/" className="transition-colors hover:text-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-body text-cream/85 transition-colors hover:text-natural-green">
      <span className="h-px w-0 bg-natural-green transition-all duration-300 group-hover:w-4" />
      {children}
    </Link>
  );
}
