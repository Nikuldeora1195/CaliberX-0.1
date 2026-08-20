import { PageShell } from '@/components/page-shell'
import { about } from '@/config/site'

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1>
            {about.heading}<br />
            <span>{about.headingSpan}</span>
          </h1>
          <p>{about.intro}</p>
        </section>

        <section className="page-grid">
          {about.cards.map((card) => (
            <article
              className={`page-card${card.wide ? ' wide' : ''}`}
              key={card.label}
            >
              <p className="card-label">{card.label}</p>
              <h2>{card.heading}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  )
}
