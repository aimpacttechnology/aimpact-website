import { ArrowRight, ClipboardList, Users } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'
const ASSESSMENT_URL = 'https://aimpactos.vercel.app/assessment'
const PARTNER_URL = 'https://aimpactos.vercel.app/affiliate/onboarding'

export default function CTA() {
  return (
    <div>
      {/* Exit Assessment CTA */}
      <section className="py-28 bg-[#09090B] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="w-14 h-14 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ClipboardList className="w-7 h-7 text-indigo-400" />
          </div>
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Free tool for business owners
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Find Out What Your Business
            <br />
            <span className="text-gradient">Is Actually Worth at Exit.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            The Business Exit Readiness Assessment shows you exactly where your business has
            operational gaps — and what closing them could add to your sale price. Free. Takes
            10 minutes. Results are instant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
            >
              Take the Free Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
            >
              Book a Discovery Call
            </a>
          </div>
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
                  Join the partner network with a free application.
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
