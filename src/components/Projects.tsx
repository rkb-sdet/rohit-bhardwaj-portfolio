import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import type { Project, ProjectCategory } from "../data/portfolioData";

type ProjectsProps = {
  featuredOnly?: boolean;
};

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Frontend",
  "Automation Testing",
  "Manual Testing",
  "SQL & Database",
];

function Projects({ featuredOnly = false }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const baseProjects = featuredOnly
    ? projectsData.filter((project) => project.featured)
    : projectsData;

  const filteredProjects = baseProjects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="scroll-mt-20 bg-transparent px-6 py-24 text-text relative">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Featured Work
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Selected Projects
            </h2>
            <p className="mt-4 text-lg leading-8 text-text/75">
              Production-ready applications and technical concepts built with clean design and modular code.
            </p>
          </div>
          {featuredOnly && (
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-secondary"
            >
              Explore all projects
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="mb-10 flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "border border-slate-200/60 dark:border-white/10 bg-slate-100/60 dark:bg-white/5 text-text/70 hover:border-primary/40 hover:text-text"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 dark:border-white/10 bg-slate-100/30 dark:bg-white/[0.03] shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl"
            >
              <div>
                {/* Project Image with Quick View Hover Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Quick View Button on Image Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full bg-white/90 dark:bg-slate-950/90 px-4 py-2 text-xs font-bold text-text shadow-lg hover:scale-105 hover:bg-white transition"
                    >
                      Quick Preview 👁
                    </button>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs font-bold text-accent">
                    <span>{project.number}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-text transition group-hover:text-primary">
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-text/70 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200/60 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-text/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-white/10 px-6 py-4 sm:px-7">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-primary transition hover:text-secondary"
                >
                  Quick View
                </button>
                <div className="flex items-center gap-3">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-xs text-text/60 transition hover:text-text"
                  >
                    Details →
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-text/60 transition hover:text-text"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-text/60 transition hover:text-text"
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Popover Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;