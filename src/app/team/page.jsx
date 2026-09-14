"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/FooterCGC";
import Teamheader from "@/components/teamtabcomp/teamheader/Teamheader";
import Card from "@/components/card";
import { teamSections, anishGupta } from "@/data/team";

const Team = () => {
  return (
    <div className="mt-14 md:mt-24 overflow-x-hidden">
      <Navbar />
      <Teamheader />

      <main>
        {/* =====================================================
            ANISH GUPTA — FEATURED ABOVE ALL TEAM SECTIONS
        ===================================================== */}
        <section className="mb-10 md:mb-16">
          <div className="flex flex-col items-center justify-center px-5 pt-4">
            <Card
              name={anishGupta.name?.toUpperCase()}
              surname={anishGupta.role}
              domain={anishGupta.role}
              connectlink={anishGupta.connectlink || "#"}
              linkedin={anishGupta.linkedin || "#"}
              image={anishGupta.image}
              size="lg"
              reverse={false}
            />

            {/* Separator line */}
            <hr className="h-1 w-[60%] md:w-[30%] bg-black mt-8 md:mt-10" />
          </div>
        </section>

        {/* =====================================================
            ALL OTHER TEAM SECTIONS
        ===================================================== */}
        {teamSections
          .filter((section) => section.members.length > 0)
          .map((section) => (
            <div key={section.key} className="mb-10 md:mb-16">
              
              {/* Section Heading */}
              <div className="text-[clamp(1.75rem,7vw,4.5rem)] font-bold py-4 flex flex-col items-center group w-full hover:text-[#8B0000] transition-all duration-500 text-center px-4">
                {section.label.toUpperCase()}

                <hr className="h-1 w-[60%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
              </div>

              {/* Spotlight Sections */}
              {section.layout === "spotlight" ? (
                <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 items-center justify-center p-5">
                  {section.members.map((member, index) => (
                    <Card
                      key={`${section.key}-${index}`}
                      name={member.name?.toUpperCase()}
                      surname={member.role}
                      domain={member.role}
                      connectlink={member.connectlink || "#"}
                      linkedin={member.linkedin || "#"}
                      image={member.image}
                      size={section.cardSize}
                      reverse={index % 2 === 1}
                    />
                  ))}
                </div>
              ) : (
                /* Grid Sections */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center p-5 max-w-[1600px] mx-auto">
                  {section.members.map((member, index) => (
                    <Card
                      key={`${section.key}-${index}`}
                      name={member.name?.toUpperCase()}
                      surname={member.role}
                      domain={member.role}
                      connectlink={member.connectlink || "#"}
                      linkedin={member.linkedin || "#"}
                      image={member.image}
                      size="default"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
      </main>

      <Footer />
    </div>
  );
};

export default Team;