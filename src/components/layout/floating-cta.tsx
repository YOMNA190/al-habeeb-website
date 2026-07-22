'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_WHATSAPP, COMPANY_PHONE } from '@/lib/constants';

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 left-8 z-40 flex flex-col gap-3"
    >
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${COMPANY_WHATSAPP.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Phone */}
      <motion.a
        href={`tel:${COMPANY_PHONE}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-brand-gold hover:bg-brand-gold/90 text-brand-navy rounded-full flex items-center justify-center shadow-lg shadow-brand-gold/30 transition-all"
      >
        <Phone size={24} />
      </motion.a>
    </motion.div>
  );
}
