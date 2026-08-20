import { SiteNav } from './site-nav'

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><div className="pointer-glow" aria-hidden="true" /><div className="site-shell"><SiteNav />{children}</div></>
}
