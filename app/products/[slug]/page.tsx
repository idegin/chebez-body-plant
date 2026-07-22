import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "./_components/product-detail";
import { CtaBanner } from "@/app/components/cta-banner";
import { ProductJsonLd, BreadcrumbJsonLd } from "@/app/components/structured-data";
import { PRODUCTS, getProduct, SITE } from "@/app/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} · ${SITE.shortName}`,
      description: product.summary,
      url: `${SITE.url}/products/${slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <ProductJsonLd slug={slug} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.shortName, url: `/products/${slug}` },
        ]}
      />
      <ProductDetail product={product} />
      <CtaBanner title="Request bulk supply" eyebrow="Wholesale" />
    </>
  );
}
