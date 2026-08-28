import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const STATS = [
  { value: "Est. 1991", label: "Family-run in Calgary" },
  { value: "4K+", label: "Compressors remanufactured" },
  { value: "12 mo", label: "Standard warranty" },
  { value: "100%", label: "Run-tested" },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-steel text-steel-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Compressor Remanufacturing · Calgary, AB
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Semi-Hermetic Compressors, Rebuilt to Outlast the Original
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-steel-muted">
            Precision Hermetic Rebuilders Inc. remanufactures commercial and industrial reciprocating
            compressors from the core up. From Carlyle 05G and 06E units to Copeland Discus, York,
            Bitzer and other heavy-duty compressors, we handle the complete process: the teardown,
            machining, motor rewinding, reassembly and run-testing. Every finished compressor is
            tested, tagged and ready to return to service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button render={<a href="#contact" />} nativeButton={false} size="lg">
              Request a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              render={<a href="#process" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="border-steel-muted/40 bg-transparent text-steel-foreground hover:bg-steel-foreground/10 hover:text-steel-foreground"
            >
              See the Rebuild Process
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-0 rounded-sm bg-primary/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-sm bg-steel/40 p-2 shadow-2xl">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern_favicon_precision_hermetic_rebuilders-hvpFdfdNAt6joruNSsjvpfhn1xrkN9.png"
                alt="Precision Hermetic Rebuilders compressor illustration"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                quality={72}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-steel-muted/20">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-steel-muted/20 px-4 md:grid-cols-4 md:px-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-4 py-6 first:pl-0">
              <dt className="font-heading text-3xl font-bold text-primary md:text-4xl">{stat.value}</dt>
              <dd className="mt-1 text-sm text-steel-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
