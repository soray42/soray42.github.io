'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import MathRain from '@/components/MathRain';

const researchInterests = [
  'Financial Networks',
  'Transfer Entropy',
  'High-Dim Time Series',
  'Information Theory',
  'Complex Systems',
];

const papers = [
  {
    title: "Do Financial Transfer Entropy Networks Recover Meaningful Structure? A Matched-DGP Audit of Node-Level Estimation Reliability",
    authors: [
      { name: "Haotian Yang", url: null },
      { name: "Yifeng Li", url: "https://yifen9.li/" }
    ],
    venue: "SSRN Working Paper, 2026",
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

      {/* Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex items-center max-w-5xl mx-auto px-6 pt-14">
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="font-mono text-xs text-teal-500 tracking-widest mb-6 uppercase">
              Undergraduate Researcher
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Haotian Yang
            </h1>
            <p className="font-mono text-sm text-teal-400 mb-6">
              preferred: Sora
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
              Born in Harbin, China. Based in Milan for Bocconi. First-year BEMACS student. 
              I study when financial networks can — and cannot — be reliably recovered from data. 
              T/N ratio dominates almost everything.
            </p>
            
            {/* Research Interest Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-xs font-medium text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Buttons */}
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

          {/* Right: Photo */}
          <div className="flex justify-center md:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQF5Y3mMl2XZBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1733055428609?e=1748476800&v=beta&t=a3cXJEr1oiE1NkJCXaqiOBNwNFAj6NG35xH-0IkPl9s"
              alt="Haotian Yang"
              className="w-[180px] h-[180px] rounded-full object-cover border-4 border-teal-500/30"
            />
          </div>
        </div>
      </section>

      {/* Papers Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
        <h2 className="font-display text-2xl font-bold text-white mb-6">Papers</h2>

        <div className="space-y-6">
          {papers.map((paper, idx) => (
            <button
              key={idx}
              onClick={() => togglePaper(idx)}
              className="w-full text-left p-6 rounded-lg border border-white/8 bg-black/40 backdrop-blur-sm hover:border-white/16 transition-all duration-200"
            >
              <h3 className="text-white font-semibold text-lg leading-snug mb-2">
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
                    {i < paper.authors.length - 1 && ", "}
                  </span>
                ))}
              </p>
              
              <p className="text-xs text-gray-500 mb-4">{paper.venue}</p>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-teal-400">
                {expandedPaper === idx ? (
                  <>
                    Collapse <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read more <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </div>

              {expandedPaper === idx && (
                <div className="mt-6 pt-6 border-t border-white/8 space-y-4" onClick={(e) => e.stopPropagation()}>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Abstract</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {paper.abstract}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Key Findings</h4>
                    <ul className="space-y-1.5">
                      {paper.keyFindings.map((finding, i) => (
                        <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {paper.ssrnLink && (
                    <div className="pt-2">
                      <a
                        href={paper.ssrnLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-teal-500 text-black rounded hover:bg-teal-400 transition-colors"
                      >
                        View on SSRN
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Ongoing Research + Collaboration */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ongoing Research */}
          <div className="p-6 rounded-lg border border-white/8 bg-black/40 backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold text-white mb-4">Ongoing Research</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm leading-relaxed flex gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Financial network recovery under high-dimensional VAR: sample complexity, minimax rates, practical estimation</span>
              </li>
              <li className="text-gray-400 text-sm leading-relaxed flex gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Information-theoretic limits of Granger/transfer entropy graph recovery</span>
              </li>
              <li className="text-gray-400 text-sm leading-relaxed flex gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Exploring applications to systemic risk and complex financial systems</span>
              </li>
            </ul>
          </div>

          {/* Open for Collaboration */}
          <div className="p-6 rounded-lg border border-teal-500/30 bg-teal-500/5 backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold text-white mb-4">Open for Collaboration</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Open to research collaboration and internship opportunities in financial econometrics, 
              network science, and quantitative finance. Feel free to reach out — sorayoung.42@outlook.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
