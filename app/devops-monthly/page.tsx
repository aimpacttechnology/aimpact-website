import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle, Clock, Code2, MessageSquare, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DevOps Monthly — Ongoing AI Dev Support | AiMpact Technology',
  description: 'Four hours of dedicated AI development support every month for $1,400. Fix bugs, add features, maintain automations, and keep your tech stack running — without hiring.',
  openGraph: {
    title: 'DevOps Monthly — $1,400/mo for 4 Hours of Dedicated Dev Support',
    description: 'A senior AI developer on retainer — without the headcount. Fix it, build it, or optimize it. Every month.',
    url: 'https://www.aimpacttechnology.com/devops-monthly',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const included = [
  { icon: Code2, title: 'Bug fixes & maintenance', desc: 'Something broke? We fix it — same day for critical issues, within the week for everything else.' },
  { icon: Zap, title: 'Feature additions', desc: 'Need a new field, a new workflow, or a new integration? We scope and build it within your monthly hours.' },
  { icon: MessageSquare, title: 'AI & automation updates', desc: 'Prompt tuning, n8n workflow updates, Zapier fixes, webhook debugging — we handle the entire automation stack.' },
  { icon: Shield, title: 'Security & uptime', desc: 'Dependency updates, API key rotations, monitoring setup. Your tools stay secure and running.' },
  { icon: Clock, title: 'Priority response', desc: 'Retainer clients get same-day acknowledgment on any request. You\'re not waiting in a queue.' },
  { icon: MessageSquare, title: 'Monthly check-in', desc: 'A 30-minute call each month to review what was done, what\'s next, and where your tech can improve.' },
]

const fits = [
  'You built a custom platform with AiMpact and want ongoing support',
  'You run automations that need regular tuning and maintenance',
  'You\'re adding AI tools to your workflow and want expert help integrating them',
  'You can\'t justify a full-time hire but need consistent dev access',
  'You have 1–3 small tech tasks every month that keep piling up',
]

const notFits = [
  'You need a 40-hour-a-week developer (that\'s a different engagement)',
  'You don\'t have any existing tech to maintain or improve',
  'You want unlimited requests for a flat fee',
]

export default function DevOpsMonthlyPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-[#09090B]">
          <div className="absolute inset-0 bg-grid opacity-100" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />

          <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Retainer · $1,400/month
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              A Developer on Retainer.
              <br />
              <span className="text-gradient">Without the Overhead.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Four hours of dedicated AI development support every month. Fix bugs, add features,
              tune automations, maintain integrations. One flat monthly fee — no surprises,
              no hiring, no onboarding a new contractor every time something breaks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                Book a 15-Minute Intro Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {[
                { label: '4 hours / month' },
                { label: '$1,400 flat — no overages' },
                { label: 'Cancel anytime' },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-2 text-zinc-400">
                  <CheckCircle className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">What's Included</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Four hours used however you need them.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map(item => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 hover:border-zinc-700 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Who it's for / not for */}
        <section className="py-24 bg-[#09090B]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-5">This is a great fit if…</h3>
                <div className="space-y-3">
                  {fits.map(f => (
                    <div key={f} className="flex items-start gap-3 text-zinc-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-5">This is not a great fit if…</h3>
                <div className="space-y-3">
                  {notFits.map(f => (
                    <div key={f} className="flex items-start gap-3 text-zinc-400 text-sm">
                      <div className="w-4 h-4 rounded-full border border-red-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing card */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-lg mx-auto px-6">
            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-8 text-center">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">DevOps Monthly</p>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-6xl font-bold text-white">$1,400</span>
                <span className="text-zinc-400 mb-2">/month</span>
              </div>
              <p className="text-zinc-400 text-sm mb-6">4 hours · Billed monthly · Cancel anytime</p>
              <div className="space-y-2.5 text-left mb-8">
                {[
                  'Same-day response on critical issues',
                  'Bug fixes, features, and automation updates',
                  'Monthly 30-minute strategy call',
                  'Direct Slack or text access to your developer',
                  'Hours roll over if unused (up to 4 hours)',
                  'No contracts — month-to-month',
                ].map(f => (
                  <div key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                Get Started — Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-zinc-600 text-xs mt-4">
                First month is prorated based on your start date.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#09090B]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Common Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Do unused hours roll over?', a: 'Yes — up to 4 hours carry into the next month. They don\'t accumulate beyond that, so you won\'t bank up 40 hours and then use them all at once. The intent is steady monthly support, not a savings account.' },
                { q: 'What if I need more than 4 hours one month?', a: 'We can scope additional hours at $350/hour, or roll into a larger project engagement if the scope warrants it. We\'ll always tell you before we go over.' },
                { q: 'Do I need to have built something with AiMpact first?', a: 'No, but it helps. If you\'re coming in fresh, we\'ll spend the first call getting oriented to your stack and tools so we can hit the ground running in month one.' },
                { q: 'What does "direct access" mean?', a: 'You get a dedicated Slack channel or a phone number to text directly. No support tickets. No waiting for a response from a shared inbox.' },
                { q: 'Can I cancel anytime?', a: 'Yes. Cancel before your next billing date and you won\'t be charged again. You keep your remaining hours through the end of that month.' },
              ].map(faq => (
                <div key={faq.q} className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 hover:border-zinc-700 transition-colors">
                  <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
