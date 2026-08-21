'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { brand, hireMegaMenu, nav, servicesMegaMenu } from '@/config/site'
import { HireMegaMenu } from '@/components/nav/hire-mega-menu'
import { ServicesMegaMenu } from '@/components/nav/services-mega-menu'
import { ThemeToggle } from '@/components/theme-toggle'

type OpenMenu = 'services' | 'hire' | null

const HOVER_CLOSE_DELAY = 180

export function SiteNav() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  const scheduleClose = useCallback(() => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpenMenu(null), HOVER_CLOSE_DELAY)
  }, [clearCloseTimer])

  const open = useCallback(
    (menu: OpenMenu) => {
      clearCloseTimer()
      setOpenMenu(menu)
    },
    [clearCloseTimer],
  )

  const closeAll = useCallback(() => {
    clearCloseTimer()
    setOpenMenu(null)
    setMobileOpen(false)
  }, [clearCloseTimer])

  useEffect(() => {
    return () => clearCloseTimer()
  }, [clearCloseTimer])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAll()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeAll])

  return (
    <header className="site-nav mega-nav">
      <Link href="/" className="brand" onClick={closeAll}>
        <span className="brand-mark">{brand.mark}</span>
        <span>
          {brand.name}
          <span className="brand-x">{brand.nameSuffix}</span>
        </span>
      </Link>

      <nav className="mega-nav-center" aria-label="Primary">
        <div
          className="mega-nav-item"
          onMouseEnter={() => open('services')}
          onMouseLeave={scheduleClose}
          onFocus={() => open('services')}
          onBlur={scheduleClose}
        >
          <button
            type="button"
            className={`mega-nav-trigger ${openMenu === 'services' ? 'mega-nav-trigger-open' : ''}`}
            aria-expanded={openMenu === 'services'}
            aria-haspopup="true"
            onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')}
          >
            {servicesMegaMenu.label}
            <ChevronDown size={14} className="mega-chevron" />
          </button>
          <AnimatePresence>
            {openMenu === 'services' && (
              <div className="mega-nav-dropdown" onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
                <ServicesMegaMenu onNavigate={closeAll} />
              </div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="mega-nav-item"
          onMouseEnter={() => open('hire')}
          onMouseLeave={scheduleClose}
          onFocus={() => open('hire')}
          onBlur={scheduleClose}
        >
          <button
            type="button"
            className={`mega-nav-trigger ${openMenu === 'hire' ? 'mega-nav-trigger-open' : ''}`}
            aria-expanded={openMenu === 'hire'}
            aria-haspopup="true"
            onClick={() => setOpenMenu(openMenu === 'hire' ? null : 'hire')}
          >
            {hireMegaMenu.label}
            <ChevronDown size={14} className="mega-chevron" />
          </button>
          <AnimatePresence>
            {openMenu === 'hire' && (
              <div className="mega-nav-dropdown mega-nav-dropdown-wide" onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
                <HireMegaMenu onNavigate={closeAll} />
              </div>
            )}
          </AnimatePresence>
        </div>

        {nav.simpleLinks.map((link) => (
          <Link key={link.href} href={link.href} className="mega-nav-link" onClick={closeAll}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions mega-nav-actions">
        <ThemeToggle />
        <Link className="nav-cta" href={nav.cta.href} onClick={closeAll}>
          {nav.cta.label} <span>↗</span>
        </Link>
        <button
          type="button"
          className="menu-button mega-menu-button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mega-mobile-drawer">
          <p className="mega-mobile-label">{servicesMegaMenu.label}</p>
          {servicesMegaMenu.columns.flatMap((column) =>
            column.items.map((item) => (
              <Link key={item.href + item.title} href={item.href} onClick={closeAll} className="mega-mobile-link">
                {item.title}
              </Link>
            )),
          )}
          <p className="mega-mobile-label">{hireMegaMenu.label}</p>
          {hireMegaMenu.tabs.map((tab) => (
            <span key={tab.id} className="mega-mobile-sublabel">
              {tab.label}
            </span>
          ))}
          {nav.simpleLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeAll} className="mega-mobile-link">
              {link.label}
            </Link>
          ))}
          <Link className="button button-primary mega-mobile-cta" href={nav.cta.href} onClick={closeAll}>
            {nav.cta.label} <span>↗</span>
          </Link>
        </div>
      )}
    </header>
  )
}
