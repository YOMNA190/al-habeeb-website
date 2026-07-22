import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  from = 'from-white',
  to = 'to-brand-gold/80'
}: GradientTextProps) {
  return (
    <span className={cn(
      `bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent`,
      className
    )}>
      {children}
    </span>
  );
}
