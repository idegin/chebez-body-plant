"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/app/components/ui/reveal";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What is the minimum order to become a distributor?",
    a: "Minimums are flexible and depend on your business type and location. Once you apply, your dedicated account manager will share wholesale pricing tiers and the minimum order that makes sense for you.",
  },
  {
    q: "Which products can I stock?",
    a: "Our full range is available for wholesale — Bodyplant Date Syrup and Bodyplant Date Seed Infusion — in retail and bulk packaging, all NAFDAC, SON and HALAL certified.",
  },
  {
    q: "Do you deliver nationwide?",
    a: "Yes. We manufacture and distribute across Nigeria, supplying supermarkets, pharmacies, health stores, hotels, restaurants and bulk buyers. Delivery timelines are confirmed based on your state.",
  },
  {
    q: "How is pricing structured for wholesale partners?",
    a: "We offer competitive, volume-based wholesale pricing designed to protect healthy retail margins. Larger and consistent volumes unlock better rates.",
  },
  {
    q: "How long does approval take?",
    a: "Our team typically responds within one business day of receiving your application to discuss pricing, supply and next steps.",
  },
];

export function DistributorFaq() {
  return (
    <section className="relative scroll-mt-24 bg-warm-gray py-24 sm:py-28 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
            Wholesale FAQs
          </span>
          <h2 className="mt-4 text-h2">Answers before you apply.</h2>
          <p className="mt-4 text-body-lg text-muted">
            The questions retailers and distributors ask us most. Still unsure? Talk to our sales team.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <ul className="space-y-4">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} qa={f} defaultOpen={i === 0} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function FaqItem({ qa, defaultOpen = false }: { qa: QA; defaultOpen?: boolean }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const panelId = `faq-panel-${uid}`;
  const btnId = `faq-btn-${uid}`;

  return (
    <li className="overflow-hidden rounded-[var(--radius-card)] border border-hairline/70 bg-pure-white shadow-[var(--shadow-card)]">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-sans text-body-lg font-semibold text-charcoal focus-visible:outline-none sm:px-8"
        >
          {qa.q}
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-light-sage text-deep-green"
            aria-hidden="true"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-body leading-relaxed text-muted sm:px-8">{qa.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
