import Link from 'next/link'
import { db, isDbConfigured } from '@/lib/db'
import { projects } from '@/lib/db/schema'
import { projects as defaultProjects } from '@/config/site'

export default async function ProjectsPage() {
  let rows: Array<{
    id: number
    slug: string
    title: string
    category: string
    summary: string
    year: string
    featured: boolean
  }> = []

  if (isDbConfigured) {
    try {
      rows = await db.select().from(projects)
    } catch {
      rows = defaultProjects.map((p, idx) => ({
        id: idx + 1,
        ...p,
        featured: true,
      }))
    }
  } else {
    rows = defaultProjects.map((p, idx) => ({
      id: idx + 1,
      ...p,
      featured: true,
    }))
  }

  return (
    <main style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem' }}>Published Case Studies</h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '0.85rem' }}>
            {rows.length} portfolio records active on site
          </p>
        </div>
      </div>

      <div className="table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug / Route</th>
              <th>Category</th>
              <th>Year</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((project) => (
              <tr key={project.id}>
                <td>
                  <strong>{project.title}</strong>
                  <br />
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{project.summary}</span>
                </td>
                <td>
                  <code style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>
                    /work/{project.slug}
                  </code>
                </td>
                <td>{project.category}</td>
                <td>{project.year}</td>
                <td>
                  <span className="status-pill">
                    {project.featured ? 'published' : 'draft'}
                  </span>
                </td>
                <td>
                  <Link
                    href={`/work/${project.slug}`}
                    target="_blank"
                    style={{ color: 'var(--primary)', fontSize: '0.85rem', textDecoration: 'underline' }}
                  >
                    View Live ↗
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
