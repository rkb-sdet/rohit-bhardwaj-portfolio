import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blog";
import { getReadingTime, getTechnologySlug } from "../data/blog";

type BlogCardProps = {
  post: BlogPost;
  index: number;
};

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <article className="group flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-primary/15 bg-primary/5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative flex h-40 items-end overflow-hidden bg-gradient-to-br from-primary via-secondary to-slate-900 p-6">
          {post.coverImage ? <img src={post.coverImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" /> : null}
          <span className="absolute right-5 top-5 text-5xl font-black text-white/15">{String(index + 1).padStart(2, "0")}</span>
          <div className="relative z-10 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            <span>{post.category}</span>
            <Link to={`/blog/technology/${getTechnologySlug(post.technology)}`} className="text-white/60 underline-offset-4 hover:underline">{post.technology}</Link>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 text-sm text-text/55">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
            <span>{getReadingTime(post)}</span>
          </div>
          <Link to={`/blog/${post.slug}`} className="mt-4 block text-2xl font-bold text-secondary hover:text-primary">{post.title}</Link>
          <p className="mt-3 leading-7 text-text/75">{post.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-primary/20 px-3 py-1 text-xs text-primary">#{tag}</span>)}
          </div>
          <Link to={`/blog/${post.slug}`} className="mt-auto pt-8 font-semibold text-primary">Read article <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
  );
}
