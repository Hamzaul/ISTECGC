import Image from "next/image";
import { motion } from "framer-motion";
const Heropage = () => {
  const text = "WELCOME TO".split(" ");
  const textHov = "OUR INTERNET".split(" ");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center whitespace-normal md:text-nowrap max-w-[92vw] md:max-w-96 mt-3 md:mt-0 md:my-3 text-center">
        <p className="text-[clamp(1.4rem,7.5vw,2.6rem)] md:text-6xl lg:text-[175px] leading-none py-1 md:py-3">
          INDIAN SOCIETY
        </p>
        <p className="text-[clamp(1.1rem,5vw,1.75rem)] md:text-5xl lg:text-7xl hover:text-[#8B0000] transition-all duration-150 ease-in-out">
          FOR
        </p>
        <p className="text-[clamp(1.4rem,7.5vw,2.6rem)] md:text-6xl lg:text-[160px] leading-none py-1 md:py-3">
          TECHNICAL EDUCATION
        </p>
      </div>
      <div className="py-[4px] md:py-[6px] border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 flex flex-col sm:flex-row justify-between items-center text-[clamp(0.9rem,4.5vw,1.25rem)] md:text-4xl lg:text-[58px] my-2 whitespace-normal md:text-nowrap gap-1 text-center">
        <div>
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
          <span className="hover:text-[#8B0000] transition-all duration-500 ease-in-out">
            {textHov.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: (text.length + i) / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </span>
        </div>
        <div>
          <Image
            src="/Pictures/herovector.svg"
            alt="prop"
            width={100}
            height={100}
            className="w-[38px] h-[38px] md:w-24 md:h-24 lg:w-[72px] lg:h-[72px] lg:min-w-30 lg:min-w-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Heropage;
