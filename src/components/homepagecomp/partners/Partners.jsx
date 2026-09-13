"use client";
import Partnerin from "./partnerin/Partnerin";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { partners } from "@/data/partners";

const Partners = () => {
  const [inView, setInView] = useState(false);
  const hrRef = useRef(null);

  useEffect(() => {
    if (!hrRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(hrRef.current);

    return () => {
      if (hrRef.current) {
        observer.unobserve(hrRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-4 md:my-16">
      <div className="text-[clamp(2rem,9vw,7rem)] font-bold py-4 flex flex-col items-center group w-full hover:text-[#8B0000] transition-all duration-500 text-center px-2">
        PARTNERS
        <hr
          ref={hrRef}
          className={`h-1 bg-black mt-2 md:mt-4 transition-all duration-500 ${
            inView ? "w-[90%] " : "w-[60%]"
          }`}
        />
      </div>
      <div className="hidden  md:grid md:grid-cols-4  md:gap-4 my-8">
        {partners.map((link) => (
          <Partnerin srcval={link} key={link.title} />
        ))}
      </div>
      <div className="flex justify-center w-full md:hidden my-10 md:my-0">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {partners.map((link, index) => (
              <CarouselItem key={index}>
                <Partnerin srcval={link} key={link.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="font-hamlin text-lg md:text-xl">
        &#9679; you have reached the end &#9679;
      </div>
    </div>
  );
};

export default Partners;
