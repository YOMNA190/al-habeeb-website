import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        gold: 'bg-brand-gold text-brand-navy hover:bg-brand-gold/90 shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 font-bold',
        outline: 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10 backdrop-blur-sm',
        ghost: 'text-white hover:text-brand-gold hover:bg-white/5',
        dark: 'bg-brand-obsidian text-white hover:bg-brand-obsidian/80 border border-white/10',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl',
      },
    },
    defaultVariants: {
      variant: 'gold',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
