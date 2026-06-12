import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PrintButton from '@/components/PrintButton'
import {
  ArrowRight,
  DollarSign,
  Users,
  Share2,
  Shield,
  Check,
  TrendingUp,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner Program Brochure — AiMpact Technology',
  description:
    'A one-page overview of the AiMpact Technology PaaS dev partner program — how it works, who fits, and commission tiers.',
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const howItWorks = [
  {
    icon: Share2,
    title: 'Refer a Business or Agency',
    desc: 'Share your referral link or make a direct introduction. Anyone running a business buried in disconnected tools — or an agency/consultant who needs a dev team — is a great fit.',
  },
  {
    icon: Users,
    title: 'We Handle the Rest',
    desc: "We run discovery, scope the right build — an AI agent, automation, custom app, or full AiMpact OS platform — and close the deal. You don't need to sell anything, just make the introduction.",
  },
  {
    icon: DollarSign,
    title: 'You Get Paid',
    desc: "Earn commission on every engagement that closes from your referral, plus recurring commission on any ongoing retainer. Paid net-30 after the client's payment clears.",
  },
]

const whoFits = [
  'Marketing, branding, and growth agencies',
  'Business consultants and fractional operators',
  'Freelance developers and small dev shops',
  'Business brokers and M&A advisors',
  'CPAs, accountants, and financial planners',
  'Anyone with a network of business owners',
]

const tiers = [
  { tier: 'Associate', deals: '0–2 closed deals', rate: '12%' },
  { tier: 'Partner', deals: '3–9 closed deals', rate: '15%' },
  { tier: 'Executive Partner', deals: '10+ closed deals', rate: '18%' },
]

const extraCommissions = [
  { label: 'Retainer commission', desc: '10% of any monthly retainer/support value for 12 months after it begins' },
  { label: 'Renewal commission', desc: '5% on renewals or upsells from clients you originally introduced, for as long as you’re active' },
  { label: 'Sub-rep override', desc: '+2% on deals closed by reps you recruit (Partner tier+)' },
]

export default function AffiliateBrochurePage() {
  return (
    <>
      <div className="print:hidden">
        <Nav />
      </div>
      <main className="bg-[#09090B] print:bg-white">
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#09090B] print:bg-white print:pt-0">
          <div className="absolute inset-0 bg-grid opacity-100 print:hidden" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none print:hidden" />

          <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-12 print:pt-10 print:pb-6">
            <div className="flex items-center justify-between gap-4 mb-6 print:mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium print:border-zinc-300 print:bg-transparent print:text-indigo-700">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse print:hidden" />
                Partner Program Overview
              </div>
              <PrintButton />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white print:text-black mb-4 leading-[1.1] tracking-tight">
              Become a PaaS
              <br />
              <span className="text-gradient print:text-indigo-700">Dev Partner.</span>
            </h1>

            <p className="text-lg text-zinc-400 print:text-zinc-700 max-w-2xl leading-relaxed">
              Introduce business owners and agencies to AiMpact Technology — we scope, build, and
              deliver custom AI agents, automations, and full operational platforms — and you earn
              commission on every deal that closes.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="py-12 bg-[#0D0D10] print:bg-white print:py-6">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white print:text-black mb-6 tracking-tight">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-5 print:gap-4">
              {howItWorks.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 relative print:border-zinc-300 print:bg-white print:rounded-lg print:p-4"
                >
                  <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center print:bg-indigo-700">
                    {i + 1}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-4 print:hidden">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white print:text-black mb-2">{title}</h3>
                  <p className="text-zinc-400 print:text-zinc-700 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMISSION TIERS ─────────────────────────────────────────── */}
        <section className="py-12 bg-[#09090B] print:bg-white print:py-6">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white print:text-black mb-2 tracking-tight">
              Commission Tiers
            </h2>
            <p className="text-zinc-400 print:text-zinc-700 text-sm mb-6 max-w-2xl">
              Your rate is locked in at registration time and protected for 90 days. Tiers are based
              on cumulative closed deals — your rate only goes up.
            </p>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 overflow-hidden print:border-zinc-300 print:rounded-lg mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-800 print:border-zinc-300">
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-500 print:text-zinc-600">Tier</th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-500 print:text-zinc-600">Closed Deals</th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-500 print:text-zinc-600">Commission Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t, i) => (
                    <tr key={t.tier} className={i < tiers.length - 1 ? 'border-b border-zinc-800 print:border-zinc-200' : ''}>
                      <td className="px-5 py-3 text-white print:text-black font-medium">{t.tier}</td>
                      <td className="px-5 py-3 text-zinc-400 print:text-zinc-700 text-sm">{t.deals}</td>
                      <td className="px-5 py-3 text-indigo-400 print:text-indigo-700 font-semibold">{t.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {extraCommissions.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 print:border-zinc-300 print:bg-white print:rounded-lg print:p-4"
                >
                  <h4 className="text-sm font-semibold text-white print:text-black mb-1.5 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-400 print:hidden" />
                    {item.label}
                  </h4>
                  <p className="text-xs text-zinc-500 print:text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-zinc-500 print:text-zinc-600 text-xs mt-5 max-w-2xl">
              Worked example (Associate tier): a $15,000 platform build earns you $1,800. If that
              client also starts a $1,500/month support retainer, you earn another $150/month for 12
              months — $1,800 total. Commissions are paid net-30 after the client&apos;s payment clears.
            </p>
          </div>
        </section>

        {/* ── WHO THIS IS FOR ──────────────────────────────────────────── */}
        <section className="py-12 bg-[#0D0D10] print:bg-white print:py-6">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white print:text-black mb-2 tracking-tight">
              Who This Is For
            </h2>
            <p className="text-zinc-400 print:text-zinc-700 text-sm mb-6 max-w-2xl">
              You don&apos;t need a big audience. You need the right relationships.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {whoFits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/20 px-5 py-3 print:border-zinc-300 print:bg-white print:rounded-lg"
                >
                  <Check className="w-4 h-4 text-indigo-400 print:text-indigo-700 flex-shrink-0" />
                  <span className="text-zinc-300 print:text-zinc-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-16 bg-[#09090B] print:bg-white print:py-8 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none print:hidden" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/40 text-zinc-400 text-xs mb-6 print:border-zinc-300 print:text-zinc-600">
              <Shield className="w-3.5 h-3.5" />
              Low-cost setup · Discounted AiMpact OS rate · Paid within 30 days of project kickoff
            </div>
            <h2 className="text-3xl font-bold text-white print:text-black mb-4 tracking-tight">
              Ready to Start Referring?
            </h2>
            <p className="text-zinc-400 print:text-zinc-700 text-base mb-8 max-w-xl mx-auto">
              Apply online, or book a call to walk through the program before you commit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
              <Link
                href="/affiliates#apply"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                Apply to Join
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                Book a Call First
              </a>
            </div>
            <p className="print:block hidden text-sm text-zinc-700 mt-2">
              Apply at aimpacttechnology.com/affiliates or book a call at cal.com/landon-aimpacttechnology.com
            </p>
          </div>
        </section>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  )
}
