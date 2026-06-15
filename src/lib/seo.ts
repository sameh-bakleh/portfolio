import type { Metadata } from "next";
import { metaDescription, site, socialCardTitle } from "@/lib/site";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

type PageSeoOptions = {
  title: string;
  description: string;
  path: `/${string}`;
};

/** Shared metadata for indexable section pages — natural titles, no keyword stuffing. */
export function createPageMetadata({ title, description, path }: PageSeoOptions): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      url,
      siteName: `${site.name} — Portfolio`,
      locale: "en_DE",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${socialCardTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function homeMetadataBase() {
  return getSiteUrl();
}
