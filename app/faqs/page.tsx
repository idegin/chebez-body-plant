import type { Metadata } from "next";
import { FaqHero } from "./_components/faq-hero";
import { FaqExplorer } from "./_components/faq-explorer";
import { StillQuestions } from "./_components/still-questions";
import { CtaBanner } from "@/app/components/cta-banner";
import { ALL_FAQS } from "./_components/data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about Bodyplant Date Syrup & Date Seed Infusion — 100% natural, caffeine-free, NAFDAC, SON & HALAL certified — plus wholesale distribution, orders and nationwide delivery across Nigeria.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "Frequently Asked Questions",
    description:
      "Everything about our natural Date Syrup & Date Seed Infusion, certifications, and how to partner with Bodyplant as a distributor or retailer.",
    url: "/faqs",
  },
};

/** FAQPage structured data — helps search engines and AI surface our answers. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqHero />
      <FaqExplorer />
      <StillQuestions />
      <CtaBanner
        eyebrow="Wholesale Partnership"
        title="Got the answers? Let's grow together."
        body="Partner with a certified Nigerian manufacturer delivering premium natural products, reliable supply and dedicated account management."
      />
    </>
  );
}
