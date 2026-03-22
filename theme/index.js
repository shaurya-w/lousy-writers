/**
 * Lousy Writers — Semantic Design Tokens
 *
 * All colors are defined as CSS variables. Components must
 * only reference these tokens, never raw color values.
 *
 * Light values are set on :root
 * Dark values are set on .dark (applied to <html>)
 */

const theme = {
  tokens: {

    primary:    'var(--color-primary)',
    secondary:  'var(--color-secondary)',
    background: 'var(--color-background)',
    foreground: 'var(--color-foreground)',
    muted:      'var(--color-muted)',
    accent:     'var(--color-accent)',
    border:     'var(--color-border)',
    card:       'var(--color-card)',
  },
};

module.exports = theme;
