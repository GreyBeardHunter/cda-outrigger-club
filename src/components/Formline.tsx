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

/** A single paddler rendered as a filled formline U-form with an ovoid head
 *  and a tapered S-form paddle. */
const Paddler = ({ x, flip = false }: { x: number; flip?: boolean }) => (
  <g transform={`translate(${x} 0)`}>
    {/* head — solid ovoid with negative inner ovoid and red eye field */}
    <path d="M0 128 C 21 128, 30 139, 30 150 C 30 163, 18 172, 0 172 C -18 172, -30 163, -30 150 C -30 139, -21 128, 0 128 Z" />
    <path d="M0 138 C 14 138, 20 144, 20 151 C 20 159, 12 164, 0 164 C -12 164, -20 159, -20 151 C -20 144, -14 138, 0 138 Z" fill="hsl(var(--card))" />
    <ellipse cx="0" cy="151" rx="9" ry="7" fill="hsl(var(--accent))" />
    {/* torso — U-form, thick outside, tapering inward */}
    <path d="M-30 176 C -30 224, 30 224, 30 176 C 30 212, 18 220, 0 220 C -18 220, -30 212, -30 176 Z" />
    {/* paddle — tapered S-form */}
    <path
      d={
        flip
          ? "M28 168 C 46 186, 58 208, 62 232 C 54 234, 48 236, 44 240 C 42 214, 34 190, 20 174 Z"
          : "M-28 168 C -46 186, -58 208, -62 232 C -54 234, -48 236, -44 240 C -42 214, -34 190, -20 174 Z"
      }
    />
  </g>
);

/** Large hero mark: an abstract OC6 crew rendered in solid formline shapes —
 *  filled hull, U-form paddlers, ovoid heads with cedar-red fields. */
export const FormlineCanoeMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 560 340" aria-hidden="true" className={className}>
    <g fill="currentColor">
      {/* sun — primary ovoid with red inner field */}
      <path d="M280 18 C 326 18, 350 38, 350 66 C 350 96, 320 116, 280 116 C 240 116, 210 96, 210 66 C 210 38, 234 18, 280 18 Z" />
      <path d="M280 34 C 314 34, 332 47, 332 66 C 332 87, 310 100, 280 100 C 250 100, 228 87, 228 66 C 228 47, 246 34, 280 34 Z" fill="hsl(var(--card))" />
      <path d="M280 46 C 304 46, 318 55, 318 67 C 318 81, 302 89, 280 89 C 258 89, 242 81, 242 67 C 242 55, 256 46, 280 46 Z" fill="hsl(var(--accent))" />
      <path d="M280 56 C 294 56, 302 61, 302 68 C 302 76, 292 80, 280 80 C 268 80, 258 76, 258 68 C 258 61, 266 56, 280 56 Z" fill="hsl(var(--card))" />

      {/* crew */}
      <Paddler x={145} />
      <Paddler x={240} />
      <Paddler x={335} />
      <Paddler x={430} />

      {/* hull — tapered crescent, heavy at center, knife points at the ends */}
      <path d="M28 218 C 130 268, 430 268, 532 214 C 520 244, 470 268, 400 282 C 320 298, 220 296, 150 278 C 84 262, 40 240, 28 218 Z" />
      {/* hull inner relief line */}
      <path d="M96 246 C 200 282, 372 282, 466 248 C 380 272, 190 274, 96 246 Z" fill="hsl(var(--card))" />

      {/* iako (booms) */}
      <path d="M186 258 C 168 284, 146 296, 118 302 L 112 288 C 138 282, 156 272, 172 250 Z" />
      <path d="M316 268 C 300 292, 278 302, 250 306 L 246 292 C 270 288, 288 278, 302 260 Z" />
      {/* ama (float) — tapered formline sliver */}
      <path d="M84 296 C 150 316, 236 316, 292 296 C 234 308, 148 308, 84 296 Z" />
    </g>
  </svg>
);

/** Abstract formline salmon — the lake's kupuna. Solid ink body with negative
 *  space relief and cedar-red inner ovoids. */
export const FormlineSalmon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 640 320" aria-hidden="true" className={className}>
    <g fill="currentColor">
      {/* body */}
      <path d="M40 190 C 70 118, 170 74, 288 82 C 372 88, 436 116, 470 152 C 500 128, 540 116, 584 116 C 552 140, 536 164, 534 190 C 536 216, 552 240, 584 264 C 540 264, 500 252, 470 228 C 436 264, 372 292, 288 298 C 170 306, 70 262, 40 190 Z" />
      {/* negative belly sweep */}
      <path d="M92 214 C 128 262, 216 284, 300 278 C 232 266, 154 246, 92 214 Z" fill="hsl(var(--card))" />
      {/* head negative field + eye ovoid */}
      <path d="M110 132 C 146 124, 176 122, 200 124 C 168 140, 140 152, 116 168 C 106 156, 104 143, 110 132 Z" fill="hsl(var(--card))" />
      <path d="M128 154 C 152 154, 166 164, 166 178 C 166 194, 148 202, 126 202 C 104 202, 90 192, 90 178 C 90 164, 106 154, 128 154 Z" fill="hsl(var(--card))" />
      <path d="M92 226 C 130 240, 176 248, 216 248 C 172 258, 122 252, 88 238 Z" fill="hsl(var(--card))" />
      <ellipse cx="128" cy="176" rx="16" ry="12" />
      <ellipse cx="128" cy="176" rx="6" ry="5" fill="hsl(var(--card))" />
      {/* gill U-forms */}
      <path d="M212 128 C 212 196, 212 232, 236 264 C 224 220, 226 172, 240 130 Z" fill="hsl(var(--card))" />
      <path d="M256 126 C 254 172, 254 220, 268 266 C 268 218, 270 170, 282 128 Z" fill="hsl(var(--card))" />
      {/* red inner ovoid — the joint mark */}
      <path d="M368 126 C 414 126, 438 146, 438 176 C 438 208, 410 230, 368 230 C 326 230, 300 208, 300 176 C 300 146, 322 126, 368 126 Z" fill="hsl(var(--accent))" />
      <path d="M368 144 C 400 144, 418 158, 418 177 C 418 198, 396 212, 368 212 C 340 212, 320 198, 320 177 C 320 158, 336 144, 368 144 Z" fill="hsl(var(--card))" />
      <path d="M356 158 C 380 158, 392 166, 392 178 C 392 192, 378 199, 356 199 C 340 199, 330 192, 330 178 C 330 166, 340 158, 356 158 Z" fill="hsl(var(--accent))" />
      {/* dorsal fin relief */}
      <path d="M258 92 C 296 62, 330 50, 358 48 C 330 68, 306 84, 292 100 C 280 96, 268 94, 258 92 Z" />
      <path d="M288 80 C 310 66, 328 58, 342 56 C 322 70, 306 82, 296 92 Z" fill="hsl(var(--card))" />
      {/* tail negative splits */}
      <path d="M556 140 C 542 156, 536 172, 534 188 C 542 168, 550 154, 566 138 Z" fill="hsl(var(--card))" />
      <path d="M556 240 C 542 224, 536 208, 534 192 C 542 212, 550 226, 566 242 Z" fill="hsl(var(--card))" />
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
