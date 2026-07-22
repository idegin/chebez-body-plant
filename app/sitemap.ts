import type { MetadataRoute } from "next";
import { SITE, PRODUCTS } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/products", "/distribution", "/become-a-distributor", "/faqs", "/contact"];
  const staticPages = routes.map((r) => ({
    url: `${SITE.url}${r}`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const productPages = PRODUCTS.map((p) => ({
    url: `${SITE.url}/products/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...staticPages, ...productPages];
}
