import { Inter, Tajawal } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingCTA } from '@/components/layout/floating-cta';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const tajawal = Tajawal({
  weight: ['400', '700', '900'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap'
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!['ar', 'en'].includes(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${tajawal.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>الحبيب للهندسة والمقاولات</title>
        <meta name="description" content="شركة رائدة في المقاولات والتطوير العقاري بصعيد مصر" />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
