import Link from 'next/link'
import { db } from '@/lib/db'
import { leads, projects } from '@/lib/db/schema'
export default async function AdminPage() { const [leadRows, projectRows] = await Promise.all([db.select().from(leads), db.select().from(projects)]); return <main><div className="page-grid"><article className="page-card"><p className="card-label">INCOMING LEADS</p><h2>{leadRows.length}</h2><p>Project inquiries in the Neon queue.</p><Link href="/admin/leads">Manage leads ↗</Link></article><article className="page-card"><p className="card-label">CASE STUDIES</p><h2>{projectRows.length}</h2><p>Portfolio records available to publish.</p><Link href="/admin/projects">Manage projects ↗</Link></article></div></main> }
