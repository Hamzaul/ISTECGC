"use client";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/FooterCGC";
import Teamheader from "@/components/teamtabcomp/teamheader/Teamheader";
import Card from "@/components/card";
import { teamSections } from "@/data/team";

const Team = () => {
  return (
    <div className="mt-14 md:mt-24 overflow-x-hidden">
      <Navbar />
      <Teamheader />
      <main>
        {teamSections
          .filter((section) => section.members.length > 0)
          .map((section) => (
            <div key={section.key} className="mb-10 md:mb-16">
              <div className="text-[clamp(1.75rem,7vw,4.5rem)] font-bold py-4 flex flex-col items-center group w-full hover:text-[#8B0000] transition-all duration-500 text-center px-4">
                {section.label.toUpperCase()}
                <hr className="h-1 w-[60%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
              </div>

              {section.layout === "spotlight" ? (
                // Mentors / President+VP: large, mirrored cards for visual balance
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
                // Everything else: responsive grid that holds up at any member count
                // (Marketing has 15 -- this grid scales down to 1-2 columns on mobile
                // and up to 4-5 on desktop rather than breaking the layout).
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center p-5 max-w-[1600px] mx-auto">                  {section.members.map((member, index) => (
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
