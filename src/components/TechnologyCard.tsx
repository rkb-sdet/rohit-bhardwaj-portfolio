import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blog";
import { getTechnologySlug } from "../data/blog";

type TechnologyCardProps = {
  technology: string;
  posts: BlogPost[];
  index: number;
};

export default function TechnologyCard({ technology, posts, index }: TechnologyCardProps) {
  return (
    <Link to={`/blog/technology/${getTechnologySlug(technology)}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl border border-primary/15 bg-primary/5 p-6 transition duration-300 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10">
        <span className="absolute right-5 top-3 text-6xl font-black text-primary/10">{String(index + 1).padStart(2, "0")}</span>
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Technology archive</p>
          <h3 className="mt-3 text-2xl font-bold text-secondary">{technology}</h3>
          <p className="mt-3 text-sm leading-6 text-text/70">{posts.length} article{posts.length === 1 ? "" : "s"} dedicated to {technology}.</p>
          <span className="mt-6 inline-block font-semibold text-primary">Open index →</span>
        </div>
      </article>
    </Link>
  );
}