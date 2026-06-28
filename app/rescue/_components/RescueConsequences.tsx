const scenarios = [
  {
    trigger: 'Two weeks notice.',
    story:
      'Your most important employee announces she is leaving. She built the spreadsheet five years ago. She is the only one who knows why certain formulas are structured the way they are. You have two weeks to learn a decade of institutional knowledge.',
  },
  {
    trigger: 'The audit letter arrives.',
    story:
      'A client or regulator requests records going back three years. You find four versions of the file saved on different computers, all with different numbers. You do not know which one is correct.',
  },
  {
    trigger: 'The file will not open.',
    story:
      'Monday morning. The spreadsheet is corrupted. Your backup is from eight months ago. Everything that happened in between — gone. Your business stops until someone figures out what to do next.',
  },
  {
    trigger: 'The formula was wrong for six months.',
    story:
      'Someone changed a cell. The formula broke. No one caught it. The wrong numbers went out in invoices, reports, or regulatory filings. By the time you find it, the damage is already done.',
  },
  {
    trigger: 'You decide to sell.',
    story:
      'A buyer\'s due diligence team asks how your operation works. You show them the spreadsheet. They ask for documentation. There is none. They ask who else can run it. Nobody. The deal gets complicated.',
  },
]

export default function RescueConsequences() {
  return (
    <section className="py-28 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            What This Looks Like When It Goes Wrong
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]">
            These Are Not Hypotheticals.{' '}
            <span className="text-amber-400">These Are Phone Calls We Get.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The businesses that call us are usually not in crisis yet. But one of these
            events is already visible on the horizon. Most of them had months to prevent it.
          </p>
        </div>

        <div className="space-y-4">
          {scenarios.map((s, i) => (
            <div
              key={s.trigger}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7 flex gap-6 hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                <span className="text-red-400 text-xs font-bold">{i + 1}</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg mb-2">{s.trigger}</p>
                <p className="text-zinc-400 text-base leading-relaxed">{s.story}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-7 text-center">
          <p className="text-amber-300 text-lg font-semibold mb-2">
            None of these require a disaster to prevent.
          </p>
          <p className="text-zinc-400 text-base leading-relaxed max-w-2xl mx-auto">
            A Spreadsheet Health Check takes days, not months. It tells you exactly what you
            have, what is fragile, and what it would take to protect it — before any of the
            above becomes your Monday morning.
          </p>
        </div>
      </div>
    </section>
  )
}
