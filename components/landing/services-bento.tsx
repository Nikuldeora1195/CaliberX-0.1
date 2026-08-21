'use client'

import Link from 'next/link'
import { capabilities, services } from '@/config/site'
import { InteractiveDemo } from './interactive-demo'

export function ServicesBento() {
  return (
    <section id="solutions" className="content-section solutions-section">
      <div className="section-intro">
        <div>
          <p className="eyebrow">{capabilities.eyebrow}</p>
          <h2>
            {capabilities.heading}
            <br />
            <span>{capabilities.headingSpan}</span>
          </h2>
        </div>
        <p>{capabilities.body}</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <Link
            href={`/services/${service.slug}`}
            key={service.slug}
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
          >
            <article className={`service-card ${service.className}`} style={{ width: '100%' }}>
              <p className="card-label">{service.label}</p>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="card-arrow">↗</span>
            </article>
          </Link>
        ))}
      </div>

      {/* Live Interactive Systems Terminal Demo */}
      <InteractiveDemo />
    </section>
  )
}
