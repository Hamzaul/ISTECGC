import React from "react";

const Domainmain = ({ item }) => {
  return (
    <div className="group relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div
        className="flex flex-col lg:items-none lg:justify-start border-black border-[3px] md:border-[6px] p-6 lg:p-3 lg:px-4 mx-6 lg:mx-4 my-8 lg:my-0 
        transition-all duration-300 
        group-hover:border-[#8B0000]
        bg-white"
      >
        {/* Domain Name with sliding animation */}
        <div className="relative overflow-hidden">
          <div
            className="text-4xl md:text-5xl lg:text-5xl py-1 
            transform transition-all duration-300 
            group-hover:text-[#8B0000] 
            group-hover:translate-x-4
            group-hover:scale-105"
          >
            {item.domainname}
          </div>
        </div>

        {/* Video Container with animation */}
        <div
          className="w-[275px] h-[275px] overflow-hidden 
          transform transition-all duration-300 
          group-hover:scale-105 relative"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="none"
            style={{ pointerEvents: "none" }}
            className="w-full h-full object-cover 
              transition-all duration-300"
          >
            <source src={item.imgpath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>
        </div>

        {/* Description with staggered sliding animation */}
        <div className="relative ">
          <p
            className="font-hamlin text-justify py-2 text-md md:text-lg lg:text-lg
            transform transition-all duration-300 
            group-hover:translate-x-1
            delay-75"
          >
            {item.description}
          </p>
        </div>

        {/* Animated pseudo-element for additional effect */}
        <div
          className="absolute inset-0 -z-10 
          bg-gradient-to-r from-blue-100 to-[#8B0000] 
          opacity-0 transition-opacity duration-300 
          group-hover:opacity-100 
          rounded-lg 
          blur-3xl"
        />
      </div>
    </div>
  );
};

export default Domainmain;
