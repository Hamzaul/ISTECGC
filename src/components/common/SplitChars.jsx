"use client";
import { motion } from "framer-motion";

/**
 * SplitChars
 * ----------
 * Renders `text` as one <motion.span> per character so a parent can
 * orchestrate a staggered reveal via Framer Motion variants.
 *
 * Pass `variants` (child variants) and the parent must set
 * `initial` / `animate` / `whileInView` with `staggerChildren`.
 */
const SplitChars = ({ text, variants, className = "" }) => {
  return (
    <span className={`inline-block whitespace-pre ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={variants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitChars;
