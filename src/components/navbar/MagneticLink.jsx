"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import ScrambleText from "@/components/common/ScrambleText";


const MagneticLink = ({ href, label }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
    setActive(false);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="transition-transform duration-200 ease-out"
    >
      <Link
        href={href}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="inline-block px-1 py-2 font-mono text-xs uppercase tracking-[0.2em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
      >
        <ScrambleText text={label} active={active} />
      </Link>
    </div>
  );
};

export default MagneticLink;