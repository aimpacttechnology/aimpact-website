import { GraduationCap, BarChart3, FileCheck, Users } from 'lucide-react'

const credentials = [
  {
    icon: BarChart3,
    label: 'Allocation Analyst',
    detail: 'Southern Petroleum Laboratories, Inc. — managed financial and operational data for multiple oil and gas pipeline clients simultaneously.',
  },
  {
    icon: FileCheck,
    label: 'Federal Regulatory Reporting',
    detail: 'Filed allocation and compliance reports with MMS/BOEMRE. She knows what happens when the data in those spreadsheets is wrong.',
  },
  {
    icon: Users,
    label: 'Systems Auditing',
    detail: 'Audited allocation systems, identified discrepancies, reconciled ledgers, and resolved client account errors across multiple pipelines.',
  },
  {
    icon: GraduationCap,
    label: 'B.S. Mathematical Science',
    detail: 'University of Houston–Clear Lake. The math behind the business logic is not a black box to her.',
  },
]

export default function RescueStory() {
  return (
    <section className="py-28 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — the story */}
          <div>
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Who Reviews Your Spreadsheet
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Before We Built Software,{' '}
              <span className="text-amber-400">Jaclyn Was Inside Yours.</span>
            </h2>
            <div className="space-y-5 text-zinc-400 text-lg leading-relaxed">
              <p>
                Jaclyn McDuff spent five years as an Allocation Analyst at Southern Petroleum
                Laboratories — managing financial and operational data for multiple oil and gas
                pipeline clients at the same time. She maintained their ledgers, generated their
                financial statements, audited their allocation systems for errors, and filed
                regulatory reports with the federal government.
              </p>
              <p>
                She has seen what a broken formula does to a pipeline allocation report. She has
                reconciled ledgers where one wrong number cascaded through an entire workbook.
                She has held the spreadsheet that kept a client&apos;s operation running and understood
                exactly what would happen if it disappeared.
              </p>
              <p>
                When she reviews your spreadsheet, she is not guessing at what it means.
                She has been there.
              </p>
            </div>

            <div className="mt-8 p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5">
              <p className="text-amber-300 text-sm font-medium mb-1">What this means for you</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Your Health Check is not done by a developer trying to reverse-engineer your
                business. It is done by someone who has spent a decade working inside data systems
                like the one you built — and who understands the work those files actually represent.
              </p>
            </div>
          </div>

          {/* Right — credentials */}
          <div className="space-y-4">
            {credentials.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.label}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{c.label}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
