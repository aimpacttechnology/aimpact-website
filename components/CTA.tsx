import { ArrowRight } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

export default function CTA() {
  return (
    <section className="py-28 bg-[#09090B] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Stop wasting time on manual work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Automate Workflows.
          <br />
          <span className="text-gradient">Reclaim Your Time.</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
          Get a detailed AI Opportunity Assessment. We analyze your workflows, identify automation
          opportunities, and deliver a clear roadmap with ROI projections. Start with clarity,
          implement with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
          >
            Send Us a Message
          </a>
        </div>
      </div>
    </section>
  )
}
