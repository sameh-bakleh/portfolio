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
          step="02"
          kicker="Seven roles across mobile and backend — current: BrainyCode Tech. Timeline matches LinkedIn."
        >
          Experience
        </SectionTitle>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="mb-8 overflow-x-auto pb-1"
        >
          <div className="flex min-w-max items-center gap-2 sm:gap-3">
            {experience.map((job, i) => (
              <div key={job.id} className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`rounded-xl border px-3 py-2 sm:px-4 sm:py-2.5 ${
                    i === 0
                      ? "border-primary/40 bg-primary/[0.08]"
                      : "border-outline-variant/40 bg-surface-container-low/80"
                  }`}
                >
                  <p className={`text-xs font-semibold sm:text-sm ${i === 0 ? "text-primary" : "text-on-surface"}`}>
                    {job.company}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-on-surface-variant">{job.period.split(" · ")[0]}</p>
                </div>
                {i < experience.length - 1 ? (
                  <span className="text-on-surface-variant/40" aria-hidden>
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {experience.map((job, i) => (
            <motion.div key={job.id} variants={sItem} whileHover={reduce ? undefined : { y: -3 }} transition={springLift}>
              <TerminalWindow title={job.id} path={`~/experience/${job.company.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="font-mono text-xs sm:text-sm">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-on-surface sm:text-lg">{job.title}</h3>
                      <p className="mt-1 text-sm font-medium text-primary/90">{job.company}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-outline-variant/45 bg-surface-container-low/90 px-3 py-1 text-[10px] text-on-surface-variant">
                      {job.period}
                    </span>
                  </div>
                  <p
                    className={`mb-4 max-w-3xl leading-relaxed text-on-surface-variant ${
                      i === 0 ? "text-sm sm:text-base" : "text-sm"
                    }`}
                  >
                    {job.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.slice(0, i === 0 ? job.stack.length : 6).map((t) => (
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
