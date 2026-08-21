import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL)

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/caliber',
})

// Handle potential idle pool errors gracefully
pool.on('error', (err) => {
  if (hasDatabaseUrl) {
    console.error('Unexpected error on idle database client', err)
  }
})

export const db = drizzle(pool, { schema })
export const isDbConfigured = hasDatabaseUrl
