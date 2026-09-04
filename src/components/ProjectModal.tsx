import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/portfolioData";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dimmed Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 my-auto">
        {/* Header Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-text/70 transition-all hover:scale-110 hover:text-text"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Content Scroll Area */}
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          {/* Top Metadata */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary border border-primary/20">
              {project.category}
            </span>
            <span className="text-xs text-text/50 font-mono">
              #{project.number}
            </span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-text">
            {project.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-text/80">
            {project.description}
          </p>

          {/* Project Preview Image */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Highlights & Architecture Details */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
                The Challenge
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-text/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                The Approach & Solution
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-text/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white dark:bg-slate-900 px-2.5 py-1 text-xs font-medium text-text/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/50 dark:border-white/10 pt-5">
            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs sm:text-sm font-semibold text-white transition hover:bg-secondary shadow-md shadow-primary/20"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-text hover:border-primary/40 hover:text-primary transition"
              >
                <span>View Source</span>
                <span>↗</span>
              </a>
            </div>

            <Link
              to={`/projects/${project.slug}`}
              onClick={onClose}
              className="text-xs sm:text-sm font-semibold text-primary hover:underline"
            >
              Full Case Study Page →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}