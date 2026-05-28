const examples = [
  'Generate daily field reports from a phone',
  'Turn intake forms into qualified leads automatically',
  'Create client-ready PDFs without touching a computer',
  'Track jobs, tasks, and follow-ups in one dashboard',
  'Route requests to the right person instantly',
  'Summarize operational activity for owners and managers',
  'Organize documents, procedures, and approvals',
  'Give clients or partners a secure self-service portal',
]

export default function Examples() {
  return (
    <section className="py-24 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Real Examples
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What Your Platform
            <br />
            <span className="text-gradient">Could Actually Do.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            These are the kinds of things we build — not hypothetical features, but real
            workflows that replace manual work your team is doing right now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {examples.map((example, i) => (
            <div
              key={example}
              className="rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-200 p-5"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center mb-3">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">{example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
