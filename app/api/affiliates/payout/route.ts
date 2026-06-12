import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: affiliate } = await supabase
    .from('affiliates')
    .select('id, full_name, email, total_earned_cents, total_paid_cents, referral_codes(code)')
    .eq('user_id', user.id)
    .single()

  if (!affiliate) return NextResponse.json({ error: 'Affiliate record not found' }, { status: 404 })

  const { data: pending } = await supabase
    .from('affiliate_commissions')
    .select('amount_cents')
    .eq('affiliate_id', affiliate.id)
    .in('status', ['pending', 'approved'])

  const pendingCents = (pending ?? []).reduce((sum, c) => sum + (c.amount_cents ?? 0), 0)
  if (pendingCents <= 0) return NextResponse.json({ error: 'No pending balance to request' }, { status: 400 })

  const codes = affiliate.referral_codes as any[]
  const code = codes?.[0]?.code ?? 'unknown'
  const amount = (pendingCents / 100).toFixed(2)

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: '💸 Affiliate Payout Request',
          color: 0x6366f1,
          fields: [
            { name: 'Affiliate', value: affiliate.full_name, inline: true },
            { name: 'Email', value: affiliate.email, inline: true },
            { name: 'Amount Requested', value: `$${amount}`, inline: true },
            { name: 'Referral Code', value: code, inline: true },
          ],
          timestamp: new Date().toISOString(),
        }],
      }),
    }).catch(() => {})
  }

  return NextResponse.json({ success: true, amount })
}
