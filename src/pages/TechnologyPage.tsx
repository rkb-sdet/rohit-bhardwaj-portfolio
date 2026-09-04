import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "../components/CodeBlock";
import { blogPosts, getReadingTime, getTechnologyFromSlug, getTechnologySlug } from "../data/blog";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function TechnologyPage() {
  const { technology: technologySlug = "", slug } = useParams<{ technology: string; slug?: string }>();
  const navigate = useNavigate();
  const technology = getTechnologyFromSlug(technologySlug);
  const posts = useMemo(() => blogPosts.filter((post) => post.technology === technology), [technology]);
  const selectedPost = posts.find((post) => post.slug === slug) ?? posts[0];

  useEffect(() => {
    if (technology) document.title = `${technology} Blog | Rohit Bhardwaj`;
  }, [technology]);

  // Strip duplicate h1 from markdown body if it repeats the article title
  const sanitizedContent = useMemo(() => {
    if (!selectedPost?.content) return "";
    return selectedPost.content.replace(/^#\s+[^\n]+(\r?\n)+/, "");
  }, [selectedPost]);

  if (!technology || !selectedPost) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6 pt-32 pb-20 text-center">
        <div className="max-w-md rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/5 p-8 shadow-xl backdrop-blur-md">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Notice</p>
          <h1 className="text-2xl font-bold text-text">Technology archive not found</h1>
          <Link
            to="/blog"
            className="mt-6 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-secondary"
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
      <div className="mx-auto max-w-7xl">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-text/60">
          <Link to="/blog" className="hover:text-primary transition">
            Blog
          </Link>
          <span>/</span>
          <span className="text-primary capitalize">{technology}</span>
        </div>

        {/* Header */}
        <header className="mt-4 max-w-4xl border-b border-slate-200/40 dark:border-white/10 pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Dedicated track</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            {technology}
          </h1>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-text/70">
            A focused collection of {posts.length} article{posts.length === 1 ? "" : "s"} about {technology}, from fundamentals to practical workflows.
          </p>
        </header>

        {/* Documentation Layout */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
          {/* Left Sidebar Index */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            {/* Desktop View */}
            <div className="hidden rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/5 p-5 backdrop-blur-md lg:block">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
                {technology} Index
              </p>
              <div className="space-y-1.5">
                {posts.map((post, index) => {
                  const isActive = selectedPost.slug === post.slug;
                  return (
                    <button
                      key={post.slug}
                      type="button"
                      onClick={() => navigate(`/blog/technology/${getTechnologySlug(technology)}/${post.slug}`)}
                      className={`flex w-full items-start gap-2.5 rounded-xl px-3 py-2.5 text-left text-xs sm:text-sm font-medium transition-all ${
                        isActive
                          ? "bg-primary text-white shadow-sm shadow-primary/30"
                          : "text-text/70 hover:bg-slate-200/40 dark:hover:bg-white/5 hover:text-text"
                      }`}
                    >
                      <span className={`text-xs ${isActive ? "text-white/80" : "text-text/40"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="line-clamp-2">{post.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile View Accordion */}
            <details className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/5 p-4 backdrop-blur-md lg:hidden">
              <summary className="cursor-pointer list-none text-xs font-bold uppercase tracking-wider text-accent flex justify-between items-center">
                <span>{technology} Index</span>
                <span className="text-primary text-sm">⌄</span>
              </summary>
              <div className="mt-4 space-y-1.5 border-t border-slate-200/40 dark:border-white/10 pt-3">
                {posts.map((post, index) => {
                  const isActive = selectedPost.slug === post.slug;
                  return (
                    <button
                      key={post.slug}
                      type="button"
                      onClick={() => navigate(`/blog/technology/${getTechnologySlug(technology)}/${post.slug}`)}
                      className={`flex w-full items-start gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-medium transition-all ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-text/70 hover:bg-slate-200/40 dark:hover:bg-white/5"
                      }`}
                    >
                      <span className={isActive ? "text-white/80" : "text-text/40"}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="line-clamp-1">{post.title}</span>
                    </button>
                  );
                })}
              </div>
            </details>
          </aside>

          {/* Right Column: Article Details */}
          <article className="min-w-0 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/20 dark:bg-white/[0.02] p-6 sm:p-9 backdrop-blur-md">
            <header className="border-b border-slate-200/40 dark:border-white/10 pb-6 mb-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <span>{selectedPost.category}</span>
                <span>•</span>
                <time dateTime={selectedPost.date}>
                  {new Date(selectedPost.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{getReadingTime(selectedPost)}</span>
              </div>

              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-text leading-tight">
                {selectedPost.title}
              </h2>

              {selectedPost.summary && (
                <p className="mt-3 text-base text-text/75 leading-relaxed">
                  {selectedPost.summary}
                </p>
              )}
            </header>

            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {sanitizedContent}
              </ReactMarkdown>
            </div>

            <div className="mt-10 border-t border-slate-200/40 dark:border-white/10 pt-6">
              <Link
                to={`/blog/${selectedPost.slug}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-secondary hover:-translate-y-0.5"
              >
                <span>Open standalone article</span>
                <span>↗</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}