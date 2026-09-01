function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "React + TailwindCSS + TypeScript", link: "#" },
    { title: "E-commerce App", desc: "Next.js + Stripe Integration", link: "#" },
    { title: "Chat Application", desc: "Socket.io + Node.js", link: "#" },
  ];

  return (
    <section id="projects" className="min-h-screen bg-background text-text px-6 py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-secondary mb-2">{project.title}</h3>
            <p className="text-text mb-4">{project.desc}</p>
            <a
              href={project.link}
              className="bg-primary text-text px-4 py-2 rounded hover:bg-secondary transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
