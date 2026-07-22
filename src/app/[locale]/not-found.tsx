import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-gold mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">الصفحة غير موجودة</h2>
        <p className="text-gray-300 mb-8">عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-brand-gold text-brand-navy rounded-lg font-semibold hover:bg-opacity-90"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
