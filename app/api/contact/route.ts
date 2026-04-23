import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { firstName, lastName, email, company, service, message } = body

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL
  const webhookSecret = process.env.N8N_WEBHOOK_SECRET

  if (!webhookUrl) {
    console.error('[Contact] N8N_CONTACT_WEBHOOK_URL not set')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const payload = {
    source: 'website_contact_form',
    first_name: firstName,
    last_name: lastName,
    email,
    company: company || null,
    service_interest: service || null,
    message,
    submitted_at: new Date().toISOString(),
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(webhookSecret ? { 'x-webhook-secret': webhookSecret } : {}),
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    console.error('[Contact] n8n webhook failed', res.status)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
