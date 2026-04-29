'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight, Loader2, Zap, Clock, DollarSign, BarChart3, Shield } from 'lucide-react'
import Image from 'next/image'

const WHAT_YOU_GET = [
  { icon: BarChart3, title: 'Top Automation Opportunities', desc: 'Exactly where AI can eliminate your biggest time drains — specific to your business.' },
  { icon: Clock, title: '90-Day Implementation Roadmap', desc: 'Phase-by-phase action plan. Quick wins in week one, full transformation by month three.' },
  { icon: DollarSign, title: 'ROI Analysis', desc: 'Real numbers. Hours saved per week, estimated monthly savings, revenue opportunity.' },
  { icon: Zap, title: 'Recommended AI Stack', desc: 'The exact tools and automations built for your industry, team size, and goals.' },
]

const STEPS = ['Your Business', 'Operations', 'Goals']

interface Responses {
  ownerName: string
  businessName: string
  email: string
  industry: string
  teamSize: string
  timeConsumingTasks: string
  currentTools: string
  biggestPain: string
  monthlyRevenue: string
  urgency: string
}

const EMPTY: Responses = {
  ownerName: '', businessName: '', email: '', industry: '',
  teamSize: '', timeConsumingTasks: '', currentTools: '',
  biggestPain: '', monthlyRevenue: '', urgency: '5',
}

export default function ReportPage() {
  const [step, setStep] = useState(0)
  const [responses, setResponses] = useState<Responses>(EMPTY)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function set(key: keyof Responses, value: string) {
    setResponses(prev => ({ ...prev, [key]: value }))
  }

  function canAdvance() {
    if (step === 0) return responses.ownerName && responses.businessName && responses.email && responses.industry
    if (step === 1) return responses.teamSize && responses.timeConsumingTasks && responses.currentTools
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (step < 2) { setStep(s => s + 1); return }

    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/report/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ responses }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong')
      window.location.href = data.url
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  const inputClass = "w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
  const labelClass = "block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider"

  return (
    <div className="min-h-screen bg-[#0D0D10] text-white">
      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <a href="/" className="flex items-center gap-2">
          <Image src="/aimpact-logo.png" alt="AiMpact Technology" width={120} height={36} className="h-9 w-auto" />
        </a>
        <span className="text-xs text-zinc-500">Secure checkout via Stripe</span>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Value prop */}
          <div className="lg:sticky lg:top-16">
            <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5" /> AI-Powered Business Audit
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Find Out Exactly Where AI Can Save Your Business
              <span className="text-indigo-400"> Time & Money</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Answer 8 questions about your business. Get a personalized AI Opportunity Report — written by Claude AI, reviewed by our consultants — delivered to your inbox in minutes.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <div className="text-4xl font-bold text-white">$147</div>
              <div className="text-zinc-500 text-sm leading-snug">One-time · Instant delivery<br />No sales call required</div>
            </div>

            <div className="space-y-4 mb-10">
              {WHAT_YOU_GET.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-sm text-zinc-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-zinc-600 text-xs">
              <Shield className="w-3.5 h-3.5" />
              Secured by Stripe · 100% satisfaction or your money back
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {STEPS.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-colors ${
                    i < step ? 'bg-indigo-600 text-white' : i === step ? 'bg-indigo-600 text-white' : 'bg-zinc-800 text-zinc-500'
                  }`}>
                    {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className={`text-sm ${i === step ? 'text-white font-medium' : 'text-zinc-500'}`}>{s}</span>
                  {i < STEPS.length - 1 && <div className="w-8 h-px bg-zinc-700 mx-1" />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {step === 0 && (
                <>
                  <h2 className="text-lg font-semibold text-white mb-4">Tell us about yourself</h2>
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input className={inputClass} placeholder="Landon McDuff" value={responses.ownerName} onChange={e => set('ownerName', e.target.value)} required />
                  </div>
                  <div>
                    <label className={labelClass}>Business Name *</label>
                    <input className={inputClass} placeholder="Acme Consulting" value={responses.businessName} onChange={e => set('businessName', e.target.value)} required />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input type="email" className={inputClass} placeholder="you@yourbusiness.com" value={responses.email} onChange={e => set('email', e.target.value)} required />
                    <p className="text-xs text-zinc-600 mt-1">Your report will be delivered here</p>
                  </div>
                  <div>
                    <label className={labelClass}>Industry / Type of Business *</label>
                    <input className={inputClass} placeholder="e.g. Real estate, Law firm, Marketing agency" value={responses.industry} onChange={e => set('industry', e.target.value)} required />
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 className="text-lg font-semibold text-white mb-4">How does your business operate?</h2>
                  <div>
                    <label className={labelClass}>Team Size *</label>
                    <select className={inputClass} value={responses.teamSize} onChange={e => set('teamSize', e.target.value)} required>
                      <option value="">Select...</option>
                      <option>Just me (solo)</option>
                      <option>2-5 people</option>
                      <option>6-15 people</option>
                      <option>16-50 people</option>
                      <option>50+ people</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>What tasks eat up most of your week? *</label>
                    <textarea className={inputClass} rows={3} placeholder="e.g. Scheduling appointments, sending follow-up emails, creating reports, data entry..." value={responses.timeConsumingTasks} onChange={e => set('timeConsumingTasks', e.target.value)} required />
                  </div>
                  <div>
                    <label className={labelClass}>What tools/software do you currently use? *</label>
                    <input className={inputClass} placeholder="e.g. QuickBooks, Google Workspace, Salesforce, Excel..." value={responses.currentTools} onChange={e => set('currentTools', e.target.value)} required />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-lg font-semibold text-white mb-4">Your goals & situation</h2>
                  <div>
                    <label className={labelClass}>Biggest operational headache right now</label>
                    <textarea className={inputClass} rows={3} placeholder="What's the one thing that slows you down or frustrates you most?" value={responses.biggestPain} onChange={e => set('biggestPain', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Approximate monthly revenue</label>
                    <select className={inputClass} value={responses.monthlyRevenue} onChange={e => set('monthlyRevenue', e.target.value)}>
                      <option value="">Prefer not to say</option>
                      <option>Under $10k/mo</option>
                      <option>$10k - $30k/mo</option>
                      <option>$30k - $75k/mo</option>
                      <option>$75k - $200k/mo</option>
                      <option>$200k+/mo</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>How urgent is solving this? (1 = not urgent, 10 = critical)</label>
                    <div className="flex items-center gap-3">
                      <input type="range" min="1" max="10" value={responses.urgency} onChange={e => set('urgency', e.target.value)} className="flex-1 accent-indigo-500" />
                      <span className="text-white font-bold text-lg w-6 text-center">{responses.urgency}</span>
                    </div>
                  </div>

                  {error && <p className="text-red-400 text-sm bg-red-950/30 border border-red-800 rounded-lg px-3 py-2">{error}</p>}
                </>
              )}

              <div className="flex gap-3 pt-2">
                {step > 0 && (
                  <button type="button" onClick={() => setStep(s => s - 1)} className="px-4 py-3 text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    ← Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={!canAdvance() || loading}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Preparing checkout...</>
                  ) : step < 2 ? (
                    <>Continue <ArrowRight className="w-4 h-4" /></>
                  ) : (
                    <>Get My Report — $147 <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
