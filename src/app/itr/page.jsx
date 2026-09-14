"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/FooterCGC";
import { motion } from "framer-motion";

const ITR = () => {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />

      <main className="pt-20 md:pt-24">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1600px] mx-auto">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                flex
                items-center
                justify-between
                border-b-4
                border-black
                pb-3
                mb-8
                md:mb-12
              "
            >
              <p className="text-sm md:text-lg font-medium tracking-[0.2em]">
                ISTE-CGCU PRESENTS
              </p>

              <p className="hidden sm:block text-sm md:text-base tracking-widest">
                ITR / 01
              </p>
            </motion.div>

            {/* Main Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] border-b-4 border-black">
              {/* TITLE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  pb-10
                  lg:pb-14
                  lg:pr-10
                  border-b-4
                  lg:border-b-0
                  lg:border-r-4
                  border-black
                  flex
                  flex-col
                  justify-end
                "
              >
                <p className="text-xs md:text-sm tracking-[0.3em] font-medium mb-5">
                  ISTE-CGCU TECHREACH
                </p>

                <h1
                  className="
                    font-bold
                    uppercase
                    tracking-[-0.04em]
                    leading-[0.82]
                    text-[clamp(4rem,10vw,10rem)]
                  "
                >
                  TECH
                  <br />
                  </h1>
                  <h1  
                  className="
                    font-bold
                    uppercase
                    tracking-[-0.04em]
                    leading-[0.82]
                    text-[clamp(4rem,10vw,10rem)]
                    text-[#8B0000]
                  ">
                  REACH
                </h1>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="
                  flex
                  flex-col
                  justify-between
                  pt-8
                  lg:pt-0
                  lg:pl-10
                  pb-8
                  lg:pb-14
                  min-h-[320px]
                "
              >
                <div>
                  <p className="text-sm md:text-base tracking-[0.2em] font-medium mb-5">
                    ABOUT THE INITIATIVE
                  </p>

                  <p className="text-[clamp(1.05rem,2vw,1.45rem)] leading-relaxed max-w-xl">
                    ISTE-CGCU TechReach (ITR) is an educational initiative
                    started by the ISTE Club of CGCU with the aim of taking
                    technology and practical learning beyond the university
                    campus and into schools.
                  </p>

                  <p className="text-[clamp(1.05rem,2vw,1.45rem)] leading-relaxed max-w-xl mt-5">
                    Through interactive sessions, demonstrations, and
                    hands-on activities, TechReach seeks to introduce school
                    students to technology in a simple and engaging way,
                    encouraging curiosity, creativity, problem-solving, and
                    an early interest in the world of technology.
                  </p>
                </div>

                {/* Small Accent */}
                <div className="flex items-center gap-3 mt-8 lg:mt-10">
                  <span className="w-3 h-3 bg-[#8B0000] rounded-full" />

                  <span className="text-xs md:text-sm tracking-[0.2em]">
                    LEARN • EXPLORE • CREATE
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMING SOON
        ====================================================== */}
        <section className="px-5 md:px-10 lg:px-14 py-16 md:py-24">
          <div className="max-w-[1600px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                border-4
                border-black
                min-h-[420px]
                md:min-h-[520px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                relative
                overflow-hidden
              "
            >
              {/* Background Number */}
              <span
                className="
                  absolute
                  text-[clamp(12rem,30vw,30rem)]
                  font-bold
                  leading-none
                  text-black/[0.035]
                  select-none
                  pointer-events-none
                "
              >
                ITR
              </span>

              {/* Corner Details */}
              <div className="absolute top-5 left-5 w-8 h-8 border-t-4 border-l-4 border-black" />

              <div className="absolute top-5 right-5 w-8 h-8 border-t-4 border-r-4 border-black" />

              <div className="absolute bottom-5 left-5 w-8 h-8 border-b-4 border-l-4 border-black" />

              <div className="absolute bottom-5 right-5 w-8 h-8 border-b-4 border-r-4 border-black" />

              {/* Content */}
              <div className="relative z-10 px-5">
                <p className="text-sm md:text-base tracking-[0.3em] mb-5">
                  ITR / 02
                </p>

                <h2
                  className="
                    font-bold
                    leading-[0.85]
                    tracking-[-0.04em]
                    text-[clamp(4rem,12vw,11rem)]
                  "
                >
                  COMING
                  <br />
                  </h2>
                  <h2  
                  className="
                    font-bold
                    uppercase
                    tracking-[-0.04em]
                    leading-[0.82]
                    text-[clamp(4rem,10vw,10rem)]
                    text-[#8B0000]
                  ">
                  SOON
                </h2>

                <div className="flex items-center justify-center gap-3 mt-7">
                  <span className="w-3 h-3 bg-[#8B0000] rounded-full" />

                  <p className="text-xs md:text-sm tracking-[0.25em]">
                    SOMETHING NEW IS ON THE WAY
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}
        <section className="px-5 md:px-10 lg:px-14 pb-20 md:pb-28">
          <div className="max-w-[1600px] mx-auto">
            <div className="border-t-4 border-black pt-6 md:pt-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h3
                  className="
                    text-[clamp(2rem,5vw,5rem)]
                    font-bold
                    leading-[0.9]
                    tracking-tight
                  "
                >
                  TAKING TECHNOLOGY
                  
                  </h3>
                  <br/>
                <h3
                className="
                    text-[clamp(2rem,5vw,5rem)]
                    font-bold
                    leading-[0.9]
                    tracking-tight
                    text-[#8B0000]
                  "
                >
                  BEYOND THE CAMPUS.
                </h3>

                <p className="text-sm md:text-base text-gray-600 max-w-md md:text-right leading-relaxed">
                  ISTE-CGCU TechReach is an initiative focused on making
                  technology more accessible, engaging, and inspiring for
                  school students.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITR;