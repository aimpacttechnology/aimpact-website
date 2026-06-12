import { ArrowRight, ShieldCheck, Clock, ClipboardList, TrendingUp, Wrench } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'
const ASSESSMENT_URL = 'https://aimpactos.vercel.app/assessment'

const stats = [
  { icon: ShieldCheck, label: 'Ongoing platform partnership' },
  { icon: Clock, label: 'Live in 4–8 weeks' },
  { icon: Wrench, label: 'Built for your workflows' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#09090B]">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Custom Operational Platforms
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
          Custom Operational Platforms
          <br />
          <span className="text-gradient">for Small Businesses.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          We design and build centralized business systems that reduce manual work, connect your
          workflows, and help your team scale without adding more administrative overhead.
        </p>

        <p className="text-base text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          From reporting and scheduling to CRM workflows and field operations — we turn scattered
          processes into one connected platform built around how your business actually runs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
          >
            See What We Can Build
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-medium">Free tools:</p>
          <a
            href="/factfinder"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 hover:border-indigo-500/50 text-zinc-400 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
          >
            <ClipboardList className="w-3.5 h-3.5" />
            Operations FactFinder
          </a>
          <a
            href={ASSESSMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 hover:border-indigo-500/50 text-zinc-400 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Business Exit Assessment
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-zinc-400">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
