import { aboutData } from "../data/portfolioData";

function About() {
  const { badge, title, summary, cards } = aboutData;

  return (
    <section id="about" className="scroll-mt-20 min-h-screen bg-transparent px-6 py-24 text-text">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            {badge}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-text/75">
            {summary}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.index}
              className={`rounded-2xl border p-6 shadow-sm backdrop-blur-sm sm:p-8 ${
                card.accentColor === "primary"
                  ? "border-primary/15 bg-primary/5"
                  : "border-secondary/15 bg-secondary/5"
              }`}
            >
              <div className="mb-8 flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-xl text-white shadow-sm ${
                    card.accentColor === "primary" ? "bg-primary" : "bg-secondary"
                  }`}
                >
                  {card.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {card.index}
                  </p>
                  <h3 className="text-2xl font-bold text-secondary">{card.title}</h3>
                </div>
              </div>

              <div
                className={`space-y-8 border-l-2 pl-6 ${
                  card.accentColor === "primary" ? "border-primary/25" : "border-secondary/25"
                }`}
              >
                {card.items.map((item) => (
                  <div key={item.heading} className="relative">
                    <span
                      className={`absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full ring-4 ring-background ${
                        card.accentColor === "primary" ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                    <p className="text-sm font-medium text-accent">{item.tag}</p>
                    <h4 className="mt-1 text-xl font-semibold text-text">{item.heading}</h4>
                    <p className="mt-2 leading-7 text-text/70">{item.text}</p>
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

export default About;