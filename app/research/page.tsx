import { FileText, ExternalLink } from 'lucide-react';
import MathRain from '@/components/MathRain';

const papers = [
  {
    title: "Do Financial Transfer Entropy Networks Recover Meaningful Structure? A Matched-DGP Audit of Node-Level Estimation Reliability",
    authors: "Haotian Yang",
    venue: "SSRN",
    year: 2026,
    abstract:
      "We audit whether estimated transfer entropy networks reliably recover meaningful node-level structure in financial systems. Using matched data-generating processes with known ground truth, we show that T/N ratio dominates preprocessing choice: OLS precision reaches only 11% while Raw LASSO achieves 72.3% at realistic sample sizes. Factor-neutral methods show no significant improvement. Findings have direct implications for applied network researchers.",
    tags: ["Transfer Entropy", "Financial Networks", "Econometrics", "High Dimensions"],
    links: [{ label: "SSRN", url: "https://papers.ssrn.com/" }],
    status: "published",
  },
  {
    title: "When Can We Recover Granger/Transfer-Entropy Networks in High Dimensions? Information-Theoretic Limits and Achievable Regimes for VAR Graph Recovery",
    authors: "LI Yifeng, YANG Haotian",
    venue: "Working Paper",
    year: 2026,
    abstract:
      "We study when directed dependence networks based on linear Granger causality (and hence Gaussian transfer entropy) can be reliably recovered in high dimensions. We provide information-theoretic lower bounds showing node-level recovery is impossible below a sample-size regime depending on sparsity, signal strength, and dimension, and achievable guarantees for row-wise sparse VAR estimation via penalized regression. Our results yield practical sample-size planning rules and clarify why empirically popular network pipelines may fail at realistic T/N ratios.",
    tags: ["VAR", "Granger Causality", "Information Theory", "Minimax Bounds"],
    links: [],
    status: "working",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="mb-12">
          <h1 className="font-display text-3xl font-bold text-white mb-3">Research</h1>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            I study the statistical limits of financial network recovery — specifically, when 
            and why high-dimensional time series pipelines fail to recover meaningful structure.
          </p>
        </div>

        <div className="space-y-6">
          {papers.map((paper, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-white/8 bg-black/40 backdrop-blur-sm hover:border-white/16 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <span className="font-mono text-xs text-gray-500">{paper.year}</span>
                <span className="font-mono text-xs text-gray-600">·</span>
                <span className={`font-mono text-xs ${paper.status === 'published' ? 'text-teal-500' : 'text-gray-500'}`}>
                  {paper.venue}
                </span>
              </div>

              <h2 className="text-white font-semibold text-lg leading-snug mb-1">
                {paper.title}
              </h2>
              <p className="text-xs text-gray-500 mb-4">{paper.authors}</p>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {paper.abstract}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {paper.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs text-teal-500/80 bg-teal-500/8 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {paper.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-teal-500/40 text-teal-400 rounded hover:bg-teal-500/10 transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
