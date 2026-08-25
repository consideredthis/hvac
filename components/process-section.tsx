import Image from "next/image"

import { PhotoPlaceholder } from "@/components/photo-placeholder"

const STAGES = [
  {
    step: "01",
    title: "Intake & Inspection",
    body: "Each incoming core is logged and inspected. We document the failure mode and confirm the unit is a viable rebuild candidate before any work begins — so you never pay to rebuild a compressor that should be replaced.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Compressor%20intake%20and%20inspection.JPG-nqe412TZTiZXYox8NdRWF1vlvLRgxg.jpeg",
  },
  {
    step: "02",
    title: "Teardown & Evaluation",
    body: "The compressor is fully disassembled down to individual components. Every part is measured against OEM tolerances and sorted for cleaning, machining, or replacement.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Compressor%20teardown%20and%20evaluation.JPG-OmVsbRK1vnkCDViRUoyDxSmA6IHNXQ.jpeg",
  },
  {
    step: "03",
    title: "Machining & Cleaning",
    body: "The entire compressor core is cleaned of rust, debris, and oil. Crankshafts are polished and cylinders are honed. Every component is chemically cleaned, inspected to engineering standards, and replaced if needed.",
  },
  {
    step: "04",
    title: "Rewind & Reassembly",
    body: "Electric motors are rewound with new magnetic wire, then finished with an industry-standard insulation epoxy varnish. New valves, gaskets, bearings, and seals are installed as the compressor is precisely reassembled.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Compressor%20rewind%20and%20reassembly.JPG-bBJfl6b0iPRRC5ZOivhj1IjoqNiFX6.jpeg",
  },
  {
    step: "05",
    title: "Run Test & Certification",
    body: "The finished unit is charged with oil, tested under load, and verified for pressures. Before dispatch it is evacuated and charged with dry nitrogen. It ships painted, tagged, and backed by our warranty.",
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
            <article
              key={stage.step}
              className={
                i % 2 === 1
                  ? "overflow-hidden rounded-sm border border-border bg-card shadow-sm md:ml-auto md:max-w-5xl"
                  : "overflow-hidden rounded-sm border border-border bg-card shadow-sm md:max-w-5xl"
              }
            >
              <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                <div className={i % 2 === 1 ? "relative aspect-[4/3] md:aspect-auto md:min-h-full md:order-2" : "relative aspect-[4/3] md:aspect-auto md:min-h-full"}>
                  {stage.image ? (
                    <Image
                      src={stage.image}
                      alt={`${stage.title} at the compressor remanufacturing facility`}
                      fill
                      sizes="(max-width: 767px) 100vw, 52vw"
                      quality={72}
                      className="object-cover object-center"
                    />
                  ) : (
                    <PhotoPlaceholder label={`${stage.title} photo`} />
                  )}
                </div>
                <div
                  className={
                    i % 2 === 1
                      ? "flex flex-col justify-center p-6 md:order-1 md:p-10"
                      : "flex flex-col justify-center p-6 md:p-10"
                  }
                >
                  <div className="flex items-center gap-4 border-b border-border pb-4">
                    <span className="font-heading text-5xl font-bold leading-none text-primary">
                      {stage.step}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Stage {stage.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-balance font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                    {stage.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
