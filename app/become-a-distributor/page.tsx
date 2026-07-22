import type { Metadata } from "next";
import { DistributorHero } from "./_components/distributor-hero";
import { DistributorBenefits } from "./_components/distributor-benefits";
import { DistributorRequirements } from "./_components/distributor-requirements";
import { DistributorApply } from "./_components/distributor-apply";
import { DistributorFaq } from "./_components/distributor-faq";
import { CtaBanner } from "@/app/components/cta-banner";

export const metadata: Metadata = {
  title: "Become a Distributor",
  description:
    "Partner with Bodyplant Nature Resources — a reliable Nigerian manufacturer of premium plant-based products. Higher margins, marketing support, consistent supply and dedicated account management. Apply to become a distributor.",
  alternates: { canonical: "/become-a-distributor" },
  openGraph: {
    title: "Become a Bodyplant Distributor — Let's Grow Together",
    description:
      "Higher margins, premium certified products, marketing support and reliable supply. Apply to become a Bodyplant distributor and grow your business.",
    url: "/become-a-distributor",
  },
};

export default function BecomeADistributorPage() {
  return (
    <>
      <DistributorHero />
      <DistributorBenefits />
      <DistributorRequirements />
      <DistributorApply />
      <DistributorFaq />
      <CtaBanner
        eyebrow="Questions?"
        title="Prefer to talk it through first?"
        body="Our wholesale team is happy to answer your questions before you apply — get pricing, minimums and delivery details straight from a person."
      />
    </>
  );
}
