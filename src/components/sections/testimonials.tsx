'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'المهندس/ أحمد محمد',
    position: 'مطور عقاري',
    content: 'شركة الحبيب من أفضل شركات المقاولات في صعيد مصر، التزامهم بالجودة والمواعيد جعلهم شريكنا الأول في كل مشاريعنا.',
    rating: 5,
  },
  {
    name: 'السيد/ خالد يوسف',
    position: 'صاحب مشروع تجاري',
    content: 'نفذوا لنا مشروعاً تجارياً متكاملاً بمعايير عالمية، الإشراف والمتابعة كان على أعلى مستوى.',
    rating: 5,
  },
  {
    name: 'الدكتور/ محمد عبدالله',
    position: 'مستثمر عقاري',
    content: 'هابنيس بلازا هو المشروع الأضخم في صعيد مصر، والثقة في شركة الحبيب كانت الدافع الأساسي للاستثمار.',
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="آراء العملاء"
          title="ماذا يقولون عنا؟"
          subtitle="ثقة عملائنا هي الدافع الأكبر لنا لتقديم الأفضل"
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-brand-obsidian/50 border border-brand-gold/20 rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                <div className="mt-6">
                  <p className="text-brand-gold font-bold text-lg">{testimonials[current].name}</p>
                  <p className="text-white/40 text-sm">{testimonials[current].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-gold/40 hover:bg-brand-gold/10 transition-all flex items-center justify-center"
              >
                <ChevronRight size={20} className="text-white/60" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-gold/40 hover:bg-brand-gold/10 transition-all flex items-center justify-center"
              >
                <ChevronLeft size={20} className="text-white/60" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    current === i ? 'w-8 bg-brand-gold' : 'bg-white/20'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
