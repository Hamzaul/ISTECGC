"use client";
import { useEffect, useRef } from "react";

const Videoback = ({ srcval }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) =>
          console.warn("Autoplay prevented:", error)
        );
      }
    }
  }, []);

  return (
    <div className="group w-full h-[50%] md:h-screen overflow-x-hidden my-3 md:my-8 relative">
      <video
        ref={videoRef}
        src={"/videos/hero-background.mp4"}
        poster="/Pictures/events/graviton.webp"
        autoPlay
        loop
        preload="auto"
        muted
        playsInline
        controls={false}
        className="w-full h-full object-cover transition-all duration-500 grayscale-0 md:grayscale group-hover:md:grayscale-0"
        style={{ pointerEvents: "none" }}
      ></video>
      <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>
    </div>
  );
};

export default Videoback;
