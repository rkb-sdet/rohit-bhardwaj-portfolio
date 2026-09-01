import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BlogPage from "./pages/BlogPage";
import BlogForm from "./pages/BlogForm";
import BlogPost from "./pages/BlogPost";

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
                <section id="about" className="h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-secondary">About Section</h1>
                </section>
                <Projects />
                <Contact />
              </>
            }
          />

          {/* Blog Page */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/add-blog" element={<BlogForm />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
