'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react'

const sourceOptions = [
  'Referral from a colleague',
  'LinkedIn',
  'Google search',
  'AiMpact podcast / content',
  'Industry event',
  'Other',
]

export default function AffiliateApplyForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    network: '',
    source: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/affiliate/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-10 text-center">
        <CheckCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto">
          We'll review your application and reach out within 1–2 business days to walk you
          through the program and get you set up.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="aff-name" className="block text-zinc-400 text-sm font-medium mb-1.5">
            Full Name <span className="text-indigo-400">*</span>
          </label>
          <input
            id="aff-name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="aff-email" className="block text-zinc-400 text-sm font-medium mb-1.5">
            Email <span className="text-indigo-400">*</span>
          </label>
          <input
            id="aff-email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="aff-company" className="block text-zinc-400 text-sm font-medium mb-1.5">
            Company / Business Name <span className="text-indigo-400">*</span>
          </label>
          <input
            id="aff-company"
            name="company"
            type="text"
            required
            value={fields.company}
            onChange={handleChange}
            placeholder="Smith Advisory LLC"
            className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="aff-role" className="block text-zinc-400 text-sm font-medium mb-1.5">
            Your Role / Profession
          </label>
          <input
            id="aff-role"
            name="role"
            type="text"
            value={fields.role}
            onChange={handleChange}
            placeholder="Business Broker, CPA, Coach…"
            className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="aff-network" className="block text-zinc-400 text-sm font-medium mb-1.5">
          Tell us about your network
        </label>
        <textarea
          id="aff-network"
          name="network"
          rows={3}
          value={fields.network}
          onChange={handleChange}
          placeholder="Who do you work with? How many business owners are in your network? What industries?"
          className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
        />
      </div>

      <div>
        <label htmlFor="aff-source" className="block text-zinc-400 text-sm font-medium mb-1.5">
          How did you hear about AiMpact?
        </label>
        <select
          id="aff-source"
          name="source"
          value={fields.source}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
        >
          <option value="">Select one…</option>
          {sourceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Submit Application
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </button>

      <p className="text-zinc-600 text-xs text-center">
        Free to join · No minimums · We'll follow up within 1–2 business days
      </p>
    </form>
  )
}
