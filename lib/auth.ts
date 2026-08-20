import { betterAuth } from 'better-auth'
import { Pool } from 'pg'

const baseURL = process.env.BETTER_AUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.V0_RUNTIME_URL || 'http://localhost:3000')
const isDev = process.env.NODE_ENV === 'development'
const trustedOrigins = isDev ? ['http://localhost:3000', baseURL, 'https://*.vusercontent.net', 'https://*.vercel.run', 'https://*.v0.build'] : [baseURL]

export const auth = betterAuth({
  database: new Pool({ connectionString: process.env.DATABASE_URL }),
  baseURL,
  trustedOrigins,
  emailAndPassword: { enabled: true },
  ...(isDev ? { advanced: { defaultCookieAttributes: { sameSite: 'none' as const, secure: true } } } : {}),
})
