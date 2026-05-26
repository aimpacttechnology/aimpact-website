'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, Sparkles, Download, CheckCircle, ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

type BaseQ = { id: string; label: string; required?: boolean; placeholder?: string }
type TextQ = BaseQ & { type: 'text' | 'email' | 'tel' }
type TextareaQ = BaseQ & { type: 'textarea' }
type RadioQ = BaseQ & { type: 'radio'; options: string[] }
type ScaleQ = BaseQ & { type: 'scale'; min: number; max: number }
type Question = TextQ | TextareaQ | RadioQ | ScaleQ

interface Section {
  id: string
  title: string
  icon: string
  questions: Question[]
}

const SECTIONS: Section[] = [
  {
    id: 'basic', title: 'Basic Information', icon: '📋',
    questions: [
      { id: 'businessName', label: 'Business Name', type: 'text', required: true },
      { id: 'ownerName', label: 'Owner / Contact Name', type: 'text', required: true },
      { id: 'email', label: 'Email Address', type: 'email', required: true },
      { id: 'phone', label: 'Phone Number', type: 'tel' },
      { id: 'industry', label: 'Industry / Business Type', type: 'radio', required: true,
        options: ['Service Business (Consulting, Coaching, Professional Services)', 'Product Business (Physical products)', 'Marketing/Influencer w/ products', 'Marketing/Influencer no products', 'Construction/Trades (HVAC, Plumbing, Landscaping, etc.)', 'Technology/Software', 'Food & Beverage', 'Healthcare/Wellness', 'Education/Media', 'Real Estate/Property Management', 'Other'] },
      { id: 'yearsInBusiness', label: 'How long have you been in business?', type: 'radio', required: true,
        options: ['Less than 1 year', '1–2 years', '3–5 years', '6–10 years', '10+ years'] },
      { id: 'revenue', label: 'Annual Revenue Range', type: 'radio', required: true,
        options: ['$0–$100K', '$100K–$250K', '$250K–$500K', '$500K–$1M', '$1M–$5M', '$5M+'] },
      { id: 'teamSize', label: 'Team Size (including yourself)', type: 'radio', required: true,
        options: ['Just me (solo)', '2–5 people', '6–10 people', '11–25 people', '25+'] },
    ],
  },
  {
    id: 'systems', title: 'Current Systems', icon: '⚙️',
    questions: [
      { id: 'crm', label: 'How do you currently manage customer relationships?', type: 'radio', required: true,
        options: ['No CRM (email, folders, etc.)', 'Basic CRM', 'Advanced CRM (Salesforce, Zoho, etc.)', 'Custom CRM', 'Excel spreadsheet', 'Other'] },
      { id: 'website', label: 'Do you have a website?', type: 'radio', required: true,
        options: ['No website', 'Yes, basic informational site / landing page', 'Strictly social media', 'Yes, with contact forms', 'Yes, with ecommerce and booking', 'Yes, custom site, fully integrated'] },
      { id: 'scheduling', label: 'How do you handle appointment scheduling?', type: 'radio', required: true,
        options: ['Manual — phone calls and emails', 'Google/Outlook Calendar only', 'Scheduling tool (Calendly, Acuity, etc.)', 'CRM with built-in scheduling', "I don't schedule appointments", 'N/A'] },
      { id: 'emailMarketing', label: 'How do you manage email marketing?', type: 'radio', required: true,
        options: ["Don't do email marketing", 'Manual one-off emails', 'Using an email platform (Mailchimp, etc.)', 'Automated sequences/campaigns'] },
    ],
  },
  {
    id: 'painpoints', title: 'Pain Points', icon: '🎯',
    questions: [
      { id: 'missedFollowups', label: 'Do leads fall through the cracks due to missed follow-ups?', type: 'radio', required: true,
        options: ['Yes, happens frequently', 'Sometimes — maybe once a week', 'Rarely — maybe once a month', 'Never — we have good systems', 'N/A'] },
      { id: 'dataOrganization', label: 'How would you rate your customer data organization?', type: 'radio', required: true,
        options: ['Poor — scattered across multiple places', 'Fair — centralized but hard to find quickly', 'Good — well-organized and accessible', 'Excellent — automated and integrated'] },
      { id: 'responseTime', label: 'How quickly do you respond to new lead inquiries?', type: 'radio', required: true,
        options: ['Within 5 minutes', 'Within 1 hour', 'Within same business day', 'Within 1–2 days', 'Longer than 2 days', 'It varies widely'] },
      { id: 'afterHoursLoss', label: 'Do you lose revenue because inquiries come in after hours?', type: 'radio', required: true,
        options: ['Yes, definitely', "Probably — I'm not sure", 'No'] },
      { id: 'topPainPoints', label: 'Top 3 tasks you wish you could spend less time on', type: 'textarea', required: true,
        placeholder: 'E.g., Scheduling appointments, following up with leads, invoicing...' },
    ],
  },
  {
    id: 'operations', title: 'Operations', icon: '📊',
    questions: [
      { id: 'schedulingHassle', label: 'Is scheduling appointments a time-consuming hassle?', type: 'radio', required: true,
        options: ['Yes, major pain point (10+ emails back and forth)', 'Somewhat frustrating (a few emails)', 'Not really an issue', "Don't schedule appointments"] },
      { id: 'noShows', label: 'How often do you experience no-shows or last-minute cancellations?', type: 'radio', required: true,
        options: ['Frequently (more than 20%)', 'Sometimes (10–20%)', 'Rarely (less than 10%)', 'Almost never', 'Not applicable'] },
      { id: 'projectTracking', label: 'How do you track orders/projects from start to finish?', type: 'radio', required: true,
        options: ['In my head / memory', 'Email threads', 'Spreadsheets', 'Project management tool (Trello, Asana, etc.)', 'Automated system with notifications'] },
      { id: 'missedDeadlines', label: 'Have you ever missed a deadline or lost track of a customer order?', type: 'radio', required: true,
        options: ['Yes, more than once', 'Yes, happened once or twice', 'No, never', 'Not sure'] },
      { id: 'reporting', label: 'How do you generate business reports and analytics?', type: 'radio', required: true,
        options: ["Don't generate reports", 'Manually in spreadsheets', 'Pull reports from accounting software', 'Automated dashboard', 'Combination of manual and automated'] },
    ],
  },
  {
    id: 'marketing', title: 'Marketing & Growth', icon: '📈',
    questions: [
      { id: 'marketingConsistency', label: 'How consistent is your marketing?', type: 'radio', required: true,
        options: ['Very inconsistent — only when I have time', 'Somewhat consistent — try weekly', 'Consistent — have a schedule', 'Very consistent — fully automated'] },
      { id: 'leadGeneration', label: 'How effective is your lead generation?', type: 'radio', required: true,
        options: ['Poor — struggling to get leads', 'Fair — getting some but not enough', 'Good — steady flow of leads', 'Excellent — more leads than I can handle'] },
      { id: 'emailAutomation', label: 'Do you send automated email sequences to nurture leads?', type: 'radio', required: true,
        options: ['No', 'Thinking about it', 'Yes, basic sequences', 'Yes, sophisticated automation'] },
      { id: 'socialMedia', label: 'How do you manage social media?', type: 'radio', required: true,
        options: ["Don't use social media for business", 'Post when I remember', 'Try to post regularly (manual)', 'Use scheduling tool but manual', 'Fully automated system'] },
    ],
  },
  {
    id: 'time', title: 'Time & Resources', icon: '⏰',
    questions: [
      { id: 'adminHours', label: 'Hours per week on admin tasks (emails, scheduling, data entry, etc.)?', type: 'radio', required: true,
        options: ['Less than 5 hours', '5–10 hours', '10–20 hours', 'More than 20 hours'] },
      { id: 'biggestTimeWaster', label: "What's your single biggest time-waster?", type: 'textarea', required: true,
        placeholder: 'E.g., Scheduling via email, answering the same questions, chasing payments...' },
      { id: 'repetitiveTasks', label: 'What repetitive tasks do you wish could be automated?', type: 'textarea', required: true,
        placeholder: 'E.g., Sending invoices, following up with leads, posting on social media...' },
    ],
  },
  {
    id: 'goals', title: 'Business Goals', icon: '🚀',
    questions: [
      { id: 'primaryGoal', label: 'What is your primary business goal for the next 12 months?', type: 'radio', required: true,
        options: ['Increase revenue/sales', 'Improve operational efficiency', 'Scale and hire team members', 'Get my time back / work-life balance', 'Build better systems and processes', 'Expand to new markets/products', 'Other'] },
      { id: 'targetRevenue', label: "What's your target annual revenue in 12 months?", type: 'text', required: true, placeholder: 'E.g., $500,000' },
      { id: 'additionalPainPoints', label: "Any pain points we haven't discussed?", type: 'textarea', placeholder: 'Optional — anything else causing frustration...' },
      { id: 'idealWorkHours', label: 'How many hours per week would you ideally like to work?', type: 'radio', required: true,
        options: ['20–30 hours (part-time)', '30–40 hours (full-time)', '40–50 hours', '50+ hours (I love what I do)'] },
      { id: 'magicWand', label: 'If you could fix ONE thing in your business, what would it be?', type: 'textarea', required: true, placeholder: 'Be specific...' },
    ],
  },
  {
    id: 'urgency', title: 'Pain & Urgency', icon: '🔥',
    questions: [
      { id: 'urgencyScale', label: 'How urgent is it to solve these operational issues? (1 = Can wait, 10 = Losing sleep)', type: 'scale', required: true, min: 1, max: 10 },
      { id: 'consequencesOfInaction', label: "What happens if you don't fix these issues in the next 6 months?", type: 'radio', required: true,
        options: ['Nothing major — just frustrating', 'Will miss some revenue opportunities', 'Will limit my ability to grow', 'Could seriously hurt the business', 'Business might fail'] },
      { id: 'priorSolutions', label: 'Have you looked at automation solutions before?', type: 'radio', required: true,
        options: ['No, never', 'Yes, but too expensive', 'Yes, but too complicated', "Yes, but didn't know where to start", "Yes, tried something but it didn't work"] },
      { id: 'monthlyBudget', label: "What's your monthly budget for business automation/tools?", type: 'radio', required: true,
        options: ['Under $100/month', '$100–$250/month', '$250–$500/month', '$500+'] },
    ],
  },
  {
    id: 'final', title: 'Final Questions', icon: '✅',
    questions: [
      { id: 'howHeard', label: 'How did you hear about AiMpact Technology?', type: 'radio', required: true,
        options: ['Social media (Instagram, LinkedIn, Facebook)', 'Referral from a friend/colleague', 'Online search', 'Veteran event/organization', 'Podcast', 'Other'] },
      { id: 'additionalQuestions', label: "Any additional challenges or questions you'd like to discuss?", type: 'textarea', placeholder: 'Optional...' },
      { id: 'bestTime', label: 'Best time to reach you for a follow-up call?', type: 'radio', required: true,
        options: ['Mornings (8am–12pm)', 'Afternoons (12pm–5pm)', 'Evenings (5pm–8pm)', 'Weekends'] },
    ],
  },
]

const TOTAL_QUESTIONS = SECTIONS.reduce((sum, s) => sum + s.questions.length, 0)

type Responses = Record<string, string | number>

function getSectionAndQuestion(step: number) {
  let count = 0
  for (let i = 0; i < SECTIONS.length; i++) {
    if (count + SECTIONS[i].questions.length > step) {
      return { section: SECTIONS[i], sectionIndex: i, question: SECTIONS[i].questions[step - count], questionIndex: step - count }
    }
    count += SECTIONS[i].questions.length
  }
  return { section: SECTIONS[0], sectionIndex: 0, question: SECTIONS[0].questions[0], questionIndex: 0 }
}

export default function FactFinderPage() {
  const [step, setStep] = useState(0)
  const [responses, setResponses] = useState<Responses>({})
  const [analyzing, setAnalyzing] = useState(false)
  const [report, setReport] = useState<string | null>(null)
  const [error, setError] = useState('')

  const progress = Math.round((Object.keys(responses).length / TOTAL_QUESTIONS) * 100)
  const { section, sectionIndex, question } = getSectionAndQuestion(step)

  const handleResponse = (value: string | number) => {
    setResponses(prev => ({ ...prev, [question.id]: value }))
  }

  const canProceed = () => {
    if (!question.required) return true
    const val = responses[question.id]
    return val !== undefined && val.toString().trim() !== ''
  }

  const goNext = () => {
    if (step < TOTAL_QUESTIONS - 1) {
      setStep(s => s + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      submitForAnalysis()
    }
  }

  const goPrev = () => {
    if (step > 0) {
      setStep(s => s - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const submitForAnalysis = async () => {
    setAnalyzing(true)
    setError('')
    try {
      const res = await fetch('/api/factfinder/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ responses }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Analysis failed')
      setReport(data.analysis)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
      setAnalyzing(false)
    } finally {
      setAnalyzing(false)
    }
  }

  const downloadReport = () => {
    const text = `AIMPACT TECHNOLOGY — OPERATIONS INTELLIGENCE REPORT
Generated: ${new Date().toLocaleDateString()}

CLIENT: ${responses.businessName} · ${responses.ownerName} · ${responses.email}

${report}

---
Generated by AiMpact Technology · aimpacttechnology.com
`
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `AiMpact-FactFinder-${String(responses.businessName ?? 'Report').replace(/\s/g, '-')}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Analyzing state
  if (analyzing) {
    return (
      <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-400 animate-spin" />
            <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-indigo-400 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Analyzing Your Business</h2>
          <p className="text-zinc-400 text-lg">Building your personalized automation roadmap...</p>
        </div>
      </div>
    )
  }

  // Report state
  if (report) {
    return (
      <div className="min-h-screen bg-[#09090B]">
        <Nav />
        <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
          <div className="rounded-2xl border border-zinc-800 overflow-hidden">
            <div className="bg-indigo-600 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-7 h-7 text-white" />
                <div>
                  <h1 className="text-2xl font-bold text-white">Your Operations Intelligence Report</h1>
                  <p className="text-indigo-200 text-sm mt-0.5">
                    {String(responses.businessName)} · {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button
                onClick={downloadReport}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>

            <div className="p-8 bg-zinc-900/40">
              <div className="prose prose-invert prose-zinc max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-zinc-300 leading-relaxed text-sm">
                  {report}
                </pre>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/60 border-t border-zinc-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-zinc-400 text-sm">
                  Ready to take the next step? We&apos;ll reach out within 1 business day. Or book a call now:
                </p>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  Book Discovery Call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Form state
  return (
    <div className="min-h-screen bg-[#09090B]">
      <Nav />

      {/* Progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-zinc-500 font-medium">
              {section.icon} {section.title} · Question {step + 1} of {TOTAL_QUESTIONS}
            </span>
            <span className="text-xs text-zinc-500 font-medium">{progress}%</span>
          </div>
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-36 pb-16">
        {/* Section context */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">{section.icon}</span>
          <div>
            <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest">
              Section {sectionIndex + 1} of {SECTIONS.length}
            </p>
            <h2 className="text-sm font-semibold text-white">{section.title}</h2>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="p-8">
            <label className="block text-xl font-semibold text-white mb-6 leading-snug">
              {question.label}
              {question.required && <span className="text-red-400 ml-1">*</span>}
            </label>

            {(question.type === 'text' || question.type === 'email' || question.type === 'tel') && (
              <input
                type={question.type}
                value={String(responses[question.id] ?? '')}
                onChange={e => handleResponse(e.target.value)}
                placeholder={question.placeholder}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            )}

            {question.type === 'textarea' && (
              <textarea
                value={String(responses[question.id] ?? '')}
                onChange={e => handleResponse(e.target.value)}
                placeholder={question.placeholder}
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
            )}

            {question.type === 'radio' && (
              <div className="space-y-3">
                {question.options.map((option, idx) => {
                  const selected = responses[question.id] === option
                  return (
                    <label
                      key={idx}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selected
                          ? 'bg-indigo-600/15 border-indigo-500'
                          : 'bg-zinc-800/40 border-zinc-700 hover:border-zinc-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        checked={selected}
                        onChange={() => handleResponse(option)}
                        className="w-4 h-4 accent-indigo-500"
                      />
                      <span className="text-zinc-200 text-sm flex-1">{option}</span>
                    </label>
                  )
                })}
              </div>
            )}

            {question.type === 'scale' && (
              <div className="space-y-5 pt-2">
                <input
                  type="range"
                  min={question.min}
                  max={question.max}
                  value={Number(responses[question.id] ?? question.min)}
                  onChange={e => handleResponse(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-700 rounded-full appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-500">{question.min} — Can wait</span>
                  <span className="text-4xl font-bold text-indigo-400">
                    {Number(responses[question.id] ?? question.min)}
                  </span>
                  <span className="text-zinc-500">{question.max} — Losing sleep</span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="px-8 py-5 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between">
            <button
              onClick={goPrev}
              disabled={step === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm font-medium"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              onClick={goNext}
              disabled={!canProceed()}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm"
            >
              {step === TOTAL_QUESTIONS - 1 ? (
                <><Sparkles className="w-4 h-4" /> Generate Report</>
              ) : (
                <>Next <ChevronRight className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>

        {/* Section nav pills */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {SECTIONS.map((s, idx) => {
            const start = SECTIONS.slice(0, idx).reduce((sum, x) => sum + x.questions.length, 0)
            const end = start + s.questions.length
            const isActive = step >= start && step < end
            const isDone = step >= end
            return (
              <button
                key={s.id}
                onClick={() => setStep(start)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive ? 'bg-indigo-600 text-white'
                  : isDone ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                  : 'bg-zinc-800/60 text-zinc-500 border border-zinc-700 hover:border-zinc-600'
                }`}
              >
                {s.icon} {s.title}
              </button>
            )
          })}
        </div>

        <p className="text-center text-zinc-600 text-xs mt-8">
          © {new Date().getFullYear()} AiMpact Technology · All responses are confidential
        </p>
      </div>
    </div>
  )
}
