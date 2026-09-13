"use client";

import { FaLinkedin } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

// Card sizes:
// default = normal team members
// md      = medium leadership cards
// lg      = large spotlight cards (Mentors / President)
//
// reverse = mirrors the image/text direction on desktop

const sizeClasses = {
  default: "max-w-sm",
  md: "max-w-sm md:max-w-md lg:max-w-lg",
  lg: "max-w-sm md:max-w-xl lg:max-w-2xl",
};

function Card(props) {
  const size = props.size || "default";
  const reverse = Boolean(props.reverse);

  const isLarge = size === "lg";
  const isMedium = size === "md";

  return (
    <div
      onClick={props.onClick}
      className={`
        group
        w-full
        ${sizeClasses[size]}
        bg-white
        border-4
        border-black
        overflow-hidden
        flex
        flex-col
        transform
        transition-all
        duration-500
        ease-in-out
        hover:-translate-y-2
        hover:shadow-2xl

        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}

        ${
          isLarge
            ? "md:min-h-[430px] lg:min-h-[500px]"
            : isMedium
              ? "md:min-h-[380px] lg:min-h-[430px]"
              : ""
        }
      `}
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}
      <div
        className={`
          relative
          w-full
          overflow-hidden
          bg-black
          border-black

          ${
            reverse
              ? "md:border-l-4 md:border-r-0"
              : "md:border-r-4 md:border-l-0"
          }

          max-md:border-b-4

          ${
            isLarge
              ? "h-[330px] md:h-auto md:w-2/5 lg:w-1/2"
              : isMedium
                ? "h-[300px] md:h-auto md:w-2/5 lg:w-1/2"
                : "aspect-[16/9] md:w-2/5 lg:w-1/2"
          }
        `}
      >
        <div
          className="
            absolute
            inset-0
            bg-center
            bg-cover
            bg-no-repeat
            transition-all
            duration-700
            ease-in-out
            group-hover:scale-110
            grayscale
            group-hover:grayscale-0
          "
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className={`
          flex
          flex-col
          justify-between
          w-full
          md:w-3/5
          lg:w-1/2
          min-w-0
        `}
      >
        {/* ===================================================
            TEXT
        ==================================================== */}
        <div
          className="
            flex
            flex-col
            items-start
            py-4
            px-5
            min-w-0
          "
        >
          <h2
            className="
              text-[clamp(1.25rem,4vw,1.75rem)]
              leading-tight
              break-words
              transform
              transition-all
              duration-500
              group-hover:translate-x-2
            "
          >
            {props.name}
          </h2>

          <h3
            className="
              text-[clamp(1rem,3.2vw,1.4rem)]
              leading-tight
              break-words
              transform
              transition-all
              duration-500
              delay-75
              group-hover:translate-x-2
            "
          >
            {props.surname}
          </h3>

          <p
            className="
              text-[clamp(0.8rem,2.4vw,0.93rem)]
              mt-2
              font-hamlin
              font-light
              text-gray-600
              break-words
              transform
              transition-all
              duration-500
              delay-100
              group-hover:translate-x-2
            "
          >
            {props.domain}
          </p>
        </div>

        {/* ===================================================
            SOCIAL LINKS
        ==================================================== */}
        <div
          className="
            grid
            grid-cols-2
            w-full
            text-2xl
            md:text-4xl
            border-t-4
            border-black
          "
        >
          {/* LinkedIn */}
          <div
            className="
              relative
              border-r-2
              border-black
              p-5
              grid
              place-items-center
              overflow-hidden
              group/linkedin
            "
          >
            <a
              href={props.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="
                transform
                transition-all
                duration-400
                hover:scale-110
                group-hover:text-blue-600
              "
            >
              <FaLinkedin className="text-5xl" />

              <span
                className="
                  absolute
                  inset-0
                  bg-blue-50
                  opacity-0
                  group-hover/linkedin:opacity-20
                  transition-opacity
                  duration-300
                "
              />
            </a>
          </div>

          {/* Website */}
          <div
            className="
              relative
              border-l-2
              border-black
              p-5
              grid
              place-items-center
              overflow-hidden
              group/website
            "
          >
            <a
              href={props.connectlink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect Link"
              className="
                transform
                transition-all
                duration-400
                hover:scale-110
                group-hover:text-[#8B0000]
              "
            >
              <SlGlobe className="text-5xl" />

              <span
                className="
                  absolute
                  inset-0
                  bg-blue-50
                  opacity-0
                  group-hover/website:opacity-20
                  transition-opacity
                  duration-300
                "
              />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          HOVER TILT
      ====================================================== */}
      <style jsx global>{`
        @keyframes tiltAnimation {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }

          100% {
            transform: perspective(1000px) rotateY(3deg);
          }
        }

        .group:hover {
          animation: tiltAnimation 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default Card;