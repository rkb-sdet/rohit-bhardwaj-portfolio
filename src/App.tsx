import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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
import BackgroundEffects from "./components/BackgroundEffects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import GithubStats from "./components/GithubStats";
import ReadingProgress from "./components/ReadingProgress";
import CommandPalette from "./components/CommandPalette";

function App() {
  return (
    <Router basename="/rohit-bhardwaj-portfolio">
      <ScrollToTop />
      <ReadingProgress />
      <CommandPalette />
      <div className="bg-background min-h-screen text-text relative overflow-x-hidden">
        {/* Background Layer */}
        <BackgroundEffects />

        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            {/* Main Landing Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <GithubStats />
                  <Projects />
                  <Certifications />
                  <Contact />
                </>
              }
            />

            {/* Blog & Project Pages */}
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
      </div>
    </Router>
  );
}

export default App;