"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutParagraphs, education, languages, site, topSkills } from "@/lib/site";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

export function AboutSection() {
  const reduce = useReducedMotion();
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const summaryParagraphs = aboutParagraphs.slice(0, 2);

  return (
    <section id="about" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="07"
          kicker="Background, education, and work authorization — for reviewers who want depth after the first scan."
        >
          About
        </SectionTitle>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={sContainer}
          >
            <motion.div variants={sItem}>
              <TerminalWindow title="about.md" path="~/profile">
                <div className="space-y-4 text-sm leading-relaxed text-on-surface-variant sm:text-[0.9375rem]">
                  {summaryParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p className="border-t border-outline-variant/30 pt-4 text-xs text-on-surface-variant/90">
                    Full mobile + backend scope: Swift, UIKit, SwiftUI, Laravel, Symfony, REST APIs, admin dashboards,
                    Docker, CI/CD, and production release workflows.
                  </p>
                </div>
              </TerminalWindow>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={sContainer}
          >
            <motion.div
              variants={sItem}
              className="rounded-shape-xl border border-outline-variant/45 bg-surface-container-low/90 p-5"
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-secondary">Top skills</p>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/35 bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={sItem}
              className="rounded-shape-xl border border-outline-variant/45 bg-surface-container-low/90 p-5 text-sm"
            >
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">Education</p>
              <p className="text-on-surface-variant">{education}</p>
              <p className="mb-2 mt-4 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                Languages
              </p>
              <ul className="space-y-1 text-on-surface-variant">
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <p className="mb-2 mt-4 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                Work authorization
              </p>
              <p className="text-xs leading-relaxed text-on-surface-variant">{site.workAuth}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
