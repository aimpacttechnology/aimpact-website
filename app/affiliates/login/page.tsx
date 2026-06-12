'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Loader2, CheckCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function AffiliateLoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/affiliates/portal`,
      },
    })

    setLoading(false)
    if (authError) {
      setError(authError.message)
      return
    }
    setSent(true)
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#09090B]">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-md w-full mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-xl font-bold text-white mb-6">
            AiMpact<span className="text-indigo-400">Technology</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Partner Portal</h1>
          <p className="text-zinc-400 text-sm">
            Sign in with your email to access your dashboard, deal registration, commissions, and training.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          {sent ? (
            <div className="text-center py-4">
              <CheckCircle className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">Check your email</p>
              <p className="text-zinc-400 text-sm">
                We sent a sign-in link to <span className="text-zinc-200">{email}</span>. Click it to access your
                partner portal.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-3 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                Send Sign-In Link
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-6">
          Not a partner yet?{' '}
          <Link href="/affiliates#apply" className="text-indigo-400 hover:text-indigo-300">
            Apply to join the program
          </Link>
        </p>
      </div>
    </div>
  )
}
