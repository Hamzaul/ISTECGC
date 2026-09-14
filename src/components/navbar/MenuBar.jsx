"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ScrambleText from "@/components/common/ScrambleText";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "TEAM", href: "/team" },
  { label: "EVENTS", href: "/events" },
  { label: "MYS", href: "/mys" },
  { label: "ITR", href: "/itr" },
  { label: "GALLERY", href: "/gallery" },
  
];

const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleToggle = () => {
    setOpen((current) => !current);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* LANDING MENU BAR */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-5 py-5 sm:px-8 md:px-14 lg:px-20">
        {/* Brand / section indicator */}
        <div className="font-mono text-[9px] tracking-[0.3em] text-ink/50 sm:text-[10px]">
          ISTE-CGCU
        </div>

        {/* Menu trigger */}
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={open}
          aria-controls="landing-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="group flex items-center gap-3 rounded-full border border-ink/20 bg-paper/70 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-ink backdrop-blur-sm transition-colors duration-300 hover:border-blood hover:text-blood focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
        >
          <span className="relative min-w-[45px] text-left">
            <ScrambleText
              text={open ? "CLOSE" : "MENU"}
              active={true}
              durationMs={380}
              frameMs={30}
            />
          </span>

          <span
            aria-hidden="true"
            className="relative flex h-3 w-4 flex-col justify-center gap-[3px]"
          >
            <motion.span
              animate={
                open
                  ? { rotate: 45, y: 3 }
                  : { rotate: 0, y: 0 }
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 0.25,
              }}
              className="block h-px w-4 bg-current"
            />

            <motion.span
              animate={
                open
                  ? { rotate: -45, y: -1 }
                  : { rotate: 0, y: 0 }
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 0.25,
              }}
              className="block h-px w-4 bg-current"
            />
          </span>
        </button>
      </div>

      {/* FULLSCREEN LANDING NAVIGATION */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="landing-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="ISTE-CGC navigation"
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    clipPath: "circle(0% at 95% 5%)",
                  }
            }
            animate={{
              opacity: 1,
              clipPath: "circle(150% at 95% 5%)",
            }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    clipPath: "circle(0% at 95% 5%)",
                  }
            }
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.55,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink px-6 pb-8 pt-24 text-paper sm:px-10 sm:pb-10 md:px-16 lg:px-20"
          >
            {/* Top bar */}
            <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-5 py-5 sm:px-8 md:px-14 lg:px-20">
              <span className="font-mono text-[9px] tracking-[0.3em] text-paper/40 sm:text-[10px]">
                NAVIGATION
              </span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="group flex items-center gap-3 rounded-full border border-paper/20 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-paper/80 transition-colors duration-300 hover:border-blood hover:text-blood focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
              >
                CLOSE
                <span
                  aria-hidden="true"
                  className="text-base leading-none transition-transform duration-300 group-hover:rotate-90"
                >
                  ×
                </span>
              </button>
            </div>

            {/* Navigation links */}
            <nav
              className="flex flex-col gap-1 overflow-y-auto"
              aria-label="Primary navigation"
            >
              {menuItems.map((item, index) => {
                const active = hoveredItem === index;

                return (
                  <motion.div
                    key={item.href}
                    initial={
                      prefersReducedMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 24,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0.01 : 0.4,
                      delay: prefersReducedMotion ? 0 : index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onFocus={() => setHoveredItem(index)}
                      onBlur={() => setHoveredItem(null)}
                      className="group flex items-center gap-4 py-1 font-anton text-[14vw] uppercase leading-[0.9] tracking-tight text-paper transition-colors duration-300 hover:text-blood focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood sm:text-7xl md:text-8xl lg:text-[7vw]"
                    >
                      <span className="font-mono text-[9px] tracking-[0.2em] text-paper/25 transition-colors duration-300 group-hover:text-blood/60">
                        0{index + 1}
                      </span>

                      <ScrambleText
                        text={item.label}
                        active={active}
                        durationMs={420}
                        frameMs={30}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom information */}
            <div className="flex flex-col gap-4 border-t border-paper/15 pt-5 font-mono text-[9px] tracking-[0.2em] text-paper/45 sm:flex-row sm:items-end sm:justify-between sm:text-[10px]">
              <span>INDIAN SOCIETY FOR TECHNICAL EDUCATION</span>

              <div className="flex gap-5">
                <a
                  href="https://www.instagram.com/cgcuniversity_iste"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-blood"
                >
                  INSTAGRAM
                </a>

                <a
                  href="https://www.linkedin.com/company/istecgcuniversity/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-blood"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuBar;