import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import BlogPage from "./pages/BlogPage";
import BlogForm from "./pages/BlogForm";
import BlogPost from "./pages/BlogPost";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectsPage from "./pages/ProjectsPage";
import BlogCategoryPage from "./pages/BlogCategoryPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-text">
        <Navbar />
        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section id="about" className="min-h-screen bg-background px-6 py-24 text-text">
                  <div className="mx-auto max-w-6xl">
                    <div className="mb-14 max-w-2xl">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                        Behind the work
                      </p>
                      <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        About me
                      </h2>
                      <p className="mt-5 text-lg leading-8 text-text/75">
                        I am a frontend-focused developer who enjoys turning thoughtful ideas into
                        fast, accessible, and polished digital experiences.
                      </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-2">
                      <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 shadow-sm sm:p-8">
                        <div className="mb-8 flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
                            🎓
                          </span>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                              01
                            </p>
                            <h3 className="text-2xl font-bold text-secondary">Education</h3>
                          </div>
                        </div>

                        <div className="space-y-8 border-l-2 border-primary/25 pl-6">
                          <div className="relative">
                            <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                            <p className="text-sm font-medium text-accent">Academic foundation</p>
                            <h4 className="mt-1 text-xl font-semibold text-text">
                              Computer Science &amp; Web Development
                            </h4>
                            <p className="mt-2 leading-7 text-text/70">
                              Built a strong foundation in programming, problem solving, and modern
                              web technologies through structured learning and hands-on projects.
                            </p>
                          </div>
                          <div className="relative">
                            <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full bg-secondary ring-4 ring-background" />
                            <p className="text-sm font-medium text-accent">Continuous learning</p>
                            <h4 className="mt-1 text-xl font-semibold text-text">
                              React, TypeScript &amp; UI Engineering
                            </h4>
                            <p className="mt-2 leading-7 text-text/70">
                              Continuing to sharpen my craft through experiments, documentation, and
                              building products that solve real problems.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-secondary/15 bg-secondary/5 p-6 shadow-sm sm:p-8">
                        <div className="mb-8 flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl text-white">
                            💼
                          </span>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                              02
                            </p>
                            <h3 className="text-2xl font-bold text-secondary">Career / Work History</h3>
                          </div>
                        </div>

                        <div className="space-y-8 border-l-2 border-secondary/25 pl-6">
                          <div className="relative">
                            <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full bg-secondary ring-4 ring-background" />
                            <p className="text-sm font-medium text-accent">Current focus</p>
                            <h4 className="mt-1 text-xl font-semibold text-text">Frontend Developer</h4>
                            <p className="mt-2 leading-7 text-text/70">
                              Designing and building responsive interfaces with React, TailwindCSS,
                              and TypeScript, from first sketch to finished experience.
                            </p>
                          </div>
                          <div className="relative">
                            <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                            <p className="text-sm font-medium text-accent">Selected experience</p>
                            <h4 className="mt-1 text-xl font-semibold text-text">Independent Projects</h4>
                            <p className="mt-2 leading-7 text-text/70">
                              Created portfolio, e-commerce, and real-time application concepts to
                              explore practical product development and clean user experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <Projects />
                <Certifications />
                <Contact />
              </>
            }
          />

          {/* Blog Page */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
          <Route path="/blog/technology/:technology/:slug" element={<TechnologyPage />} />
          <Route path="/blog/technology/:technology" element={<TechnologyPage />} />
          <Route path="/add-blog" element={<BlogForm />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
