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

  // Save lead to Supabase (best-effort, don't fail the request if this errors)
  try {
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
        notes: `Industry: ${responses.industry ?? '—'} | Revenue: ${responses.revenue ?? '—'} | Team: ${responses.teamSize ?? '—'} | Urgency: ${responses.urgencyScale ?? '—'}/10\n\nTop pain points: ${responses.topPainPoints ?? '—'}\n\nMagic wand: ${responses.magicWand ?? '—'}`,
      })
    }
  } catch (err) {
    console.error('[FactFinder] Lead save failed:', err)
  }

  return NextResponse.json({ analysis })
}
