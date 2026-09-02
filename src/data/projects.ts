export type Project = {
  slug: string;
  featured: boolean;
  number: string;
  title: string;
  category: "Frontend" | "Full Stack" | "Testing";
  summary: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  challenge: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    number: "01",
    title: "Portfolio Website",
    category: "Frontend",
    summary: "A polished personal portfolio with responsive sections, blog routes, and a CMS-ready content layer.",
    description: "A personal portfolio designed to make technical work easy to scan while still feeling distinctive and human.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rohit-bhardwaj/portfolio",
    liveUrl: "http://127.0.0.1:5173/",
    features: ["Responsive layout across devices", "Animated role introduction", "Blog and certification sections", "Dark and light themes"],
    challenge: "Presenting varied experience without making the interface feel crowded.",
    solution: "A clear content hierarchy, focused sections, and reusable responsive components keep the experience quick to understand.",
    featured: true,
  },
  {
    slug: "ecommerce-app",
    number: "02",
    title: "E-commerce App",
    category: "Full Stack",
    summary: "A product shopping experience focused on clear discovery, smooth checkout, and trustworthy feedback.",
    description: "An e-commerce concept exploring product discovery, cart state, checkout flows, and responsive interface patterns.",
    technologies: ["Next.js", "Stripe", "TypeScript"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rohit-bhardwaj/ecommerce-app",
    liveUrl: "https://example.com/ecommerce-app",
    features: ["Product browsing and filtering", "Persistent cart experience", "Checkout-ready payment flow", "Mobile-first product cards"],
    challenge: "Keeping product discovery fast while making every purchase step feel dependable.",
    solution: "The interface uses focused filters, visible state changes, and a short checkout path to reduce friction.",
    featured: true,
  },
  {
    slug: "chat-application",
    number: "03",
    title: "Chat Application",
    category: "Testing",
    summary: "A real-time communication concept with attention to message state, reliability, and testable interactions.",
    description: "A chat application concept used to explore real-time events, resilient UI states, and automation-friendly flows.",
    technologies: ["React", "Socket.io", "Node.js"],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rohit-bhardwaj/chat-application",
    liveUrl: "https://example.com/chat-application",
    features: ["Real-time message updates", "Online and offline states", "Conversation-focused layout", "QA-ready interaction flows"],
    challenge: "Making asynchronous communication feel immediate while handling connection changes gracefully.",
    solution: "Explicit loading, empty, and reconnect states make the experience understandable and easier to verify with automated tests.",
    featured: true,
  },
];