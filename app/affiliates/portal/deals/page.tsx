'use client'

import { useEffect, useState } from 'react'
import { Plus, X, Loader2, ShieldCheck } from 'lucide-react'

const SERVICES = [
  { value: 'ai_agent', label: 'AI Agent / Front Desk' },
  { value: 'automation', label: 'Business Automation' },
  { value: 'custom_app', label: 'Custom App / Platform' },
  { value: 'aimpact_os', label: 'AiMpact OS / Partner Platform' },
  { value: 'consulting', label: 'Strategic Consulting' },
]

const BUDGETS = ['Under $5K', '$5K–$10K', '$10K–$25K', '$25K+', 'Unknown']
const TIMELINES = ['ASAP', '1–3 months', '3–6 months', '6–12 months', 'Just exploring']

const STATUS_COLORS: Record<string, string> = {
  submitted: 'bg-blue-500/10 text-blue-400',
  reviewing: 'bg-amber-500/10 text-amber-400',
  approved: 'bg-indigo-500/10 text-indigo-400',
  won: 'bg-green-500/10 text-green-400',
  lost: 'bg-red-500/10 text-red-400',
  expired: 'bg-zinc-500/10 text-zinc-400',
}

const BLANK = {
  prospect_first_name: '', prospect_last_name: '', prospect_email: '',
  prospect_phone: '', prospect_company: '', service_interest: 'consulting',
  budget_range: '', timeline: '', notes: '', estimated_value: '',
}

export default function PortalDealsPage() {
  const [deals, setDeals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ ...BLANK })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/affiliates/deals').then(r => r.json()).then(d => setDeals(d.deals ?? [])).finally(() => setLoading(false))
  }, [])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch('/api/affiliates/deals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, estimated_value: form.estimated_value ? parseFloat(form.estimated_value) : null }),
    })
    const data = await res.json()
    setSaving(false)
    if (!res.ok) { setError(data.error ?? 'Something went wrong'); return }
    setDeals(prev => [data.deal, ...prev])
    setShowForm(false)
    setForm({ ...BLANK })
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Deal Registrations</h1>
          <p className="text-sm text-zinc-400 mt-0.5">Register prospects to lock in your 90-day commission protection.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" /> Register Deal
        </button>
      </div>

      <div className="flex items-start gap-3 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
        <ShieldCheck className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-indigo-200">
          <strong>Register before you pitch.</strong> First-to-register wins — no exceptions. Your commission rate is
          locked at submission time and protected for 90 days from approval.
        </div>
      </div>

      {showForm && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-white">Register a New Prospect</h2>
            <button onClick={() => { setShowForm(false); setError('') }} className="p-1 text-zinc-500 hover:text-zinc-300 rounded">
              <X className="w-4 h-4" />
            </button>
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Prospect Info</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="First Name *" value={form.prospect_first_name} onChange={v => setForm(p => ({ ...p, prospect_first_name: v }))} required />
                <Field label="Last Name" value={form.prospect_last_name} onChange={v => setForm(p => ({ ...p, prospect_last_name: v }))} />
                <Field label="Company *" value={form.prospect_company} onChange={v => setForm(p => ({ ...p, prospect_company: v }))} required />
                <Field label="Email" type="email" value={form.prospect_email} onChange={v => setForm(p => ({ ...p, prospect_email: v }))} />
                <Field label="Phone" value={form.prospect_phone} onChange={v => setForm(p => ({ ...p, prospect_phone: v }))} />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Opportunity</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Service Interest</label>
                  <select value={form.service_interest} onChange={e => setForm(p => ({ ...p, service_interest: e.target.value }))} className="w-full text-sm px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500">
                    {SERVICES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Budget Range</label>
                  <select value={form.budget_range} onChange={e => setForm(p => ({ ...p, budget_range: e.target.value }))} className="w-full text-sm px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500">
                    <option value="">— Select —</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Timeline</label>
                  <select value={form.timeline} onChange={e => setForm(p => ({ ...p, timeline: e.target.value }))} className="w-full text-sm px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500">
                    <option value="">— Select —</option>
                    {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-xs font-medium text-zinc-400 mb-1">Notes (optional)</label>
                <textarea
                  value={form.notes}
                  onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                  rows={2}
                  placeholder="Context about the prospect, how you met them, their pain points..."
                  className="w-full text-sm px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
            </div>
            {error && <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">{error}</p>}
            <div className="flex items-center gap-3 pt-1">
              <button type="submit" disabled={saving} className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                Register &amp; Protect Commission
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="text-sm text-zinc-400 hover:text-zinc-200">Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30">
        <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="font-semibold text-white">All Registrations</h2>
          <span className="text-xs text-zinc-500">{deals.length} total</span>
        </div>
        {deals.length === 0 ? (
          <div className="p-12 text-center">
            <ShieldCheck className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
            <p className="text-sm text-zinc-300 font-medium">No deals registered yet</p>
            <p className="text-xs text-zinc-500 mt-1">Register a prospect before you pitch to protect your commission.</p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800">
            {deals.map((deal: any) => (
              <div key={deal.id} className="px-5 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-medium text-white text-sm">{deal.prospect_first_name} {deal.prospect_last_name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${STATUS_COLORS[deal.status] ?? 'bg-zinc-800 text-zinc-400'}`}>
                        {deal.status}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 mt-0.5">{deal.prospect_company}</p>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="text-xs text-zinc-500">{SERVICES.find(s => s.value === deal.service_interest)?.label ?? deal.service_interest}</span>
                      {deal.budget_range && <span className="text-xs text-zinc-500">{deal.budget_range}</span>}
                      {deal.protected_until && (
                        <span className="text-xs text-zinc-500">Protected until {new Date(deal.protected_until).toLocaleDateString()}</span>
                      )}
                    </div>
                    {deal.notes && <p className="text-xs text-zinc-500 mt-1 italic truncate max-w-md">{deal.notes}</p>}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-zinc-500">{new Date(deal.created_at).toLocaleDateString()}</p>
                    {deal.estimated_value && <p className="text-sm font-semibold text-zinc-200 mt-0.5">${Number(deal.estimated_value).toLocaleString()}</p>}
                    {deal.commission_rate && <p className="text-xs text-indigo-400">{(deal.commission_rate * 100).toFixed(0)}% rate locked</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ label, value, onChange, required, type }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-400 mb-1">{label}</label>
      <input
        type={type ?? 'text'}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full text-sm px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
      />
    </div>
  )
}
