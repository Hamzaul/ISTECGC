import Image from "next/image";
import { useState } from "react";

const Partnerin = ({ srcval }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[75%] md:w-full border-black border-4 py-2 md:p-10 
                 flex items-center justify-center 
                 transition-all duration-500 ease-in-out
                 animate-fadeIn
                 hover:shadow-2xl hover:-translate-y-2
                 group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background animation */}
      <div
        className={`absolute inset-0 bg-[#8B0000] transition-transform duration-500 ease-in-out
                    ${isHovered ? "translate-y-0" : "translate-y-full"}`}
      />

      {/* Logo image */}
      <Image
        src={srcval.imgpath}
        width={200}
        height={200}
        alt={srcval.title}
        className="w-[200px] h-auto relative z-10 transition-all duration-500
            group-hover:scale-110 group-hover:rotate-3"
/>

      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 pointer-events-none"
      >
        <div
          className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full 
                        animate-ping"
        />
        <div
          className="absolute bottom-2 right-2 w-2 h-2 bg-black rounded-full 
                        animate-ping"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Global styles for custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Partnerin;
