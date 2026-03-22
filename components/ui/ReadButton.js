import Link from 'next/link';

/**
 * ReadButton — minimal CTA used in BlogCard and hero sections.
 *
 * Props:
 *  href     {string}  Destination URL
 *  label    {string?} Button text (default: "Read →")
 */
export default function ReadButton({ href, label = 'Read →' }) {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center gap-1.5
        text-xs font-mono tracking-wide
        text-accent border border-accent
        px-3 py-1.5 rounded-md
        hover:bg-accent hover:text-background
        transition-colors duration-150
      "
    >
      {label}
    </Link>
  );
}
