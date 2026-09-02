import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-background text-text px-6 py-4 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">Rohit Bhardwaj</div>

        <div className="flex items-center gap-8">
          {/* Links */}
          <ul
            className={`md:flex md:space-x-6 list-none transition-all duration-300 ${
              isOpen
                ? "absolute top-16 left-0 w-full bg-background flex flex-col items-center space-y-4 py-4"
                : "hidden md:flex"
            }`}
          >
            {["home", "about", "projects", "contact"].map((link) => (
              <li key={link}>
                <Link
                  to={link === "home" ? "/" : `/#${link}`}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-secondary ${
                    active === link ? "text-secondary font-semibold" : ""
                  }`}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}

            {/* Blog Link (Separate Page) */}
            <li>
              <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-secondary">
                Blog
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
          {/* Hamburger Icon (Mobile) */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-accent transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
