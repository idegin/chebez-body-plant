"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { KenBurns } from "@/app/components/ui/media";
import { Button } from "@/app/components/ui/button";
import { LeafIcon } from "@/app/components/ui/icons";
import { CTA, PRODUCTS } from "@/app/lib/site";
import { img } from "@/app/lib/media";

/** Products listing hero — editorial intro with a paired media collage. */
export function ProductsHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_15%_-10%,var(--color-light-sage),transparent_55%),radial-gradient(90%_60%_at_100%_0%,rgba(223,164,75,0.12),transparent_55%)]" />
        <div className="animate-blob absolute -right-24 top-20 h-80 w-80 bg-natural-green/20 blur-3xl" />
      </div>

      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-deep-green/15 bg-pure-white/70 px-4 py-1.5 text-caption font-semibold uppercase tracking-[0.14em] text-deep-green backdrop-blur"
          >
            <LeafIcon className="h-4 w-4 text-natural-green" />
            Our Products
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="mt-6 max-w-xl text-[length:var(--text-hero)] leading-[1.04]"
          >
            Plant-based nutrition, <span className="text-gradient-brand italic">designed</span> for healthier living.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="mt-6 max-w-lg text-body-lg leading-relaxed text-muted"
          >
            Two flagship products, made from carefully selected dates — naturally sweet, wholesome and certified.
            Crafted for families and trusted by distributors across Nigeria.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={CTA.primary.href} size="lg" arrow>
              {CTA.primary.label}
            </Button>
            <Button href="#products" size="lg" variant="secondary">
              Explore the range
            </Button>
          </motion.div>
        </div>

        {/* Paired media collage */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 lg:max-w-none"
        >
          <motion.div style={{ y: yA }}>
            <KenBurns
              src={img(PRODUCTS[0].hero, 700)}
              alt="Bodyplant Date Syrup"
              className="aspect-[3/4] w-full shadow-[var(--shadow-card)] ring-1 ring-white/50"
              priority
            />
            <span className="mt-3 block text-center text-caption font-bold uppercase tracking-[0.14em] text-earth-orange">
              Date Syrup
            </span>
          </motion.div>
          <motion.div style={{ y: yB }} className="mt-8">
            <KenBurns
              src={img(PRODUCTS[1].hero, 700)}
              alt="Bodyplant Date Seed Infusion"
              className="aspect-[3/4] w-full shadow-[var(--shadow-card)] ring-1 ring-white/50"
            />
            <span className="mt-3 block text-center text-caption font-bold uppercase tracking-[0.14em] text-deep-green">
              Date Seed Infusion
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
