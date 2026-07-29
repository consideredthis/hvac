/* Clean technical illustrations for Precision Hermetic Rebuilders.
   Each diagram is a literal, service-manual style line drawing of what happens
   at its stage. Blueprint grid background, blue (primary) line art, red accents
   for tools/actions, with subtle purposeful motion. */

/* ---------- Shared helpers ---------- */

function BlueprintGrid({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
        <path d="M 22 0 L 0 0 0 22" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
      </pattern>
    </defs>
  )
}

function SceneFrame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <>
      <BlueprintGrid id={id} />
      <rect x="0" y="0" width="400" height="300" fill={`url(#${id})`} className="text-primary" />
      {children}
    </>
  )
}

function Caption({ children }: { children: string }) {
  return (
    <text x="24" y="286" className="fill-muted-foreground font-mono text-[11px] tracking-[0.2em]">
      {children}
    </text>
  )
}

/* Numbered callout badge for exploded / labelled diagrams */
function NumberBadge({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="10" className="fill-brand-red" stroke="none" />
      <text x={x} y={y + 3.6} textAnchor="middle" className="fill-brand-red-foreground font-mono text-[11px] font-bold">
        {n}
      </text>
    </g>
  )
}

/* ---------- HERO: assembled semi-hermetic compressor (side elevation) ---------- */

export function HeroCompressorAnimation() {
  return (
    <svg
      viewBox="0 0 440 380"
      role="img"
      aria-label="Technical side-elevation drawing of a fully assembled semi-hermetic reciprocating compressor"
      className="h-full w-full text-steel-foreground"
    >
      <defs>
        <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-15" />
        </pattern>
        <linearGradient id="hero-sweep-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.16" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="440" height="380" fill="url(#hero-grid)" />

      {/* Mounting base rail + feet */}
      <g className="stroke-primary" strokeWidth="2" fill="none">
        <rect x="78" y="300" width="284" height="14" rx="3" className="fill-primary/10" />
        <rect x="96" y="314" width="42" height="18" rx="2" className="fill-primary/5" />
        <circle cx="117" cy="323" r="4.5" className="fill-primary/15" />
        <rect x="302" y="314" width="42" height="18" rx="2" className="fill-primary/5" />
        <circle cx="323" cy="323" r="4.5" className="fill-primary/15" />
      </g>

      {/* Main casting / motor barrel body */}
      <g className="stroke-primary" strokeWidth="2.25" fill="none">
        <rect x="84" y="176" width="272" height="124" rx="26" className="fill-primary/8" />
        {/* cylindrical shading bands on the motor end */}
        {[300, 318, 336].map((x) => (
          <path key={x} d={`M ${x} 180 A 26 62 0 0 1 ${x} 296`} className="stroke-primary/25" strokeWidth="1" />
        ))}
      </g>

      {/* Left bearing head / crankcase cover with bolt circle */}
      <g className="stroke-primary" strokeWidth="2.25" fill="none">
        <circle cx="120" cy="238" r="44" className="fill-primary/10" />
        <circle cx="120" cy="238" r="9" className="fill-primary/15" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 45 * Math.PI) / 180
          return <circle key={i} cx={120 + Math.cos(a) * 31} cy={238 + Math.sin(a) * 31} r="3.5" className="fill-primary/20" />
        })}
      </g>
      {/* Oil sight glass */}
      <circle cx="210" cy="292" r="6" className="fill-primary/10 stroke-primary" strokeWidth="1.75" />

      {/* Cylinder head (finned block) bolted on top */}
      <g className="stroke-primary" strokeWidth="2.25" fill="none">
        <rect x="200" y="168" width="82" height="10" className="fill-primary/10" />
        <rect x="176" y="118" width="130" height="58" rx="5" className="fill-primary/6" />
        {[128, 138, 148, 158, 168].map((y) => (
          <line key={y} x1="186" y1={y} x2="296" y2={y} className="stroke-primary/30" strokeWidth="1" />
        ))}
        {[
          [186, 124],
          [296, 124],
          [186, 170],
          [296, 170],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" className="fill-primary/20" />
        ))}
      </g>

      {/* Terminal (Fusite) box with three terminals */}
      <g className="stroke-primary" strokeWidth="2" fill="none">
        <rect x="312" y="150" width="46" height="30" rx="3" className="fill-primary/10" />
        {[322, 335, 348].map((x) => (
          <circle key={x} cx={x} cy="165" r="3.5" className="fill-brand-red" stroke="none" />
        ))}
      </g>

      {/* Suction & discharge rotalock service valves */}
      <g className="stroke-primary" strokeWidth="2.25" fill="none">
        <rect x="356" y="200" width="20" height="22" rx="2" className="fill-primary/10" />
        <circle cx="384" cy="211" r="8" className="fill-primary/5" />
        <rect x="356" y="248" width="18" height="18" rx="2" className="fill-primary/10" />
        <circle cx="380" cy="257" r="6" className="fill-primary/5" />
      </g>

      {/* Nameplate */}
      <g fill="none">
        <rect x="150" y="214" width="74" height="46" rx="2" className="fill-background stroke-primary" strokeWidth="1.5" />
        {[224, 232, 240, 248].map((y, i) => (
          <line key={y} x1="158" y1={y} x2={i === 3 ? 202 : 216} y2={y} className="stroke-primary/40" strokeWidth="1.25" />
        ))}
      </g>

      {/* Soft highlight sweep across the finished unit */}
      <g style={{ transform: "skewX(-12deg)", transformOrigin: "center" }} pointerEvents="none">
        <rect x="40" y="70" width="90" height="266" fill="url(#hero-sweep-grad)" className="phr-sweep text-steel-foreground" />
      </g>

      <text x="220" y="360" textAnchor="middle" className="fill-steel-muted font-mono text-[11px] tracking-[0.3em]">
        SEMI-HERMETIC COMPRESSOR
      </text>
    </svg>
  )
}

/* ---------- Stage dispatcher ---------- */

export function StageAnimation({ stage }: { stage: number }) {
  const common = "h-full w-full text-primary [aspect-ratio:4/3]"
  switch (stage) {
    case 1:
      return <IntakeScene className={common} />
    case 2:
      return <TeardownScene className={common} />
    case 3:
      return <MachiningScene className={common} />
    case 4:
      return <RewindScene className={common} />
    default:
      return <RunTestScene className={common} />
  }
}

/* ---------- STAGE 01 — Intake & Inspection: valve plate measured by a dial caliper ---------- */

function IntakeScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="A compressor valve plate being measured with a dial caliper" className={className}>
      <SceneFrame id="s1-grid">
        {/* Valve plate with ports, reed valves, and bolt holes */}
        <g className="stroke-primary" strokeWidth="2" fill="none">
          <rect x="134" y="128" width="146" height="104" rx="6" className="fill-primary/6" />
          {/* discharge port + reed */}
          <circle cx="176" cy="164" r="16" className="fill-primary/12" />
          <rect x="170" y="180" width="12" height="34" rx="4" className="fill-primary/8" />
          {/* suction port (kidney) + reed */}
          <rect x="206" y="150" width="52" height="22" rx="11" className="fill-primary/12" />
          <rect x="212" y="176" width="42" height="10" rx="5" className="fill-primary/8" />
          {/* corner bolt holes */}
          {[148, 266].map((x) =>
            [142, 218].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" className="fill-primary/20" />)
          )}
        </g>

        {/* Dial caliper gripping the plate width — eases into place */}
        <g className="phr-caliper">
          {/* graduated beam */}
          <rect x="118" y="98" width="212" height="9" rx="2" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={i} x1={128 + i * 12} y1="99" x2={128 + i * 12} y2={i % 2 ? "103" : "105"} className="stroke-primary/50" strokeWidth="1" />
          ))}
          {/* fixed jaw (left) gripping left edge */}
          <g className="stroke-brand-red" strokeWidth="2.5" fill="none">
            <rect x="130" y="107" width="8" height="76" className="fill-brand-red/10" />
            <line x1="138" y1="181" x2="148" y2="181" />
          </g>
          {/* sliding head + jaw (right) gripping right edge */}
          <g className="stroke-brand-red" strokeWidth="2.5" fill="none">
            <rect x="276" y="94" width="46" height="18" rx="2" className="fill-brand-red/10" />
            <rect x="276" y="107" width="8" height="76" className="fill-brand-red/10" />
            <line x1="276" y1="181" x2="266" y2="181" />
            {/* dial gauge */}
            <circle cx="342" cy="80" r="20" className="fill-background stroke-brand-red" strokeWidth="2" />
            <line x1="342" y1="80" x2="342" y2="64" className="stroke-brand-red" strokeWidth="2" />
            <circle cx="342" cy="80" r="2.5" className="fill-brand-red" stroke="none" />
            {/* thumb roller */}
            <circle cx="322" cy="118" r="5" className="fill-brand-red/15" />
          </g>
        </g>

        <Caption>INTAKE · INSPECT · LOG</Caption>
      </SceneFrame>
    </svg>
  )
}

/* ---------- STAGE 02 — Teardown & Evaluation: exploded parts diagram ---------- */

function TeardownScene({ className }: { className?: string }) {
  const parts = [
    { n: 1, dx: -14 },
    { n: 2, dx: -9 },
    { n: 3, dx: -3 },
    { n: 4, dx: 4 },
    { n: 5, dx: 10 },
    { n: 6, dx: 16 },
  ]
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Exploded parts diagram of a disassembled compressor" className={className}>
      <SceneFrame id="s2-grid">
        {/* assembly center line */}
        <line x1="40" y1="160" x2="360" y2="160" className="stroke-primary/40" strokeWidth="1.25" strokeDasharray="6 5" />

        {/* number callouts */}
        <g>
          <NumberBadge x={70} y={104} n={1} />
          <NumberBadge x={150} y={104} n={2} />
          <NumberBadge x={208} y={104} n={3} />
          <NumberBadge x={262} y={104} n={4} />
          <NumberBadge x={306} y={104} n={5} />
          <NumberBadge x={342} y={104} n={6} />
        </g>

        <g className="stroke-primary" strokeWidth="2" fill="none">
          {/* 1 — crankcase */}
          <g className="phr-explode" style={{ "--dx": `${parts[0].dx}px`, "--dy": "0px" } as React.CSSProperties}>
            <rect x="46" y="132" width="52" height="56" rx="6" className="fill-primary/8" />
            <ellipse cx="98" cy="160" rx="7" ry="22" className="fill-background" />
          </g>
          {/* 2 — crankshaft */}
          <g className="phr-explode" style={{ "--dx": `${parts[1].dx}px`, "--dy": "0px" } as React.CSSProperties}>
            <line x1="120" y1="160" x2="186" y2="160" strokeWidth="7" className="stroke-primary/30" />
            <rect x="144" y="146" width="18" height="28" rx="2" className="fill-primary/12" />
            <circle cx="120" cy="160" r="7" className="fill-primary/8" />
            <circle cx="186" cy="160" r="7" className="fill-primary/8" />
          </g>
          {/* 3 — connecting rod */}
          <g className="phr-explode" style={{ "--dx": `${parts[2].dx}px`, "--dy": "0px" } as React.CSSProperties}>
            <circle cx="198" cy="160" r="7" className="fill-primary/6" />
            <circle cx="224" cy="160" r="11" className="fill-primary/6" />
            <path d="M 205 160 L 214 160" strokeWidth="6" className="stroke-primary/30" />
          </g>
          {/* 4 — piston */}
          <g className="phr-explode" style={{ "--dx": `${parts[3].dx}px`, "--dy": "0px" } as React.CSSProperties}>
            <rect x="246" y="140" width="34" height="40" rx="6" className="fill-primary/10" />
            <line x1="250" y1="150" x2="276" y2="150" className="stroke-primary/40" strokeWidth="1" />
            <line x1="250" y1="156" x2="276" y2="156" className="stroke-primary/40" strokeWidth="1" />
            <circle cx="263" cy="168" r="5" className="fill-background" />
          </g>
          {/* 5 — valve plate + gasket */}
          <g className="phr-explode" style={{ "--dx": `${parts[4].dx}px`, "--dy": "0px" } as React.CSSProperties}>
            <rect x="292" y="134" width="6" height="52" className="fill-none stroke-primary/50" strokeDasharray="4 3" />
            <rect x="300" y="138" width="18" height="44" rx="3" className="fill-primary/10" />
            <circle cx="309" cy="152" r="4" className="fill-primary/20" />
            <circle cx="309" cy="168" r="4" className="fill-primary/20" />
          </g>
          {/* 6 — cylinder head */}
          <g className="phr-explode" style={{ "--dx": `${parts[5].dx}px`, "--dy": "0px" } as React.CSSProperties}>
            <rect x="326" y="128" width="32" height="64" rx="4" className="fill-primary/6" />
            {[138, 148, 158, 168, 182].map((y) => (
              <line key={y} x1="330" y1={y} x2="354" y2={y} className="stroke-primary/30" strokeWidth="1" />
            ))}
          </g>
        </g>

        <Caption>TEARDOWN · MEASURE · SORT</Caption>
      </SceneFrame>
    </svg>
  )
}

/* ---------- STAGE 03 — Machining & Cleaning: drill + brass brush cleaning the bore ---------- */

function MachiningScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="A power drill fitted with a brass wheel brush cleaning a compressor bore" className={className}>
      <SceneFrame id="s3-grid">
        {/* Compressor core with an open bore */}
        <g className="stroke-primary" strokeWidth="2" fill="none">
          <rect x="40" y="150" width="150" height="96" rx="12" className="fill-primary/6" />
          <ellipse cx="190" cy="198" rx="14" ry="46" className="fill-background" />
          <ellipse cx="190" cy="198" rx="6" ry="24" className="fill-primary/8" />
          {[70, 100, 130].map((x) => (
            <line key={x} x1={x} y1="150" x2={x} y2="246" className="stroke-primary/20" strokeWidth="1" />
          ))}
        </g>

        {/* Power drill (pointing left) */}
        <g className="stroke-primary" strokeWidth="2" fill="none">
          {/* motor body */}
          <rect x="296" y="150" width="84" height="46" rx="14" className="fill-primary/10" />
          {/* chuck */}
          <path d="M 296 158 L 272 164 L 272 190 L 296 196 Z" className="fill-primary/16" />
          <line x1="278" y1="170" x2="278" y2="184" className="stroke-primary/50" strokeWidth="1.25" />
          {/* grip */}
          <path d="M 306 196 L 300 250 L 332 250 L 342 196 Z" className="fill-primary/6" />
          {/* battery */}
          <rect x="298" y="250" width="44" height="16" rx="3" className="fill-primary/10" />
          {/* trigger */}
          <path d="M 306 204 l -10 5 l 10 5 z" className="fill-brand-red" stroke="none" />
        </g>

        {/* Brass wheel brush — rotates slowly */}
        <line x1="272" y1="198" x2="234" y2="198" className="stroke-primary" strokeWidth="4" />
        <g className="phr-rotate" style={{ transformOrigin: "220px 198px" }}>
          <circle cx="220" cy="198" r="10" className="fill-brand-red/15 stroke-brand-red" strokeWidth="2" />
          {Array.from({ length: 20 }).map((_, i) => {
            const a = (i * 18 * Math.PI) / 180
            return (
              <line
                key={i}
                x1={220 + Math.cos(a) * 10}
                y1={198 + Math.sin(a) * 10}
                x2={220 + Math.cos(a) * 26}
                y2={198 + Math.sin(a) * 26}
                className="stroke-brand-red/70"
                strokeWidth="1.5"
              />
            )
          })}
        </g>

        {/* rotation indicator arrow */}
        <g className="stroke-brand-red" strokeWidth="1.5" fill="none">
          <path d="M 236 168 A 22 22 0 0 1 246 188" />
          <path d="M 244 184 l 3 6 l -7 -1 z" className="fill-brand-red" stroke="none" />
        </g>

        {/* debris flecks */}
        {[
          [198, 184],
          [202, 210],
          [188, 200],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" className="fill-brand-red/60" />
        ))}

        <Caption>MACHINE · BRUSH · CLEAN</Caption>
      </SceneFrame>
    </svg>
  )
}

/* ---------- STAGE 04 — Rewind: stator being rewound from a wire spool ---------- */

function RewindScene({ className }: { className?: string }) {
  const cx = 150
  const cy = 152
  const slotAngles = Array.from({ length: 12 }, (_, i) => i * 30 + 15)
  const woundAngles = [105, 135, 165, 195, 225, 255]
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="A motor stator being rewound with copper wire fed from a spool" className={className}>
      <SceneFrame id="s4-grid">
        {/* Stator lamination stack */}
        <g className="stroke-primary" strokeWidth="2" fill="none">
          <circle cx={cx} cy={cy} r="92" className="fill-primary/6" />
          <circle cx={cx} cy={cy} r="82" className="stroke-primary/40" strokeWidth="1.25" />
          <circle cx={cx} cy={cy} r="44" className="fill-background" />
          {/* slot dividers (teeth) */}
          {slotAngles.map((deg) => {
            const a = (deg * Math.PI) / 180
            return (
              <line
                key={deg}
                x1={cx + Math.cos(a) * 44}
                y1={cy + Math.sin(a) * 44}
                x2={cx + Math.cos(a) * 82}
                y2={cy + Math.sin(a) * 82}
                className="stroke-primary/30"
                strokeWidth="1.25"
              />
            )
          })}
        </g>

        {/* Copper windings already seated in the lower slots */}
        {woundAngles.map((deg) => {
          const a = (deg * Math.PI) / 180
          const px = cx + Math.cos(a) * 60
          const py = cy + Math.sin(a) * 60
          return (
            <rect
              key={deg}
              x={px - 14}
              y={py - 6}
              width="28"
              height="12"
              rx="3"
              transform={`rotate(${deg} ${px} ${py})`}
              className="fill-brand-red/60 stroke-brand-red"
              strokeWidth="1"
            />
          )
        })}

        {/* Wire spool feeding new wire into an open slot */}
        <g className="stroke-primary" strokeWidth="2" fill="none">
          <rect x="312" y="52" width="30" height="30" rx="2" className="fill-primary/10" />
          <line x1="312" y1="52" x2="312" y2="82" strokeWidth="3" className="stroke-primary/50" />
          <line x1="342" y1="52" x2="342" y2="82" strokeWidth="3" className="stroke-primary/50" />
          {[60, 67, 74].map((y) => (
            <line key={y} x1="314" y1={y} x2="340" y2={y} className="stroke-brand-red/50" strokeWidth="1.25" />
          ))}
        </g>
        {/* wire tracing into the slot */}
        <path
          d="M 316 82 C 288 108 250 118 214 132"
          pathLength={100}
          className="stroke-brand-red phr-wind"
          strokeWidth="2.5"
          fill="none"
        />

        {/* labels */}
        <line x1="96" y1="212" x2="120" y2="196" className="stroke-primary/40" strokeWidth="1" />
        <text x="52" y="220" className="fill-muted-foreground font-mono text-[9px] tracking-widest">COPPER</text>
        <line x1="214" y1="118" x2="196" y2="126" className="stroke-primary/40" strokeWidth="1" />
        <text x="214" y="112" className="fill-muted-foreground font-mono text-[9px] tracking-widest">OPEN SLOT</text>

        <Caption>REWIND · INSULATE · TEST</Caption>
      </SceneFrame>
    </svg>
  )
}

/* ---------- STAGE 05 — Run Test & Certification: manifold gauge set on a finished unit ---------- */

function RunTestScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="A refrigeration manifold gauge set connected by hoses to a certified compressor" className={className}>
      <SceneFrame id="s5-grid">
        {/* Finished compressor */}
        <g className="stroke-primary" strokeWidth="2" fill="none">
          <rect x="44" y="158" width="150" height="92" rx="12" className="fill-primary/6" />
          <circle cx="74" cy="204" r="28" className="fill-primary/10" />
          <circle cx="74" cy="204" r="6" className="fill-primary/15" />
          {/* cylinder head */}
          <rect x="98" y="130" width="82" height="30" rx="4" className="fill-primary/10" />
          {[138, 146, 154].map((y) => (
            <line key={y} x1="106" y1={y} x2="172" y2={y} className="stroke-primary/30" strokeWidth="1" />
          ))}
          {/* new nameplate */}
          <rect x="104" y="180" width="74" height="46" rx="2" className="fill-background stroke-brand-red" strokeWidth="1.5" />
          {[192, 200, 208].map((y, i) => (
            <line key={y} x1="112" y1={y} x2={i === 2 ? 156 : 170} y2={y} className="stroke-primary/40" strokeWidth="1.25" />
          ))}
        </g>

        {/* Service port taps */}
        <circle cx="150" cy="158" r="5" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
        <circle cx="194" cy="190" r="5" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />

        {/* Charging hoses to the manifold */}
        <path d="M 258 106 C 240 150 200 150 150 158" className="stroke-primary" strokeWidth="2.5" fill="none" />
        <path d="M 358 106 C 340 170 260 176 194 190" className="stroke-brand-red" strokeWidth="2.5" fill="none" />

        {/* Manifold body + hand valves */}
        <g className="stroke-primary" strokeWidth="2" fill="none">
          <rect x="250" y="80" width="116" height="26" rx="5" className="fill-primary/10" />
          <circle cx="258" cy="106" r="6" className="fill-primary/15" />
          <circle cx="358" cy="106" r="6" className="fill-brand-red/15 stroke-brand-red" />
        </g>

        {/* Two manifold gauges (low = blue, high = red), needles drift */}
        {[
          { cx: 276, cy: 54, ang: -40, ring: "stroke-primary", face: "fill-primary" },
          { cx: 340, cy: 54, ang: 35, ring: "stroke-brand-red", face: "fill-brand-red" },
        ].map((g, idx) => (
          <g key={idx}>
            <circle cx={g.cx} cy={g.cy} r="24" className={`fill-background ${g.ring}`} strokeWidth="2" />
            <circle cx={g.cx} cy={g.cy} r="19" className="fill-none stroke-primary/20" strokeWidth="1" />
            {Array.from({ length: 9 }).map((_, i) => {
              const a = (-130 + i * 32.5) * (Math.PI / 180)
              return (
                <line
                  key={i}
                  x1={g.cx + Math.cos(a) * 15}
                  y1={g.cy + Math.sin(a) * 15}
                  x2={g.cx + Math.cos(a) * 19}
                  y2={g.cy + Math.sin(a) * 19}
                  className="stroke-primary/50"
                  strokeWidth="1.25"
                />
              )
            })}
            <line
              x1={g.cx}
              y1={g.cy}
              x2={g.cx + Math.cos((g.ang * Math.PI) / 180) * 15}
              y2={g.cy + Math.sin((g.ang * Math.PI) / 180) * 15}
              className={`${g.face.replace("fill", "stroke")} phr-needle`}
              strokeWidth="2"
              style={{ transformOrigin: `${g.cx}px ${g.cy}px`, animationDelay: `${idx * 0.9}s` }}
            />
            <circle cx={g.cx} cy={g.cy} r="3" className={g.face} stroke="none" />
          </g>
        ))}

        {/* Certification stamp presses onto the unit */}
        <g className="phr-stamp" style={{ transformOrigin: "170px 214px" }}>
          <circle cx="170" cy="214" r="17" className="fill-primary/10 stroke-primary" strokeWidth="2" />
          <path d="M 162 214 l 5 6 l 11 -13" className="stroke-brand-red" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        <Caption>RUN TEST · VERIFY · CERTIFY</Caption>
      </SceneFrame>
    </svg>
  )
}
