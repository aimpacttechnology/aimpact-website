import { AlertTriangle } from 'lucide-react'

const pains = [
  {
    headline: 'One workbook runs your entire operation.',
    detail:
      'Pricing logic, customer data, job history, formulas, reports — all of it lives in one file that started as a simple spreadsheet years ago.',
  },
  {
    headline: 'Only one person truly understands how it works.',
    detail:
      'If that person retires, quits, or gets sick, the knowledge goes with them. No documentation. No backup person. No safety net.',
  },
  {
    headline: 'Broken formulas create silent errors.',
    detail:
      'A cell gets overwritten. A tab gets moved. A formula breaks and nobody catches it — until a report goes out wrong or money is miscalculated.',
  },
  {
    headline: 'Reports take hours of manual work every time.',
    detail:
      'Data gets copied between tabs. Numbers get formatted by hand. The same information gets entered in three different places. Every single time.',
  },
  {
    headline: 'Multiple versions get emailed around.',
    detail:
      '"Use the one I sent Tuesday." Nobody knows which version is current, who changed what, or whether the numbers match the last version sent to the client.',
  },
  {
    headline: 'Retirement or turnover could erase years of process.',
    detail:
      'An audit, a succession event, or a single crashed file could mean starting over — or paying someone a lot of money to reverse-engineer what used to work.',
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
            The Spreadsheet That Runs{' '}
            <br className="hidden md:block" />
            <span className="text-amber-400">Everything Is Also Your Biggest Risk.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            These workbooks didn&apos;t start out dangerous. They grew into it — one tab, one formula,
            one workaround at a time. Here&apos;s what we see in almost every business we work with.
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
