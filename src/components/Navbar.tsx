import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle"; // 👈 Import toggle button

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPos = window.scrollY + 100;

      for (let section of sections) {
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

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden focus:outline-none text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

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
              <a
                href={`#${link}`}
                className={`hover:text-secondary ${
                  active === link ? "text-secondary font-semibold" : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}

          {/* Blog Link (Separate Page) */}
          <li>
            <a href="/blog" className="hover:text-secondary">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
