import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { productsPage } from '@/config/site'

export default function ProductsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">{productsPage.eyebrow}</p>
          <h1>
            {productsPage.heading}
            <br />
            <span>{productsPage.headingSpan}</span>
          </h1>
          <p>{productsPage.intro}</p>
        </section>

        <section className="products-grid-section">
          {productsPage.items.map((product) => (
            <article className="product-card" key={product.slug}>
              <div className="product-card-top">
                <span className="product-status">{product.status}</span>
                <p className="card-label">{product.category}</p>
              </div>
              <h2>{product.name}</h2>
              <p className="product-tagline">{product.tagline}</p>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href={product.href} className="product-link">
                {product.ctaLabel} <span>↗</span>
              </Link>
            </article>
          ))}
        </section>

        <section className="products-cta-band">
          <div>
            <p className="eyebrow">{productsPage.ctaBand.eyebrow}</p>
            <h2>{productsPage.ctaBand.heading}</h2>
            <p>{productsPage.ctaBand.body}</p>
          </div>
          <Link className="button button-primary" href={productsPage.ctaBand.href}>
            {productsPage.ctaBand.ctaLabel} <span>↗</span>
          </Link>
        </section>
      </main>
    </PageShell>
  )
}
