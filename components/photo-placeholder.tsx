import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function PhotoPlaceholder({
  label = "Photo coming soon",
  className,
  tone = "light",
}: {
  label?: string
  className?: string
  tone?: "light" | "dark"
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border border-dashed",
        tone === "dark"
          ? "border-steel-muted/40 bg-steel/40 text-steel-muted"
          : "border-border bg-muted/50 text-muted-foreground",
        className,
      )}
    >
      <ImageIcon className="size-8 opacity-60" aria-hidden="true" />
      <span className="font-mono text-xs uppercase tracking-[0.2em]">{label}</span>
    </div>
  )
}
