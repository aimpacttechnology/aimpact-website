import { Users, Cog, BarChart3, Brain, Laptop } from 'lucide-react'

const components5 = [
  { icon: Users, title: 'People', desc: 'Roles, responsibilities, skills, and accountability.' },
  { icon: Cog, title: 'Processes', desc: 'Repeatable workflows that produce outcomes.' },
  { icon: BarChart3, title: 'Information', desc: 'The data required to make good decisions.' },
  { icon: Brain, title: 'Decisions', desc: 'The policies, authority, and logic driving actions.' },
  { icon: Laptop, title: 'Technology', desc: 'Systems that enable and support the architecture.' },
]

const indigo = '#818CF8'

export default function Discipline() {
  return (
    <section className="relative py-24 bg-[#09090B] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-right opacity-20"
        style={{ backgroundImage: 'url(/blueprint-texture.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/80 to-[#09090B]/40" />
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-6">
            The Discipline
          </p>

          <div className="space-y-2 mb-8">
            <p className="text-xl md:text-2xl text-zinc-300 font-medium">Does work stop when one person is out?</p>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium">Are people entering the same information twice?</p>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium">Can leadership see the operation in real time?</p>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium">Do your systems talk to each other?</p>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium">Have spreadsheets become critical infrastructure?</p>
          </div>

          <p className="text-zinc-500 mb-10">
            If any of that sounds familiar, there&apos;s a name for the discipline that fixes it.
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
            What Is
            <br />
            <span className="text-gradient">Operational Architecture?</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            It defines how people, processes, information, decisions, and technology work
            together as a unified system. Most organizations purchase software first and attempt
            to build operations around it.{' '}
            <strong className="text-white font-semibold">Operational Architecture reverses that approach.</strong>
          </p>
        </div>

        {/* Five Components — icon cards */}
        <div className="mb-14">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-5">
            The Five Components of Operational Architecture
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {components5.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 hover:border-zinc-700 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{c.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* How the components work together — flow diagram */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 md:p-8">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-6">
            How the Components Work Together
          </p>

          <div className="overflow-x-auto">
            <div className="relative mx-auto" style={{ width: 960, height: 330 }}>
              <svg
                className="absolute inset-0 pointer-events-none"
                width={960}
                height={330}
                viewBox="0 0 960 330"
                fill="none"
              >
                <defs>
                  <marker id="arrow-solid" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill={indigo} />
                  </marker>
                  <marker id="arrow-dashed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#52525b" />
                  </marker>
                </defs>
                {/* governance (dashed) */}
                <line x1="480" y1="60" x2="160" y2="140" stroke="#52525b" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arrow-dashed)" />
                <line x1="480" y1="60" x2="800" y2="140" stroke="#52525b" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arrow-dashed)" />
                {/* data flow (solid) */}
                <line x1="300" y1="185" x2="336" y2="185" stroke={indigo} strokeWidth="2" markerEnd="url(#arrow-solid)" />
                <line x1="620" y1="185" x2="656" y2="185" stroke={indigo} strokeWidth="2" markerEnd="url(#arrow-solid)" />
                {/* supported by technology (solid, up) */}
                <line x1="160" y1="270" x2="160" y2="234" stroke={indigo} strokeWidth="2" markerEnd="url(#arrow-solid)" />
                <line x1="480" y1="270" x2="480" y2="234" stroke={indigo} strokeWidth="2" markerEnd="url(#arrow-solid)" />
                <line x1="800" y1="270" x2="800" y2="234" stroke={indigo} strokeWidth="2" markerEnd="url(#arrow-solid)" />
              </svg>

              {/* Decisions */}
              <div className="absolute flex items-center gap-3 rounded-xl border border-zinc-700 bg-[#0D0D10] px-4" style={{ left: 380, top: 0, width: 200, height: 60 }}>
                <Brain className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">Decisions</p>
                  <p className="text-[10px] text-zinc-500 leading-tight">Policies, authority, logic</p>
                </div>
              </div>

              {/* People */}
              <div className="absolute flex items-center gap-3 rounded-xl border border-zinc-700 bg-[#0D0D10] px-4" style={{ left: 20, top: 140, width: 280, height: 90 }}>
                <Users className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white leading-tight mb-1">People</p>
                  <p className="text-[10px] text-zinc-500 leading-tight">Roles, responsibilities, skills, accountability</p>
                </div>
              </div>

              {/* Information */}
              <div className="absolute flex items-center gap-3 rounded-xl border border-zinc-700 bg-[#0D0D10] px-4" style={{ left: 340, top: 140, width: 280, height: 90 }}>
                <BarChart3 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white leading-tight mb-1">Information</p>
                  <p className="text-[10px] text-zinc-500 leading-tight">Data required to make good decisions</p>
                </div>
              </div>

              {/* Processes */}
              <div className="absolute flex items-center gap-3 rounded-xl border border-zinc-700 bg-[#0D0D10] px-4" style={{ left: 660, top: 140, width: 280, height: 90 }}>
                <Cog className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white leading-tight mb-1">Processes</p>
                  <p className="text-[10px] text-zinc-500 leading-tight">Repeatable workflows that produce outcomes</p>
                </div>
              </div>

              {/* Technology bar */}
              <div className="absolute flex items-center justify-center gap-3 rounded-xl border border-indigo-500/30 bg-indigo-500/5 px-4" style={{ left: 20, top: 270, width: 920, height: 55 }}>
                <Laptop className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <p className="text-xs font-semibold text-white">Technology — systems that enable and support the architecture</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-6 pt-6 border-t border-zinc-800">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="w-6 h-px bg-indigo-400" />
              Data Flow
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="w-6 h-px border-t border-dashed border-zinc-500" />
              Guidance / Governance
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="text-indigo-400">↑</span>
              Supported by Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
