import Link from "next/link";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import TextHover from "@/components/common/TextHover";
import { siteConfig } from "@/lib/siteConfig";

const quickLinks = [
  { title: "Events", path: "/events" },
  { title: "Team", path: "/team" },
  { title: "Contact Us", path: "/contact" },
];

/**
 * FooterCGC
 * ---------
 * Typography-led footer: no cards, no boxed borders — just scale, spacing,
 * and a single hairline rule. Reuses siteConfig + existing brand assets.
 */
const FooterCGC = () => {
  return (
    <footer className="w-full bg-ink px-5 pb-8 pt-16 text-paper sm:px-8 md:px-14 lg:px-20">
      <p className="font-anton uppercase leading-[0.85] text-[13vw] sm:text-7xl md:text-8xl lg:text-9xl">
        Build. Learn.
        <br />
        <span className="text-blood">Create.</span>
      </p>

      <div className="mt-12 grid gap-10 border-t border-paper/15 pt-8 font-mono text-xs tracking-[0.1em] text-paper/70 sm:grid-cols-3 md:text-sm">
        <div className="flex flex-col gap-1">
          <span className="text-paper/40">Address</span>
          <span>{siteConfig.address.line1}</span>
          <span>{siteConfig.address.line2}</span>
          <span>{siteConfig.address.line3}</span>
        </div>

        <nav className="flex flex-col gap-1">
          <span className="text-paper/40">Menu</span>
          {quickLinks.map((link) => (
            <Link key={link.path} href={link.path} className="w-fit">
              <TextHover text={link.title} />
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="text-paper/40">Connect</span>
          <a href={`mailto:${siteConfig.email}`} className="w-fit underline-offset-4 hover:underline">
            {siteConfig.email}
          </a>
          <div className="flex gap-4 pt-1 text-lg">
            <a href={siteConfig.social.instagram} aria-label="Instagram">
              <RiInstagramFill />
            </a>
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-paper/15 pt-4 font-mono text-[10px] tracking-[0.15em] text-paper/50 sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</span>
        <span className="flex items-center gap-2">
          Made with
          <Image src="/Pictures/heartiste.png" alt="" width={16} height={16} className="h-4 w-4" />
          by {siteConfig.shortName}
        </span>
      </div>
    </footer>
  );
};

export default FooterCGC;
