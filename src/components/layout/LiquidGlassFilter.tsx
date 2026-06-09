/*
  SVG filter that powers the realistic "liquid glass" refraction.
  It is referenced from the .glass / .glass-dark backdrop-filter in globals.css
  (Chromium/Firefox bend the backdrop; Safari gracefully falls back to blur).

  Tuning:
  - baseFrequency = ripple SCALE  (lower = larger waves, higher = finer ripples)
  - scale         = ripple INTENSITY in px (higher = more distortion)
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
            baseFrequency="0.012 0.012"
            numOctaves={2}
            seed={7}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.1" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale={20}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
