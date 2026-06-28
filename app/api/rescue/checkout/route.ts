import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createServiceClient } from '@/lib/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const { name, email, phone, company, description } = await req.json()

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email, and phone are required' }, { status: 400 })
  }

  // Save lead immediately — before Stripe — so contact info is captured on abandonment
  const supabase = createServiceClient()
  let leadId: string | null = null
  try {
    const { data } = await supabase
      .from('rescue_leads')
      .insert({
        name,
        email,
        phone,
        company: company || null,
        description: description || null,
        status: 'pending_payment',
      })
      .select('id')
      .single()
    leadId = data?.id ?? null
  } catch (err) {
    console.error('Supabase lead insert failed (non-fatal):', err)
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aimpacttechnology.com'

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Spreadsheet Health Check',
            description:
              'Complete audit of your spreadsheet — PDF report, risk assessment, formula review, and a cost estimate for any remediation work. Delivered within 5 business days.',
          },
          unit_amount: 20000,
        },
        quantity: 1,
      },
    ],
    customer_email: email,
    metadata: {
      name,
      email,
      phone,
      company: company ?? '',
      description: description ?? '',
      lead_id: leadId ?? '',
    },
    success_url: `${siteUrl}/rescue/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/rescue#services`,
  })

  return NextResponse.json({ url: session.url })
}
