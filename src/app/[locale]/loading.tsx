export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-navy animate-pulse">
      <div className="container mx-auto px-4 py-20">
        <div className="h-12 bg-gray-700 rounded mb-8 w-1/3"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}
