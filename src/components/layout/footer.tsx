'use client';
import Link from 'next/link';
import { COMPANY_NAME, COMPANY_FULL_NAME, COMPANY_EMAIL, COMPANY_PHONE, SOCIAL_LINKS } from '@/lib/constants';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-obsidian border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-black font-tajawal text-brand-gold mb-4">{COMPANY_NAME}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              شركة رائدة في المقاولات والتطوير العقاري بصعيد مصر، متخصصة في تنفيذ مشاريع فاخرة وموثوقة.
            </p>
            <div className="flex gap-3">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-brand-gold/10 rounded-lg transition-colors">
                <Facebook size={18} className="text-brand-gold" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-brand-gold/10 rounded-lg transition-colors">
                <Instagram size={18} className="text-brand-gold" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-brand-gold/10 rounded-lg transition-colors">
                <Linkedin size={18} className="text-brand-gold" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-brand-gold/10 rounded-lg transition-colors">
                <Twitter size={18} className="text-brand-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">الروابط السريعة</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/60 hover:text-brand-gold transition-colors">من نحن</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-brand-gold transition-colors">خدماتنا</Link></li>
              <li><Link href="/projects" className="text-white/60 hover:text-brand-gold transition-colors">مشاريعنا</Link></li>
              <li><Link href="/happiness-plaza" className="text-white/60 hover:text-brand-gold transition-colors">هابنيس بلازا</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">الخدمات</h4>
            <ul className="space-y-2">
              <li><Link href="/services/general-contracting" className="text-white/60 hover:text-brand-gold transition-colors">المقاولات العامة</Link></li>
              <li><Link href="/services/architectural-design" className="text-white/60 hover:text-brand-gold transition-colors">التصميم المعماري</Link></li>
              <li><Link href="/services/structural-engineering" className="text-white/60 hover:text-brand-gold transition-colors">الهندسة الإنشائية</Link></li>
              <li><Link href="/services/interior-design" className="text-white/60 hover:text-brand-gold transition-colors">التصميم الداخلي</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-white/60 text-sm mb-1">البريد الإلكتروني</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-brand-gold hover:text-brand-goldLight transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <p className="text-white/60 text-sm mb-1">الهاتف</p>
                <a href={`tel:${COMPANY_PHONE}`} className="text-brand-gold hover:text-brand-goldLight transition-colors">
                  {COMPANY_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} {COMPANY_FULL_NAME}. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-sm">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white transition-colors text-sm">
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
