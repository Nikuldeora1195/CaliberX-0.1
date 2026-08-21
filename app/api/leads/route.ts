import { NextResponse } from 'next/server'
import { db, isDbConfigured } from '@/lib/db'
import { leads } from '@/lib/db/schema'

// In-memory fallback for local development when DATABASE_URL is not connected
export const localLeadsMemory: Array<{
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

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 },
      )
    }

    const payload = {
      name: String(body.name).slice(0, 120),
      email: String(body.email).slice(0, 180),
      company: body.company ? String(body.company).slice(0, 180) : null,
      serviceType: body.serviceType || body.projectType ? String(body.serviceType || body.projectType).slice(0, 100) : null,
      budget: body.budget ? String(body.budget).slice(0, 100) : null,
      message: String(body.message).slice(0, 5000),
      status: 'NEW',
    }

    if (isDbConfigured) {
      try {
        await db.insert(leads).values(payload)
      } catch (dbErr) {
        console.warn('Database insert failed, using fallback buffer:', dbErr)
        localLeadsMemory.unshift({
          ...payload,
          id: localLeadsMemory.length + 1,
          createdAt: new Date(),
        })
      }
    } else {
      localLeadsMemory.unshift({
        ...payload,
        id: localLeadsMemory.length + 1,
        createdAt: new Date(),
      })
    }

    // Webhook alert trigger (e.g. Discord/Slack/Telegram/Resend)
    const webhookUrl = process.env.LEADS_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `⚡ **New withCaliberX Project Lead**\n**From:** ${payload.name} (${payload.email})\n**Company:** ${payload.company || 'N/A'}\n**Service:** ${payload.serviceType || 'N/A'}\n**Budget:** ${payload.budget || 'N/A'}\n**Message:** ${payload.message}`,
          }),
        })
      } catch (webhookErr) {
        console.error('Webhook notification error:', webhookErr)
      }
    }

    return NextResponse.json({ ok: true, message: 'Lead recorded successfully' })
  } catch (err: any) {
    console.error('Error handling lead submission:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 },
    )
  }
}

export async function GET() {
  if (isDbConfigured) {
    try {
      const rows = await db.select().from(leads)
      return NextResponse.json({ leads: rows })
    } catch {
      return NextResponse.json({ leads: localLeadsMemory })
    }
  }
  return NextResponse.json({ leads: localLeadsMemory })
}
