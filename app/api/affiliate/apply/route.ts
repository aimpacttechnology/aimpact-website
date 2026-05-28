import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
  }

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, company, role, network, source } = body

  if (!name || !email || !company) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const discordPayload = {
    username: 'AiMpact Affiliate Bot',
    embeds: [
      {
        title: '🤝 New Affiliate Application',
        color: 0x6366f1,
        fields: [
          { name: 'Name', value: name, inline: true },
          { name: 'Email', value: email, inline: true },
          { name: 'Company', value: company, inline: true },
          { name: 'Role / Profession', value: role || '—', inline: true },
          { name: 'How They Heard', value: source || '—', inline: true },
          { name: 'Their Network', value: network || '—', inline: false },
        ],
        footer: { text: `Submitted ${timestamp} CT` },
      },
    ],
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(discordPayload),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to deliver notification' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
