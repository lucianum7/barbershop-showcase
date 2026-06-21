import { cn } from '@/lib/utils'

export function ScissorsMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'grid place-items-center rounded-xl bg-gold-grad text-accent-foreground shadow-gold-sm',
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
      </svg>
    </span>
  )
}

export function Logo({
  size = 'md',
  withMark = false,
  subtitle,
  className,
}: {
  size?: 'sm' | 'md' | 'lg'
  withMark?: boolean
  subtitle?: string
  className?: string
}) {
  const text = {
    sm: 'text-xl tracking-[0.3em]',
    md: 'text-2xl tracking-[0.32em]',
    lg: 'text-4xl tracking-[0.34em]',
  }[size]
  const mark = { sm: 'h-8 w-8', md: 'h-10 w-10', lg: 'h-14 w-14' }[size]
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {withMark && <ScissorsMark className={mark} />}
      <div className="leading-none">
        <span className={cn('font-display text-foreground', text)}>BARBERSHOP PRO</span>
        {subtitle && <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted">{subtitle}</p>}
      </div>
    </div>
  )
}
