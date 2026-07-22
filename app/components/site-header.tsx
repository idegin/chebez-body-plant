"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import { PhoneIcon } from "./ui/icons";
import { NAV, CTA, CONTACT } from "@/app/lib/site";
import logo from "@/app/brand/body-plant-logo.png";

export function SiteHeader() {
  const reduce = useReducedMotion();
  const pathname = usePathname();
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
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
                ? "border border-hairline bg-pure-white shadow-[var(--shadow-float)]"
                : "border border-transparent bg-transparent"
            }`}
          >
            <Link
              href="/"
              className="flex shrink-0 items-center rounded-[var(--radius-button)] pl-1"
              aria-label="Bodyplant Nature Resources — home"
            >
              <Image src={logo} alt="Bodyplant Nature Resources" priority placeholder="blur" className="h-9 w-auto sm:h-10" />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`group relative rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors ${
                    isActive(item.href) ? "text-deep-green" : "text-charcoal/80 hover:text-deep-green"
                  }`}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-earth-orange transition-transform duration-300 ease-[var(--ease-organic)] ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={CONTACT.salesHref}
                className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.95rem] font-semibold text-deep-green transition-colors hover:text-earth-orange"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-light-sage transition-colors group-hover:bg-earth-orange/15">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                Call Sales
              </a>
              <Button href={CTA.primary.href} arrow>
                {CTA.primary.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`grid h-11 w-11 place-items-center rounded-full border text-charcoal lg:hidden ${
                scrolled ? "border-hairline bg-cream" : "border-hairline/70 bg-cream/70 backdrop-blur"
              }`}
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

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[70] lg:hidden" initial="hidden" animate="show" exit="hidden">
            <motion.div
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-cream px-6 pb-10 pt-5 shadow-2xl"
              variants={{ hidden: { x: "100%" }, show: { x: 0 } }}
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
                  <motion.div key={item.href} variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block border-b border-hairline/70 py-4 font-serif text-2xl transition-colors hover:text-deep-green ${
                        isActive(item.href) ? "text-deep-green" : "text-charcoal"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <div className="mt-8 flex flex-col gap-3">
                <Button href={CTA.primary.href} size="lg" arrow className="w-full">
                  {CTA.primary.label}
                </Button>
                <a
                  href={CONTACT.salesHref}
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[var(--radius-button)] bg-light-sage font-semibold text-deep-green"
                >
                  <PhoneIcon className="h-4 w-4" /> Call Sales
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
