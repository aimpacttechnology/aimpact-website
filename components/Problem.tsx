import { AlertCircle } from 'lucide-react'

const pains = [
  'Reports are built manually — every single time.',
  'Leads and follow-ups fall through the cracks.',
  'Jobs are tracked in too many places at once.',
  'Your team repeats the same admin tasks every week.',
  'You cannot see what is happening without asking five different people.',
]

export default function Problem() {
  return (
    <section className="py-24 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Sound Familiar?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Your Business Is Growing.
              <br />
              <span className="text-gradient">Your Systems Are Not.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Most small businesses run on a mix of spreadsheets, disconnected apps, manual
              follow-ups, and processes that live only in people&apos;s heads. It works — until it
              doesn&apos;t.
            </p>
          </div>

          <div className="space-y-3">
            {pains.map((pain) => (
              <div
                key={pain}
                className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4"
              >
                <AlertCircle className="w-4 h-4 text-rose-500/70 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-sm leading-relaxed">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
