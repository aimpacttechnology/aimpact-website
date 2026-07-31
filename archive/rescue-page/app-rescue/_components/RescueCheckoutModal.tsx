'use client'

import { useEffect, useState } from 'react'
import { X, Lock, ArrowRight, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'error'

const inputClass =
  'w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-teal-500 transition-colors'

export default function RescueCheckoutModal() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', description: '',
  })

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('rescue:open-checkout', handler)
    return () => window.removeEventListener('rescue:open-checkout', handler)
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/rescue/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error ?? 'Something went wrong')
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#0D0D10] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-5 border-b border-zinc-800">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-white">Book Your Health Check</h2>
            <p className="text-zinc-500 text-sm mt-1">
              We save your contact info before checkout — so you're in our system even if you come back later.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-4 mt-0.5 text-zinc-600 hover:text-white transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Your Name <span className="text-teal-500">*</span>
              </label>
              <input
                name="name" type="text" required
                value={form.name} onChange={handleChange}
                placeholder="John Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Phone <span className="text-teal-500">*</span>
              </label>
              <input
                name="phone" type="tel" required
                value={form.phone} onChange={handleChange}
                placeholder="512-555-0100"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Email <span className="text-teal-500">*</span>
            </label>
            <input
              name="email" type="email" required
              value={form.email} onChange={handleChange}
              placeholder="john@company.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Company <span className="text-zinc-600 font-normal">(optional)</span>
            </label>
            <input
              name="company" type="text"
              value={form.company} onChange={handleChange}
              placeholder="Smith Energy LLC"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              What does your spreadsheet manage? <span className="text-zinc-600 font-normal">(brief)</span>
            </label>
            <textarea
              name="description"
              value={form.description} onChange={handleChange}
              rows={2}
              placeholder="e.g. Pipeline allocation tracking for 3 clients, built 8 years ago, about 12 tabs"
              className={inputClass + ' resize-none'}
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="group w-full inline-flex items-center justify-center gap-2 py-4 bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/20"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Preparing checkout…
              </>
            ) : (
              <>
                Continue to Payment — $200
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 text-zinc-600 text-xs">
            <Lock className="w-3 h-3" />
            <span>Secure payment via Stripe. NDA available on request before you share your file.</span>
          </div>
        </form>
      </div>
    </div>
  )
}
