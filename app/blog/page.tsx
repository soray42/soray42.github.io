import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog · Haotian Yang (Sora)",
  description: "Notes and longer writing by Haotian Yang (Sora).",
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <div className="letter">
      <div className="column">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href="/">← Haotian Yang (Sora)</Link>
        </nav>

        <header className="blog-masthead">
          <p className="label">Writing</p>
          <h1>Blog</h1>
          <p className="blog-lede">
            Notes on language models, research in progress, and whatever else
            does not fit in a paper.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="blog-empty">Nothing here yet.</p>
        ) : (
          <ol className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link className="post-row" href={`/blog/${post.slug}/`}>
                  <span className="when">{formatDate(post.date)}</span>
                  <span className="post-row-body">
                    <span className="post-row-title">{post.title}</span>
                    {post.summary ? (
                      <span className="post-row-summary">{post.summary}</span>
                    ) : null}
                    <span className="post-row-meta">
                      {post.minutes} min read
                      {post.tags.length > 0 ? ` · ${post.tags.join(", ")}` : ""}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
