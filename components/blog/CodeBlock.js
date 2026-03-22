'use client';

import { useRef, useState } from 'react';

/**
 * CodeBlock — rendered by MDX in place of <pre>.
 *
 * rehype-pretty-code annotates the <pre> with data attributes
 * (data-language, data-theme) that we use for display.
 * The actual <code> inside inherits highlighted spans.
 */
export default function CodeBlock({ children, ...props }) {
  const preRef  = useRef(null);
  const [copied, setCopied] = useState(false);

  const language = props['data-language'] ?? '';

  async function handleCopy() {
    const text = preRef.current?.innerText ?? '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silent fail
    }
  }

  return (
    <div className="group relative my-6 rounded-lg border border-border overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
        <span className="text-xs text-muted font-mono tracking-widest uppercase">
          {language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="text-xs text-muted hover:text-foreground transition-colors duration-150 font-mono"
          aria-label="Copy code"
        >
          {copied ? 'copied!' : 'copy'}
        </button>
      </div>

      {/* Code content */}
      <pre
        ref={preRef}
        className="overflow-x-auto p-4 text-sm font-mono bg-card text-foreground leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
