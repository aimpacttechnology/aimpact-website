const steps = [
  {
    number: '01',
    title: 'Send Us Your Spreadsheet',
    description:
      'Share your workbook — or describe what it does. Everything stays confidential. We sign an NDA on request. No judgment on how it was built; these files do what they need to do.',
  },
  {
    number: '02',
    title: 'Jaclyn Maps the Logic',
    description:
      'She reviews your formulas, tabs, data flows, and business rules. She documents what the spreadsheet actually does — not just what it looks like it does. Hidden dependencies, broken links, risky formulas — all of it.',
  },
  {
    number: '03',
    title: 'You Receive Your Health Check Report',
    description:
      'A clear PDF assessment: what is working, what is at risk, what would happen if this file disappeared tomorrow, and a roadmap for what a safer system would look like. Optional video walkthrough included.',
  },
  {
    number: '04',
    title: 'We Build the Safer System (If You Want)',
    description:
      'If the report shows your operation needs more than a patch, we scope and build the replacement — a secure web application that preserves your process and removes the single point of failure.',
  },
]

export default function RescueHowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Simple Process. Clear Deliverables.{' '}
            <span className="text-amber-400">No Surprises.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Most of our clients start with a Health Check. It is the fastest way to understand
            exactly what you have — and what it would take to protect it.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col md:flex-row gap-6 hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <span className="text-5xl font-bold text-amber-500/20 leading-none select-none">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center flex-shrink-0 ml-auto">
                  <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
