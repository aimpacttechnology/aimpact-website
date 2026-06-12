'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Copy, Check, TrendingUp, DollarSign, MousePointerClick, ShieldCheck, ChevronRight, Plus } from 'lucide-react'
import { getTierInfo } from '@/lib/affiliates/training-content'

const SERVICE_LABELS: Record<string, string> = {
  ai_agent: 'AI Agent / Front Desk',
  automation: 'Business Automation',
  custom_app: 'Custom App / Platform',
  consulting: 'Strategic Consulting',
  aimpact_os: 'AiMpact OS / Partner Platform',
}

const STATUS_COLORS: Record<string, string> = {
  submitted: 'bg-blue-500/10 text-blue-400',
  reviewing: 'bg-amber-500/10 text-amber-400',
  approved: 'bg-indigo-500/10 text-indigo-400',
  won: 'bg-green-500/10 text-green-400',
  lost: 'bg-red-500/10 text-red-400',
  expired: 'bg-zinc-500/10 text-zinc-400',
}

const TIER_COLORS: Record<string, string> = {
  purple: 'bg-purple-500/10 text-purple-400',
  indigo: 'bg-indigo-500/10 text-indigo-400',
  blue: 'bg-blue-500/10 text-blue-400',
}

export default function PortalHomePage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/affiliates/me').then(r => r.json()).then(setData).finally(() => setLoading(false))
  }, [])

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>
  }

  if (!data?.affiliate) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 text-zinc-400 text-sm">
        Affiliate record not found. Contact your AiMpact account manager to get set up.
      </div>
    )
  }

  const { affiliate, pendingCents, recentDeals, recentCommissions } = data
  const wonDeals = affiliate.total_conversions ?? 0
  const tier = getTierInfo(wonDeals)
  const earned = ((affiliate.total_earned_cents ?? 0) / 100).toFixed(2)
  const pending = (pendingCents / 100).toFixed(2)
  const activeCodes = (affiliate.referral_codes ?? []).filter((c: any) => c.is_active)

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Partner Dashboard</h1>
          <p className="text-sm text-zinc-400 mt-0.5">Welcome back, {affiliate.full_name}</p>
        </div>
        <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${TIER_COLORS[tier.color] ?? 'bg-zinc-800 text-zinc-300'}`}>
          {tier.name} · {(affiliate.commission_rate * 100).toFixed(0)}%
        </span>
      </div>

      {affiliate.status === 'pending' && (
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-sm text-amber-300">
          <strong>Account pending activation.</strong> Your account is being reviewed. You&apos;ll receive an email once
          you&apos;re approved and can begin deal registration and training.
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Clicks', value: affiliate.total_clicks ?? 0, icon: MousePointerClick, color: 'text-blue-400 bg-blue-500/10' },
          { label: 'Won Deals', value: wonDeals, icon: ShieldCheck, color: 'text-green-400 bg-green-500/10' },
          { label: 'Total Earned', value: `$${earned}`, icon: TrendingUp, color: 'text-indigo-400 bg-indigo-500/10' },
          { label: 'Pending Payout', value: `$${pending}`, icon: DollarSign, color: 'text-amber-400 bg-amber-500/10' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${color}`}>
              <Icon className="w-4 h-4" />
            </div>
            <p className="text-xl font-bold text-white">{value}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {tier.next && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-zinc-300">Progress to {tier.next.name}</p>
            <p className="text-xs text-zinc-500">{wonDeals} / {wonDeals + tier.next.dealsNeeded} deals</p>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div
              className="bg-indigo-500 h-2 rounded-full transition-all"
              style={{ width: `${Math.min(100, (wonDeals / (wonDeals + tier.next.dealsNeeded)) * 100)}%` }}
            />
          </div>
          <p className="text-xs text-zinc-500 mt-1.5">
            {tier.next.dealsNeeded} more won deal{tier.next.dealsNeeded !== 1 ? 's' : ''} to reach {tier.next.name} (
            {tier.next.name === 'Partner' ? '15%' : '18%'} commission)
          </p>
        </div>
      )}

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
        <h2 className="font-semibold text-white mb-3">Your Referral Links</h2>
        {activeCodes.length === 0 ? (
          <p className="text-sm text-zinc-500">No referral codes yet. Contact your account manager.</p>
        ) : (
          <div className="space-y-3">
            {activeCodes.map((rc: any) => (
              <div key={rc.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">{rc.label}</span>
                  <span className="text-xs font-mono bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">{rc.code}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-950 rounded-lg border border-zinc-800">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 mb-0.5">Referral Link</p>
                    <p className="text-sm font-mono text-zinc-300 truncate">{rc.referral_url}</p>
                  </div>
                  <button
                    onClick={() => copy(rc.referral_url, `ref-${rc.id}`)}
                    className="flex-shrink-0 p-2 text-zinc-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors"
                  >
                    {copied === `ref-${rc.id}` ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="text-xs text-zinc-500 mt-3">Share this link to track clicks and attribute new clients to your account.</p>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <h2 className="font-semibold text-white">Recent Deal Registrations</h2>
          <Link href="/affiliates/portal/deals" className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        {recentDeals.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-sm text-zinc-500 mb-3">No deals registered yet.</p>
            <Link href="/affiliates/portal/deals" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors">
              <Plus className="w-4 h-4" /> Register Your First Deal
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800">
            {recentDeals.map((deal: any) => (
              <div key={deal.id} className="flex items-center gap-4 px-5 py-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {deal.prospect_first_name} {deal.prospect_last_name} — {deal.prospect_company}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {SERVICE_LABELS[deal.service_interest] ?? deal.service_interest} · {new Date(deal.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize flex-shrink-0 ${STATUS_COLORS[deal.status] ?? 'bg-zinc-800 text-zinc-400'}`}>
                  {deal.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
