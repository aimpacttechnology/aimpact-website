import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@supabase/supabase-js'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

export async function POST(request: NextRequest) {
  const { responses } = await request.json()

  if (!responses || !responses.email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const prompt = `You are an AI automation consultant analyzing a business assessment. Based on the following responses, create a comprehensive Operations Intelligence Report.

BUSINESS PROFILE:
${JSON.stringify(responses, null, 2)}

Please provide a clear, specific, actionable report with these sections:

1. **Executive Summary** (2–3 sentences about their current operational state)

2. **Critical Pain Points Identified** (Top 3–5 specific issues from their responses)

3. **Automation Opportunities**
   - Quick Wins (implement within 30 days)
   - Medium-Term Projects (1–3 months)
   - Strategic Initiatives (3–6 months)

4. **Estimated Time Savings** (specific hours per week based on their admin hours answer)

5. **Estimated Revenue Impact** (specific dollar ranges based on their revenue and goals)

6. **Recommended Tech Stack** (specific tools matched to their current systems and budget)

7. **Implementation Roadmap** (step-by-step, prioritized by impact)

8. **Immediate Next Steps** (what they should do in the next 7 days)

Be specific and actionable. Reference their actual answers where possible. Focus on ROI and practical implementation for a business at their stage.`

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  })

  const analysis = message.content[0].type === 'text' ? message.content[0].text : ''

  // Run all side effects in parallel after the report is generated
  await Promise.allSettled([
    saveLead(responses, analysis),
    notifyDiscord(responses, analysis),
    notifyN8n(responses, analysis),
  ])

  return NextResponse.json({ analysis })
}

async function saveLead(responses: Record<string, unknown>, analysis: string) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const orgId = process.env.FRONT_DESK_ORG_ID!

  const nameParts = String(responses.ownerName ?? '').split(' ')
  const firstName = nameParts[0] ?? ''
  const lastName = nameParts.slice(1).join(' ')

  const { data: contact } = await supabase
    .from('contacts')
    .insert({
      org_id: orgId,
      first_name: firstName,
      last_name: lastName || null,
      email: responses.email,
      phone: responses.phone || null,
      company: responses.businessName || null,
      source: 'factfinder',
    })
    .select('id')
    .single()

  if (contact?.id) {
    await supabase.from('leads').insert({
      org_id: orgId,
      contact_id: contact.id,
      title: `FactFinder — ${responses.businessName ?? responses.email}`,
      source: 'factfinder',
      status: 'new',
      notes: [
        `Industry: ${responses.industry ?? '—'}`,
        `Revenue: ${responses.revenue ?? '—'} | Team: ${responses.teamSize ?? '—'}`,
        `Urgency: ${responses.urgencyScale ?? '—'}/10`,
        `Budget: ${responses.monthlyBudget ?? '—'}`,
        `\nTop pain points: ${responses.topPainPoints ?? '—'}`,
        `Magic wand: ${responses.magicWand ?? '—'}`,
        `Consequences of inaction: ${responses.consequencesOfInaction ?? '—'}`,
        `\n--- AI REPORT ---\n${analysis}`,
      ].join('\n'),
    })
  }
}

async function notifyDiscord(responses: Record<string, unknown>, analysis: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) return

  const urgency = Number(responses.urgencyScale ?? 0)
  const urgencyBar = '🟥'.repeat(Math.min(urgency, 5)) + '⬜'.repeat(Math.max(0, 5 - Math.min(urgency, 5)))

  const embed = {
    title: `📋 New FactFinder — ${responses.businessName ?? 'Unknown Business'}`,
    color: urgency >= 7 ? 0xe74c3c : urgency >= 4 ? 0xf39c12 : 0x2ecc71,
    fields: [
      { name: 'Contact', value: `${responses.ownerName}\n${responses.email}${responses.phone ? `\n${responses.phone}` : ''}`, inline: true },
      { name: 'Business', value: `${responses.industry ?? '—'}\n${responses.revenue ?? '—'} · ${responses.teamSize ?? '—'}`, inline: true },
      { name: `Urgency ${urgencyBar}`, value: `${urgency}/10`, inline: true },
      { name: 'Budget', value: String(responses.monthlyBudget ?? '—'), inline: true },
      { name: 'Primary Goal', value: String(responses.primaryGoal ?? '—'), inline: true },
      { name: 'Best Time to Call', value: String(responses.bestTime ?? '—'), inline: true },
      { name: '🪄 Magic Wand Fix', value: String(responses.magicWand ?? '—').slice(0, 200) },
      { name: '🔥 Top Pain Points', value: String(responses.topPainPoints ?? '—').slice(0, 200) },
      { name: '⚠️ Consequences of Inaction', value: String(responses.consequencesOfInaction ?? '—') },
    ],
    footer: { text: 'AiMpact FactFinder · aimpacttechnology.com/factfinder' },
    timestamp: new Date().toISOString(),
  }

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] }),
  })
}

async function notifyN8n(responses: Record<string, unknown>, analysis: string) {
  const webhookUrl = process.env.N8N_FACTFINDER_WEBHOOK_URL
  if (!webhookUrl) return

  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.N8N_WEBHOOK_SECRET ? { 'x-webhook-secret': process.env.N8N_WEBHOOK_SECRET } : {}),
    },
    body: JSON.stringify({
      source: 'factfinder',
      submitted_at: new Date().toISOString(),
      contact: {
        name: responses.ownerName,
        email: responses.email,
        phone: responses.phone,
        business: responses.businessName,
      },
      assessment: responses,
      ai_report: analysis,
    }),
  })
}
