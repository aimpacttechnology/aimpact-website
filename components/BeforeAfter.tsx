import { FileSpreadsheet, MessageSquare, Mail, StickyNote, Boxes, CheckCircle2 } from 'lucide-react'

const nodeIcons = [FileSpreadsheet, MessageSquare, Mail, StickyNote, Boxes]
const jitter = [
  { y: '-6px', rotate: '-9deg' },
  { y: '10px', rotate: '7deg' },
  { y: '-2px', rotate: '4deg' },
  { y: '14px', rotate: '-6deg' },
  { y: '-10px', rotate: '10deg' },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Difference
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            From Operational Drag
            <br />
            <span className="text-gradient">to Operational Control.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Fragmented — scattered, disconnected nodes */}
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 flex flex-col">
            <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-10 text-center">
              Fragmented Operations
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-1 mb-8">
              {nodeIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-xl bg-zinc-900 border border-rose-500/25 flex items-center justify-center flex-shrink-0"
                  style={{ transform: `translateY(${jitter[i].y}) rotate(${jitter[i].rotate})` }}
                >
                  <Icon className="w-4.5 h-4.5 text-rose-400/70" />
                </div>
              ))}
            </div>
            <p className="text-zinc-500 text-xs text-center leading-relaxed">
              Disconnected tools. No shared picture. Someone reassembles context from scratch every time.
            </p>
          </div>

          {/* Designed — connected into one flow */}
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 flex flex-col">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-10 text-center">
              Designed Operational Architecture
            </p>
            <div className="relative flex items-center justify-center gap-3 sm:gap-4 flex-1 mb-8">
              <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-px bg-indigo-500/30" />
              {nodeIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="relative w-11 h-11 rounded-xl bg-zinc-900 border border-indigo-500/40 flex items-center justify-center flex-shrink-0"
                >
                  <Icon className="w-4.5 h-4.5 text-indigo-400" />
                </div>
              ))}
              <div className="relative w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-600/30">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-zinc-400 text-xs text-center leading-relaxed">
              The same tools, connected into one operational picture — designed on purpose, not assembled by accident.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
