import { Check } from 'lucide-react'

const symptoms = [
  'You have too many spreadsheets holding critical information.',
  'Employees constantly ask where information lives.',
  'Your software doesn’t talk to each other.',
  'Reporting takes days instead of minutes.',
  'Growth has made operations harder, not easier.',
  'Good people spend more time managing the work than doing it.',
]

export default function SelfCheck() {
  return (
    <section className="py-24 bg-[#0D0D10]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Sound Familiar?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
          You May Need Operational Architecture If&hellip;
        </h2>

        <div className="text-left inline-block mb-10">
          {symptoms.map((s) => (
            <div key={s} className="flex items-start gap-3 py-2.5">
              <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base md:text-lg">{s}</span>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl text-white font-medium">
          Operational Architecture is designed to solve exactly these problems.
        </p>
      </div>
    </section>
  )
}
