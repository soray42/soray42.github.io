import NewsBox from "./news-box";

const sealPath =
  "M833 724Q838 729 847.0 739.0Q856 749 862 749Q868 749 888.5 731.0Q909 713 926.5 692.5Q944 672 944 665Q938 659 930.0 657.0Q922 655 906 654Q880 625 837.0 590.5Q794 556 757 535L747 542Q778 594 810 670H643V465Q643 454 649.0 451.5Q655 449 678 449H762Q826 449 838 450Q846 450 850.0 452.0Q854 454 858 461Q866 475 884 545L890 567H901L904 458Q921 452 927.0 444.5Q933 437 933 425Q933 406 918.5 396.0Q904 386 866.0 381.0Q828 376 755 376H660Q620 376 600.0 382.5Q580 389 572.5 404.5Q565 420 565 450V670H455Q440 570 397.5 500.5Q355 431 278.5 385.0Q202 339 84 312L80 326Q219 380 284.0 460.5Q349 541 364 670H201Q203 620 188.5 582.5Q174 545 152 527Q133 511 109 511Q84 511 74 531Q71 539 71 547Q71 574 100 594Q130 616 150.5 663.5Q171 711 168 764L183 765Q194 733 199 699H461Q461 787 452 848Q514 832 539.0 821.5Q564 811 564 804Q564 800 556 795L540 785V699H811ZM756 304Q760 309 766.5 318.5Q773 328 777.5 332.5Q782 337 786 337Q792 337 813.5 320.0Q835 303 854.0 283.5Q873 264 873 257Q870 242 848 242H540V-10H798L821 24Q825 29 831.5 39.0Q838 49 842.5 54.0Q847 59 851 59Q857 59 879.5 41.0Q902 23 922.0 3.0Q942 -17 942 -24Q938 -40 917 -40H232Q161 -41 82 -54L56 -2Q111 -8 189 -10H461V242H318Q247 241 168 228L143 279Q198 273 276 271H733Z";

function Hanko() {
  return (
    <svg className="hanko" viewBox="0 0 100 100" aria-hidden="true">
      <rect x="2.5" y="2.5" width="95" height="95" fill="currentColor" />
      <rect x="8" y="8" width="84" height="84" fill="none" stroke="var(--paper-base)" strokeWidth="0.7" />
      <g transform="translate(50 51.5) scale(0.07 -0.07) translate(-500 -397)">
        <path d={sealPath} fill="var(--paper-base)" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="letter">
      <div className="shell">
        <aside className="profile">
          <div className="identity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo.jpg" alt="Haotian Yang" className="portrait" />
            <div className="nameblock">
              <h1>Haotian Yang (Sora)</h1>
              <Hanko />
            </div>
          </div>
          <p className="place">Bocconi University, Milan</p>
          <p className="lede">
            I work independently on LLM post-training, reinforcement learning,
            and LLM behavior.
          </p>
          <ul className="links">
            <li>
              <a href="mailto:haotian.yang@studbocconi.it">haotian.yang@studbocconi.it</a>
            </li>
            <li>
              <a href="https://huggingface.co/sora42y">huggingface.co/sora42y</a>
            </li>
            <li>
              <a href="https://github.com/soray42">github.com/soray42</a>
            </li>
            <li>
              <a href="https://x.com/Dontrustmebro">@Dontrustmebro</a>
            </li>
            <li>
              <a href="/cv.pdf">CV</a>
            </li>
          </ul>
          <nav className="toc" aria-label="Sections">
            <a href="#abstract">Abstract</a>
            <a href="#news">News</a>
            <a href="#education">Education</a>
            <a href="#publications">Publications</a>
            <a href="#presentations">Presentations</a>
            <a href="#review">Under review</a>
            <a href="#releases">Releases</a>
            <a href="#interests">Interests</a>
            <a href="#research">Ongoing research</a>
          </nav>
        </aside>

        <main>
          <section id="abstract">
            <h2>Abstract</h2>
            <p className="intro">
              I&apos;m Haotian Yang, a second-year undergraduate at{" "}
              <a href="https://www.unibocconi.it/">Bocconi University</a> in Milan.
              I hate Milan so I&apos;m trying to escape as much as I can. I work
              on LLMs, specifically on behavior, post-training and Agents.
              Studying AI in a Finance school is definitely depressing so I
              somehow grew a deep interest in Prediction Markets just to have
              something to talk about with my classmates. I&apos;m applying for
              PhD programs in 2028. Outside of work I&apos;m a music enthusiast.
              I visit Japan a lot just for loud rock shows. You can follow my X{" "}
              <a href="https://x.com/Dontrustmebro">@dontrustmebro</a> for my
              opinions and daily life.
            </p>
          </section>
          <NewsBox />

          <section id="education">
            <h2>Education</h2>
            <p>
              Bocconi University, 2025–2028. B.Sc. in Economics, Management and
              Computer Science (BEMACS), second year.
            </p>
          </section>

          <section id="publications">
            <h2>Publications</h2>
            <article className="work">
              <div className="plate" aria-hidden="true">
                <span>EMNLP</span>
                <span>2026</span>
              </div>
              <div>
                <p className="badge">Poster</p>
                <p>
                  Yang, H. 2026. “<code>import pandas as np</code>: the numpy
                  strikes back.”{" "}
                  <em className="venue-strong">BlackboxNLP Workshop at EMNLP 2026</em>{" "}
                  (accepted; poster presentation, Budapest). Pretrained aliases
                  beat local bindings: with <code>import pandas as np</code>,
                  74% of completions break vs. 12% under the conventional alias
                  (9 models, 0.5B–8B).
                </p>
              </div>
            </article>
          </section>

          <section id="presentations">
            <h2>Presentations</h2>
            <article className="work">
              <div className="plate" aria-hidden="true">
                <span>EcoSta</span>
                <span>2026</span>
              </div>
              <div>
                <p className="badge">Oral</p>
                <p>
                  Yang, H., and Y. Li. 2026. “On the recovery of meaningful
                  structure from financial transfer entropy networks.”{" "}
                  <em>EcoSta 2026</em>. Oral presentation (presenting author).
                </p>
              </div>
            </article>
          </section>

          <section id="review">
            <h2>Manuscripts Under Review</h2>
            <article className="work">
              <div className="plate" aria-hidden="true">
                <span>ICLR</span>
                <span>2027</span>
              </div>
              <div>
                <p className="badge">Under review</p>
                <p>
                  Yang, H. 2026. “Do You Copy? When Language Models Overwrite
                  Observed Values with Remembered Defaults.” Under review at{" "}
                  <em>ICLR 2027</em>. Shown a well-known service on a non-default
                  port, agents write the remembered default: +14.2 points when
                  the value arrives as a tool result, vs. +1.8 from a retrieved
                  document.
                </p>
              </div>
            </article>
            <article className="work">
              <div className="plate" aria-hidden="true">
                <span>ARR</span>
                <span>2026</span>
              </div>
              <div>
                <p className="badge">Under review</p>
                <p>
                  Yang, H., D. Hovy, and G. Glavaš. 2026. “Seductive Details:
                  Decoupling Salience from Relevance in LLM Distractibility.”
                  Short paper, under review at <em>ACL Rolling Review</em>{" "}
                  (October 2026 cycle). Making an irrelevant cue more salient,
                  with its claim held fixed, flips the model&apos;s verdict on
                  it in 18% of scenario–model pairs, in both directions (4
                  models, 500 scenarios).
                </p>
              </div>
            </article>
          </section>

          <section id="releases">
            <h2>Open-Source Releases</h2>
            <article className="work">
              <div className="plate" aria-hidden="true">
                <span>Model</span>
                <span>2026</span>
              </div>
              <div>
                <p>
                  <strong>Sev-2B-preview</strong> (Oct 2026). One forward pass,
                  no reasoning tokens: .486 on a Knights &amp; Knaves diagnostic
                  vs. .236 for the best other 2B decision model; .704 on
                  ProverQA.{" "}
                  <a href="https://huggingface.co/sora42y/Sev-2B-preview">Model</a>
                  ,{" "}
                  <a href="https://huggingface.co/datasets/sora42y/Sev-2B-data">
                    training data
                  </a>
                  , and{" "}
                  <a href="https://github.com/soray42/Sev-2B">
                    training/evaluation code
                  </a>{" "}
                  (Apache-2.0).
                </p>
              </div>
            </article>
            <article className="work">
              <div className="plate" aria-hidden="true">
                <span>Data</span>
                <span>2026</span>
              </div>
              <div>
                <p>
                  <strong>
                    <a href="https://github.com/soray42/seductive-details-release">
                      Seductive Details dataset
                    </a>
                  </strong>{" "}
                  (Oct 2026). Scenarios in 5 languages, model outputs, judge and
                  human labels; one command reproduces every number in the paper.
                </p>
              </div>
            </article>
          </section>

          <section id="interests">
            <h2>Research Interests</h2>
            <p>
              LLM post-training and reasoning distillation, LLM behavior and
              interpretability, information theory and complex systems, AI in
              finance.
            </p>
          </section>

          <section id="research">
            <h2>Ongoing Research</h2>
            <div className="strips">
              <article className="strip">
                <h3>
                  <a href="https://github.com/soray42/Sev-2B">Tree Forcing</a>
                </h3>
                <p>
                  One-forward-pass reasoning by supervising every yes/no node of
                  a reasoning tree. Qwen 2B/4B students.
                </p>
              </article>
              <article className="strip">
                <h3>
                  <a href="https://github.com/soray42/degrees-of-separation">
                    Degrees of Separation
                  </a>
                </h3>
                <p>
                  Within a field, gap = 1 − Spearman(prestige, earnings).
                </p>
              </article>
              <article className="strip">
                <h3>Factorial Consistency</h3>
                <p>
                  Preregistered C7 counterfactual-teacher program, also called
                  the gate program.
                </p>
              </article>
              <article className="strip">
                <h3>Failure attribution</h3>
                <p>
                  Applying Tree Forcing to failure attribution in LLM agents.
                  Related work on locating the responsible step:{" "}
                  <a href="https://arxiv.org/abs/2606.03467">StepFinder</a> and{" "}
                  <a href="https://arxiv.org/abs/2610.11334">ReCast</a>.
                </p>
              </article>
            </div>
            <h3 className="strips-label">Prediction Markets</h3>
            <div className="strips">
              <article className="strip">
                <h4>P1 — Do LLM Aggregator Agents Use Provenance?</h4>
                <p>
                  A paired audit of hierarchical multi-agent LLM pipelines: does
                  the manager agent account for where analysts&apos; reports came
                  from, e.g. several reports resting on the same news source?
                </p>
                <p className="status">Paper draft</p>
              </article>
              <article className="strip">
                <h4>
                  One Shock, Many Voices: Do LLM Managers Discount Correlated
                  Analyst Reports?
                </h4>
                <p className="strip-venue">
                  AI4F Workshop @ ICAIF ’26 (non-archival), Milan.
                </p>
                <p>
                  An LLM manager trading on four analyst reports applies only
                  about a third of the Bayes-correct discount for shared errors
                  (0.21 vs 0.68 log-odds) even though 96% of its rationales
                  mention the correlation; asking for the rationale before the
                  probability raises it to 0.56.
                </p>
                <p className="status">Submitted (under review)</p>
              </article>
              <article className="strip">
                <h4>
                  When Should Financial Agents Trust the Market?
                  Absorption-Aware Reliance on Prediction-Market Prices
                </h4>
                <p>
                  An LLM agent&apos;s trust in a prediction-market price should
                  be event-specific and time-varying, discounting prices right
                  after announcements by how fast that market family usually
                  absorbs news.
                </p>
                <p className="status">Proposal, collaboration planned</p>
              </article>
              <article className="strip">
                <h4>
                  Absorption Delays, Attention, and the Speed of Information
                  Pricing in Macro Prediction Markets
                </h4>
                <p>
                  Across 17 Kalshi contract families around ~50 scheduled macro
                  announcements (2024–2026), measures how long related contracts
                  take to absorb public news, and whether the slow tail is
                  explained by liquidity and attention and leaves a drift
                  profitable after costs.
                </p>
                <p className="status">Preregistered, data pipeline built</p>
              </article>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
