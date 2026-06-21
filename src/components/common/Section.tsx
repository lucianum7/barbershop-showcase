import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  center,
}: {
  id?: string
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
  center?: boolean
}) {
  return (
    <section id={id} className={cn('mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8', className)}>
      {(eyebrow || title || description) && (
        <Reveal className={cn('mb-10 md:mb-14', center && 'mx-auto max-w-2xl text-center')}>
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          {title && <h2 className="display text-4xl text-foreground md:text-6xl">{title}</h2>}
          {description && <p className="mt-4 text-muted md:text-lg">{description}</p>}
        </Reveal>
      )}
      {children}
    </section>
  )
}
