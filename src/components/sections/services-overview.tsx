'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/section-header';
import { services } from '@/lib/data/services';
import { ArrowUpRight, Building, PenTool, HardHat, Lightbulb, Wrench, Paintbrush, PaintRoller, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building: <Building size={24} className="text-brand-gold" />,
  PenTool: <PenTool size={24} className="text-brand-gold" />,
  HardHat: <HardHat size={24} className="text-brand-gold" />,
  Lightbulb: <Lightbulb size={24} className="text-brand-gold" />,
  Wrench: <Wrench size={24} className="text-brand-gold" />,
  Paintbrush: <Paintbrush size={24} className="text-brand-gold" />,
  PaintRoller: <PaintRoller size={24} className="text-brand-gold" />,
  Users: <Users size={24} className="text-brand-gold" />,
};

export function ServicesOverview() {
  return (
    <section className="py-24 bg-brand-navy">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="خدماتنا"
          title="حلول هندسية متكاملة"
          subtitle="نقدم مجموعة شاملة من الخدمات الهندسية والاستشارية لتحقيق رؤيتك"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-brand-obsidian/30 border border-white/5 hover:border-brand-gold/40 transition-all hover:bg-brand-obsidian/50 rounded-lg"
            >
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                {iconMap[service.icon] || iconMap.Building}
              </div>
              <h3 className="text-xl font-bold font-tajawal text-white group-hover:text-brand-gold transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-goldLight transition-colors text-sm font-medium"
              >
                اعرف المزيد
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10 transition-all rounded-lg font-medium"
          >
            عرض جميع الخدمات
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
