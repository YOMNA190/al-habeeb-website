'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-navy" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black font-tajawal">
            <span className="text-brand-gold">هل لديك مشروع</span>
            <br />
            <span className="text-white">في ذهنك؟</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            دعنا نساعدك في تحويل فكرتك إلى واقع ملموس. فريقنا جاهز لتقديم الاستشارة المجانية وعرض السعر المناسب.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" className="px-10 py-7 text-base">
              اطلب استشارة مجانية
              <ArrowUpRight size={18} className="mr-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-brand-gold/50 hover:text-brand-gold px-10 py-7 text-base">
              <Phone size={18} className="ml-2" />
              اتصل بنا الآن
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/30">
            * الاستشارة مجانية ولا تلتزم بأي تعاقد
          </p>
        </motion.div>
      </div>
    </section>
  );
}
