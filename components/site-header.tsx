"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Precision Hermetic Rebuilders home">
          <span className="flex size-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <span className="font-heading text-lg font-bold leading-none">P</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Precision Hermetic
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Rebuilders
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+14032872398"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {"403 287 2398"}
          </a>
          <Button render={<a href="#contact" />} nativeButton={false} size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-sm text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border/60 bg-background px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-2 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            render={<a href="#contact" onClick={() => setOpen(false)} />}
            nativeButton={false}
            className="mt-3 w-full"
          >
            Request a Quote
          </Button>
        </nav>
      )}
    </header>
  )
}
