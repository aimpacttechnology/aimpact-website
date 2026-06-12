'use client'

import { useEffect, useState } from 'react'
import { DollarSign, Loader2, CheckCircle } from 'lucide-react'

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-amber-500/10 text-amber-400',
  approved: 'bg-blue-500/10 text-blue-400',
  paid: 'bg-green-500/10 text-green-400',
  reversed: 'bg-red-500/10 text-red-400',
}

export default function CommissionsPage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [requesting, setRequesting] = useState(false)
  const [payoutSent, setPayoutSent] = useState(false)

  useEffect(() => {
    fetch('/api/affiliates/me').then(r => r.json()).then(setData).finally(() => setLoading(false))
  }, [])

  async function requestPayout() {
    setRequesting(true)
    const res = await fetch('/api/affiliates/payout', { method: 'POST' })
    setRequesting(false)
    if (res.ok) setPayoutSent(true)
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>
  }
  if (!data?.affiliate) return <div className="text-zinc-400 text-sm">Affiliate record not found.</div>

  const { affiliate, pendingCents, recentCommissions } = data
  const earned = ((affiliate.total_earned_cents ?? 0) / 100).toFixed(2)
  const paid = ((affiliate.total_paid_cents ?? 0) / 100).toFixed(2)
  const pending = (pendingCents / 100).toFixed(2)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Commissions</h1>
        <p className="text-sm text-zinc-400 mt-0.5">Your earnings summary and payout history.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Earned', value: `$${earned}`, color: 'text-indigo-400 bg-indigo-500/10' },
          { label: 'Total Paid', value: `$${paid}`, color: 'text-green-400 bg-green-500/10' },
          { label: 'Pending', value: `$${pending}`, color: 'text-amber-400 bg-amber-500/10' },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${color}`}>
              <DollarSign className="w-4 h-4" />
            </div>
            <p className="text-xl font-bold text-white">{value}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
        <h2 className="font-semibold text-white mb-1">Request a Payout</h2>
        <p className="text-sm text-zinc-400 mb-4">
          Commissions are paid net-30 after client payment clears. Payments are processed via Zelle, ACH, or check.
        </p>

        {payoutSent ? (
          <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-green-300">Payout request sent</p>
              <p className="text-xs text-green-400/80">We&apos;ll process your payout within 3 business days.</p>
            </div>
          </div>
        ) : pendingCents > 0 ? (
          <button
            onClick={requestPayout}
            disabled={requesting}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            {requesting ? <Loader2 className="w-4 h-4 animate-spin" /> : <DollarSign className="w-4 h-4" />}
            Request ${pending} Payout
          </button>
        ) : (
          <p className="text-sm text-zinc-500">No pending balance to request.</p>
        )}
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30">
        <div className="px-5 py-4 border-b border-zinc-800">
          <h2 className="font-semibold text-white">Commission History</h2>
        </div>
        {recentCommissions.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-sm text-zinc-500">No commissions recorded yet. Win your first deal to see earnings here.</p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800">
            {recentCommissions.map((c: any) => (
              <div key={c.id} className="flex items-center gap-4 px-5 py-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-zinc-300">{c.description ?? 'Commission'}</p>
                  <p className="text-xs text-zinc-500">{new Date(c.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${STATUS_COLORS[c.status] ?? 'bg-zinc-800 text-zinc-400'}`}>
                    {c.status}
                  </span>
                  <p className="text-sm font-bold text-white">${((c.amount_cents ?? 0) / 100).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
