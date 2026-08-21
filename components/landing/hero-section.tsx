'use client'

import { hero } from '@/config/site'

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

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-noise" style={{ zIndex: 1, position: 'relative' }} />
      <OrbitalScene />

      <div className="hero-copy" style={{ zIndex: 3, position: 'relative' }}>
        {/* Animated Pill Badge */}
        
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.headline}
          <br />
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
  )
}
