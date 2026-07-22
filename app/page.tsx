import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { ProductShowcase } from "./components/home/product-showcase";
import { MadeInNigeria } from "./components/home/made-in-nigeria";
import { WhyDates } from "./components/home/why-dates";
import { DistributionTeaser } from "./components/home/distribution-teaser";
import { CtaBanner } from "./components/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <MadeInNigeria />
      <WhyDates />
      <DistributionTeaser />
      <CtaBanner />
    </>
  );
}
