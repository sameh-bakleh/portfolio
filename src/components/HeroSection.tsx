"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  githubProfileHref,
  heroRoleTabs,
  publishedMobileAppsIos,
  recruiterBrief,
  site,
  stats,
  type HeroRoleTabId,
} from "@/lib/site";
import { heroItem, heroStagger, springLift } from "@/lib/motion";

const GLANCE_SLIDES = ["now", "proof", "stack", "apps"] as const;
type GlanceSlide = (typeof GLANCE_SLIDES)[number];

const GLANCE_LABELS: Record<GlanceSlide, string> = {
  now: "Now",
  proof: "Proof",
  stack: "Stack",
  apps: "Shipped",
};

const panelShell =
  "relative flex min-h-[20rem] flex-col overflow-hidden rounded-shape-xl border border-outline-variant/40 bg-surface-container-high/75 shadow-elevation-2 backdrop-blur-md lg:min-h-[22rem]";

const btnPrimary =
  "inline-flex min-h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-on-primary shadow-elevation-1 transition-[box-shadow,transform] hover:shadow-elevation-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
const btnSecondary =
  "inline-flex min-h-10 items-center justify-center rounded-full border border-outline-variant/55 bg-surface-container-low/80 px-4 text-sm font-medium text-on-surface transition-colors hover:border-secondary/45 hover:bg-secondary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function HeroSection() {
  const reduce = useReducedMotion();
  const githubHref = githubProfileHref();
  const containerVariants = reduce ? { hidden: {}, visible: {} } : heroStagger;
  const itemVariants = reduce ? { hidden: {}, visible: {} } : heroItem;
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Recruiter inquiry — Sameh Bakleh")}`;

  const [roleTab, setRoleTab] = useState<HeroRoleTabId>("both");
  const [glanceIndex, setGlanceIndex] = useState(0);
  const pauseCarousel = useRef(false);

  const activeRole = heroRoleTabs.find((t) => t.id === roleTab) ?? heroRoleTabs[0];
  const glanceSlide = GLANCE_SLIDES[glanceIndex];

  const goGlance = useCallback((index: number) => {
    setGlanceIndex((index + GLANCE_SLIDES.length) % GLANCE_SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      if (pauseCarousel.current) return;
      setGlanceIndex((i) => (i + 1) % GLANCE_SLIDES.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden border-b border-outline-variant/35 px-4 pb-12 pt-[calc(5.5rem+0.75rem)] sm:px-6 sm:pb-14 sm:pt-[calc(5.5rem+1.25rem)] lg:pb-16"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/[0.07] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          {/* Status bar */}
          <motion.div variants={itemVariants} className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 rounded-full border border-primary/35 bg-primary/[0.09] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                {!reduce ? (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                ) : null}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[11px] font-medium text-primary">Open to work</span>
            </div>
            <p className="font-mono text-[11px] text-on-surface-variant">{site.location}</p>
          </motion.div>

          {/* Role tabs — hiring lane */}
          <motion.div variants={itemVariants} className="mb-4">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
              I fit these roles
            </p>
            <div
              className="flex gap-1 overflow-x-auto rounded-full border border-outline-variant/40 bg-surface-container/90 p-1 scrollbar-none"
              role="tablist"
              aria-label="Role focus"
            >
              {heroRoleTabs.map((tab) => {
                const active = roleTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    data-cursor-pointer
                    onClick={() => setRoleTab(tab.id)}
                    className={`relative shrink-0 rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                      active ? "text-on-primary-container" : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        layoutId="heroRoleTab"
                        className="absolute inset-0 rounded-full bg-primary-container shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                    <span className="relative z-10 sm:hidden">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
            {/* Left — identity (updates with role tab) */}
            <motion.div variants={itemVariants} className={panelShell}>
              <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
                <h1 className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  <span className="text-gradient-brand">{site.name}</span>
                </h1>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleTab}
                    initial={reduce ? undefined : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="mb-4 min-h-[4.5rem] sm:min-h-[5rem]"
                  >
                    <p className="text-base font-semibold leading-snug text-on-surface sm:text-lg">
                      {activeRole.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{activeRole.pitch}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {activeRole.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-secondary/30 bg-secondary/[0.07] px-2 py-0.5 font-mono text-[10px] text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mb-4 grid grid-cols-3 gap-2">
                  {stats.slice(0, 3).map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-outline-variant/35 bg-surface-container-low/90 px-2 py-2 text-center"
                    >
                      <p className="font-mono text-[8px] uppercase tracking-wider text-on-surface-variant">
                        {s.label.split(" · ")[0]}
                      </p>
                      <p className="mt-0.5 font-mono text-sm font-bold text-primary">{s.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-outline-variant/30 pt-4">
                  <motion.a
                    href={activeRole.cta.href}
                    data-cursor-pointer
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    transition={springLift}
                    className={btnPrimary}
                  >
                    {activeRole.cta.label}
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
            </motion.div>

            {/* Right — tabbed + auto carousel glance panel */}
            <motion.div
              variants={itemVariants}
              className={panelShell}
              onMouseEnter={() => {
                pauseCarousel.current = true;
              }}
              onMouseLeave={() => {
                pauseCarousel.current = false;
              }}
              onFocus={() => {
                pauseCarousel.current = true;
              }}
              onBlur={() => {
                pauseCarousel.current = false;
              }}
            >
              <div className="flex items-center justify-between gap-2 border-b border-outline-variant/35 px-3 py-2.5 sm:px-4">
                <div className="flex gap-0.5 overflow-x-auto scrollbar-none" role="tablist" aria-label="Quick glance">
                  {GLANCE_SLIDES.map((slide, i) => (
                    <button
                      key={slide}
                      type="button"
                      role="tab"
                      aria-selected={glanceIndex === i}
                      data-cursor-pointer
                      onClick={() => goGlance(i)}
                      className={`shrink-0 rounded-lg px-2.5 py-1.5 font-mono text-[10px] transition-colors sm:text-[11px] ${
                        glanceIndex === i
                          ? "bg-primary/15 text-primary"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      {GLANCE_LABELS[slide]}
                    </button>
                  ))}
                </div>
                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    data-cursor-pointer
                    onClick={() => goGlance(glanceIndex - 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-outline-variant/45 text-xs text-on-surface-variant hover:border-primary/40 hover:text-primary"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    data-cursor-pointer
                    onClick={() => goGlance(glanceIndex + 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-outline-variant/45 text-xs text-on-surface-variant hover:border-primary/40 hover:text-primary"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col overflow-hidden px-4 py-4 sm:px-5 sm:py-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={glanceSlide}
                    initial={reduce ? undefined : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduce ? undefined : { opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-1 flex-col"
                  >
                    {glanceSlide === "now" ? (
                      <>
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-primary">
                          Current role
                        </p>
                        <p className="text-base font-semibold text-on-surface">{recruiterBrief.current.title}</p>
                        <p className="mt-1 text-sm text-on-surface-variant">
                          {recruiterBrief.current.company} · {recruiterBrief.current.period}
                        </p>
                        <p className="mb-3 mt-4 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                          Recent
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {recruiterBrief.recentEmployers.map((name) => (
                            <span
                              key={name}
                              className="rounded-lg border border-outline-variant/40 bg-surface-container-low/90 px-2.5 py-1 text-xs text-on-surface"
                            >
                              {name}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}

                    {glanceSlide === "proof" ? (
                      <div className="grid grid-cols-2 gap-2">
                        {recruiterBrief.scanFacts.map((fact) => (
                          <div
                            key={fact.label}
                            className="rounded-lg border border-outline-variant/35 bg-surface-container-low/80 px-3 py-2.5"
                          >
                            <p className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant">
                              {fact.label}
                            </p>
                            <p className="mt-0.5 text-xs font-medium text-on-surface">{fact.value}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {glanceSlide === "stack" ? (
                      <>
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                          Core stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {["Swift", "SwiftUI", "UIKit", "MVVM", "Laravel", "PHP", "REST", "Redis", "Docker"].map(
                            (m) => (
                              <span
                                key={m}
                                className="rounded-lg border border-secondary/25 bg-secondary/[0.06] px-2.5 py-1 font-mono text-[11px] text-secondary"
                              >
                                {m}
                              </span>
                            ),
                          )}
                        </div>
                        <p className="mt-auto pt-4 text-xs leading-relaxed text-on-surface-variant">
                          Mobile-first with production Laravel API depth — one engineer for both sides of the product.
                        </p>
                      </>
                    ) : null}

                    {glanceSlide === "apps" ? (
                      <>
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                          App Store
                        </p>
                        <ul className="space-y-2 text-sm">
                          {publishedMobileAppsIos.map((app) => (
                            <li key={app.url}>
                              <a
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor-pointer
                                className="font-medium text-secondary underline decoration-secondary/30 underline-offset-2 hover:text-primary"
                              >
                                {app.name}
                              </a>
                              {app.note ? (
                                <span className="text-on-surface-variant"> — {app.note}</span>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                        <motion.a
                          href="#shipped"
                          data-cursor-pointer
                          whileHover={reduce ? undefined : { x: 2 }}
                          className="mt-auto inline-flex pt-4 text-xs font-medium text-primary"
                        >
                          View all shipped →
                        </motion.a>
                      </>
                    ) : null}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-3 flex justify-center gap-1.5 pt-2">
                  {GLANCE_SLIDES.map((slide, i) => (
                    <button
                      key={slide}
                      type="button"
                      aria-label={`Go to ${GLANCE_LABELS[slide]}`}
                      data-cursor-pointer
                      onClick={() => goGlance(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        glanceIndex === i ? "w-5 bg-primary" : "w-1.5 bg-outline-variant/60 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
