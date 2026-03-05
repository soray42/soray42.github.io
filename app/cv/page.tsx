import { Download, GraduationCap, BookOpen, Code } from 'lucide-react';
import MathRain from '@/components/MathRain';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-24">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="font-display text-3xl font-bold text-white mb-1">Haotian Yang</h1>
            <p className="text-gray-400 text-sm">BEMACS · Bocconi University · Class of 2028</p>
          </div>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border border-white/20 text-gray-400 rounded hover:border-white/40 hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            PDF
          </a>
        </div>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="w-4 h-4 text-teal-500" />
            <h2 className="text-sm font-semibold text-white uppercase tracking-widest">Education</h2>
          </div>
          <div className="border-l border-white/10 pl-5">
            <div className="mb-1 flex items-start justify-between">
              <div>
                <h3 className="text-white font-medium">B.Sc. Economics Management and Computer Science (BEMACS)</h3>
                <p className="text-teal-500 text-sm">Bocconi University</p>
              </div>
              <span className="font-mono text-xs text-gray-600 flex-shrink-0 ml-4">2025 – present</span>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen className="w-4 h-4 text-teal-500" />
            <h2 className="text-sm font-semibold text-white uppercase tracking-widest">Papers</h2>
          </div>
          <div className="space-y-5">
            <div className="border-l border-teal-500/40 pl-5">
              <p className="font-mono text-xs text-gray-500 mb-1">2026 · SSRN</p>
              <p className="text-white text-sm font-medium leading-snug">
                Do Financial Transfer Entropy Networks Recover Meaningful Structure? A Matched-DGP Audit of Node-Level Estimation Reliability
              </p>
              <p className="text-gray-500 text-xs mt-1">Haotian Yang</p>
            </div>
            <div className="border-l border-white/10 pl-5">
              <p className="font-mono text-xs text-gray-500 mb-1">2026 · Working Paper</p>
              <p className="text-white text-sm font-medium leading-snug">
                When Can We Recover Granger/Transfer-Entropy Networks in High Dimensions? Information-Theoretic Limits and Achievable Regimes for VAR Graph Recovery
              </p>
              <p className="text-gray-500 text-xs mt-1">LI Yifeng, YANG Haotian</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <Code className="w-4 h-4 text-teal-500" />
            <h2 className="text-sm font-semibold text-white uppercase tracking-widest">Skills</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-600 mb-2 uppercase tracking-wider">Languages</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'Julia', 'SQL', 'LaTeX'].map((s) => (
                  <span key={s} className="px-3 py-1 font-mono text-xs bg-teal-500/8 text-teal-400 rounded border border-teal-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2 uppercase tracking-wider">Topics</p>
              <div className="flex flex-wrap gap-2">
                {['High-dimensional statistics', 'Time series', 'Information theory', 'Network analysis', 'Monte Carlo'].map((s) => (
                  <span key={s} className="px-3 py-1 text-xs bg-white/4 text-gray-400 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
