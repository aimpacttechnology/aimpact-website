import { Users, Cog, BarChart3, Brain, Laptop } from 'lucide-react'

const components5 = [
  { icon: Users, label: 'People' },
  { icon: Cog, label: 'Processes' },
  { icon: BarChart3, label: 'Information' },
  { icon: Laptop, label: 'Technology' },
  { icon: Brain, label: 'Decisions' },
]

export default function Problem() {
  return (
    <section className="py-24 bg-[#09090B]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
          The Problem
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14 tracking-tight leading-[1.15]">
          Organizations Don&apos;t Slow Down Overnight.
          <br />
          <span className="text-gradient">They Become Fragmented Over Time.</span>
        </h2>

        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          {components5.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
                <Icon className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-sm font-medium text-zinc-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
