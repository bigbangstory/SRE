/*
  SVG filter that powers the realistic, animated "liquid glass" refraction.
  Referenced from .glass / .glass-dark / .glass-bar in globals.css.
  (Chromium/Firefox bend the backdrop; Safari falls back to a clean blur.)

  Tuning:
  - baseFrequency = ripple SCALE  (lower = larger waves, higher = finer ripples)
  - scale         = ripple INTENSITY in px (higher = more distortion)
  - the <animate> dur = how fast the glass "flows"
*/
export default function LiquidGlassFilter() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0 }}
    >
      <defs>
        <filter
          id="liquid-glass"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.010 0.013"
            numOctaves={2}
            seed={7}
            result="noise"
          >
            {/* Slowly morph the noise so the refraction is alive, not frozen. */}
            <animate
              attributeName="baseFrequency"
              dur="18s"
              values="0.010 0.013;0.014 0.010;0.011 0.015;0.010 0.013"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feGaussianBlur in="noise" stdDeviation="1" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale={18}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
