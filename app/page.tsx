'use client'

import { useEffect, useRef, useState } from 'react'
import { SiteNav } from '@/components/site-nav'

const services = [
  { label: '01 / BUILD', title: 'Full-stack platforms', text: 'High-velocity SSR, modern APIs, and reactive interfaces that turn ambitious ideas into daily-use products.', className: 'service-wide' },
  { label: '02 / THINK', title: 'Generative AI systems', text: 'RAG engines, agentic workflows, and reliable LLM pipelines built for useful outcomes.', className: 'service-lime' },
  { label: '03 / SHIP', title: 'Cloud infrastructure', text: 'Containerized deployments, secure data layers, and operational foundations that scale quietly.', className: '' },
  { label: '04 / GROW', title: 'Technical growth engines', text: 'GEO, technical SEO, and automated funnels that make your product easier to discover and choose.', className: 'service-wide' },
]
const faqs = [
  ['How does withCaliberX approach new technical requirements?', 'We start with a structured intake, map constraints, then translate the highest-value path into a clear architecture and delivery plan.'],
  ['What technologies are used for custom web and cloud projects?', 'We work across Next.js, TypeScript, Python, FastAPI, Postgres, Docker, and the best fit of modern AI tooling for the problem.'],
  ['How do you implement secure AI solutions without data leaks?', 'We design explicit data boundaries, least-privilege access, isolated retrieval, observability, and human checkpoints where they matter.'],
  ['What is the typical turnaround time for an MVP build?', 'Focused MVPs typically move from alignment to a production-ready first release through a compact, highly focused engineering sprint.'],
  ['Do you provide ongoing maintenance and post-launch scaling?', 'Yes. We can stay close after launch for iteration, AI pipeline scaling, performance work, and long-term technical stewardship.'],
]

function OrbitalScene() {
  return <div className="orbital-scene" aria-hidden="true"><div className="scene-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="core-cube"><span>w</span><span>CX</span></div><i className="particle particle-one" /><i className="particle particle-two" /><i className="particle particle-three" /></div>
}

function Terminal() {
  const [line, setLine] = useState(0)
  const lines = ['connecting to vector_index...', 'query: launch-ready architecture', 'retrieved 42 relevant systems', 'response latency: 110ms']
  useEffect(() => { const timer = setInterval(() => setLine((current) => (current + 1) % lines.length), 1800); return () => clearInterval(timer) }, [lines.length])
  return <div className="terminal" aria-label="Live systems preview"><div className="terminal-bar"><span /><span /><span /><b>caliber.runtime</b></div><div className="terminal-body"><p><em>caliber</em> ~ /systems</p>{lines.map((item, index) => <p key={item} className={index === line ? 'active-line' : ''}><small>{index === line ? '›' : '·'}</small> {item}{index === line && <strong> _</strong>}</p>)}<div className="terminal-signal"><span /> systems nominal <b>110ms</b></div></div></div>
}

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const cursorFrame = useRef<number | null>(null)
  useEffect(() => {
    const saved = window.localStorage.getItem('caliber-theme') as 'light' | 'dark' | null
    setTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    const timer = setTimeout(() => setLoading(false), 900)
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { x: target.x, y: target.y }
    const move = (event: MouseEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      document.documentElement.classList.add('pointer-active')
    }
    const scroll = () => document.documentElement.style.setProperty('--scroll-progress', `${window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)}`)
    const animateCursor = () => {
      current.x += (target.x - current.x) * 0.1
      current.y += (target.y - current.y) * 0.1
      document.documentElement.style.setProperty('--pointer-x', `${current.x}px`)
      document.documentElement.style.setProperty('--pointer-y', `${current.y}px`)
      document.documentElement.style.setProperty('--tilt-x', `${(current.y / window.innerHeight - .5) * -8}deg`)
      document.documentElement.style.setProperty('--tilt-y', `${(current.x / window.innerWidth - .5) * 8}deg`)
      cursorFrame.current = window.requestAnimationFrame(animateCursor)
    }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('scroll', scroll, { passive: true })
    scroll()
    cursorFrame.current = window.requestAnimationFrame(animateCursor)
    return () => { clearTimeout(timer); window.removeEventListener('mousemove', move); window.removeEventListener('scroll', scroll); if (cursorFrame.current) window.cancelAnimationFrame(cursorFrame.current) }
  }, [])
  useEffect(() => { document.documentElement.dataset.theme = theme; window.localStorage.setItem('caliber-theme', theme) }, [theme])
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const closeMenu = () => setMenuOpen(false)
  return <>
    <div className={`loader ${loading ? '' : 'loader-hidden'}`} aria-hidden={!loading}><div className="loader-mark">w<span>CX</span></div><p>CALIBRATING SYSTEMS / 2026</p></div>
    <div className="pointer-glow" aria-hidden="true" />
    <main className="site-shell">
      <SiteNav />
      <section id="top" className="hero-section"><div className="hero-noise" /><OrbitalScene /><div className="hero-copy"><p className="eyebrow">ENGINEERING · AI · 2026</p><h1>Complex problems.<br /><span>Caliber execution.</span></h1><p className="hero-lede">Bespoke full-stack architectures, autonomous AI agents, and scalable cloud systems for teams building what comes next.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Discuss your project <span>↗</span></a><a className="button button-ghost" href="#solutions">Explore solutions <span>↓</span></a></div></div><div className="hero-foot"><span>SCROLL TO DISCOVER</span><span className="hero-line" /><span>EST. / INDEPENDENT ENGINEERING STUDIO</span></div></section>
      <section className="marquee-section" aria-label="Technology ecosystem"><div className="section-kicker">THE ECOSYSTEM / BUILT TO MOVE</div><div className="marquee"><div className="marquee-track">NEXT.JS <b>×</b> PYTHON <b>×</b> FASTAPI <b>×</b> DOCKER <b>×</b> LANGCHAIN <b>×</b> POSTGRES <b>×</b> NEXT.JS <b>×</b> PYTHON <b>×</b> FASTAPI <b>×</b></div></div></section>
      <section id="solutions" className="content-section solutions-section"><div className="section-intro"><div><p className="eyebrow">01 / CAPABILITIES</p><h2>One sharp team for<br /><span>the whole system.</span></h2></div><p>From first principle to final deploy, we connect strategy, engineering, and growth into one accountable line of execution.</p></div><div className="service-grid">{services.map((service) => <article className={`service-card ${service.className}`} key={service.title}><p className="card-label">{service.label}</p><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="card-arrow">↗</span></article>)}</div><Terminal /></section>
      <section id="method" className="content-section method-section"><div className="section-intro"><div><p className="eyebrow">02 / METHOD</p><h2>Disciplined by<br /><span>design.</span></h2></div><p>Good work compounds when the process is calm, visible, and relentlessly focused on the outcome.</p></div><div className="method-list">{[['01', 'Structured requirement intake', 'Comprehensive scoping and architecture blueprints before a single line of code.'], ['02', 'Single-project engineering discipline', 'Focused, uncompromised sprint delivery with zero distractions or handoff fog.'], ['03', 'Bulletproof deployment & scale', 'Containerized handoff, high-availability setups, and long-term maintainability.']].map(([num, title, text]) => <div className="method-row" key={num}><span className="method-num">{num}</span><h3>{title}</h3><p>{text}</p><span className="row-arrow">↗</span></div>)}</div></section>
      <section className="proof-section"><div className="proof-orb" /><div className="proof-content"><p className="eyebrow">03 / PROOF OF CALIBER</p><h2>Quiet confidence.<br /><span>Visible results.</span></h2><div className="metrics"><div><strong>110<span>ms</span></strong><p>average API response</p></div><div><strong>99.9<span>%</span></strong><p>deployment reliability</p></div><div><strong>1:1</strong><p>senior engineer access</p></div></div></div></section>
      <section id="engage" className="content-section engage-section"><div className="section-intro"><div><p className="eyebrow">04 / ENGAGEMENT</p><h2>Choose your<br /><span>operating mode.</span></h2></div><p>Direct engineering collaboration. Zero agency bloat. A structure that meets your ambition and your stage.</p></div><div className="tier-grid">{['SPRINT MVP', 'FULL-SCALE PLATFORM', 'DEDICATED RETAINER'].map((name, index) => <article className={`tier-card ${index === 1 ? 'tier-featured' : ''}`} key={name}><div><p className="card-label">0{index + 1} / {name}</p><h3>{['A focused first release.', 'For the serious build.', 'Your technical partner.'][index]}</h3></div><ul>{[['Single core product', 'Next.js + database setup', 'Architecture blueprint'], ['Custom SaaS / AI integrations', 'DevOps + growth engine', 'Senior product engineering'], ['Continuous feature iteration', 'AI pipeline scaling', 'Long-term stewardship']][index].map((item) => <li key={item}><span>＋</span>{item}</li>)}</ul><a href="#contact">Explore tier <span>↗</span></a></article>)}</div></section>
      <section id="faq" className="content-section faq-section"><div className="section-intro"><div><p className="eyebrow">05 / FAQ</p><h2>Clear answers.<br /><span>Before we build.</span></h2></div></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>
      <section id="contact" className="contact-section"><div className="contact-glow" /><p className="eyebrow">READY TO EXECUTE?</p><h2>Stop scrolling references.<br /><span>Let&apos;s build your solution.</span></h2><a className="button button-primary" href="mailto:hello@withcaliberx.com">Book discovery session <span>↗</span></a><div className="contact-marquee"><div className="marquee-track">HIGH POTENTIAL WORK <b>×</b> BULLETPROOF ARCHITECTURES <b>×</b> ZERO LEGACY DEBT <b>×</b> HIGH POTENTIAL WORK <b>×</b></div></div></section>
      <footer className="site-footer"><a href="#top" className="brand"><span className="brand-mark">w</span><span>withCaliber<span className="brand-x">X</span></span></a><p>Digital engineering for<br />the next constraint.</p><div><span className="status-dot" /> All systems nominal / 2026</div><small>© withCaliberX. Built with intent.</small></footer>
    </main>
  </>
}

