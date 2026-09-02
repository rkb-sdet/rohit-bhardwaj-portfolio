import { Link } from "react-router-dom";

export type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

type TableOfContentsProps = {
  items: TocItem[];
  mobile?: boolean;
};

export default function TableOfContents({ items, mobile = false }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className={mobile ? "" : "rounded-2xl border border-primary/15 bg-primary/5 p-5"}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">On this page</p>
      <ol className="mt-4 space-y-2 border-l border-primary/20 pl-4 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <Link to={`#${item.id}`} className="text-text/65 transition hover:text-primary">{item.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
