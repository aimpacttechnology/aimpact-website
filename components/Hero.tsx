import { ArrowRight, ShieldCheck, Clock, Wrench } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const stats = [
  { icon: ShieldCheck, label: 'Observe before we build' },
  { icon: Clock, label: 'Live in 4–8 weeks' },
  { icon: Wrench, label: 'Built around your operation' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#09090B]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: 'url(/blueprint-hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/70 via-[#09090B]/85 to-[#09090B]" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Operational Architecture
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
          Designing
          <br />
          <span className="text-gradient">How Work Works.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          Every organization has people, processes, information, technology, and decisions.
          Few were intentionally designed to work together.
        </p>

        <p className="text-base text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          We study how your organization actually works before recommending any technology —
          then design the operating system that fits it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#methodology"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
          >
            Explore Our Methodology
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
