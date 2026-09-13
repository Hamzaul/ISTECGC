import Link from "next/link";
import Grid from "./grid/Grid";
import { FaArrowRight } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";

const Eventshero = () => {
  const [inView, setInView] = useState(false);
  const hrRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
          console.log("Is in view:", entry.isIntersecting); // Debugging line
        });
      },
      { threshold: 0.1 } 
    );

    if (hrRef.current) {
      observer.observe(hrRef.current);
    }

    return () => {
      if (hrRef.current) {
        observer.unobserve(hrRef.current);
      }
    };
  }, []);

  return (
    <div className="my-10 flex flex-col justify-center items-center overflow-x-hidden">
      <div className="text-[clamp(2rem,9vw,7rem)] font-bold py-4 flex flex-col items-center w-full text-[#8B0000] transition-all duration-500 text-center px-2">
        EVENTS
        <hr
          ref={hrRef}
          className={`h-1 bg-black mt-2 md:mt-4 transition-all duration-500 ${
            inView ? "w-[90%]" : "w-[60%]"
          }`}
        />
      </div>
      <div><Grid /></div>
      <div className="flex items-center text-lg md:text-2xl lg:text-3xl py-4 font-hamlin">
        <Link href="/events" className="px-4 hover:translate-x-2 transition-all duration-300 flex items-center">
          <p className="px-4">Explore all our events</p>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Eventshero;
