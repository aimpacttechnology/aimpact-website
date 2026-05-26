import { ArrowRight, ClipboardList, TrendingUp, Users } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'
const ASSESSMENT_URL = 'https://aimpactos.vercel.app/assessment'
const PARTNER_URL = 'https://aimpactos.vercel.app/affiliate/onboarding'

export default function CTA() {
  return (
    <div>
      {/* Free Tools Section */}
      <section className="py-28 bg-[#09090B] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/8 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Free Diagnostic Tools
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Start With the Right
              <br />
              <span className="text-gradient">Question for Your Business.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Two tools, two different starting points. Pick the one that matches where you are right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FactFinder */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mb-5">
                <ClipboardList className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">For Growing Businesses</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Operations FactFinder</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                43 questions that map every corner of how your business operates — systems, pain points,
                time wasters, goals, and urgency. You get a personalized AI-generated automation roadmap
                showing exactly where to invest and in what order.
              </p>
              <div className="space-y-2 mb-6">
                {['43 questions · ~15 minutes', 'Personalized automation roadmap', 'Specific tool recommendations & ROI estimates', 'We follow up within 1 business day'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="/factfinder"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                Take the FactFinder
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Exit Assessment */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">For Exit-Minded Owners</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Exit Assessment</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                20 questions across 6 categories that measure how sellable your business is today.
                You get a personal Exit Readiness Score (0–100), a dollar estimate of your value gap,
                and three specific recommendations for maximizing your exit price.
              </p>
              <div className="space-y-2 mb-6">
                {['20 questions · ~10 minutes', 'Exit Readiness Score (0–100)', 'Dollar value gap estimate', 'Specific gap-closing recommendations'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={ASSESSMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                Take the Exit Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <p className="text-center text-zinc-600 text-sm mt-8">
            Not sure which one?{' '}
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">
              Book a free 30-minute call
            </a>{' '}
            and we&apos;ll point you in the right direction.
          </p>
        </div>
      </section>

      {/* Partner Program Banner */}
      <section className="py-16 bg-[#0D0D10] border-y border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Become an AiMpact Partner</h3>
                <p className="text-zinc-400 text-sm max-w-xl">
                  Earn 12–18% commission selling custom PAAS builds to small businesses you know.
                  No tech background required — we close the deal. You bring the relationship.
                </p>
              </div>
            </div>
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/40 hover:border-indigo-500 text-indigo-400 hover:text-indigo-300 font-semibold text-sm rounded-xl transition-all duration-200"
            >
              Apply to Partner Program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
