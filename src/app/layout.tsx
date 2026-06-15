import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { metaDescription, metaTitle, site, socialCardTitle } from "@/lib/site";

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

const canonicalUrl = site.portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: `${site.name} | ${metaTitle}`,
  description: metaDescription,
  authors: [{ name: site.name }],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `${site.name} | ${socialCardTitle}`,
    description: metaDescription,
    type: "website",
    url: canonicalUrl,
    siteName: `${site.name} — Portfolio`,
    locale: "en_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${socialCardTitle}`,
    description: metaDescription,
  },
  robots: { index: true, follow: true },
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
  ],
};

export const viewport: Viewport = {
  themeColor: "#08070f",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Senior Software Engineer · iOS & PHP Backend",
  email: site.email,
  url: canonicalUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bochum",
    addressCountry: "DE",
  },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "Swift",
    "SwiftUI",
    "iOS Development",
    "Mobile Engineering",
    "Laravel",
    "Symfony",
    "REST APIs",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} — Portfolio`,
  url: canonicalUrl,
  description: metaDescription,
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${roboto.variable} ${jetbrains.variable} min-h-screen bg-terminal font-sans text-on-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
