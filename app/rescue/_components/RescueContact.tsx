'use client'

import { useState } from 'react'
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const industries = [
  'Oil & Gas / Pipeline Operations',
  'Land & Lease Management (Landman)',
  'Industrial Service Company',
  'Contractor / Subcontractor',
  'Equipment Rental',
  'Government / Municipal Office',
  'Trade School / Vocational Program',
  'Family-Owned Business',
  'Professional Services',
  'Other',
]

const concerns = [
  'The person who built it is retiring or leaving',
  'Formulas are breaking and I am not sure what is wrong',
  'We need to share it with more people but cannot safely',
  'We are worried about an audit or compliance review',
  'Reports take too long to produce',
  'We want to scale but the spreadsheet cannot scale with us',
  'We are not sure what we have — it just grew over time',
]

export default function RescueContact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    description: '',
    concern: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/rescue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', industry: '', description: '', concern: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-teal-500 transition-colors'

  return (
    <section id="contact" className="py-28 bg-[#0D0D10]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Tell Us About Your Spreadsheet.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Jaclyn will review your submission personally and respond within 24 hours.
            No sales team. No form letter. A real answer.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
              <h3 className="text-white font-semibold mb-5">Contact Directly</h3>
              <div className="space-y-4">
                <a
                  href="tel:18883354979"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 mb-0.5">Phone</p>
                    <p className="text-sm font-medium">(888) 335-4979</p>
                  </div>
                </a>
                <a
                  href="mailto:landon@aimpacttechnology.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 mb-0.5">Email</p>
                    <p className="text-sm font-medium">landon@aimpacttechnology.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 mb-0.5">Response time</p>
                    <p className="text-sm font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6">
              <p className="text-teal-300 text-sm font-semibold mb-2">What to send us</p>
              <ul className="space-y-1.5 text-zinc-400 text-sm">
                <li>— A description of what the spreadsheet does</li>
                <li>— Who uses it and how often</li>
                <li>— What you are most worried about</li>
                <li>— Whether there is a timeline (retirement, audit, etc.)</li>
              </ul>
              <p className="text-zinc-600 text-xs mt-4">
                You do not need to attach your file. We will request it after we connect.
                Everything is treated as confidential.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-14 h-14 text-teal-400 mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">Got it. Thank you.</h3>
                  <p className="text-zinc-400 text-base max-w-xs">
                    Jaclyn will review this and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Your Name <span className="text-teal-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Smith Energy LLC"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Email <span className="text-teal-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="512-555-0100"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      className={inputClass + ' appearance-none'}
                    >
                      <option value="" disabled>Select your industry...</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      What does your spreadsheet manage? <span className="text-teal-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      required
                      value={form.description}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe what the spreadsheet does — what data lives in it, who uses it, how often, and how long it has been around."
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      What is your biggest concern?
                    </label>
                    <select
                      name="concern"
                      value={form.concern}
                      onChange={handleChange}
                      className={inputClass + ' appearance-none'}
                    >
                      <option value="" disabled>Select your biggest concern...</option>
                      {concerns.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or email us directly at landon@aimpacttechnology.com.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group w-full inline-flex items-center justify-center gap-2 py-4 bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/20"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send to Jaclyn'}
                    {status !== 'loading' && (
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
