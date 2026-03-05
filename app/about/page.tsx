import MathRain from '@/components/MathRain';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-24">
        <h1 className="font-display text-3xl font-bold text-white mb-8">About</h1>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
          <p>
            I'm <span className="text-white font-medium">Haotian Yang</span>, a first-year undergraduate 
            at Bocconi University studying Economics Management and Computer Science (BEMACS).
          </p>
          <p>
            My research so far has focused on the statistical limits of financial network recovery — 
            specifically, when high-dimensional time series pipelines can and cannot reliably 
            recover the graph structure we care about. The short answer is that the T/N ratio 
            dominates almost everything else.
          </p>
          <p>
            I'm interested in econometric methodology, information theory, and the interface between 
            statistics and finance. Currently looking for research opportunities and ways to push 
            the work further.
          </p>
          <p>
            When I'm not in the data: reading, music, and trying to understand why things work 
            the way they do.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Education</p>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-white text-sm font-medium">B.Sc. Economics Management and Computer Science</p>
              <p className="text-teal-500 text-sm">Bocconi University · Milan</p>
            </div>
            <span className="font-mono text-xs text-gray-600">2025–</span>
          </div>
        </div>
      </div>
    </div>
  );
}
