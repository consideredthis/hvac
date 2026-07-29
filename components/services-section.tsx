import { Wrench, Zap, Gauge, Snowflake, Cog, ClipboardCheck } from "lucide-react"

const SERVICES = [
  {
    icon: Wrench,
    title: "Full Remanufacturing",
    body: "Complete core-up rebuilds of semi-hermetic reciprocating compressors — both electric and open-drive — to original OEM tolerances.",
  },
  {
    icon: Zap,
    title: "Motor Rewinding",
    body: "In-house stator rewinding with new magnet wire, dip-and-bake insulation, and full electrical testing on electric-drive units.",
  },
  {
    icon: Cog,
    title: "Precision Machining",
    body: "Crankshaft grinding, cylinder boring, and bearing surface resurfacing on calibrated shop equipment.",
  },
  {
    icon: Snowflake,
    title: "Reefer & Walk-In Cooling",
    body: "Specialists in compressors for transport reefer units and commercial walk-in coolers and freezers across the fleet.",
  },
  {
    icon: Gauge,
    title: "Run Testing",
    body: "Every compressor is charged, run under load, and verified for pressure, amperage, and oil integrity.",
  },
  {
    icon: ClipboardCheck,
    title: "Failure Analysis",
    body: "Root-cause teardown reports so you can correct system issues and prevent repeat failures.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            What we do
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            End-to-end compressor services
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From a single failed unit to full-fleet remanufacturing programs, we handle every step in
            one facility — no outsourcing, no guesswork.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-card p-6 md:p-8">
              <span className="flex size-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
