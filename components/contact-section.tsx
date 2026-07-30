"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const DETAILS = [
  { icon: Phone, label: "Phone", value: "403 287 2398", href: "tel:+14032872398" },
  { icon: Mail, label: "Email", value: "precisionhermetic@telus.net", href: "mailto:precisionhermetic@telus.net" },
  { icon: MapPin, label: "Facility", value: "Bay #4, 4451 64 Avenue SE, Calgary, Alberta T2C 2C8" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 8:00 AM – 4:30 PM MST" },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()

  const form = e.currentTarget
  const formData = new FormData(form)
  const payload = Object.fromEntries(formData.entries())

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    alert("The quote request could not be sent. Please call the shop.")
    return
  }

  form.reset()
  setSubmitted(true)
}

  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Get in touch
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Request a rebuild quote
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Send us your compressor model and failure symptoms. We'll respond with pricing and a
            turnaround estimate within one business day.
          </p>

          <ul className="mt-8 space-y-5">
            {DETAILS.map((d) => (
              <li key={d.label} className="flex items-start gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <d.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a href={d.href} className="font-medium text-foreground hover:text-primary">
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-sm border border-border bg-card p-6 md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl font-semibold uppercase tracking-wide text-card-foreground">
                Quote request received
              </h3>
              <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
                Thanks — our team will review your compressor details and get back to you within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
  type="text"
  name="website"
  tabIndex={-1}
  autoComplete="off"
  className="hidden"
/>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" required />
                <Field id="company" label="Company" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="email" label="Email" type="email" required />
                <Field id="phone" label="Phone" type="tel" />
              </div>
              <Field id="model" label="Compressor model / part number" required />
              <div>
                <label
                  htmlFor="details"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Failure symptoms / notes
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="w-full rounded-sm border border-input bg-background px-3 py-2 text-foreground outline-none ring-ring/50 transition focus:border-ring focus:ring-2"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Quote Request
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-sm border border-input bg-background px-3 py-2 text-foreground outline-none ring-ring/50 transition focus:border-ring focus:ring-2"
      />
    </div>
  )
}
