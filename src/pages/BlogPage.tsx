import { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogFilters from "../components/BlogFilters";
import TechnologyCard from "../components/TechnologyCard";
import { blogPosts } from "../data/blog";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");
  const filteredPosts = useMemo(() => blogPosts
    .filter((post) => category === "All" || post.technology === category || post.category === category)
    .filter((post) => technology === "All" || post.technology === technology)
    .filter((post) => `${post.title} ${post.summary} ${post.category} ${post.technology} ${post.tags.join(" ")}`.toLowerCase().includes(search.toLowerCase()))
    .sort((first, second) => sort === "latest" ? second.date.localeCompare(first.date) : first.date.localeCompare(second.date)), [search, category, technology, sort]);
  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const technologyGroups = Array.from(new Set(blogPosts.map((post) => post.technology))).map((technology) => ({
    technology,
    posts: blogPosts.filter((post) => post.technology === technology),
  }));

  return (
    <main className="min-h-screen bg-background px-4 py-24 text-text sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-accent/80">Journal</p>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">My Blog</h1>
        <p className="mt-4 text-lg leading-8 text-text/70">Notes on frontend development, testing, and building better products.</p>
      </div>

      <div className="mx-auto max-w-6xl">
        <BlogFilters search={search} category={category} technology={technology} sort={sort} posts={blogPosts} onSearchChange={setSearch} onCategoryChange={setCategory} onTechnologyChange={setTechnology} onSortChange={setSort} />

        {!search && category === "All" && technology === "All" ? (
          <section className="mt-12">
            <div className="mb-6"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Browse by technology</p><h2 className="mt-2 text-2xl font-bold text-primary">Choose your track</h2></div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{technologyGroups.map((group, index) => <TechnologyCard key={group.technology} technology={group.technology} posts={group.posts} index={index} />)}</div>
          </section>
        ) : null}

        {featuredPosts.length > 0 && !search && category === "All" && technology === "All" ? (
          <section className="mt-12">
            <div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Start here</p><h2 className="mt-2 text-2xl font-bold text-primary">Featured articles</h2></div><span className="text-sm text-text/55">{featuredPosts.length} highlighted</span></div>
            <div className="grid gap-8 md:grid-cols-2">{featuredPosts.slice(0, 3).map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}</div>
          </section>
        ) : null}

        <section className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Library</p><h2 className="mt-2 text-2xl font-bold text-primary">All articles</h2></div><span className="text-sm text-text/55">{filteredPosts.length} found</span></div>
          {filteredPosts.length > 0 ? <div className="grid gap-8 md:grid-cols-2">{filteredPosts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}</div> : <div className="rounded-2xl border border-dashed border-primary/30 p-10 text-center"><h2 className="text-2xl font-bold text-secondary">No articles match that search</h2><p className="mt-3 text-text/70">Try another keyword or reset your filters.</p><button type="button" onClick={() => { setSearch(""); setCategory("All"); setTechnology("All"); }} className="mt-6 rounded-lg bg-primary px-5 py-3 font-semibold text-white">Reset filters</button></div>}
        </section>
      </div>
    </main>
  );
}
