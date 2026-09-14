"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import MenuBar from "@/components/navbar/MenuBar";

const welcome = "WELCOME TO".split(" ");
const welcomeAccent = "OUR INTERNET".split(" ");

const HeroStage = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden bg-paper px-5 text-ink sm:px-8 md:px-14 lg:px-20">
      {/* LANDING MENU */}
      <MenuBar />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(139,0,0,0.10),transparent_55%)]" />
      <p className="relative z-10 font-mono text-[10px] tracking-[0.35em] text-ink/50 sm:text-xs">
        {siteConfig.shortName} — {siteConfig.address.line2}
      </p>

      {/* Original acronym headline */}
      <div className="relative z-10 mt-3 md:mt-4">
        <p className="select-none font-anton leading-[0.86] text-[11.5vw] sm:text-[9vw] md:text-[6.5vw] lg:text-[5.5vw]">
          INDIAN SOCIETY
        </p>

        <p className="select-none pl-[4vw] font-anton leading-[0.86] text-[8vw] text-blood transition-colors duration-200 hover:text-ink sm:pl-[8vw] sm:text-[6vw] md:pl-[10vw] md:text-[4vw] lg:text-[3.2vw]">
          FOR
        </p>

        <p className="select-none pl-[6vw] font-anton leading-[0.86] text-[11.5vw] sm:pl-[10vw] sm:text-[9vw] md:pl-[13vw] md:text-[6.5vw] lg:text-[5.5vw]">
          TECHNICAL EDUCATION
        </p>
      </div>

      {/* Original WELCOME strip */}
      <div className="relative z-10 mt-6 flex flex-col items-center justify-between gap-3 border-y-2 border-ink py-3 sm:flex-row md:mt-8 md:border-y-[3px] md:py-4">
        <p className="text-center font-anton text-[5.2vw] leading-none sm:text-left sm:text-2xl md:text-3xl lg:text-4xl">
          {welcome.map((word, i) => (
            <motion.span
              key={word}
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
            >
              {word}{" "}
            </motion.span>
          ))}

          <span className="text-blood transition-colors duration-300 hover:text-ink">
            {welcomeAccent.map((word, i) => (
              <motion.span
                key={word}
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: (welcome.length + i) / 10,
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </span>
        </p>

        <Image
          src="/Pictures/herovector.svg"
          alt=""
          width={72}
          height={72}
          className="h-8 w-8 shrink-0 sm:h-12 sm:w-12 md:h-16 md:w-16"
        />
      </div>
    </div>
  );
};

export default HeroStage;