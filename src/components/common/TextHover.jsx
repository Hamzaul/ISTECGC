"use client";

/**
 * TextHover
 * ---------
 * Reusable text-reveal interaction: on hover, the visible label slides up and
 * out while a duplicate (in the accent colour) slides up from below to take
 * its place. Pure CSS transforms (Tailwind's `group-hover`), so it's cheap,
 * works with SSR, and needs no JS state.
 *
 * Usage:
 *   <TextHover as="span" text="EVENTS" />
 *   <Link href="/events"><TextHover text="EVENTS" /></Link>
 *
 * Accessibility: the real text stays in the DOM as normal text content
 * (screen readers read it once) — the duplicate copy is aria-hidden.
 */
const TextHover = ({
  text,
  as: As = "span",
  className = "",
  accentClassName = "text-blood",
}) => {
  return (
    <As
      className={`group relative inline-block overflow-hidden align-top leading-none ${className}`}
    >
      <span className="block transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:-translate-y-full">
        {text}
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 block translate-y-full transition-transform duration-500 ease-out motion-reduce:hidden group-hover:translate-y-0 ${accentClassName}`}
      >
        {text}
      </span>
    </As>
  );
};

export default TextHover;
