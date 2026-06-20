"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  githubProfileHref,
  headerNavPrimary,
  headerNavSecondary,
  headerRoleLine,
  headerRoleShort,
  navItems,
  site,
} from "@/lib/site";
import { springSoft } from "@/lib/motion";

function NavLink({
  id,
  label,
  active,
  reduce,
  onNavigate,
  className = "",
}: {
  id: string;
  label: string;
  active: boolean;
  reduce: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <motion.a
      href={`#${id}`}
      data-cursor-pointer
      onClick={onNavigate}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className={`relative whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-wide transition-colors lg:px-3 lg:py-2 lg:text-xs ${className} ${
        active ? "text-on-primary-container" : "text-on-surface-variant hover:text-on-surface"
      }`}
    >
      {active ? (
        <motion.span
          layoutId="navPill"
          className="absolute inset-0 rounded-full bg-primary-container shadow-sm"
          transition={springSoft}
        />
      ) : null}
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
}

export function TerminalHeader() {
  const reduce = useReducedMotion();
  const githubHref = githubProfileHref();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-36% 0px -40% 0px", threshold: 0 },
    );
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen && !moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, moreOpen]);

  useEffect(() => {
    if (!moreOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [moreOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const secondaryActive = headerNavSecondary.some((item) => item.id === active);

  const iconBtn =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-on-surface";

  return (
    <>
      <motion.header
        initial={reduce ? undefined : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed left-0 right-0 top-0 z-[100] border-b transition-[background-color,box-shadow,border-color] duration-200 ${
          scrolled
            ? "border-outline-variant/50 bg-surface-container-high/92 shadow-elevation-2 backdrop-blur-md"
            : "border-transparent bg-surface/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-3 sm:h-16 sm:gap-3 sm:px-4 lg:px-6">
          {/* Brand */}
          <a
            href="#home"
            className="group flex min-w-0 shrink-0 items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary/45 sm:gap-2.5"
            data-cursor-pointer
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-primary to-cyan-400 p-[2px] shadow-md shadow-primary/30">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-sm font-semibold tracking-tight text-primary">
                SB
              </span>
            </span>
            <span className="hidden min-w-0 flex-col md:flex lg:max-w-[11rem] xl:max-w-[14rem]">
              <span className="truncate text-sm font-medium leading-tight tracking-tight text-on-surface">
                {site.name}
              </span>
              <span className="truncate text-[11px] leading-tight text-on-surface-variant xl:hidden">
                {headerRoleShort}
              </span>
              <span className="hidden truncate text-[11px] leading-tight text-on-surface-variant xl:inline">
                {headerRoleLine}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <LayoutGroup id="app-bar-nav">
            <nav
              className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
              aria-label="Primary"
            >
              <div className="flex max-w-full items-center gap-0.5 rounded-full bg-surface-container/90 p-1 ring-1 ring-violet-500/25">
                {headerNavPrimary.map(({ id, label }) => (
                  <NavLink key={id} id={id} label={label} active={active === id} reduce={!!reduce} />
                ))}

                {/* More dropdown */}
                <div ref={moreRef} className="relative">
                  <button
                    type="button"
                    data-cursor-pointer
                    onClick={() => setMoreOpen((o) => !o)}
                    aria-expanded={moreOpen}
                    aria-haspopup="true"
                    className={`relative rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-wide transition-colors lg:px-3 lg:py-2 lg:text-xs ${
                      secondaryActive || moreOpen
                        ? "bg-primary-container text-on-primary-container shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      More
                      <span className="text-[9px] opacity-70" aria-hidden>
                        ▾
                      </span>
                    </span>
                  </button>

                  <AnimatePresence>
                    {moreOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: -4, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full z-50 mt-2 min-w-[10.5rem] overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-high/98 py-1 shadow-elevation-3 backdrop-blur-md"
                      >
                        {headerNavSecondary.map(({ id, label }) => (
                            <a
                              key={id}
                              href={`#${id}`}
                              onClick={() => setMoreOpen(false)}
                              className={`block px-3 py-2 text-xs transition hover:bg-primary/10 ${
                                active === id ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
                              }`}
                            >
                              {label}
                            </a>
                          ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </nav>
          </LayoutGroup>

          {/* Actions */}
          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-1.5">
            <motion.button
              type="button"
              data-cursor-pointer
              onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className={`${iconBtn} w-auto px-2.5 min-[380px]:px-3`}
              title="Search (⌘K or Ctrl+K)"
              aria-label="Open search and navigation"
            >
              <span className="font-mono text-[11px]">⌘K</span>
            </motion.button>

            <motion.a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-pointer
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className={iconBtn}
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>

            {githubHref ? (
              <motion.a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-pointer
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className={iconBtn}
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
            ) : null}

            <motion.button
              type="button"
              data-cursor-pointer
              onClick={() => setMenuOpen(true)}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className={`${iconBtn} lg:hidden`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
              className="fixed inset-y-0 right-0 z-[120] flex w-[min(100%,20rem)] flex-col border-l border-outline-variant/50 bg-surface-container-high/98 shadow-elevation-3 backdrop-blur-md lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-outline-variant/40 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-on-surface">{site.name}</p>
                  <p className="text-xs text-on-surface-variant">{headerRoleLine}</p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className={iconBtn}
                  aria-label="Close menu"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
                <ul className="space-y-1">
                  {navItems.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={closeMenu}
                        className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                          active === id
                            ? "bg-primary-container text-on-primary-container"
                            : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-outline-variant/40 p-4">
                <div className="flex gap-2">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center rounded-full border border-outline-variant py-2 text-xs font-medium text-on-surface-variant"
                  >
                    LinkedIn
                  </a>
                  {githubHref ? (
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center rounded-full border border-outline-variant py-2 text-xs font-medium text-primary"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
