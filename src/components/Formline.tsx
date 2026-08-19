/**
 * Formline-inspired decorative linework.
 * These are original abstract compositions in the *spirit* of Northwest Coast
 * formline (ovoids, U-forms, S-forms, tapered strokes) blended with Hawaiian
 * kapa banding — not reproductions of any nation's crest or protected design.
 */

export const FormlineBand = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 240 24"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={`w-full h-6 ${className}`}
  >
    <defs>
      <pattern id="kapa-band" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
        <path d="M0 12 L10 4 L20 12 L30 4 L40 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 20 L10 12 L20 20 L30 12 L40 20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
        <ellipse cx="20" cy="6" rx="5" ry="3" fill="none" stroke="currentColor" strokeWidth="1.25" />
      </pattern>
    </defs>
    <rect width="240" height="24" fill="url(#kapa-band)" />
  </svg>
);

export const FormlineWaves = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true" className={className}>
    <g fill="none" stroke="currentColor" strokeLinecap="round">
      <path d="M0 60 C 150 10, 300 110, 450 60 S 750 10, 900 60 S 1150 110, 1200 60" strokeWidth="6" />
      <path d="M0 95 C 150 45, 300 145, 450 95 S 750 45, 900 95 S 1150 145, 1200 95" strokeWidth="3" opacity="0.7" />
      <path d="M0 128 C 150 78, 300 178, 450 128 S 750 78, 900 128 S 1150 178, 1200 128" strokeWidth="1.5" opacity="0.5" />
      <path d="M0 158 C 150 108, 300 208, 450 158 S 750 108, 900 158 S 1150 208, 1200 158" strokeWidth="1" opacity="0.35" />
    </g>
  </svg>
);

/** Ovoid — the core formline shape. Used as a frame for icons. */
export const Ovoid = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 80" aria-hidden="true" className={className}>
    <path
      d="M50 4 C82 4, 96 22, 96 40 C96 60, 78 76, 50 76 C22 76, 4 60, 4 40 C4 22, 18 4, 50 4 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    />
    <path
      d="M50 16 C72 16, 84 26, 84 40 C84 54, 70 64, 50 64 C30 64, 16 54, 16 40 C16 26, 28 16, 50 16 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.45"
    />
  </svg>
);

/** Large hero mark: an outrigger canoe drawn in formline-style tapered strokes,
 *  under a pine-and-mountain horizon, riding a U-form wave. */
export const FormlineCanoeMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 520 320" aria-hidden="true" className={className}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* mountain / ridge */}
      <path d="M40 150 L120 66 L168 110 L232 40 L300 118 L352 82 L480 150" strokeWidth="4" opacity="0.7" />
      {/* pines */}
      <path d="M96 150 L96 118 M96 118 L82 132 M96 118 L110 132 M96 130 L84 142 M96 130 L108 142" strokeWidth="3" opacity="0.75" />
      <path d="M404 150 L404 112 M404 112 L388 128 M404 112 L420 128 M404 126 L390 140 M404 126 L418 140" strokeWidth="3" opacity="0.75" />
      {/* sun / ovoid */}
      <path d="M260 40 C292 40, 308 58, 308 76 C308 96, 288 110, 260 110 C232 110, 212 96, 212 76 C212 58, 228 40, 260 40 Z" strokeWidth="7" />
      <path d="M260 58 C280 58, 290 66, 290 76 C290 88, 278 94, 260 94 C242 94, 230 88, 230 76 C230 66, 240 58, 260 58 Z" strokeWidth="2.5" opacity="0.6" />
      {/* hull */}
      <path d="M60 214 C 160 250, 360 250, 462 214 C 400 236, 120 236, 60 214 Z" strokeWidth="8" />
      {/* iako (booms) + ama (float) */}
      <path d="M170 226 C 150 250, 130 258, 108 262 M300 226 C 282 250, 262 258, 240 262" strokeWidth="4.5" />
      <path d="M86 266 C 150 280, 210 280, 262 266 C 210 274, 150 274, 86 266 Z" strokeWidth="5" />
      {/* paddlers as U-forms */}
      <path d="M150 214 C150 196, 168 196, 168 214" strokeWidth="6" />
      <path d="M212 212 C212 192, 232 192, 232 212" strokeWidth="6" />
      <path d="M276 212 C276 192, 296 192, 296 212" strokeWidth="6" />
      <path d="M338 214 C338 196, 356 196, 356 214" strokeWidth="6" />
      {/* paddles as S-forms */}
      <path d="M158 200 L132 232 M222 198 L196 230 M286 198 L312 230 M348 200 L374 232" strokeWidth="3.5" opacity="0.85" />
      {/* wake lines */}
      <path d="M40 292 C 140 306, 380 306, 480 292" strokeWidth="3" opacity="0.6" />
      <path d="M90 306 C 180 316, 340 316, 430 306" strokeWidth="1.5" opacity="0.35" />
    </g>
  </svg>
);

/** Small corner ovoid-and-U-form flourish. */
export const FormlineCorner = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" aria-hidden="true" className={className}>
    <g fill="none" stroke="currentColor" strokeLinecap="round">
      <path d="M8 112 C 8 52, 52 8, 112 8" strokeWidth="5" />
      <path d="M8 112 C 8 68, 68 8, 112 8" strokeWidth="1.5" opacity="0.5" />
      <path d="M34 96 C34 76, 54 76, 54 96" strokeWidth="3" />
      <ellipse cx="84" cy="40" rx="16" ry="10" strokeWidth="3" />
    </g>
  </svg>
);
