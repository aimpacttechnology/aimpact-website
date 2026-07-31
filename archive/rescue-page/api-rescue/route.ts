import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, phone, company, industry, description, concern } = body

  if (!name || !email || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL
  const webhookSecret = process.env.N8N_WEBHOOK_SECRET

  if (!webhookUrl) {
    console.error('[Rescue] N8N_CONTACT_WEBHOOK_URL not set')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const message = [
    description,
    concern ? `Biggest concern: ${concern}` : null,
    phone ? `Phone: ${phone}` : null,
    industry ? `Industry: ${industry}` : null,
  ]
    .filter(Boolean)
    .join('\n\n')

  const payload = {
    source: 'rescue_page',
    first_name: name,
    last_name: '',
    email,
    company: company || null,
    service_interest: 'Spreadsheet Health Check',
    industry: industry || null,
    concern: concern || null,
    phone: phone || null,
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
    console.error('[Rescue] n8n webhook failed', res.status)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
