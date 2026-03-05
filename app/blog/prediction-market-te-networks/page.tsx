/* eslint-disable react/no-unescaped-entities */
import MathRain from '@/components/MathRain';
import Link from 'next/link';

export default function PostEN() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <MathRain />
      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-28 pb-24">

        {/* Back */}
        <Link href="/blog/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-teal-400 transition-colors mb-10">
          ← Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-teal-500 border border-teal-500/30 px-1.5 py-0.5 rounded">EN</span>
            <span className="text-gray-600 text-xs">March 5, 2026</span>
            <span className="text-gray-600 text-xs">· 5 min read</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Nobody knows how information flows between prediction market contracts.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Why Transfer Entropy finally has a natural habitat — and why I need a collaborator who&apos;s made markets there.
          </p>
        </div>

        {/* Body */}
        <div className="prose prose-invert prose-sm max-w-none space-y-5 text-[15px] leading-relaxed text-gray-300">

          <p>
            Here&apos;s what we know: when &quot;Trump wins 2024&quot; spikes, &quot;GOP takes House&quot; moves.
            When &quot;Fed cuts rates&quot; drops, &quot;SPX &gt;5000&quot; shifts. Traders feel these
            relationships, price them in, maybe hedge across them. But nobody has mapped the actual
            belief propagation network.
          </p>

          <p>
            I spent the last year proving that Transfer Entropy networks in equity markets are mostly
            garbage. Not &quot;noisy&quot; — fundamentally unreliable. My audit of seven top-journal
            papers (<em>ECoSta 2026</em>, oral presentation) showed that at realistic sample sizes
            (T/N &lt; 5, which is what you get with monthly data on 100 stocks), OLS-based TE
            estimation has <strong className="text-white">11% precision</strong>. Raw LASSO gets you
            to 72%. The rest is phantom edges: supply chains, correlated news, fund flows — all mixed
            together, impossible to disentangle.
          </p>

          <p>
            Then I proved <em>why</em> it fails (second paper, also <em>ECoSta</em> oral):
            there are information-theoretic impossibility barriers for VAR graph recovery in
            high-dimensional settings. Equity markets hit those barriers hard.
          </p>

          <p>
            But here&apos;s the thing: <strong className="text-white">prediction markets don&apos;t.</strong>
          </p>

          <p>Prediction markets solve both problems that kill equity TE:</p>

          <ol className="space-y-3 pl-4">
            <li>
              <strong className="text-white">Dimensionality is controllable.</strong> Polymarket has
              maybe 30–200 actively traded contracts at any given time. Kalshi similar. You&apos;re
              not fighting a T/N curse anymore.
            </li>
            <li>
              <strong className="text-white">Edges have one interpretation.</strong> When TE detects
              A→B, it means exactly one thing: <em>market participants&apos; belief updates about A
              are directionally causing their belief updates about B.</em> No supply chain confounds,
              no institutional overlap, no latent factors bleeding through.
            </li>
          </ol>

          <p>
            This is the natural habitat for Transfer Entropy. And as far as I can tell, nobody&apos;s
            built it yet.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Three literatures, zero overlap</h2>

          <ul className="space-y-2 pl-4">
            <li><strong className="text-white">Financial network estimation</strong> (Billio 2012, Diebold-Yilmaz 2014, all the systemic risk literature): focused on equities, bonds, banks. Nobody has touched prediction market data.</li>
            <li><strong className="text-white">Prediction market microstructure</strong> (Dalen 2025, Saguillo 2025, Reichenbach &amp; Walther 2025): studying single-contract dynamics — order flow, price discovery, maybe two-contract arbitrage. No network perspective. No one has asked how information flows <em>between</em> contracts.</li>
            <li><strong className="text-white">Optimal market making</strong> (Avellaneda-Stoikov 2008 and descendants): built for continuous-price assets. Never adapted to binary event contracts. No theory for cross-contract hedging based on information flow structure.</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-white pt-4">What I want to build</h2>

          <ol className="space-y-3 pl-4">
            <li><strong className="text-white">The network itself.</strong> TE estimation across Polymarket/Kalshi contracts. A directed graph where edges mean &quot;belief about A → belief about B.&quot; Real-time.</li>
            <li><strong className="text-white">Macro regime signals.</strong> Time-varying networks tell you when the narrative is shifting (hub identity changes), when systemic risk is spiking (density changes), when the market&apos;s belief structure is fragmenting or clustering.</li>
            <li><strong className="text-white">Network-informed market making.</strong> Extend Avellaneda-Stoikov to binary contracts. Use the TE network for cross-contract hedging. If you&apos;re making markets on A and B, and TE says A→B is strong, your inventory risk model should know that.</li>
          </ol>

          <h2 className="font-display text-xl font-bold text-white pt-4">This is where I need help</h2>

          <p>
            I can prove things, code the estimators, run the models. But I&apos;ve never made a market
            on Polymarket or Kalshi. I don&apos;t know if my assumptions about fill rates, adverse
            selection, and capital efficiency match reality.
          </p>

          <p><strong className="text-white">I&apos;m looking for a collaborator who:</strong></p>

          <ul className="space-y-1.5 pl-4">
            <li>Has actually done prediction market market-making (Polymarket, Kalshi, or similar)</li>
            <li>Understands order book dynamics in binary event markets</li>
            <li>Can sanity-check model assumptions and tell me where theory breaks in practice</li>
            <li>Ideally has a quant trading background or does market microstructure research</li>
          </ul>

          <p>
            <strong className="text-white">What you get:</strong> co-authorship on what I think will
            be the first serious network study of prediction markets, a genuinely novel angle on
            market-making strategy, and the chance to be early on something that feels obvious in
            hindsight but somehow hasn&apos;t been done yet.
          </p>

          <p>
            The window is narrow. Prediction markets are hot, the data&apos;s accessible, and this
            gap won&apos;t stay open long.
          </p>

          {/* CTA */}
          <div className="mt-10 p-5 rounded-lg border border-teal-500/30 bg-teal-500/5">
            <p className="text-white font-medium mb-1">If this sounds like you:</p>
            <a
              href="mailto:sorayoung.42@outlook.com"
              className="text-teal-400 hover:text-teal-300 transition-colors font-mono text-sm"
            >
              sorayoung.42@outlook.com
            </a>
            <p className="text-gray-500 text-xs mt-3">— Haotian Yang (Sora), BEMACS @ Bocconi University</p>
          </div>

        </div>
      </div>
    </div>
  );
}

