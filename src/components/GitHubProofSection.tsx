"use client";

import { motion, useReducedMotion } from "framer-motion";
import { githubProofGroups } from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

export function GitHubProofSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section
      id="github-proof"
      className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="06"
          kicker="GitHub is organized as proof repositories — not random demos. Each repo supports iOS or backend hiring conversations."
        >
          $ gh repo list --proof
        </SectionTitle>

        <motion.div
          className="space-y-8"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {githubProofGroups.map((group) => (
            <motion.div key={group.label} variants={sItem}>
              <TerminalWindow title={`${group.label.replace(/\s/g, "_")}.json`} path="~/github">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-primary/90">{group.label}</p>
                <ul className="space-y-4">
                  {group.repos.map((repo) => (
                    <li
                      key={repo.repo}
                      className="flex flex-col gap-2 border-b border-outline-variant/35 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0">
                        <p className="font-mono text-sm font-semibold text-on-surface">{repo.name}</p>
                        <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">{repo.proof}</p>
                      </div>
                      <motion.a
                        href={repo.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={reduce ? undefined : { y: -2 }}
                        transition={springLift}
                        className="inline-flex shrink-0 items-center justify-center rounded-full border border-primary/35 bg-primary/[0.08] px-4 py-2 font-mono text-[11px] font-medium text-primary transition hover:border-primary/50 hover:bg-primary/[0.14]"
                      >
                        GitHub →
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </TerminalWindow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
