import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/page-shell'

interface CaseStudyData {
  title: string
  subtitle: string
  category: string
  year: string
  client: string
  summary: string
  problem: string
  solution: string
  metrics: { value: string; label: string }[]
  architecture: string[]
  techStack: string[]
}

const caseStudies: Record<string, CaseStudyData> = {
  'northstar-ai': {
    title: 'Northstar AI',
    subtitle: 'Grounded decision intelligence under pressure.',
    category: 'GEN AI / PLATFORM',
    year: '2025',
    client: 'Fintech Scaleup',
    summary:
      'A decision workspace that turns fragmented operational knowledge into clear, verifiable next actions.',
    problem:
      'Risk analysis teams were losing hours manually cross-referencing internal policy documents, regulatory filings, and historical memos across disconnected drives.',
    solution:
      'We designed an isolated hybrid RAG pipeline using pgvector and cross-encoder reranking, backed by an agentic review workspace with source citations and confidence metrics.',
    metrics: [
      { value: '85%', label: 'reduction in research latency' },
      { value: '99.4%', label: 'retrieval accuracy across 200k docs' },
      { value: '110ms', label: 'average vector query response' },
    ],
    architecture: [
      'Document Ingestion & Semantic Chunking Engine (FastAPI + LangChain)',
      'Hybrid pgvector Database with Reciprocal Rank Fusion (RRF)',
      'Deterministic Hallucination Guardrails & PII Masking',
      'Reactive Next.js 16 Review UI with Streaming Markdown Citations',
    ],
    techStack: ['Next.js', 'Python', 'FastAPI', 'pgvector', 'PostgreSQL', 'Langfuse', 'Tailwind CSS'],
  },
  'atlas-cloud': {
    title: 'Atlas Cloud',
    subtitle: 'Resilient data infrastructure for continuous operations.',
    category: 'CLOUD / INFRASTRUCTURE',
    year: '2024',
    client: 'Logistics Enterprise',
    summary: 'A resilient data platform for teams operating across complex multi-region environments.',
    problem:
      'Frequent deployment bottlenecks, brittle database locking under peak load, and lack of unified telemetry caused operational anxiety during flash events.',
    solution:
      'We restructured the cloud foundation into containerized, auto-scaling Kubernetes microservices with Terraform IaC, connection pooling, and automated failover.',
    metrics: [
      { value: '99.99%', label: 'uptime during peak seasonal load' },
      { value: '4.2x', label: 'throughput increase with zero downtime' },
      { value: '14min', label: 'automated disaster recovery RTO' },
    ],
    architecture: [
      'Multi-region Terraform Infrastructure as Code (AWS EKS & Aurora)',
      'Zero-Downtime Blue/Green Deployment Pipelines with GitHub Actions',
      'OpenTelemetry Distributed Tracing & Instant Alerting Mesh',
      'Redis Distributed Caching Layer with Write-Through Invalidation',
    ],
    techStack: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'Redis', 'Prometheus'],
  },
  'signal-commerce': {
    title: 'Signal Commerce',
    subtitle: 'Ultra-fast storefront with automated growth pipelines.',
    category: 'WEB / GROWTH',
    year: '2024',
    client: 'D2C Brand Group',
    summary:
      'A high-conversion commerce system built around speed, clarity, and intelligent automation.',
    problem:
      'Slow monolithic frontend and brittle checkout scripts resulted in a 4.2s page load time and high drop-off rates on mobile traffic.',
    solution:
      'We built a headless Next.js SSR storefront with sub-second page loads, automated GEO schema mapping, and server-side conversion funnels.',
    metrics: [
      { value: '98/100', label: 'Lighthouse mobile performance score' },
      { value: '+34%', label: 'increase in checkout conversion rate' },
      { value: '280ms', label: 'global TTFB on edge CDN' },
    ],
    architecture: [
      'Headless Next.js App Router Storefront on Vercel Edge Network',
      'Programmatic Schema.org / GEO Entity Graph Generator',
      'Server-Side Conversion Tracking & Resend Webhook Pipeline',
      'Dynamic Inventory & Pricing Sync Engine via Stripe & ERP',
    ],
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'PostHog', 'Resend'],
  },
  'synthetix-vector': {
    title: 'Synthetix Vector',
    subtitle: 'Autonomous compliance verification & audit agents.',
    category: 'ENTERPRISE AI / WORKFLOW',
    year: '2025',
    client: 'Healthcare Tech Provider',
    summary:
      'An autonomous multi-agent mesh for compliance verification, audit trail mapping, and document analysis.',
    problem:
      'Complex compliance workflows required hundreds of manual checklist reviews across multi-tenant HIPAA & SOC2 documents every week.',
    solution:
      'We built a multi-agent orchestrator where specialized agents cross-verify clauses, flag discrepancies, and produce immutable audit logs with human signoff.',
    metrics: [
      { value: '70%', label: 'manual audit time saved per contract' },
      { value: '100%', label: 'audit trail traceability & lineage' },
      { value: 'Zero', label: 'data retention breaches with local isolation' },
    ],
    architecture: [
      'Multi-Agent Stateful Graph (Planner, Evaluator, Reviewer)',
      'Isolated Local LLM Inference Layer with Air-Gapped Fallback',
      'Cryptographic Audit Trail Logging & Timestamping in Postgres',
      'Human-in-the-Loop Approval Dashboard with Diff Visualizer',
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'Next.js', 'PostgreSQL', 'Docker', 'Ollama'],
  },
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies[slug]

  if (!study) {
    notFound()
  }

  return (
    <PageShell>
      <main>
        {/* Hero */}
        <section className="page-hero">
          <p className="eyebrow">
            {study.category} / {study.year}
          </p>
          <h1>
            {study.title}
            <br />
            <span>{study.subtitle}</span>
          </h1>
          <p style={{ maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            {study.summary}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="button button-primary" href="/contact">
              Build a similar system <span>↗</span>
            </Link>
            <Link className="button button-ghost" href="/work">
              All case studies <span>←</span>
            </Link>
          </div>
        </section>

        {/* Metrics Ribbon */}
        <section className="proof-section" style={{ margin: '2rem auto 4rem auto' }}>
          <div className="proof-content">
            <p className="eyebrow">MEASURED IMPACT</p>
            <div className="metrics">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <strong>{m.value}</strong>
                  <p>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem vs Solution */}
        <section className="page-grid">
          <article className="page-card">
            <p className="card-label">THE CONSTRAINT</p>
            <h2>The Problem</h2>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.7', marginTop: '1rem' }}>
              {study.problem}
            </p>
          </article>

          <article className="page-card">
            <p className="card-label">THE INTERVENTION</p>
            <h2>The Caliber Solution</h2>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.7', marginTop: '1rem' }}>
              {study.solution}
            </p>
          </article>
        </section>

        {/* Architecture Components */}
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
            <p className="card-label">SYSTEM ARCHITECTURE</p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Engineered Components</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {study.architecture.map((item, idx) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <p className="card-label" style={{ marginBottom: '0.75rem' }}>TECH STACK</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
