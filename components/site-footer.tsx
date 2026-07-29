export function SiteFooter() {
  return (
    <footer className="border-t border-steel-muted/20 bg-steel py-10 text-steel-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <span className="font-heading text-lg font-bold leading-none">P</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-sm font-bold uppercase tracking-wider">
              Precision Hermetic Rebuilders
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-muted">
              Est. 1991 · Calgary, Alberta
            </span>
          </span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
          <a href="#services" className="text-sm text-steel-muted hover:text-steel-foreground">
            Services
          </a>
          <a href="#process" className="text-sm text-steel-muted hover:text-steel-foreground">
            Process
          </a>
          <a href="#capabilities" className="text-sm text-steel-muted hover:text-steel-foreground">
            Capabilities
          </a>
          <a href="#contact" className="text-sm text-steel-muted hover:text-steel-foreground">
            Contact
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-steel-muted/20 px-4 pt-6 md:px-6">
        <p className="font-mono text-xs text-steel-muted">
          © {new Date().getFullYear()} Precision Hermetic Rebuilders. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
