import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags: string[];
  minutes: number;
};

export type Post = PostMeta & { body: string };

function readPost(file: string): Post {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? "");
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: String(data.title ?? slug),
    date,
    summary: data.summary ? String(data.summary) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    minutes: Math.max(1, Math.round(words / 220)),
    body: content,
  };
}

/** Published posts, newest first. Files with `draft: true` are skipped. */
export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .filter((f) => {
      const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, f), "utf8"));
      return data.draft !== true;
    })
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
