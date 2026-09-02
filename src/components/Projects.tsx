import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const filters = ["All", "Frontend", "Full Stack", "Testing"] as const;

type ProjectsProps = {
  featuredOnly?: boolean;
};

function Projects({ featuredOnly = true }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const projectCollection = featuredOnly ? projects.filter((project) => project.featured) : projects;
  const visibleProjects = activeFilter === "All"
    ? projectCollection
    : projectCollection.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="bg-background px-6 py-24 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">Selected work</p>
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              {featuredOnly ? "Featured projects" : "All projects"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-text/70">Explore the thinking, tools, and decisions behind each build.</p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter projects">
            {filters.map((filter) => (
              <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? "border-primary bg-primary text-white" : "border-primary/20 text-primary hover:bg-primary/10"}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article key={project.slug} className={`group overflow-hidden rounded-2xl border border-primary/15 bg-primary/5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}>
              <div className={`relative overflow-hidden bg-slate-900 ${index === 0 ? "min-h-72 lg:min-h-full" : "h-64"}`}>
                <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-[0.15em] text-primary">{project.number}</span>
                <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">{project.category}</span>
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-secondary sm:text-3xl">{project.title}</h3>
                <p className="mt-3 leading-7 text-text/75">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-accent/25 px-3 py-1 text-xs font-semibold text-accent">{technology}</span>)}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                  <Link to={`/projects/${project.slug}`} className="rounded-lg bg-primary px-4 py-3 font-semibold text-white transition hover:bg-secondary">Case study ↗</Link>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-semibold text-primary transition hover:text-secondary">GitHub</a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-semibold text-primary transition hover:text-secondary">Live demo ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {featuredOnly ? (
          <div className="mt-10 text-center">
            <Link to="/projects" className="inline-flex rounded-lg border border-primary/30 px-5 py-3 font-semibold text-primary transition hover:bg-primary/10">
              View all projects →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Projects;
