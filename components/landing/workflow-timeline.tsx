'use client'

import { method } from '@/config/site'

export function WorkflowTimeline() {
  return (
    <section id="method" className="content-section method-section">
      <div className="section-intro">
        <div>
          <p className="eyebrow">{method.eyebrow}</p>
          <h2>
            {method.heading}
            <br />
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
  )
}
