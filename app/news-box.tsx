"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

type NewsItem = {
  date: string;
  body: ReactNode;
};

const news: NewsItem[] = [
  {
    date: "Oct 17, 2026",
    body: (
      <>
        “
        <a href="https://openreview.net/forum?id=B1N5pkR9CJ">
          One Shock, Many Voices: Do LLM Managers Discount Correlated Analyst
          Reports?
        </a>
        ” accepted to the AI4F Workshop at ICAIF ’26 (Bocconi, Milan;
        non-archival presentation).
      </>
    ),
  },
  {
    date: "Oct 3, 2026",
    body: (
      <>
        <a href="https://huggingface.co/sora42y/Sev-2B-preview">Sev-2B-preview</a>{" "}
        released.
      </>
    ),
  },
  {
    date: "Sep 3, 2026",
    body: (
      <>
        “<code>import pandas as np</code>: the numpy strikes back” accepted at
        the BlackboxNLP Workshop at EMNLP 2026 (poster, Budapest).
      </>
    ),
  },
  {
    date: "Aug 9, 2026",
    body: (
      <>
        Presented “On the recovery of meaningful structure from financial
        transfer entropy networks” at EcoSta 2026 (oral).
      </>
    ),
  },
];

const SPEED_PX_PER_SECOND = 16;

function NewsRows({ items }: { items: NewsItem[] }) {
  return items.map((item) => (
    <li key={item.date}>
      <span className="when">{item.date}</span>
      <span>{item.body}</span>
    </li>
  ));
}

export default function NewsBox() {
  const scroller = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const clone = useRef<HTMLUListElement>(null);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionOk(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const el = scroller.current;
    const rows = list.current;
    if (!el || !rows) return;

    const fit = () => {
      const items = rows.querySelectorAll("li");
      const count = Math.min(3, items.length);
      let height = 0;
      for (let i = 0; i < count; i++) height += items[i].getBoundingClientRect().height;
      if (height > 0) el.style.maxHeight = `${height}px`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(rows);
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) fit();
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = scroller.current;
    const rows = list.current;
    const copy = clone.current;
    if (!motionOk || !el || !rows || !copy) return;

    copy.setAttribute("inert", "");
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const firstItem = rows.querySelector("li");
    const cloneItem = copy.querySelector("li");
    if (!firstItem || !cloneItem) return;

    let frame = 0;
    let hovering = el.matches(":hover");
    let focused = el.matches(":focus-within");
    let offset = el.scrollTop;
    let last = performance.now();
    let adjusting = false;

    const paused = () => hovering || focused || media.matches;

    const period = () => {
      const loop = cloneItem.offsetTop - firstItem.offsetTop;
      return loop > 2 ? loop : 0;
    };

    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      const dt = Math.min(48, now - last);
      last = now;
      if (paused()) return;
      const loop = period();
      if (loop <= el.clientHeight + 2) return;
      if (Math.abs(el.scrollTop - offset) > 2) offset = el.scrollTop;
      offset += (SPEED_PX_PER_SECOND * dt) / 1000;
      if (offset >= loop) offset -= loop;
      el.scrollTop = offset;
    };

    const onScroll = () => {
      if (adjusting) return;
      const loop = period();
      if (loop > 0 && el.scrollTop >= loop) {
        adjusting = true;
        offset = el.scrollTop - loop;
        el.scrollTop = offset;
        adjusting = false;
        return;
      }
      if (paused()) offset = el.scrollTop;
    };

    const onEnter = () => {
      hovering = true;
    };
    const onLeave = () => {
      hovering = false;
      offset = el.scrollTop;
    };
    const onFocusIn = () => {
      focused = true;
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!el.contains(event.relatedTarget as Node | null)) {
        focused = false;
        offset = el.scrollTop;
      }
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    el.addEventListener("scroll", onScroll, { passive: true });
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
      el.removeEventListener("scroll", onScroll);
    };
  }, [motionOk]);

  return (
    <section id="news">
      <div className="news-box">
        <h2 id="news-heading">News</h2>
        <div
          className="news-scroll"
          ref={scroller}
          tabIndex={0}
          aria-labelledby="news-heading"
        >
          <ul className="news" ref={list}>
            <NewsRows items={news} />
          </ul>
          {motionOk ? (
            <ul className="news news-clone" ref={clone} aria-hidden="true">
              <NewsRows items={news} />
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
