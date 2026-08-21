'use client'

import { marquee } from '@/config/site'

const techItems = [
  'NEXT.JS',
  'PYTHON',
  'FASTAPI',
  'DOCKER',
  'LANGCHAIN',
  'SUPABASE',
  'POSTGRES',
  'REDIS',
  'TYPESCRIPT',
  'TAILWIND',
]

export function TechMarquee() {
  const tickerContent = techItems.join(' × ')

  return (
    <section className="marquee-section" aria-label="Technology ecosystem">
      <div className="section-kicker">{marquee.ecosystemLabel}</div>
      <div className="marquee">
        <div className="marquee-track">
          {tickerContent} <b>×</b> {tickerContent} <b>×</b> {tickerContent} <b>×</b>
        </div>
      </div>
    </section>
  )
}
