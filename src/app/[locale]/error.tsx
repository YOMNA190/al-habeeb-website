'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">حدث خطأ ما</h2>
        <p className="text-gray-300 mb-8">عذراً، حدث خطأ غير متوقع.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-brand-gold text-brand-navy rounded-lg font-semibold hover:bg-opacity-90"
        >
          حاول مرة أخرى
        </button>
      </div>
    </div>
  );
}
