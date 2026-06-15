import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { SeoPageShell } from "@/components/SeoPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Sameh Bakleh for Senior Mobile Engineer and PHP/Laravel backend API roles in Bochum, Germany — remote, hybrid, and on-site across Germany and the EU.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SeoPageShell>
      <ContactSection />
    </SeoPageShell>
  );
}
