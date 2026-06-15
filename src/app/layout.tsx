import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { metaDescription, seoTitle, site, socialCardTitle } from "@/lib/site";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-roboto",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const canonicalUrl = getSiteUrl();
const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ??
  "4Dhs-PzRyr2tE0o78YMN7fTx7pQidIP30Vn9RUcUot0";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: seoTitle,
    template: `%s | ${site.name}`,
  },
  description: metaDescription,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: canonicalUrl }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "en-DE": canonicalUrl,
      en: canonicalUrl,
    },
  },
  openGraph: {
    title: seoTitle,
    description: metaDescription,
    type: "website",
    url: canonicalUrl,
    siteName: `${site.name} — Portfolio`,
    locale: "en_DE",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${site.name} — ${socialCardTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: metaDescription,
    images: [absoluteUrl("/opengraph-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: googleVerification,
  },
};

export const viewport: Viewport = {
  themeColor: "#08070f",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${canonicalUrl}/#website`,
      url: canonicalUrl,
      name: `${site.name} — Portfolio`,
      description: metaDescription,
      inLanguage: "en",
      publisher: { "@id": `${canonicalUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${canonicalUrl}/#person`,
      name: site.name,
      jobTitle: "Senior Mobile Engineer · PHP/Laravel Backend APIs",
      email: site.email,
      url: canonicalUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bochum",
        addressRegion: "NRW",
        addressCountry: "DE",
      },
      sameAs: [site.linkedin, site.github],
      knowsAbout: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "MVVM",
        "iOS Development",
        "Mobile Engineering",
        "Laravel",
        "PHP",
        "REST APIs",
        "Docker",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${canonicalUrl}/#profile`,
      url: canonicalUrl,
      name: seoTitle,
      description: metaDescription,
      inLanguage: "en",
      isPartOf: { "@id": `${canonicalUrl}/#website` },
      mainEntity: { "@id": `${canonicalUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      url: canonicalUrl,
      name: seoTitle,
      description: metaDescription,
      inLanguage: "en",
      isPartOf: { "@id": `${canonicalUrl}/#website` },
      about: { "@id": `${canonicalUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${roboto.variable} ${jetbrains.variable} min-h-screen scroll-smooth bg-terminal font-sans text-on-surface antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
