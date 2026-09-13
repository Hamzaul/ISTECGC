import React, { useEffect, useRef, useState } from "react";

const Projectbg = () => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.5 } // Adjust the threshold if needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group flex flex-col justify-center items-center h-fit overflow-x-hidden"
    >
      <div className="flex flex-col overflow-hidden whitespace-nowrap h-fit">
        <div
          className={`w-[2000px] md:w-[6000px] flex grayscale text-gray-400 opacity-60 transition-transform duration-1500 ${
            inView ? "animate-slide-in-right" : ""
          } group-hover:md:animate-slide-in-right`}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="mr-6 md:mr-8 text-7xl md:text-[110px] leading-2 md:leading-none"
            >
              PROJECTS
            </span>
          ))}
        </div>
        <div
          className={`w-[2000px] md:w-[6000px] flex grayscale text-gray-400 opacity-60 transition-transform duration-1500 ${
            inView ? "animate-slide-in-left" : ""
          } group-hover:md:animate-slide-in-left`}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="mr-6 md:mr-8 text-7xl md:text-[110px] leading-2 md:leading-none"
            >
              PROJECTS
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectbg;
