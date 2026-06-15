import { site } from "@/lib/site";

/** Public portfolio URL — used for canonical, sitemap, and robots (no custom domain). */
export const CANONICAL_SITE_URL = site.portfolio.replace(/\/$/, "");

export function getSiteUrl(): string {
  return CANONICAL_SITE_URL;
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? CANONICAL_SITE_URL : `${CANONICAL_SITE_URL}${normalized}`;
}
