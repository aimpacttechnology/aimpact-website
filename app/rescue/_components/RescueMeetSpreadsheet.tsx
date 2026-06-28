const annotations = [
  {
    color: 'red',
    label: 'Broken reference',
    detail: 'This formula points to a tab that was renamed two years ago. It has been returning the wrong value ever since.',
  },
  {
    color: 'amber',
    label: 'Hidden dependency',
    detail: 'This cell pulls from a lookup table on Sheet 4 that nobody knows exists. If Sheet 4 is deleted, half the report breaks.',
  },
  {
    color: 'amber',
    label: 'Manual entry every week',
    detail: 'This number is copied by hand from an email every Monday morning. One wrong paste and the whole month\'s data is off.',
  },
  {
    color: 'red',
    label: 'Version drift',
    detail: 'Three people have a copy of this file. None of them are the same. Nobody knows which one is current.',
  },
  {
    color: 'zinc',
    label: 'Tribal knowledge',
    detail: '"Don\'t touch column G." Nobody remembers why. The person who added that note retired in 2019.',
  },
]

const rows = [
  ['Client', 'Pipeline', 'Volume (Mcf)', 'Allocation %', 'Invoice Amt', 'Status', 'Notes'],
  ['Permian Basin LLC', 'Line 7', '48,200', '=B2/SUM($B$2:$B$8)', '$12,450', 'SENT', 'see Sheet4'],
  ['Gulf Coast Op.', 'Line 7', '31,800', '=B3/SUM($B$2:$B$8)', '#REF!', 'PENDING', '—'],
  ['West TX Energy', 'Line 12', '72,100', '=B4/SUM($B$2:$B$8)', '$18,920', 'SENT', 'DON\'T TOUCH COL G'],
  ['Midland Service', 'Line 12', '19,400', 'copy from email', '$5,210', 'DRAFT', 'Monday AM'],
  ['Lone Star Pipe', 'Line 7', '55,600', '=B6/SUM($B$2:$B$8)', '$14,780', 'SENT', '—'],
]

const colorMap: Record<string, string> = {
  red: 'border-red-500/50 bg-red-500/8',
  amber: 'border-amber-500/50 bg-amber-500/8',
  zinc: 'border-zinc-500/40 bg-zinc-800/40',
}

const dotMap: Record<string, string> = {
  red: 'bg-red-500',
  amber: 'bg-amber-500',
  zinc: 'bg-zinc-500',
}

const textMap: Record<string, string> = {
  red: 'text-red-400',
  amber: 'text-amber-400',
  zinc: 'text-zinc-400',
}

export default function RescueMeetSpreadsheet() {
  return (
    <section className="py-28 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Meet the Spreadsheet
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Yours Probably Looks{' '}
            <span className="text-amber-400">Something Like This.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            These are the things Jaclyn looks for. Most owners have no idea they are there
            until someone who knows what to look for actually looks.
          </p>
        </div>

        {/* Fake spreadsheet */}
        <div className="rounded-2xl border border-zinc-700 overflow-hidden mb-10 shadow-2xl shadow-black/40">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 border-b border-zinc-700">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-amber-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-zinc-500 text-xs font-mono">Allocation_FINAL_v3_USE THIS ONE_2023_REVISED.xlsx</span>
          </div>

          {/* Sheet tabs */}
          <div className="flex items-end gap-0 bg-zinc-900 border-b border-zinc-700 px-4 pt-2">
            {['Summary', 'Line 7', 'Line 12', 'Sheet4', 'OLD-2021', 'Archive'].map((tab, i) => (
              <div
                key={tab}
                className={`px-4 py-1.5 text-xs font-mono rounded-t border-x border-t cursor-default ${
                  i === 0
                    ? 'bg-zinc-800 border-zinc-600 text-zinc-300'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-600 hover:text-zinc-400'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="overflow-x-auto bg-zinc-900">
            <table className="w-full text-xs font-mono border-collapse min-w-[700px]">
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className={ri === 0 ? 'bg-zinc-800' : 'hover:bg-zinc-800/30'}>
                    <td className="px-3 py-2 text-zinc-600 border-r border-b border-zinc-800 w-8 text-center select-none">
                      {ri === 0 ? '' : ri}
                    </td>
                    {row.map((cell, ci) => {
                      const isError = cell === '#REF!'
                      const isFormula = cell.startsWith('=')
                      const isDontTouch = cell.includes("DON'T TOUCH")
                      const isManual = cell === 'copy from email'
                      return (
                        <td
                          key={ci}
                          className={`px-3 py-2 border-r border-b border-zinc-800 whitespace-nowrap ${
                            ri === 0
                              ? 'text-zinc-400 font-semibold'
                              : isError
                              ? 'text-red-400 font-semibold'
                              : isFormula
                              ? 'text-blue-400/70'
                              : isDontTouch
                              ? 'text-zinc-600 italic'
                              : isManual
                              ? 'text-amber-400/80'
                              : 'text-zinc-400'
                          }`}
                        >
                          {cell}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Annotation callouts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {annotations.map((a) => (
            <div
              key={a.label}
              className={`rounded-xl border p-4 ${colorMap[a.color]}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotMap[a.color]}`} />
                <span className={`font-semibold text-sm ${textMap[a.color]}`}>{a.label}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-zinc-600 text-sm">
          Spreadsheet shown is illustrative. Confidential data from real engagements is never displayed.
        </p>
      </div>
    </section>
  )
}
