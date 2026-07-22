'use client';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Shield, Award, Users, Clock, BadgeCheck, Heart } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'الجودة والثقة', desc: 'نلتزم بأعلى معايير الجودة في كل مشروع ننفذه' },
  { icon: Award, title: 'خبرة ١٥ عاماً', desc: 'خبرة متراكمة في السوق المصري منذ ٢٠٠٨' },
  { icon: Users, title: 'فريق محترف', desc: 'أكثر من ١٠٠ مهندس وفني مدرب على أعلى مستوى' },
  { icon: Clock, title: 'الالتزام بالوقت', desc: 'نلتزم بالجداول الزمنية المتفق عليها بدقة' },
  { icon: BadgeCheck, title: 'معايير عالمية', desc: 'نطبق أحدث المعايير الهندسية العالمية' },
  { icon: Heart, title: 'شريك موثوق', desc: 'نبني علاقات طويلة الأمد مع عملائنا' },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-navy">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="لماذا نحن"
          title="لماذا تختار الحبيب؟"
          subtitle="نقدم لك أكثر من مجرد مقاولات، نقدم شراكة موثوقة لبناء مستقبل صعيد مصر"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-brand-obsidian/30 border border-white/5 hover:border-brand-gold/40 transition-all hover:bg-brand-obsidian/50 rounded-lg"
            >
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                <reason.icon size={24} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold font-tajawal text-white group-hover:text-brand-gold transition-colors mb-2">
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
