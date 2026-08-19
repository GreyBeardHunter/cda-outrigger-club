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

/** Formline salmon — life, perseverance, regeneration.
 *  Built the traditional way: a continuous primary formline that swells and
 *  diminishes, negative-space relief carved out of the black mass, ovoid eye,
 *  split-U scale rows, split-U fins, and secondary cedar-red inner forms. */
export const FormlineSalmon = ({ className = "" }: { className?: string }) => {
  const card = "hsl(var(--card))";
  const red = "hsl(var(--accent))";
  return (
    <svg viewBox="0 0 740 420" aria-hidden="true" className={className}>
      <g fill="currentColor">
        {/* ---------- primary formline: arched body ---------- */}
        <path d="M26 288 C 44 196, 148 128, 276 124 C 388 121, 466 158, 514 218 C 526 234, 532 252, 530 272 C 462 284, 396 310, 322 326 C 220 348, 100 338, 40 314 C 18 305, 18 300, 26 288 Z" />

        {/* tail: two swelling lobes off the peduncle */}
        <path d="M506 212 C 552 178, 610 156, 678 148 C 646 184, 626 212, 620 240 C 656 250, 690 272, 718 306 C 654 302, 596 288, 552 266 C 524 252, 508 232, 502 216 Z" />
        <path d="M600 178 C 632 164, 656 158, 668 156 C 642 184, 626 206, 618 228 C 610 210, 604 192, 600 178 Z" fill={card} />
        <path d="M612 258 C 644 272, 668 288, 686 304 C 650 296, 616 284, 592 270 C 598 264, 604 260, 612 258 Z" fill={card} />
        <path d="M556 200 C 574 190, 590 183, 600 180 C 588 202, 582 222, 582 240 C 570 228, 561 214, 556 200 Z" fill={card} />
        <path d="M566 252 C 586 262, 602 272, 614 282 C 592 280, 570 272, 554 262 C 558 258, 562 254, 566 252 Z" fill={card} />

        {/* dorsal fin — split-U */}
        <path d="M296 126 C 316 88, 348 58, 390 36 C 374 74, 366 108, 368 138 C 342 129, 318 125, 296 126 Z" />
        <path d="M320 116 C 338 88, 358 68, 378 54 C 368 82, 362 106, 361 126 C 346 121, 332 118, 320 116 Z" fill={card} />
        <path d="M334 112 C 348 92, 361 78, 373 68 C 366 90, 361 106, 359 122 C 350 118, 342 114, 334 112 Z" />

        {/* pectoral fin — split-U under the belly */}
        <path d="M298 322 C 336 326, 368 344, 392 372 C 352 368, 318 358, 292 344 Z" />
        <path d="M312 332 C 340 338, 362 350, 378 364 C 350 358, 326 350, 306 340 Z" fill={card} />

        {/* ---------- negative-space relief ---------- */}
        {/* belly sweep — tapered crescent */}
        <path d="M76 300 C 130 322, 216 330, 302 318 C 226 334, 132 332, 66 314 C 68 308, 72 303, 76 300 Z" fill={card} />
        {/* jaw / mouth — swelling to diminishing */}
        <path d="M44 296 C 96 300, 168 302, 226 296 C 168 316, 92 318, 44 308 Z" fill={card} />
        {/* forehead relief */}
        <path d="M96 214 C 130 184, 176 166, 224 160 C 180 182, 142 206, 116 234 C 104 228, 98 221, 96 214 Z" fill={card} />

        {/* eye — socket ovoid, eyelid line, pupil */}
        <path d="M120 208 C 168 208, 194 224, 194 248 C 194 274, 164 290, 118 290 C 78 290, 56 272, 56 248 C 56 224, 82 208, 120 208 Z" fill={card} />
        <path d="M120 220 C 156 220, 176 232, 176 249 C 176 268, 152 278, 118 278 C 88 278, 70 266, 70 249 C 70 232, 92 220, 120 220 Z" />
        <path d="M120 231 C 145 231, 160 239, 160 249 C 160 261, 143 268, 119 268 C 98 268, 84 260, 84 249 C 84 239, 100 231, 120 231 Z" fill={card} />
        <ellipse cx="120" cy="249" rx="15" ry="13" />
        <ellipse cx="120" cy="249" rx="6" ry="5" fill={card} />

        {/* gill plate — tapered formline arc */}
        <path d="M232 156 C 214 206, 214 262, 234 314 C 246 312, 254 310, 262 308 C 244 260, 244 208, 258 160 C 248 157, 240 156, 232 156 Z" fill={card} />

        {/* scale rows — nested split-U forms */}
        <path d="M282 152 C 266 200, 266 254, 284 302 L 306 298 C 290 252, 290 202, 304 156 Z" fill={card} />
        <path d="M290 168 C 280 204, 280 248, 292 286 L 300 284 C 290 246, 290 206, 298 170 Z" />
        <path d="M324 156 C 310 202, 310 252, 326 296 L 348 292 C 334 250, 334 204, 346 160 Z" fill={card} />
        <path d="M332 172 C 324 206, 324 246, 334 282 L 342 280 C 333 244, 333 208, 340 174 Z" />

        {/* ---------- secondary: cedar-red inner forms ---------- */}
        <path d="M382 168 C 442 168, 470 190, 470 226 C 470 264, 438 288, 382 288 C 328 288, 300 264, 300 226 C 300 190, 330 168, 382 168 Z" opacity="0" />
        {/* red joint field */}
        <path d="M376 158 C 438 158, 468 182, 468 224 C 468 266, 436 292, 376 292 C 372 292, 368 292, 364 291 C 372 250, 372 200, 364 159 C 368 158, 372 158, 376 158 Z" fill={red} />
        {/* white ovoid inside the red field */}
        <path d="M404 182 C 442 182, 460 198, 460 224 C 460 252, 438 268, 404 268 C 392 268, 384 266, 380 264 C 386 238, 386 212, 380 186 C 386 183, 394 182, 404 182 Z" fill={card} />
        {/* red inner ovoid + split-U */}
        <path d="M416 196 C 442 196, 452 207, 452 224 C 452 243, 438 254, 416 254 C 404 254, 396 251, 392 248 C 396 232, 396 216, 392 202 C 398 198, 406 196, 416 196 Z" fill={red} />
        <path d="M424 210 C 438 210, 444 216, 444 225 C 444 235, 436 240, 424 240 C 416 240, 411 238, 408 236 C 411 229, 411 220, 408 213 Z" fill={card} />

        {/* small red split-U at the peduncle */}
        <path d="M490 200 C 508 208, 518 224, 518 244 C 510 246, 504 248, 498 250 C 496 232, 490 216, 480 204 Z" fill={red} />

        {/* hairline relief — the diminishing end of every line */}
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.85">
          <path d="M60 306 C 120 316, 200 314, 258 302" />
          <path d="M104 226 C 140 200, 182 184, 220 174" />
          <path d="M636 176 C 626 196, 618 216, 614 234" />
          <path d="M622 266 C 644 280, 662 292, 676 302" />
          <path d="M344 74 C 354 92, 358 110, 358 126" />
        </g>
      </g>
    </svg>
  );
};

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
