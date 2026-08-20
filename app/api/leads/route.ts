import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'

export async function POST(request: Request) {
  const body = await request.json()
  if (!body.name || !body.email || !body.message) return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  await db.insert(leads).values({ name: String(body.name).slice(0, 120), email: String(body.email).slice(0, 180), company: body.company ? String(body.company).slice(0, 180) : null, projectType: body.projectType ? String(body.projectType).slice(0, 100) : null, budget: body.budget ? String(body.budget).slice(0, 100) : null, message: String(body.message).slice(0, 5000) })
  return NextResponse.json({ ok: true })
}
