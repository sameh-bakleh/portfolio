/** Site content — edit social URLs here before deploy */

export const headline =
  "Senior Software Engineer | iOS & PHP Backend | Swift · Laravel · GraphQL · REST APIs | Germany";

export const heroSubtitle =
  "Hands-on Senior Software Engineer in Bochum with 5+ years in iOS/Swift mobile engineering and 5+ years in PHP/Laravel API and admin systems — production apps, backend platforms, API contracts, and release-ready delivery across Germany and Europe.";

export const availabilityLine =
  "Based in Bochum, Germany. Open to English-speaking iOS Developer, Senior iOS Engineer, Mobile Engineer, PHP Developer, Laravel Developer, Symfony Developer, Backend Developer, Backend Engineer, and Software Engineer roles across Germany and Europe.";

export const metaTitle = "Senior Mobile Engineer & PHP/Laravel Backend API Developer";

export const seoTitle =
  "Sameh Bakleh | Senior Mobile Engineer & PHP/Laravel Backend API Developer";

export const metaDescription =
  "Senior Mobile Engineer based in Bochum, Germany, with strong PHP/Laravel backend API experience. Swift, SwiftUI, UIKit, MVVM, REST APIs, App Store delivery, Laravel, Redis, Docker, and API contracts.";

export const roleSubtitle = "Senior Software Engineer — Mobile & Backend";

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

export type ProjectScreenshot = { src: string; alt: string; caption: string };

export const githubRawBase = "https://raw.githubusercontent.com/sameh-bakleh";

export const portfolioScreenshotGalleries = [
  {
    id: "marketplace-ios",
    title: "iOS Marketplace Client",
    subtitle: "SwiftUI · MVVM · paired with Laravel Marketplace Platform API",
    repo: "https://github.com/sameh-bakleh/ios-marketplace-product-app",
    pairedRepo: "https://github.com/sameh-bakleh/laravel-marketplace-platform",
    shots: [
      {
        src: `${githubRawBase}/ios-marketplace-product-app/main/Docs/Screenshots/01-login.png`,
        alt: "Marketplace app login screen",
        caption: "Sign in · demo account",
      },
      {
        src: `${githubRawBase}/ios-marketplace-product-app/main/Docs/Screenshots/02-shop-catalog.png`,
        alt: "Marketplace shop catalog",
        caption: "Paginated catalog",
      },
      {
        src: `${githubRawBase}/ios-marketplace-product-app/main/Docs/Screenshots/03-product-detail.png`,
        alt: "Product detail screen",
        caption: "Product detail · favorites",
      },
      {
        src: `${githubRawBase}/ios-marketplace-product-app/main/Docs/Screenshots/04-favorites.png`,
        alt: "Favorites screen",
        caption: "Favorites sync",
      },
      {
        src: `${githubRawBase}/ios-marketplace-product-app/main/Docs/Screenshots/05-account.png`,
        alt: "Account screen",
        caption: "Account · sign out",
      },
    ],
  },
  {
    id: "offline-chat",
    title: "iOS Real-Time Offline Chat",
    subtitle: "UIKit · offline UX · message states · local persistence",
    repo: "https://github.com/sameh-bakleh/ios-realtime-offline-chat",
    shots: [
      {
        src: `${githubRawBase}/ios-realtime-offline-chat/main/Docs/Screenshots/01-inbox.png`,
        alt: "Chat inbox",
        caption: "Inbox",
      },
      {
        src: `${githubRawBase}/ios-realtime-offline-chat/main/Docs/Screenshots/02-chat-attachments.png`,
        alt: "Chat with attachments",
        caption: "Chat · attachments",
      },
      {
        src: `${githubRawBase}/ios-realtime-offline-chat/main/Docs/Screenshots/03-features-offline.png`,
        alt: "Offline features",
        caption: "Offline states",
      },
      {
        src: `${githubRawBase}/ios-realtime-offline-chat/main/Docs/Screenshots/04-new-chat.png`,
        alt: "New chat screen",
        caption: "New conversation",
      },
    ],
  },
] as const;

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
  pairedRepo?: string;
  pairedLabel?: string;
  screenshots?: ProjectScreenshot[];
};

export const iosProjects: ProjectItem[] = [
  {
    name: "TalentBridge iOS",
    folder: "talentbridge-ios/",
    description:
      "Swift 6 iOS client for the TalentBridge recruitment marketplace — consumes the GraphQL backend (talentbridge-api) with TCA, clean architecture, Keychain, and XCTest.",
    stack: ["Swift 6", "SwiftUI", "TCA", "GraphQL", "Keychain", "XCTest"],
    highlight: "iOS · Flagship GraphQL",
    repo: "https://github.com/sameh-bakleh/talentbridge-ios",
    pairedRepo: "https://github.com/sameh-bakleh/talentbridge-api",
    pairedLabel: "TalentBridge GraphQL API",
    badge: "GraphQL pair",
    category: "ios",
    proves: [
      "Swift 6 + TCA feature architecture",
      "GraphQL client and shared API contract",
      "Candidate, company, and admin flows",
      "Keychain auth and testable dependencies",
      "Paired Laravel GraphQL backend",
    ],
  },
  {
    name: "iOS Marketplace Client",
    folder: "ios-marketplace-product-app/",
    description:
      "Senior-grade SwiftUI marketplace iOS client — MVVM, JWT auth, paginated REST, Keychain, favorites sync, XCTest, and CI. Pairs with laravel-marketplace-platform.",
    stack: ["Swift", "SwiftUI", "MVVM", "REST", "Keychain", "XCTest"],
    highlight: "iOS · Flagship REST",
    repo: "https://github.com/sameh-bakleh/ios-marketplace-product-app",
    pairedRepo: "https://github.com/sameh-bakleh/laravel-marketplace-platform",
    pairedLabel: "Laravel Marketplace Platform API",
    badge: "REST pair",
    category: "ios",
    proves: [
      "Production-style iOS architecture",
      "JWT auth and Keychain storage",
      "Paginated catalog and favorites UX",
      "Loading, empty, and error states",
      "Pairs with Laravel marketplace API",
    ],
    screenshots: [...portfolioScreenshotGalleries[0].shots],
  },
  {
    name: "iOS Real-Time Offline Chat",
    folder: "ios-realtime-offline-chat/",
    description:
      "UIKit iOS chat client with message delivery states, offline queueing, local persistence, attachments, XCTest, and CI — mock transport, no API keys required.",
    stack: ["Swift", "UIKit", "Combine", "Persistence", "Offline UX", "XCTest"],
    highlight: "iOS · Messaging",
    repo: "https://github.com/sameh-bakleh/ios-realtime-offline-chat",
    badge: "Portfolio sample",
    category: "ios",
    proves: [
      "Message delivery state machine",
      "Offline queueing and retry flows",
      "Local persistence and attachments",
      "Testable architecture with XCTest",
    ],
    screenshots: [...portfolioScreenshotGalleries[1].shots],
  },
];

export const backendProjects: ProjectItem[] = [
  {
    name: "TalentBridge GraphQL API",
    folder: "talentbridge-api/",
    description:
      "Production-inspired recruitment-marketplace backend — Laravel GraphQL API, authentication & RBAC, queued workflows on Redis, Pest/PHPUnit tests, Docker, and CI. Paired with Swift 6 iOS client.",
    stack: ["Laravel", "GraphQL", "PHP 8.x", "DDD", "Horizon", "Redis", "Docker", "Pest"],
    highlight: "Backend · Flagship GraphQL",
    repo: "https://github.com/sameh-bakleh/talentbridge-api",
    pairedRepo: "https://github.com/sameh-bakleh/talentbridge-ios",
    pairedLabel: "TalentBridge iOS",
    badge: "GraphQL pair",
    category: "backend",
    proves: [
      "GraphQL schema and resolver design",
      "DDD-inspired domain layers",
      "Recruitment marketplace workflows",
      "Horizon queues on Redis",
      "Paired Swift TCA iOS client",
    ],
  },
  {
    name: "Laravel Marketplace Platform API",
    folder: "laravel-marketplace-platform/",
    description:
      "Production-style Laravel multi-vendor marketplace API — JWT, cart, orders, Redis, OpenAPI, Docker, and iOS mobile contract.",
    stack: ["Laravel", "PHP", "JWT", "Redis", "OpenAPI", "Docker", "PHPUnit"],
    highlight: "Backend · Flagship REST",
    repo: "https://github.com/sameh-bakleh/laravel-marketplace-platform",
    pairedRepo: "https://github.com/sameh-bakleh/ios-marketplace-product-app",
    pairedLabel: "iOS Marketplace Client",
    badge: "REST pair",
    category: "backend",
    proves: [
      "Multi-vendor marketplace REST API",
      "JWT auth and mobile-ready contracts",
      "Cart, checkout, and order workflows",
      "Redis caching and OpenAPI docs",
      "Docker + CI for reproducible review",
    ],
  },
  {
    name: "Laravel Recruitment Platform API",
    folder: "laravel-recruitment-platform-api/",
    description:
      "ATS-style Laravel recruitment API — JWT, RBAC, job listings, applications, OpenAPI, Docker, and 45 PHPUnit tests.",
    stack: ["Laravel", "PHP", "JWT", "RBAC", "Redis", "OpenAPI", "Docker"],
    highlight: "Backend · Platform",
    repo: "https://github.com/sameh-bakleh/laravel-recruitment-platform-api",
    badge: "Portfolio sample",
    category: "backend",
    proves: [
      "ATS-style backend workflows",
      "JWT auth and role-based access",
      "Job listings and applications",
      "OpenAPI and PHPUnit coverage",
    ],
  },
  {
    name: "Booking System API",
    folder: "booking-system-api-showcase/",
    description:
      "Laravel booking system API with auth, booking workflows, availability checks, API versioning, Redis caching, Swagger docs, tests, Docker, and CI.",
    stack: ["Laravel", "PHP", "MySQL", "Redis", "Swagger", "Docker"],
    highlight: "Backend · Workflows",
    repo: "https://github.com/sameh-bakleh/booking-system-api-showcase",
    badge: "Portfolio sample",
    category: "backend",
    proves: [
      "Overlap-safe booking logic",
      "Availability validation flows",
      "API versioning patterns",
      "Documented REST surface",
    ],
  },
  {
    name: "Laravel ERP / E-Commerce Integration API",
    folder: "laravel-ecommerce-erp-integration-api/",
    description:
      "Laravel ERP/e-commerce integration API with webhooks, queues, HMAC signing, retry workflows, audit logging, mock ERP client, Docker, tests, and CI.",
    stack: ["Laravel", "Queues", "Webhooks", "HMAC", "Redis", "Docker", "PHPUnit"],
    highlight: "Backend · Integration",
    repo: "https://github.com/sameh-bakleh/laravel-ecommerce-erp-integration-api",
    badge: "Portfolio sample",
    category: "backend",
    proves: [
      "Integration engineering patterns",
      "Async jobs and retry workflows",
      "Webhook security and audit logs",
      "Product/stock/order sync design",
    ],
  },
  {
    name: "Symfony Marketplace API",
    folder: "symfony-marketplace-api/",
    description:
      "Symfony marketplace REST API — secure authentication, Doctrine entities, DTO validation, marketplace workflows, OpenAPI, Redis, Docker, and PHPUnit.",
    stack: ["Symfony 7", "Doctrine", "JWT", "Redis", "OpenAPI", "Docker", "PHPUnit"],
    highlight: "Backend · Symfony",
    repo: "https://github.com/sameh-bakleh/symfony-marketplace-api",
    badge: "Portfolio sample",
    category: "backend",
    proves: [
      "Symfony 7 REST API design",
      "Doctrine entities and DTO validation",
      "Multi-vendor cart and orders",
      "OpenAPI documentation",
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
    label: "Full-stack pair (GraphQL)",
    repos: [
      {
        name: "talentbridge-api",
        proof: "Flagship Laravel GraphQL API — DDD, RBAC, Horizon, Redis, Docker, Pest/PHPUnit, CI.",
        repo: "https://github.com/sameh-bakleh/talentbridge-api",
      },
      {
        name: "talentbridge-ios",
        proof: "Swift 6 TCA iOS client — GraphQL backend contract, Keychain, XCTest.",
        repo: "https://github.com/sameh-bakleh/talentbridge-ios",
      },
    ],
  },
  {
    label: "Full-stack pair (REST)",
    repos: [
      {
        name: "laravel-marketplace-platform",
        proof: "Laravel marketplace API — JWT, cart, orders, Redis, OpenAPI, iOS contract.",
        repo: "https://github.com/sameh-bakleh/laravel-marketplace-platform",
      },
      {
        name: "ios-marketplace-product-app",
        proof: "SwiftUI marketplace client — MVVM, auth, pagination, screenshots, XCTest.",
        repo: "https://github.com/sameh-bakleh/ios-marketplace-product-app",
      },
    ],
  },
  {
    label: "iOS / Mobile",
    repos: [
      {
        name: "ios-realtime-offline-chat",
        proof: "UIKit chat — message states, offline queueing, persistence, XCTest.",
        repo: "https://github.com/sameh-bakleh/ios-realtime-offline-chat",
      },
      {
        name: "android-marketplace-client",
        proof: "Kotlin Compose client — JWT, catalog, wishlist, checkout flows.",
        repo: "https://github.com/sameh-bakleh/android-marketplace-client",
      },
    ],
  },
  {
    label: "Backend / APIs",
    repos: [
      {
        name: "laravel-recruitment-platform-api",
        proof: "ATS-style Laravel API — JWT, RBAC, listings, applications, OpenAPI.",
        repo: "https://github.com/sameh-bakleh/laravel-recruitment-platform-api",
      },
      {
        name: "booking-system-api-showcase",
        proof: "Laravel booking — availability checks, API versioning, Swagger.",
        repo: "https://github.com/sameh-bakleh/booking-system-api-showcase",
      },
      {
        name: "laravel-ecommerce-erp-integration-api",
        proof: "ERP integration — webhooks, queues, HMAC, retry workflows.",
        repo: "https://github.com/sameh-bakleh/laravel-ecommerce-erp-integration-api",
      },
      {
        name: "symfony-marketplace-api",
        proof: "Symfony 7 marketplace REST — Doctrine, DTO validation, OpenAPI.",
        repo: "https://github.com/sameh-bakleh/symfony-marketplace-api",
      },
      {
        name: "talentbridge",
        proof: "Monorepo variant — Swift TCA iOS + Laravel GraphQL in one repository.",
        repo: "https://github.com/sameh-bakleh/talentbridge",
      },
    ],
  },
  {
    label: "Site",
    repos: [
      {
        name: "portfolio",
        proof: "This portfolio — Next.js, TypeScript, Tailwind, recruiter-focused UX.",
        repo: "https://github.com/sameh-bakleh/portfolio",
      },
    ],
  },
];

export const navItems = [
  { id: "home", label: "Home", file: "main.ts" },
  { id: "experience", label: "Experience", file: "experience.git" },
  { id: "ios-work", label: "iOS", file: "ios/" },
  { id: "backend-apis", label: "APIs", file: "backend/" },
  { id: "shipped", label: "Shipped", file: "live/refs" },
  { id: "skills", label: "Skills", file: "skills.json" },
  { id: "about", label: "About", file: "about.md" },
  { id: "github-proof", label: "GitHub", file: "proof/" },
  { id: "contact", label: "Contact", file: "contact.sh" },
] as const;

/** Primary header links — recruiter scan path */
export const headerNavPrimary = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "ios-work", label: "iOS" },
  { id: "backend-apis", label: "APIs" },
  { id: "shipped", label: "Shipped" },
  { id: "contact", label: "Contact" },
] as const;

/** Shown in header “More” menu and mobile drawer */
export const headerNavSecondary = [
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "github-proof", label: "GitHub Proof" },
] as const;

/** Short line under name in header */
export const headerRoleLine = "Senior Software Engineer — Mobile & Backend";
export const headerRoleShort = "Sr. Engineer · Mobile & Backend";

export const recruiterPitch =
  "Senior engineer shipping iOS apps and Laravel APIs — GraphQL & REST, App Store releases, DDD backends, and mobile-ready contracts. Bochum, Germany · English-speaking teams across DE & EU.";

export const recruiterBrief = {
  current: {
    company: "BrainyCode Tech",
    title: "Senior Software Engineer — Mobile & Backend",
    period: "Jan 2025 – Present",
  },
  recentEmployers: ["Forsa.sy", "AnorizonTech", "Cloud Systems SARL", "Magma Global"],
  scanFacts: [
    { label: "Mobile", value: "5+ yrs · Swift · App Store" },
    { label: "Backend", value: "5+ yrs · Laravel · GraphQL" },
    { label: "Total", value: "8+ yrs professional" },
    { label: "Work auth", value: "Chancenkarte → permit" },
    { label: "Languages", value: "EN · AR · DE (A2)" },
    { label: "Availability", value: "Remote · Hybrid · On-site" },
  ],
} as const;

/** Hero role tabs — recruiter picks the hiring lane in one click */
export const heroRoleTabs = [
  {
    id: "both",
    label: "Mobile & Backend",
    shortLabel: "Both",
    title: "Senior Software Engineer — Mobile & Backend",
    pitch: "Full-stack delivery — Swift TCA iOS, Laravel GraphQL & REST APIs, Docker, CI.",
    stack: ["Swift", "TCA", "Laravel", "GraphQL", "REST", "Docker"],
    cta: { label: "Experience", href: "#experience" },
  },
  {
    id: "mobile",
    label: "Mobile / iOS",
    shortLabel: "Mobile",
    title: "Senior iOS / Mobile Engineer",
    pitch: "Swift 6, SwiftUI, TCA, GraphQL & REST — App Store releases and testable mobile architecture.",
    stack: ["Swift", "SwiftUI", "TCA", "GraphQL", "UIKit", "REST"],
    cta: { label: "iOS work", href: "#ios-work" },
  },
  {
    id: "backend",
    label: "Backend / API",
    shortLabel: "API",
    title: "Senior PHP / Laravel API Engineer",
    pitch: "Laravel REST & GraphQL APIs, DDD modules, RBAC, Redis, Horizon, mobile-ready contracts.",
    stack: ["Laravel", "GraphQL", "PHP", "Redis", "Horizon", "OpenAPI"],
    cta: { label: "API work", href: "#backend-apis" },
  },
] as const;

export type HeroRoleTabId = (typeof heroRoleTabs)[number]["id"];

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
