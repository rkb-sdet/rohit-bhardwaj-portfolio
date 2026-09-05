/* ==========================================================================
   1. TYPE DEFINITIONS & INTERFACES
   ========================================================================== */

// --- Hero Types ---
export type SocialLinkItem = {
  label: string;
  url: string;
};

export type HeroSection = {
  badge: string;
  firstName: string;
  lastName: string;
  roles: string[];
  description: string;
  primaryCta: {
    text: string;
    link: string;
  };
  resume: {
    text: string;
    fileName: string;
  };
  socialLinks: SocialLinkItem[];
  avatar: string;
  status: string;
};

// --- About Types ---
export type AboutItem = {
  tag: string;
  heading: string;
  text: string;
};

export type AboutCard = {
  index: string;
  title: string;
  icon: string;
  accentColor: "primary" | "secondary";
  items: AboutItem[];
};

export type AboutSection = {
  badge: string;
  title: string;
  summary: string;
  cards: AboutCard[];
};

// --- Skills Types ---
export type SkillItem = {
  name: string;
  level: "Advanced" | "Proficient" | "Familiar";
  icon: string;
};

export type SkillCategory = {
  category: string;
  description: string;
  skills: SkillItem[];
};

export type SkillsSection = {
  badge: string;
  title: string;
  description: string;
  categories: SkillCategory[];
};

// --- Project Types ---
export type ProjectCategory =
  | "Frontend"
  | "Automation Testing"
  | "Manual Testing"
  | "SQL & Database"
  | "API & Backend"
  | "Full Stack";

export type Project = {
  slug: string;
  featured: boolean;
  number: string;
  title: string;
  category: ProjectCategory;
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

// --- Certification Types ---
export type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
  href: string;
};

export type CertificationsSection = {
  badge: string;
  title: string;
  description: string;
  items: CertificationItem[];
};

// --- Contact Types ---
export type ContactSection = {
  badge: string;
  title: string;
  description: string;
  accessKey: string;
  socialLinks: SocialLinkItem[];
};

// --- GitHub Stats Types ---
export type GithubSection = {
  badge: string;
  title: string;
  description: string;
  username: string;
};

/* ==========================================================================
   2. SECTION DATA EXPORTS
   ========================================================================== */

// --- Hero Section Data ---
export const heroData: HeroSection = {
  badge: "Hello, I am",
  firstName: "Rohit",
  lastName: "Bhardwaj",
  roles: [
    "Frontend Developer",
    "QA Automation Engineer",
    "SDET Enthusiast",
    "Test Architect",
  ],
  description:
    "I build responsive, high-performance web applications with React, TypeScript, and TailwindCSS, backed by resilient Playwright & Selenium end-to-end testing architectures.",
  primaryCta: {
    text: "View my work",
    link: "#projects",
  },
  resume: {
    text: "Download resume",
    fileName: "rohit-bhardwaj-resume.html",
  },
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/rkb-sdet",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rkb-sdet/",
    },
  ],
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  status: "Available for roles & projects",
};

// --- About Section Data ---
export const aboutData: AboutSection = {
  badge: "Behind the work",
  title: "About me",
  summary:
    "Engineering robust digital web experiences with modern frontend technologies while ensuring enterprise-grade stability through disciplined manual and automated quality engineering.",
  cards: [
    {
      index: "01",
      title: "Education & Technical Base",
      icon: "🎓",
      accentColor: "primary",
      items: [
        {
          tag: "Core Engineering",
          heading: "Computer Science & Web Architecture",
          text: "Gained core competency in Data Structures, Object-Oriented Programming (Java/TypeScript), and Modern Web Standards.",
        },
        {
          tag: "Engineering Mindset",
          heading: "Frontend & Test Automation",
          text: "Focused on bridging modern frontend development with deep, automated test coverage matrices and CI/CD pipelines.",
        },
      ],
    },
    {
      index: "02",
      title: "Professional Focus",
      icon: "💼",
      accentColor: "secondary",
      items: [
        {
          tag: "Frontend Development",
          heading: "React, TypeScript & Tailwind CSS",
          text: "Designing fast, accessible client-side architectures with optimized state flow and clean design systems.",
        },
        {
          tag: "Quality Engineering",
          heading: "SDET & Test Automation",
          text: "Architecting Page Object Model test suites with Playwright, Cypress, and Selenium, coupled with API testing and SQL verification.",
        },
      ],
    },
  ],
};

// --- Skills Section Data ---
export const skillsData: SkillsSection = {
  badge: "Capabilities & Toolkit",
  title: "Tech Stack & Skills",
  description:
    "A comprehensive snapshot of technologies, automation frameworks, and developer tools I work with daily.",
  categories: [
    {
      category: "Frontend Engineering",
      description: "Building accessible, high-performance UI systems and modern web applications.",
      skills: [
        { name: "React", level: "Advanced", icon: "⚛️" },
        { name: "TypeScript", level: "Advanced", icon: "📘" },
        { name: "Tailwind CSS", level: "Advanced", icon: "🎨" },
        { name: "Zustand", level: "Advanced", icon: "🐻" },
        { name: "Next.js", level: "Proficient", icon: "▲" },
        { name: "HTML5 / Semantic UI", level: "Advanced", icon: "🌐" },
        { name: "CSS3 / Responsive Design", level: "Advanced", icon: "📐" },
      ],
    },
    {
      category: "QA & Automation",
      description: "End-to-end test automation, API validation, and quality engineering pipelines.",
      skills: [
        { name: "Playwright", level: "Advanced", icon: "🎭" },
        { name: "Selenium WebDriver", level: "Proficient", icon: "⚡" },
        { name: "Cypress", level: "Proficient", icon: "🌲" },
        { name: "Jest / Vitest", level: "Proficient", icon: "🧪" },
        { name: "Core Java OOPs", level: "Advanced", icon: "☕" },
        { name: "POM Frameworks", level: "Advanced", icon: "🏗️" },
      ],
    },
    {
      category: "Manual QA & Database",
      description: "Test planning, defect tracking, exploratory QA, and relational database validation.",
      skills: [
        { name: "Manual Testing & RTM", level: "Advanced", icon: "📋" },
        { name: "SQL / Queries", level: "Advanced", icon: "🗄️" },
        { name: "Supabase / PostgreSQL", level: "Proficient", icon: "⚡" },
        { name: "Jira / Bug Lifecycle", level: "Advanced", icon: "🐞" },
        { name: "TestRail", level: "Proficient", icon: "📑" },
        { name: "ETL / Data Integrity", level: "Proficient", icon: "📊" },
      ],
    },
    {
      category: "Backend & Dev Tools",
      description: "API development, testing workflows, source control, and CI/CD integration.",
      skills: [
        { name: "REST APIs", level: "Advanced", icon: "🔌" },
        { name: "Postman / Newman", level: "Advanced", icon: "🚀" },
        { name: "Git & GitHub", level: "Advanced", icon: "🐙" },
        { name: "Node.js", level: "Proficient", icon: "🟢" },
        { name: "GitHub Actions / CI", level: "Proficient", icon: "⚙️" },
        { name: "Vite", level: "Advanced", icon: "⚡" },
      ],
    },
  ],
};

// --- Projects Data ---
export const projectsData: Project[] = [
  {
    slug: "ovenglow-artisan-bakery",
    featured: true,
    number: "01",
    title: "OvenGlow — 24x7 Artisan Patisserie & Kitchen Dispatch",
    category: "Full Stack",
    summary:
      "A full-stack, enterprise-grade midnight bakery e-commerce platform with real-time WebSocket order tracking, Supabase Auth, and an authenticated staff kitchen dispatch console.",
    description:
      "Engineered with React 18, TypeScript, TailwindCSS, and Zustand, backed by a Supabase PostgreSQL database with Row Level Security (RLS). Features instant 30-min express checkout, live delivery status simulations, dynamic search/filter, and a real-time staff operations dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "WebSockets",
      "Vercel",
    ],
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rkb-sdet/ovenglow-bakery",
    liveUrl: "https://ovenglow-bakery.vercel.app",
    features: [
      "Dynamic catalog with client-side instant search, category filtering & eggless toggles",
      "Express checkout with address capture and live Supabase PostgreSQL insertion",
      "Interactive 4-stage delivery tracker modal with animated real-time progress",
      "Protected Kitchen Staff Console with Supabase Auth session & status dispatch transitions",
      "Real-time WebSocket subscriptions auto-reflecting new orders without manual reload",
    ],
    challenge:
      "Enforcing strict database security preventing anonymous public users from viewing or manipulating order records, while simultaneously allowing unauthenticated checkouts and granting instant live updates to kitchen staff.",
    solution:
      "Architected PostgreSQL Row Level Security (RLS) granting anonymous clients INSERT-only privileges and restricting SELECT/UPDATE operations to authenticated staff sessions, paired with Supabase Realtime replication channels for instant WebSocket sync.",
  },
  {
    slug: "portfolio-website",
    featured: true,
    number: "02",
    title: "Interactive Developer Portfolio",
    category: "Frontend",
    summary:
      "A high-performance portfolio featuring keyboard-driven navigation, infinite marquees, live GitHub REST integration, and smooth reading progress tracking.",
    description:
      "Built with React 18, Vite, and Tailwind CSS. Employs hardware-accelerated CSS animations and modular TypeScript architecture for recruiters.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub REST API"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rkb-sdet/rohit-bhardwaj-portfolio",
    liveUrl: "https://rohit-bhardwaj.github.io/rohit-bhardwaj-portfolio/",
    features: [
      "Dynamic Command Palette (Ctrl + K) for rapid modal search",
      "Live GitHub commit heatmap & repository stats fetching",
      "GPU-accelerated reading progress bar",
      "Quick project preview popover modal",
    ],
    challenge:
      "Preventing layout shifts and unnecessary React re-renders while coordinating real-time API fetches and continuous marquee loops.",
    solution:
      "Engineered decoupled data state, CSS-injected standalone keyframes, and requestAnimationFrame throttling for native 60fps responsiveness.",
  },
  {
    slug: "playwright-e2e-automation-framework",
    featured: true,
    number: "03",
    title: "Playwright E2E Automation Framework",
    category: "Automation Testing",
    summary:
      "Enterprise Page Object Model (POM) automation suite built with Playwright and TypeScript with cross-browser matrix execution and CI reporting.",
    description:
      "Comprehensive automated testing architecture covering end-to-end user journeys, session storage manipulation, parallel worker runs, and visual traces.",
    technologies: ["Playwright", "TypeScript", "GitHub Actions", "Allure Reporting"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rkb-sdet/Playwright_TypeScript",
    liveUrl: "https://github.com/rkb-sdet/Playwright_TypeScript",
    features: [
      "Page Object Model (POM) architectural design",
      "Multi-browser parallel runs across Chromium, Firefox, WebKit",
      "Automatic video recording and trace capture on failure",
      "CI/CD workflow automation via GitHub Actions",
    ],
    challenge:
      "Flaky test failures caused by dynamic DOM hydration and variable backend response times.",
    solution:
      "Implemented strict web-first assertions, smart auto-waiting locators, and custom isolation fixtures.",
  },
  {
    slug: "selenium-csharp-automation",
    featured: true,
    number: "04",
    title: "Selenium C# Test Automation Suite",
    category: "Automation Testing",
    summary:
      "Robust automated functional verification pipeline developed in C# with Selenium WebDriver and NUnit test harness.",
    description:
      "Complete test suite exercising web application workflows, parameterized testing, explicit wait architectures, and data-driven fixtures.",
    technologies: ["C#", ".NET", "Selenium WebDriver", "NUnit"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rkb-sdet/Selenium_CSharp",
    liveUrl: "https://github.com/rkb-sdet/Selenium_CSharp",
    features: [
      "Fluent explicit wait strategies to eliminate sleep statements",
      "Data-driven testing via external parameters",
      "Reusable component-level driver utilities",
      "HTML execution reports with pass/fail metrics",
    ],
    challenge:
      "Handling dynamic AJAX elements and asynchronous DOM repaints consistently across test executions.",
    solution:
      "Abstracted standard driver operations into a helper layer utilizing WebDriverWait with custom ExpectedConditions.",
  },
  {
    slug: "ecommerce-qa-test-strategy",
    featured: true,
    number: "05",
    title: "E-Commerce Test Strategy & Bug Lifecycle",
    category: "Manual Testing",
    summary:
      "End-to-end manual QA documentation including test scenarios, boundary value analysis, equivalence partitioning, and Jira bug tracking.",
    description:
      "Structured QA methodology covering complete shopping, discount engine, cart persistence, and checkout edge cases with full requirement traceability.",
    technologies: ["Jira", "TestRail", "Postman", "Defect Management"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rkb-sdet",
    liveUrl: "https://github.com/rkb-sdet",
    features: [
      "Requirements Traceability Matrix (RTM) bridging specs to tests",
      "Severity vs Priority classified defect reports in Jira",
      "Cross-browser and mobile responsive test verification",
      "Session-based exploratory testing log sheets",
    ],
    challenge:
      "Ensuring comprehensive coverage of multi-condition promotional vouchers and edge cases in checkout flows.",
    solution:
      "Designed Decision Table Testing and Boundary Value Analysis matrices targeting maximum coverage with minimal redundancy.",
  },
  {
    slug: "sql-data-integrity-suite",
    featured: false,
    number: "06",
    title: "SQL Data Integrity & ETL Validation",
    category: "SQL & Database",
    summary:
      "Complex SQL verification queries, schema constraint validation, and transaction ACID compliance checks for relational databases.",
    description:
      "Database testing repository covering complex joins, subqueries, grouping aggregations, and data validation routines between application and database tiers.",
    technologies: ["PostgreSQL", "MySQL", "DBeaver", "SQL"],
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rkb-sdet",
    liveUrl: "https://github.com/rkb-sdet",
    features: [
      "Referential integrity and foreign key constraint validations",
      "Automated record reconciliation between staging and prod schemas",
      "Optimized indexing and execution plan performance checks",
      "Data migration parity scripts",
    ],
    challenge:
      "Validating high-volume database transactions without degrading table lock performance during test execution.",
    solution:
      "Authored non-blocking read queries with isolation levels tailored to staging verification environments.",
  },
];

// --- Certifications Section Data ---
export const certificationsData: CertificationsSection = {
  badge: "Credentials",
  title: "Certifications",
  description:
    "A few milestones that reflect my ongoing investment in the craft.",
  items: [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2026",
      href: "https://www.freecodecamp.org/certification/rohit-bhardwaj/responsive-web-design",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2026",
      href: "https://www.freecodecamp.org/certification/rohit-bhardwaj/javascript-algorithms-and-data-structures-v8",
    },
  ],
};

// --- Contact Section Data ---
export const contactData: ContactSection = {
  badge: "Let's Connect",
  title: "Get in Touch",
  description:
    "Have a project in mind, an SDET / Frontend opportunity, or just want to discuss quality architecture? Feel free to reach out.",
  accessKey: "504e3029-17ec-41da-966f-e4984f7ce413",
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/rkb-sdet",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/rohit-bhardwaj/",
    },
    {
      label: "Email",
      url: "mailto:contact@rohitbhardwaj.dev",
    },
  ],
};

// --- GitHub Stats Section Data ---
export const githubData: GithubSection = {
  badge: "Open Source & Code",
  title: "GitHub Activity & Projects",
  description:
    "Live snapshot of my open-source repositories, test frameworks, and code contributions directly from GitHub.",
  username: "rkb-sdet",
};

/* ==========================================================================
   3. COMBINED OBJECT DEFAULT EXPORT
   ========================================================================== */

export const portfolioData = {
  hero: heroData,
  about: aboutData,
  skills: skillsData,
  projects: projectsData,
  certifications: certificationsData,
  contact: contactData,
  github: githubData,
};

export default portfolioData;