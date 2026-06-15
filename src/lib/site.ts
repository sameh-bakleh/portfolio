/** Site content — edit social URLs here before deploy */

export const headline = "Senior iOS / Mobile Engineer with Backend API Depth";

export const heroSubtitle =
  "I build production iOS applications with Swift, SwiftUI, UIKit, MVVM, Clean Architecture, REST APIs, offline-capable flows, testing, and App Store delivery — backed by strong PHP, Laravel, Symfony, Redis, Docker, and API contract experience.";

export const availabilityLine =
  "Based in Bochum, Germany. Open to English-speaking iOS, Mobile, PHP Backend, Laravel, Symfony, and API Engineering roles across Germany and Europe.";

export const metaTitle = "Senior iOS Engineer & Backend API Developer in Germany";

export const metaDescription =
  "Senior iOS / Mobile Engineer based in Bochum, Germany. Swift, SwiftUI, UIKit, MVVM, REST APIs, offline-capable mobile flows, testing, App Store delivery, plus Laravel/Symfony backend API experience.";

export const roleSubtitle = "Senior iOS / Mobile Engineer · Backend API Depth";

export const socialCardTitle = "Senior iOS / Mobile Engineer";

export const proofBadges = [
  "8+ Years Software Engineering",
  "iOS-first Mobile Engineering",
  "Laravel / Symfony APIs",
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
  linkedin: "https://www.linkedin.com/in/sameh-bakleh-b177b1189",
  github: "https://github.com/samhbk",
  portfolio: "https://sameh-bakleh-portfolio.vercel.app",
  workAuth:
    "Chancenkarte (Opportunity Card) valid until January 2027; eligible for German work residence permit or EU Blue Card with qualifying job offer",
  availability: "Open to work",
  availabilityDetail:
    "Flexible start date — remote, hybrid, and on-site across Germany and the EU.",
  workMode: "Remote · Hybrid · On-site (Germany & EU)",
  operatorRole: "SENIOR_IOS_MOBILE_ENG",
} as const;

export function githubProfileHref(): string | null {
  const normalized = site.github.replace(/\/+$/, "");
  if (normalized === "https://github.com") return null;
  return site.github;
}

export const aboutParagraphs = [
  "I am a hands-on Senior Software Engineer based in Bochum, Germany, with 8+ years of experience across iOS/mobile applications and backend/API systems.",
  "My primary focus is iOS / Mobile Engineering — app features, API-backed flows, offline-capable behaviour, clean architecture, testing, performance work, and release-ready mobile delivery.",
  "My secondary strength is PHP Backend / API Engineering with Laravel, Symfony, REST APIs, authentication, RBAC, Redis, Docker, OpenAPI, and database workflows.",
  "I work best close to the code: building features, debugging complex issues, integrating APIs, improving architecture, reviewing code, and shipping maintainable software for real users.",
  `${productDomains} Public portfolio repositories demonstrate engineering approach; store listings reflect shipped product work.`,
] as const;

export const education =
  "B.Sc. Software Engineering — Yarmouk Private University (2010–2016) · GPA 3.2/4.0";

export const languages = [
  "Arabic — Native",
  "English — B2 (professional working proficiency)",
  "German — A2 (elementary, actively improving)",
] as const;

export const openToRoles = [
  "Senior iOS Engineer",
  "iOS Developer",
  "iOS Engineer",
  "Swift Developer",
  "Mobile Engineer",
  "Backend Engineer",
  "API Engineer",
  "PHP Developer",
  "Laravel Developer",
  "Symfony Developer",
  "Software Engineer",
] as const;

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
      role="Senior iOS / Mobile Engineer"
      stack="Swift · SwiftUI · REST · MVVM · Laravel · PHP"
    />
  );
};`;

export const stats = [
  { label: "EXPERIENCE", value: "8+ YRS" },
  { label: "FOCUS", value: "iOS · MOBILE" },
  { label: "PUBLIC_REPOS", value: "8" },
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
      "PHP 8.x",
      "Laravel",
      "Symfony",
      "API Platform",
      "REST APIs",
      "API Resources",
      "DTOs",
      "RBAC",
      "Policies / Gates",
      "Middleware",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Queues / Jobs",
      "Events / Listeners",
      "Docker",
      "OpenAPI / Swagger",
      "PHPUnit",
      "Pest",
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

/** Master timeline — matches LinkedIn and CVs */
export const experience: ExperienceItem[] = [
  {
    id: "brainycode-tech",
    period: "Jan 2025 – Present",
    company: "BrainyCode Tech",
    title: "Senior Software Engineer — Mobile & Backend",
    summary:
      "Hands-on delivery of Swift iOS, Kotlin/Android, and Laravel/Symfony APIs — feature work, integration, CI/CD, and production releases across mobile and backend.",
    stack: ["Swift", "iOS", "Kotlin", "Laravel", "Symfony", "REST APIs", "Redis", "Docker", "Fastlane"],
  },
  {
    id: "forsa-sy",
    period: "Jan 2024 – Dec 2024",
    company: "Forsa.sy",
    title: "Software Engineer — Mobile & Backend Platform",
    summary:
      "Built recruitment platform features on mobile and Laravel APIs — listings, applications, caching, and performance-focused backend workflows.",
    stack: ["Swift", "iOS", "Laravel", "REST APIs", "Redis", "MySQL"],
  },
  {
    id: "anorizontech",
    period: "Jan 2023 – Dec 2023",
    company: "AnorizonTech",
    title: "Backend Engineer — Laravel / PHP",
    summary:
      "Developed Laravel REST APIs with RBAC, validation, and database optimization for admin and client-facing platform features.",
    stack: ["Laravel", "PHP", "RBAC", "REST APIs", "MySQL", "Redis"],
  },
  {
    id: "cloud-systems-sarl",
    period: "Jun 2020 – Dec 2022",
    company: "Cloud Systems SARL",
    title: "Senior Mobile Engineer / Mobile Team Lead",
    summary:
      "Shipped Swift iOS features end-to-end while coordinating mobile delivery, architecture, code quality, and App Store releases.",
    stack: ["Swift", "iOS", "SwiftUI", "UIKit", "MVVM", "App Store", "REST APIs"],
  },
  {
    id: "magma-global",
    period: "Feb 2019 – May 2020",
    company: "Magma Global",
    title: "Mobile Application Developer",
    summary:
      "Built native iOS and Android apps with Swift and Kotlin — API integration, authentication, stability improvements, and crash reduction.",
    stack: ["Swift", "Kotlin", "iOS", "Android", "REST APIs", "JWT"],
  },
  {
    id: "creapix",
    period: "Mar 2018 – Feb 2019",
    company: "CreaPix",
    title: "Full-Stack Developer",
    summary:
      "Delivered PHP/Laravel applications with optimized database schemas and secure, maintainable backend features.",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
  {
    id: "dreamwd",
    period: "Feb 2016 – Feb 2018",
    company: "DreamWD",
    title: "Mobile Application Developer",
    summary:
      "Developed Swift iOS and Kotlin/Android apps — API integration, UI implementation, and maintainable mobile architecture.",
    stack: ["Swift", "Kotlin", "iOS", "Android", "REST APIs"],
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
    repo: "https://github.com/samhbk/ios-marketplace-product-app",
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
    repo: "https://github.com/samhbk/ios-realtime-offline-chat",
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
    repo: "https://github.com/samhbk/laravel-recruitment-platform-api",
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
    repo: "https://github.com/samhbk/booking-system-api-showcase",
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
    repo: "https://github.com/samhbk/laravel-ecommerce-erp-integration-api",
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
        repo: "https://github.com/samhbk/ios-marketplace-product-app",
      },
      {
        name: "ios-realtime-offline-chat",
        proof: "UIKit chat client with message states, offline UX, persistence, and retry logic.",
        repo: "https://github.com/samhbk/ios-realtime-offline-chat",
      },
    ],
  },
  {
    label: "Backend / API proof",
    repos: [
      {
        name: "laravel-recruitment-platform-api",
        proof: "Laravel recruitment API with RBAC, listings, applications, and OpenAPI.",
        repo: "https://github.com/samhbk/laravel-recruitment-platform-api",
      },
      {
        name: "booking-system-api-showcase",
        proof: "Laravel booking workflows with availability checks and API versioning.",
        repo: "https://github.com/samhbk/booking-system-api-showcase",
      },
      {
        name: "laravel-ecommerce-erp-integration-api",
        proof: "ERP integration with webhooks, queues, HMAC signing, and audit logging.",
        repo: "https://github.com/samhbk/laravel-ecommerce-erp-integration-api",
      },
    ],
  },
  {
    label: "Supporting",
    repos: [
      {
        name: "android-marketplace-client",
        proof: "Kotlin marketplace client — cross-platform API integration reference.",
        repo: "https://github.com/samhbk/android-marketplace-client",
      },
      {
        name: "portfolio",
        proof: "This portfolio site — Next.js, TypeScript, Tailwind.",
        repo: "https://github.com/samhbk/portfolio",
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
