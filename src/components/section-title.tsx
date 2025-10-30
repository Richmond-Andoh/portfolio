import { cn } from "@/lib/utils"

type SectionTitleProps = {
  title: string
  description?: string
  className?: string
}

export function SectionTitle({ title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
