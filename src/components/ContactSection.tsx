"use client";

import { motion, useReducedMotion } from "framer-motion";
import { githubProfileHref, openToRoles, site } from "@/lib/site";
import { springLift } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";

export function ContactSection() {
  const reduce = useReducedMotion();
  const githubHref = githubProfileHref();
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Recruiter inquiry — Sameh Bakleh")}`;

  const btnPrimary =
    "inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-on-primary shadow-elevation-1 transition-[box-shadow,transform] hover:shadow-elevation-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
  const btnSecondary =
    "inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant/55 bg-surface-container-low/80 px-6 text-sm font-medium text-on-surface transition-colors hover:border-secondary/45 hover:bg-secondary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="09"
          kicker="Senior mobile or backend role in Germany/EU? LinkedIn or email is fastest — flexible start, remote or on-site."
        >
          Contact
        </SectionTitle>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 lg:grid-cols-[1fr_280px]"
        >
          <div className="rounded-shape-xl border border-primary/25 bg-gradient-to-br from-primary/[0.06] via-surface-container-low/95 to-surface-container-low/95 p-6 shadow-elevation-1 sm:p-8">
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-primary">Ready to talk</p>
            <p className="mb-6 text-2xl font-semibold leading-snug text-on-surface sm:text-3xl">
              Senior iOS · Mobile · PHP/Laravel API roles
            </p>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-on-surface-variant">
              {site.location}. {site.workMode}. {site.availabilityDetail}
            </p>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springLift}
                className={btnPrimary}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href={mailtoHref}
                data-cursor-pointer
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springLift}
                className={btnSecondary}
              >
                Email
              </motion.a>
              {githubHref ? (
                <motion.a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-pointer
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={springLift}
                  className={btnSecondary}
                >
                  GitHub
                </motion.a>
              ) : null}
            </div>
          </div>

          <div className="rounded-shape-xl border border-outline-variant/45 bg-surface-container-low/90 p-5 text-sm">
            <div className="space-y-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Email</p>
                <a
                  href={mailtoHref}
                  className="mt-1 inline-block font-mono text-xs text-primary underline decoration-primary/35 underline-offset-2"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Phone</p>
                <p className="mt-1 text-on-surface">{site.phone}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Target roles</p>
                <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">{openToRoles.join(" · ")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
