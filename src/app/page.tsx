import { AmbientBackground } from "@/components/AmbientBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { TerminalHeader } from "@/components/TerminalHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { IosWorkSection } from "@/components/IosWorkSection";
import { BackendWorkSection } from "@/components/BackendWorkSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GitHubProofSection } from "@/components/GitHubProofSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

export default function Home() {
  return (
    <>
      <CommandPalette />
      <CustomCursor />
      <ScrollProgress />
      <AmbientBackground />
      <TerminalHeader />
      <main className="relative z-[60]">
        <HeroSection />
        <AboutSection />
        <IosWorkSection />
        <BackendWorkSection />
        <SkillsSection />
        <ExperienceSection />
        <GitHubProofSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
