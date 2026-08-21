'use client'

import { useState, useEffect } from 'react'

type TabKey = 'rag' | 'saas' | 'agents'

interface TabContent {
  title: string
  label: string
  path: string
  latency: string
  lines: string[]
  metrics: { label: string; val: string }[]
}

const tabData: Record<TabKey, TabContent> = {
  rag: {
    title: 'caliber.rag_engine',
    label: 'AI / RAG Pipeline',
    path: '/ai/vector_search',
    latency: '82ms',
    metrics: [
      { label: 'Embedding Recall', val: '99.4%' },
      { label: 'Retrieval Latency', val: '42ms' },
      { label: 'Hallucination Guard', val: 'Active' },
    ],
    lines: [
      'initializing pgvector hybrid index...',
      'retrieving context vectors (k=12, threshold=0.88)',
      'reranking top-4 candidates via cross-encoder',
      'injecting bounded system prompt + guardrails',
      'streaming 62 tokens/sec with sub-100ms TTFT',
    ],
  },
  saas: {
    title: 'caliber.saas_runtime',
    label: 'Next.js SaaS Web App',
    path: '/app/edge_route',
    latency: '18ms',
    metrics: [
      { label: 'SSR Render', val: '14ms' },
      { label: 'Edge Cache Hit', val: '98.7%' },
      { label: 'Lighthouse Score', val: '100/100' },
    ],
    lines: [
      'incoming request: GET /api/v1/workspaces/analytics',
      'verifying session token via Better-Auth cookie',
      'database query: Postgres connection pool warmed',
      'optimistic UI hydration complete on client',
      'response dispatched: 200 OK (gzip 4.2kb)',
    ],
  },
  agents: {
    title: 'caliber.agent_mesh',
    label: 'Autonomous Workflows',
    path: '/mesh/dispatch',
    latency: '110ms',
    metrics: [
      { label: 'Agent Consensus', val: '3/3' },
      { label: 'Tool Success Rate', val: '99.9%' },
      { label: 'Human Checkpoint', val: 'Passed' },
    ],
    lines: [
      'event trigger: lead.qualified -> pipeline',
      'spawning orchestrator agent: plan_generation',
      'tool invocation: generate_architecture_spec()',
      'human-in-the-loop review approved via webhook',
      'task completed: notification dispatched to client',
    ],
  },
}

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<TabKey>('rag')
  const [lineIndex, setLineIndex] = useState(0)

  const current = tabData[activeTab]

  useEffect(() => {
    setLineIndex(0)
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % current.lines.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [activeTab, current.lines.length])

  return (
    <div className="terminal-container" style={{ margin: '3rem 0' }}>
      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {(Object.keys(tabData) as TabKey[]).map((tabKey) => {
          const tab = tabData[tabKey]
          const isSelected = activeTab === tabKey
          return (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              style={{
                background: isSelected
                  ? 'linear-gradient(135deg, rgba(109, 69, 200, 0.25), rgba(162, 111, 223, 0.15))'
                  : 'var(--surface)',
                border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border)',
                color: isSelected ? 'var(--foreground)' : 'var(--muted-foreground)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: isSelected ? 600 : 500,
                letterSpacing: '0.03em',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Terminal Card */}
      <div className="terminal" aria-label="Interactive systems preview">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
          <b>{current.title}</b>
        </div>

        <div className="terminal-body">
          <p>
            <em>caliber</em> ~ {current.path}
          </p>

          {current.lines.map((item, index) => {
            const isActive = index === lineIndex
            const isDone = index < lineIndex
            return (
              <p
                key={item}
                className={isActive ? 'active-line' : ''}
                style={{ opacity: isDone ? 0.7 : isActive ? 1 : 0.4 }}
              >
                <small>{isActive ? '›' : isDone ? '✓' : '·'}</small> {item}
                {isActive && <strong> _</strong>}
              </p>
            )
          })}

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.75rem',
              marginTop: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {current.metrics.map((m) => (
              <div key={m.label} style={{ fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--terminal-muted)', display: 'block' }}>{m.label}</span>
                <strong style={{ color: '#fff', fontSize: '0.9rem' }}>{m.val}</strong>
              </div>
            ))}
          </div>

          <div className="terminal-signal" style={{ marginTop: '1rem' }}>
            <span /> systems nominal <b>{current.latency}</b>
          </div>
        </div>
      </div>
    </div>
  )
}
