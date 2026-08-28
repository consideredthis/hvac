import { Wrench, Zap, Gauge, Snowflake, Cog, ClipboardCheck } from "lucide-react"

const SERVICES = [
  {
    icon: Wrench,
    title: "Full Remanufacturing",
    body: "Complete core-up compressor rebuilding, including teardown, inspection, machining, component replacement, reassembly and testing.",
  },
  {
    icon: Zap,
    title: "Motor Rewinding",
    body: "In-house stator rewinding with new magnet wire, insulation varnish and full electrical testing.",
  },
  {
    icon: Cog,
    title: "Precision Machining",
    body: "Crankshaft polishing, cylinder honing and component restoration using calibrated shop equipment.",
  },
  {
    icon: Snowflake,
    title: "Commercial & Industrial Applications",
    body: "Compressors for refrigeration, HVAC, transit, institutional and industrial cooling applications.",
  },
  {
    icon: Gauge,
    title: "Run Testing",
    body: "Every completed compressor is oil-charged and run under load to verify operating pressures.",
  },
  {
    icon: ClipboardCheck,
    title: "Failure Analysis",
    body: "Teardown inspection helps identify likely failure causes and prevent repeat system problems.",
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
            From a single failed unit to fleet-wide remanufacturing programs, we handle every step in
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
