import Image from "next/image";
import { motion } from "framer-motion";
const Teamheader = () => {
  const text = "KEEPING IT FRESH".split(" ");
  const textHov = "SINCE '25".split(" ");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center whitespace-normal md:text-nowrap my-1 px-2 text-center">
        <p className="text-[clamp(1.6rem,9vw,3.0rem)] md:text-6xl lg:text-[150px] md:py-2">
          THE PEOPLE OF ISTE-CGC
        </p>
      </div>
      <div className="border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 py-2 flex flex-col sm:flex-row justify-between items-center text-[clamp(0.85rem,4vw,1.5rem)] md:text-4xl lg:text-7xl my-2 whitespace-normal md:text-nowrap gap-1 text-center">
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

export default Teamheader;
