"use client";

import { motion, useReducedMotion } from "framer-motion";
import { iosProjects, productDomains } from "@/lib/site";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { WorkProjectCard } from "./WorkProjectCard";

export function IosWorkSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section id="ios-work" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="03"
          kicker="Production-style iOS samples on GitHub — auth, offline UX, MVVM, and API integration patterns."
        >
          Mobile work · iOS
        </SectionTitle>

        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-on-surface-variant">{productDomains}</p>

        <motion.div
          className="grid gap-5 lg:grid-cols-2"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          {iosProjects.map((p) => (
            <WorkProjectCard key={p.repo} project={p} variants={sItem} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
