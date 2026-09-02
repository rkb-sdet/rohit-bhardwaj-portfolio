import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
          <h1 className="mt-3 text-4xl font-bold text-primary">Project not found</h1>
          <Link to="/#projects" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white">Back to projects</Link>
        </div>
      </main>
    );
  }

  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="bg-background px-6 py-24 text-text">
      <article className="mx-auto max-w-6xl">
        <Link to="/#projects" className="font-semibold text-primary hover:text-secondary">← Back to projects</Link>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{project.number} / {project.category}</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-primary sm:text-7xl">{project.title}</h1>
            <p className="mt-6 text-xl leading-8 text-text/75">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-primary/20 px-3 py-1 text-sm font-semibold text-primary">{technology}</span>)}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-secondary">View on GitHub ↗</a>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-primary/30 px-5 py-3 font-semibold text-primary hover:bg-primary/10">Open live demo ↗</a>
            </div>
          </div>
          <img src={project.image} alt={`${project.title} project preview`} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-primary/15" />
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-primary/15 bg-primary/5 p-6 sm:p-8"><h2 className="text-2xl font-bold text-secondary">What it includes</h2><ul className="mt-5 space-y-3 text-text/75">{project.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul></section>
          <section className="rounded-2xl border border-secondary/15 bg-secondary/5 p-6 sm:p-8"><h2 className="text-2xl font-bold text-secondary">The challenge</h2><p className="mt-5 leading-7 text-text/75">{project.challenge}</p><h3 className="mt-7 font-bold text-primary">The approach</h3><p className="mt-2 leading-7 text-text/75">{project.solution}</p></section>
        </div>

        <nav className="mt-16 flex justify-between gap-4 border-t border-primary/15 pt-8" aria-label="Project navigation">
          <Link to={`/projects/${previous.slug}`} className="font-semibold text-primary hover:text-secondary">← {previous.title}</Link>
          <Link to={`/projects/${next.slug}`} className="text-right font-semibold text-primary hover:text-secondary">{next.title} →</Link>
        </nav>
      </article>
    </main>
  );
}

export default ProjectDetails;