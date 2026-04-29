import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

const ORG_ID = process.env.FRONT_DESK_ORG_ID!

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { responses } = body

  if (!responses?.ownerName || !responses?.businessName || !responses?.email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Upsert contact
  const nameParts = (responses.ownerName as string).trim().split(' ')
  const firstName = nameParts[0]
  const lastName = nameParts.slice(1).join(' ') || ''

  const { data: contact } = await supabase
    .from('contacts')
    .insert({
      org_id: ORG_ID,
      first_name: firstName,
      last_name: lastName,
      email: responses.email,
      company: responses.businessName,
    })
    .select('id')
    .single()

  // Create lead with intake data
  const { data: lead, error } = await supabase
    .from('leads')
    .insert({
      org_id: ORG_ID,
      contact_id: contact?.id ?? null,
      source: 'report_landing_page',
      status: 'new',
      intake_form_data: {
        responses,
        opportunity_titles: deriveOpportunities(responses),
        submitted_at: new Date().toISOString(),
      },
    })
    .select('id')
    .single()

  if (error || !lead) {
    console.error('[ReportCheckout] Lead creation failed:', error)
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
  }

  // Create Stripe Checkout session
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    customer_email: responses.email,
    metadata: { submission_id: lead.id },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/report/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/report`,
  })

  return NextResponse.json({ url: session.url })
}

function deriveOpportunities(responses: Record<string, unknown>): string[] {
  const opps: string[] = []
  const tasks = String(responses.timeConsumingTasks ?? '').toLowerCase()
  const tools = String(responses.currentTools ?? '').toLowerCase()
  const pain = String(responses.biggestPain ?? '').toLowerCase()

  if (tasks.includes('schedul') || pain.includes('schedul')) opps.push('Automated appointment scheduling & reminders')
  if (tasks.includes('email') || tasks.includes('follow')) opps.push('AI-powered email follow-up sequences')
  if (tasks.includes('invoice') || tasks.includes('billing')) opps.push('Automated invoicing & payment tracking')
  if (tasks.includes('report') || tasks.includes('data')) opps.push('Automated reporting & analytics dashboards')
  if (tasks.includes('social') || tasks.includes('content')) opps.push('AI content creation & social media automation')
  if (pain.includes('lead') || pain.includes('sales')) opps.push('AI lead qualification & CRM automation')
  if (pain.includes('customer') || pain.includes('support')) opps.push('AI customer support & FAQ automation')
  if (!tools || tools.includes('manual') || tools.includes('spreadsheet')) opps.push('Digital workflow modernization')

  if (opps.length < 3) opps.push('AI-assisted operations & workflow automation', 'Time-saving process documentation & SOPs')

  return opps.slice(0, 6)
}
