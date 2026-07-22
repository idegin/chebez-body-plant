import type { Metadata } from "next";
import { ProductsHero } from "./_components/products-hero";
import { ProductFeature } from "./_components/product-feature";
import { Comparison } from "./_components/comparison";
import { CtaBanner } from "@/app/components/cta-banner";
import { BreadcrumbJsonLd } from "@/app/components/structured-data";
import { PRODUCTS, SITE } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Our Products — Date Syrup & Date Tea",
  description:
    "Explore Bodyplant's plant-based range: naturally sweet Date Syrup and caffeine-free Date Tea. Made from carefully selected dates. NAFDAC, SON & HALAL certified.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Our Products — Date Syrup & Date Tea · ${SITE.shortName}`,
    description:
      "Explore Bodyplant's plant-based range: naturally sweet Date Syrup and caffeine-free Date Tea.",
    url: `${SITE.url}/products`,
  },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ]}
      />
      <ProductsHero />
      <div id="products">
        {PRODUCTS.map((product, i) => (
          <ProductFeature key={product.slug} product={product} index={i} />
        ))}
      </div>
      <Comparison />
      <CtaBanner />
    </>
  );
}
