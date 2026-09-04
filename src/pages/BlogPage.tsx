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

  const filteredPosts = useMemo(
    () =>
      blogPosts
        .filter((post) => category === "All" || post.technology === category || post.category === category)
        .filter((post) => technology === "All" || post.technology === technology)
        .filter((post) =>
          `${post.title} ${post.summary} ${post.category} ${post.technology} ${post.tags.join(" ")}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .sort((first, second) =>
          sort === "latest" ? second.date.localeCompare(first.date) : first.date.localeCompare(second.date)
        ),
    [search, category, technology, sort]
  );

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const technologyGroups = Array.from(new Set(blogPosts.map((post) => post.technology))).map((technology) => ({
    technology,
    posts: blogPosts.filter((post) => post.technology === technology),
  }));

  return (
    <main className="min-h-screen bg-transparent px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8 text-text">
      {/* Header Banner */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Articles &amp; Tutorials
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Engineering Journal
        </h1>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-text/70">
          Notes on frontend engineering, automated testing, and building robust web products.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <BlogFilters
          search={search}
          category={category}
          technology={technology}
          sort={sort}
          posts={blogPosts}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onTechnologyChange={setTechnology}
          onSortChange={setSort}
        />

        {/* Technology Tracks */}
        {!search && category === "All" && technology === "All" ? (
          <section className="mt-12">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Browse by track</p>
                <h2 className="text-xl sm:text-2xl font-bold text-text">Choose your track</h2>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {technologyGroups.map((group, index) => (
                <TechnologyCard
                  key={group.technology}
                  technology={group.technology}
                  posts={group.posts}
                  index={index}
                />
              ))}
            </div>
          </section>
        ) : null}

        {/* Featured Posts */}
        {featuredPosts.length > 0 && !search && category === "All" && technology === "All" ? (
          <section className="mt-14">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Spotlight</p>
                <h2 className="text-xl sm:text-2xl font-bold text-text">Featured articles</h2>
              </div>
              <span className="text-xs text-text/50">{featuredPosts.length} selected</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </section>
        ) : null}

        {/* All Articles */}
        <section className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Library</p>
              <h2 className="text-xl sm:text-2xl font-bold text-text">All articles</h2>
            </div>
            <span className="text-xs text-text/50">{filteredPosts.length} found</span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200/60 dark:border-white/10 p-12 text-center backdrop-blur-sm">
              <h3 className="text-lg font-bold text-text">No articles found</h3>
              <p className="mt-2 text-sm text-text/65">
                Try adjusting your search terms or clearing the selected filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setTechnology("All");
                }}
                className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-secondary"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}