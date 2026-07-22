"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Reveal, Stagger, staggerItem } from "@/app/components/ui/reveal";
import { KenBurns, Parallax } from "@/app/components/ui/media";
import { VideoBackdrop } from "@/app/components/ui/video-backdrop";
import { Button } from "@/app/components/ui/button";
import { CheckIcon, LeafIcon, ArrowIcon } from "@/app/components/ui/icons";
import { CTA, CERTIFICATIONS, type Product } from "@/app/lib/site";
import { img, VIDEO } from "@/app/lib/media";

type Accent = {
  eyebrow: string;
  chipRing: string;
  chipText: string;
  ringSoft: string;
  video: string;
  overlay: string;
  numberText: string;
  badgeBg: string;
  benefitIcon: string;
  benefitIconBg: string;
  stepRing: string;
};

const ACCENTS: Record<Product["accent"], Accent> = {
  orange: {
    eyebrow: "text-earth-orange",
    chipRing: "ring-earth-orange/20",
    chipText: "text-earth-orange",
    ringSoft: "ring-white/10",
    video: VIDEO.amberPour,
    overlay: "bg-gradient-to-t from-[#20130c]/90 via-[#20130c]/40 to-[#20130c]/25",
    numberText: "text-earth-orange/90",
    badgeBg: "bg-earth-orange",
    benefitIcon: "text-earth-orange",
    benefitIconBg: "bg-earth-orange/12",
    stepRing: "ring-earth-orange/25 text-earth-orange",
  },
  green: {
    eyebrow: "text-deep-green",
    chipRing: "ring-deep-green/15",
    chipText: "text-deep-green",
    ringSoft: "ring-white/40",
    video: VIDEO.leaves,
    overlay: "bg-gradient-to-t from-[#0d3b1e]/90 via-[#0d3b1e]/40 to-[#0d3b1e]/25",
    numberText: "text-deep-green/80",
    badgeBg: "bg-deep-green",
    benefitIcon: "text-deep-green",
    benefitIconBg: "bg-deep-green/10",
    stepRing: "ring-deep-green/20 text-deep-green",
  },
};

export function ProductDetail({ product }: { product: Product }) {
  const a = ACCENTS[product.accent];
  return (
    <>
      <DetailHero product={product} a={a} />
      <Overview product={product} a={a} />
      <Benefits product={product} a={a} />
      <HowToUse product={product} a={a} />
      <Packaging product={product} a={a} />
      <Certifications a={a} />
      <ProductFaqs product={product} a={a} />
    </>
  );
}

/* 1 · HERO */
function DetailHero({ product, a }: { product: Product; a: Accent }) {
  const reduce = useReducedMotion();
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-0 -z-10">
        <VideoBackdrop src={a.video} poster={img(product.hero, 1600)} overlay={a.overlay} />
      </div>

      <div className="container-shell flex min-h-[calc(92vh-10rem)] flex-col justify-end pb-20">
        <motion.nav
          aria-label="Breadcrumb"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-2 text-caption font-medium text-cream/70"
        >
          <span>Products</span>
          <span aria-hidden="true">/</span>
          <span className="text-cream">{product.shortName}</span>
        </motion.nav>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="max-w-3xl text-[length:var(--text-hero)] leading-[1.03] text-cream"
        >
          {product.name}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-5 max-w-xl text-body-lg leading-relaxed text-cream/85"
        >
          {product.tagline}
        </motion.p>

        {/* Benefit chips */}
        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 flex flex-wrap gap-2.5"
        >
          {product.benefits.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 rounded-[var(--radius-pill)] bg-pure-white/90 px-4 py-2 text-caption font-semibold text-charcoal shadow-[var(--shadow-float)] backdrop-blur"
            >
              <LeafIcon className="h-3.5 w-3.5 text-natural-green" />
              {b.split(" — ")[0]}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href={CTA.primary.href} size="lg" arrow>
            Request Wholesale Pricing
          </Button>
          <div className="flex flex-wrap items-center gap-2">
            {CERTIFICATIONS.map((c) => (
              <span
                key={c.code}
                className="rounded-[var(--radius-pill)] border border-cream/30 bg-cream/10 px-3.5 py-1.5 text-caption font-bold text-cream backdrop-blur"
              >
                {c.code}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* 2 · OVERVIEW */
function Overview({ product, a }: { product: Product; a: Accent }) {
  return (
    <section className="relative bg-pure-white py-24 sm:py-28 lg:py-32">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Reveal>
            <span className={`text-caption font-bold uppercase tracking-[0.16em] ${a.eyebrow}`}>Overview</span>
            <h2 className="mt-4 max-w-md text-h2">{product.summary}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-lg text-body-lg leading-relaxed text-muted">{product.description}</p>
          </Reveal>
          <Reveal delay={0.14} className="mt-8">
            <Button href={CTA.primary.href} variant="text" arrow>
              Partner with Bodyplant
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
          <Parallax strength={30} className="col-span-1">
            <KenBurns
              src={img(product.gallery[0], 700)}
              alt={`${product.name} detail`}
              className="aspect-[3/4] w-full shadow-[var(--shadow-card)] ring-1 ring-hairline/60"
            />
          </Parallax>
          <div className="col-span-1 mt-10 flex flex-col gap-4">
            <KenBurns
              src={img(product.gallery[1], 600)}
              alt={`${product.name} in use`}
              className="aspect-square w-full shadow-[var(--shadow-card)] ring-1 ring-hairline/60"
            />
            <KenBurns
              src={img(product.gallery[2], 600)}
              alt={`${product.name} lifestyle`}
              className="aspect-square w-full shadow-[var(--shadow-card)] ring-1 ring-hairline/60"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 3 · BENEFITS */
function Benefits({ product, a }: { product: Product; a: Accent }) {
  return (
    <section className="relative bg-light-sage py-24 sm:py-28 lg:py-32">
      <LeafIcon className="pointer-events-none absolute right-6 top-14 h-24 w-24 text-natural-green/20" />
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className={`text-caption font-bold uppercase tracking-[0.16em] ${a.eyebrow}`}>Why you&rsquo;ll love it</span>
          <h2 className="mt-4 text-h2">The benefits, in every bottle.</h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {product.benefits.map((b) => {
            const [head, ...rest] = b.split(" — ");
            return (
              <motion.article
                key={b}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex items-start gap-5 rounded-[var(--radius-card)] bg-pure-white p-7 shadow-[var(--shadow-card)] ring-1 ring-hairline/60 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius-button)] ${a.benefitIconBg} ${a.benefitIcon}`}>
                  <CheckIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-h5 font-sans font-bold">{head}</h3>
                  {rest.length > 0 && <p className="mt-2 text-body leading-relaxed text-muted">{rest.join(" — ")}</p>}
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* 4 · HOW TO USE */
function HowToUse({ product, a }: { product: Product; a: Accent }) {
  return (
    <section className="relative overflow-hidden bg-pure-white py-24 sm:py-28 lg:py-32">
      <div className="container-shell grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <Reveal>
            <span className={`text-caption font-bold uppercase tracking-[0.16em] ${a.eyebrow}`}>How to use</span>
            <h2 className="mt-4 max-w-md text-h2">Simple ways to enjoy it every day.</h2>
          </Reveal>

          <Stagger className="mt-12 flex flex-col">
            {product.uses.map((u, i) => (
              <motion.div
                key={u}
                variants={staggerItem}
                className="flex items-center gap-6 border-t border-hairline/70 py-6 last:border-b"
              >
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full font-serif text-h4 ring-2 ${a.stepRing}`}>
                  {i + 1}
                </span>
                <p className="text-body-lg font-medium text-charcoal">{u}</p>
                <ArrowIcon className="ml-auto hidden h-5 w-5 text-muted/50 sm:block" />
              </motion.div>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
          <KenBurns
            src={img(product.gallery[0], 700)}
            alt={`Enjoying ${product.name}`}
            className="aspect-[4/5] w-full shadow-[var(--shadow-card)] ring-1 ring-hairline/60"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* 5 · PACKAGING */
function Packaging({ product, a }: { product: Product; a: Accent }) {
  return (
    <section className="relative bg-warm-gray py-24 sm:py-28 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className={`text-caption font-bold uppercase tracking-[0.16em] ${a.eyebrow}`}>Packaging options</span>
          <h2 className="mt-4 text-h2">Sizes for every shelf and every home.</h2>
          <p className="mt-4 text-body-lg text-muted">
            From retail units to bulk wholesale — ask our team for the full pack specification.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {product.packaging.map((p, i) => (
            <motion.article
              key={p}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] bg-pure-white p-8 text-center shadow-[var(--shadow-card)] ring-1 ring-hairline/60 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              <span className={`font-serif text-h2 ${a.numberText}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-h5 font-sans font-bold">{p}</h3>
              <p className="mt-2 text-caption font-medium uppercase tracking-[0.12em] text-muted">
                {i === product.packaging.length - 1 ? "Wholesale" : "Retail"}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* 6 · CERTIFICATIONS */
function Certifications({ a }: { a: Accent }) {
  return (
    <section className="relative overflow-hidden bg-deep-green py-20 text-cream sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="animate-blob absolute -left-10 -top-10 h-56 w-56 bg-natural-green/25 blur-3xl" />
        <div className="animate-blob absolute -bottom-10 right-0 h-64 w-64 bg-golden-honey/20 blur-3xl [animation-delay:-6s]" />
      </div>
      <div className="container-shell relative text-center">
        <Reveal>
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-natural-green">Certified quality</span>
          <h2 className="mt-4 text-h2 text-cream">Trusted, tested and certified.</h2>
        </Reveal>
        <Stagger className="mt-12 flex flex-wrap items-stretch justify-center gap-5">
          {CERTIFICATIONS.map((c) => (
            <motion.div
              key={c.code}
              variants={staggerItem}
              className="flex min-w-[13rem] flex-1 items-center gap-4 rounded-[var(--radius-card)] bg-cream/10 p-6 text-left ring-1 ring-cream/20 backdrop-blur"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream/15">
                <CheckIcon className="h-6 w-6 text-natural-green" />
              </span>
              <div>
                <p className="font-serif text-h5 text-cream">{c.code}</p>
                <p className="mt-0.5 text-caption text-cream/75">{c.label}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* 7 · PRODUCT FAQs */
function faqsFor(product: Product) {
  const common = [
    {
      q: "Is this product 100% natural?",
      a: "Yes. It is made from carefully selected dates with no artificial additives or refined sugar — wholesome nutrition you can trust.",
    },
    {
      q: "Is it suitable for children?",
      a: "Absolutely. It is designed for the whole family and is gentle enough for children as well as adults.",
    },
    {
      q: "Do you supply wholesale and bulk quantities?",
      a: "Yes. We offer retail packs and bulk / wholesale formats for distributors, supermarkets, pharmacies and health stores. Request pricing to get started.",
    },
    {
      q: "Which certifications does it carry?",
      a: "Our products are NAFDAC registered, SON certified and HALAL certified, produced under strict food-safe standards.",
    },
  ];
  if (product.caffeineFree) {
    return [
      {
        q: "Does Date Seed Infusion contain caffeine?",
        a: "No. Date Seed Infusion is naturally caffeine-free, making it a calm, comforting coffee alternative you can enjoy any time — morning or night.",
      },
      {
        q: "How do I prepare it?",
        a: "Steep one tea bag in hot water for 3–5 minutes. Enjoy it plain or with a splash of milk for a soothing, naturally sweet cup.",
      },
      ...common.slice(1),
    ];
  }
  return common;
}

function ProductFaqs({ product, a }: { product: Product; a: Accent }) {
  const faqs = faqsFor(product);
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-cream py-24 sm:py-28 lg:py-32">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1fr]">
        <Reveal>
          <span className={`text-caption font-bold uppercase tracking-[0.16em] ${a.eyebrow}`}>FAQs</span>
          <h2 className="mt-4 max-w-xs text-h2">{product.shortName} questions, answered.</h2>
          <p className="mt-4 max-w-sm text-body text-muted">
            Have another question? Our sales team is happy to help with product and wholesale enquiries.
          </p>
          <Button href={CTA.sales.href} variant="secondary" arrow className="mt-7">
            Speak to Sales
          </Button>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-[var(--radius-card)] bg-pure-white shadow-[var(--shadow-card)] ring-1 ring-hairline/60"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex min-h-[3.5rem] w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-green"
                >
                  <span className="text-body font-bold text-charcoal">{f.q}</span>
                  <motion.span
                    animate={reduce ? undefined : { rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${a.benefitIconBg} ${a.benefitIcon}`}
                    aria-hidden="true"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-body leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
