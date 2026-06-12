import { NextRequest, NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: affiliate } = await supabase
    .from('affiliates').select('id').eq('user_id', user.id).single()
  if (!affiliate) return NextResponse.json({ error: 'Affiliate record not found' }, { status: 404 })

  const { data: deals } = await supabase
    .from('deal_registrations')
    .select('*')
    .eq('affiliate_id', affiliate.id)
    .order('created_at', { ascending: false })

  return NextResponse.json({ deals: deals ?? [] })
}

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: affiliate } = await supabase
    .from('affiliates')
    .select('id, commission_rate, status, referral_codes(code)')
    .eq('user_id', user.id)
    .single()

  if (!affiliate) return NextResponse.json({ error: 'Affiliate record not found' }, { status: 404 })
  if (affiliate.status !== 'active') return NextResponse.json({ error: 'Your affiliate account must be active to register deals' }, { status: 403 })

  const body = await req.json()
  const {
    prospect_first_name, prospect_last_name, prospect_email,
    prospect_phone, prospect_company, service_interest,
    budget_range, timeline, notes, estimated_value,
  } = body

  if (!prospect_first_name || !prospect_company) {
    return NextResponse.json({ error: 'Prospect first name and company are required' }, { status: 400 })
  }

  const codes = affiliate.referral_codes as any[]
  const code = codes?.[0]?.code ?? ''

  const protectedUntil = new Date()
  protectedUntil.setDate(protectedUntil.getDate() + 90)

  // Service-role client — deal_registrations.org_id is required by RLS and not part of the affiliate's own session
  const service = createServiceClient()
  const { data: deal, error } = await service
    .from('deal_registrations')
    .insert({
      affiliate_id: affiliate.id,
      affiliate_code: code,
      org_id: process.env.FRONT_DESK_ORG_ID,
      prospect_first_name,
      prospect_last_name: prospect_last_name ?? null,
      prospect_email: prospect_email ?? null,
      prospect_phone: prospect_phone ?? null,
      prospect_company,
      service_interest: service_interest ?? 'consulting',
      budget_range: budget_range ?? null,
      timeline: timeline ?? null,
      notes: notes ?? null,
      estimated_value: estimated_value ?? null,
      status: 'submitted',
      protected_until: protectedUntil.toISOString().split('T')[0],
      commission_rate: affiliate.commission_rate,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })

  return NextResponse.json({ deal })
}
