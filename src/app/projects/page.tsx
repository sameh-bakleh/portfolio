import type { Metadata } from "next";
import { BackendWorkSection } from "@/components/BackendWorkSection";
import { GitHubProofSection } from "@/components/GitHubProofSection";
import { IosWorkSection } from "@/components/IosWorkSection";
import { SeoPageShell } from "@/components/SeoPageShell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected iOS and PHP/Laravel API projects — Swift, SwiftUI, MVVM, REST integrations, Redis, Docker, and production-style engineering samples.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <SeoPageShell>
      <IosWorkSection />
      <BackendWorkSection />
      <GitHubProofSection />
    </SeoPageShell>
  );
}
