"use client";
import Image from "next/image";
import Links from "./links/Links";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleClick = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between text-3xl md:text-lg lg:text-3xl w-full fixed top-0 border-b-black border-b-4 p-2 md:p-4 z-30
    ${isScrolled || isOpen ? "bg-black" : "bg-white"}
    ${isScrolled || isOpen ? "text-white" : "text-black"}`}
    >
      <div className="flex items-center">
        <a href="/"><img src={siteConfig.cgcLogo} alt="CGC University Logo" className="w-8 h-15" /></a>
        <a href="/">
          {/* TODO: drop the real ISTE-CGC logo file at siteConfig.logo */}
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={45}
            height={45}
            className="mx-2 w-8 md:w-12 "
            priority
          />
        </a>
        <a href="/">
          <div
            className={`${isOpen || isScrolled ? "text-white" : "text-black"} text-2xl md:text-xl lg:text-3xl`}
          >
            {siteConfig.shortName}
          </div>
        </a>
      </div>
      <div id="menu" className="flex items-center">
        <Links isOpen={isOpen} handleClick={handleClick} />
        <div className="md:hidden flex items-center ml-4">
          {!isOpen && (
            <button onClick={() => {
              setIsOpen(true);
            }}>
              <GiHamburgerMenu size={25} />
            </button>
          )}
          {isOpen && (
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose size={35} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
