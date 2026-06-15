"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

export function ExperienceSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section id="experience" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="05"
          kicker="Concise timeline aligned with LinkedIn — senior iOS + PHP/Laravel backend delivery."
        >
          $ git log --oneline
        </SectionTitle>

        <motion.div
          className="space-y-6"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {experience.map((job) => (
            <motion.div key={job.id} variants={sItem} whileHover={reduce ? undefined : { y: -4 }} transition={springLift}>
              <TerminalWindow title={job.id} path={`~/experience/${job.company.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="font-mono text-xs sm:text-sm">
                  <div className="mb-2 flex flex-wrap items-baseline gap-2 text-on-surface-variant">
                    <span className="text-primary/90">{job.period}</span>
                    <span className="text-outline/80">·</span>
                    <span>{job.company}</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-on-surface">{job.title}</h3>
                  <p className="mb-4 max-w-3xl text-sm leading-relaxed text-on-surface-variant">{job.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-secondary/25 bg-secondary-container/35 px-2.5 py-0.5 text-[10px] text-on-secondary-container"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
