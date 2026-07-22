"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/app/components/ui/reveal";
import { KenBurns } from "@/app/components/ui/media";
import { LeafIcon } from "@/app/components/ui/icons";
import { img, PHOTO } from "@/app/lib/media";

export function AboutStory() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-pure-white py-24 sm:py-28 lg:py-32">
      <LeafIcon className="pointer-events-none absolute -right-8 top-16 h-40 w-40 text-light-sage" />

      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
              Our Story
            </span>
            <h2 className="mt-4 text-h1">Founded on a simple but powerful belief.</h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 space-y-5 text-body leading-relaxed text-muted">
            <p className="text-body-lg text-charcoal/90">
              Nature already provides many of the ingredients our bodies need to thrive.
            </p>
            <p>
              In a world increasingly filled with artificial additives, refined sugars and highly processed
              foods, we saw an opportunity to return people to healthier, more natural alternatives. Rather
              than creating products filled with unnecessary ingredients, we chose to let nature speak for
              itself.
            </p>
            <p>
              Our flagship products — Bodyplant Date Syrup and Bodyplant Date Seed Infusion — represent this philosophy.
              Made from carefully selected dates, they deliver wholesome nutrition, authentic flavour and
              everyday versatility while supporting healthier lifestyles for children and adults alike.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-8 rounded-[var(--radius-card)] border-l-4 border-natural-green bg-light-sage/60 p-6">
            <p className="font-serif text-h4 leading-snug text-deep-green">
              &ldquo;Create products people can trust, distribute them responsibly, and make healthier
              choices available to more families across Nigeria and beyond.&rdquo;
            </p>
          </Reveal>
        </div>

        {/* Media collage */}
        <Reveal delay={0.06} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <KenBurns
            src={img(PHOTO.harvestHands, 900)}
            alt="Hands holding a fresh natural harvest"
            className="aspect-[4/5] w-full shadow-[var(--shadow-card)] ring-1 ring-hairline"
          />
          <motion.div
            className="absolute -bottom-8 -left-6 w-40 overflow-hidden rounded-[var(--radius-image)] shadow-[var(--shadow-card)] ring-4 ring-pure-white sm:w-52"
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={img(PHOTO.produce, 500)}
              alt="Fresh natural produce spread"
              width={500}
              height={500}
              className="aspect-square object-cover"
            />
          </motion.div>
          <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-[var(--radius-pill)] bg-pure-white/95 px-4 py-2 text-caption font-bold text-deep-green shadow-[var(--shadow-float)] backdrop-blur">
            <LeafIcon className="h-4 w-4 text-natural-green" /> Naturally sourced
          </div>
        </Reveal>
      </div>
    </section>
  );
}
