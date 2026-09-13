"use client";

import { useEffect, useState } from "react";
import FooterCGC from "@/components/footer/FooterCGC";
import DoorTransition from "@/components/door/DoorTransition";
import HeroFooterStrip from "@/components/hero/HeroFooterStrip";
import Videoback from "@/components/homepagecomp/videoback/Videoback";
// import Upcominganim from "@/components/homepagecomp/upcominganim/Upcominganim";
import Aboutus from "@/components/homepagecomp/aboutus/Aboutus";
import Domainsec from "@/components/homepagecomp/domainsec/Domainsec";
import Projectsembed from "@/components/homepagecomp/projectsembed/Projectsembed";
import Eventshero from "@/components/homepagecomp/eventshero/Eventshero";
import Partners from "@/components/homepagecomp/partners/Partners";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [executed, setExecuted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setExecuted(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="relative h-[100vh] w-full bg-ink">
          {executed && (
            <video
              src={
                isMobile
                  ? "/videos/loader-mobile.mp4"
                  : "/videos/loader-desktop.mp4"
              }
              autoPlay
              muted
              playsInline
              preload="auto"
              className="h-full w-full overflow-y-hidden object-cover transition-all duration-500"
            />
          )}

          <div className="pointer-events-auto absolute inset-0 bg-transparent" />
        </div>
      ) : (
        <div>
          <main className="w-full">
            {/* Door owns the intro and Skip Intro control */}
            <DoorTransition />

            {/* Existing landing content */}
            <HeroFooterStrip />

            <div className="w-full">
              <Videoback />
            </div>

            {/* <div className="w-full">
              <Upcominganim />
            </div> */}

            <div className="w-full">
              <Aboutus />
            </div>

            <div className="w-full">
              <Domainsec />
            </div>

            <div className="w-full">
              <Projectsembed />
            </div>

            <div className="w-full">
              <Eventshero />
            </div>

            <div className="w-full">
              <Partners />
            </div>
          </main>

          {/* Existing Footer — untouched */}
          <FooterCGC />
        </div>
      )}
    </>
  );
}