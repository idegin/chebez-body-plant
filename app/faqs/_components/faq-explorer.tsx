"use client";

import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/app/components/ui/reveal";
import { FAQ_CATEGORIES, type Faq, type FaqCategory } from "./data";
import { FaqCategoryIcon } from "./faq-icons";

/** Highlight matched query text inside an answer/question, accessibly. */
function useFiltered(query: string) {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_CATEGORIES;
    return FAQ_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q),
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [query]);
}

export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string>(FAQ_CATEGORIES[0].id);
  const filtered = useFiltered(query);
  const searching = query.trim().length > 0;

  // When searching, show every matching category; otherwise the selected one.
  const visible = searching
    ? filtered
    : filtered.filter((c) => c.id === activeId);

  const totalMatches = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <section className="relative bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        {/* Search */}
        <Reveal className="mx-auto mb-12 max-w-xl">
          <label htmlFor="faq-search" className="sr-only">
            Search frequently asked questions
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.9}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.2-3.2" />
              </svg>
            </span>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions — e.g. caffeine, wholesale, HALAL"
              className="h-14 w-full rounded-[var(--radius-input)] border border-hairline bg-pure-white pr-5 text-body text-charcoal shadow-[var(--shadow-float)] outline-none transition-colors duration-200 placeholder:text-muted/70 focus-visible:border-deep-green"
              style={{ paddingLeft: "3.25rem" }}
              aria-describedby="faq-search-status"
            />
          </div>
          <p
            id="faq-search-status"
            aria-live="polite"
            className={`mt-3 text-center text-caption text-muted ${searching ? "" : "sr-only"}`}
          >
            {totalMatches === 0
              ? "No questions match your search — try another word or contact us below."
              : `${totalMatches} question${totalMatches === 1 ? "" : "s"} match "${query.trim()}"`}
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          {/* Sticky category nav (desktop) / horizontal chips (mobile) */}
          <nav aria-label="FAQ categories" className="lg:sticky lg:top-28 lg:self-start">
            <ul className="flex snap-x gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0">
              {FAQ_CATEGORIES.map((cat) => {
                const isActive = !searching && cat.id === activeId;
                return (
                  <li key={cat.id} className="snap-start">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveId(cat.id);
                        setQuery("");
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={`group flex w-full items-center gap-3 whitespace-nowrap rounded-[var(--radius-button)] px-4 py-3 text-left text-[0.975rem] font-semibold transition-colors duration-200 ${
                        isActive
                          ? "bg-deep-green text-cream shadow-[var(--shadow-cta)]"
                          : "text-charcoal hover:bg-light-sage"
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-[10px] transition-colors duration-200 ${
                          isActive
                            ? "bg-white/15 text-cream"
                            : "bg-light-sage text-deep-green group-hover:bg-pure-white"
                        }`}
                      >
                        <FaqCategoryIcon name={cat.icon} style={{ width: "1.15rem", height: "1.15rem" }} />
                      </span>
                      {cat.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Accordion column */}
          <div className="min-w-0">
            {visible.length === 0 ? (
              <div className="rounded-[var(--radius-card)] border border-hairline bg-pure-white p-10 text-center shadow-[var(--shadow-card)]">
                <p className="text-body-lg font-semibold text-charcoal">Nothing found</p>
                <p className="mt-2 text-body text-muted">
                  We couldn&apos;t match that search. Try a simpler term, or reach our team using the
                  options below.
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {visible.map((cat) => (
                  <CategoryBlock key={cat.id} category={cat} showHeader={searching} highlight={query.trim()} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({
  category,
  showHeader,
  highlight,
}: {
  category: FaqCategory;
  showHeader: boolean;
  highlight: string;
}) {
  return (
    <section id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-28">
      <header className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-button)] bg-light-sage text-deep-green">
          <FaqCategoryIcon name={category.icon} style={{ width: "1.4rem", height: "1.4rem" }} />
        </span>
        <div>
          <h2 id={`${category.id}-heading`} className="text-h4 font-sans font-bold text-charcoal">
            {category.label}
          </h2>
          {showHeader && <p className="text-caption text-muted">{category.blurb}</p>}
        </div>
      </header>

      <ul className="space-y-3">
        {category.items.map((faq, i) => (
          <AccordionItem key={faq.q} faq={faq} defaultOpen={!showHeader && i === 0} highlight={highlight} />
        ))}
      </ul>
    </section>
  );
}

function AccordionItem({
  faq,
  defaultOpen = false,
  highlight,
}: {
  faq: Faq;
  defaultOpen?: boolean;
  highlight: string;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const panelId = `panel-${uid}`;
  const btnId = `trigger-${uid}`;

  return (
    <li
      className={`overflow-hidden rounded-[var(--radius-card)] border bg-pure-white transition-colors duration-300 ${
        open ? "border-deep-green/30 shadow-[var(--shadow-card)]" : "border-hairline hover:border-deep-green/25"
      }`}
    >
      <h3 className="m-0">
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-4 px-6 py-5 text-left font-sans text-body font-semibold text-charcoal transition-colors duration-200 hover:text-deep-green focus-visible:outline-none sm:px-7"
        >
          <span className="flex-1">
            <Highlighted text={faq.q} query={highlight} />
          </span>
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
              open ? "rotate-45 bg-deep-green text-cream" : "bg-light-sage text-deep-green"
            }`}
            aria-hidden="true"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            key="content"
            initial={reduce ? { opacity: 1, height: "auto" } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 1, height: "auto" } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="border-t border-hairline/70 px-6 pb-6 pt-5 text-body leading-relaxed text-muted sm:px-7">
              <Highlighted text={faq.a} query={highlight} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/** Bold the matched substring when searching. */
function Highlighted({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  const idx = lower.indexOf(q);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-natural-green/30 px-0.5 text-charcoal">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}
