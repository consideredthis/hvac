import { Award, Recycle, Clock, DollarSign } from "lucide-react"

const REASONS = [
  {
    icon: Award,
    title: "Rebuilt to OEM spec",
    body: "Every tolerance is verified against manufacturer specifications — not just 'good enough' to run.",
  },
  {
    icon: DollarSign,
    title: "40–60% less than new",
    body: "Remanufacturing delivers new-unit reliability at a fraction of the replacement cost.",
  },
  {
    icon: Clock,
    title: "Honest turnaround",
    body: "Most units take under a week of actual bench time. We give realistic timelines up front, and rush service is available case-by-case when you're in a bind.",
  },
  {
    icon: Recycle,
    title: "Sustainable by design",
    body: "Reusing a proven casting keeps hundreds of pounds of metal out of the landfill per unit.",
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
