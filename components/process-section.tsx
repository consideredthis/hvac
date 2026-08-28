import Image from "next/image"

import { PhotoPlaceholder } from "@/components/photo-placeholder"

const STAGES = [
  {
    step: "01",
    title: "Intake & Inspection",
    body: "Each core is logged, inspected and assessed for rebuild viability before work begins.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Compressor%20intake%20and%20inspection.JPG-nqe412TZTiZXYox8NdRWF1vlvLRgxg.jpeg",
  },
  {
    step: "02",
    title: "Teardown & Evaluation",
    body: "The compressor is completely disassembled. Components are inspected, measured and identified for reuse, machining or replacement.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Compressor%20teardown%20and%20evaluation.JPG-OmVsbRK1vnkCDViRUoyDxSmA6IHNXQ.jpeg",
  },
  {
    step: "03",
    title: "Machining & Cleaning",
    body: "The core is thoroughly cleaned. Crankshafts are polished, cylinders honed and components restored or replaced as required.",
  },
  {
    step: "04",
    title: "Rewind & Reassembly",
    body: "Electric motors are rewound when required, then the compressor is reassembled with new wear components, seals and gaskets.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Compressor%20rewind%20and%20reassembly.JPG-bBJfl6b0iPRRC5ZOivhj1IjoqNiFX6.jpeg",
  },
  {
    step: "05",
    title: "Run Test",
    body: "The finished compressor is charged with oil and run under load to verify operating pressures before evacuation, nitrogen charging and dispatch.",
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
            Five stages from failed core to tested unit
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every compressor moves through a disciplined remanufacturing line — documented and measured at each step.
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
