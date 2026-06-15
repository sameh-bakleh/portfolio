"use client";

import { motion, useReducedMotion } from "framer-motion";
import { backendProjects } from "@/lib/site";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { WorkProjectCard } from "./WorkProjectCard";

export function BackendWorkSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section
      id="backend-apis"
      className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="03"
          kicker="Strong secondary focus — Laravel and Symfony APIs with auth, validation, caching, and OpenAPI."
        >
          ## Featured<span className="text-on-surface-variant">/backend-apis</span>
        </SectionTitle>

        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {backendProjects.map((p) => (
            <WorkProjectCard key={p.repo} project={p} variants={sItem} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
