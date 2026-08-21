import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/page-shell'

interface ServiceData {
  title: string
  kicker: string
  body: string
  deliverables: { title: string; desc: string }[]
  techStack: string[]
  process: string[]
}

const servicesData: Record<string, ServiceData> = {
  'full-stack-web-development': {
    title: 'Full-stack platforms engineered for scale.',
    kicker: '01 / FULL-STACK WEB DEVELOPMENT',
    body: 'We build high-velocity SSR applications, distributed microservices, and reactive interfaces that turn ambitious product vision into production-ready software with zero legacy drag.',
    deliverables: [
      {
        title: 'Modern Next.js & React Architecture',
        desc: 'Server components, edge caching, optimistic UI state, and sub-100ms render speeds across global CDNs.',
      },
      {
        title: 'Robust API & Data Layer',
        desc: 'Type-safe RPC, GraphQL/REST endpoints, Postgres connection pooling, and resilient background queues.',
      },
      {
        title: 'Enterprise Auth & RBAC',
        desc: 'Session security, OAuth, multi-tenant workspace isolation, and automated permission boundaries.',
      },
      {
        title: 'Design System & Component Kit',
        desc: 'Accessible, dark-mode native, micro-animated component libraries built with Tailwind and Radix/Base UI.',
      },
    ],
    techStack: ['Next.js', 'React 19', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'Drizzle ORM'],
    process: ['Architecture Blueprint', 'Core Schema & APIs', 'Reactive Frontend', 'Security & CDN Deployment'],
  },
  'generative-ai-and-automation': {
    title: 'Dependable AI systems that earn their place.',
    kicker: '02 / GENERATIVE AI & AUTOMATION',
    body: 'We turn state-of-the-art foundation models into mission-critical product capabilities with grounded retrieval, multi-agent mesh coordination, and strict hallucination guardrails.',
    deliverables: [
      {
        title: 'Hybrid RAG & Vector Pipelines',
        desc: 'pgvector / Qdrant embeddings with hybrid keyword search, cross-encoder reranking, and semantic caching.',
      },
      {
        title: 'Autonomous Tool-Calling Agents',
        desc: 'LangChain & custom stateful graphs capable of structured multi-step execution and automated retries.',
      },
      {
        title: 'Safety & Guardrail Layer',
        desc: 'Input/output validation, prompt injection defense, PII masking, and human-in-the-loop review queues.',
      },
      {
        title: 'Model Evaluation & Observability',
        desc: 'Continuous latency tracking, automated regression benchmarks, and deterministic output tests.',
      },
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI / Claude', 'pgvector', 'Docker', 'Langfuse'],
    process: ['Knowledge Ingestion', 'Vector Benchmark', 'Agent Tool Integration', 'Guardrail Hardening'],
  },
  'cloud-infrastructure-devops': {
    title: 'Cloud infrastructure that makes ambition calm.',
    kicker: '03 / CLOUD INFRASTRUCTURE & DEVOPS',
    body: 'We design modern containerized cloud foundations around your real constraints: high availability, least-privilege security boundaries, and automated zero-downtime deployment pipelines.',
    deliverables: [
      {
        title: 'Containerization & Orchestration',
        desc: 'Production Docker configurations, Kubernetes clusters, and auto-scaling serverless containers on AWS/GCP.',
      },
      {
        title: 'CI/CD Automation Pipelines',
        desc: 'Automated test execution, preview environments on pull requests, and automated rollback triggers.',
      },
      {
        title: 'Zero-Trust Security & Secrets',
        desc: 'Isolated VPCs, KMS encryption, automated vulnerability scans, and strict IAM governance.',
      },
      {
        title: 'Full-Stack Observability',
        desc: 'Structured log aggregation, distributed tracing, OpenTelemetry, and instant anomaly alerting.',
      },
    ],
    techStack: ['Docker', 'AWS', 'GCP', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Prometheus'],
    process: ['Infrastructure Audit', 'Terraform Provisioning', 'Pipeline Hardening', 'Chaos & Load Testing'],
  },
  'technical-growth-engines': {
    title: 'Programmatic SEO & conversion growth engines.',
    kicker: '04 / TECHNICAL GROWTH ENGINES',
    body: 'We engineer automated search visibility, Generative Engine Optimization (GEO), and high-converting marketing tech stacks that turn organic traffic into qualified pipeline.',
    deliverables: [
      {
        title: 'Generative Engine Optimization (GEO)',
        desc: 'Structured schema graphs and entity mapping designed for direct citations in AI search (Perplexity, ChatGPT, Gemini).',
      },
      {
        title: 'Programmatic Page Generation',
        desc: 'High-speed ISR generation of thousands of optimized landing pages powered by database feeds.',
      },
      {
        title: 'Core Web Vitals Perfection',
        desc: '99+ performance scores, asset optimization, zero layout shift, and instant navigation.',
      },
      {
        title: 'Conversion Analytics & Funnels',
        desc: 'Server-side tracking, conversion event attribution, dynamic lead forms, and CRM integrations.',
      },
    ],
    techStack: ['Next.js ISR', 'Schema.org JSON-LD', 'Vercel Analytics', 'PostHog', 'Segment', 'Resend'],
    process: ['Entity Keyword Mapping', 'Template Architecture', 'Programmatic Feed Pipeline', 'Analytics Alignment'],
  },
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <PageShell>
      <main>
        {/* Service Hero */}
        <section className="page-hero">
          <p className="eyebrow">{service.kicker}</p>
          <h1>{service.title}</h1>
          <p style={{ maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            {service.body}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="button button-primary" href="/contact">
              Discuss this build <span>↗</span>
            </Link>
            <Link className="button button-ghost" href="/services">
              All capabilities <span>←</span>
            </Link>
          </div>
        </section>

        {/* Tech Stack Pills */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <p className="card-label" style={{ marginBottom: '1rem' }}>
            ENGINEERED WITH
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {service.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="page-grid">
          {service.deliverables.map((item, idx) => (
            <article className="page-card" key={item.title}>
              <p className="card-label">0{idx + 1} / DELIVERABLE</p>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--muted-foreground)', marginTop: '0.75rem', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </article>
          ))}
        </section>

        {/* Engineering Sequence */}
        <section style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1rem' }}>
          <div
            className="page-card wide"
            style={{
              padding: '2.5rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
            }}
          >
            <p className="card-label">EXECUTION SEQUENCE</p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>How we deliver this capability</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {service.process.map((step, idx) => (
                <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>
                    PHASE 0{idx + 1}
                  </span>
                  <strong style={{ fontSize: '1.05rem' }}>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
