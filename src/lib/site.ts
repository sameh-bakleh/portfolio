/** Site content — edit social URLs here before deploy */

export const headline =
  "Senior Software Engineer | iOS & PHP Backend | Swift · SwiftUI · UIKit · Laravel · Symfony · REST APIs | Germany";

export const heroSubtitle =
  "Hands-on Senior Software Engineer in Bochum with 5+ years in iOS/Swift mobile engineering and 5+ years in PHP/Laravel API and admin systems — production apps, backend platforms, API contracts, and release-ready delivery across Germany and Europe.";

export const availabilityLine =
  "Based in Bochum, Germany. Open to English-speaking iOS Developer, Senior iOS Engineer, Mobile Engineer, PHP Developer, Laravel Developer, Symfony Developer, Backend Developer, Backend Engineer, and Software Engineer roles across Germany and Europe.";

export const metaTitle = "Senior Mobile Engineer & PHP/Laravel Backend API Developer";

export const seoTitle =
  "Sameh Bakleh | Senior Mobile Engineer & PHP/Laravel Backend API Developer";

export const metaDescription =
  "Senior Mobile Engineer based in Bochum, Germany, with strong PHP/Laravel backend API experience. Swift, SwiftUI, UIKit, MVVM, REST APIs, App Store delivery, Laravel, Redis, Docker, and API contracts.";

export const roleSubtitle =
  "Senior iOS engineer with PHP/Laravel backend API depth · Germany";

export const socialCardTitle = "Senior Mobile Engineer · PHP/Laravel Backend APIs";

export const proofBadges = [
  "5+ Years iOS · Swift",
  "5+ Years PHP · Laravel APIs",
  "Senior iOS + Backend Engineer",
  "Based in Germany",
  "English B2 · German A2 improving",
] as const;

export const productDomains =
  "Production experience across domains such as ride-hailing, recruitment, real estate listings, fintech, marketplaces, and business platforms.";

export const site = {
  name: "Sameh Bakleh",
  tagline: heroSubtitle,
  email: "samhbkeng1992@gmail.com",
  phone: "+49 177 797 7187",
  location: "Bochum, Germany",
  linkedin: "https://www.linkedin.com/in/sameh-bakleh/",
  github: "https://github.com/sameh-bakleh",
  portfolio: "https://sameh-bakleh.vercel.app",
  workAuth:
    "Chancenkarte (Opportunity Card) valid until January 2027; eligible for German work residence permit or EU Blue Card with qualifying job offer",
  availability: "Open to work",
  availabilityDetail:
    "Flexible start date — remote, hybrid, and on-site across Germany and the EU.",
  workMode: "Remote · Hybrid · On-site (Germany & EU)",
  operatorRole: "SENIOR_SW_ENGINEER",
} as const;

export function githubProfileHref(): string | null {
  const normalized = site.github.replace(/\/+$/, "");
  if (normalized === "https://github.com") return null;
  return site.github;
}

export const aboutParagraphs = [
  "I am a hands-on Senior Software Engineer based in Bochum, Germany, with 8+ years of professional experience across mobile applications and backend/API systems.",
  "My strongest technical focus is split between two areas: iOS / Mobile Engineering (5+ years) — Swift, UIKit, SwiftUI, Combine, async/await, REST/GraphQL APIs, authentication, push notifications, maps, real-time features, offline-capable behaviour, caching, performance, crash triage, testing, Fastlane, TestFlight, and App Store delivery.",
  "PHP Backend / API Engineering (5+ years) — PHP, Laravel, Symfony, REST APIs, API Platform, MySQL/PostgreSQL, Redis, RBAC, JWT/OAuth2, admin dashboards, SQL optimization, Docker, CI/CD, OpenAPI/Swagger, and mobile-ready API contracts.",
  "I enjoy working close to the code: building features, fixing complex production issues, improving app stability, refactoring legacy code, optimizing backend performance, reviewing code, and collaborating with product, design, QA, mobile, and backend teams.",
  "My mobile and backend experience gives me a practical advantage: I understand both sides of API-driven products — from backend contracts and database performance to real mobile behaviour under weak networks, validation errors, authentication states, and release-critical edge cases.",
] as const;

export const education =
  "B.Sc. Computer Software Engineering — Yarmouk Private University (2010–2016)";

export const languages = [
  "Arabic — Native or bilingual",
  "English — Professional working proficiency",
  "German — Elementary (actively improving)",
] as const;

export const openToRoles = [
  "iOS Developer",
  "Senior iOS Engineer",
  "Mobile Engineer",
  "PHP Developer",
  "Laravel Developer",
  "Symfony Developer",
  "Backend Developer",
  "Backend Engineer",
  "Software Engineer",
] as const;

export const topSkills = ["iOS Development", "Android Development", "Laravel"] as const;

export type PublishedApp = { name: string; url: string; note?: string };

export const publishedMobileIntro =
  "App Store releases I contributed to as a hands-on engineer. Portfolio repositories on this site are production-style engineering samples for technical review — not private client source code.";

export const publishedMobileAppsIos: PublishedApp[] = [
  { name: "Petra Ride", url: "https://apps.apple.com/ee/app/petra-ride/id1463809354", note: "Ride-hailing" },
  { name: "Forsa", url: "https://apps.apple.com/us/app/forsa/id6737195314", note: "Recruitment" },
  { name: "MEA Real Estate", url: "https://apps.apple.com/us/app/mea-real-estate/id6444905425", note: "Listings" },
  {
    name: "Tareeq (طريق)",
    url: "https://apps.apple.com/us/app/%D8%B7%D8%B1%D9%8A%D9%82/id6738869040",
    note: "Ride booking",
  },
];

export const publishedMobileAppsAndroid: PublishedApp[] = [
  {
    name: "Petra Ride",
    note: "Ride-hailing · 1M+ downloads",
    url: "https://play.google.com/store/apps/details?id=com.PetraRide_User",
  },
  {
    name: "Forsa",
    note: "Recruitment",
    url: "https://play.google.com/store/apps/details?id=com.sy.forsa",
  },
];

export const publishedMobileOutro =
  "Cross-platform delivery experience (Kotlin/Android) supports API integration work — iOS remains my primary engineering focus.";

export type LiveWebShowcase = {
  name: string;
  url: string;
  description: string;
};

export const liveWebShowcases: LiveWebShowcase[] = [
  {
    name: "Forsa Syria",
    url: "https://forsa.sy/",
    description: "Jobs & recruitment platform — web product aligned with Forsa mobile apps.",
  },
  {
    name: "Views Bank",
    url: "https://viewsbank.app/",
    description: "Rewards platform with mobile apps, APIs, and partner integrations.",
  },
];

export const heroCode = `import { Engineer } from './platform';

const Profile = () => {
  return (
    <Engineer
      name="Sameh Bakleh"
      role="Senior Software Engineer · iOS & PHP Backend"
      stack="Swift · SwiftUI · UIKit · Laravel · PHP · REST APIs"
    />
  );
};`;

export const stats = [
  { label: "iOS · SWIFT", value: "5+ YRS" },
  { label: "PHP · LARAVEL", value: "5+ YRS" },
  { label: "EXPERIENCE", value: "8+ YRS" },
  { label: "STATUS", value: "OPEN TO WORK" },
];

export const skills = [
  {
    category: "iOS Engineering",
    items: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Combine",
      "async/await",
      "Swift Concurrency",
      "MVVM",
      "Clean Architecture",
      "Coordinator Pattern",
      "XCTest",
      "UI Testing",
      "Fastlane",
      "TestFlight",
      "App Store Connect",
      "Core Data",
      "Keychain",
      "APNs",
      "MapKit",
      "Core Location",
      "Accessibility",
      "Localization",
    ],
  },
  {
    category: "Mobile / API Product Engineering",
    items: [
      "REST APIs",
      "GraphQL exposure",
      "OpenAPI / Swagger",
      "JWT / OAuth2",
      "Offline-capable flows",
      "Local caching",
      "Weak-network handling",
      "Pagination",
      "Push notifications",
      "Crash triage",
      "Performance optimization",
      "Firebase Crashlytics",
    ],
  },
  {
    category: "Backend / API Engineering",
    items: [
      "PHP",
      "Laravel",
      "Symfony",
      "API Platform",
      "REST APIs",
      "Admin dashboards",
      "RBAC",
      "Policies / Gates",
      "JWT / OAuth2",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "SQL optimization",
      "Queues / Jobs",
      "Docker",
      "OpenAPI / Swagger",
      "PHPUnit",
      "CI/CD",
    ],
  },
  {
    category: "Testing & Delivery",
    items: [
      "XCTest",
      "PHPUnit",
      "Pest",
      "GitHub Actions",
      "GitLab CI/CD",
      "Docker Compose",
      "Fastlane",
      "CI/CD pipelines",
      "TestFlight",
      "App Store release support",
      "API documentation",
    ],
  },
  {
    category: "Collaboration",
    items: [
      "Agile / Scrum",
      "Code reviews",
      "Remote teamwork",
      "Product / design collaboration",
      "QA collaboration",
      "API contract alignment",
      "Release coordination",
    ],
  },
];

export type ExperienceItem = {
  id: string;
  period: string;
  company: string;
  title: string;
  summary: string;
  stack: string[];
};

/** Master timeline — matches LinkedIn */
export const experience: ExperienceItem[] = [
  {
    id: "brainycode-tech",
    period: "Jan 2025 – Present · Germany / Remote",
    company: "BrainyCode Tech",
    title: "Senior Software Engineer — Mobile & Backend",
    summary:
      "Hands-on senior role combining iOS/Android/Flutter mobile features with PHP, Laravel, and Symfony APIs — authentication, listings, offline/retry flows, API contracts, Docker, GitLab CI/CD, Redis, Fastlane, and TestFlight.",
    stack: ["Swift", "iOS", "Flutter", "Laravel", "Symfony", "REST APIs", "Redis", "Docker", "Fastlane"],
  },
  {
    id: "forsa-sy",
    period: "Jan 2024 – Dec 2024 · Remote / Syria",
    company: "Forsa.sy",
    title: "Software Engineer — Mobile & Backend Platform",
    summary:
      "Recruitment platform: Laravel REST APIs, job listings, dashboards, reporting, RBAC, Redis caching, SQL optimization, and mobile-ready APIs supporting iOS and Android clients.",
    stack: ["Laravel", "PHP", "REST APIs", "Redis", "MySQL", "RBAC", "Admin dashboards"],
  },
  {
    id: "anorizontech",
    period: "Jan 2023 – Dec 2023 · Remote / Middle East",
    company: "AnorizonTech",
    title: "Backend Engineer — Laravel / PHP",
    summary:
      "Laravel backend modules, admin dashboards, REST integrations, RBAC, SQL/reporting performance, Redis, queues, and stable APIs for mobile and web clients.",
    stack: ["Laravel", "PHP", "Admin dashboards", "RBAC", "REST APIs", "MySQL", "Redis"],
  },
  {
    id: "cloud-systems-sarl",
    period: "Jun 2020 – Dec 2022 · Remote / Beirut",
    company: "Cloud Systems SARL",
    title: "Senior Mobile Engineer / Mobile Team Lead",
    summary:
      "Production iOS apps in Swift/UIKit/SwiftUI, Android features, API-backed flows, App Store and Play releases, stability improvements, code reviews, and hands-on team coordination.",
    stack: ["Swift", "iOS", "UIKit", "SwiftUI", "Kotlin", "REST APIs", "App Store"],
  },
  {
    id: "magma-global",
    period: "Feb 2019 – May 2020 · Remote / Beirut",
    company: "Magma Global",
    title: "Mobile Application Developer",
    summary:
      "Native iOS (Swift/UIKit) and Android (Java/Kotlin) apps — authentication, REST APIs, maps, push notifications, production releases, and client delivery.",
    stack: ["Swift", "UIKit", "Kotlin", "Java", "REST APIs", "Push notifications"],
  },
  {
    id: "creapix",
    period: "Mar 2018 – Feb 2019 · Beirut, Lebanon",
    company: "CreaPix",
    title: "Full-Stack Developer",
    summary:
      "PHP/Laravel web applications, admin panels, authentication, database schemas, REST integrations, and client-facing features.",
    stack: ["PHP", "Laravel", "JavaScript", "MySQL", "Admin panels"],
  },
  {
    id: "dreamwd",
    period: "Feb 2016 – Feb 2018 · Doha, Qatar",
    company: "DreamWD",
    title: "Mobile Application Developer",
    summary:
      "Early mobile role building iOS (Swift) and Android (Java/Kotlin) applications with REST API integration, authentication, and production support.",
    stack: ["Swift", "iOS", "Java", "Kotlin", "REST APIs"],
  },
];

export type ProjectItem = {
  name: string;
  folder: string;
  description: string;
  stack: string[];
  highlight: string;
  repo: string;
  badge?: string;
  category: "ios" | "backend";
  proves: string[];
};

export const iosProjects: ProjectItem[] = [
  {
    name: "iOS Marketplace Product App",
    folder: "ios-marketplace-product-app/",
    description:
      "Production-style iOS marketplace client demonstrating product listing flows, authentication, favorites, pagination, API integration, local state handling, and clean mobile architecture.",
    stack: ["Swift", "SwiftUI", "MVVM", "REST APIs", "Authentication", "Keychain", "Pagination", "Local Cache"],
    highlight: "iOS / Mobile",
    repo: "https://github.com/sameh-bakleh/ios-marketplace-product-app",
    badge: "Portfolio sample",
    category: "ios",
    proves: [
      "API-backed iOS product flows",
      "Clean mobile architecture",
      "Authentication and token handling",
      "Listing / detail / favorites UX",
      "Error, loading, and empty states",
    ],
  },
  {
    name: "iOS Real-Time Offline Chat",
    folder: "ios-realtime-offline-chat/",
    description:
      "Real-time iOS chat client focused on message states, local persistence, offline-aware UX, attachment handling, retry behaviour, and testable mobile state management.",
    stack: ["Swift", "UIKit", "Local Persistence", "Message States", "Offline UX", "Retry Logic"],
    highlight: "iOS / Mobile",
    repo: "https://github.com/sameh-bakleh/ios-realtime-offline-chat",
    badge: "Portfolio sample",
    category: "ios",
    proves: [
      "Real-time mobile UX",
      "Offline-capable state handling",
      "Message lifecycle management",
      "Local storage and retry flows",
      "Production-style chat behaviour",
    ],
  },
];

export const backendProjects: ProjectItem[] = [
  {
    name: "Laravel Recruitment Platform API",
    folder: "laravel-recruitment-platform-api/",
    description:
      "Laravel recruitment platform API covering job listings, candidate applications, employer workflows, authentication, RBAC, validation, caching, and API documentation.",
    stack: ["Laravel", "PHP", "REST APIs", "RBAC", "MySQL", "Redis", "OpenAPI", "Docker"],
    highlight: "Backend / API",
    repo: "https://github.com/sameh-bakleh/laravel-recruitment-platform-api",
    badge: "Portfolio sample",
    category: "backend",
    proves: [
      "Backend platform workflows",
      "Auth and role-based access",
      "API resources and validation",
      "Caching and database-backed features",
      "Mobile-ready API contracts",
    ],
  },
  {
    name: "Booking System API",
    folder: "booking-system-api-showcase/",
    description:
      "Laravel booking API demonstrating reservation workflows, availability checks, validation, API versioning, caching, and testable backend logic.",
    stack: ["Laravel", "PHP", "JWT / Sanctum", "Redis", "Swagger", "Docker"],
    highlight: "Backend / API",
    repo: "https://github.com/sameh-bakleh/booking-system-api-showcase",
    badge: "Portfolio sample",
    category: "backend",
    proves: [
      "Booking workflow logic",
      "Availability and validation flows",
      "API versioning",
      "Backend testing and documentation",
    ],
  },
  {
    name: "Laravel ERP / E-Commerce Integration API",
    folder: "laravel-ecommerce-erp-integration-api/",
    description:
      "Laravel integration API for e-commerce and ERP workflows, using webhooks, queues, retry logic, HMAC signing, audit logging, and Docker-based setup.",
    stack: ["Laravel", "Queues", "Webhooks", "HMAC", "Redis", "Docker", "PHPUnit"],
    highlight: "Backend / API",
    repo: "https://github.com/sameh-bakleh/laravel-ecommerce-erp-integration-api",
    badge: "Portfolio sample",
    category: "backend",
    proves: [
      "Integration engineering",
      "Async jobs and retry workflows",
      "Webhook security",
      "Product / stock / order sync patterns",
      "Backend reliability mindset",
    ],
  },
];

export type GitHubProofRepo = {
  name: string;
  proof: string;
  repo: string;
};

export type GitHubProofGroup = {
  label: string;
  repos: GitHubProofRepo[];
};

export const githubProofGroups: GitHubProofGroup[] = [
  {
    label: "iOS proof",
    repos: [
      {
        name: "ios-marketplace-product-app",
        proof: "API-backed SwiftUI marketplace client with auth, pagination, and MVVM architecture.",
        repo: "https://github.com/sameh-bakleh/ios-marketplace-product-app",
      },
      {
        name: "ios-realtime-offline-chat",
        proof: "UIKit chat client with message states, offline UX, persistence, and retry logic.",
        repo: "https://github.com/sameh-bakleh/ios-realtime-offline-chat",
      },
    ],
  },
  {
    label: "Backend / API proof",
    repos: [
      {
        name: "laravel-recruitment-platform-api",
        proof: "Laravel recruitment API with RBAC, listings, applications, and OpenAPI.",
        repo: "https://github.com/sameh-bakleh/laravel-recruitment-platform-api",
      },
      {
        name: "booking-system-api-showcase",
        proof: "Laravel booking workflows with availability checks and API versioning.",
        repo: "https://github.com/sameh-bakleh/booking-system-api-showcase",
      },
      {
        name: "laravel-ecommerce-erp-integration-api",
        proof: "ERP integration with webhooks, queues, HMAC signing, and audit logging.",
        repo: "https://github.com/sameh-bakleh/laravel-ecommerce-erp-integration-api",
      },
    ],
  },
  {
    label: "Supporting",
    repos: [
      {
        name: "android-marketplace-client",
        proof: "Kotlin marketplace client — cross-platform API integration reference.",
        repo: "https://github.com/sameh-bakleh/android-marketplace-client",
      },
      {
        name: "symfony-marketplace-api",
        proof: "Symfony marketplace REST API — JWT auth, Doctrine, cart, orders, OpenAPI.",
        repo: "https://github.com/sameh-bakleh/symfony-marketplace-api",
      },
      {
        name: "portfolio",
        proof: "This portfolio site — Next.js, TypeScript, Tailwind.",
        repo: "https://github.com/sameh-bakleh/portfolio",
      },
    ],
  },
];

export const navItems = [
  { id: "home", label: "Home", file: "main.ts" },
  { id: "about", label: "About", file: "about.md" },
  { id: "ios-work", label: "iOS", file: "ios/" },
  { id: "backend-apis", label: "APIs", file: "backend/" },
  { id: "skills", label: "Skills", file: "skills.json" },
  { id: "experience", label: "Experience", file: "experience.git" },
  { id: "github-proof", label: "GitHub", file: "proof/" },
  { id: "shipped", label: "Shipped", file: "live/refs" },
  { id: "contact", label: "Contact", file: "contact.sh" },
] as const;

/** Primary header links — always visible on large screens */
export const headerNavPrimary = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "ios-work", label: "iOS" },
  { id: "backend-apis", label: "APIs" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/** Shown in header “More” menu and mobile drawer */
export const headerNavSecondary = [
  { id: "experience", label: "Experience" },
  { id: "github-proof", label: "GitHub Proof" },
  { id: "shipped", label: "Shipped Apps" },
] as const;

/** Short line under name in header */
export const headerRoleLine = "Senior software engineer · APIs, mobile & platforms";

export const loadedModules = [
  "SWIFT",
  "SWIFTUI",
  "UIKit",
  "MVVM",
  "REST",
  "LARAVEL",
  "PHP",
  "DOCKER",
];
