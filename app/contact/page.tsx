'use client'

import { FormEvent, useState } from 'react'
import { PageShell } from '@/components/page-shell'
import { contact, brand } from '@/config/site'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [selectedService, setSelectedService] = useState(contact.projectTypes[0])
  const [selectedBudget, setSelectedBudget] = useState(contact.budgetOptions[1])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setError('')

    const form = new FormData(event.currentTarget)
    const payload = Object.fromEntries(form)
    payload.serviceType = selectedService
    payload.budget = selectedBudget

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Failed to submit inquiry')
      }

      setSent(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1>
            {contact.heading}
            <br />
            <span>{contact.headingSpan}</span>
          </h1>
          <p style={{ maxWidth: '780px', margin: '0 auto 2rem auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            {contact.intro}
          </p>
        </section>

        {sent ? (
          <section className="content-section" style={{ maxWidth: '680px', margin: '0 auto 5rem auto' }}>
            <div className="page-card wide" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(109, 69, 200, 0.2)',
                  color: 'var(--primary)',
                  marginBottom: '1.25rem',
                  fontSize: '1.5rem',
                }}
              >
                ✓
              </div>
              <p className="eyebrow">MESSAGE RECEIVED</p>
              <h2>{contact.successHeading}</h2>
              <p style={{ color: 'var(--muted-foreground)', margin: '1rem 0 2rem 0', fontSize: '1.05rem', lineHeight: '1.7' }}>
                {contact.successBody}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={brand.calendlyUrl} target="_blank" rel="noreferrer" className="button button-primary">
                  Open Calendly Calendar ↗
                </a>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="button button-ghost"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div style={{ maxWidth: '800px', margin: '0 auto 6rem auto', padding: '0 1.5rem' }}>
            <form className="contact-form" onSubmit={submit} style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', backdropFilter: 'blur(16px)' }}>
              
              {/* Service Selection Pills */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.85rem', fontWeight: 600 }}>
                  Select Primary Focus Area
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {contact.projectTypes.map((type) => {
                    const isSelected = selectedService === type
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedService(type)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '8px',
                          border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border)',
                          background: isSelected ? 'rgba(109, 69, 200, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                          color: isSelected ? 'var(--foreground)' : 'var(--muted-foreground)',
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          fontWeight: isSelected ? 600 : 500,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {type}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Budget Range Pills */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.85rem', fontWeight: 600 }}>
                  Estimated Project Budget
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {contact.budgetOptions.map((opt) => {
                    const isSelected = selectedBudget === opt
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setSelectedBudget(opt)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '8px',
                          border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border)',
                          background: isSelected ? 'rgba(109, 69, 200, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                          color: isSelected ? 'var(--foreground)' : 'var(--muted-foreground)',
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          fontWeight: isSelected ? 600 : 500,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="form-row">
                <label>
                  Your Name *
                  <input name="name" required placeholder="Nikul Deora" />
                </label>
                <label>
                  Work Email *
                  <input name="email" type="email" required placeholder="nikul@company.com" />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Company / Organization
                  <input name="company" placeholder="Acme Inc. or Stealth Startup" />
                </label>
              </div>

              <label>
                Project Context &amp; Objectives *
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us what you are trying to make possible, where the architectural bottleneck is, and your timeline expectations."
                />
              </label>

              {error && (
                <div style={{ color: '#ff6b6b', fontSize: '0.85rem', margin: '0.5rem 0' }}>
                  ⚠️ {error}
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <button className="button button-primary" disabled={busy} type="submit">
                  {busy ? 'Transmitting Context…' : 'Send project context ↗'}
                </button>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
                  🔒 Strict NDA &amp; confidential communication
                </span>
              </div>
            </form>
          </div>
        )}
      </main>
    </PageShell>
  )
}
