'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import MathRain from '@/components/MathRain';

const researchInterests = [
  'Financial networks & transfer entropy',
  'High-dimensional time series',
  'Information-theoretic limits',
  'Complex systems & network science',
  'Quantitative finance / HF',
];

const papers = [
  {
    title: "Do Financial Transfer Entropy Networks Recover Meaningful Structure? A Matched-DGP Audit of Node-Level Estimation Reliability",
    authors: [
      { name: "Haotian Yang", url: null },
      { name: "Yifeng Li", url: "https://yifen9.li/" }
    ],
    venue: "SSRN Working Paper, 2026",
    badge: "🎤 EcoSta 2026 · Oral",
    abstract: "We conduct a matched data-generating process (DGP) audit to evaluate whether estimated transfer entropy networks reliably recover meaningful node-level structure in financial systems. Using simulated data with known ground truth across a range of T/N ratios, we assess precision, recall, and F1 of node-level metrics under VAR+Gaussian, VAR+GARCH, and VAR+GARCH+Factor DGPs with OLS, Raw LASSO, and Factor-Neutral LASSO estimators. Our central finding is that the T/N ratio dominates preprocessing choice: at realistic T/N ratios (T/N < 5), OLS node-level precision reaches only 11%, Raw LASSO achieves 72.3%, and Factor-Neutral LASSO shows no significant improvement (66.7%). These results have direct implications for applied researchers building financial networks from returns data.",
    keyFindings: [
      "T/N ratio is the dominant determinant of network recovery quality",
      "OLS precision: ~11% at T/N < 5; Raw LASSO: 72.3%",
      "Factor-neutral preprocessing does not significantly improve node-level precision",
      "Results hold across VAR+Gaussian, VAR+GARCH, and VAR+GARCH+Factor DGPs"
    ],
    ssrnLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6282818"
  },
  {
    title: "When Can We Recover Granger/Transfer-Entropy Networks in High Dimensions? Information-Theoretic Limits and Achievable Regimes for VAR Graph Recovery",
    authors: [
      { name: "LI Yifeng", url: "https://yifen9.li/" },
      { name: "YANG Haotian", url: null }
    ],
    venue: "Working Paper, 2026",
    badge: "🎤 EcoSta 2026 · Oral",
    abstract: "We study when directed dependence networks based on linear Granger causality (and hence Gaussian transfer entropy) can be reliably recovered in high dimensions. We derive information-theoretic lower bounds showing that node-level recovery is impossible below a sample-size regime determined by sparsity, signal strength, and dimension. We also provide achievability guarantees for row-wise sparse VAR estimation via penalized regression. Our results yield practical sample-size planning rules and clarify why empirically popular network pipelines fail at realistic T/N ratios.",
    keyFindings: [
      "Information-theoretic lower bounds on the minimum T/N for reliable graph recovery",
      "Achievability guarantees for penalized row-wise sparse VAR estimation",
      "Explicit dependence on sparsity s, signal strength, and dimension p",
      "Explains empirically observed failure modes in financial network pipelines"
    ],
    ssrnLink: null
  }
];

export default function Home() {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const togglePaper = (index: number) => {
    setExpandedPaper(expandedPaper === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />

      {/* ── HERO: Inverted-L layout ───────────────────────────────────────
          Top row: name (left, compact) + photo (right, large)
          Below left: bio text fills the space under the name
      ──────────────────────────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-12">

          {/* LEFT COLUMN */}
          <div>
            {/* Name block — compact, upper-left */}
            <p className="font-mono text-xs text-teal-500 tracking-widest mb-3 uppercase">
              Undergraduate Researcher
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-1 leading-tight">
              Haotian Yang
            </h1>
            <p className="font-mono text-sm text-teal-400 mb-6">
              preferred: Sora
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/research/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-black text-sm font-semibold rounded hover:bg-teal-400 transition-colors"
              >
                Research
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://scholar.google.com/citations?user=PlSIkoAAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-gray-300 text-sm font-medium rounded hover:border-white/40 hover:text-white transition-colors"
              >
                Google Scholar
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/haotian-yang-b7a47b301/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-gray-300 text-sm font-medium rounded hover:border-white/40 hover:text-white transition-colors"
              >
                LinkedIn
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bio — sits in the bottom-left of the inverted-L */}
            <div className="space-y-4 text-[15px] leading-relaxed text-gray-400 max-w-xl">
              <p>
                Born in Harbin, China. Currently based in Milan — boring, but Bocconi&apos;s here and so is the work.
              </p>
              <p>
                First-year undergraduate studying Economics Management and Computer Science (BEMACS) at Bocconi University. My research so far has focused on the statistical limits of financial network recovery: when T/N is small, even the best estimators fail, and T/N dominates almost everything else you might try.
              </p>
              <p>
                Broadly interested in complex systems, network science, financial econometrics, and the math that connects them. Open to research internships in any of these areas, and aiming for a PhD in statistics or financial mathematics down the line.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — large photo, aligned to top */}
          <div className="flex justify-center md:justify-end md:pt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo.jpg"
              alt="Haotian Yang"
              className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover object-top border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ─────────────────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-10">
        <p className="font-mono text-xs text-teal-500 tracking-widest mb-3 uppercase">
          Research Interests
        </p>
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 text-sm text-teal-400 bg-teal-500/8 border border-teal-500/25 rounded"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* ── OPEN TO COLLABORATION ──────────────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
        <div className="border border-teal-500/25 bg-teal-500/5 rounded-lg p-5 max-w-2xl">
          <p className="text-gray-300 text-[15px] leading-relaxed">
            <strong className="text-white">Open to collaboration.</strong>{' '}
            Working on something at the intersection of networks, statistics, and finance?
            Especially interested in connecting with people working on financial network estimation,
            prediction market microstructure, or market-making theory — feel free to reach out.
          </p>
        </div>
      </section>

      {/* ── PAPERS ─────────────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
        <h2 className="font-display text-2xl font-bold text-white mb-6">Papers</h2>
        <div className="space-y-4">
          {papers.map((paper, idx) => (
            <button
              key={idx}
              onClick={() => togglePaper(idx)}
              className="w-full text-left p-6 rounded-lg border border-white/8 bg-black/40 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-200"
            >
              <div className="mb-3">
                <span className="text-teal-400 bg-teal-500/10 border border-teal-500/30 text-xs px-2 py-0.5 rounded">
                  {paper.badge}
                </span>
              </div>
              <h3 className="text-white font-semibold text-base leading-snug mb-2">
                {paper.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                {paper.authors.map((author, i) => (
                  <span key={i}>
                    {author.url ? (
                      <a
                        href={author.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {author.name}
                      </a>
                    ) : (
                      <span>{author.name}</span>
                    )}
                    {i < paper.authors.length - 1 && ', '}
                  </span>
                ))}
              </p>
              <p className="text-xs text-gray-500 mb-3">{paper.venue}</p>
              <div className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-400">
                {expandedPaper === idx ? (
                  <><ChevronUp className="w-4 h-4" /> Collapse</>
                ) : (
                  <><ChevronDown className="w-4 h-4" /> Read more</>
                )}
              </div>

              {expandedPaper === idx && (
                <div
                  className="mt-5 pt-5 border-t border-white/8 space-y-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Abstract</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{paper.abstract}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Key Findings</h4>
                    <ul className="space-y-1.5">
                      {paper.keyFindings.map((f, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-teal-500 shrink-0">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {paper.ssrnLink && (
                    <a
                      href={paper.ssrnLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-teal-500 text-black rounded hover:bg-teal-400 transition-colors"
                    >
                      View on SSRN
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── OUTSIDE RESEARCH ───────────────────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <h2 className="font-display text-2xl font-bold text-white mb-4">Outside Research</h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          When not doing research: craft beer, poker, hardcore punk and metalcore
          (current obsession: Fear and Loathing in Las Vegas), J-rock, and Japan —
          visits often, possibly moving to Tokyo.
        </p>
      </section>
    </div>
  );
}
