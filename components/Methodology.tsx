import { Eye, Lightbulb, Map, Compass, Key, Wrench, TrendingUp } from 'lucide-react'

const phases = [
  { icon: Eye, title: 'Observe', description: 'Study how work actually moves — not how it’s documented.' },
  { icon: Lightbulb, title: 'Understand', description: 'Synthesize root causes, map decisions and information flows.' },
  { icon: Map, title: 'Map', description: 'Precise documentation of process, information, and system state today.' },
  { icon: Compass, title: 'Architect', description: 'Design how the five components should work together going forward.' },
  { icon: Key, title: 'Enable', description: 'Align stakeholders, define governance, prepare for the change.' },
  { icon: Wrench, title: 'Build', description: 'Implement only what the architecture requires — integrate, replace, or build, in that order.' },
  { icon: TrendingUp, title: 'Improve', description: 'Measure outcomes, refine continuously. A discipline, not a one-time project.' },
]

export default function Methodology() {
  return (
    <section id="methodology" className="py-28 bg-[#0D0D10]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Methodology
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            A Disciplined Sequence,
            <br />
            <span className="text-gradient">From Observation to Improvement.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            We do not begin with a solution. We begin with the organization — watching,
            listening, and mapping before a single recommendation is made.
          </p>
        </div>

        {/* Connected step-chain — desktop */}
        <div className="hidden lg:flex relative items-start justify-between">
          <div className="absolute top-6 left-[7%] right-[7%] h-px bg-indigo-500/25" />
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <div key={phase.title} className="relative flex flex-col items-center text-center w-[13%]">
                <div className="w-12 h-12 rounded-2xl bg-[#0D0D10] border-2 border-indigo-500/40 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-indigo-400/60 text-[10px] font-mono font-bold tracking-widest mb-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{phase.description}</p>
              </div>
            )
          })}
        </div>

        {/* Card grid — mobile/tablet fallback */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 lg:hidden">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <div
                key={phase.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-indigo-400/60 text-xs font-mono font-bold tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{phase.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {[
            { title: 'Sequential by Design', desc: 'Each phase builds on the last. Technology is selected in Build — after the architecture is already understood.' },
            { title: 'Preserve What Works', desc: 'We build on valuable investments instead of replacing them by default.' },
            { title: 'Scaled to the Mission', desc: 'The same seven phases apply whether the engagement is a two-week assessment or a multi-year partnership.' },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 hover:border-zinc-700 transition-colors"
            >
              <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
