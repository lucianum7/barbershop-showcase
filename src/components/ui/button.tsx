import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-gold-grad text-accent-foreground font-semibold shadow-gold-sm hover:shadow-gold hover:brightness-[1.05]',
        outline:
          'border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/70',
        subtle:
          'border border-line bg-surface-2 text-foreground/90 hover:border-accent/40 hover:text-accent',
        ghost: 'text-muted hover:text-accent hover:bg-accent/5',
        danger: 'bg-danger/90 text-white hover:bg-danger',
        link: 'text-accent underline-offset-4 hover:underline px-0',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
)
Button.displayName = 'Button'

export { buttonVariants }
