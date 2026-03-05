import MathRain from '@/components/MathRain';
import Link from 'next/link';

const posts = [
  {
    slug: 'prediction-market-te-networks',
    title: 'Nobody knows how information flows between prediction market contracts.',
    subtitle: 'Why Transfer Entropy finally has a natural habitat — and why I need a collaborator who\'s made markets there.',
    date: 'March 5, 2026',
    lang: 'EN',
    readingTime: '5 min',
  },
  {
    slug: 'prediction-market-te-networks-zh',
    title: '我用一年时间证明了股票TE网络不可靠。然后我找到了它真正应该存在的地方。',
    subtitle: '预测市场、Transfer Entropy、和一个还没人填的空白。',
    date: '2026年3月5日',
    lang: 'ZH',
    readingTime: '4 分钟',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <h1 className="font-display text-3xl font-bold text-white mb-2">Blog</h1>
        <p className="text-gray-500 text-sm mb-12">Occasional writing on research, markets, and methods.</p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="block p-6 rounded-lg border border-white/8 bg-black/30 hover:border-teal-500/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-teal-500 border border-teal-500/30 px-1.5 py-0.5 rounded">
                  {post.lang}
                </span>
                <span className="text-gray-600 text-xs">{post.date}</span>
                <span className="text-gray-600 text-xs">·</span>
                <span className="text-gray-600 text-xs">{post.readingTime}</span>
              </div>
              <h2 className="font-display text-lg font-semibold text-white leading-snug mb-2 group-hover:text-teal-100 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {post.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
