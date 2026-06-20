"use client";

import { motion, useReducedMotion } from "framer-motion";
import { iosProjects, productDomains } from "@/lib/site";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { WorkProjectCard } from "./WorkProjectCard";
import { PortfolioScreensGallery } from "./PortfolioScreensGallery";

export function IosWorkSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section id="ios-work" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="03"
          kicker="TalentBridge monorepo (TCA + GraphQL) plus SwiftUI samples — screenshots from public GitHub repos."
        >
          Mobile work · iOS
        </SectionTitle>

        <motion.div
          className="mb-8"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <PortfolioScreensGallery />
        </motion.div>

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
