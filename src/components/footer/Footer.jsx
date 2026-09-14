import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white px-2 pl-2 md:px-6 md:pl-6 font-hamlin w-full">
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col text-md md:text-xl lg:text-2xl py-10">
          <div className="flex flex-col text-[#949494]">
            <p className="text-nowrap">{siteConfig.address.line1}</p>
            <p className="text-nowrap">{siteConfig.address.line2}</p>
            <p className="text-nowrap">{siteConfig.address.line3}</p>
          </div>
          <div className="py-10">
            <Link href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </Link>
          </div>
        </div>
        <div className="flex pb-20 ">
          <div className="px-2">
            <Link href={siteConfig.social.instagram}>
              <RiInstagramFill
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </Link>
          </div>
          <div className="px-2">
            <Link href={siteConfig.social.linkedin}>
              <FaLinkedin
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </Link>
          </div>
          <div className="px-2">
            <Link href={siteConfig.social.facebook}>
              <FaFacebook
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-b-white   border-b-2 text-sm items-end md:text-xl lg:text-2xl">
        <div className="flex flex-col md:flex-row py-2">
          <div className="px-1 py-2 md:py-0 md:px-2 hidden md:flex">
            <Link href="/events">Events</Link>
          </div>
          {/* Webinar section removed for ISTE-CGC — re-add a link here if it comes back */}
          <div className="px-1 py-2 md:py-0 md:px-2 hidden md:flex">
            <Link href="/team">Team</Link>
          </div>
          <div className="px-1 py-2 md:py-0 md:px-2 hidden md:flex">
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="text-sm py-2 md:text-xl lg:text-2xl flex items-center">
          Made with{" "}
          <span className="px-3">
            <Image
              src="/Pictures/heartiste.png"
              alt={`${siteConfig.name} footer heart`}
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
            />
          </span>{" "}
          by {siteConfig.shortName}
        </div>
      </div>
      <div className="flex items-center justify-center pt-20">
        {/* TODO: replace with the ISTE-CGC footer wordmark/logo image */}
        <Image
          src="/Pictures/branding/footeriste.png"
          alt={`${siteConfig.name} footer logo`}
          width={2000}
          height={500}
        />
      </div>
    </div>
  );
};

export default Footer;
