import Image from "next/image";
import Projectbg from "./projectbg/projectbg";

const Projectsembed = () => {
  return (
    <div className="bg-black grayscale hover:grayscale-0 transition-all duration-150 relative flex justify-center items-center min-h-fit overflow-y-hidden py-[70px] group">
      <div className="absolute z-10 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <Projectbg key={index} />
        ))}
      </div>
      <div className="relative z-20 flex justify-center items-center p-4 border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-300 hover:border-[#8B0000] hover:shadow-[0_0_25px_rgba(139,0,0,0.5)]">
        <a href="/events">
        <Image
          alt="project poster"
          src="/Pictures/events/graviton_Poster.webp"
          width={960}
          height={501}
          className="object-contain w-[300px] h-auto md:w-[960px]"
        />
        </a>
      </div>
    </div>
  );
};

export default Projectsembed;
