"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import HeroStage from "@/components/hero/HeroStage";
import {
  unlockDoorAudio,
  playDoorOpen,
  playDoorClose,
} from "@/lib/doorAudio";

const DOOR_SPAN_VH = 240;

const DoorTransition = () => {
  const driverRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const [pinMode, setPinMode] = useState("before");

  const progress = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const measure = () => {
      ticking = false;

      const el = driverRef.current;

      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const pinLength = rect.height - viewportH;

      if (pinLength <= 0) {
        setPinMode("after");
        progress.set(1);
        return;
      }

      if (rect.top > 0) {
        setPinMode("before");
        progress.set(0);
      } else if (rect.top > -pinLength) {
        setPinMode("pinned");

        progress.set(
          Math.min(
            1,
            Math.max(0, -rect.top / pinLength)
          )
        );
      } else {
        setPinMode("after");
        progress.set(1);
      }
    };

    const onScrollOrResize = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(measure);
    };

    measure();

    window.addEventListener(
      "scroll",
      onScrollOrResize,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      onScrollOrResize
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScrollOrResize
      );

      window.removeEventListener(
        "resize",
        onScrollOrResize
      );
    };
  }, [prefersReducedMotion, progress]);

  const leftX = useTransform(
    progress,
    [0, 0.15, 0.75],
    ["0%", "0%", "-100%"]
  );

  const rightX = useTransform(
    progress,
    [0, 0.15, 0.75],
    ["0%", "0%", "100%"]
  );

  const leftRotate = useTransform(
    progress,
    [0.15, 0.75],
    [0, -5]
  );

  const rightRotate = useTransform(
    progress,
    [0.15, 0.75],
    [0, 5]
  );

  const panelOpacity = useTransform(
    progress,
    [0.7, 0.82],
    [1, 0]
  );

  /*
   * Door remains visually above HeroStage,
   * but stops blocking clicks once it has opened enough.
   */
  const doorPointerEvents = useTransform(
    progress,
    (value) => (value > 0.65 ? "none" : "auto")
  );

  const scrollCueOpacity = useTransform(
    progress,
    [0, 0.06],
    [1, 0]
  );

  const openedRef = useRef(false);

  useMotionValueEvent(progress, "change", (value) => {
    if (!openedRef.current && value > 0.18) {
      openedRef.current = true;
      playDoorOpen();
    } else if (openedRef.current && value < 0.1) {
      openedRef.current = false;
      playDoorClose();
    }
  });

  /*
   * Unlock audio only after an actual user gesture.
   */
  useEffect(() => {
    if (prefersReducedMotion) return;

    const unlock = () => {
      unlockDoorAudio();

      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("pointerdown", unlock);
    };

    window.addEventListener(
      "wheel",
      unlock,
      { passive: true }
    );

    window.addEventListener(
      "touchstart",
      unlock,
      { passive: true }
    );

    window.addEventListener(
      "keydown",
      unlock
    );

    window.addEventListener(
      "pointerdown",
      unlock
    );

    return () => {
      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("pointerdown", unlock);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <HeroStage />;
  }

  const stagePositionStyle =
    pinMode === "pinned"
      ? {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }
      : pinMode === "after"
      ? {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }
      : {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        };

  return (
    <div
      ref={driverRef}
      className="relative w-full"
      style={{
        height: `${DOOR_SPAN_VH}vh`,
      }}
    >
      <div
        style={stagePositionStyle}
        className="h-screen w-full overflow-hidden bg-paper"
      >
        {/* LANDING / HERO */}
        <div className="absolute inset-0 z-0">
          <HeroStage />
        </div>

        {/* DOOR */}
        <motion.div
          style={{
            opacity: panelOpacity,
            pointerEvents: doorPointerEvents,
          }}
          className="absolute inset-0 z-10"
        >
          {/* LEFT HALF */}
          <motion.div
            style={{
              x: leftX,
              rotateY: leftRotate,
              transformPerspective: 1600,
              transformOrigin: "left center",
              clipPath: "inset(0 50% 0 0)",
            }}
            className="absolute inset-0 flex items-center justify-center bg-paper"
          >
            <span className="select-none whitespace-nowrap font-anton leading-none text-ink text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[7.5vw]">
              ISTE-CGC
            </span>

            <span
              aria-hidden="true"
              className="absolute right-1/2 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] tracking-[0.35em] text-ink/40 md:block"
              style={{
                writingMode: "vertical-rl",
                marginRight: "0.75rem",
              }}
            >
              {siteConfig.legalName}
            </span>

            <span className="absolute inset-y-0 right-1/2 w-[3px] bg-blood" />
          </motion.div>

          {/* RIGHT HALF */}
          <motion.div
            style={{
              x: rightX,
              rotateY: rightRotate,
              transformPerspective: 1600,
              transformOrigin: "right center",
              clipPath: "inset(0 0 0 50%)",
            }}
            className="absolute inset-0 flex items-center justify-center bg-paper"
          >
            <span className="select-none whitespace-nowrap font-anton leading-none text-ink text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[7.5vw]">
              ISTE-CGC
            </span>

            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] tracking-[0.35em] text-ink/40 md:block"
              style={{
                writingMode: "vertical-rl",
                marginLeft: "0.75rem",
              }}
            >
              CGC STUDENT CHAPTER
            </span>
          </motion.div>
        </motion.div>

        {/* SCROLL CUE */}
        <motion.div
          style={{
            opacity: scrollCueOpacity,
          }}
          className="pointer-events-none absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-ink/60"
        >
          <span
            className="font-mono text-[10px] tracking-[0.4em]"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            SCROLL
          </span>

          <span className="h-8 w-px animate-pulse bg-ink/30" />
        </motion.div>
      </div>
    </div>
  );
};

export default DoorTransition;