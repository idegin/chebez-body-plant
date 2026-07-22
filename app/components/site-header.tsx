"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import logo from "@/app/brand/body-plant-logo.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Distribution", href: "#distribution" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const PHONE = "+2348000000000";

export function SiteHeader() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-button)] focus:bg-deep-green focus:px-4 focus:py-2 focus:text-pure-white"
      >
        Skip to content
      </a>

      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-shell">
          <div
            className={`mt-3 flex items-center justify-between gap-4 rounded-[var(--radius-pill)] px-3 py-2.5 transition-all duration-500 ease-[var(--ease-organic)] sm:px-4 ${
              scrolled
                ? "border border-hairline/70 bg-cream/80 shadow-[var(--shadow-float)] backdrop-blur-xl"
                : "border border-transparent bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link
              href="#home"
              className="flex shrink-0 items-center rounded-[var(--radius-button)] pl-1"
              aria-label="Bodyplant Nature Resources — home"
            >
              <Image
                src={logo}
                alt="Bodyplant Nature Resources"
                priority
                placeholder="blur"
                className="h-9 w-auto sm:h-10"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-charcoal/80 transition-colors hover:text-deep-green"
                >
                  {item.label}
                  <span className="pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-earth-orange transition-transform duration-300 ease-[var(--ease-organic)] group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:${PHONE}`}
                className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.95rem] font-semibold text-deep-green transition-colors hover:text-earth-orange"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-light-sage transition-colors group-hover:bg-earth-orange/15">
                  <PhoneIcon />
                </span>
                Call Sales
              </a>
              <Button href="#become-distributor" arrow>
                Become a Distributor
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-hairline/70 bg-cream/70 text-charcoal backdrop-blur lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="flex flex-col gap-[5px]">
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-3.5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile slide-over */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-cream px-6 pb-10 pt-5 shadow-2xl"
              variants={{
                hidden: { x: "100%" },
                show: { x: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between">
                <Image src={logo} alt="Bodyplant" className="h-9 w-auto" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-pure-white text-charcoal"
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <motion.nav
                className="mt-8 flex flex-col"
                aria-label="Mobile"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } } }}
              >
                {NAV.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
                    className="border-b border-hairline/70 py-4 font-serif text-2xl text-charcoal transition-colors hover:text-deep-green"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>

              <div className="mt-8 flex flex-col gap-3">
                <Button href="#become-distributor" size="lg" arrow className="w-full">
                  Become a Distributor
                </Button>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[var(--radius-button)] bg-light-sage font-semibold text-deep-green"
                >
                  <PhoneIcon /> Call Sales
                </a>
              </div>

              <p className="mt-auto pt-8 text-caption text-muted">
                NAFDAC · SON · HALAL certified — Made in Nigeria.
              </p>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
