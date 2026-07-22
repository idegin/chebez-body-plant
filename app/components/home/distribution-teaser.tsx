"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "../ui/reveal";
import { VideoBackdrop } from "../ui/video-backdrop";
import { Button } from "../ui/button";
import { img, PHOTO, VIDEO } from "@/app/lib/media";
import { CTA } from "@/app/lib/site";

const AUDIENCE = ["Supermarkets", "Pharmacies", "Health stores", "Hotels", "Restaurants", "Bulk buyers", "Retailers", "Distributors"];

export function DistributionTeaser() {
  return (
    <section id="distribution" className="relative overflow-hidden py-28 text-cream sm:py-32">
      <VideoBackdrop src={VIDEO.leaves} poster={img(PHOTO.kitchen, 1400)} overlay="bg-[#0a3d20]/85" />

      <div className="container-shell relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="text-caption font-bold uppercase tracking-[0.16em] text-natural-green">Distribution Network</span>
              <h2 className="mt-4 max-w-lg text-h1 text-cream">Helping healthy products reach more Nigerians.</h2>
              <p className="mt-5 max-w-lg text-body-lg text-cream/80">
                We manufacture and distribute nationwide with reliable supply, consistent quality and dedicated account
                management — so partners across the country can stock products their customers trust.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={CTA.primary.href} size="lg" arrow>{CTA.primary.label}</Button>
              <Button href="/distribution" size="lg" variant="secondary" className="!bg-transparent !text-cream !ring-cream/50 hover:!bg-cream/10">
                See Coverage
              </Button>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {AUDIENCE.map((a) => (
              <motion.div
                key={a}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="rounded-[var(--radius-button)] border border-white/15 bg-cream/10 px-5 py-4 text-body font-semibold text-cream backdrop-blur-sm"
              >
                {a}
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
