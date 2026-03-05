import Link from 'next/link';
import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
import MathRain from '@/components/MathRain';

const papers = [
  {
    title: "Do Financial Transfer Entropy Networks Recover Meaningful Structure? A Matched-DGP Audit of Node-Level Estimation Reliability",
    venue: "SSRN",
    year: "2026",
    authors: "Haotian Yang",
    tags: ["Transfer Entropy", "Financial Networks", "Econometrics"],
    url: "https://papers.ssrn.com/",
  },
  {
    title: "When Can We Recover Granger/Transfer-Entropy Networks in High Dimensions? Information-Theoretic Limits and Achievable Regimes for VAR Graph Recovery",
    venue: "Working Paper",
    year: "2026",
    authors: "LI Yifeng, YANG Haotian",
    tags: ["VAR", "Granger Causality", "Information Theory"],
    url: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Math Rain Background */}
      <MathRain />

      {/* Hero */}
      <section className="relative z-10 flex flex-col justify-center min-h-screen max-w-5xl mx-auto px-6 pt-14">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-teal-500 tracking-widest mb-6 uppercase">
            Undergraduate Researcher
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Haotian Yang
          </h1>
          <p className="font-mono text-sm text-teal-400 mb-6">
            (Sora)
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            BEMACS student at{' '}
            <span className="text-white">Bocconi University</span>.
            I study when financial networks can—and cannot—be reliably recovered
            from data. Currently working on transfer entropy, VAR estimation, and
            information-theoretic limits.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 text-black text-sm font-semibold rounded hover:bg-teal-400 transition-colors"
            >
              Research
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/haotian-yang-b7a47b301/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-gray-300 text-sm font-medium rounded hover:border-white/40 hover:text-white transition-colors"
            >
              LinkedIn
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl font-semibold text-white">Papers</h2>
          <Link href="/research" className="text-sm text-teal-500 hover:text-teal-400 transition-colors flex items-center gap-1">
            All research <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {papers.map((paper, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-lg border border-white/8 bg-black/40 backdrop-blur-sm hover:border-teal-500/40 hover:bg-black/60 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-gray-500">{paper.year}</span>
                    <span className="font-mono text-xs text-gray-600">·</span>
                    <span className="font-mono text-xs text-gray-500">{paper.venue}</span>
                  </div>
                  <h3 className="text-white text-sm font-medium leading-snug mb-1 group-hover:text-teal-300 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{paper.authors}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {paper.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs text-teal-500/80 bg-teal-500/8 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
