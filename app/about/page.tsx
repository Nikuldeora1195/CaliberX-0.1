import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { about, proof } from '@/config/site'

const values = [
  {
    num: '01',
    title: 'Single-Project Discipline',
    body: 'We do not run dozens of fragmented accounts. We deploy focused senior engineers directly to your problem until it is shipped and stable.',
  },
  {
    num: '02',
    title: 'Zero Legacy Debt',
    body: 'We write legible, type-safe, modular code that your in-house team can understand, operate, and scale long after handoff.',
  },
  {
    num: '03',
    title: 'Pragmatic AI Systems',
    body: 'We build AI workflows that solve real bottlenecks with verifiable outputs, bounded retrieval, and predictable operational costs.',
  },
  {
    num: '04',
    title: 'Radical Transparency',
    body: 'Direct access to engineers via Slack/Discord, weekly visible increments, and zero agency account manager fog.',
  },
]

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1>
            {about.heading}
            <br />
            <span>{about.headingSpan}</span>
          </h1>
          <p className="page-hero-lede">{about.intro}</p>

          <div className="page-hero-actions">
            <Link className="button button-primary" href="/contact">
              Start a conversation <span>↗</span>
            </Link>
            <Link className="button button-ghost" href="/work">
              Explore our work <span>↓</span>
            </Link>
          </div>
        </section>

        <section className="about-vision-section">
          <article className="about-vision-card">
            <p className="card-label">{about.vision.label}</p>
            <h2>{about.vision.heading}</h2>
            <p>{about.vision.body}</p>
          </article>
          <article className="about-vision-card">
            <p className="card-label">{about.goal.label}</p>
            <h2>{about.goal.heading}</h2>
            <p>{about.goal.body}</p>
          </article>
        </section>

        <section className="proof-section about-proof-band">
          <div className="proof-content">
            <p className="eyebrow">{proof.eyebrow}</p>
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

        <section className="about-team-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">{about.team.eyebrow}</p>
              <h2>
                {about.team.heading}
                <br />
                <span>{about.team.headingSpan}</span>
              </h2>
            </div>
            <p>{about.team.intro}</p>
          </div>

          <div className="team-grid">
            {about.team.members.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-avatar" aria-hidden="true">
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <p className="team-focus">{member.focus}</p>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-intro">
            <div>
              <p className="eyebrow">OUR CODE OF EXECUTION</p>
              <h2>
                How we operate<span>.</span>
              </h2>
            </div>
            <p>Principles that guide every architecture decision, commit, and client collaboration.</p>
          </div>

          <div className="page-grid">
            {values.map((v) => (
              <article className="page-card" key={v.title}>
                <span className="value-num">{v.num}</span>
                <h2>{v.title}</h2>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-collab-section">
          <div className="page-card wide about-collab-card">
            <p className="card-label">COLLABORATION MODEL</p>
            <h2>Remote by default. Close by design.</h2>
            <p>
              We collaborate with high-growth teams and founders across North America, Europe, and Asia-Pacific.
              Every partnership includes direct Slack channels, asynchronous video walk-throughs, and staging environments updated on every git push.
            </p>
            <Link className="button button-primary" href="/contact">
              Work with us <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
