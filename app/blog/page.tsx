import MathRain from '@/components/MathRain';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <h1 className="font-display text-3xl font-bold text-white mb-3">Blog</h1>
        <p className="text-gray-500 text-sm">Nothing here yet. Check back later.</p>
      </div>
    </div>
  );
}
