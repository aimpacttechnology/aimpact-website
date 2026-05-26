import { ArrowRight, MessageSquare, Layers, Cpu, LayoutDashboard } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const builds = [
  {
    icon: MessageSquare,
    title: 'AI Front Desk & Lead Systems',
    description:
      'Custom-built customer intake, qualification, and follow-up automation. Every inquiry gets an immediate, intelligent response — 24/7. Leads are qualified, scored, and routed before you ever pick up the phone.',
    outcomes: [
      'Instant AI response to every inbound lead',
      'Custom qualification criteria for your business',
      'Automated booking & calendar integration',
      'CRM-synced lead tracking and follow-up sequences',
    ],
  },
  {
    icon: Layers,
    title: 'Custom Business Platforms',
    description:
      'Replace your patchwork of CRM, project management, billing, and communication tools with one platform built specifically for how your business operates. No bloat. No workarounds. Just your workflow, automated.',
    outcomes: [
      'Single platform replacing 4–8 disconnected tools',
      'Built around your exact business processes',
      'Full data migration from legacy systems',
      'You own the code and all intellectual property',
    ],
  },
  {
    icon: Cpu,
    title: 'Business Operations Automation',
    description:
      'Document your processes, automate the handoffs, and eliminate the manual work that lives in your team\'s heads. We identify your highest-value automation opportunities and build systems that run without oversight.',
    outcomes: [
      'Process documentation & knowledge capture',
      'Automated workflows between your existing tools',
      'Bottleneck elimination & time savings analysis',
      'SOPs that run themselves',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'AiMpact OS — White-Label Deployment',
    description:
      'AiMpact OS is the operating system we built for our own business. We deploy a custom version for your organization — configured to your team, your clients, and your workflows — as a fully supported platform.',
    outcomes: [
      'AI Front Desk, CRM, pipeline, and client management',
      'Configured to your industry and team size',
      'Custom branding and domain',
      'Ongoing support and updates included',
    ],
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
            Custom PAAS for
            <br />
            <span className="text-gradient">Every Stage of Your Business.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every project is scoped to your business. No off-the-shelf packages — just a platform
            built around exactly what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {builds.map((build) => {
            const Icon = build.icon
            return (
              <div
                key={build.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 hover:border-zinc-700 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{build.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{build.description}</p>
                <ul className="space-y-2.5 mt-auto">
                  {build.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Every project is custom-scoped.</h3>
            <p className="text-zinc-400 text-sm max-w-2xl">
              We don&apos;t have packages because no two businesses are the same. Book a free discovery call
              and we&apos;ll map out exactly what your business needs — and what it would take to build it.
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
