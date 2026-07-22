"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "../ui/reveal";
import { Parallax } from "../ui/media";
import { CheckIcon } from "../ui/icons";
import { img, PHOTO } from "@/app/lib/media";

export function MadeInNigeria() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-28 lg:py-32">
      {/* full-bleed parallax band behind */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden">
        <Parallax strength={60} className="h-full">
          <div className="relative h-[130%] w-full">
            <Image src={img(PHOTO.hRetail, 1600)} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-deep-green/70 via-cream/40 to-cream" />
          </div>
        </Parallax>
      </div>

      <div className="container-shell relative">
        <Reveal className="mx-auto max-w-2xl pt-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pure-white/90 px-4 py-1.5 text-caption font-bold uppercase tracking-[0.16em] text-deep-green shadow-[var(--shadow-float)]">
            🇳🇬 Proudly Nigerian
          </span>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Made in Nigeria card */}
          <Reveal className="group relative overflow-hidden rounded-[var(--radius-card)] bg-pure-white p-8 shadow-[var(--shadow-card)] sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-natural-green/10 blur-2xl" />
            <div className="relative">
              <div className="mb-6 h-40 overflow-hidden rounded-[var(--radius-image)]">
                <motion.div
                  className="h-full w-full"
                  initial={reduce ? undefined : { scale: 1.1 }}
                  whileInView={reduce ? undefined : { scale: 1 }}
                  transition={{ duration: 8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Image src={img(PHOTO.hStocking, 800)} alt="Locally sourced Nigerian produce" width={800} height={480} className="h-full w-full object-cover" />
                </motion.div>
              </div>
              <h3 className="text-h3">Made in Nigeria, sourced in Nigeria</h3>
              <p className="mt-4 text-body leading-relaxed text-muted">
                Bodyplant products are proudly made in Nigeria. Our raw materials are sourced locally, and we encourage
                made-in-Nigeria products — supporting local farmers and building a healthier nation, together.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Locally sourced raw materials", "Supporting Nigerian farmers", "Building the made-in-Nigeria movement"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-small text-charcoal/80">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-light-sage text-deep-green">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Halal / Ramadan card — dark green feature */}
          <Reveal delay={0.1} className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-deep-green p-8 text-cream shadow-[var(--shadow-card)] sm:p-10">
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-golden-honey/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-1.5 text-caption font-bold uppercase tracking-[0.14em] text-cream ring-1 ring-white/20">
                ☪ HALAL Certified
              </span>
              <h3 className="mt-6 text-h3 text-cream">The best bet on your table — during &amp; after Ramadan</h3>
              <p className="mt-4 text-body leading-relaxed text-cream/80">
                We are Halal certified, and this makes our products the perfect choice for your table during and after the
                Ramadan fasting period — nourishing, naturally sweet, and made for the whole family.
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-4 rounded-[var(--radius-image)] bg-cream/10 p-4 ring-1 ring-white/15">
              <Image src={img(PHOTO.vPacking, 200)} alt="" width={72} height={72} className="h-16 w-16 rounded-2xl object-cover" />
              <p className="text-small text-cream/85">
                Wholesome dates for suhoor &amp; iftar — a naturally energising way to break your fast.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
