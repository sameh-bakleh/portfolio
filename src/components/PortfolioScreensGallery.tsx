"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { portfolioScreenshotGalleries } from "@/lib/site";
import { springLift } from "@/lib/motion";

type GalleryId = (typeof portfolioScreenshotGalleries)[number]["id"];

export function PortfolioScreensGallery() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState<GalleryId>(portfolioScreenshotGalleries[0].id);
  const [slide, setSlide] = useState(0);

  const gallery = portfolioScreenshotGalleries.find((g) => g.id === activeId) ?? portfolioScreenshotGalleries[0];
  const shots = gallery.shots;
  const current = shots[slide];

  const go = (next: number) => {
    setSlide((next + shots.length) % shots.length);
  };

  return (
    <div className="rounded-shape-xl border border-outline-variant/45 bg-surface-container-low/90 p-4 sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-secondary">Portfolio screenshots</p>
          <p className="mt-1 text-sm text-on-surface-variant">Captured from public GitHub repos — demo data only.</p>
        </div>
        <div className="flex gap-1 overflow-x-auto rounded-full border border-outline-variant/40 bg-surface-container/80 p-1 scrollbar-none">
          {portfolioScreenshotGalleries.map((g) => (
            <button
              key={g.id}
              type="button"
              data-cursor-pointer
              onClick={() => {
                setActiveId(g.id);
                setSlide(0);
              }}
              className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors sm:text-xs ${
                activeId === g.id ? "bg-primary/15 text-primary" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {g.title.replace("iOS ", "")}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,240px)_1fr] lg:items-center">
        <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[240px] overflow-hidden rounded-[1.75rem] border-[3px] border-outline-variant/55 bg-surface-container-high shadow-elevation-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${gallery.id}-${slide}`}
              initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="relative h-full w-full"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover object-top"
                sizes="240px"
                priority={slide === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex min-w-0 flex-col">
          <h3 className="text-base font-semibold text-on-surface sm:text-lg">{gallery.title}</h3>
          <p className="mt-1 text-sm text-on-surface-variant">{gallery.subtitle}</p>
          <p className="mt-3 font-mono text-xs text-primary">{current.caption}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              aria-label="Previous screenshot"
              data-cursor-pointer
              onClick={() => go(slide - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/45 text-on-surface-variant hover:border-primary/40 hover:text-primary"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              data-cursor-pointer
              onClick={() => go(slide + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/45 text-on-surface-variant hover:border-primary/40 hover:text-primary"
            >
              ›
            </button>
            <div className="flex flex-1 flex-wrap items-center gap-1.5">
              {shots.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  aria-label={s.caption}
                  data-cursor-pointer
                  onClick={() => setSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    slide === i ? "w-5 bg-primary" : "w-1.5 bg-outline-variant/60 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 border-t border-outline-variant/35 pt-4">
            <motion.a
              href={gallery.repo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-pointer
              whileHover={reduce ? undefined : { y: -2 }}
              transition={springLift}
              className="inline-flex min-h-10 items-center rounded-full border border-secondary/40 bg-secondary/[0.06] px-4 font-mono text-[11px] font-medium text-secondary hover:bg-secondary/[0.12]"
            >
              iOS repo →
            </motion.a>
            {"pairedRepo" in gallery && gallery.pairedRepo ? (
              <motion.a
                href={gallery.pairedRepo}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                whileHover={reduce ? undefined : { y: -2 }}
                transition={springLift}
                className="inline-flex min-h-10 items-center rounded-full border border-primary/35 bg-primary/[0.07] px-4 font-mono text-[11px] font-medium text-primary hover:bg-primary/[0.12]"
              >
                Laravel API →
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
