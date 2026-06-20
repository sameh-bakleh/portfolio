"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ProjectItem } from "@/lib/site";
import { springLift } from "@/lib/motion";

function setGlow(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--gx", `${e.clientX - r.left}px`);
  el.style.setProperty("--gy", `${e.clientY - r.top}px`);
}

type Props = {
  project: ProjectItem;
  variants?: Variants;
};

export function WorkProjectCard({ project: p, variants }: Props) {
  const reduce = useReducedMotion();
  const preview = p.screenshots?.[0];

  return (
    <motion.article
      variants={variants}
      onMouseMove={reduce ? undefined : setGlow}
      onMouseLeave={
        reduce
          ? undefined
          : (e) => {
              e.currentTarget.style.removeProperty("--gx");
              e.currentTarget.style.removeProperty("--gy");
            }
      }
      whileHover={reduce ? undefined : { y: -8, transition: springLift }}
      className="group relative flex flex-col overflow-hidden rounded-shape-xl border border-outline-variant/45 bg-surface-container-low/95 shadow-elevation-1 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-shape-xl before:opacity-0 before:transition-opacity before:duration-500 hover:border-primary/32 hover:shadow-elevation-3 hover:before:opacity-100 before:content-[''] before:bg-[radial-gradient(420px_circle_at_var(--gx,50%)_var(--gy,45%),rgba(74,222,128,0.11),transparent_55%)]"
    >
      {preview ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-outline-variant/35 bg-surface-container-high">
          <Image src={preview.src} alt={preview.alt} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 50vw" />
          {p.screenshots && p.screenshots.length > 1 ? (
            <span className="absolute bottom-2 right-2 rounded-full bg-surface/80 px-2 py-0.5 font-mono text-[9px] text-on-surface-variant backdrop-blur-sm">
              +{p.screenshots.length - 1} screens
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="relative flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-secondary/90">{p.highlight}</p>
            <h3 className="font-mono text-sm font-semibold text-primary">{p.name}</h3>
          </div>
          <span className="shrink-0 rounded-full border border-outline-variant/55 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-on-surface-variant">
            {p.badge ?? "Portfolio sample"}
          </span>
        </div>
        <p className="relative mb-3 text-xs leading-relaxed text-on-surface-variant">{p.description}</p>
        <div className="relative mb-4 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface-container-highest/90 px-2 py-0.5 font-mono text-[9px] text-on-surface-variant"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="relative mb-4 flex-1">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-on-surface-variant">What it proves</p>
          <ul className="space-y-1 text-xs leading-relaxed text-on-surface-variant">
            {p.proves.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary/70" aria-hidden>
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex flex-wrap gap-2 border-t border-outline-variant/40 pt-3">
          <motion.a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { x: 3 }}
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-secondary/40 bg-secondary/[0.06] px-4 font-mono text-[11px] font-medium text-secondary transition hover:border-secondary/55 hover:bg-secondary/[0.12]"
          >
            GitHub →
          </motion.a>
          {p.pairedRepo ? (
            <motion.a
              href={p.pairedRepo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { x: 3 }}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-primary/35 bg-primary/[0.07] px-4 font-mono text-[11px] font-medium text-primary transition hover:bg-primary/[0.12]"
            >
              {p.pairedLabel ?? "Paired repo"} →
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
