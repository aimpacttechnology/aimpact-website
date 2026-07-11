import { GraduationCap, Building2, Wrench, ShoppingBag, ShieldCheck } from 'lucide-react'

const track = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'The full administrative and instructional workflow a K-12 school runs on, live.',
  },
  {
    icon: Building2,
    title: 'Facilities & Small Business',
    description: 'Branded operations platforms live in facilities management, real estate, and consumer services.',
  },
  {
    icon: Wrench,
    title: 'Vocational Education',
    description: 'The platform trade schools use to run programs, cohorts, and attendance.',
  },
  {
    icon: ShoppingBag,
    title: 'Industrial Operations',
    description: 'An active inspection and reliability-services engagement.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Operations',
    description: 'SecurityOS — the same discipline, newest industry.',
  },
]

export default function TrackRecord() {
  return (
    <section className="py-24 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Track Record
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Operational Architecture
            <br />
            <span className="text-gradient">in Practice.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Same discipline, same order of operations, applied across every industry below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {track.map((t) => {
            const Icon = t.icon
            return (
              <div
                key={t.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-200 p-6"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-indigo-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{t.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{t.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
