import type { MetadataRoute } from "next";
import { articles } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/blog", "/contact"].map((path) => ({ url: `${siteConfig.siteUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 }));
  return [...pages, ...articles.map((article) => ({ url: `${siteConfig.siteUrl}/blog/${article.slug}`, lastModified: article.publishedAt, changeFrequency: "monthly" as const, priority: .65 }))];
}
