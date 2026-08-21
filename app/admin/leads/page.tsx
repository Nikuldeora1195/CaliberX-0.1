import { db, isDbConfigured } from '@/lib/db'
import { leads } from '@/lib/db/schema'
import { localLeadsMemory } from '@/app/api/leads/route'

export default async function LeadsPage() {
  let rows: Array<{
    id: number
    name: string
    email: string
    company: string | null
    serviceType: string | null
    budget: string | null
    message: string
    status: string
    createdAt: Date
  }> = []

  if (isDbConfigured) {
    try {
      rows = await db.select().from(leads)
    } catch {
      rows = localLeadsMemory
    }
  } else {
    rows = localLeadsMemory
  }

  return (
    <main style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem' }}>Inbound Project Leads</h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '0.85rem' }}>
            {rows.length} total inquiries in queue
          </p>
        </div>
      </div>

      {rows.length === 0 ? (
        <div
          className="page-card wide"
          style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
          }}
        >
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', marginBottom: '1rem' }}>
            No leads received yet. Test the contact form on <a href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>/contact</a>.
          </p>
        </div>
      ) : (
        <div className="table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Prospect</th>
                <th>Company</th>
                <th>Service Area</th>
                <th>Budget</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <strong>{lead.name}</strong>
                    <br />
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{lead.email}</span>
                  </td>
                  <td>{lead.company || '—'}</td>
                  <td>{lead.serviceType || '—'}</td>
                  <td>{lead.budget || '—'}</td>
                  <td>
                    <span className="status-pill" style={{ textTransform: 'uppercase' }}>
                      {lead.status}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>
                    {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'Today'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}
