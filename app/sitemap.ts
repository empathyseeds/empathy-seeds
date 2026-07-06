import type { MetadataRoute } from "next";
import { articles } from "./articles/data";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/stories",
    "/articles",
    "/contact",
    "/get-help",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/articles" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/articles" ? 0.9 : 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
