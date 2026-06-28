const industries = [
  { name: 'Oil & Gas / Pipeline Operators', note: 'Allocation, production, and regulatory tracking' },
  { name: 'Land & Lease Management', note: 'Landmen running deal workflows through Excel' },
  { name: 'Industrial Service Companies', note: 'Job costing, field data, and reporting' },
  { name: 'Contractors & Subcontractors', note: 'Bids, schedules, change orders, and billing' },
  { name: 'Equipment Rental Operations', note: 'Inventory, rental agreements, and maintenance' },
  { name: 'Small Government Offices', note: 'Budgets, compliance records, and reporting' },
  { name: 'Trade Schools & Vocational Programs', note: 'Enrollment, credentials, and student tracking' },
  { name: 'Family-Owned Businesses', note: 'Any operation built on institutional knowledge' },
]

export default function RescueIndustries() {
  return (
    <section className="py-28 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            If Your Industry Runs on{' '}
            <span className="text-amber-400">Excel, We Know Your Risk.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            These are not hypothetical use cases. These are the businesses that call us —
            usually right after the spreadsheet breaks, the person who built it announces
            retirement, or an audit request shows up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-xl border border-zinc-800 bg-zinc-900/20 px-5 py-4 hover:border-zinc-700 transition-all duration-200"
            >
              <p className="text-white font-semibold text-sm mb-1">{industry.name}</p>
              <p className="text-zinc-500 text-xs leading-relaxed">{industry.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 text-center">
          <p className="text-zinc-400 text-sm">
            Don&apos;t see your industry?{' '}
            <a href="#contact" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
              Describe your situation
            </a>{' '}
            — if your business runs on a spreadsheet, we can help.
          </p>
        </div>
      </div>
    </section>
  )
}
