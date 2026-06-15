import type { MetadataRoute } from "next";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

const routes = ["/", "/projects", "/experience", "/contact"] as const;

const priorities: Record<(typeof routes)[number], number> = {
  "/": 1,
  "/projects": 0.9,
  "/experience": 0.85,
  "/contact": 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: path === "/" ? getSiteUrl() : absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: priorities[path],
  }));
}
