import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { QUIZ_QUESTIONS, PASSING_SCORE } from '@/lib/affiliates/training-content'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: affiliate } = await supabase
    .from('affiliates').select('id, status').eq('user_id', user.id).single()
  if (!affiliate) return NextResponse.json({ error: 'Affiliate record not found' }, { status: 404 })

  const { data: progress } = await supabase
    .from('affiliate_training_progress')
    .select('lesson_id, completed_at')
    .eq('affiliate_id', affiliate.id)

  const certified = (progress ?? []).some((p: any) => p.lesson_id === 'certified')

  return NextResponse.json({
    status: affiliate.status,
    completedLessons: (progress ?? []).map((p: any) => p.lesson_id),
    certified,
  })
}

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: affiliate } = await supabase
    .from('affiliates').select('id, status').eq('user_id', user.id).single()
  if (!affiliate) return NextResponse.json({ error: 'Affiliate record not found' }, { status: 404 })
  if (affiliate.status !== 'active') return NextResponse.json({ error: 'Account must be active' }, { status: 403 })

  const body = await req.json()

  if (body.action === 'complete_lesson' && body.lesson_id) {
    await supabase
      .from('affiliate_training_progress')
      .upsert({ affiliate_id: affiliate.id, lesson_id: body.lesson_id, completed_at: new Date().toISOString() })
    return NextResponse.json({ success: true })
  }

  if (body.action === 'submit_quiz' && body.answers) {
    const answers: Record<string, string> = body.answers
    let correct = 0
    QUIZ_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correct) correct++
    })
    const passed = correct >= PASSING_SCORE

    if (passed) {
      await supabase
        .from('affiliate_training_progress')
        .upsert({ affiliate_id: affiliate.id, lesson_id: 'certified', completed_at: new Date().toISOString() })
    }

    return NextResponse.json({ score: correct, total: QUIZ_QUESTIONS.length, passed })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}
