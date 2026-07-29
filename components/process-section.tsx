import { StageAnimation } from "@/components/compressor-animation"

const STAGES = [
  {
    step: "01",
    title: "Intake & Inspection",
    body: "Each incoming core is logged and inspected. We document the failure mode and confirm the unit is a viable rebuild candidate before any work begins — so you never pay to rebuild a compressor that should be replaced.",
  },
  {
    step: "02",
    title: "Teardown & Evaluation",
    body: "The compressor is fully disassembled down to individual components. Every part is measured against OEM tolerances and sorted for cleaning, machining, or replacement.",
  },
  {
    step: "03",
    title: "Machining & Cleaning",
    body: "Crankshafts are ground, cylinders are bored, and bearing surfaces are resurfaced. Every component is chemically cleaned and inspected to a like-new standard.",
  },
  {
    step: "04",
    title: "Rewind & Reassembly",
    body: "Electric motors are rewound with new magnet wire and re-insulated. New valves, gaskets, bearings, and seals are installed as the compressor is precisely reassembled.",
  },
  {
    step: "05",
    title: "Run Test & Certification",
    body: "The finished unit is charged, run under load, and verified for pressure, amp draw, and oil integrity. It ships painted, tagged, and backed by our warranty.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-border bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            The rebuild process
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Five stages from failed core to certified unit
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every semi-hermetic compressor moves through the same disciplined remanufacturing line —
            documented, measured, and run-tested at each step so you know exactly what you&apos;re
            getting back.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-14 md:gap-20">
          {STAGES.map((stage, i) => (
            <div
              key={stage.step}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative overflow-hidden rounded-sm border border-border bg-card shadow-sm">
                  <StageAnimation stage={i + 1} />
                  <span className="absolute left-4 top-4 rounded-sm bg-steel px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-steel-foreground">
                    Stage {stage.step}
                  </span>
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="font-heading text-5xl font-bold text-primary/25">{stage.step}</span>
                <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
                  {stage.title}
                </h3>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {stage.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
