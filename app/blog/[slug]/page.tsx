import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import { formatDate, getPost, getPosts } from "@/lib/blog";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} · Haotian Yang (Sora)`,
    description: post.summary,
  };
}

export default function PostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="letter">
      <article className="column">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href="/blog/">← Blog</Link>
        </nav>

        <header className="post-head">
          <p className="when">
            {formatDate(post.date)} · {post.minutes} min read
          </p>
          <h1>{post.title}</h1>
          {post.summary ? <p className="post-summary">{post.summary}</p> : null}
        </header>

        <div className="prose">
          <MDXRemote
            source={post.body}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex, rehypeHighlight],
              },
            }}
          />
        </div>

        <footer className="post-foot">
          <Link href="/blog/">← All posts</Link>
          <Link href="/">Haotian Yang (Sora)</Link>
        </footer>
      </article>
    </div>
  );
}
