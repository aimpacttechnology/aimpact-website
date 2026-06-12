'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Lock, ChevronDown, ChevronUp, Award, Loader2 } from 'lucide-react'
import { MODULES, QUIZ_QUESTIONS, PASSING_SCORE } from '@/lib/affiliates/training-content'

const COLOR_MAP: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400',
  indigo: 'bg-indigo-500/10 text-indigo-400',
  amber: 'bg-amber-500/10 text-amber-400',
  green: 'bg-green-500/10 text-green-400',
  purple: 'bg-purple-500/10 text-purple-400',
  cyan: 'bg-cyan-500/10 text-cyan-400',
  rose: 'bg-rose-500/10 text-rose-400',
  gray: 'bg-zinc-800 text-zinc-400',
}

export default function PortalTrainingPage() {
  const [status, setStatus] = useState<string>('pending')
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [certified, setCertified] = useState(false)
  const [loading, setLoading] = useState(true)
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null)
  const [markingDone, setMarkingDone] = useState<string | null>(null)

  const [showQuiz, setShowQuiz] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [quizResult, setQuizResult] = useState<{ score: number; total: number; passed: boolean } | null>(null)
  const [submittingQuiz, setSubmittingQuiz] = useState(false)

  useEffect(() => {
    fetch('/api/affiliates/training')
      .then(r => r.json())
      .then(d => {
        setStatus(d.status ?? 'pending')
        setCompletedLessons(d.completedLessons ?? [])
        setCertified(d.certified ?? false)
      })
      .finally(() => setLoading(false))
  }, [])

  async function markComplete(lessonId: string) {
    setMarkingDone(lessonId)
    const res = await fetch('/api/affiliates/training', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'complete_lesson', lesson_id: lessonId }),
    })
    if (res.ok) setCompletedLessons(prev => [...prev, lessonId])
    setMarkingDone(null)
  }

  async function submitQuiz() {
    setSubmittingQuiz(true)
    const res = await fetch('/api/affiliates/training', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'submit_quiz', answers }),
    })
    const data = await res.json()
    setSubmittingQuiz(false)
    setQuizResult(data)
    if (data.passed) setCertified(true)
  }

  const totalLessons = MODULES.reduce((sum, m) => sum + m.lessons.length, 0)
  const completedCount = completedLessons.filter(l => l !== 'certified').length
  const allLessonsComplete = completedCount >= totalLessons

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>
  }

  if (status !== 'active') {
    return (
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Partner Training</h1>
        <div className="flex items-center gap-3 p-5 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <Lock className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <div>
            <p className="font-semibold text-amber-300">Training unlocks after account activation</p>
            <p className="text-sm text-amber-400/80 mt-0.5">Your account is pending review. You&apos;ll receive an email once approved.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Partner Sales Training</h1>
        <p className="text-sm text-zinc-400 mt-0.5">Complete all modules and pass the quiz to earn your certification.</p>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-zinc-300">Training Progress</p>
          <p className="text-xs text-zinc-500">{completedCount} / {totalLessons} lessons</p>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2">
          <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: `${(completedCount / totalLessons) * 100}%` }} />
        </div>
        {certified && (
          <div className="flex items-center gap-2 mt-3 text-green-400">
            <Award className="w-4 h-4" />
            <p className="text-sm font-semibold">Certified Partner — training complete</p>
          </div>
        )}
      </div>

      {MODULES.map(module => {
        const moduleDone = module.lessons.every(l => completedLessons.includes(l.id))
        return (
          <div key={module.id} className="rounded-xl border border-zinc-800 bg-zinc-900/30 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800">
              <span className="text-xl">{module.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-white">Module {module.number}: {module.title}</p>
                  {moduleDone && <CheckCircle className="w-4 h-4 text-green-400" />}
                </div>
                <p className="text-xs text-zinc-500">{module.lessons.length} lesson{module.lessons.length !== 1 ? 's' : ''}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${COLOR_MAP[module.color] ?? 'bg-zinc-800 text-zinc-400'}`}>
                {moduleDone ? 'Complete' : 'In progress'}
              </span>
            </div>

            <div className="divide-y divide-zinc-800">
              {module.lessons.map(lesson => {
                const done = completedLessons.includes(lesson.id)
                const isOpen = expandedLesson === lesson.id

                return (
                  <div key={lesson.id}>
                    <button
                      onClick={() => setExpandedLesson(isOpen ? null : lesson.id)}
                      className="w-full flex items-center gap-4 px-5 py-3 hover:bg-zinc-800/40 transition-colors text-left"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${done ? 'bg-green-500' : 'border-2 border-zinc-700'}`}>
                        {done && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${done ? 'text-zinc-500' : 'text-white'}`}>{lesson.title}</p>
                        <p className="text-xs text-zinc-500">{lesson.duration}</p>
                      </div>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-zinc-500 flex-shrink-0" />}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <div className="prose prose-sm prose-invert max-w-none text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-xl p-5 mb-4 whitespace-pre-wrap text-sm leading-relaxed">
                          {lesson.content}
                        </div>
                        {!done && (
                          <button
                            onClick={() => markComplete(lesson.id)}
                            disabled={markingDone === lesson.id}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
                          >
                            {markingDone === lesson.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                            Mark Complete
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      {allLessonsComplete && !certified && (
        <div className="rounded-xl border-2 border-indigo-500/30 bg-zinc-900/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-indigo-400" />
            <div>
              <p className="font-semibold text-white">Certification Quiz</p>
              <p className="text-xs text-zinc-500">Score {PASSING_SCORE}/{QUIZ_QUESTIONS.length} or higher to earn your certification.</p>
            </div>
          </div>

          {!showQuiz && !quizResult && (
            <button onClick={() => setShowQuiz(true)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors">
              Begin Quiz
            </button>
          )}

          {showQuiz && !quizResult && (
            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, idx) => (
                <div key={q.id}>
                  <p className="text-sm font-medium text-white mb-3">{idx + 1}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map(opt => (
                      <label key={opt.id} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${answers[q.id] === opt.id ? 'border-indigo-500 bg-indigo-500/10' : 'border-zinc-800 hover:border-zinc-700'}`}>
                        <input type="radio" name={q.id} value={opt.id} checked={answers[q.id] === opt.id} onChange={() => setAnswers(prev => ({ ...prev, [q.id]: opt.id }))} className="sr-only" />
                        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${answers[q.id] === opt.id ? 'border-indigo-500 bg-indigo-500' : 'border-zinc-600'}`} />
                        <span className="text-sm text-zinc-300">{opt.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={submitQuiz}
                disabled={Object.keys(answers).length < QUIZ_QUESTIONS.length || submittingQuiz}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                {submittingQuiz ? <Loader2 className="w-4 h-4 animate-spin" /> : <Award className="w-4 h-4" />}
                Submit Quiz ({Object.keys(answers).length}/{QUIZ_QUESTIONS.length} answered)
              </button>
            </div>
          )}

          {quizResult && (
            <div className={`p-4 rounded-xl border ${quizResult.passed ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
              <p className={`font-semibold ${quizResult.passed ? 'text-green-300' : 'text-red-300'}`}>
                {quizResult.passed ? '🎉 Certified!' : 'Not quite — try again'}
              </p>
              <p className={`text-sm mt-1 ${quizResult.passed ? 'text-green-400/80' : 'text-red-400/80'}`}>
                Score: {quizResult.score}/{quizResult.total} — {quizResult.passed ? 'You passed! Review your training materials and re-apply your knowledge in the field.' : `Need ${PASSING_SCORE} to pass. Review the modules and try again.`}
              </p>
              {!quizResult.passed && (
                <button onClick={() => { setQuizResult(null); setAnswers({}) }} className="mt-3 text-sm text-red-300 underline">Retake Quiz</button>
              )}
            </div>
          )}
        </div>
      )}

      {certified && (
        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl">
          <Award className="w-8 h-8 text-indigo-400 flex-shrink-0" />
          <div>
            <p className="font-semibold text-white">AiMpact Partner Certified</p>
            <p className="text-sm text-zinc-400 mt-0.5">You&apos;ve completed all training and passed the certification quiz. You&apos;re ready to represent AiMpact in the field.</p>
          </div>
        </div>
      )}
    </div>
  )
}
