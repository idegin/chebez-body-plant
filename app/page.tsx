import { SiteHeader } from "./components/site-header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { SiteFooter } from "./components/site-footer";
import { Reveal } from "./components/ui/reveal";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Features />

        {/* Final CTA — anchors for Products / Distribution / Become a Distributor / FAQs */}
        <section id="products" className="relative scroll-mt-24 pb-4">
          <div className="container-shell">
            <div
              id="become-distributor"
              className="relative scroll-mt-24 overflow-hidden rounded-[var(--radius-hero)] bg-gradient-to-br from-deep-green to-[#0a7a39] px-8 py-16 text-center shadow-[var(--shadow-card)] sm:px-12 sm:py-20"
            >
              <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
                <div className="animate-blob absolute -left-10 -top-10 h-56 w-56 bg-natural-green/25 blur-3xl" />
                <div className="animate-blob absolute -bottom-10 right-0 h-64 w-64 bg-golden-honey/20 blur-3xl [animation-delay:-6s]" />
              </div>
              <Reveal className="relative mx-auto max-w-2xl">
                <span
                  id="distribution"
                  className="block scroll-mt-24 text-caption font-bold uppercase tracking-[0.16em] text-natural-green"
                >
                  Wholesale Partnership
                </span>
                <h2 className="mt-4 text-h2 text-cream">
                  Ready to become a Bodyplant distributor?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-body-lg text-cream/80">
                  Partner with a reliable manufacturer delivering premium natural
                  products, consistent supply and dedicated account management.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href="#contact" size="lg" arrow>
                    Become a Distributor
                  </Button>
                  <Button href="#contact" size="lg" variant="secondary">
                    Speak to Sales
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
          <span id="faqs" className="block scroll-mt-24" aria-hidden="true" />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
