import type { MetadataRoute } from "next";
import { metaDescription, metaTitle, site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

export default function manifest(): MetadataRoute.Manifest {
  const base = getSiteUrl();

  return {
    name: `${site.name} — Portfolio`,
    short_name: site.name,
    description: metaDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#08070f",
    theme_color: "#08070f",
    lang: "en",
    categories: ["portfolio", "business", "productivity"],
    id: base,
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
