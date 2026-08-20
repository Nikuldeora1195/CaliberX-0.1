'use client'

import Link from 'next/link'
import { useState } from 'react'
import { brand, nav } from '@/config/site'

export function SiteNav() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <header className="site-nav">
      {/* Brand / Logo */}
      <Link href="/" className="brand">
        <span className="brand-mark">{brand.mark}</span>
        <span>
          {brand.name}<span className="brand-x">{brand.nameSuffix}</span>
        </span>
      </Link>

      {/* Nav groups with dropdowns */}
      <nav className="nav-links">
        {nav.groups.map((group) => (
          <div className="nav-group" key={group.label}>
            <button onClick={() => setOpen(open === group.label ? null : group.label)}>
              {group.label}<span>⌄</span>
            </button>
            {open === group.label && (
              <div className="nav-dropdown">
                {group.links.map(([label, href]) => (
                  <Link href={href} key={href} onClick={() => setOpen(null)}>
                    {label}<span>↗</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Actions */}
      <div className="nav-actions">
        <Link className="nav-cta" href={nav.cta.href}>
          {nav.cta.label} <span>↗</span>
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(open ? null : nav.groups[0].label)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </header>
  )
}
