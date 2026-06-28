import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createServiceClient } from '@/lib/supabase/server'
import {
  sendHealthCheckConfirmation,
  sendHealthCheckLeadNotification,
} from '@/lib/email/rescue'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Raw body is required for Stripe signature verification
export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')
  const secret = process.env.STRIPE_RESCUE_WEBHOOK_SECRET

  let event: Stripe.Event

  if (secret && sig) {
    try {
      event = stripe.webhooks.constructEvent(body, sig, secret)
    } catch {
      return NextResponse.json({ error: 'Webhook signature invalid' }, { status: 400 })
    }
  } else {
    // No webhook secret configured yet — parse without verification
    // Set STRIPE_RESCUE_WEBHOOK_SECRET after registering the endpoint in Stripe dashboard
    try {
      event = JSON.parse(body)
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const meta = session.metadata ?? {}
    const { name, email, phone, company, description, lead_id } = meta

    // Mark lead as paid in Supabase
    if (lead_id) {
      const supabase = createServiceClient()
      supabase
        .from('rescue_leads')
        .update({
          status: 'paid',
          paid_at: new Date().toISOString(),
          stripe_session_id: session.id,
        })
        .eq('id', lead_id)
        .then(() => {})
        .catch(console.error)
    }

    // Confirmation email to client
    if (name && email) {
      sendHealthCheckConfirmation({ name, email }).catch(console.error)
      sendHealthCheckLeadNotification({ name, email, phone, company, description }).catch(
        console.error,
      )
    }
  }

  return NextResponse.json({ received: true })
}
