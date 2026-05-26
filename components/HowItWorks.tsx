import { Search, Cpu, LifeBuoy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Scoping',
    description:
      'We start with the Exit Readiness Assessment and a deep-dive discovery call. We map your workflows, identify your biggest operational gaps, and define exactly what platform your business needs.',
    details: ['Business Exit Assessment', 'Workflow mapping & interviews', 'Gap analysis & ROI scoping', 'Custom project proposal'],
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Custom PAAS Build',
    description:
      'We build your platform from the ground up — custom integrations, AI automations, and a unified dashboard. Clear milestones, transparent progress, and full documentation along the way. You own everything.',
    details: ['Custom AI & automation development', 'System integrations & data migration', 'Full documentation', 'You own all IP & code'],
  },
  {
    number: '03',
    icon: LifeBuoy,
    title: 'Deploy, Train & Support',
    description:
      'We deploy, train your team, and stay involved. Automation only works if your people adopt it. We provide structured onboarding and ongoing support to make sure the platform performs.',
    details: ['Team onboarding & training', 'Change management support', 'Ongoing platform updates', 'Direct support access'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#0D0D10]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How We Build
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            A proven process from discovery to deployment — every build is scoped, built, and
            supported with the same rigor.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-indigo-400" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-indigo-400/60 text-xs font-mono font-bold tracking-widest mb-2">
                      {step.number}
                    </p>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="text-xs text-zinc-500 flex items-center justify-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-indigo-500/60" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'No Vendor Lock-In', desc: 'You own everything we create — code, docs, and systems.' },
            { title: 'Custom Integrations', desc: 'We connect your existing tools into a unified platform.' },
            { title: 'Milestone Delivery', desc: 'Clear milestones and transparent progress at every step.' },
            { title: 'Measurable Results', desc: 'Clients typically eliminate 15–30 hours of manual work per week.' },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 hover:border-zinc-700 transition-colors"
            >
              <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
