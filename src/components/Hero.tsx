function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-background text-text px-6"
    >
      {/* Intro Heading */}
      <h1 className="text-5xl font-bold text-primary mb-4">
        Hi, I'm Rohit Bhardwaj
      </h1>

      {/* Subtext */}
      <p className="text-lg text-secondary mb-6 max-w-xl text-center">
        I build modern, responsive web apps with React, TailwindCSS, and TypeScript.
      </p>

      {/* CTA Button */}
      <a
        href="#projects"
        className="bg-primary text-text px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
