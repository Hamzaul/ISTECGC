"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const PastEventsCard = ({
  title,
  image,
  speaker,
  description,
  galleryImages = [],
  button,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imagePositions, setImagePositions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  // Calculate random positions when hover state changes
  useEffect(() => {
    if (isHovered) {
      const positions = galleryImages
        .slice(0, galleryImages.length)
        .map(() => ({
          top: Math.random() * (window.innerHeight - 256), // 256 is image height
          left: Math.random() * (window.innerWidth - 256), // 256 is image width
        }));
      setImagePositions(positions);
    }
  }, [isHovered, galleryImages]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <>
      {/* Main Card */}
      <div className="group relative w-full max-w-[300px] md:max-w-[40%] mx-auto my-8 md:my-[90px] font-hamlin">
        <div
          className="flex flex-col border-4 border-black bg-white transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative w-full grayscale group-hover:grayscale-0 border-b-2 border-black aspect-[2/1] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="transition-transform duration-700 ease-in-out group-hover:scale-110"
              priority
            />
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content Container */}
          <div className="flex flex-col border-t-4 border-black p-4 md:p-6 transform transition-all duration-500 md:min-h-[300px]">
            <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-3 transform transition-all duration-500 group-hover:translate-x-2">
              {title}
            </h2>

            <h3 className="text-sm md:text-xl text-gray-700 font-semibold mb-2 transform transition-all duration-500 delay-75 group-hover:translate-x-2">
              {speaker}
            </h3>

            <p className="text-sm md:text-lg text-gray-600 transform transition-all duration-500 delay-100 group-hover:translate-x-2">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Gallery Images */}
      {isHovered &&
        !isMobile &&
        galleryImages
          .slice(0, galleryImages.length)
          .map((galleryImage, index) => (
            <div
              key={index}
              className="fixed z-50 w-64 h-64"
              style={{
                top: `${imagePositions[index]?.top}px`,
                left: `${imagePositions[index]?.left}px`,
                animation: "fadeSlideUp 0.5s ease forwards",
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Image
                src={galleryImage}
                alt="Event Gallery Image"
                fill
                sizes="256px"
                className="  transition-all duration-500 hover:scale-105 hover:shadow-xl"
              />
            </div>
          ))}

      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default PastEventsCard;
