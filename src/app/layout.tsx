import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { metaDescription, metaTitle, site, socialCardTitle } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

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
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: `${site.name} | ${metaTitle}`,
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
    title: `${site.name} | ${socialCardTitle}`,
    description: metaDescription,
    type: "website",
    url: canonicalUrl,
    siteName: `${site.name} — Portfolio`,
    locale: "en_DE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${metaTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${socialCardTitle}`,
    description: metaDescription,
    images: ["/opengraph-image"],
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
  keywords: [
    "Sameh Bakleh",
    "Senior Software Engineer Germany",
    "iOS Developer Germany",
    "Mobile Engineer Germany",
    "Swift Developer Germany",
    "PHP Backend Developer Germany",
    "Laravel Developer Germany",
    "Symfony Developer Germany",
    "Backend Engineer Germany",
    "Software Engineer Bochum",
    "iOS Engineer Germany",
    "Laravel API Developer",
  ],
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
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
      jobTitle: "Senior Software Engineer · iOS & PHP Backend",
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
        "iOS Development",
        "Android Development",
        "Mobile Engineering",
        "Laravel",
        "Symfony",
        "PHP",
        "REST APIs",
        "API Design",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${canonicalUrl}/#profile`,
      url: canonicalUrl,
      name: `${site.name} — ${metaTitle}`,
      description: metaDescription,
      inLanguage: "en",
      isPartOf: { "@id": `${canonicalUrl}/#website` },
      mainEntity: { "@id": `${canonicalUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}/#webpage`,
      url: canonicalUrl,
      name: `${site.name} | ${metaTitle}`,
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
