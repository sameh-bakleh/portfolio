"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  githubProfileHref,
  loadedModules,
  publishedMobileAppsIos,
  recruiterBrief,
  recruiterPitch,
  roleSubtitle,
  site,
  stats,
} from "@/lib/site";
import { heroItem, heroStagger, springLift } from "@/lib/motion";

const panelShell =
  "relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-shape-xl border border-outline-variant/40 bg-surface-container-high/75 shadow-elevation-2 backdrop-blur-md sm:min-h-[28rem] lg:min-h-[32rem]";

const panelHeader =
  "flex shrink-0 items-center justify-between gap-3 border-b border-outline-variant/35 px-4 py-3 sm:px-5";

export function HeroSection() {
  const reduce = useReducedMotion();
  const githubHref = githubProfileHref();
  const containerVariants = reduce ? { hidden: {}, visible: {} } : heroStagger;
  const itemVariants = reduce ? { hidden: {}, visible: {} } : heroItem;
  const sectionRef = useRef<HTMLElement>(null);
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Recruiter inquiry — Sameh Bakleh")}`;

  const btnPrimary =
    "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary shadow-elevation-1 transition-[box-shadow,transform] hover:shadow-elevation-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
  const btnSecondary =
    "inline-flex min-h-11 items-center justify-center rounded-full border border-outline-variant/55 bg-surface-container-low/80 px-5 text-sm font-medium text-on-surface transition-colors hover:border-secondary/45 hover:bg-secondary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative scroll-mt-24 overflow-hidden border-b border-outline-variant/35 px-4 pb-14 pt-[calc(5.5rem+1rem)] sm:px-6 sm:pb-16 sm:pt-[calc(5.5rem+1.5rem)] lg:pb-20 lg:pt-[calc(5.5rem+2rem)]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/[0.08] via-violet-500/[0.05] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* Row 1 — instant scan: status + location */}
          <motion.div
            variants={itemVariants}
            className="mb-5 flex flex-wrap items-center justify-between gap-3 sm:mb-6"
          >
            <div className="flex items-center gap-2 rounded-full border border-primary/35 bg-primary/[0.09] px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[11px] font-medium text-primary">Open to work</span>
            </div>
            <p className="font-mono text-[11px] text-on-surface-variant">
              {site.location} · Remote · Hybrid · On-site
            </p>
          </motion.div>

          {/* Row 2 — equal twin panels */}
          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
            {/* Left — who & what */}
            <motion.div variants={itemVariants} className={panelShell}>
              <div className={panelHeader}>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                  Senior engineer
                </span>
                <span className="font-mono text-[10px] tabular-nums text-secondary/90">8+ yrs</span>
              </div>

              <div className="flex flex-1 flex-col px-4 py-5 sm:px-6 sm:py-6">
                <h1 className="mb-2 text-[2.25rem] font-bold leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-[3.25rem]">
                  <span className="text-gradient-brand">{site.name}</span>
                </h1>
                <p className="mb-4 text-lg font-semibold leading-snug text-on-surface sm:text-xl">
                  {roleSubtitle}
                </p>
                <p className="mb-6 max-w-prose text-[0.9375rem] leading-relaxed text-on-surface-variant">
                  {recruiterPitch}
                </p>

                <div className="mb-6 grid grid-cols-3 gap-2 sm:gap-3">
                  {stats.slice(0, 3).map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-outline-variant/40 bg-surface-container-low/90 px-2 py-3 text-center sm:px-3"
                    >
                      <p className="font-mono text-[8px] uppercase tracking-wider text-on-surface-variant sm:text-[9px]">
                        {s.label}
                      </p>
                      <p className="mt-1 font-mono text-sm font-bold text-primary sm:text-base">{s.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-3 border-t border-outline-variant/30 pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                    Recruiter quick links
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <motion.a
                      href="#experience"
                      data-cursor-pointer
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={springLift}
                      className={btnPrimary}
                    >
                      Experience
                    </motion.a>
                    <motion.a
                      href="#shipped"
                      data-cursor-pointer
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={springLift}
                      className={btnSecondary}
                    >
                      Shipped apps
                    </motion.a>
                    <motion.a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-pointer
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={springLift}
                      className={btnSecondary}
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
              </div>
            </motion.div>

            {/* Right — recruiter brief (matched height) */}
            <motion.div variants={itemVariants} className={panelShell}>
              <div className={panelHeader}>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-secondary/95">
                  At a glance
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant">6-sec scan</span>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6">
                <div className="rounded-xl border border-primary/30 bg-primary/[0.06] p-4">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-primary">Current role</p>
                  <p className="text-base font-semibold text-on-surface">{recruiterBrief.current.title}</p>
                  <p className="mt-1 text-sm text-on-surface-variant">
                    {recruiterBrief.current.company} · {recruiterBrief.current.period}
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                    Recent employers
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recruiterBrief.recentEmployers.map((name) => (
                      <span
                        key={name}
                        className="rounded-lg border border-outline-variant/45 bg-surface-container-low/90 px-2.5 py-1.5 text-xs font-medium text-on-surface/90"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {recruiterBrief.scanFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-lg border border-outline-variant/35 bg-surface-container-low/80 px-3 py-2.5"
                    >
                      <p className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant">
                        {fact.label}
                      </p>
                      <p className="mt-0.5 text-xs font-medium leading-snug text-on-surface">{fact.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                    Core stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {loadedModules.map((m) => (
                      <span
                        key={m}
                        className="rounded-md border border-secondary/25 bg-secondary/[0.06] px-2 py-0.5 font-mono text-[10px] text-secondary"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto rounded-xl border border-outline-variant/35 bg-surface-container-low/85 p-3 sm:p-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                    App Store (selected)
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {publishedMobileAppsIos.slice(0, 3).map((app) => (
                      <li key={app.url}>
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-pointer
                          className="font-medium text-secondary underline decoration-secondary/30 underline-offset-2 hover:text-primary hover:decoration-primary/40"
                        >
                          {app.name}
                        </a>
                        {app.note ? (
                          <span className="text-on-surface-variant"> — {app.note}</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
