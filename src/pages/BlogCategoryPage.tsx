import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogPosts, getCategoryFromSlug } from "../data/blog";

export default function BlogCategoryPage() {
  const { category: categorySlug = "" } = useParams<{ category: string }>();
  const category = getCategoryFromSlug(categorySlug);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");

  useEffect(() => {
    if (category) document.title = `${category} Articles | Rohit Bhardwaj`;
  }, [category]);

  const posts = useMemo(() => blogPosts
    .filter((post) => post.category === category || post.technology === category)
    .filter((post) => `${post.title} ${post.summary} ${post.tags.join(" ")}`.toLowerCase().includes(search.toLowerCase()))
    .sort((first, second) => sort === "latest" ? second.date.localeCompare(first.date) : first.date.localeCompare(second.date)), [category, search, sort]);

  if (!category) {
    return <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center"><div><h1 className="text-4xl font-bold text-primary">Category not found</h1><Link to="/blog" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white">Back to blog</Link></div></main>;
  }

  return (
    <main className="min-h-screen bg-background px-4 py-24 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link to="/blog" className="font-semibold text-primary hover:text-secondary">← All articles</Link>
        <header className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Topic archive</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-primary sm:text-7xl">{category}</h1>
          <p className="mt-5 text-lg leading-8 text-text/70">Practical notes, examples, and patterns about {category}. {posts.length} article{posts.length === 1 ? "" : "s"} in this archive.</p>
        </header>
        <div className="mt-10 flex flex-wrap gap-3">
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={`Search ${category} articles...`} className="min-w-[min(100%,20rem)] flex-1 rounded-xl border border-primary/20 bg-background px-4 py-3 text-text outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <select value={sort} onChange={(event) => setSort(event.target.value as "latest" | "oldest")} className="rounded-xl border border-primary/20 bg-background px-4 py-3 text-text outline-none focus:border-primary"><option value="latest">Latest first</option><option value="oldest">Oldest first</option></select>
        </div>
        {posts.length > 0 ? <div className="mt-10 grid gap-8 md:grid-cols-2">{posts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}</div> : <div className="mt-10 rounded-2xl border border-dashed border-primary/30 p-10 text-center text-text/70">No articles match this search.</div>}
      </div>
    </main>
  );
}
