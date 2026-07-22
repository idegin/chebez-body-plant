"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { KenBurns } from "@/app/components/ui/media";
import { ImageBackdrop } from "@/app/components/ui/image-backdrop";
import { Button } from "@/app/components/ui/button";
import { CheckIcon, LeafIcon } from "@/app/components/ui/icons";
import { CTA, type Product } from "@/app/lib/site";
import { img } from "@/app/lib/media";

/**
 * Full-width cinematic product feature block for the listing page.
 * Dark, video-led treatment for the orange syrup; light editorial for green tea.
 */
export function ProductFeature({ product, index }: { product: Product; index: number }) {
  return product.accent === "orange" ? (
    <SyrupFeature product={product} index={index} />
  ) : (
    <TeaFeature product={product} index={index} />
  );
}

function num(i: number) {
  return String(i + 1).padStart(2, "0");
}

function SyrupFeature({ product, index }: { product: Product; index: number }) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[#20130c] py-24 text-cream sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <ImageBackdrop src={img(product.hero, 1400)} overlay="bg-[#20130c]/72" />
      </div>

      <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <KenBurns
            src={img(product.gallery[0], 900)}
            alt={`${product.name} — golden natural sweetness`}
            className="aspect-[4/5] w-full shadow-[var(--shadow-card)] ring-1 ring-white/10"
          />
          <motion.div
            className="absolute -bottom-6 -right-4 w-44 overflow-hidden rounded-[var(--radius-image)] shadow-[var(--shadow-card)] ring-4 ring-[#20130c] sm:w-56"
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={img(product.gallery[1], 500)} alt="" width={500} height={500} className="aspect-square object-cover" />
          </motion.div>
          <div className="absolute -left-3 top-6 rounded-[var(--radius-pill)] bg-earth-orange px-4 py-2 text-caption font-bold text-pure-white shadow-[var(--shadow-float)]">
            No refined sugar
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="font-serif text-h2 text-earth-orange/90">{num(index)}</span>
            <span className="ml-3 text-caption font-bold uppercase tracking-[0.18em] text-golden-honey">
              {product.shortName}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-md text-h1 text-cream">{product.tagline}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-cream/80">{product.description}</p>
          </Reveal>

          <Stagger className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
            {product.benefits.map((b) => (
              <motion.div key={b} variants={staggerItem} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-earth-orange/20 text-golden-honey">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-small text-cream/85">{b}</span>
              </motion.div>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={CTA.primary.href} size="lg" arrow>
              Request Pricing
            </Button>
            <Button href={`/products/${product.slug}`} size="lg" variant="secondary">
              View Product
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TeaFeature({ product, index }: { product: Product; index: number }) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-light-sage py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-natural-green/15 blur-3xl" />
      <LeafIcon className="pointer-events-none absolute left-4 top-16 h-24 w-24 text-natural-green/20" />

      <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="font-serif text-h2 text-deep-green/80">{num(index)}</span>
            <span className="ml-3 text-caption font-bold uppercase tracking-[0.18em] text-deep-green">
              {product.shortName}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-md text-h1">{product.tagline}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-body-lg leading-relaxed text-muted">{product.description}</p>
          </Reveal>

          <Stagger className="mt-8 flex flex-col gap-3">
            {product.benefits.map((b) => (
              <motion.div key={b} variants={staggerItem} className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-deep-green/10 text-deep-green">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-body text-charcoal/85">{b}</span>
              </motion.div>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={CTA.primary.href} size="lg" arrow>
              Request Pricing
            </Button>
            <Button href={`/products/${product.slug}`} size="lg" variant="secondary">
              View Product
            </Button>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <KenBurns
            src={img(product.hero, 900)}
            alt={product.name}
            className="aspect-[4/5] w-full shadow-[var(--shadow-card)] ring-1 ring-white/50"
          />
          <motion.div
            className="absolute -bottom-8 -left-6 w-40 overflow-hidden rounded-[var(--radius-image)] shadow-[var(--shadow-card)] ring-4 ring-light-sage sm:w-52"
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={img(product.gallery[1], 500)} alt="" width={500} height={500} className="aspect-square object-cover" />
          </motion.div>
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-[var(--radius-pill)] bg-pure-white/90 px-4 py-2 text-caption font-bold text-deep-green shadow-[var(--shadow-float)] backdrop-blur">
            <LeafIcon className="h-4 w-4 text-natural-green" /> Caffeine-Free
          </div>
        </Reveal>
      </div>
    </section>
  );
}
