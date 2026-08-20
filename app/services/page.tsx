import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { services } from '@/config/site'

export default function ServicesPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">SERVICES / CAPABILITIES</p>
          <h1>
            One team for<br />
            <span>the whole system.</span>
          </h1>
          <p>
            We connect product thinking, senior engineering, and operational rigor
            into one accountable line of execution.
          </p>
        </section>

        <section className="page-grid">
          {services.map((service, index) => (
            <article className="page-card" key={service.slug}>
              <p className="card-label">0{index + 1} / SERVICE</p>
              <h2>{service.title}</h2>
              <p>{service.pageText}</p>
              <Link href={`/services/${service.slug}`}>
                Explore capability <span>↗</span>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  )
}
