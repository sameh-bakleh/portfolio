"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  availabilityLine,
  githubProfileHref,
  headline,
  heroCode,
  heroSubtitle,
  loadedModules,
  proofBadges,
  roleSubtitle,
  site,
  stats,
} from "@/lib/site";
import { heroItem, heroStagger, springLift } from "@/lib/motion";
import { BlinkingCursor } from "./BlinkingCursor";

function highlightLine(line: string) {
  const kw = /^\s*(import|const|return|from)\b/;
  const m = line.match(kw);
  if (m && m.index !== undefined) {
    const lead = line.slice(0, m.index);
    const word = m[1];
    const rest = line.slice(m.index + m[0].length);
    return (
      <>
        <span className="text-on-surface-variant/70">{lead}</span>
        <span className="text-tertiary">{word}</span>
        <span className="text-on-surface/90">{rest}</span>
      </>
    );
  }
  return <span className="text-on-surface/90">{line}</span>;
}

const panelShell =
  "relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-shape-xl border border-violet-400/25 bg-surface-container-high/80 shadow-elevation-2 backdrop-blur-md sm:min-h-[32rem] lg:min-h-[36rem]";

const panelGlow =
  "pointer-events-none absolute -inset-px rounded-shape-xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/15 opacity-60";

const panelHeader =
  "flex shrink-0 items-center justify-between gap-3 border-b border-outline-variant/40 px-4 py-3 sm:px-5";

export function HeroSection() {
  const lines = heroCode.split("\n");
  const reduce = useReducedMotion();
  const githubHref = githubProfileHref();
  const containerVariants = reduce ? { hidden: {}, visible: {} } : heroStagger;
  const itemVariants = reduce ? { hidden: {}, visible: {} } : heroItem;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  const btnFilled =
    "inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-on-primary shadow-elevation-1 transition-[box-shadow,background-color] hover:shadow-elevation-2 active:shadow-elevation-1 sm:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
  const btnOutlined =
    "inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-secondary/45 bg-transparent px-5 text-sm font-medium text-secondary transition-colors hover:bg-secondary/[0.1] sm:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative scroll-mt-24 overflow-hidden border-b border-outline-variant/35 px-4 pb-16 pt-[calc(5.5rem+1.25rem)] sm:px-6 sm:pb-20 sm:pt-[calc(5.5rem+2rem)] md:pb-24 md:pt-[calc(5.5rem+2.5rem)]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-fuchsia-500/[0.14] via-primary/[0.07] to-transparent sm:h-80"
        aria-hidden
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-28 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
        animate={reduce ? undefined : { y: [0, 18, 0], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-[6%] h-36 w-36 rounded-full bg-violet-500/12 blur-3xl"
        animate={reduce ? undefined : { y: [0, -14, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col">
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-8"
          >
            <div className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-white/[0.08] bg-gradient-to-r from-violet-500/[0.14] via-surface-container-high/80 to-cyan-500/[0.12] py-2 pl-4 pr-4 shadow-elevation-1 shadow-glow-violet backdrop-blur-md sm:gap-x-4 sm:pl-5 sm:pr-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-on-surface-variant sm:text-[11px]">
                &lt;iOS.Profile /&gt;
              </span>
              <span className="hidden h-3 w-px bg-outline-variant/80 sm:block" aria-hidden />
              <span className="font-mono text-[11px] text-primary sm:text-xs">
                while (<span className="text-secondary/95">shipping</span>) {"{"}{" "}
                <span className="text-on-surface-variant/90">release</span>() {"}"}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-3 py-1.5 font-mono text-[10px] text-primary sm:text-[11px]">
              <motion.span
                className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(52,211,153,0.9)]"
                animate={reduce ? undefined : { scale: [1, 1.35, 1], opacity: [1, 0.55, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              OPEN_TO_WORK · {site.location}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6 xl:gap-7">
            {/* Left — identity */}
            <motion.div variants={itemVariants} className={panelShell}>
              <div className={panelGlow} aria-hidden />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(196,181,253,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.5) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden
              />

              <div className={panelHeader}>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary sm:text-[11px]">
                  operator.profile
                </span>
                <span className="font-mono text-[10px] tabular-nums text-on-surface-variant">v8.0</span>
              </div>

              <div className="flex flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6">
                <motion.h1 className="mb-3 text-4xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-5xl md:text-[3.25rem] md:leading-[0.98] lg:text-6xl">
                  <span
                    className={`text-gradient-brand drop-shadow-[0_0_40px_rgba(52,211,153,0.18)] ${reduce ? "" : "text-gradient-brand-animated"}`}
                  >
                    {site.name}
                  </span>
                </motion.h1>

                <h2 className="mb-3 text-base font-semibold capitalize leading-snug text-on-surface sm:text-lg md:text-xl">
                  {roleSubtitle}
                </h2>

                <p className="mb-4 font-mono text-[11px] leading-relaxed text-primary/90 sm:text-xs">
                  {headline}
                </p>

                <p className="mb-5 max-w-prose text-sm leading-relaxed text-on-surface-variant sm:text-[0.9375rem]">
                  {heroSubtitle}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {proofBadges.map((badge, i) => {
                    const palette = [
                      "border-primary/40 bg-primary/[0.08] text-primary",
                      "border-secondary/35 bg-secondary/[0.07] text-secondary",
                      "border-tertiary/35 bg-tertiary/[0.09] text-tertiary",
                    ];
                    return (
                      <motion.span
                        key={badge}
                        whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
                        transition={springLift}
                        className={`rounded-full border px-3 py-1.5 font-mono text-[10px] font-medium sm:text-[11px] ${palette[i % 3]}`}
                      >
                        {badge}
                      </motion.span>
                    );
                  })}
                </div>

                <div className="mt-auto border-t border-outline-variant/35 pt-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                    Get started
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <motion.a
                      href="#ios-work"
                      data-cursor-pointer
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={springLift}
                      className={btnFilled}
                    >
                      View iOS Work
                    </motion.a>
                    <motion.a
                      href="#backend-apis"
                      data-cursor-pointer
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={springLift}
                      className={btnFilled}
                    >
                      View Backend APIs
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
                        className={btnOutlined}
                      >
                        GitHub
                      </motion.a>
                    ) : null}
                    <motion.a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-pointer
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      transition={springLift}
                      className={btnOutlined}
                    >
                      LinkedIn
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — live system panel (matched height) */}
            <motion.div
              variants={itemVariants}
              className={panelShell}
              style={reduce ? undefined : { y: parallaxY }}
            >
              <div className={panelGlow} aria-hidden />
              <div className="pointer-events-none absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" aria-hidden />

              <div className={panelHeader}>
                <span className="truncate bg-gradient-to-r from-secondary to-tertiary bg-clip-text font-mono text-[10px] font-medium text-transparent sm:text-[11px]">
                  system.monitor · engineer.ts
                </span>
                <span className="shrink-0 font-mono text-[10px] tabular-nums text-on-surface-variant">
                  Ln 1–{lines.length}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex-1 overflow-hidden rounded-2xl border border-outline-variant/35 bg-surface-container-low/90 p-3 font-mono text-[11px] leading-[1.55] shadow-inner sm:p-4 sm:text-xs">
                  <pre className="h-full overflow-x-auto whitespace-pre-wrap [-webkit-overflow-scrolling:touch]">
                    <code>
                      {lines.map((line, i) => (
                        <div key={i} className="flex gap-3 sm:gap-4">
                          <span className="w-7 shrink-0 select-none text-right tabular-nums text-on-surface-variant/55 sm:w-8">
                            {i + 1}
                          </span>
                          <span className="min-w-0 flex-1 pr-1">{highlightLine(line)}</span>
                        </div>
                      ))}
                    </code>
                  </pre>
                  <div className="mt-2 flex items-center gap-2 border-t border-outline-variant/30 pt-2 font-mono text-on-surface-variant/60">
                    <span aria-hidden className="text-secondary">
                      ➜
                    </span>
                    <span className="text-primary/85">build --release</span>
                    <BlinkingCursor />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {stats.map((s, i) => {
                    const accents = [
                      "border-primary/35 from-primary/[0.12]",
                      "border-secondary/35 from-secondary/[0.1]",
                      "border-tertiary/35 from-tertiary/[0.12]",
                    ];
                    return (
                      <motion.div
                        key={s.label}
                        whileHover={reduce ? undefined : { y: -3 }}
                        transition={springLift}
                        className={`rounded-2xl border bg-gradient-to-b to-transparent px-2 py-3 text-center sm:px-3 sm:py-4 ${accents[i % 3]}`}
                      >
                        <p className="font-mono text-[8px] uppercase tracking-wider text-on-surface-variant sm:text-[9px]">
                          {s.label}
                        </p>
                        <p className="mt-1 font-mono text-sm font-semibold text-primary sm:text-base">{s.value}</p>
                      </motion.div>
                    );
                  })}
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                    Core stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {loadedModules.map((m, i) => {
                      const palette = [
                        "border-primary/40 bg-primary/[0.07] text-primary",
                        "border-secondary/35 bg-secondary/[0.06] text-secondary",
                        "border-tertiary/35 bg-tertiary/[0.08] text-tertiary",
                      ];
                      return (
                        <span
                          key={m}
                          className={`rounded-full border px-2.5 py-1 font-mono text-[9px] font-medium sm:px-3 sm:text-[10px] ${palette[i % 3]}`}
                        >
                          {m}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-auto rounded-2xl border border-violet-400/20 bg-surface-container-low/85 px-3 py-3 sm:px-4">
                  <p className="mb-1 font-mono text-[10px] text-secondary">➜ availability.log</p>
                  <p className="text-xs leading-relaxed text-on-surface/90 sm:text-sm">{availabilityLine}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
