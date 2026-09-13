"use client";
import Pasteventscard from "@/components/eventstabcomp/Pasteventscard";
import Upcomingeventscard from "@/components/eventstabcomp/Upcomingeventscard";
import Eventsheader from "@/components/eventstabcomp/eventsheader/Eventsheader";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/FooterCGC";
import { upcomingEvent, pastEvents } from "@/data/events";
import { useEffect, useState } from "react";

const Events = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [executed, setExecuted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setExecuted(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-20 md:mt-24 flex flex-col relative">
        <Eventsheader />

        <div className="relative w-full h-full my-16 max-md:my-20">
          {executed && (
            <div className="relative w-full h-auto">
              {/* TODO: drop the real ISTE-CGC events banner videos at these paths */}
              <video
                src={
                  isMobile
                    ? "/videos/upcoming-mobile.mp4"
                    : "/videos/upcoming-desktop.mp4"
                }
                autoPlay
                loop
                playsInline
                controls={false}
                style={{ pointerEvents: "none" }}
                muted
                className="w-full h-full object-cover z-10"
              ></video>
              <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Upcomingeventscard
              title={upcomingEvent.title}
              image={upcomingEvent.image}
              date={upcomingEvent.date}
              time={upcomingEvent.time}
              speaker={upcomingEvent.speaker}
              venue={upcomingEvent.venue}
              description={upcomingEvent.description}
              registrationLink={upcomingEvent.registrationLink}
              eventLink={upcomingEvent.eventLink}
            />
          </div>
        </div>

        <div>
          <div className="text-[clamp(1.75rem,9vw,7rem)] font-bold py-4 flex flex-col items-center group w-full hover:text-[#8B0000] text-center px-2">
            PREVIOUS EVENTS
            <hr className="h-1 w-[60%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
          </div>
          <div className="flex flex-wrap p-8 justify-between z-30">
            {pastEvents.map((event, index) => (
              <Pasteventscard
                key={index}
                title={event.title}
                image={event.image}
                speaker={event.speaker}
                venue={event.venue}
                description={event.description}
                galleryImages={event.galleryImages}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
