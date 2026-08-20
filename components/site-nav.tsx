'use client'

import Link from 'next/link'
import { useState } from 'react'

const groups = [{ label: 'Services', links: [['Full-stack web', '/services/full-stack-web-development'], ['Generative AI', '/services/generative-ai-and-automation'], ['Cloud & DevOps', '/services/cloud-infrastructure-devops']] }, { label: 'Explore', links: [['Work', '/work'], ['About', '/about'], ['Contact', '/contact']] }]

export function SiteNav() {
  const [open, setOpen] = useState<string | null>(null)
  return <header className="site-nav"><Link href="/" className="brand"><span className="brand-mark">w</span><span>withCaliber<span className="brand-x">X</span></span></Link><nav className="nav-links">{groups.map((group) => <div className="nav-group" key={group.label}><button onClick={() => setOpen(open === group.label ? null : group.label)}>{group.label}<span>⌄</span></button>{open === group.label && <div className="nav-dropdown">{group.links.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(null)}>{label}<span>↗</span></Link>)}</div>}</div>)}</nav><div className="nav-actions"><Link className="nav-cta" href="/contact">Start a conversation <span>↗</span></Link><button className="menu-button" onClick={() => setOpen(open ? null : 'Services')} aria-label="Toggle navigation">☰</button></div></header>
}
