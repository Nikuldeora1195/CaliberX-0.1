import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { PageShell } from '@/components/page-shell'
import Link from 'next/link'
export default async function AdminLayout({ children }: { children: React.ReactNode }) { const session = await auth.api.getSession({ headers: await headers() }); if (!session?.user) redirect('/admin/login'); return <PageShell><div className="admin-shell"><div className="admin-nav"><div><p className="eyebrow">CALIBER / ADMIN</p><h1 className="page-title">Control room<span>.</span></h1></div><nav className="admin-nav-links"><Link href="/admin">Overview</Link><Link href="/admin/leads">Leads</Link><Link href="/admin/projects">Projects</Link></nav></div>{children}</div></PageShell> }
