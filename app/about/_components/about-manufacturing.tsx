"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { ImageBackdrop } from "@/app/components/ui/image-backdrop";
import { CheckIcon } from "@/app/components/ui/icons";
import { img, PHOTO } from "@/app/lib/media";

const PILLARS = [
  {
    title: "Quality",
    body: "From sourcing carefully selected natural ingredients to maintaining world-class production standards, excellence is built into every batch.",
  },
  {
    title: "Safety",
    body: "Safe manufacturing practices and rigorous, food-safe processes protect the wholesome nutrition our families trust.",
  },
  {
    title: "Consistency",
    body: "Certified by NAFDAC, SON and HALAL authorities — reliable, repeatable quality in every bottle and every tea bag.",
  },
];

export function AboutManufacturing() {
  return (
    <section className="relative overflow-hidden bg-[#20130c] py-24 text-cream sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <ImageBackdrop
          src={img(PHOTO.qualityLab, 1400)}
          overlay="bg-[#20130c]/78"
        />
      </div>

      <div className="container-shell grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-golden-honey">
              Manufacturing Philosophy
            </span>
            <h2 className="mt-4 text-h1 text-cream">Uncompromising quality, from source to shelf.</h2>
            <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-cream/80">
              By combining the richness of nature with world-class production standards, we produce wholesome
              products that help families embrace healthier lifestyles — without sacrificing taste,
              convenience or affordability.
            </p>
          </Reveal>
        </div>

        {/* Pillars */}
        <Stagger className="grid gap-4">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex items-start gap-5 rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur sm:p-7"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius-button)] bg-natural-green/20 font-serif text-h5 text-natural-green">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="flex items-center gap-2 text-h5 font-sans font-bold text-cream">
                  <CheckIcon className="h-4 w-4 text-natural-green" />
                  {pillar.title}
                </h3>
                <p className="mt-2 text-small leading-relaxed text-cream/80">{pillar.body}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
