import { useEffect, useState } from "react";
import heroArtwork from "../assets/hero.png";
import { heroData } from "../data/portfolioData";

function Hero() {
  const {
    badge,
    firstName,
    lastName,
    roles,
    description,
    primaryCta,
    resume,
    socialLinks,
    avatar,
    status,
  } = heroData;

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
  }, [roleIndex, roles]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const cleanId = targetId.replace("#", "");
    const targetElement = document.getElementById(cleanId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-transparent px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:py-28 text-text"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(147,51,234,0.1),transparent_28%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
        <div className="order-last mx-auto max-w-2xl text-center xl:order-first xl:mx-0 xl:text-left">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent" />
            {badge}
          </p>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-primary sm:text-7xl">
            {firstName}
            <span className="block text-secondary">{lastName}</span>
          </h1>

          <p
            className="mt-6 min-h-[2.25rem] text-2xl font-semibold text-text sm:min-h-[2.75rem] sm:text-3xl"
            aria-live="polite"
            aria-label={`Role: ${roles[roleIndex]}`}
          >
            <span>{visibleRole}</span>
            <span
              className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-accent align-middle sm:h-8"
              aria-hidden="true"
            />
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-text/70">
            {description}
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:gap-4 xl:mx-0">
            <a
              href={primaryCta.link}
              onClick={(e) => handleSmoothScroll(e, primaryCta.link)}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-1 hover:bg-secondary"
            >
              {primaryCta.text}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${resume.fileName}`}
              download
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-primary/30 px-5 py-3 font-semibold text-primary transition duration-200 hover:-translate-y-1 hover:bg-primary/10"
            >
              {resume.text}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-text/60 xl:justify-start">
            <span>Find me online</span>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-primary transition hover:text-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="order-first relative mx-auto w-full max-w-sm sm:max-w-md xl:order-last">
          <div className="absolute -inset-4 sm:-inset-5 rounded-[2.2rem] border border-primary/15 bg-primary/5 rotate-6 blur-[1px]" />
          <div className="absolute -inset-4 sm:-inset-5 rounded-[2.2rem] border border-secondary/15 bg-secondary/5 -rotate-6 blur-[1px]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 dark:border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-800">
              <img
                src={avatar}
                alt={`${firstName} ${lastName}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <img
                src={heroArtwork}
                alt=""
                className="pointer-events-none absolute -bottom-8 -right-10 w-48 opacity-25"
              />
            </div>
          </div>
          <div className="relative mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            {status}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;