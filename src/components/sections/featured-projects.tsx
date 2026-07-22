'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/data/projects';
import { ArrowUpRight } from 'lucide-react';

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-brand-obsidian">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="مشاريعنا"
          title="أعمال متميزة"
          subtitle="استكشف مشاريعنا الرائدة في صعيد مصر"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-white/5 hover:border-brand-gold/40 transition-all"
            >
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-obsidian/50" />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 mb-4 text-xs text-brand-gold/80 bg-brand-gold/10 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold font-tajawal text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white/50">نسبة الإنجاز</span>
                    <span className="text-xs text-brand-gold font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ delay: 0.2, duration: 1 }}
                      className="h-full bg-gradient-to-r from-brand-gold to-brand-goldLight"
                    />
                  </div>
                </div>

                {/* Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-goldLight transition-colors text-sm font-medium"
                >
                  اعرف المزيد
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
