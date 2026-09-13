import Link from "next/link";
import TextHover from "@/components/common/TextHover";

const pillars = ["INNOVATION", "PASSION", "EXCELLENCE"];

const HeroFooterStrip = () => {
  return (
    <div className="relative flex flex-col gap-6 bg-paper px-5 pb-12 pt-6 text-ink sm:px-8 md:flex-row md:items-center md:justify-between md:px-14 lg:px-20">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-[0.25em] text-ink/60 md:text-sm">
        {pillars.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <Link
        href="/events"
        className="group inline-flex items-center gap-3 font-anton text-2xl uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood md:text-3xl"
      >
        <TextHover text="Explore Events" accentClassName="text-blood" />
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </Link>
    </div>
  );
};

export default HeroFooterStrip;