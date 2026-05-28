import { ArrowRight, FileText, Users, LayoutDashboard, Calendar, FolderCheck, Globe } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const platforms = [
  {
    icon: FileText,
    title: 'Field Reporting Platforms',
    problem: 'Reports, photos, and job notes are scattered across texts, emails, and clipboards.',
    outcome: 'Mobile-friendly reports, photo uploads, supervisor review, and client-ready PDF generation.',
    result: 'Faster reporting and fewer end-of-day admin headaches.',
  },
  {
    icon: Users,
    title: 'Lead & CRM Workflows',
    problem: 'Leads come in from everywhere and follow-up is inconsistent.',
    outcome: 'Intake forms, qualification steps, reminders, customer records, and follow-up workflows.',
    result: 'Fewer missed opportunities and better customer response time.',
  },
  {
    icon: LayoutDashboard,
    title: 'Operations Dashboards',
    problem: 'Owners cannot see what is happening across jobs, tasks, clients, and reports.',
    outcome: 'Central dashboards for jobs, tasks, bottlenecks, performance, and open items.',
    result: 'Better visibility and faster decisions — without asking five people.',
  },
  {
    icon: Calendar,
    title: 'Scheduling & Admin Automation',
    problem: 'Too much time is lost coordinating, reminding, updating, and chasing information.',
    outcome: 'Scheduling workflows, automated reminders, status updates, and admin automations.',
    result: 'Less coordination drag and more time for real work.',
  },
  {
    icon: FolderCheck,
    title: 'Document & Compliance Systems',
    problem: 'Procedures, forms, approvals, and records are hard to find and harder to manage.',
    outcome: 'Organized document workflows, approval steps, searchable records, and reporting support.',
    result: 'Cleaner documentation and less compliance chaos.',
  },
  {
    icon: Globe,
    title: 'Custom Business Portals',
    problem: 'Employees, clients, vendors, or partners have no single place to interact with your business.',
    outcome: 'Secure portals tailored to your exact workflow and user types.',
    result: 'A smoother experience for everyone involved.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Platforms Built Around
            <br />
            <span className="text-gradient">How Your Business Actually Works.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every project is scoped to your operation. No off-the-shelf templates — just a
            platform built around what your team actually does every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {platforms.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7 hover:border-zinc-700 transition-all duration-200 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-3 italic">&ldquo;{p.problem}&rdquo;</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.outcome}</p>
                <div className="mt-auto flex items-start gap-2 pt-3 border-t border-zinc-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-300">{p.result}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Every project is custom-scoped.</h3>
            <p className="text-zinc-400 text-sm max-w-2xl">
              We don&apos;t have packages because no two businesses are the same. Book a free discovery
              call and we&apos;ll map out exactly what your operation needs — and what it would take to build it.
            </p>
          </div>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all duration-200"
          >
            Book Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
