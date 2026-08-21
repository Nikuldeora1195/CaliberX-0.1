'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { servicesMegaMenu } from '@/config/site'

type Props = {
  onNavigate?: () => void
}

export function ServicesMegaMenu({ onNavigate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="mega-panel"
      role="menu"
    >
      <div className="mega-panel-grid services-mega-grid">
        {servicesMegaMenu.columns.map((column) => (
          <div className="mega-column" key={column.badge}>
            <p className="mega-badge">• {column.badge}</p>
            <ul className="mega-list">
              {column.items.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} onClick={onNavigate} className="mega-link">
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </span>
                    <ArrowUpRight size={14} strokeWidth={1.75} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <aside className="mega-featured-card">
          <span className="mega-featured-badge">{servicesMegaMenu.featured.badge}</span>
          <h3>{servicesMegaMenu.featured.title}</h3>
          <p>{servicesMegaMenu.featured.description}</p>
          <Link
            href={servicesMegaMenu.featured.cta.href}
            onClick={onNavigate}
            className="mega-featured-cta"
          >
            {servicesMegaMenu.featured.cta.label}
          </Link>
        </aside>
      </div>
    </motion.div>
  )
}
