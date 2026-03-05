/* eslint-disable react/no-unescaped-entities */
import MathRain from '@/components/MathRain';
import Link from 'next/link';

export default function PostZH() {
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
            <span className="font-mono text-xs text-teal-500 border border-teal-500/30 px-1.5 py-0.5 rounded">ZH</span>
            <span className="text-gray-600 text-xs">2026年3月5日</span>
            <span className="text-gray-600 text-xs">· 4 分钟</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            我用一年时间证明了股票 TE 网络不可靠。然后我找到了它真正应该存在的地方。
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            预测市场、Transfer Entropy、和一个还没人填的空白。
          </p>
        </div>

        {/* Body */}
        <div className="space-y-5 text-[15px] leading-relaxed text-gray-300">

          <p>故事是这样的：</p>

          <p>
            去年我 audit 了 7 篇顶刊的 equity TE network 论文（<em>ECoSta 2026</em> oral）。
            结论：在现实 T/N 比例下（T/N &lt; 5），OLS 估计的 precision 只有{' '}
            <strong className="text-white">11%</strong>，Raw LASSO 能到 72.3%。
            剩下的都是 spurious edges——供应链、机构持仓重叠、common factors，全混在一起，根本分不清。
          </p>

          <p>
            然后我写了第二篇（也是 <em>ECoSta</em> oral），从 information theory 角度证明了为什么
            VAR graph recovery 在高维环境下会撞到不可能性边界。Equity 市场正好撞得最狠。
          </p>

          <p>
            <strong className="text-white">但预测市场不一样。</strong>
          </p>

          <p>预测市场解决了 equity TE 的两个致命问题：</p>

          <ol className="space-y-3 pl-4">
            <li>
              <strong className="text-white">N 是可控的。</strong> Polymarket 大概有 30–200 个活跃合约。
              T/N curse 不存在了。
            </li>
            <li>
              <strong className="text-white">边的含义是唯一的。</strong> TE 检测到 A→B，就意味着一件事：
              "市场参与者对 A 的 belief update 正在 directionally cause 他们对 B 的 belief update"。
              没有供应链混淆，没有机构 overlap，没有 latent factor 渗透。每个合约就是一个明确的 event proposition。
            </li>
          </ol>

          <p>
            这就是 Transfer Entropy 应该存在的地方。但据我所知，还没人做过。
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">三个文献，零交集</h2>

          <ul className="space-y-2 pl-4">
            <li><strong className="text-white">金融网络估计</strong>（Billio 2012, Diebold-Yilmaz 2014）——研究 equity/债券/银行，从没碰过预测市场数据</li>
            <li><strong className="text-white">预测市场微观结构</strong>（Dalen 2025, Saguillo 2025, Reichenbach &amp; Walther 2025）——研究单合约 dynamics，没人问过信息怎么在合约之间流动</li>
            <li><strong className="text-white">最优做市</strong>（Avellaneda-Stoikov 2008 及后续）——为连续价格资产设计，从没 adapt 到 binary event contracts，也没有 cross-contract hedging 理论</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-white pt-4">我想做的</h2>

          <ol className="space-y-3 pl-4">
            <li><strong className="text-white">建网络。</strong>对 Polymarket/Kalshi 合约做 TE estimation，得到有向 belief propagation graph，实时化。</li>
            <li><strong className="text-white">Macro regime signal。</strong>Time-varying network 告诉你叙事什么时候在转向（hub identity 变了）、systemic risk 什么时候在飙升（density 变了）。</li>
            <li><strong className="text-white">Network-informed market making。</strong>把 Avellaneda-Stoikov 扩展到 binary contracts，用 TE network 做 cross-contract hedging。</li>
          </ol>

          <h2 className="font-display text-xl font-bold text-white pt-4">我需要帮助的地方</h2>

          <p>
            我会 prove things，会写 estimator，会跑 model。但我没在 Polymarket 或 Kalshi 上做过市。
            我不知道我对 fill rate、adverse selection、capital efficiency 的假设是否符合现实。
          </p>

          <p><strong className="text-white">我在找一个 collaborator：</strong></p>

          <ul className="space-y-1.5 pl-4">
            <li>真的在预测市场上做过 market-making（Polymarket、Kalshi 或类似平台）</li>
            <li>懂 binary event market 的 order book dynamics</li>
            <li>能帮我 validate 假设，告诉我理论在哪里会和实践打架</li>
            <li>最好有 quant trading 背景或 market microstructure 研究经验</li>
          </ul>

          <p>
            <strong className="text-white">你能得到什么：</strong>第一篇 serious 预测市场网络研究的
            co-authorship；一个 novel 的 market-making strategy 角度；在一件"事后看来很显然但现在还没人做"
            的事情上 early 的机会。
          </p>

          <p>
            时间窗口很窄。预测市场现在很热，数据 accessible，这个 gap 不会开太久。
            你在看的是第一个把 network methodology 带进 prediction market 的研究，
            这个领域刚起来，文献还没固化，timing perfect。
          </p>

          {/* CTA */}
          <div className="mt-10 p-5 rounded-lg border border-teal-500/30 bg-teal-500/5">
            <p className="text-white font-medium mb-1">如果你是我在找的人：</p>
            <a
              href="mailto:sorayoung.42@outlook.com"
              className="text-teal-400 hover:text-teal-300 transition-colors font-mono text-sm"
            >
              sorayoung.42@outlook.com
            </a>
            <p className="text-gray-500 text-xs mt-3">— Haotian Yang（Sora），Bocconi BEMACS 一年级</p>
          </div>

        </div>
      </div>
    </div>
  );
}
