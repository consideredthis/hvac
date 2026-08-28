import { Check } from "lucide-react"

const BRANDS = [
  "Copeland",
  "Bitzer",
  "Carrier / Carlyle",
  "Trane",
  "Vilter",
  "Thermo King",
  "York",
  "Dorin",
]

const SPECS = [
  { label: "Compressor types", value: "Semi-hermetic & open-drive reciprocating compressors" },
  { label: "Applications", value: "Commercial refrigeration · Building HVAC · Transit & transportation · Institutional & industrial cooling" },
  { label: "Horsepower range", value: "1 HP – 60 HP" },
  { label: "Voltage", value: "115V – 575V, single & 3-phase" },
  { label: "Typical turnaround", value: "15–25 business days (current backlog)" },
  { label: "Rush service", value: "Available case-by-case" },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Capabilities
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Specs & supported equipment
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We service the full range of commercial and industrial semi-hermetic compressors across
            all major manufacturers.
          </p>

          <dl className="mt-8 divide-y divide-border rounded-sm border border-border">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {spec.label}
                </dt>
                <dd className="font-medium text-foreground sm:text-right">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pt-16">
          <div className="rounded-sm border border-border bg-card p-6 md:p-8">
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-card-foreground">
              Brands we rebuild
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {BRANDS.map((brand) => (
                <li key={brand} className="flex items-center gap-2.5">
                  <span className="flex size-5 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-foreground">{brand}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                Common compressors we rebuild
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Copeland Discus · Carlyle 05G · Carlyle 06D · Carlyle 06E · Bitzer · York · Trane · Vilter · Dorin
              </p>
            </div>
            <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              {
                "Don’t see your compressor listed? We rebuild a wide range of commercial and industrial reciprocating compressors. Send us the model number or nameplate information and we’ll take a look."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
