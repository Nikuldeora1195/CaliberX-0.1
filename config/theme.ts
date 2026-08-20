/**
 * CaliberX — Theme Configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * All design tokens in one place. This file is the SINGLE SOURCE OF TRUTH
 * for the visual language of the site.
 *
 * To change any color, font, radius, or animation timing — do it here.
 * The globals.css file reads these via CSS custom properties (variables).
 *
 * NOTE: Token names here mirror the CSS variable names in globals.css.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Color Palette ────────────────────────────────────────────────────────────

/**
 * Core brand palette.
 * These are raw hex values used as the base for CSS variables.
 * When changing the brand color, update `primary` and `primaryGradient`.
 */
export const palette = {
  // Brand purple family
  primaryDark:   '#30205d',   // Deep violet — gradient start, loader
  primary:       '#6d45c8',   // Core brand purple (light mode)
  primaryMid:    '#9a73e8',   // Mid purple — gradient end on buttons
  primaryLight:  '#a26fdf',   // Light purple — shimmer end
  primaryDark2:  '#8d6bea',   // Dark mode primary

  // Accent colors
  blue:   '#3156c9',
  pink:   '#b95f9d',
  violet: '#856ed9',
  cyan:   '#329696',
  amber:  '#c19433',

  // Highlight / ring
  ringLight: '#6d45c8',   // Light mode ring (matches primary)
  ringDark:  '#d4ff4f',   // Dark mode ring — electric lime

  // Neutrals — Light mode
  backgroundLight:        '#FFFFFF',
  foregroundLight:        '#17152a',
  cardLight:              '#fff',
  mutedForegroundLight:   '#5e6070',
  borderLight:            'rgba(31, 27, 68, 0.14)',
  surfaceLight:           'rgba(255, 255, 255, 0.78)',
  shadowLight:            '0 24px 70px rgba(48, 35, 100, 0.13)',

  // Neutrals — Dark mode
  backgroundDark:         '#090a0a',
  foregroundDark:         '#f4f4ed',
  cardDark:               '#111313',
  mutedForegroundDark:    '#929793',
  borderDark:             'rgba(244, 244, 237, 0.12)',
  surfaceDark:            'rgba(255, 255, 255, 0.045)',
  shadowDark:             '0 24px 70px rgba(0, 0, 0, 0.25)',

  // Terminal — fixed dark palette (always dark regardless of theme)
  terminalBg:        '#182026',
  terminalText:      '#f5f8f2',
  terminalMuted:     '#82938a',
  terminalDim:       '#9aa7a1',
  terminalDotBg:     '#65716e',
  terminalActive:    '#fff',
  terminalSignal:    '#a3b0a9',
}

// ─── Typography ───────────────────────────────────────────────────────────────

export const fonts = {
  /** Primary UI font — loaded via next/font or CDN */
  sans:  "'Geist', sans-serif",
  /** Monospaced font — used for labels, eyebrows, terminal */
  mono:  "'Geist Mono', monospace",
  /** Display serif — used for italic headline spans */
  serif: "'Instrument Serif', Georgia, serif",
}

// ─── Spacing & Shape ──────────────────────────────────────────────────────────

export const shape = {
  /** Default card border-radius */
  radius: '18px',
  /** Nav height (desktop) */
  navHeight: '84px',
  /** Nav height (mobile) */
  navHeightMobile: '70px',
  /** Max content width */
  maxWidth: '1280px',
}

// ─── Gradients ────────────────────────────────────────────────────────────────

/**
 * Gradient definitions used across the site.
 * Reference palette values above; do not hardcode hex here.
 */
export const gradients = {
  /** Brand mark (logo square) gradient */
  brandMark: `linear-gradient(135deg, ${palette.primaryDark} 0%, ${palette.primary} 48%, ${palette.primaryLight} 100%)`,
  /** Primary button gradient */
  buttonPrimary: `linear-gradient(110deg, ${palette.primaryDark}, ${palette.primary} 52%, ${palette.primaryMid})`,
  /** Loader mark gradient */
  loaderMark: `linear-gradient(135deg, ${palette.primaryDark}, ${palette.primary}, ${palette.primaryLight})`,
}

// ─── Animation Timings ────────────────────────────────────────────────────────

export const animation = {
  /** Logo / brand shimmer cycle */
  shimmerDuration: '5s',
  /** Button primary shimmer cycle */
  buttonShimmerDuration: '6s',
  /** Loader pulse cycle */
  loaderPulseDuration: '1.3s',
  /** Cursor glow breathe cycle */
  cursorBreatheDuration: '7s',
  /** Ambient drift (before pseudo-element) */
  ambientDriftDuration: '18s',
  /** Ambient drift (after pseudo-element) */
  ambientDriftReverseDuration: '23s',
  /** Orbital ring rotation */
  orbitDuration: '13s',
  /** Core cube float */
  floatDuration: '5s',
  /** Marquee scroll */
  marqueeDuration: '26s',
  /** Theme / background transition */
  themeTransition: '0.45s',
  /** Cursor lag lerp factor */
  cursorLerp: 0.1,
  /** Mouse tilt magnitude (degrees) */
  tiltMagnitude: 8,
}

// ─── Pointer Glow ─────────────────────────────────────────────────────────────

export const pointerGlow = {
  size: '600px',
  opacity: 0.7,
  blurRadius: '80px',
}

// ─── Breakpoints ──────────────────────────────────────────────────────────────

export const breakpoints = {
  mobile: '760px',
}
