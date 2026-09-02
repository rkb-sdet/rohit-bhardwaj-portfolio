import Projects from "../components/Projects";

function ProjectsPage() {
  return (
    <main className="pt-16">
      <Projects featuredOnly={false} />
    </main>
  );
}

export default ProjectsPage;