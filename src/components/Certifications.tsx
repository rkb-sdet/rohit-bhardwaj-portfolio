import { certificationsData } from "../data/portfolioData";

function Certifications() {
  const { badge, title, description, items } = certificationsData;

  return (
    <section id="certifications" className="scroll-mt-20 bg-transparent px-6 py-24 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
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

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((certificate) => (
            <article
              key={certificate.title}
              className="flex flex-col justify-between gap-8 rounded-2xl border border-primary/15 bg-primary/5 p-6 shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:p-8"
            >
              <div>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white shadow-sm">
                    ✓
                  </span>
                  <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {certificate.year}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary">{certificate.title}</h3>
                <p className="mt-2 text-text/70">Issued by {certificate.issuer}</p>
              </div>

              <a
                href={certificate.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-secondary"
              >
                Verify certificate
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;