const EXAMPLE_SCORE = 71
const EXAMPLE_LABEL = 'Moderate Risk'

const categories = [
  { name: 'Formula Integrity',      score: 15, max: 20, note: 'Two broken references found. Core logic is sound.' },
  { name: 'Knowledge Transfer',     score: 14, max: 20, note: 'One person fully understands the system.' },
  { name: 'Succession Readiness',   score: 11, max: 15, note: 'No written handoff plan for key formulas.' },
  { name: 'Process Documentation',  score: 10, max: 15, note: 'Partial — monthly steps undocumented.' },
  { name: 'Data Backup',            score: 10, max: 15, note: 'Manual saves only, no automated backup.' },
  { name: 'Reporting',              score:  7, max: 10, note: 'Reports require 3 manual steps to run.' },
  { name: 'Security',               score:  4, max:  5, note: 'Shared folder access, no version control.' },
]

function categoryColor(score: number, max: number) {
  const pct = score / max
  if (pct >= 0.8) return { bar: 'bg-teal-500', text: 'text-teal-400', dot: 'bg-teal-500' }
  if (pct >= 0.55) return { bar: 'bg-amber-500', text: 'text-amber-400', dot: 'bg-amber-500' }
  return { bar: 'bg-red-500', text: 'text-red-400', dot: 'bg-red-500' }
}

function overallColor(score: number) {
  if (score >= 80) return { ring: 'border-teal-500', glow: 'shadow-teal-600/30', label: 'text-teal-400', emoji: '🟢' }
  if (score >= 55) return { ring: 'border-amber-500', glow: 'shadow-amber-600/20', label: 'text-amber-400', emoji: '🟡' }
  return { ring: 'border-red-500', glow: 'shadow-red-600/20', label: 'text-red-400', emoji: '🔴' }
}

const tiers = [
  { emoji: '🟢', range: '80 – 100', label: 'Excellent',      desc: 'Well-maintained. Low risk. Minor improvements may be recommended.' },
  { emoji: '🟡', range: '55 – 79',  label: 'Moderate Risk',  desc: 'Notable vulnerabilities. A clear remediation path is included.' },
  { emoji: '🔴', range: '0 – 54',   label: 'High Risk',      desc: 'Significant exposure. Prompt action strongly recommended.' },
]

const colors = overallColor(EXAMPLE_SCORE)

export default function RescueHealthScore() {
  return (
    <section className="py-28 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3">
            What You Walk Away With
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]">
            Every Health Check Ends With{' '}
            <span className="text-teal-400">a Score.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The{' '}
            <span className="text-white font-semibold">Spreadsheet Health Score™</span>
            {' '}turns a complex audit into a single number across seven categories.
            It makes an invisible problem tangible — and gives you something concrete
            to act on.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Example score card */}
          <div className="lg:col-span-3">
            <div className={`rounded-2xl border-2 ${colors.ring} bg-zinc-900/40 shadow-xl ${colors.glow} overflow-hidden`}>

              {/* Card header */}
              <div className="px-7 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-1">
                    Spreadsheet Health Score™
                  </p>
                  <p className="text-zinc-400 text-sm">Example Client · June 2026</p>
                </div>
                <div className="text-right">
                  <p className={`text-5xl font-bold ${colors.label} leading-none`}>
                    {EXAMPLE_SCORE}
                    <span className="text-2xl text-zinc-600">/100</span>
                  </p>
                  <p className={`text-sm font-semibold mt-1 ${colors.label}`}>
                    {colors.emoji} {EXAMPLE_LABEL}
                  </p>
                </div>
              </div>

              {/* Category breakdown */}
              <div className="px-7 py-6 space-y-4">
                {categories.map((cat) => {
                  const c = categoryColor(cat.score, cat.max)
                  const pct = Math.round((cat.score / cat.max) * 100)
                  return (
                    <div key={cat.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                          <span className="text-white text-sm font-medium">{cat.name}</span>
                        </div>
                        <span className={`text-sm font-bold ${c.text}`}>
                          {cat.score}/{cat.max}
                        </span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${c.bar} transition-all duration-500`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <p className="text-zinc-600 text-xs mt-1 leading-snug">{cat.note}</p>
                    </div>
                  )
                })}
              </div>

              <div className="px-7 py-4 bg-zinc-900/60 border-t border-zinc-800">
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Full findings, risk narrative, and remediation options included in the PDF report.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: tiers + explanation */}
          <div className="lg:col-span-2 space-y-5">

            <div className="space-y-3">
              {tiers.map((tier) => (
                <div
                  key={tier.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-4"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-base leading-none">{tier.emoji}</span>
                    <span className="text-white font-semibold text-sm">{tier.label}</span>
                    <span className="ml-auto text-zinc-600 text-xs">{tier.range}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{tier.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-5">
              <p className="text-teal-300 text-sm font-semibold mb-2">
                Why a score?
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Most audit reports get filed and forgotten. A number stays with you.
                Clients remember their score — and so do the people they tell about it.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5">
              <p className="text-zinc-400 text-sm leading-relaxed">
                <span className="text-white font-semibold">Seven categories.</span>
                {' '}Each scored independently. The total score and per-category
                breakdown are included in your PDF report, along with specific
                findings and recommended next steps for anything below 80%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
