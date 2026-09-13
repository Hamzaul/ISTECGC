"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scrambledChar(actual) {
  if (actual === " " || actual === "-") return actual;
  return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

const ScrambleText = ({
  text,
  active,
  as: As = "span",
  className = "",
  durationMs = 480,
  frameMs = 35,
}) => {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const intervalRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!active || prefersReducedMotion) {
      clearInterval(intervalRef.current);
      setDisplay(text);
      return;
    }

    const totalFrames = Math.max(1, Math.ceil(durationMs / frameMs));
    frameRef.current = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      const frame = frameRef.current;
      const next = text
        .split("")
        .map((ch, i) => {
          const revealAt = Math.floor((i / text.length) * totalFrames * 0.7);
          return frame >= revealAt ? ch : scrambledChar(ch);
        })
        .join("");
      setDisplay(next);

      if (frame >= totalFrames) {
        clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, frameMs);

    return () => clearInterval(intervalRef.current);
  }, [active, text, prefersReducedMotion, durationMs, frameMs]);

  return <As className={className}>{display}</As>;
};

export default ScrambleText;