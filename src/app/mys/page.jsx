"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/FooterCGC";
import { motion } from "framer-motion";

const MYS = () => {
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
                ISTE-CGC UNIVERSITY PRESENTS
              </p>

              <p className="hidden sm:block text-sm md:text-base tracking-widest">
                MYS / 01
              </p>
            </motion.div>

            {/* Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] border-b-4 border-black">
              {/* LEFT — TITLE */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
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
                  MAKE YOUR
                </p>

                <h1
                  className="
                    font-bold
                    uppercase
                    tracking-[-0.04em]
                    leading-[0.82]
                    text-[clamp(4.5rem,11vw,10.5rem)]
                    text-[#8B0000]
                  "
                >
                  MAKE
                  <br />
                 </h1>
                <h1  className="
                    font-bold
                    uppercase
                    tracking-[-0.04em]
                    leading-[0.82]
                    text-[clamp(4.5rem,11vw,10.5rem)]
                    text-[#000000]
                  " >
                  YOUR
                  <br/>
                  </h1>
                  
                  <h1 
                    className="
                    font-bold
                    uppercase
                    tracking-[-0.04em]
                    leading-[0.82]
                    text-[clamp(4.5rem,11vw,10.5rem)]
                    text-[#8B0000]
                  ">
                  STORY
                </h1>
                
              </motion.div>

              {/* RIGHT — DESCRIPTION */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
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
                  px-0
                  pt-8
                  lg:pt-0
                  lg:pl-10
                  pb-8
                  lg:pb-14
                  min-h-[300px]
                "
              >
                <div>
                  <p className="text-sm md:text-base tracking-[0.2em] font-medium mb-5">
                    THE CAMPAIGN
                  </p>

                  <p className="text-[clamp(1.05rem,2vw,1.45rem)] leading-relaxed max-w-xl">
                    MYS (Make Your Story) is a campaign by ISTE-CGCU created to
                    welcome passionate and creative students into our society.
                    It is an opportunity to learn, collaborate, build real
                    projects, and turn your ideas into experiences that make an
                    impact.
                  </p>

                  <p className="text-[clamp(1.05rem,2vw,1.45rem)] leading-relaxed max-w-xl mt-5">
                    Whether you are a developer, designer, communicator,
                    creator, or simply someone eager to explore, MYS gives you
                    a space to discover your strengths and create your own
                    story with ISTE-CGCU.
                  </p>
                </div>

                {/* Small visual marker */}
                <div className="flex items-center gap-3 mt-8 lg:mt-10">
                  <span className="w-3 h-3 bg-[#8B0000] rounded-full" />

                  <span className="text-xs md:text-sm tracking-[0.2em]">
                    YOUR STORY STARTS HERE
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VIDEO SECTION
        ====================================================== */}
        <section className="px-5 md:px-10 lg:px-14 py-12 md:py-20">
          <div className="max-w-[1600px] mx-auto">
            {/* Section Header */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-end
                justify-between
                gap-4
                mb-6
                md:mb-8
              "
            >
              <div>
                <p className="text-sm md:text-base tracking-[0.2em] font-medium mb-2">
                  WATCH
                </p>

                <h2
                  className="
                    text-[clamp(2.8rem,7vw,6.5rem)]
                    font-bold
                    leading-[0.85]
                    tracking-tight
                  "
                >
                  OUR STORY
                </h2>
              </div>

              <p className="text-sm md:text-base tracking-widest">
                MYS / 02
              </p>
            </div>

            {/* Video Slot */}
            <div
              className="
                relative
                w-full
                aspect-video
                border-4
                border-black
                bg-[#ededed]
                overflow-hidden
                group
              "
            >
              {/*
                WHEN VIDEO IS READY:

                <video
                  src="/videos/mys.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                  "
                />
              */}

              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div
                  className="
                    text-[clamp(4rem,12vw,10rem)]
                    font-bold
                    leading-none
                    tracking-tight
                  "
                >
                  MYS
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-[#8B0000] rounded-full" />

                  <p className="text-xs md:text-sm tracking-[0.25em]">
                    VIDEO COMING SOON
                  </p>
                </div>
              </div>

              {/* Corner Details */}
              <div className="absolute top-5 left-5 w-8 h-8 border-t-4 border-l-4 border-black" />

              <div className="absolute top-5 right-5 w-8 h-8 border-t-4 border-r-4 border-black" />

              <div className="absolute bottom-5 left-5 w-8 h-8 border-b-4 border-l-4 border-black" />

              <div className="absolute bottom-5 right-5 w-8 h-8 border-b-4 border-r-4 border-black" />
            </div>
          </div>
        </section>

        {/* =====================================================
            JOIN SECTION
        ====================================================== */}
        <section className="px-5 md:px-10 lg:px-14 py-8 md:py-16">
          <div className="max-w-[1600px] mx-auto">
            <div className="border-4 border-black">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT */}
                <div
                  className="
                    p-7
                    md:p-12
                    lg:p-14
                    border-b-4
                    lg:border-b-0
                    lg:border-r-4
                    border-black
                  "
                >
                  <p className="text-sm md:text-base tracking-[0.2em] mb-5">
                    MYS / 03
                  </p>

                  <h2
                    className="
                      text-[clamp(3.5rem,8vw,7.5rem)]
                      font-bold
                      leading-[0.82]
                      tracking-tight
                    "
                  >
                    START
                    </h2>
                    <br />
                    <h2 
                    className="
                    font-bold
                    uppercase
                    tracking-[-0.04em]
                    leading-[0.82]
                    text-[clamp(4.5rem,11vw,10.5rem)]
                    text-[#8B0000]
                  ">
                    HERE .
                  </h2>
                </div>

                {/* RIGHT */}
                <div className="p-7 md:p-12 lg:p-14 flex flex-col justify-between gap-10">
                  <div>
                    <p className="text-sm md:text-base tracking-[0.2em] mb-5">
                      JOIN ISTE-CGCU
                    </p>

                    <p className="text-[clamp(1.05rem,2vw,1.4rem)] leading-relaxed max-w-xl">
                      Bring your ideas, skills, curiosity, and energy to the
                      table. Join a community where you can meet like-minded
                      people, work on exciting projects, and learn by doing.
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://forms.gle/dcjsHjvojSUiDGM88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      w-full
                      border-4
                      border-black
                      px-5
                      py-4
                      md:px-7
                      md:py-5
                      font-bold
                      text-lg
                      md:text-2xl
                      hover:bg-[#8B0000]
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <span>JOIN THE SOCIETY</span>

                    <span
                      className="
                        text-3xl
                        md:text-4xl
                        transition-transform
                        duration-300
                        group-hover:translate-x-2
                      "
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}
        <section className="px-5 md:px-10 lg:px-14 pt-12 pb-20 md:pt-20 md:pb-28">
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
                  MAKE YOUR IDEAS.
                  <br />
                  MAKE YOUR CONNECTIONS.
                  <br />
                  <span className="text-[#8B0000]">MAKE YOUR STORY.</span>
                </h3>

                <p className="text-sm md:text-base text-gray-600 max-w-md md:text-right leading-relaxed">
                  ISTE-CGCU — Indian Society for Technical Education,
                  CGC University Student Chapter.
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

export default MYS;