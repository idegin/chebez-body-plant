"use client";

import { motion, useReducedMotion } from "motion/react";
import { KenBurns } from "@/app/components/ui/media";
import { Reveal } from "@/app/components/ui/reveal";
import { PinIcon, ArrowIcon } from "@/app/components/ui/icons";
import { img, PHOTO } from "@/app/lib/media";
import { CONTACT } from "@/app/lib/site";

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CONTACT.addressFull
)}`;

export function ContactMap() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-pure-white py-20 sm:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-deep-green">
            Find us
          </span>
          <h2 className="mt-4 text-h2">Our home base</h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-muted">
            Bodyplant Nature Resources is proudly manufactured and distributed from Nigeria.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-[var(--radius-hero)] shadow-[var(--shadow-card)] ring-1 ring-hairline">
            {/* cinematic backdrop */}
            <KenBurns
              src={img(PHOTO.kitchen, 1600)}
              alt="Bodyplant production kitchen in Abuja, Nigeria"
              rounded="rounded-[var(--radius-hero)]"
              className="h-[360px] w-full sm:h-[440px]"
              sizes="(max-width: 1320px) 100vw, 1320px"
            />

            {/* map-motif overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0a3d1e]/92 via-[#0a3d1e]/45 to-[#0a3d1e]/25"
              aria-hidden="true"
            />
            {/* faint grid + route lines to evoke a map */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-cream/15"
              viewBox="0 0 1200 440"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <pattern id="mapgrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M60 0H0V60" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="1200" height="440" fill="url(#mapgrid)" />
              <path
                d="M-20 300 C 200 260 340 360 520 300 S 900 200 1220 260"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="10 12"
                className="text-natural-green/40"
              />
            </svg>

            {/* animated pin marker */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-16 w-16 items-center justify-center">
                {!reduce && (
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-natural-green/60" />
                )}
                <motion.span
                  initial={reduce ? false : { y: -8, opacity: 0 }}
                  whileInView={reduce ? undefined : { y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="relative grid h-12 w-12 place-items-center rounded-full bg-earth-orange text-cream shadow-lg ring-4 ring-cream/30"
                >
                  <PinIcon className="h-6 w-6" />
                </motion.span>
              </span>
            </div>

            {/* address card */}
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-8 sm:bottom-8">
              <div className="flex flex-col gap-4 rounded-[var(--radius-card)] bg-cream/95 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-input)] bg-earth-orange/10 text-earth-orange">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-caption font-bold uppercase tracking-[0.12em] text-muted">
                      Factory location
                    </p>
                    <p className="mt-0.5 text-body-lg font-semibold text-charcoal">
                      {CONTACT.addressFull}
                    </p>
                  </div>
                </div>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-button)] bg-deep-green px-6 font-semibold text-cream shadow-[var(--shadow-cta)] transition-colors hover:bg-earth-orange"
                >
                  Get directions
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
