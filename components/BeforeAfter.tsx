import { X, Check } from 'lucide-react'

const before = [
  'Spreadsheets everywhere',
  'Reports built manually every time',
  'Missed follow-ups and lost leads',
  'Repeated data entry across tools',
  'Disconnected apps that don\'t talk',
  'No clear operational visibility',
  'One-off software nobody maintains',
]

const after = [
  'Centralized workflows in one platform',
  'Automated reports generated on schedule',
  'Clear dashboards and follow-up queues',
  'Faster decisions with real-time data',
  'Fewer admin bottlenecks slowing the team',
  'A custom platform your team can actually use',
  'Ongoing systems support as your business grows',
]

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
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
          {/* Before */}
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8">
            <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-6">
              Before AiMpact
            </p>
            <div className="space-y-3">
              {before.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-500/70 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-6">
              After AiMpact
            </p>
            <div className="space-y-3">
              {after.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
