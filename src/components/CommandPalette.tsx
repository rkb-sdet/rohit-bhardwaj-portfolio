import { useEffect, useState, useMemo, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { projectsData, heroData } from "../data/portfolioData";

type ActionItem = {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Socials" | "Actions";
  shortcut?: string;
  perform: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionJump = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const actions: ActionItem[] = useMemo(() => {
    const baseActions: ActionItem[] = [
      {
        id: "nav-home",
        title: "Go to Home",
        category: "Navigation",
        shortcut: "H",
        perform: () => {
          setIsOpen(false);
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
      },
      {
        id: "nav-about",
        title: "Go to About",
        category: "Navigation",
        shortcut: "A",
        perform: () => handleSectionJump("about"),
      },
      {
        id: "nav-skills",
        title: "Go to Skills & Toolkit",
        category: "Navigation",
        shortcut: "S",
        perform: () => handleSectionJump("skills"),
      },
      {
        id: "nav-github",
        title: "Go to GitHub Activity",
        category: "Navigation",
        shortcut: "G",
        perform: () => handleSectionJump("github"),
      },
      {
        id: "nav-projects",
        title: "Go to Projects",
        category: "Navigation",
        shortcut: "P",
        perform: () => handleSectionJump("projects"),
      },
      {
        id: "nav-contact",
        title: "Go to Contact",
        category: "Navigation",
        shortcut: "C",
        perform: () => handleSectionJump("contact"),
      },
      {
        id: "nav-blog",
        title: "Open Blog Articles",
        category: "Navigation",
        shortcut: "B",
        perform: () => {
          setIsOpen(false);
          navigate("/blog");
        },
      },
      {
        id: "action-resume",
        title: "Download Resume",
        category: "Actions",
        shortcut: "R",
        perform: () => {
          setIsOpen(false);
          window.open(`/${heroData.resume.fileName}`, "_blank");
        },
      },
      {
        id: "social-github",
        title: "Visit GitHub Profile",
        category: "Socials",
        perform: () => {
          setIsOpen(false);
          window.open("https://github.com/rkb-sdet", "_blank");
        },
      },
      {
        id: "social-linkedin",
        title: "Visit LinkedIn Profile",
        category: "Socials",
        perform: () => {
          setIsOpen(false);
          window.open("https://www.linkedin.com/in/rohit-bhardwaj/", "_blank");
        },
      },
    ];

    const projectActions: ActionItem[] = (projectsData || []).map((project) => ({
      id: `project-${project.slug}`,
      title: `Project: ${project.title} (${project.category})`,
      category: "Projects",
      perform: () => {
        setIsOpen(false);
        navigate(`/projects/${project.slug}`);
      },
    }));

    return [...baseActions, ...projectActions];
  }, [location.pathname, navigate]);

  const filteredActions = useMemo(() => {
    if (!query.trim()) return actions;
    const cleanQuery = query.toLowerCase();
    return actions.filter(
      (action) =>
        action.title.toLowerCase().includes(cleanQuery) ||
        action.category.toLowerCase().includes(cleanQuery)
    );
  }, [actions, query]);

  // Handle Ctrl+K / Cmd+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset index and focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Arrow key navigation inside menu
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredActions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? filteredActions.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      filteredActions[selectedIndex]?.perform();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center p-4 pt-20 sm:pt-28">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Palette Container */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-slate-200/60 dark:border-white/10 px-4 py-3">
          <svg
            className="h-5 w-5 text-text/40 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a command or search sections..."
            className="w-full bg-transparent px-3 text-sm text-text placeholder-text/40 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block rounded border border-slate-200 dark:border-white/10 px-1.5 py-0.5 text-[10px] font-mono text-text/50">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <ul
          ref={listRef}
          className="max-h-80 overflow-y-auto p-2 text-sm focus:outline-none"
        >
          {filteredActions.length === 0 ? (
            <li className="py-8 text-center text-xs text-text/50">
              No matching commands or pages found.
            </li>
          ) : (
            filteredActions.map((action, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <li
                  key={action.id}
                  onClick={() => action.perform()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 transition-colors ${
                    isSelected
                      ? "bg-primary text-white"
                      : "text-text/80 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold rounded-md px-1.5 py-0.5 ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 dark:bg-white/10 text-text/60"
                      }`}
                    >
                      {action.category}
                    </span>
                    <span className="font-medium text-xs sm:text-sm">
                      {action.title}
                    </span>
                  </div>

                  {action.shortcut && (
                    <kbd
                      className={`rounded px-1.5 py-0.5 text-[10px] font-mono ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "border border-slate-200 dark:border-white/10 text-text/40"
                      }`}
                    >
                      {action.shortcut}
                    </kbd>
                  )}
                </li>
              );
            })
          )}
        </ul>

        {/* Footer Hint */}
        <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] px-4 py-2 text-[11px] text-text/50 font-mono">
          <span>Navigation</span>
          <span className="flex items-center gap-2">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </span>
        </div>
      </div>
    </div>
  );
}