import type { BlogPost } from "../data/blog";
import { blogCategories } from "../data/blog";

const blogFilters = ["All", ...blogCategories] as const;

type BlogFiltersProps = {
  search: string;
  category: string;
  technology: string;
  sort: "latest" | "oldest";
  posts: BlogPost[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTechnologyChange: (value: string) => void;
  onSortChange: (value: "latest" | "oldest") => void;
  onReset: () => void;
};

export default function BlogFilters({ search, category, technology, sort, posts, onSearchChange, onCategoryChange, onTechnologyChange, onSortChange, onReset }: BlogFiltersProps) {
  const technologies = Array.from(new Set(posts.map((post) => post.technology))).sort();
  const hasActiveFilters = Boolean(search || category !== "All" || technology !== "All" || sort !== "latest");

  return (
    <div className="space-y-5 rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:p-6" aria-label="Blog search and filters">
      <div className="relative">
        <span className="sr-only">Search articles</span>
        <input type="search" value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search title, topic, technology, or tag..." className="w-full rounded-xl border border-primary/20 bg-background px-4 py-3 pr-11 text-text outline-none transition placeholder:text-text/45 focus:border-primary focus:ring-2 focus:ring-primary/20" />
        {search && (
          <button type="button" onClick={() => onSearchChange("")} aria-label="Clear article search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-lg leading-none text-text/50 transition hover:bg-primary/10 hover:text-primary">
            ×
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {blogFilters.map((filter) => (
          <button key={filter} type="button" onClick={() => onCategoryChange(filter)} aria-pressed={category === filter} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${category === filter ? "border-primary bg-primary text-white" : "border-primary/20 text-primary hover:bg-primary/10"}`}>
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <select value={technology} onChange={(event) => onTechnologyChange(event.target.value)} className="rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm text-text outline-none focus:border-primary">
          <option value="All">All technologies</option>
          {technologies.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select value={sort} onChange={(event) => onSortChange(event.target.value as "latest" | "oldest")} className="rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm text-text outline-none focus:border-primary">
          <option value="latest">Latest first</option>
          <option value="oldest">Oldest first</option>
        </select>
        {hasActiveFilters && (
          <button type="button" onClick={onReset} className="rounded-lg border border-primary/20 px-3 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10">
            Reset filters
          </button>
        )}
      </div>
    </div>
  );
}
