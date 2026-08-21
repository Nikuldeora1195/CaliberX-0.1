'use client'

import { useEffect, useRef, useState } from 'react'
import { SiteNav } from '@/components/site-nav'
import { HeroFluid } from '@/components/hero-fluid'
import { HeroSection } from '@/components/landing/hero-section'
import { TechMarquee } from '@/components/landing/tech-marquee'
import { ServicesBento } from '@/components/landing/services-bento'
import { WorkflowTimeline } from '@/components/landing/workflow-timeline'
import { StrategyCallSection } from '@/components/landing/strategy-call-section'
import { LeadCaptureCTA } from '@/components/landing/lead-capture-cta'
import { useTheme } from '@/components/theme-provider'
import {
  brand,
  loader as loaderConfig,
  proof,
  engagement,
  faq,
} from '@/config/site'

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)
  const { theme } = useTheme()
  const cursorFrame = useRef<number | null>(null)

  // ── Initialise cursor & scroll effects ──────────────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), loaderConfig.durationMs)

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { x: target.x, y: target.y }

    const move = (event: MouseEvent) => {
      target.x = event.clientX
      target.y = event.clientY
    }

    const scroll = () =>
      document.documentElement.style.setProperty(
        '--scroll-progress',
        `${window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)}`,
      )

    const animateCursor = () => {
      current.x += (target.x - current.x) * 0.1
      current.y += (target.y - current.y) * 0.1
      document.documentElement.style.setProperty('--pointer-x', `${current.x}px`)
      document.documentElement.style.setProperty('--pointer-y', `${current.y}px`)
      document.documentElement.style.setProperty(
        '--tilt-x',
        `${(current.y / window.innerHeight - 0.5) * -8}deg`,
      )
      document.documentElement.style.setProperty(
        '--tilt-y',
        `${(current.x / window.innerWidth - 0.5) * 8}deg`,
      )
      cursorFrame.current = window.requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('scroll', scroll, { passive: true })
    scroll()
    cursorFrame.current = window.requestAnimationFrame(animateCursor)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('scroll', scroll)
      if (cursorFrame.current) window.cancelAnimationFrame(cursorFrame.current)
    }
  }, [])

  return (
    <>
      {/* ── Loader ─────────────────────────────────────────────────────────── */}
      <div className={`loader ${loading ? '' : 'loader-hidden'}`} aria-hidden={!loading}>
        <div className="loader-mark">
          {loaderConfig.mark}
          <span>{loaderConfig.suffix}</span>
        </div>
        <p>{loaderConfig.tagline}</p>
      </div>

      <main className="site-shell">
        {/* Full-screen WebGL fluid background */}
        <HeroFluid theme={theme} />
        <SiteNav />

        {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── 2. Tech Stack Marquee ────────────────────────────────────────── */}
        <TechMarquee />

        {/* ── 3. Capabilities / Services Bento Grid & Interactive Demo ─────── */}
        <ServicesBento />

        {/* ── 4. 3-Step Delivery Workflow Timeline ─────────────────────────── */}
        <WorkflowTimeline />

        {/* ── 5. Proof / Metrics ───────────────────────────────────────────── */}
        <section className="proof-section">
          <div className="proof-orb" />
          <div className="proof-content">
            <p className="eyebrow">{proof.eyebrow}</p>
            <h2>
              {proof.heading}
              <br />
              <span>{proof.headingSpan}</span>
            </h2>
            <div className="metrics">
              {proof.metrics.map(({ value, unit, label }) => (
                <div key={label}>
                  <strong>
                    {value}
                    {unit && <span>{unit}</span>}
                  </strong>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Engagement Tiers ──────────────────────────────────────────── */}
        <section id="engage" className="content-section engage-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">{engagement.eyebrow}</p>
              <h2>
                {engagement.heading}
                <br />
                <span>{engagement.headingSpan}</span>
              </h2>
            </div>
            <p>{engagement.body}</p>
          </div>
          <div className="tier-grid">
            {engagement.tiers.map((tier, index) => (
              <article
                className={`tier-card ${tier.featured ? 'tier-featured' : ''}`}
                key={tier.name}
              >
                <div>
                  <p className="card-label">0{index + 1} / {tier.name}</p>
                  <h3>{tier.tagline}</h3>
                </div>
                <ul>
                  {tier.features.map((item) => (
                    <li key={item}>
                      <span>＋</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  Explore tier <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ── 7. FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" className="content-section faq-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">{faq.eyebrow}</p>
              <h2>
                {faq.heading}
                <br />
                <span>{faq.headingSpan}</span>
              </h2>
            </div>
          </div>
          <div className="faq-list">
            {faq.items.map(([question, answer], index) => (
              <div
                className={`faq-item ${openFaq === index ? 'faq-open' : ''}`}
                key={question}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{question}</span>
                  <b>{openFaq === index ? '−' : '+'}</b>
                </button>
                {openFaq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ── 7b. Strategy Call ──────────────────────────────────────────── */}
        <StrategyCallSection />

        {/* ── 8. Lead Capture CTA Form ─────────────────────────────────────── */}
        <LeadCaptureCTA />

        {/* ── 9. Footer ────────────────────────────────────────────────────── */}
        <footer className="site-footer">
          <a href="#top" className="brand">
            <span className="brand-mark">{brand.mark}</span>
            <span>
              {brand.name}
              <span className="brand-x">{brand.nameSuffix}</span>
            </span>
          </a>
          <p>
            {brand.footerTagline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </p>
          <div>
            <span className="status-dot" /> {brand.footerStatus}
          </div>
          <small>{brand.copyright}</small>
        </footer>
      </main>
    </>
  )
}
