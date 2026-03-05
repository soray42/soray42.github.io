import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

// Mock data - in production this would fetch from MDX files
const posts: Record<string, any> = {
  'welcome': {
    title: "Welcome to my research blog",
    date: "2026-03-05",
    readTime: "3 min read",
    tags: ["Meta", "Research"],
    content: `
# Welcome!

This is my research blog where I share insights about **financial networks**, **transfer entropy**, and **econometric methods**.

## What to Expect

I'll be writing about:

- Research findings and methodologies
- Technical tutorials on econometric methods
- Thoughts on academic life and research
- Code snippets and tools

## Why This Blog?

Research shouldn't stay locked in papers. I want to share the process, the challenges, and the insights in a more accessible format.

Stay tuned for deep dives into transfer entropy, network analysis, and more!
    `
  },
  'transfer-entropy-intro': {
    title: "Understanding Transfer Entropy",
    date: "2026-02-28",
    readTime: "8 min read",
    tags: ["Transfer Entropy", "Tutorial"],
    content: `
# Understanding Transfer Entropy

Transfer entropy is a powerful tool for measuring **information flow** between time series.

## The Intuition

Imagine you're trying to predict stock A's next move. You have two options:

1. Use only stock A's history
2. Use stock A's history **plus** stock B's history

Transfer entropy quantifies how much better option 2 is compared to option 1.

## The Math

The formula is:

\`\`\`
T_Y→X = ∑ p(x_t+1, x_t^(k), y_t^(l)) log[p(x_t+1 | x_t^(k), y_t^(l)) / p(x_t+1 | x_t^(k))]
\`\`\`

Where:
- **T_Y→X** measures information flow from Y to X
- **k** and **l** are lag orders
- We're comparing conditional probabilities

## Why It Matters in Finance

Financial markets are interconnected. Transfer entropy helps us:

- Identify causal relationships
- Measure systemic risk
- Detect information flow patterns

More technical details coming in future posts!
    `
  },
  'why-networks-matter': {
    title: "Why Financial Networks Matter",
    date: "2026-02-15",
    readTime: "6 min read",
    tags: ["Financial Networks", "Systemic Risk"],
    content: `
# Why Financial Networks Matter

Financial systems aren't isolated. They're **interconnected networks** where shocks propagate.

## The 2008 Crisis

The 2008 financial crisis showed us that understanding individual institutions isn't enough. 

The network structure matters:

- **Lehman Brothers** wasn't just too big to fail
- It was too **interconnected** to fail
- The network amplified the shock

## Network Topology

Different network structures have different risk profiles:

### Star Network
- Central node is critical
- Failure cascades from the hub

### Dense Network  
- More connections = more shock absorption?
- Not necessarily! Dense networks can amplify contagion

### Scale-Free Network
- Few highly connected nodes
- These "hubs" are systemically important

## What We're Learning

My research focuses on:

1. Measuring these network structures reliably
2. Understanding how information flows through them
3. Identifying early warning signals

Network analysis isn't just academic—it's crucial for financial stability.
    `
  }
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16">
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-200 mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-secondary">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map((line: string) => {
                    if (line.startsWith('# ')) return `<h1 class="font-display text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`;
                    if (line.startsWith('## ')) return `<h2 class="font-display text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h2>`;
                    if (line.startsWith('### ')) return `<h3 class="font-display text-xl font-semibold mt-4 mb-2">${line.slice(4)}</h3>`;
                    if (line.startsWith('- ')) return `<li class="ml-4">${line.slice(2)}</li>`;
                    if (line.includes('**')) return `<p class="mb-4">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-teal-400">$1</strong>')}</p>`;
                    if (line.startsWith('```')) return line.includes('```') ? '<pre class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto my-4"><code>' : '</code></pre>';
                    if (line.trim() === '') return '<br/>';
                    return `<p class="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">${line}</p>`;
                  })
                  .join('\n')
              }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
