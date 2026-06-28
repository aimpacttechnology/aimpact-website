import Image from 'next/image'
import { GraduationCap, BarChart3, FileCheck, Users } from 'lucide-react'

const credentials = [
  {
    icon: BarChart3,
    label: 'Allocation Analyst — Southern Petroleum Laboratories',
    detail:
      'Managed financial and operational data for multiple oil and gas pipeline clients simultaneously. Maintained ledgers, generated financial statements, and distributed allocation reports.',
  },
  {
    icon: FileCheck,
    label: 'Regulatory Filing — MMS / BOEMRE',
    detail:
      'Filed allocation and compliance reports with federal regulators. She has worked with the data these filings depend on and understands what happens when the numbers are wrong.',
  },
  {
    icon: Users,
    label: 'Systems Auditing & Discrepancy Resolution',
    detail:
      'Audited allocation systems to identify errors, reconciled ledgers across multiple pipeline accounts, and resolved discrepancies for clients — one formula at a time.',
  },
  {
    icon: GraduationCap,
    label: 'B.S. Mathematical Science — UH–Clear Lake',
    detail:
      'The business logic buried in your spreadsheet is not a black box to her. She can read it, verify it, and explain it in plain language.',
  },
]

export default function RescueStory() {
  return (
    <section className="py-28 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Who Reviews Your Spreadsheet
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]">
            Before We Built Anything,{' '}
            <span className="text-amber-400">Jaclyn Was Inside Yours.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Photo + quote */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/40 flex-shrink-0">
              <Image
                src="/jaclyn-headshot.png"
                alt="Jaclyn McDuff — Lead Analyst, AiMpact Technology"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 256px, 320px"
                priority
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-white font-bold text-xl">Jaclyn McDuff</p>
              <p className="text-amber-400 text-sm font-medium">Lead Analyst, AiMpact Technology</p>
              <p className="text-zinc-500 text-sm mt-1">Houston, TX</p>
            </div>

            <blockquote className="border-l-2 border-amber-500 pl-5 max-w-sm">
              <p className="text-zinc-300 text-base leading-relaxed italic">
                &ldquo;I have seen what happens when the person who built the spreadsheet
                leaves and nobody else understands it. That is exactly the kind of problem
                I know how to solve.&rdquo;
              </p>
              <footer className="mt-3 text-zinc-600 text-sm">— Jaclyn McDuff</footer>
            </blockquote>
          </div>

          {/* Story + credentials */}
          <div>
            <div className="space-y-5 text-zinc-400 text-lg leading-relaxed mb-10">
              <p>
                Jaclyn spent five years as an Allocation Analyst at Southern Petroleum
                Laboratories — managing financial and operational data for multiple oil
                and gas pipeline clients at the same time. She maintained their ledgers,
                generated their financial statements, audited allocation systems for
                errors, and filed regulatory reports with federal agencies.
              </p>
              <p>
                She has held the spreadsheet that kept a pipeline operation running.
                She has traced the formula that was producing the wrong number for six
                months. She has sat across from the person who built the system and learned
                — in real time — what would happen if that person was no longer there.
              </p>
              <p>
                When Jaclyn reviews your spreadsheet, she is not guessing at what it
                means. She has been there.
              </p>
            </div>

            <div className="space-y-3">
              {credentials.map((c) => {
                const Icon = c.icon
                return (
                  <div
                    key={c.label}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 flex gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
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
      </div>
    </section>
  )
}
