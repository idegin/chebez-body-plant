import type { Metadata } from "next";
import { DistributionHero } from "./_components/distribution-hero";
import { WhoWeSupply } from "./_components/who-we-supply";
import { WhyPartner } from "./_components/why-partner";
import { DistributionProcess } from "./_components/distribution-process";
import { CoverageBand } from "./_components/coverage-band";
import { CtaBanner } from "@/app/components/cta-banner";

export const metadata: Metadata = {
  title: "Distribution",
  description:
    "Nigeria's trusted distribution partner for plant-based nutrition. Bodyplant supplies supermarkets, pharmacies, retailers, hotels, restaurants and bulk buyers with reliable, certified Date Syrup & Date Tea — nationwide.",
  alternates: { canonical: "/distribution" },
  openGraph: {
    title: "Nigeria's Trusted Distribution Partner for Plant-Based Nutrition",
    description:
      "Reliable supply, competitive wholesale pricing and certified products — delivered nationwide. Partner with Bodyplant Nature Resources.",
    url: "/distribution",
  },
};

export default function DistributionPage() {
  return (
    <>
      <DistributionHero />
      <WhoWeSupply />
      <WhyPartner />
      <DistributionProcess />
      <CoverageBand />
      <CtaBanner eyebrow="Grow with us" title="Become a Bodyplant distributor" />
    </>
  );
}
