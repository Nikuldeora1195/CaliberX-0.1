import Link from 'next/link'
import { strategyCall } from '@/config/site'

export function StrategyCallSection() {
  return (
    <section className="strategy-section" id="strategy-call">
      <div className="strategy-section-inner">
        <div className="strategy-section-glow" aria-hidden="true" />
        <div className="strategy-section-content">
          <p className="strategy-eyebrow">{strategyCall.eyebrow}</p>
          <h2>{strategyCall.heading}</h2>
          <p className="strategy-lede">{strategyCall.lede}</p>
          <p className="strategy-body">{strategyCall.body}</p>
          <div className="strategy-actions">
            <Link className="button button-primary" href={strategyCall.primaryCta.href}>
              {strategyCall.primaryCta.label} <span>↗</span>
            </Link>
            <Link className="button button-ghost strategy-ghost" href={strategyCall.secondaryCta.href}>
              {strategyCall.secondaryCta.label} <span>↓</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
