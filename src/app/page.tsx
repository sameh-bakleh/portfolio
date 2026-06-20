import { AmbientBackground } from "@/components/AmbientBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { TerminalHeader } from "@/components/TerminalHeader";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { IosWorkSection } from "@/components/IosWorkSection";
import { BackendWorkSection } from "@/components/BackendWorkSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { GitHubProofSection } from "@/components/GitHubProofSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

/** Recruiter scan order: who → proof of work → shipped → skills → depth → contact */
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
        <ExperienceSection />
        <IosWorkSection />
        <BackendWorkSection />
        <ShowcaseSection />
        <SkillsSection />
        <AboutSection />
        <GitHubProofSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
