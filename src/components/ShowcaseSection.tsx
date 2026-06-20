"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  liveWebShowcases,
  publishedMobileAppsAndroid,
  publishedMobileAppsIos,
  publishedMobileIntro,
  publishedMobileOutro,
} from "@/lib/site";
import { springLift, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

function AppLink({ name, url, note, store }: { name: string; url: string; note?: string; store: string }) {
  return (
    <li className="text-on-surface-variant transition-colors hover:text-on-surface/90">
      <span className="text-outline/75">•</span>{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-secondary/95 underline decoration-secondary/35 underline-offset-[3px] transition hover:text-secondary hover:decoration-secondary/55"
      >
        {name}
      </a>
      {note ? <span className="text-on-surface-variant"> — {note}</span> : null}
      <span className="font-mono text-[10px] text-outline/80"> · {store}</span>
    </li>
  );
}

export function ShowcaseSection() {
  const reduce = useReducedMotion();
  const sContainer = reduce ? { hidden: {}, visible: {} } : staggerContainer;
  const sItem = reduce ? { hidden: {}, visible: {} } : staggerItem;

  return (
    <section id="shipped" className="scroll-mt-24 border-b border-outline-variant/35 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          step="05"
          kicker="App Store and Play releases — ride-hailing, recruitment, and real estate products in production."
        >
          Shipped products
        </SectionTitle>

        <motion.div
          className="space-y-8"
          variants={sContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
        >
          <motion.div variants={sItem}>
            <TerminalWindow title="app_store.md" path="~/shipped">
              <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">{publishedMobileIntro}</p>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-primary/90">iOS — App Store</p>
              <ul className="space-y-2.5 font-mono text-xs sm:text-sm">
                {publishedMobileAppsIos.map((app) => (
                  <AppLink key={app.url} {...app} store="App Store" />
                ))}
              </ul>
              <details className="mt-6 border-t border-outline-variant/40 pt-4">
                <summary className="cursor-pointer font-mono text-[10px] uppercase tracking-wider text-on-surface-variant hover:text-on-surface">
                  Cross-platform (supporting) — Google Play
                </summary>
                <ul className="mt-3 space-y-2 font-mono text-xs text-on-surface-variant">
                  {publishedMobileAppsAndroid.map((app) => (
                    <AppLink key={app.url} {...app} store="Google Play" />
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-relaxed">{publishedMobileOutro}</p>
              </details>
            </TerminalWindow>
          </motion.div>

          <motion.div variants={sItem}>
            <TerminalWindow title="web_products.json" path="~/production">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                Selected live platforms
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {liveWebShowcases.map((w) => (
                  <motion.div
                    key={w.url}
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={springLift}
                    className="rounded-2xl border border-outline-variant/45 bg-surface-container-low/70 p-4"
                  >
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-semibold text-primary underline decoration-primary/25 underline-offset-4 transition hover:text-primary/90"
                    >
                      {w.name} →
                    </a>
                    <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">{w.description}</p>
                  </motion.div>
                ))}
              </div>
            </TerminalWindow>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
