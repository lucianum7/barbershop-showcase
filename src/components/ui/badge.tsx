import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em]',
  {
    variants: {
      variant: {
        gold: 'border-accent/30 bg-accent/10 text-accent',
        neutral: 'border-line bg-surface-2 text-muted',
        success: 'border-success/30 bg-success/10 text-success',
        danger: 'border-danger/30 bg-danger/10 text-danger',
        warning: 'border-warning/30 bg-warning/10 text-warning',
      },
    },
    defaultVariants: { variant: 'gold' },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
