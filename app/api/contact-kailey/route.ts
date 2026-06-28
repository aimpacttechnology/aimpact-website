import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
      <div style="background:#1a5c3a;padding:24px 32px;border-radius:12px 12px 0 0">
        <h2 style="color:white;margin:0;font-size:20px">New message via WorkDontChud</h2>
      </div>
      <div style="background:#f9fdf9;border:1px solid #d5ede5;border-top:none;padding:32px;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:600;width:80px;color:#1a5c3a">Name</td><td style="padding:8px 0">${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#1a5c3a">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1a5c3a">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;font-weight:600;color:#1a5c3a">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ''}
        </table>
        <hr style="border:none;border-top:1px solid #d5ede5;margin:20px 0"/>
        <p style="white-space:pre-wrap;line-height:1.7;margin:0">${message}</p>
      </div>
    </div>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: 'WorkDontChud <landon@aimpacttechnology.com>',
      to: ['kaileymcduff5@gmail.com'],
      reply_to: email,
      subject: `WorkDontChud inquiry from ${name}`,
      html,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
