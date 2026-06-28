'use client'

import { useState } from 'react'

const G = '#1a5c3a'
const GRAY = '#5a5a5a'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact-kailey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: `1px solid ${G}40`,
    backgroundColor: 'rgba(255,255,255,0.6)',
    fontSize: '15px',
    color: '#222',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Inter, system-ui, sans-serif',
  }

  if (status === 'success') {
    return (
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.5)',
          border: `2px solid ${G}`,
          borderRadius: '16px',
          padding: '48px 32px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '52px', marginBottom: '16px' }}>🎉</div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: G, marginBottom: '10px' }}>
          Message sent!
        </h3>
        <p style={{ color: GRAY, fontSize: '16px', lineHeight: 1.7 }}>
          Thanks for reaching out. Kailey will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: G, marginBottom: '6px' }}>
            Name *
          </label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={set('name')}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: G, marginBottom: '6px' }}>
            Email *
          </label>
          <input
            required
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={set('email')}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: G, marginBottom: '6px' }}>
          Phone <span style={{ fontWeight: 400, color: GRAY }}>(optional)</span>
        </label>
        <input
          type="tel"
          placeholder="(555) 000-0000"
          value={form.phone}
          onChange={set('phone')}
          style={inputStyle}
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: G, marginBottom: '6px' }}>
          Message *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell Kailey what you need — resume help, interview prep, job posting, or anything else..."
          value={form.message}
          onChange={set('message')}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
        />
      </div>

      {status === 'error' && (
        <p style={{ color: '#c0392b', fontSize: '14px', margin: 0 }}>
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          backgroundColor: status === 'sending' ? `${G}80` : G,
          color: 'white',
          padding: '14px 32px',
          borderRadius: '10px',
          border: 'none',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          fontWeight: 600,
          alignSelf: 'flex-start',
          transition: 'opacity 0.2s',
        }}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
