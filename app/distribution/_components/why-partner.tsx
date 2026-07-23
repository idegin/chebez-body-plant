"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { KenBurns, Parallax } from "@/app/components/ui/media";
import { CheckIcon } from "@/app/components/ui/icons";
import { img, PHOTO } from "@/app/lib/media";

const REASONS = [
  {
    title: "Reliable Supply",
    body: "Consistent production and dependable delivery keep your shelves stocked — no gaps, no guesswork.",
  },
  {
    title: "Competitive Pricing",
    body: "Wholesale pricing engineered for healthy retail margins and long-term partnership success.",
  },
  {
    title: "Marketing Support",
    body: "Point-of-sale assets, product education and campaign support to help your customers choose Bodyplant.",
  },
  {
    title: "Certified Products",
    body: "NAFDAC, SON and HALAL certified — quality your customers can trust, backed by documentation.",
  },
  {
    title: "Consistent Production",
    body: "World-class manufacturing standards deliver the same premium quality in every batch, every time.",
  },
];

export function WhyPartner() {
  return (
    <section className="relative overflow-hidden bg-light-sage py-24 sm:py-28 lg:py-32">
      <div className="container-shell grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy + reasons */}
        <div>
          <Reveal>
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-deep-green">
              Why Partner With Us
            </span>
            <h2 className="mt-4 max-w-lg text-h1 text-charcoal">
              Grow your business with a partner built on trust.
            </h2>
            <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-muted">
              We don&rsquo;t just manufacture products — we build long-term relationships with the retailers,
              wholesalers and distributors who share our commitment to healthier communities.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-4">
            {REASONS.map((r) => (
              <motion.div
                key={r.title}
                variants={staggerItem}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="flex items-start gap-4 rounded-[var(--radius-card)] bg-pure-white p-6 shadow-[var(--shadow-card)] ring-1 ring-hairline"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-deep-green/10 text-deep-green">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-h5 font-sans font-bold text-charcoal">{r.title}</h3>
                  <p className="mt-1.5 text-small leading-relaxed text-muted">{r.body}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* Media accent */}
        <Reveal delay={0.1} className="relative">
          <Parallax strength={40}>
            <KenBurns
              src={img(PHOTO.vFactory2, 1100)}
              alt="Bodyplant production line preparing premium plant-based products"
              rounded="rounded-[var(--radius-hero)]"
              className="aspect-[4/5] shadow-[var(--shadow-card)]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Parallax>

          {/* floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="absolute -bottom-6 -left-4 rounded-[var(--radius-card)] bg-pure-white px-6 py-5 shadow-[var(--shadow-card-hover)] ring-1 ring-hairline sm:-left-6"
          >
            <p className="font-serif text-h3 text-deep-green">100%</p>
            <p className="mt-1 max-w-[9rem] text-caption font-medium text-muted">
              Natural, plant-based &amp; certified
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
