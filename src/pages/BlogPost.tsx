import { useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useParams } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import TableOfContents, { type TocItem } from "../components/TableOfContents";
import { blogPosts, getCategorySlug, getRelatedPosts, getReadingTime } from "../data/blog";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getToc(content: string): TocItem[] {
  return content.split("\n")
    .map((line) => line.match(/^(#{2,3})\s+(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({ id: slugify(match[2]), title: match[2], level: match[1].length as 2 | 3 }));
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((item) => item.slug === slug);
  const toc = useMemo(() => post ? getToc(post.content) : [], [post]);
  const categoryPosts = post ? blogPosts.filter((item) => item.category === post.category) : [];
  const postIndex = post ? categoryPosts.findIndex((item) => item.slug === post.slug) : -1;
  const previousPost = postIndex > 0 ? categoryPosts[postIndex - 1] : undefined;
  const nextPost = postIndex >= 0 && postIndex < categoryPosts.length - 1 ? categoryPosts[postIndex + 1] : undefined;
  const relatedPosts = post ? getRelatedPosts(post) : [];

  useEffect(() => {
    if (!post) return;

    document.title = `${post.title} | Rohit Bhardwaj`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", post.summary);
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      author: { "@type": "Person", name: "Rohit Bhardwaj" },
    });
    document.head.appendChild(structuredData);

    return () => {
      document.title = "Rohit Bhardwaj | Frontend Developer";
      structuredData.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
        <div className="max-w-xl rounded-2xl border border-primary/20 bg-primary/5 p-8 shadow-lg">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
          <h1 className="mb-3 text-3xl font-bold text-primary">This post is not available</h1>
          <p className="mb-8 text-secondary">The article may have moved or the URL may be incorrect.</p>
          <Link to="/blog" className="rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-secondary">Back to blog</Link>
        </div>
      </main>
    );
  }

  const markdownComponents: Components = {
    h1: ({ children }) => <h1 id={slugify(String(children))}>{children}</h1>,
    h2: ({ children }) => <h2 id={slugify(String(children))}>{children}</h2>,
    h3: ({ children }) => <h3 id={slugify(String(children))}>{children}</h3>,
    code: CodeBlock,
  };

  return (
    <main className="bg-background px-4 py-24 text-text sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <Link to="/blog" className="text-primary hover:text-secondary">← All articles</Link>
          <Link to={`/blog/category/${getCategorySlug(post.category)}`} className="text-primary hover:text-secondary">← {post.category}</Link>
        </div>
        <header className="mt-10 max-w-4xl border-b border-primary/15 pb-10">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent"><span>{post.category}</span><span>/</span><span>{post.technology}</span></div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-primary sm:text-6xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-text/70">{post.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-text/55">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            <span>{getReadingTime(post)}</span>
            {post.tags.map((tag) => <span key={tag} className="text-primary">#{tag}</span>)}
          </div>
        </header>

        <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
          <div>
            {toc.length > 0 ? <details className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-4 lg:hidden"><summary className="cursor-pointer font-semibold text-primary">Table of contents</summary><div className="mt-4"><TableOfContents items={toc} mobile /></div></details> : null}
            <div className="markdown-content"><ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{post.content}</ReactMarkdown></div>
            <div className="mt-12 flex justify-between gap-5 border-t border-primary/15 pt-6"><div>{previousPost ? <Link to={`/blog/${previousPost.slug}`} className="font-semibold text-primary hover:text-secondary">← {previousPost.title}</Link> : null}</div><div className="text-right">{nextPost ? <Link to={`/blog/${nextPost.slug}`} className="font-semibold text-primary hover:text-secondary">{nextPost.title} →</Link> : null}</div></div>
          </div>
          <aside className="mt-10 space-y-8 lg:mt-0">
            {toc.length > 0 ? <div className="hidden lg:block lg:sticky lg:top-24"><TableOfContents items={toc} /></div> : null}
            <div className="rounded-2xl border border-secondary/15 bg-secondary/5 p-5"><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">More in {post.category}</p><ol className="mt-4 space-y-3 text-sm">{categoryPosts.map((item, index) => <li key={item.slug}><Link to={`/blog/${item.slug}`} className={`flex gap-3 transition hover:text-primary ${item.slug === post.slug ? "font-bold text-primary" : "text-text/70"}`}><span>{String(index + 1).padStart(2, "0")}</span><span>{item.title}</span></Link></li>)}</ol><Link to={`/blog/category/${getCategorySlug(post.category)}`} className="mt-5 inline-block text-sm font-semibold text-primary">View category →</Link></div>
          </aside>
        </div>

        {relatedPosts.length > 0 ? <section className="mt-20 border-t border-primary/15 pt-10"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Keep reading</p><h2 className="mt-2 text-3xl font-bold text-primary">Related posts</h2><div className="mt-6 grid gap-6 md:grid-cols-3">{relatedPosts.map((relatedPost) => <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="rounded-xl border border-primary/15 bg-primary/5 p-5 transition hover:-translate-y-1 hover:border-primary/40"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{relatedPost.technology}</p><h3 className="mt-3 text-xl font-bold text-secondary">{relatedPost.title}</h3><p className="mt-2 text-sm leading-6 text-text/70">{relatedPost.summary}</p></Link>)}</div></section> : null}
      </article>
    </main>
  );
}
