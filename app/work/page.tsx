import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { projects } from '@/config/site'

export default function WorkPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">WORK / SELECTED SYSTEMS</p>
          <h1>
            Built for the<br />
            <span>hard parts.</span>
          </h1>
          <p>
            Case studies in thoughtful architecture, practical AI, and products
            that create momentum after launch.
          </p>
        </section>

        <section className="work-list">
          {projects.map((project) => (
            <Link
              href={`/work/${project.slug}`}
              className="work-card"
              key={project.slug}
            >
              <div>
                <p className="card-label">
                  {project.category} / {project.year}
                </p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
              <span className="card-arrow">↗</span>
            </Link>
          ))}
        </section>
      </main>
    </PageShell>
  )
}
