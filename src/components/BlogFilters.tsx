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
};

export default function BlogFilters({ search, category, technology, sort, posts, onSearchChange, onCategoryChange, onTechnologyChange, onSortChange }: BlogFiltersProps) {
  const technologies = Array.from(new Set(posts.map((post) => post.technology))).sort();

  return (
    <div className="space-y-5 rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:p-6">
      <label className="block">
        <span className="sr-only">Search articles</span>
        <input value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search title, topic, technology, or tag..." className="w-full rounded-xl border border-primary/20 bg-background px-4 py-3 text-text outline-none transition placeholder:text-text/45 focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </label>
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
      </div>
    </div>
  );
}
