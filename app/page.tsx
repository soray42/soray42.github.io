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

      {/* Hero Section: Name + Photo (two-column) */}
      <section className="relative z-10 min-h-[85vh] flex items-center max-w-5xl mx-auto px-6 pt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left side */}
          <div>
            <p className="font-mono text-xs text-teal-500 tracking-widest mb-4 uppercase">
              Undergraduate Researcher
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
              Haotian Yang
            </h1>
            <p className="font-mono text-sm text-teal-400 mb-8">
              preferred: Sora
            </p>
            
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

          {/* Right side: Profile photo */}
          <div className="flex justify-center md:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQF5Y3mMl2XZBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1733055428609?e=1748476800&v=beta&t=a3cXJEr1oiE1NkJCXaqiOBNwNFAj6NG35xH-0IkPl9s"
              alt="Haotian Yang"
              className="w-48 h-48 rounded-full object-cover border-2 border-teal-500/40"
            />
          </div>
        </div>
      </section>

      {/* Bio paragraphs (full width, below hero) */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-12">
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-gray-300">
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
      </section>

      {/* Research Interests (tags) */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-12">
        <h3 className="font-mono text-xs text-teal-500 tracking-widest mb-4 uppercase">
          Research Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1.5 text-sm text-teal-400 bg-teal-500/10 border border-teal-500/30 rounded"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Open to Collaboration callout */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
        <div className="border border-teal-500/30 bg-teal-500/5 rounded-lg p-5 max-w-2xl">
          <p className="text-gray-300 text-base leading-relaxed">
            <strong className="text-white">Open to collaboration.</strong> If you&apos;re working on something at the intersection of networks, statistics, and finance — feel free to reach out.
          </p>
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
              {/* EcoSta 2026 Badge */}
              <div className="mb-3">
                <span className="text-teal-400 bg-teal-500/10 border border-teal-500/30 text-xs px-2 py-0.5 rounded">
                  {paper.badge}
                </span>
              </div>

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

      {/* Outside Research (larger, prominent) */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <h2 className="font-display text-2xl font-bold text-white mb-6">Outside Research</h2>
        <div className="max-w-2xl">
          <p className="text-gray-400 text-base leading-relaxed">
            When not doing research: craft beer, poker, hardcore punk and metalcore (current obsession: Fear and Loathing in Las Vegas), J-rock, and Japan — visits often, possibly moving to Tokyo.
          </p>
        </div>
      </section>
    </div>
  );
}
