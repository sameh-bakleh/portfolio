"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

type CursorMode = "default" | "pointer" | "text";

function resolveCursorMode(el: EventTarget | null): CursorMode {
  if (!(el instanceof Element)) return "default";
  if (el.closest('input, textarea, select, [contenteditable="true"]')) return "text";
  if (
    el.closest(
      'a, button, [role="button"], label, summary, [data-cursor-pointer], [data-cursor-link]',
    )
  ) {
    return "pointer";
  }
  return "default";
}

function CursorGlyph({ mode, pressed }: { mode: CursorMode; pressed: boolean }) {
  if (mode === "text") {
    return (
      <motion.span
        aria-hidden
        className="block h-5 w-[3px] rounded-full bg-gradient-to-b from-secondary to-primary shadow-[0_0_12px_rgba(52,211,153,0.85)]"
        animate={{ opacity: pressed ? 0.55 : [1, 0.35, 1] }}
        transition={
          pressed
            ? { duration: 0.12 }
            : { duration: 1.05, repeat: Infinity, ease: "easeInOut" }
        }
      />
    );
  }

  if (mode === "pointer") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-7 w-7 drop-shadow-[0_0_10px_rgba(52,211,153,0.55)]"
        fill="none"
      >
        <path
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z"
          fill="#34d399"
          stroke="#22d3ee"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className="h-8 w-8 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
    >
      <circle cx="16" cy="16" r="2.75" fill="#34d399" />
      <line x1="16" y1="5" x2="16" y2="27" stroke="#22d3ee" strokeWidth="1.25" strokeLinecap="round" />
      <line x1="5" y1="16" x2="27" y2="16" stroke="#22d3ee" strokeWidth="1.25" strokeLinecap="round" />
      <circle
        cx="16"
        cy="16"
        r="10"
        stroke="#c4b5fd"
        strokeWidth="1"
        strokeOpacity="0.45"
        fill="none"
      />
    </svg>
  );
}

/**
 * Context-aware cursor: crosshair (browse), pointer (interactive), I-beam (text).
 * Desktop fine pointer only.
 */
export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [pressed, setPressed] = useState(false);

  const lx = useMotionValue(-100);
  const ly = useMotionValue(-100);
  const sx = useSpring(lx, { stiffness: 380, damping: 32, mass: 0.35 });
  const sy = useSpring(ly, { stiffness: 380, damping: 32, mass: 0.35 });

  const checkMode = useCallback((target: EventTarget | null) => {
    setMode(resolveCursorMode(target));
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (!fine || coarse) return;

    let cancelled = false;
    const raf = requestAnimationFrame(() => {
      if (cancelled) return;
      setActive(true);
      document.documentElement.classList.add("custom-cursor-active");
    });

    const move = (e: MouseEvent) => {
      lx.set(e.clientX);
      ly.set(e.clientY);
    };

    const over = (e: MouseEvent) => checkMode(e.target);
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setMode("default");

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, true);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.body.addEventListener("mouseleave", leave);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over, true);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, [reduceMotion, lx, ly, checkMode]);

  if (!active || reduceMotion) return null;

  const scale = pressed ? 0.82 : mode === "pointer" ? 1.12 : 1;
  const offsetX = mode === "pointer" ? 4 : mode === "text" ? 0 : 0;
  const offsetY = mode === "pointer" ? 4 : mode === "text" ? -10 : 0;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[10001] text-primary"
      style={{ left: sx, top: sy, x: offsetX, y: offsetY }}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 460, damping: 28 }}
    >
      <CursorGlyph mode={mode} pressed={pressed} />
    </motion.div>
  );
}
