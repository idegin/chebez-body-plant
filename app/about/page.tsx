import type { Metadata } from "next";
import { AboutHero } from "./_components/about-hero";
import { AboutStory } from "./_components/about-story";
import { AboutMissionVision } from "./_components/about-mission-vision";
import { AboutValues } from "./_components/about-values";
import { AboutManufacturing } from "./_components/about-manufacturing";
import { AboutPromise } from "./_components/about-promise";
import { CtaBanner } from "@/app/components/cta-banner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bodyplant Nature Resources is a Nigerian health and wellness company creating premium plant-based nutrition — Date Syrup & Date Tea. Discover our story, mission, values and manufacturing philosophy.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our Story — Natural Nutrition, Inspired by Nature",
    description:
      "Discover the story, mission, vision and values behind Bodyplant Nature Resources — premium, plant-based nutrition proudly made in Nigeria.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutValues />
      <AboutManufacturing />
      <AboutPromise />
      <CtaBanner
        eyebrow="Wholesale Partnership"
        title="Partner with Bodyplant"
        body="Join a reliable manufacturer delivering premium natural products, consistent supply and dedicated account management — and help more families choose healthier nutrition."
      />
    </>
  );
}
