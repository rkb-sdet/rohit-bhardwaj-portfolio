import { useState } from "react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const badge = skillsData?.badge ?? "Capabilities & Toolkit";
  const title = skillsData?.title ?? "Tech Stack & Skills";
  const description = skillsData?.description ?? "Technologies & tools";
  const categories = skillsData?.categories ?? [];

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredCategories =
    activeCategory === "All"
      ? categories
      : categories.filter((c) => c.category === activeCategory);

  const allSkills = categories.flatMap((cat) => cat.skills);

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/30";
      case "Proficient":
        return "bg-primary/10 text-primary border-primary/30";
      default:
        return "bg-secondary/10 text-secondary border-secondary/30";
    }
  };

  return (
    <section id="skills" className="scroll-mt-20 bg-transparent px-6 py-24 text-text relative">
      {/* 1. Injected Keyframes for Marquee & Glow (Zero Tailwind config dependency) */}
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          display: flex;
          width: max-content;
          animation: scrollMarquee 28s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            {badge}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-text/75">
            {description}
          </p>
        </div>

        {/* 2. Seamless Marquee Strip */}
        <div className="relative mb-14 w-full overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/[0.02] py-4 backdrop-blur-md">
          {/* Edge Blur Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

          {/* Scrolling track with duplicate lists for infinite seamless loop */}
          <div className="animate-ticker gap-4">
            {[...allSkills, ...allSkills].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex shrink-0 items-center gap-2.5 rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 px-4 py-2 text-xs font-semibold text-text shadow-sm backdrop-blur-md transition hover:border-primary/50"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === "All"
                ? "bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]"
                : "border border-slate-200/60 dark:border-white/10 bg-slate-100/40 dark:bg-white/5 text-text/70 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-text"
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveCategory(cat.category)}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.category
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]"
                  : "border border-slate-200/60 dark:border-white/10 bg-slate-100/40 dark:bg-white/5 text-text/70 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-text"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* 4. Interactive Cards Grid with Visible Neon Glow */}
        <div className="space-y-10">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md"
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-slate-200/40 dark:border-white/10 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-text">
                  {group.category}
                </h3>
                <p className="text-xs sm:text-sm text-text/60">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-between rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/50 p-4 text-center backdrop-blur-md cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_25px_rgba(37,99,235,0.28)] dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                  >
                    <span className="mb-2 text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                      {skill.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-text line-clamp-1 transition-colors group-hover:text-primary">
                      {skill.name}
                    </span>
                    <span
                      className={`mt-3 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getLevelBadgeClass(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}