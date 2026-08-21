'use client'

import { useState, FormEvent } from 'react'
import { brand, contactCta, marquee } from '@/config/site'

export function LeadCaptureCTA() {
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBusy(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const errData = await res.json()
        throw new Error(errData.error || 'Failed to submit inquiry')
      }

      setSent(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      <p className="eyebrow">{contactCta.eyebrow}</p>
      <h2>
        {contactCta.heading}
        <br />
        <span>{contactCta.headingSpan}</span>
      </h2>

      {sent ? (
        <div
          className="page-card"
          style={{
            maxWidth: '580px',
            margin: '2rem auto 3rem auto',
            textAlign: 'center',
            padding: '2.5rem 2rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(109, 69, 200, 0.2)',
              color: 'var(--primary)',
              marginBottom: '1rem',
              fontSize: '1.25rem',
            }}
          >
            ✓
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Project Inquiry Received</h3>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            We review incoming requirements within 2 hours. Want to get on our calendar directly?
          </p>
          <a
            href={brand.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
            style={{ display: 'inline-block' }}
          >
            Book discovery session ↗
          </a>
        </div>
      ) : (
        <form
          onSubmit={submit}
          style={{
            maxWidth: '680px',
            margin: '2rem auto 3rem auto',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
              Your Name *
              <input
                name="name"
                required
                placeholder="Nikul Deora"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  fontSize: '0.9rem',
                }}
              />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
              Work Email *
              <input
                name="email"
                type="email"
                required
                placeholder="nikul@company.com"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  fontSize: '0.9rem',
                }}
              />
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
              Company / Venture
              <input
                name="company"
                placeholder="Acme Corp or Seed Stage"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  fontSize: '0.9rem',
                }}
              />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
              Service Capability
              <select
                name="serviceType"
                defaultValue="full-stack-web"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  fontSize: '0.9rem',
                }}
              >
                <option value="full-stack-web">Full-Stack Web Development</option>
                <option value="generative-ai">Generative AI &amp; Automation</option>
                <option value="cloud-devops">Cloud Infrastructure &amp; DevOps</option>
                <option value="growth-engines">Technical Growth Engines</option>
                <option value="custom">Custom System Architecture</option>
              </select>
            </label>
          </div>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
            Budget Range
            <select
              name="budget"
              defaultValue="$25k–$75k"
              style={{
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                fontSize: '0.9rem',
              }}
            >
              <option value="Under $25k">Under $25k (Sprint MVP)</option>
              <option value="$25k–$75k">$25k–$75k (Full Platform)</option>
              <option value="$75k+">$75k+ (Enterprise / Retainer)</option>
            </select>
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
            Project Context &amp; Objective *
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us what you're building, what's in the way, and what constraints you have..."
              style={{
                padding: '0.8rem 1rem',
                borderRadius: '10px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                fontSize: '0.9rem',
                resize: 'vertical',
              }}
            />
          </label>

          {error && (
            <div style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.25rem' }}>
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="button button-primary"
            style={{ alignSelf: 'flex-start', marginTop: '0.5rem', cursor: busy ? 'not-allowed' : 'pointer' }}
          >
            {busy ? 'Transmitting Context...' : 'Send project context ↗'}
          </button>
        </form>
      )}

      <div className="contact-marquee">
        <div className="marquee-track">
          {marquee.contact} <b>×</b> {marquee.contact} <b>×</b>
        </div>
      </div>
    </section>
  )
}
