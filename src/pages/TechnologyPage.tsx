import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "../components/CodeBlock";
import { blogPosts, getReadingTime, getTechnologyFromSlug, getTechnologySlug } from "../data/blog";

export default function TechnologyPage() {
  const { technology: technologySlug = "", slug } = useParams<{ technology: string; slug?: string }>();
  const navigate = useNavigate();
  const technology = getTechnologyFromSlug(technologySlug);
  const posts = useMemo(() => blogPosts.filter((post) => post.technology === technology), [technology]);
  const selectedPost = posts.find((post) => post.slug === slug) ?? posts[0];

  useEffect(() => {
    if (technology) document.title = `${technology} Blog | Rohit Bhardwaj`;
  }, [technology]);

  if (!technology || !selectedPost) {
    return <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center"><div><h1 className="text-4xl font-bold text-primary">Technology archive not found</h1><Link to="/blog" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white">Back to blog</Link></div></main>;
  }

  const markdownComponents = { code: CodeBlock };

  return (
    <main className="min-h-screen bg-background px-4 py-24 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link to="/blog" className="font-semibold text-primary hover:text-secondary">← All technologies</Link>
        <header className="mt-10 max-w-4xl border-b border-primary/15 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Dedicated technology index</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-primary sm:text-7xl">{technology}</h1>
          <p className="mt-5 text-lg leading-8 text-text/70">A focused collection of {posts.length} article{posts.length === 1 ? "" : "s"} about {technology}, from fundamentals to practical workflows.</p>
        </header>

        <div className="mt-10 lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="hidden rounded-2xl border border-primary/15 bg-primary/5 p-5 lg:block">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{technology} index</p>
              <ol className="mt-5 space-y-3 border-l border-primary/20 pl-4 text-sm">
                {posts.map((post, index) => <li key={post.slug}><button type="button" onClick={() => navigate(`/blog/technology/${getTechnologySlug(technology)}/${post.slug}`)} className={`flex w-full gap-3 text-left transition hover:text-primary ${selectedPost.slug === post.slug ? "font-bold text-primary" : "text-text/70"}`}><span>{String(index + 1).padStart(2, "0")}</span><span>{post.title}</span></button></li>)}
              </ol>
            </div>
            <details className="rounded-2xl border border-primary/15 bg-primary/5 p-5 lg:hidden">
              <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.18em] text-accent">{technology} index <span className="float-right text-primary">⌄</span></summary>
              <ol className="mt-5 space-y-3 border-l border-primary/20 pl-4 text-sm">
                {posts.map((post, index) => <li key={post.slug}><button type="button" onClick={() => navigate(`/blog/technology/${getTechnologySlug(technology)}/${post.slug}`)} className={`flex w-full gap-3 text-left transition hover:text-primary ${selectedPost.slug === post.slug ? "font-bold text-primary" : "text-text/70"}`}><span>{String(index + 1).padStart(2, "0")}</span><span>{post.title}</span></button></li>)}
              </ol>
            </details>
          </aside>

          <article className="mt-10 min-w-0 lg:mt-0">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-text/55"><span className="font-semibold text-secondary">{selectedPost.category}</span><span>•</span><time dateTime={selectedPost.date}>{new Date(selectedPost.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time><span>•</span><span>{getReadingTime(selectedPost)}</span></div>
            <h2 className="text-4xl font-black tracking-tight text-secondary sm:text-5xl">{selectedPost.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-text/70">{selectedPost.summary}</p>
            <div className="markdown-content mt-10"><ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{selectedPost.content}</ReactMarkdown></div>
            <Link to={`/blog/${selectedPost.slug}`} className="mt-10 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-secondary">Open standalone article ↗</Link>
          </article>
        </div>
      </div>
    </main>
  );
}