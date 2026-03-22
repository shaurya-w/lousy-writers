'use client';

import { useEffect, useState } from 'react';

/**
 * ThemeToggle — toggles the `dark` class on <html>.
 * Persists preference in localStorage so it survives page reloads.
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved preference or fall back to system preference
    const saved  = localStorage.getItem('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const active = saved === 'dark' || (!saved && system);

    setIsDark(active);
    document.documentElement.classList.toggle('dark', active);
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  // Avoid hydration mismatch — render nothing until mounted
  if (!mounted) {
    return <div className="w-8 h-8" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="
        w-8 h-8 flex items-center justify-center rounded-md
        text-muted hover:text-foreground hover:bg-border
        transition-colors duration-150
        font-mono text-sm
      "
    >
      {isDark ? '☀' : '◐'}
    </button>
  );
}
