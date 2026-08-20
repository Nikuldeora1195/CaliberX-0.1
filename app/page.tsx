'use client'

import { useEffect, useRef, useState } from 'react'
import { SiteNav } from '@/components/site-nav'
import { HeroFluid } from '@/components/hero-fluid'
import {
  brand,
  hero,
  loader as loaderConfig,
  marquee,
  capabilities,
  services,
  method,
  proof,
  engagement,
  faq,
  contactCta,
} from '@/config/site'

// ─── Orbital Scene ────────────────────────────────────────────────────────────

function OrbitalScene() {
  return (
    <div className="orbital-scene" aria-hidden="true">
      <div className="scene-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="core-cube">
        <span>{hero.coreCubeText.mark}</span>
        <span>{hero.coreCubeText.suffix}</span>
      </div>
      <i className="particle particle-one" />
      <i className="particle particle-two" />
      <i className="particle particle-three" />
    </div>
  )
}

// ─── Terminal Widget ──────────────────────────────────────────────────────────

function Terminal() {
  const [line, setLine] = useState(0)
  const lines = hero.terminalLines

  useEffect(() => {
    const timer = setInterval(
      () => setLine((current) => (current + 1) % lines.length),
      1800,
    )
    return () => clearInterval(timer)
  }, [lines.length])

  return (
    <div className="terminal" aria-label="Live systems preview">
      <div className="terminal-bar">
        <span /><span /><span />
        <b>{hero.terminalTitle}</b>
      </div>
      <div className="terminal-body">
        <p>
          <em>{hero.terminalPrompt}</em> ~ {hero.terminalPath}
        </p>
        {lines.map((item, index) => (
          <p key={item} className={index === line ? 'active-line' : ''}>
            <small>{index === line ? '›' : '·'}</small> {item}
            {index === line && <strong> _</strong>}
          </p>
        ))}
        <div className="terminal-signal">
          <span /> systems nominal <b>{hero.terminalLatency}</b>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const cursorFrame = useRef<number | null>(null)

  // ── Initialise theme, cursor, scroll effects ──────────────────────────────
  useEffect(() => {
    const saved = window.localStorage.getItem('caliber-theme') as 'light' | 'dark' | null
    setTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

    const timer = setTimeout(() => setLoading(false), loaderConfig.durationMs)

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { x: target.x, y: target.y }

    const move = (event: MouseEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      document.documentElement.classList.add('pointer-active')
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

  // ── Theme persistence ─────────────────────────────────────────────────────
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('caliber-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <>
      {/* ── Loader ─────────────────────────────────────────────────────────── */}
      <div className={`loader ${loading ? '' : 'loader-hidden'}`} aria-hidden={!loading}>
        <div className="loader-mark">
          {loaderConfig.mark}<span>{loaderConfig.suffix}</span>
        </div>
        <p>{loaderConfig.tagline}</p>
      </div>

      {/* ── Cursor glow ────────────────────────────────────────────────────── */}
      <div className="pointer-glow" aria-hidden="true" />

      <main className="site-shell">
        {/* Full-screen WebGL fluid background */}
        <HeroFluid theme={theme} />
        <SiteNav />

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="top" className="hero-section">

          {/* All children sit above the canvas via z-index */}
          <div className="hero-noise" style={{ zIndex: 1, position: 'relative' }} />
          <OrbitalScene />
          <div className="hero-copy" style={{ zIndex: 3, position: 'relative' }}>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>
              {hero.headline}<br />
              <span>{hero.headlineSpan}</span>
            </h1>
            <p className="hero-lede">{hero.lede}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label} <span>↗</span>
              </a>
              <a className="button button-ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label} <span>↓</span>
              </a>
            </div>
          </div>
          <div className="hero-foot" style={{ zIndex: 3, position: 'relative' }}>
            <span>{hero.scrollLabel}</span>
            <span className="hero-line" />
            <span>{hero.footerLabel}</span>
          </div>
        </section>

        {/* ── Marquee / Ecosystem ──────────────────────────────────────────── */}
        <section className="marquee-section" aria-label="Technology ecosystem">
          <div className="section-kicker">{marquee.ecosystemLabel}</div>
          <div className="marquee">
            <div className="marquee-track">
              {marquee.ecosystem} <b>×</b> {marquee.ecosystem} <b>×</b>
            </div>
          </div>
        </section>

        {/* ── Capabilities / Services ──────────────────────────────────────── */}
        <section id="solutions" className="content-section solutions-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">{capabilities.eyebrow}</p>
              <h2>
                {capabilities.heading}<br />
                <span>{capabilities.headingSpan}</span>
              </h2>
            </div>
            <p>{capabilities.body}</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article
                className={`service-card ${service.className}`}
                key={service.title}
              >
                <p className="card-label">{service.label}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
          <Terminal />
        </section>

        {/* ── Method ───────────────────────────────────────────────────────── */}
        <section id="method" className="content-section method-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">{method.eyebrow}</p>
              <h2>
                {method.heading}<br />
                <span>{method.headingSpan}</span>
              </h2>
            </div>
            <p>{method.body}</p>
          </div>
          <div className="method-list">
            {method.steps.map(({ num, title, text }) => (
              <div className="method-row" key={num}>
                <span className="method-num">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="row-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Proof / Metrics ──────────────────────────────────────────────── */}
        <section className="proof-section">
          <div className="proof-orb" />
          <div className="proof-content">
            <p className="eyebrow">{proof.eyebrow}</p>
            <h2>
              {proof.heading}<br />
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

        {/* ── Engagement Tiers ─────────────────────────────────────────────── */}
        <section id="engage" className="content-section engage-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">{engagement.eyebrow}</p>
              <h2>
                {engagement.heading}<br />
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
                      <span>＋</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#contact">Explore tier <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="faq" className="content-section faq-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">{faq.eyebrow}</p>
              <h2>
                {faq.heading}<br />
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

        {/* ── Contact CTA ──────────────────────────────────────────────────── */}
        <section id="contact" className="contact-section">
          <div className="contact-glow" />
          <p className="eyebrow">{contactCta.eyebrow}</p>
          <h2>
            {contactCta.heading}<br />
            <span>{contactCta.headingSpan}</span>
          </h2>
          <a className="button button-primary" href={contactCta.cta.href}>
            {contactCta.cta.label} <span>↗</span>
          </a>
          <div className="contact-marquee">
            <div className="marquee-track">
              {marquee.contact} <b>×</b> {marquee.contact} <b>×</b>
            </div>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────────────── */}
        <footer className="site-footer">
          <a href="#top" className="brand">
            <span className="brand-mark">{brand.mark}</span>
            <span>
              {brand.name}<span className="brand-x">{brand.nameSuffix}</span>
            </span>
          </a>
          <p>
            {brand.footerTagline.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
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
