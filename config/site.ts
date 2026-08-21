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
  cta: {
    label: 'Request a Quote',
    href: '/contact',
  },
  simpleLinks: [
    { label: 'Products', href: '/products' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ],
}

/** Services mega-menu — 3 lifecycle columns + featured card */
export const servicesMegaMenu = {
  label: 'Services',
  columns: [
    {
      badge: 'BUILD',
      items: [
        {
          title: 'Full-stack platforms',
          subtitle: 'Next.js, APIs, design systems',
          href: '/services/full-stack-web-development',
        },
        {
          title: 'Generative AI systems',
          subtitle: 'RAG, agents, LLM pipelines',
          href: '/services/generative-ai-and-automation',
        },
      ],
    },
    {
      badge: 'RUN',
      items: [
        {
          title: 'Cloud infrastructure',
          subtitle: 'Docker, CI/CD, observability',
          href: '/services/cloud-infrastructure-devops',
        },
        {
          title: 'Platform operations',
          subtitle: 'Reliability, scaling, handoff',
          href: '/services/cloud-infrastructure-devops',
        },
      ],
    },
    {
      badge: 'GROW',
      items: [
        {
          title: 'Technical growth engines',
          subtitle: 'GEO, SEO, conversion systems',
          href: '/services/technical-growth-engines',
        },
        {
          title: 'Product iteration',
          subtitle: 'Roadmaps, analytics, experiments',
          href: '/contact',
        },
      ],
    },
  ],
  featured: {
    badge: 'FEATURED',
    title: 'Dedicated engineering squad',
    description:
      'Senior engineers embedded in your workflow — architecture, delivery, and post-launch stewardship without agency overhead.',
    cta: { label: 'Hire Now', href: '/contact' },
  },
}

/** Hire Developers mega-menu — tabbed subcategories */
export const hireMegaMenu = {
  label: 'Hire Developers',
  tabs: [
    {
      id: 'app-web',
      label: 'App & Web',
      stacks: [
        { group: 'Frontend', title: 'React / Next.js', subtitle: 'SSR, RSC, design systems' },
        { group: 'Frontend', title: 'TypeScript', subtitle: 'Type-safe product interfaces' },
        { group: 'Backend', title: 'Node / FastAPI', subtitle: 'APIs, auth, integrations' },
        { group: 'Backend', title: 'Python', subtitle: 'Data pipelines & services' },
        { group: 'Data', title: 'Postgres / Supabase', subtitle: 'Schema, RLS, realtime' },
        { group: 'Data', title: 'Redis', subtitle: 'Caching & job queues' },
      ],
    },
    {
      id: 'ai-data',
      label: 'AI & Data',
      stacks: [
        { group: 'AI', title: 'LangChain / Agents', subtitle: 'Tool use, orchestration' },
        { group: 'AI', title: 'RAG pipelines', subtitle: 'Retrieval, evals, guardrails' },
        { group: 'AI', title: 'OpenAI / Anthropic', subtitle: 'Model routing & fallbacks' },
        { group: 'Data', title: 'Vector search', subtitle: 'Embeddings, hybrid retrieval' },
        { group: 'Data', title: 'ETL / analytics', subtitle: 'Dashboards & reporting' },
        { group: 'Data', title: 'MLOps', subtitle: 'Monitoring & cost control' },
      ],
    },
    {
      id: 'cloud-devops',
      label: 'Cloud & DevOps',
      stacks: [
        { group: 'Cloud', title: 'Docker / K8s', subtitle: 'Containers & orchestration' },
        { group: 'Cloud', title: 'AWS / GCP', subtitle: 'Infra as code, networking' },
        { group: 'Cloud', title: 'Supabase', subtitle: 'Auth, storage, edge functions' },
        { group: 'DevOps', title: 'GitHub Actions', subtitle: 'CI/CD pipelines' },
        { group: 'DevOps', title: 'Terraform', subtitle: 'Reproducible environments' },
        { group: 'DevOps', title: 'Observability', subtitle: 'Logs, metrics, tracing' },
      ],
    },
  ],
  banner: {
    text: 'Hire dedicated engineers',
    subtext: '14-day onboarding',
    cta: { label: 'Get started', href: '/contact' },
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
  {
    slug: 'synthetix-vector',
    title: 'Synthetix Vector',
    category: 'ENTERPRISE AI / WORKFLOW',
    summary:
      'An autonomous multi-agent mesh for compliance verification, audit trail mapping, and document analysis.',
    year: '2025',
  },
]

// ─── Strategy Call Section ────────────────────────────────────────────────────

export const strategyCall = {
  eyebrow: 'FREE CONSULTATION',
  heading: 'Free 30-min strategy call',
  lede: "Let's discuss your project. Book a free consultation call.",
  body:
    '30 minutes with a senior engineer. Bring your use case. Leave with a clear next step, recommended approach, and an honest cost range — no sales pitch.',
  primaryCta: { label: 'Discuss Your Project', href: '/contact' },
  secondaryCta: { label: 'See Case Studies', href: '/work' },
}

// ─── Products Page ────────────────────────────────────────────────────────────

export const productsPage = {
  eyebrow: 'PRODUCTS / PLATFORMS',
  heading: 'Tools we build',
  headingSpan: 'and stand behind.',
  intro:
    'Product-grade systems born from client work — engineered for reliability, clarity, and long-term operation.',
  items: [
    {
      slug: 'caliber-runtime',
      name: 'Caliber Runtime',
      category: 'AI / DECISION SYSTEMS',
      tagline: 'Turn fragmented knowledge into clear next actions.',
      description:
        'A decision workspace with RAG retrieval, agent orchestration, and audit-friendly outputs for operational teams.',
      status: 'Live',
      features: ['Multi-source retrieval', 'Agent workflows', 'Role-based access', 'Export & audit trails'],
      href: '/work/northstar-ai',
      ctaLabel: 'View case study',
    },
    {
      slug: 'vector-deploy',
      name: 'Vector Deploy',
      category: 'CLOUD / DEVOPS',
      tagline: 'One-command staging to production pipelines.',
      description:
        'Opinionated deployment kit for Next.js + Python stacks with observability, secrets, and rollback baked in.',
      status: 'Beta',
      features: ['Docker-first', 'Preview environments', 'Health checks', 'Slack deploy alerts'],
      href: '/services/cloud-infrastructure-devops',
      ctaLabel: 'Explore capability',
    },
    {
      slug: 'signal-growth',
      name: 'Signal Growth Kit',
      category: 'GROWTH / SEO',
      tagline: 'Technical SEO and GEO automation for product teams.',
      description:
        'Structured content pipelines, schema automation, and performance monitoring for teams that ship fast.',
      status: 'Live',
      features: ['Schema automation', 'Core Web Vitals tracking', 'Content experiments', 'Search console sync'],
      href: '/services/technical-growth-engines',
      ctaLabel: 'Explore capability',
    },
  ],
  ctaBand: {
    eyebrow: 'CUSTOM BUILD',
    heading: 'Need something built from scratch?',
    body: 'We design and ship bespoke platforms when off-the-shelf tools are not enough.',
    ctaLabel: 'Request a Quote',
    href: '/contact',
  },
}

// ─── About Page ───────────────────────────────────────────────────────────────

export const about = {
  eyebrow: 'ABOUT / THE STUDIO',
  heading: 'Small team.',
  headingSpan: 'Large surface area.',
  intro:
    'withCaliberX is an independent engineering studio for ambitious teams who need a partner that can think across product, systems, AI, and growth.',
  vision: {
    label: 'VISION',
    heading: 'Make complex technology feel clear, useful, and inevitable.',
    body:
      'We believe the best technical work is not loud. It gives a team leverage, removes uncertainty, and makes the next decision easier.',
  },
  goal: {
    label: 'GOAL',
    heading: 'Ship systems that compound — not demos that decay.',
    body:
      'Every engagement should leave you with architecture you understand, code your team can extend, and a roadmap that reflects reality — not optimism.',
  },
  team: {
    eyebrow: 'THE TEAM',
    heading: 'Senior engineers.',
    headingSpan: 'Direct access.',
    intro:
      'No account-manager layer. You work with the people designing the system, writing the code, and answering hard questions in Slack.',
    members: [
      {
        name: 'Alex Mercer',
        role: 'Founding Engineer',
        focus: 'Full-stack · AI systems',
        bio: 'Leads architecture for web platforms and agentic workflows. Previously scaled SaaS products from MVP to multi-region deploy.',
      },
      {
        name: 'Priya Nair',
        role: 'Lead Cloud Engineer',
        focus: 'DevOps · Infrastructure',
        bio: 'Designs resilient cloud foundations — Docker, CI/CD, observability, and cost-aware scaling for production workloads.',
      },
      {
        name: 'Jordan Lee',
        role: 'AI Systems Engineer',
        focus: 'RAG · LLM pipelines',
        bio: 'Builds retrieval systems with guardrails, evals, and operational monitoring so AI features stay useful after launch.',
      },
      {
        name: 'Sam Ortiz',
        role: 'Product Engineer',
        focus: 'Growth · Frontend',
        bio: 'Connects product UX, performance, and technical SEO into systems that help teams ship and get discovered.',
      },
    ],
  },
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
