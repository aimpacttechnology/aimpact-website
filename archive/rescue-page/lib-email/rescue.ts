const FROM = { name: 'AiMpact Technology', email: 'landon@aimpacttechnology.com' }
const NOTIFY = 'landon@aimpacttechnology.com'

async function send(to: string, subject: string, html: string) {
  const key = process.env.BREVO_API_KEY?.trim()
  if (!key) { console.error('BREVO_API_KEY not set'); return }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'accept': 'application/json', 'api-key': key, 'content-type': 'application/json' },
    body: JSON.stringify({ sender: FROM, to: [{ email: to }], subject, htmlContent: html }),
  })
  if (!res.ok) console.error('Brevo send failed:', await res.text())
}

export async function sendHealthCheckConfirmation({
  name, email,
}: { name: string; email: string }) {
  const html = `
    <div style="font-family:Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e">
      <div style="background:#0d9488;padding:32px 36px;border-radius:12px 12px 0 0">
        <p style="color:#fff;font-size:13px;margin:0;letter-spacing:1px;text-transform:uppercase">AiMpact Technology</p>
        <h1 style="color:#fff;font-size:26px;margin:12px 0 0;font-weight:700">You're booked. ✓</h1>
      </div>
      <div style="background:#f9fafb;padding:36px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none">
        <p style="font-size:16px;margin:0 0 20px">Hi ${name},</p>
        <p style="font-size:15px;color:#4b5563;line-height:1.6;margin:0 0 20px">
          We received your payment and your Spreadsheet Health Check is confirmed.
          Here's what happens next:
        </p>
        <div style="border-left:4px solid #0d9488;padding-left:20px;margin:24px 0">
          <p style="margin:0 0 12px;font-size:14px;color:#374151"><strong>Step 1 — We'll reach out within 1–2 business days</strong><br>
          to confirm your file submission method and NDA preference.</p>
          <p style="margin:0 0 12px;font-size:14px;color:#374151"><strong>Step 2 — You share your spreadsheet</strong><br>
          (or a redacted copy — see the privacy page for options).</p>
          <p style="margin:0;font-size:14px;color:#374151"><strong>Step 3 — You receive your PDF report within 5 business days</strong><br>
          with our findings, risk assessment, and a cost estimate if a build is warranted.</p>
        </div>
        <p style="font-size:14px;color:#6b7280;margin:24px 0 0">
          Questions? Reply to this email or call <strong>(888) 335-4979</strong>.<br>
          — AiMpact Technology
        </p>
      </div>
    </div>`
  await send(email, 'Your Spreadsheet Health Check is confirmed — AiMpact Technology', html)
}

export async function sendHealthCheckLeadNotification({
  name, email, phone, company, description,
}: { name: string; email: string; phone: string; company: string; description: string }) {
  const html = `
    <div style="font-family:Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e">
      <div style="background:#0f766e;padding:28px 32px;border-radius:12px 12px 0 0">
        <p style="color:#99f6e4;font-size:12px;margin:0;letter-spacing:1px;text-transform:uppercase">Paid Health Check</p>
        <h1 style="color:#fff;font-size:22px;margin:8px 0 0">💰 $200 received — ${name}</h1>
      </div>
      <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#6b7280;width:110px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr style="background:#f9fafb"><td style="padding:8px 6px;color:#6b7280">Email</td><td style="padding:8px 6px"><a href="mailto:${email}" style="color:#0d9488">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0"><a href="tel:${phone.replace(/\D/g,'')}" style="color:#0d9488">${phone || '—'}</a></td></tr>
          <tr style="background:#f9fafb"><td style="padding:8px 6px;color:#6b7280">Company</td><td style="padding:8px 6px">${company || '—'}</td></tr>
        </table>
        ${description ? `
        <div style="margin-top:20px;padding:16px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4">
          <p style="margin:0 0 6px;font-size:12px;color:#0d9488;font-weight:600;text-transform:uppercase;letter-spacing:.5px">Their spreadsheet</p>
          <p style="margin:0;font-size:14px;color:#374151;line-height:1.5">${description}</p>
        </div>` : ''}
        <p style="margin-top:24px;font-size:13px;color:#9ca3af">
          Reach out within 1–2 business days to confirm file submission.
        </p>
      </div>
    </div>`
  await send(NOTIFY, `💰 $200 Health Check paid — ${name}${company ? ` · ${company}` : ''}`, html)
}
