import { Reveal } from "./ui/reveal";
import { Button } from "./ui/button";
import { CTA } from "@/app/lib/site";

/** Reusable final call-to-action banner used across pages. */
export function CtaBanner({
  eyebrow = "Wholesale Partnership",
  title = "Ready to become a Bodyplant distributor?",
  body = "Partner with a reliable manufacturer delivering premium natural products, consistent supply and dedicated account management.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative bg-cream py-20 sm:py-24">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[var(--radius-hero)] bg-gradient-to-br from-deep-green to-[#0a7a39] px-8 py-16 text-center shadow-[var(--shadow-card)] sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
            <div className="animate-blob absolute -left-10 -top-10 h-56 w-56 bg-natural-green/25 blur-3xl" />
            <div className="animate-blob absolute -bottom-10 right-0 h-64 w-64 bg-golden-honey/20 blur-3xl [animation-delay:-6s]" />
          </div>
          <Reveal className="relative mx-auto max-w-2xl">
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-natural-green">{eyebrow}</span>
            <h2 className="mt-4 text-h2 text-cream">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-body-lg text-cream/80">{body}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={CTA.primary.href} size="lg" arrow>{CTA.primary.label}</Button>
              <Button href={CTA.sales.href} size="lg" variant="secondary">{CTA.sales.label}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
