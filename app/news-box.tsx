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
    const tick = () => {
      const max = el.scrollHeight - el.clientHeight;
      if (!paused && max > 2) {
        el.scrollTop += 0.28 * dir;
        if (el.scrollTop >= max - 0.5) dir = -1;
        if (el.scrollTop <= 0) dir = 1;
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
            <span className="when">2026</span>
            <span>
              “<code>import pandas as np</code>: the numpy strikes back” accepted
              at the BlackboxNLP Workshop at EMNLP 2026 (poster, Budapest).
            </span>
          </li>
          <li>
            <span className="when">2026</span>
            <span>
              Oral presentation at EcoSta 2026, “On the recovery of meaningful
              structure from financial transfer entropy networks” (presenting
              author).
            </span>
          </li>
          <li>
            <span className="when">Oct 2026</span>
            <span>Sev-2B-preview and the Seductive Details dataset released.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
