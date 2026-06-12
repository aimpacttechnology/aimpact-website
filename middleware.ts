import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

const REF_COOKIE = 'aimpact_ref'
const REF_COOKIE_MAX_AGE = 60 * 60 * 24 * 60 // 60 days

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet: { name: string; value: string; options?: object }[]) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        response = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options as any)
        )
      },
    },
  })

  const { data: { user } } = await supabase.auth.getUser()
  const { pathname, searchParams } = request.nextUrl

  // Auth guard for the affiliate portal
  if (pathname.startsWith('/affiliates/portal') && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/affiliates/login'
    url.search = ''
    return NextResponse.redirect(url)
  }

  if (user && pathname === '/affiliates/login') {
    const url = request.nextUrl.clone()
    url.pathname = '/affiliates/portal'
    url.search = ''
    return NextResponse.redirect(url)
  }

  // Referral click tracking — ?ref=CODE sets an attribution cookie and logs the click
  const ref = searchParams.get('ref')
  if (ref) {
    response.cookies.set(REF_COOKIE, ref, {
      maxAge: REF_COOKIE_MAX_AGE,
      path: '/',
      sameSite: 'lax',
    })
    try {
      await trackReferralClick(ref, request)
    } catch {
      // best-effort — never block the page on tracking failures
    }
  }

  return response
}

async function trackReferralClick(code: string, request: NextRequest) {
  const headers = {
    apikey: SUPABASE_SERVICE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type': 'application/json',
  }

  const lookup = await fetch(
    `${SUPABASE_URL}/rest/v1/referral_codes?code=eq.${encodeURIComponent(code)}&is_active=eq.true&select=id,affiliate_id`,
    { headers }
  )
  const rows = await lookup.json()
  const match = Array.isArray(rows) ? rows[0] : null
  if (!match) return

  await Promise.all([
    fetch(`${SUPABASE_URL}/rest/v1/referral_clicks`, {
      method: 'POST',
      headers: { ...headers, Prefer: 'return=minimal' },
      body: JSON.stringify({
        referral_code_id: match.id,
        affiliate_id: match.affiliate_id,
        ip_address: request.headers.get('x-forwarded-for') ?? null,
        user_agent: request.headers.get('user-agent') ?? null,
        landing_path: request.nextUrl.pathname,
      }),
    }),
    fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_affiliate_clicks`, {
      method: 'POST',
      headers: { ...headers, Prefer: 'return=minimal' },
      body: JSON.stringify({ affiliate_id: match.affiliate_id }),
    }),
  ])
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
