import NewsBox from "./news-box";

const obsessions = [
  {
    title: "Torch",
    artist: "Azami",
    year: "2019",
    href: "https://open.spotify.com/track/5M5wX0bEAi5fYae3wj3160",
    cover: "/assets/torch-cover.jpg",
    code: "/assets/torch-spotify-code.svg",
  },
  {
    title: "Good Night Darling",
    artist: "SHANK",
    year: "2012",
    href: "https://open.spotify.com/track/4KRPj7zlugaGTpcY2KMalz",
    cover: "/assets/good-night-darling-cover.jpg",
    code: "/assets/good-night-darling-spotify-code.svg",
  },
  {
    title: "Tales of Villain",
    artist: "HANABIE.",
    year: "2023",
    href: "https://open.spotify.com/track/2xH6ORBecFLgT1HR0ezMtA",
    cover: "/assets/tales-of-villain-cover.jpg",
    code: "/assets/tales-of-villain-spotify-code.svg",
  },
  {
    title: "SWEETSIDE SUICIDE",
    artist: "ano",
    year: "2021",
    href: "https://open.spotify.com/track/4c08Q4306AWgcgY3FxKNgY",
    cover: "/assets/sweetside-suicide-cover.jpg",
    code: "/assets/sweetside-suicide-spotify-code.svg",
  },
];

export default function Home() {
  return (
    <div className="letter">
      <div className="shell">
        <aside className="profile">
          <div className="identity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/avatar.jpg" alt="Haotian Yang" className="portrait" />
            <div className="nameblock">
              <h1>Haotian Yang (Sora)</h1>
            </div>
          </div>
          <p className="place">Bocconi University, Milan</p>
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
              <a href="https://x.com/Dontrustmebro">X (Twitter): @Dontrustmebro</a>
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
            <a href="#outside">Outside academics</a>
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
                <span>ICAIF</span>
                <span>2026</span>
              </div>
              <div>
                <p className="badge">Workshop presentation, non-archival</p>
                <p>
                  Yang, H. 2026. “
                  <a href="https://openreview.net/forum?id=B1N5pkR9CJ">
                    One Shock, Many Voices: Do LLM Managers Discount Correlated
                    Analyst Reports?
                  </a>
                  ” <em>AI4F Workshop at ICAIF ’26</em> (Bocconi, Milan,
                  November 2026). Non-archival workshop presentation. Tests
                  whether LLM trading managers correctly discount correlated
                  analyst reports against an exact Bayesian benchmark;
                  reasoning before answering triples the discount.
                </p>
              </div>
            </article>
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

          <section id="outside">
            <h2>Outside academics</h2>
            <p>In Tokyo, Dec 23 – Jan 2.</p>
            <h3 className="subhead">Current obsessions</h3>
            <ul className="obsession-row">
              {obsessions.map((item) => (
                <li key={item.href}>
                  <a
                    className="obsession"
                    href={item.href}
                    aria-label={`${item.title} by ${item.artist}, ${item.year}, on Spotify`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="obsession-cover"
                      src={item.cover}
                      width={640}
                      height={640}
                      alt=""
                    />
                    <span className="obsession-meta">
                      <span className="obsession-title">{item.title}</span>
                      <span className="obsession-artist">{item.artist}</span>
                      <span className="obsession-year">{item.year}</span>
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="obsession-code"
                      src={item.code}
                      width={640}
                      height={160}
                      alt=""
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}
