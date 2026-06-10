/*
  SVG displacement filter used for genuine refraction on the hero CTA.
  It is applied as an ELEMENT filter (`filter: url(#glass-refract)` on
  .glass-refract-layer), NOT inside backdrop-filter - so it works in Safari
  too (WebKit only blocks url() filters in *backdrop-filter*).

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
          id="glass-refract"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.012"
            numOctaves={2}
            seed={7}
            result="noise"
          >
            {/* Slowly morph the noise so the refraction is alive, not frozen. */}
            <animate
              attributeName="baseFrequency"
              dur="18s"
              values="0.009 0.012;0.013 0.009;0.010 0.014;0.009 0.012"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feGaussianBlur in="noise" stdDeviation="1" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale={26}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
