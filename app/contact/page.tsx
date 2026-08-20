'use client'

import { FormEvent, useState } from 'react'
import { PageShell } from '@/components/page-shell'
import { contact, brand } from '@/config/site'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    const form = new FormData(event.currentTarget)
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(form)),
    })
    setBusy(false)
    setSent(true)
  }

  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1>
            {contact.heading}<br />
            <span>{contact.headingSpan}</span>
          </h1>
          <p>{contact.intro}</p>
        </section>

        {sent ? (
          <section className="content-section">
            <div className="page-card wide">
              <p className="eyebrow">MESSAGE RECEIVED</p>
              <h2>{contact.successHeading}</h2>
              <p>
                {contact.successBody}{' '}
                <a href={brand.calendlyUrl} target="_blank" rel="noreferrer">
                  Open Calendly ↗
                </a>
              </p>
            </div>
          </section>
        ) : (
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>
                Name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required placeholder="you@company.com" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Company
                <input name="company" placeholder="Company or team" />
              </label>
              <label>
                Budget
                <select name="budget" defaultValue="">
                  <option value="" disabled>Select a range</option>
                  {contact.budgetOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              Project type
              <select name="projectType" defaultValue={contact.projectTypes[0]}>
                {contact.projectTypes.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </label>
            <label>
              Tell us more
              <textarea
                name="message"
                required
                placeholder="What are you trying to make possible?"
              />
            </label>
            <button className="button button-primary" disabled={busy}>
              {busy ? 'Sending…' : 'Send project context ↗'}
            </button>
          </form>
        )}
      </main>
    </PageShell>
  )
}
