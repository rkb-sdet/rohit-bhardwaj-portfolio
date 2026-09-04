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
  return content
    .split("\n")
    .map((line) => line.match(/^(#{2,3})\s+(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({ id: slugify(match[2]), title: match[2], level: match[1].length as 2 | 3 }));
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((item) => item.slug === slug);
  const toc = useMemo(() => (post ? getToc(post.content) : []), [post]);
  const categoryPosts = post ? blogPosts.filter((item) => item.category === post.category) : [];
  const postIndex = post ? categoryPosts.findIndex((item) => item.slug === post.slug) : -1;
  const previousPost = postIndex > 0 ? categoryPosts[postIndex - 1] : undefined;
  const nextPost = postIndex >= 0 && postIndex < categoryPosts.length - 1 ? categoryPosts[postIndex + 1] : undefined;
  const relatedPosts = post ? getRelatedPosts(post) : [];

  // Strip duplicate h1 if markdown repeats the post title on the first line
  const sanitizedContent = useMemo(() => {
    if (!post?.content) return "";
    return post.content.replace(/^#\s+[^\n]+(\r?\n)+/, "");
  }, [post]);

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
      <main className="flex min-h-[70vh] items-center justify-center px-6 pt-32 pb-20 text-center">
        <div className="max-w-md rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/5 p-8 shadow-xl backdrop-blur-md">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">404</p>
          <h1 className="mb-3 text-2xl font-bold text-text">This post is not available</h1>
          <p className="mb-6 text-sm text-text/70">The article may have moved or the URL may be incorrect.</p>
          <Link
            to="/blog"
            className="inline-block rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-secondary"
          >
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const markdownComponents: Components = {
    h2: ({ children }) => (
      <h2
        id={slugify(String(children))}
        className="mt-8 mb-4 text-xl sm:text-2xl font-bold tracking-tight text-text border-b border-slate-200/40 dark:border-white/10 pb-2"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={slugify(String(children))} className="mt-6 mb-3 text-lg font-semibold text-secondary">
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="mb-5 leading-7 text-text/80">{children}</p>,
    ul: ({ children }) => <ul className="mb-5 list-disc space-y-2 pl-6 text-text/80">{children}</ul>,
    ol: ({ children }) => <ol className="mb-5 list-decimal space-y-2 pl-6 text-text/80">{children}</ol>,
    li: ({ children }) => <li className="leading-7">{children}</li>,
    code: CodeBlock,
  };

  return (
    <main className="min-h-screen bg-transparent px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8 text-text">
      <article className="mx-auto max-w-5xl">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-medium text-text/60">
          <Link to="/blog" className="hover:text-primary transition">
            Blog
          </Link>
          <span>/</span>
          <Link to={`/blog/category/${getCategorySlug(post.category)}`} className="hover:text-primary transition">
            {post.category}
          </Link>
          <span>/</span>
          <span className="text-primary truncate max-w-[180px] sm:max-w-xs">{post.title}</span>
        </div>

        {/* Post Hero Header */}
        <header className="mt-6 border-b border-slate-200/40 dark:border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="rounded-md bg-accent/10 px-2.5 py-1 text-accent">{post.technology}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{getReadingTime(post)}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-text/75 max-w-3xl">
            {post.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200/60 dark:border-white/10 bg-slate-100/40 dark:bg-white/5 px-2.5 py-0.5 text-xs text-text/65"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Main Body & Sidebar Layout */}
        <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-12">
          {/* Main Content Area */}
          <div className="min-w-0">
            {toc.length > 0 && (
              <details className="mb-6 rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/5 p-4 lg:hidden">
                <summary className="cursor-pointer text-sm font-semibold text-primary">Table of contents</summary>
                <div className="mt-3">
                  <TableOfContents items={toc} mobile />
                </div>
              </details>
            )}

            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {sanitizedContent}
              </ReactMarkdown>
            </div>

            {/* Pagination Controls */}
            <div className="mt-12 flex items-center justify-between gap-4 border-t border-slate-200/40 dark:border-white/10 pt-6">
              {previousPost ? (
                <Link to={`/blog/${previousPost.slug}`} className="group max-w-[45%] text-left">
                  <span className="block text-xs font-semibold text-accent uppercase tracking-wider">Previous</span>
                  <span className="mt-1 block text-sm font-medium text-text group-hover:text-primary line-clamp-1 transition">
                    ← {previousPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="group max-w-[45%] text-right ml-auto">
                  <span className="block text-xs font-semibold text-accent uppercase tracking-wider">Next</span>
                  <span className="mt-1 block text-sm font-medium text-text group-hover:text-primary line-clamp-1 transition">
                    {nextPost.title} →
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="mt-10 lg:mt-0 space-y-6">
            {toc.length > 0 && (
              <div className="hidden lg:block lg:sticky lg:top-24 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/5 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">On this page</p>
                <TableOfContents items={toc} />
              </div>
            )}

            <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/5 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">More in {post.category}</p>
              <ol className="mt-3 space-y-2.5 text-xs sm:text-sm">
                {categoryPosts.map((item, index) => (
                  <li key={item.slug}>
                    <Link
                      to={`/blog/${item.slug}`}
                      className={`flex gap-2.5 transition hover:text-primary ${
                        item.slug === post.slug ? "font-semibold text-primary" : "text-text/70"
                      }`}
                    >
                      <span className="text-text/40">{String(index + 1).padStart(2, "0")}</span>
                      <span className="line-clamp-1">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-slate-200/40 dark:border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Recommendations</p>
            <h2 className="mt-1 text-2xl font-bold text-text">Related posts</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/5 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-accent">{relatedPost.technology}</p>
                  <h3 className="mt-2 text-base font-bold text-text group-hover:text-primary transition line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-text/65 line-clamp-3">
                    {relatedPost.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}