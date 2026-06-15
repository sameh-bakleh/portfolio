"use client";

import { motion, useReducedMotion } from "framer-motion";
import { githubProfileHref, openToRoles, site } from "@/lib/site";
import { springLift } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";

export function ContactSection() {
  const reduce = useReducedMotion();
  const githubHref = githubProfileHref();
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Recruiter inquiry — Sameh Bakleh")}`;

  const btnFilled =
    "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-on-primary shadow-elevation-1 transition-[box-shadow,background-color] hover:shadow-elevation-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
  const btnOutlined =
    "inline-flex min-h-11 items-center justify-center rounded-full border border-secondary/45 bg-transparent px-5 text-sm font-medium text-secondary transition-colors hover:bg-secondary/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle step="08" kicker="Open to English-speaking engineering roles across Germany and Europe.">
          Let&apos;s connect
        </SectionTitle>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-shape-xl border border-outline-variant/45 bg-surface-container-low/90 p-6 shadow-elevation-1 sm:p-8"
        >
          <p className="mb-2 text-xl font-semibold text-on-surface">Let&apos;s connect</p>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
            Open to English-speaking iOS, Mobile, PHP Backend, Laravel, Symfony, and API Engineering roles across
            Germany and Europe. {site.workMode}. {site.availabilityDetail}
          </p>

          <div className="mb-8 flex flex-wrap gap-2.5">
            <motion.a href={mailtoHref} whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }} transition={springLift} className={btnFilled}>
              Email
            </motion.a>
            <motion.a href={site.linkedin} target="_blank" rel="noopener noreferrer" whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }} transition={springLift} className={btnOutlined}>
              LinkedIn
            </motion.a>
            {githubHref ? (
              <motion.a href={githubHref} target="_blank" rel="noopener noreferrer" whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }} transition={springLift} className={btnOutlined}>
                GitHub
              </motion.a>
            ) : null}
          </div>

          <div className="grid gap-4 border-t border-outline-variant/40 pt-6 text-sm text-on-surface-variant sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Location</p>
              <p className="mt-1 text-on-surface">{site.location}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Email</p>
              <a href={mailtoHref} className="mt-1 inline-block font-mono text-primary underline decoration-primary/35 underline-offset-2">
                {site.email}
              </a>
            </div>
            <div className="sm:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Target roles</p>
              <p className="mt-2 text-xs leading-relaxed">{openToRoles.join(" · ")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
