import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true
}: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center')}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-brand-gold/30 rounded-full bg-brand-gold/5">
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
          <span className="text-xs text-brand-gold/80 tracking-widest uppercase">{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-black font-tajawal">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/60 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
