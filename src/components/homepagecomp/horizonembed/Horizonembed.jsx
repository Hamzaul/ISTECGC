"use client";
import Image from "next/image";
import { useState } from "react";

const Horizonembed = () => {
  const [mouseHover, setMouseHover] = useState(false);

  const hoverHandle = () => setMouseHover(true);

  return (
    <div className="relative">
      <div
        onMouseEnter={hoverHandle}
        className={`flex justify-center items-center absolute inset-0 z-15 p-10 transition-opacity duration-700 ease-in-out ${
          mouseHover ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src="/Pictures/horizoncoverimage.png"
          width={1080}
          height={1080}
          alt="Horizon Cover"
          className="object-cover w-[75%] h-[75%]"
        />
      </div>
      {/* NOTE: this component is not rendered on the ISTE-CGC homepage (see src/app/page.js).
          It's kept here in case a similar embedded microsite is added for ISTE-CGC later —
          update the iframe src below before re-enabling it. */}
      <div className="py-[50px] md:py-[60px] hidden md:flex justify-center items-center h-[95%] md:h-fit z-14">
        <iframe
          src="https://graviton.istecgc.example" // TODO: replace with the real ISTE-CGC microsite URL
          width="80%"
          height="720px"
          className="border-[4px] border-white p-10 rounded-lg shadow-lg shadow-white hover:shadow-gray-600 hover:border-gray-600 transition-all duration-150"
        ></iframe>
      </div>
    </div>
  );
};

export default Horizonembed;
