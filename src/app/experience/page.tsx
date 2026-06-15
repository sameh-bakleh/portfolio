import type { Metadata } from "next";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SeoPageShell } from "@/components/SeoPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Professional experience as a Senior Mobile Engineer and PHP/Laravel backend developer across iOS, Android, APIs, and platform delivery in Germany and Europe.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <SeoPageShell>
      <ExperienceSection />
    </SeoPageShell>
  );
}
