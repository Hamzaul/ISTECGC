"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Aboutus = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const text =
    "ISTE-CGCU is the student chapter of the Indian Society for Technical Education (ISTE), a national, non-profit making society registered under the Societies Registration Act of 1860.".split(
      " "
    );
  const text2 =
    "Our aim is to equip engineers of today with the technical and management skills to solve the challenges of tomorrow by learning and being a part of departments such as technical , electrical, management and design.".split(
      " "
    );
  const text3 =
    "We also organize a plethora of events and hands on workshops aimed at making better professionals, bringing about holistic development of our community.".split(
      " "
    );

  return (
    <div
      className="flex flex-col justify-center items-center pb-4 lg:pb-14"
      ref={ref}
    >
      <motion.div
        className="text-[clamp(2rem,9vw,7rem)] font-bold py-4 flex flex-col items-center group w-full"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center group w-full hover:text-[#8B0000] transition-all duration-500 text-center px-2">
          ABOUT US
          <hr
            className="h-1 w-[60%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]"
            initial={{ width: "60%" }}
            animate={{ width: "90%" }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
      <div className="flex flex-col text-wrap text-lg md:text-2xl lg:text-3xl font-hamlin font-bold items-center  justify-center w-[80%]">
        <motion.p
          className="py-6 md:py-10 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {text.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: (15 + i) / 10,
              }}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          className="py-6 md:py-10 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {text2.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: (15 + text.length + i) / 10,
              }}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          className="py-6 md:py-10 text-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {text3.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: (15 + text.length + text2.length + i) / 10,
              }}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

export default Aboutus;
