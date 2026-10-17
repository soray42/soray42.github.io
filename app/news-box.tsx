"use client";

import { useEffect, useRef } from "react";

export default function NewsBox() {
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let paused = false;

    if (media.matches || el.scrollHeight <= el.clientHeight + 2) return;

    let dir = 1;
    let offset = el.scrollTop;
    const tick = () => {
      const max = el.scrollHeight - el.clientHeight;
      if (!paused && max > 2) {
        if (Math.abs(el.scrollTop - offset) > 1) offset = el.scrollTop;
        offset += 0.28 * dir;
        if (offset >= max - 0.5) {
          offset = max;
          dir = -1;
        }
        if (offset <= 0) {
          offset = 0;
          dir = 1;
        }
        el.scrollTop = offset;
      }
      frame = window.requestAnimationFrame(tick);
    };

    const pause = () => {
      paused = true;
    };
    const play = () => {
      paused = false;
    };

    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", play);
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", play);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", play);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", play);
    };
  }, []);

  return (
    <section id="news">
      <div className="news-box" ref={scroller} tabIndex={0}>
        <h2>News</h2>
        <ul className="news">
          <li>
            <span className="when">Oct 17, 2026</span>
            <span>
              “
              <a href="https://openreview.net/forum?id=B1N5pkR9CJ">
                One Shock, Many Voices: Do LLM Managers Discount Correlated
                Analyst Reports?
              </a>
              ” accepted to the AI4F Workshop at ICAIF ’26 (Bocconi, Milan;
              non-archival presentation).
            </span>
          </li>
          <li>
            <span className="when">Oct 3, 2026</span>
            <span>
              <a href="https://huggingface.co/sora42y/Sev-2B-preview">
                Sev-2B-preview
              </a>{" "}
              released.
            </span>
          </li>
          <li>
            <span className="when">Sep 3, 2026</span>
            <span>
              “<code>import pandas as np</code>: the numpy strikes back” accepted
              at the BlackboxNLP Workshop at EMNLP 2026 (poster, Budapest).
            </span>
          </li>
          <li>
            <span className="when">Aug 9, 2026</span>
            <span>
              Presented “On the recovery of meaningful structure from financial
              transfer entropy networks” at EcoSta 2026 (oral).
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
