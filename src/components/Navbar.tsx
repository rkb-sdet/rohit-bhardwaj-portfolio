import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll spy and blur intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== "/") return;

      const sections = ["home", "about", "skills", "github", "projects", "contact"];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle deep-link scrolling across routes
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  }, [location]);

  const handleNavClick = (link: string) => {
    setIsOpen(false);

    if (link === "home") {
      setActive("home");
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (location.pathname === "/") {
      const el = document.getElementById(link);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActive(link);
      }
    } else {
      navigate(`/#${link}`);
    }
  };

  const triggerCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        ctrlKey: true,
        bubbles: true,
      })
    );
  };

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-2xl sm:rounded-full border transition-all duration-300 px-3.5 py-2 sm:px-6 sm:py-3 flex items-center justify-between shadow-md ${
          scrolled
            ? "border-primary/20 bg-background/85 shadow-primary/5 backdrop-blur-xl"
            : "border-slate-200/60 dark:border-white/10 bg-background/70 backdrop-blur-md"
        }`}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActive("home");
          }}
          className="group flex items-center gap-2 cursor-pointer text-base sm:text-lg font-bold tracking-tight shrink-0"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
            Rohit Bhardwaj
          </span>
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-1.5 rounded-full bg-slate-100/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 p-1 backdrop-blur-sm">
          {navItems.map((link) => {
            const isCurrent = location.pathname === "/" && active === link;
            return (
              <button
                key={link}
                type="button"
                onClick={() => handleNavClick(link)}
                className={`relative px-4 py-1.5 text-sm font-medium capitalize rounded-full transition-all duration-200 ${
                  isCurrent
                    ? "bg-primary text-white shadow-sm shadow-primary/40"
                    : "text-text/75 hover:text-text hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {link}
              </button>
            );
          })}

          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
              location.pathname.startsWith("/blog")
                ? "bg-primary text-white shadow-sm shadow-primary/40"
                : "text-text/75 hover:text-text hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            Blog
          </Link>
        </div>

        {/* Action Controls & Mobile Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Command Palette Trigger Button */}
          <button
            type="button"
            onClick={triggerCommandPalette}
            className="flex items-center gap-1.5 rounded-full border border-slate-200/70 dark:border-white/10 bg-slate-100/60 dark:bg-white/5 px-2.5 py-1 text-xs text-text/70 hover:border-primary/40 hover:text-primary transition"
            title="Search or jump to (Ctrl+K)"
          >
            <svg
              className="h-3.5 w-3.5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-mono text-[10px] hidden sm:inline-block">Ctrl K</span>
          </button>

          {/* Theme Switcher */}
          <div className="p-0.5 rounded-full border border-slate-200/60 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 scale-90 sm:scale-100">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden rounded-full p-1.5 text-text/80 hover:text-primary hover:bg-primary/10 border border-slate-200/50 dark:border-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="pointer-events-auto fixed inset-x-3 top-16 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-background/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col space-y-1.5">
            {navItems.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`w-full rounded-xl px-3.5 py-2 text-left text-sm font-medium capitalize transition-all ${
                    location.pathname === "/" && active === link
                      ? "bg-primary text-white shadow-sm"
                      : "text-text/80 hover:bg-primary/10"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={`block w-full rounded-xl px-3.5 py-2 text-left text-sm font-medium transition-all ${
                  location.pathname.startsWith("/blog")
                    ? "bg-primary text-white shadow-sm"
                    : "text-text/80 hover:bg-primary/10"
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;