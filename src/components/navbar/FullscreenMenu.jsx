"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ScrambleText from "@/components/common/ScrambleText";
import { siteConfig } from "@/lib/siteConfig";

const links = [
  { title: "Home", path: "/" },
  { title: "Team", path: "/team" },
  { title: "Events", path: "/events" },
  { title: "MYS", path: "/mys" },
  { title: "ITR", path: "/itr" },
  { title: "Gallery", path: "/gallery" },
  
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};


const MenuLink = ({ href, title, open, onClose }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group inline-flex items-baseline gap-4 font-anton text-[13vw] uppercase leading-[1.05] sm:text-6xl md:text-7xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
    >
      <ScrambleText text={title} active={open || hovered} durationMs={520} />
    </Link>
  );
};


const FullscreenMenu = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 py-20 text-paper sm:px-12 md:px-20"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="group absolute right-5 top-5 flex items-center gap-2 rounded-full border border-paper/25 px-4 py-2 font-mono text-xs tracking-[0.2em] text-paper/80 transition-colors hover:border-blood hover:text-blood focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood sm:right-8 sm:top-8"
          >
            CLOSE
            <span aria-hidden="true" className="text-base leading-none transition-transform duration-200 group-hover:rotate-90">
              ×
            </span>
          </button>

          <motion.nav
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-2"
          >
            {links.map((link) => (
              <motion.div key={link.path} variants={itemVariants}>
                <MenuLink href={link.path} title={link.title} open={open} onClose={onClose} />
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-2 border-t border-paper/15 pt-6 font-mono text-xs tracking-[0.2em] text-paper/60"
          >
            <a href={`mailto:${siteConfig.email}`} className="w-fit underline-offset-4 hover:underline">
              {siteConfig.email}
            </a>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram}>Instagram</a>
              <a href={siteConfig.social.linkedin}>LinkedIn</a>
              <a href={siteConfig.social.facebook}>Facebook</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenMenu;