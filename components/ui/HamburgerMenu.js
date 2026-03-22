'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Academics',   href: '/academics'  },
  { label: 'Tech',        href: '/tech'        },
  { label: 'Side Quests', href: '/side-quests' },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Hamburger button (mobile only) ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="sm:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
      >
        <span
          className="block h-[1.5px] bg-foreground origin-center transition-all duration-300 ease-in-out"
          style={{
            width: '22px',
            transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
          }}
        />
        <span
          className="block h-[1.5px] bg-foreground transition-all duration-200 ease-in-out"
          style={{
            width: '16px',
            opacity: open ? 0 : 1,
            transform: open ? 'scaleX(0)' : 'none',
          }}
        />
        <span
          className="block h-[1.5px] bg-foreground origin-center transition-all duration-300 ease-in-out"
          style={{
            width: '22px',
            transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {/* Mobile menu */}
      <div
        onClick={() => setOpen(false)}
        className="sm:hidden fixed inset-0 z-40 bg-background backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
        aria-hidden="true"
      />

      <div
        className="sm:hidden fixed top-0 right-0 z-40 h-full w-[75vw] max-w-[300px] bg-card border-l border-border flex flex-col"
        style={{
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: open ? '-20px 0 60px rgba(0,0,0,0.25)' : 'none',
        }}
      >

        <div className="h-14 flex items-center px-6 border-b border-border shrink-0">
          <span className="font-display text-base font-bold text-foreground">
            Lousy Writers
          </span>
        </div>

        <nav className="flex flex-col px-4 pt-6 pb-4 gap-1 flex-1">
  {NAV_LINKS.map((link, i) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`
          group flex items-center gap-3 px-3 py-3 rounded-lg
          transition-all duration-300 ease-out
          ${isActive 
            ? 'bg-[#2a2a2a] text-white' 
            : 'bg-[#1a1a1a] hover:bg-[#222] text-gray-400'}
          ${open 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-4'}
        `}
        style={{
          transitionDelay: open ? `${i * 55}ms` : '0ms',
        }}
      >
        {/* Accent bar */}
        <span
          className={`
            w-[3px] h-5 rounded-full shrink-0 transition-colors duration-200
            ${isActive ? 'bg-orange-500' : 'bg-gray-700'}
          `}
        />

        {/* Label */}
        <span className="font-mono text-sm tracking-wide">
          {link.label}
        </span>

        {/* Arrow */}
        <span
          className="
            ml-auto font-mono text-xs opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-150 text-orange-500
          "
        >
          →
        </span>
      </Link>
    );
  })}
</nav>

      </div>
    </>
  );
}