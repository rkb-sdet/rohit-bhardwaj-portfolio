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
    link: string;
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
  | "Full Stack"
  | "Automation Testing"
  | "Manual Testing"
  | "SQL & Database"
  | "API & Backend";

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
    fileName: "Rohit Kumar - Resume.pdf",
    link: `${import.meta.env.BASE_URL}Rohit%20Kumar%20-%20Resume.pdf`,
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
  avatar: `${import.meta.env.BASE_URL}rohit-bhardwaj.jpg`,
  status: "Available for roles & projects",
};

// --- About Section Data ---
export const aboutData: AboutSection = {
  badge: "Behind the work",
  title: "About me",
  summary:
    "Automation Test Engineer with 6+ years of hands-on experience building reliable test frameworks, improving product quality, and accelerating delivery across e-commerce and enterprise applications.",
  cards: [
    {
      index: "01",
      title: "Education & Technical Base",
      icon: "🎓",
      accentColor: "primary",
      items: [
        {
          tag: "Dr. APJ Abdul Kalam Technical University, Lucknow",
          heading: "Master of Computer Applications (MCA)",
          text: "Graduated with a strong foundation in software development, algorithms, and database management, equipping me with the skills to design and implement robust applications.",
        },
        {
          tag: "Chattarpati Shahu Ji Maharaj University, Kanpur",
          heading: "Bachelor of Computer Applications (BCA)",
          text: "Completed undergraduate studies with a focus on programming, data structures, and software engineering principles, laying the groundwork for a career in technology and quality assurance.",
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
          tag: "Global Logic Pvt. Ltd. (Feb 2021 - Oct 2025)",
          heading: "QA Engineer",
          text: "Designing and maintaining scalable automation frameworks with Selenium Java, Playwright TypeScript, POM, and hybrid testing strategies to improve release confidence and reduce regressions.",
        },
        {
          tag: "Tata Consultancy Services (TCS) (Oct 2025 - Present)",
          heading: "Automation Test Engineer",
          text: "Driving functional, regression, and cross-environment validation across web applications while integrating tests with Playwright with TypeScript, Azure DevOps, Docker, and defect lifecycle processes in Agile teams.",
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
        // { name: "Next.js", level: "Proficient", icon: "▲" },
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
    slug: "ovenglow-playwright-automation",
    featured: true,
    number: "01",
    title: "OvenGlow Bakery — E2E Playwright Automation Suite",
    category: "Automation Testing",
    summary:
      "Enterprise-grade End-to-End test automation framework built in TypeScript and Playwright for the OvenGlow Bakery platform, achieving 100% pass rate across 25+ test suites with GitHub Actions CI/CD integration.",
    description:
      "Comprehensive SDET automation architecture featuring Page Object Model (POM), custom dependency injection fixtures, network failure simulation via route interception, PostgreSQL RLS security verification, and automated HTML reporting pipelines.",
    technologies: [
      "TypeScript",
      "Playwright",
      "Page Object Model",
      "GitHub Actions",
      "Allure / HTML Reports",
      "PostgreSQL RLS",
    ],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rkb-sdet/ovenglow-playwright-automation",
    liveUrl: "https://github.com/rkb-sdet/ovenglow-playwright-automation",
    features: [
      "100% pass rate across 25+ comprehensive E2E test scenarios covering catalog, cart math, and express checkout",
      "Modular Page Object Model (POM) architecture with custom isolation fixtures to eliminate test flakiness",
      "Network resilience and chaos engineering simulations (500 Internal Server Error interception via page.route)",
      "Strict PostgreSQL Row Level Security (RLS) data validation and kitchen staff operations workflow testing",
      "Automated CI/CD quality gates via GitHub Actions with parallel test execution and HTML report artifacts",
    ],
    challenge:
      "Eliminating test flakiness caused by asynchronous DOM updates, real-time Supabase state changes, and validating complex network failure and security boundaries without disrupting live environments.",
    solution:
      "Engineered web-first assertions, smart auto-waiting locators, custom dependency injection fixtures, and controlled route mocking to ensure lightning-fast and deterministic execution.",
  },
  {
    slug: "ovenglow-artisan-bakery",
    featured: true,
    number: "02",
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
    slug: "classic-developer-portfolio",
    featured: false,
    number: "03",
    title: "Classic Developer Portfolio",
    category: "Frontend",
    summary:
      "Original personal portfolio website showcasing early projects, core technical skills, and professional journey.",
    description:
      "A clean, responsive static developer portfolio hosted on GitHub Pages, featuring structured project showcases, contact links, and core capability highlights.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    githubUrl: "https://github.com/rkb-sdet/rkb-sdet",
    liveUrl: "https://rkb-sdet.github.io/rkb-sdet/",
    features: [
      "Responsive layout optimized for various screen sizes and viewports",
      "Clean section-based architecture for professional background and technical skills",
      "Direct deployment integration via GitHub Pages",
    ],
    challenge:
      "Structuring a clean and lightweight personal landing page from scratch without heavy UI frameworks.",
    solution:
      "Utilized semantic HTML structures paired with modular CSS styling and lightweight JavaScript for smooth section transitions.",
  },
  {
    slug: "playwright-e2e-automation-framework",
    featured: true,
    number: "04",
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
    number: "05",
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
    number: "06",
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
    number: "07",
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