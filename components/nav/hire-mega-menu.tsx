'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  MonitorSmartphone,
} from 'lucide-react'
import { hireMegaMenu } from '@/config/site'

const TAB_ICONS = {
  'app-web': MonitorSmartphone,
  'ai-data': BrainCircuit,
  'cloud-devops': Cloud,
} as const

type Props = {
  onNavigate?: () => void
}

export function HireMegaMenu({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState(hireMegaMenu.tabs[0].id)
  const current = hireMegaMenu.tabs.find((tab) => tab.id === activeTab) ?? hireMegaMenu.tabs[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="mega-panel hire-mega-panel"
      role="menu"
    >
      <div className="hire-mega-layout">
        <div className="hire-mega-tabs" role="tablist">
          {hireMegaMenu.tabs.map((tab) => {
            const Icon = TAB_ICONS[tab.id as keyof typeof TAB_ICONS]
            const active = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`hire-tab ${active ? 'hire-tab-active' : ''}`}
                onMouseEnter={() => setActiveTab(tab.id)}
                onFocus={() => setActiveTab(tab.id)}
                onClick={() => setActiveTab(tab.id)}
              >
                {active && (
                  <motion.span
                    layoutId="hire-tab-pill"
                    className="hire-tab-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon size={16} strokeWidth={1.75} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.18 }}
            className="hire-mega-stacks"
            role="tabpanel"
          >
            {current.stacks.map((stack) => (
              <div className="hire-stack-item" key={`${current.id}-${stack.title}`}>
                <p className="hire-stack-group">{stack.group}</p>
                <strong>{stack.title}</strong>
                <small>{stack.subtitle}</small>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hire-mega-banner">
        <div>
          <strong>{hireMegaMenu.banner.text}</strong>
          <span>{hireMegaMenu.banner.subtext}</span>
        </div>
        <Link href={hireMegaMenu.banner.cta.href} onClick={onNavigate} className="hire-banner-cta">
          {hireMegaMenu.banner.cta.label} <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}
