import Image from "next/image";
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";

const UpcomingEventsCard = ({
  title,
  image,
  date,
  time,
  speaker,
  venue,
  description,
  registrationLink,
  eventLink,
}) => {
  return (
    <div className="w-full border-black border-4 max-w-xl md:max-w-2xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative border-b-2 border-black w-full h-40 sm:h-56 md:h-72 overflow-hidden">
        <Image
          src={image}
          alt={`${title} event poster`}
          fill
          className="object-cover absolute inset-0"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <div className="p-4 sm:p-5 md:p-6 space-y-3">
        <h2 className="text-[clamp(1.25rem,5vw,1.875rem)] font-anton text-gray-900 break-words">
          {title}
        </h2>
        {speaker && (
          <h3 className="text-[clamp(0.95rem,3vw,1.25rem)] font-hamlin text-gray-700 break-words">
            {speaker}
          </h3>
        )}
        <p className="text-[clamp(0.9rem,2.6vw,1.125rem)] font-hamlin text-gray-600 line-clamp-4">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 border-t pt-4">
          <div className="flex items-center space-x-3 min-w-0">
            <CiCalendar className="w-6 h-6 md:w-7 md:h-7 text-blue-500 shrink-0" />
            <span className="text-sm md:text-base font-bold text-gray-700 break-words">
              {date}
            </span>
          </div>
          <div className="flex items-center space-x-3 sm:border-x sm:px-3 min-w-0">
            <CiClock2 className="w-6 h-6 md:w-7 md:h-7 text-green-500 shrink-0" />
            <span className="text-sm md:text-base font-bold text-gray-700 break-words">
              {time}
            </span>
          </div>
          <div className="flex items-center space-x-3 min-w-0">
            <CiLocationOn className="w-6 h-6 md:w-7 md:h-7 text-red-500 shrink-0" />
            <span className="text-sm md:text-base font-bold text-gray-700 break-words">
              {venue}
            </span>
          </div>
        </div>

        {(registrationLink || eventLink) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t-4 border-black -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 md:-mx-6 md:-mb-6 mt-4">
            {registrationLink && (
              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-black text-white py-3 font-anton text-base sm:text-lg md:text-xl tracking-wide hover:bg-[#8B0000] transition-colors duration-300"
              >
                REGISTER NOW
              </a>
            )}
            {eventLink && (
              <a
                href={eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center bg-white text-black py-3 font-anton text-base sm:text-lg md:text-xl tracking-wide hover:bg-gray-100 transition-colors duration-300 ${
                  registrationLink ? "sm:border-l-4 border-t-4 sm:border-t-0 border-black" : ""
                }`}
              >
                VIEW EVENT SITE
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
