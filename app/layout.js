import '../app/globals.css';
import Link from 'next/link';
import ThemeToggle from '../components/ui/ThemeToggle';
import HamburgerMenu from '../components/ui/HamburgerMenu';

export const metadata = {
  title:       { default: 'Lousy Writers', template: '%s — Lousy Writers' },
  description: 'A blog about academics, technology, and questionable side quests.',
};

const NAV_LINKS = [
  { label: 'Academics',   href: '/academics'   },
  { label: 'Tech',        href: '/tech'         },
  { label: 'Side Quests', href: '/side-quests'  },
];

/**
 * Prevents dark-mode flash by applying the theme class
 * synchronously before React hydrates.
 */
const themeScript = `
  (function () {
    try {
      var saved  = localStorage.getItem('theme');
      var system = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && system)) {
        document.documentElement.classList.add('dark');
      }
    } catch (_) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        {/* ─── Header ─────────────────────────────────────── */}
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
            {/* Site title */}
            <Link
              href="/"
              className="font-display text-xl font-bold text-foreground hover:text-accent transition-colors"
            >
              Lousy Writers
            </Link>
            

            {/* Nav + Toggle */}
            <nav className="flex items-center gap-1">
              {/* Desktop links */}
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    hidden sm:inline-flex
                    px-3 py-1.5 rounded-md
                    text-sm text-muted hover:text-foreground hover:bg-border
                    transition-colors duration-150
                  "
                >
                  {link.label}
                </Link>
              ))}
              <span className="mx-1 hidden sm:block w-px h-4 bg-border" />
              <ThemeToggle />
              {/* Mobile hamburger */}
              <HamburgerMenu />
            </nav>
          </div>
        </header>

        {/* ─── Main ───────────────────────────────────────── */}
        <main className="mx-auto max-w-5xl px-6 py-12">
          {children}
        </main>

        {/* ─── Footer ─────────────────────────────────────── */}
        {/* <footer className="mt-20 border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
            <span>© {new Date().getFullYear()} Lousy Writers</span>
            <nav className="flex gap-4">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer> */}
      </body>
    </html>
  );
}