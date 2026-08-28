import { Award, Recycle, Clock, DollarSign } from "lucide-react"

const REASONS = [
  {
    icon: Award,
    title: "Calgary shop since 1991",
    body: "Family-run and focused on commercial and industrial compressor rebuilding from our Calgary facility.",
  },
  {
    icon: DollarSign,
    title: "In-house workmanship",
    body: "Teardown, machining and motor rewinding stay under one roof for consistent hands-on control.",
  },
  {
    icon: Clock,
    title: "Experienced with difficult equipment",
    body: "We work with obsolete, uncommon and difficult-to-source compressor equipment across demanding applications.",
  },
  {
    icon: Recycle,
    title: "12-month warranty",
    body: "Every finished compressor is tested, tagged and backed by our standard 12-month warranty.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="border-b border-border bg-steel py-16 text-steel-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Why Precision Hermetic
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Reliability you can specify with confidence
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-steel-muted">
            Contractors, wholesalers, and facility managers trust us because we treat every rebuild
            like our name is stamped on it — because it is.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="border-t border-steel-muted/25 pt-6">
              <span className="flex size-11 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <reason.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide">
                {reason.title}
              </h3>
              <p className="mt-2 leading-relaxed text-steel-muted">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
