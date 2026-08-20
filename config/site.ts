/**
 * CaliberX — Site Configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the SINGLE SOURCE OF TRUTH for all brand, content, navigation,
 * and copy across the site.
 *
 * Changing text, links, email, services, projects, FAQs, metrics, etc.
 * should all be done here. No need to touch individual page files.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Brand ────────────────────────────────────────────────────────────────────

export const brand = {
  /** Short mark shown inside the logo square */
  mark: 'w',
  /** Brand name prefix (before the highlighted X) */
  name: 'withCaliber',
  /** Highlighted suffix of the brand name */
  nameSuffix: 'X',
  /** Full brand name as a plain string */
  fullName: 'withCaliberX',
  /** Current version */
  version: '0.1',
  /** Founding / display year */
  year: '2026',
  /** Studio description for the footer */
  footerTagline: 'Digital engineering for\nthe next constraint.',
  /** Footer status line */
  footerStatus: 'All systems nominal / 2026',
  /** Footer copyright */
  copyright: '© withCaliberX. Built with intent.',
  /** Contact email */
  email: 'hello@withcaliberx.com',
  /** Calendly URL (used in contact success state) */
  calendlyUrl: 'https://calendly.com',
}

// ─── SEO / Metadata ───────────────────────────────────────────────────────────

export const seo = {
  title: 'withCaliberX — Caliber execution for complex problems',
  description:
    'Bespoke full-stack architectures, autonomous AI agents, and scalable cloud systems for teams building what comes next.',
  themeColorLight: '#fbfbf8',
  themeColorDark: '#090a0a',
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const nav = {
  /** Dropdown nav groups shown in the top navigation */
  groups: [
    {
      label: 'Services',
      links: [
        ['Full-stack web', '/services/full-stack-web-development'],
        ['Generative AI', '/services/generative-ai-and-automation'],
        ['Cloud & DevOps', '/services/cloud-infrastructure-devops'],
      ] as [string, string][],
    },
    {
      label: 'Explore',
      links: [
        ['Work', '/work'],
        ['About', '/about'],
        ['Contact', '/contact'],
      ] as [string, string][],
    },
  ],
  /** Label and href for the primary nav CTA button */
  cta: {
    label: 'Start a conversation',
    href: '/contact',
  },
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: 'ENGINEERING · AI · 2026',
  headline: 'Complex problems.',
  headlineSpan: 'Caliber execution.',
  lede: 'Bespoke full-stack architectures, autonomous AI agents, and scalable cloud systems for teams building what comes next.',
  primaryCta: { label: 'Discuss your project', href: '#contact' },
  secondaryCta: { label: 'Explore solutions', href: '#solutions' },
  scrollLabel: 'SCROLL TO DISCOVER',
  footerLabel: 'EST. / INDEPENDENT ENGINEERING STUDIO',
  /** Animated terminal lines in the orbital scene */
  terminalLines: [
    'connecting to vector_index...',
    'query: launch-ready architecture',
    'retrieved 42 relevant systems',
    'response latency: 110ms',
  ],
  terminalTitle: 'caliber.runtime',
  terminalPrompt: 'caliber',
  terminalPath: '/systems',
  terminalLatency: '110ms',
  /** Text shown inside the rotating core cube */
  coreCubeText: { mark: 'w', suffix: 'CX' },
}

// ─── Loader ───────────────────────────────────────────────────────────────────

export const loader = {
  mark: 'w',
  suffix: 'CX',
  tagline: 'CALIBRATING SYSTEMS / 2026',
  /** ms before loader hides after page is ready */
  durationMs: 900,
}

// ─── Marquee Sections ─────────────────────────────────────────────────────────

export const marquee = {
  /** Tech ecosystem ticker (duplicated automatically in CSS) */
  ecosystem: 'NEXT.JS × PYTHON × FASTAPI × DOCKER × LANGCHAIN × POSTGRES',
  ecosystemLabel: 'THE ECOSYSTEM / BUILT TO MOVE',
  /** Contact section bottom ribbon */
  contact:
    'HIGH POTENTIAL WORK × BULLETPROOF ARCHITECTURES × ZERO LEGACY DEBT',
}

// ─── Services ─────────────────────────────────────────────────────────────────

export const services = [
  {
    label: '01 / BUILD',
    title: 'Full-stack platforms',
    slug: 'full-stack-web-development',
    text: 'High-velocity SSR, modern APIs, and reactive interfaces that turn ambitious ideas into daily-use products.',
    pageText:
      'Product-grade web platforms with clear architecture, responsive interfaces, and APIs that stay maintainable under pressure.',
    className: 'service-wide',
  },
  {
    label: '02 / THINK',
    title: 'Generative AI systems',
    slug: 'generative-ai-and-automation',
    text: 'RAG engines, agentic workflows, and reliable LLM pipelines built for useful outcomes.',
    pageText:
      'Reliable RAG, agents, automations, and model workflows that move from impressive demo to useful system.',
    className: 'service-lime',
  },
  {
    label: '03 / SHIP',
    title: 'Cloud infrastructure',
    slug: 'cloud-infrastructure-devops',
    text: 'Containerized deployments, secure data layers, and operational foundations that scale quietly.',
    pageText:
      'Secure deployments, observable systems, data foundations, and infrastructure built for calm scale.',
    className: '',
  },
  {
    label: '04 / GROW',
    title: 'Technical growth engines',
    slug: 'technical-growth-engines',
    text: 'GEO, technical SEO, and automated funnels that make your product easier to discover and choose.',
    pageText:
      'GEO, technical SEO, and automated funnels that make your product easier to discover and choose.',
    className: 'service-wide',
  },
]

// ─── Capabilities Section ─────────────────────────────────────────────────────

export const capabilities = {
  eyebrow: '01 / CAPABILITIES',
  heading: 'One sharp team for',
  headingSpan: 'the whole system.',
  body: 'From first principle to final deploy, we connect strategy, engineering, and growth into one accountable line of execution.',
}

// ─── Method Section ───────────────────────────────────────────────────────────

export const method = {
  eyebrow: '02 / METHOD',
  heading: 'Disciplined by',
  headingSpan: 'design.',
  body: 'Good work compounds when the process is calm, visible, and relentlessly focused on the outcome.',
  steps: [
    {
      num: '01',
      title: 'Structured requirement intake',
      text: 'Comprehensive scoping and architecture blueprints before a single line of code.',
    },
    {
      num: '02',
      title: 'Single-project engineering discipline',
      text: 'Focused, uncompromised sprint delivery with zero distractions or handoff fog.',
    },
    {
      num: '03',
      title: 'Bulletproof deployment & scale',
      text: 'Containerized handoff, high-availability setups, and long-term maintainability.',
    },
  ],
}

// ─── Proof / Metrics Section ──────────────────────────────────────────────────

export const proof = {
  eyebrow: '03 / PROOF OF CALIBER',
  heading: 'Quiet confidence.',
  headingSpan: 'Visible results.',
  metrics: [
    { value: '110', unit: 'ms', label: 'average API response' },
    { value: '99.9', unit: '%', label: 'deployment reliability' },
    { value: '1:1', unit: '', label: 'senior engineer access' },
  ],
}

// ─── Engagement Tiers ─────────────────────────────────────────────────────────

export const engagement = {
  eyebrow: '04 / ENGAGEMENT',
  heading: 'Choose your',
  headingSpan: 'operating mode.',
  body: 'Direct engineering collaboration. Zero agency bloat. A structure that meets your ambition and your stage.',
  tiers: [
    {
      name: 'SPRINT MVP',
      tagline: 'A focused first release.',
      features: ['Single core product', 'Next.js + database setup', 'Architecture blueprint'],
    },
    {
      name: 'FULL-SCALE PLATFORM',
      tagline: 'For the serious build.',
      features: ['Custom SaaS / AI integrations', 'DevOps + growth engine', 'Senior product engineering'],
      featured: true,
    },
    {
      name: 'DEDICATED RETAINER',
      tagline: 'Your technical partner.',
      features: ['Continuous feature iteration', 'AI pipeline scaling', 'Long-term stewardship'],
    },
  ],
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq = {
  eyebrow: '05 / FAQ',
  heading: 'Clear answers.',
  headingSpan: 'Before we build.',
  items: [
    [
      'How does withCaliberX approach new technical requirements?',
      'We start with a structured intake, map constraints, then translate the highest-value path into a clear architecture and delivery plan.',
    ],
    [
      'What technologies are used for custom web and cloud projects?',
      'We work across Next.js, TypeScript, Python, FastAPI, Postgres, Docker, and the best fit of modern AI tooling for the problem.',
    ],
    [
      'How do you implement secure AI solutions without data leaks?',
      'We design explicit data boundaries, least-privilege access, isolated retrieval, observability, and human checkpoints where they matter.',
    ],
    [
      'What is the typical turnaround time for an MVP build?',
      'Focused MVPs typically move from alignment to a production-ready first release through a compact, highly focused engineering sprint.',
    ],
    [
      'Do you provide ongoing maintenance and post-launch scaling?',
      'Yes. We can stay close after launch for iteration, AI pipeline scaling, performance work, and long-term technical stewardship.',
    ],
  ] as [string, string][],
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────

export const contactCta = {
  eyebrow: 'READY TO EXECUTE?',
  heading: 'Stop scrolling references.',
  headingSpan: "Let's build your solution.",
  cta: { label: 'Book discovery session', href: `mailto:${brand.email}` },
}

// ─── Work / Projects ──────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'northstar-ai',
    title: 'Northstar AI',
    category: 'GEN AI / PLATFORM',
    summary:
      'A decision workspace that turns fragmented operational knowledge into clear next actions.',
    year: '2025',
  },
  {
    slug: 'atlas-cloud',
    title: 'Atlas Cloud',
    category: 'CLOUD / INFRASTRUCTURE',
    summary: 'A resilient data platform for teams operating across complex environments.',
    year: '2024',
  },
  {
    slug: 'signal-commerce',
    title: 'Signal Commerce',
    category: 'WEB / GROWTH',
    summary:
      'A high-conversion commerce system built around speed, clarity, and intelligent automation.',
    year: '2024',
  },
]

// ─── About Page ───────────────────────────────────────────────────────────────

export const about = {
  eyebrow: 'ABOUT / THE STUDIO',
  heading: 'Small team.',
  headingSpan: 'Large surface area.',
  intro:
    'withCaliberX is an independent engineering studio for ambitious teams who need a partner that can think across product, systems, AI, and growth.',
  cards: [
    {
      label: 'VISION',
      heading: 'Make complex technology feel clear, useful, and inevitable.',
      body: 'We believe the best technical work is not loud. It gives a team leverage, removes uncertainty, and makes the next decision easier.',
      wide: true,
    },
    {
      label: 'REACH',
      heading: 'Remote by default. Close by design.',
      body: 'Senior collaboration across time zones, with transparent decisions and direct communication.',
      wide: false,
    },
  ],
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const contact = {
  eyebrow: 'CONTACT / PROJECT INTAKE',
  heading: 'Bring us the',
  headingSpan: 'interesting problem.',
  intro:
    'Tell us what you are building, what is in the way, and where a sharper technical partner would create leverage.',
  budgetOptions: ['Under $25k', '$25k–$75k', '$75k+'],
  projectTypes: ['Full-stack web', 'Generative AI', 'Cloud & DevOps', 'Something else'],
  successHeading: "We'll be in touch shortly.",
  successBody:
    'Your project context is safely in our queue. Prefer a calendar?',
}
