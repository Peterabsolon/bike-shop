import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { ROUTES } from './constants'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log('middleware session', session)

  return res

  if (session) {
    return res
  }

  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = ROUTES.SIGNIN
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)

  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
}
