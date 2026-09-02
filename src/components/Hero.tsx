import { useEffect, useState } from "react";
import heroArtwork from "../assets/hero.png";

const roles = [
  "Frontend Developer",
  "QA Engineer",
  "Automation Test Engineer",
  "Analyst",
  "Data Analyst",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleRole, setVisibleRole] = useState("");

  useEffect(() => {
    let characterIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const animateRole = () => {
      const currentRole = roles[roleIndex];
      const nextText = isDeleting
        ? currentRole.slice(0, characterIndex - 1)
        : currentRole.slice(0, characterIndex + 1);

      setVisibleRole(nextText);
      characterIndex += isDeleting ? -1 : 1;

      if (!isDeleting && characterIndex > currentRole.length) {
        isDeleting = true;
        timeoutId = window.setTimeout(animateRole, 1400);
        return;
      }

      if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        timeoutId = window.setTimeout(animateRole, 350);
        return;
      }

      timeoutId = window.setTimeout(animateRole, isDeleting ? 55 : 90);
    };

    timeoutId = window.setTimeout(animateRole, 250);
    return () => window.clearTimeout(timeoutId);
  }, [roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-4 py-20 text-text sm:px-6 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(147,51,234,0.1),transparent_28%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
        <div className="order-last mx-auto max-w-2xl text-center xl:order-first xl:mx-0 xl:text-left">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Hello, I am
          </p>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-primary sm:text-7xl">
            Rohit
            <span className="block text-secondary">Bhardwaj</span>
          </h1>

          <p
            className="mt-6 min-h-[2.25rem] text-2xl font-semibold text-text sm:min-h-[2.75rem] sm:text-3xl"
            aria-live="polite"
            aria-label={`Role: ${roles[roleIndex]}`}
          >
            <span>{visibleRole}</span>
            <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-accent align-middle sm:h-8" aria-hidden="true" />
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-text/70">
            I build modern, responsive web apps with React, TailwindCSS, and TypeScript,
            balancing thoughtful design with reliable engineering.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:gap-4 xl:mx-0">
            <a
              href="#projects"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-1 hover:bg-secondary"
            >
              View my work
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/rohit-bhardwaj-resume.html"
              download
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-primary/30 px-5 py-3 font-semibold text-primary transition hover:-translate-y-1 hover:bg-primary/10"
            >
              Download resume
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-text/60 xl:justify-start">
            <span>Find me online</span>
            <a href="https://github.com/rohit-bhardwaj" target="_blank" rel="noreferrer" className="text-primary transition hover:text-secondary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rohit-bhardwaj/" target="_blank" rel="noreferrer" className="text-primary transition hover:text-secondary">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="order-first relative mx-auto w-full max-w-md xl:order-last">
          <div className="absolute -inset-5 rounded-[2rem] border border-primary/10 bg-primary/5 rotate-6" />
          <div className="absolute -inset-5 rounded-[2rem] border border-secondary/10 bg-secondary/5 -rotate-6" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900 p-3 shadow-2xl shadow-primary/20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
                alt="Professional developer portrait"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <img src={heroArtwork} alt="" className="absolute -bottom-8 -right-10 w-48 opacity-25" />
            </div>
          </div>
          <div className="relative mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for projects
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
