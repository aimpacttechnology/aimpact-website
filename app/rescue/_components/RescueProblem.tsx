import { AlertTriangle } from 'lucide-react'

const pains = [
  {
    headline: 'One workbook runs your entire operation.',
    detail:
      'Pricing logic, customer records, job history, compliance data, reporting — all of it lives in a file that started as a simple spreadsheet years ago.',
  },
  {
    headline: 'Only one person truly knows how it works.',
    detail:
      'There is no documentation. No backup person who understands the formulas. The knowledge exists in one employee\'s head, and only there.',
  },
  {
    headline: 'Broken formulas create silent errors.',
    detail:
      'A cell gets overwritten. A tab gets moved. A formula breaks and no one catches it — until a report goes out wrong or a client calls with a discrepancy.',
  },
  {
    headline: 'Reports take hours of manual work every time.',
    detail:
      'Data gets copied between tabs. Numbers are reformatted by hand. The same information gets entered in three different places. Every single week.',
  },
  {
    headline: 'Multiple versions get emailed around.',
    detail:
      '"Use the one I sent on Tuesday." Nobody knows which file is current, who changed what, or whether the numbers match what was sent to the client.',
  },
  {
    headline: 'Retirement or turnover could erase years of process.',
    detail:
      'An audit, a succession event, or a single hard drive failure could mean starting from scratch — or paying someone a lot of money to reverse-engineer what used to work.',
  },
]

export default function RescueProblem() {
  return (
    <section className="py-28 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Sound Familiar?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]">
            The Spreadsheet That Runs Everything{' '}
            <br className="hidden md:block" />
            <span className="text-amber-400">Is Also Your Biggest Risk.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            These files did not start out dangerous. They grew into it — one tab, one formula,
            one workaround at a time. Here is what we see in almost every business we work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {pains.map((pain) => (
            <div
              key={pain.headline}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-white font-semibold text-base leading-snug">{pain.headline}</h3>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed pl-11">{pain.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
