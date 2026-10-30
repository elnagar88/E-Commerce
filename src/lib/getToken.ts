import { decode } from 'next-auth/jwt'
import { cookies } from 'next/headers'

export default async function getToken() {
  const cookieStore = await cookies()

  const sessionToken =
    cookieStore.get('next-auth.session-token')?.value ??
    cookieStore.get('__Secure-next-auth.session-token')?.value

  if (!sessionToken) return null

  const token = await decode({
    secret: process.env.AUTH_SECRET!,
    token: sessionToken,
  })

  return token?.token ?? null
}