import { Scissors } from 'lucide-react'
import type { GalleryImage } from '@/types'
import { cn } from '@/lib/utils'

export function GalleryTile({ image, className }: { image: GalleryImage; className?: string }) {
  return (
    <figure
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-line bg-surface-2',
        className,
      )}
    >
      <div className="grid h-full min-h-[220px] w-full place-items-center bg-[radial-gradient(120%_120%_at_30%_0%,hsl(var(--accent)/0.12),transparent_60%)] transition-transform duration-700 group-hover:scale-105">
        <Scissors className="h-10 w-10 text-accent/40" />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-10">
        <p className="font-display text-xl tracking-wide text-foreground">{image.title}</p>
        {image.desc && <p className="text-xs text-muted">{image.desc}</p>}
      </figcaption>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/0 transition-all duration-300 group-hover:ring-accent/30" />
    </figure>
  )
}
