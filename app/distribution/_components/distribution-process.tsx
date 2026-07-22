"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Reveal } from "@/app/components/ui/reveal";

const STEPS = [
  {
    n: "01",
    title: "Inquiry",
    body: "Reach out with your business details and volume needs — the first step to becoming a Bodyplant partner.",
  },
  {
    n: "02",
    title: "Sales Discussion",
    body: "A dedicated account manager learns about your market, channels and goals to tailor the right supply plan.",
  },
  {
    n: "03",
    title: "Pricing",
    body: "Receive competitive wholesale pricing designed for healthy margins and long-term retail success.",
  },
  {
    n: "04",
    title: "Approval",
    body: "We confirm terms, certifications and onboarding — everything set for a smooth, reliable partnership.",
  },
  {
    n: "05",
    title: "Delivery",
    body: "Consistent, on-time delivery keeps your shelves stocked with premium plant-based nutrition.",
  },
];

export function DistributionProcess() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useSpring(rawScale, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section className="relative overflow-hidden bg-deep-green py-24 text-cream sm:py-28 lg:py-32">
      {/* subtle grain + ambient blobs */}
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="animate-blob pointer-events-none absolute -right-16 top-10 h-72 w-72 bg-natural-green/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-natural-green">
            Distribution Process
          </span>
          <h2 className="mt-4 text-h1 text-cream">Five simple steps to partnership.</h2>
          <p className="mt-5 text-body-lg leading-relaxed text-cream/80">
            From first enquiry to reliable delivery — a clear, dependable path to stocking Bodyplant products.
          </p>
        </Reveal>

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* vertical track */}
          <div
            className="absolute left-[27px] top-2 bottom-2 w-px bg-cream/15 sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-natural-green to-golden-honey"
              style={reduce ? { scaleY: 1 } : { scaleY }}
            />
          </div>

          <ol className="space-y-10 sm:space-y-14">
            {STEPS.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <li key={step.n} className="relative">
                  <div
                    className={`flex items-start gap-6 sm:w-1/2 ${
                      left ? "sm:pr-14" : "sm:ml-auto sm:flex-row-reverse sm:pl-14 sm:text-right"
                    }`}
                  >
                    {/* node */}
                    <motion.span
                      initial={reduce ? undefined : { scale: 0, opacity: 0 }}
                      whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
                      className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-cream font-serif text-h5 text-deep-green shadow-[var(--shadow-cta)] sm:absolute sm:top-0 ${
                        left ? "sm:right-0 sm:translate-x-1/2" : "sm:left-0 sm:-translate-x-1/2"
                      }`}
                    >
                      {step.n}
                    </motion.span>

                    {/* card */}
                    <motion.div
                      initial={reduce ? undefined : { opacity: 0, y: 24 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                      className="flex-1 rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur sm:p-7"
                    >
                      <h3 className="text-h4 font-sans font-bold text-cream">{step.title}</h3>
                      <p className="mt-2 text-small leading-relaxed text-cream/80">{step.body}</p>
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
