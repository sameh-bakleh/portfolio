import Link from "next/link";
import { AmbientBackground } from "@/components/AmbientBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { TerminalHeader } from "@/components/TerminalHeader";

export function SeoPageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <AmbientBackground />
      <TerminalHeader />
      <main className="relative z-[60] min-h-[60vh] pt-24">{children}</main>
      <Footer />
      <p className="sr-only">
        <Link href="/">Back to portfolio home</Link>
      </p>
    </>
  );
}
