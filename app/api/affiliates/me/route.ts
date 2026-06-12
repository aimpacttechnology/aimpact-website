import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: affiliate } = await supabase
    .from('affiliates')
    .select(`
      id, full_name, email, company, commission_rate, status,
      total_clicks, total_conversions, total_earned_cents, total_paid_cents,
      created_at,
      referral_codes (id, code, label, is_active)
    `)
    .eq('user_id', user.id)
    .single()

  if (!affiliate) return NextResponse.json({ error: 'Affiliate record not found' }, { status: 404 })

  const { data: commissions } = await supabase
    .from('affiliate_commissions')
    .select('id, amount_cents, status, description, created_at')
    .eq('affiliate_id', affiliate.id)
    .order('created_at', { ascending: false })
    .limit(10)

  const { data: recentDeals } = await supabase
    .from('deal_registrations')
    .select('id, prospect_first_name, prospect_last_name, prospect_company, service_interest, status, estimated_value, created_at')
    .eq('affiliate_id', affiliate.id)
    .order('created_at', { ascending: false })
    .limit(5)

  const pendingCents = (commissions ?? [])
    .filter(c => c.status === 'pending' || c.status === 'approved')
    .reduce((sum, c) => sum + (c.amount_cents ?? 0), 0)

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aimpacttechnology.com'
  const codes = (affiliate.referral_codes ?? []).map((rc: any) => ({
    ...rc,
    referral_url: `${baseUrl}/?ref=${rc.code}`,
  }))

  return NextResponse.json({
    affiliate: { ...affiliate, referral_codes: codes },
    pendingCents,
    recentDeals: recentDeals ?? [],
    recentCommissions: commissions ?? [],
  })
}
