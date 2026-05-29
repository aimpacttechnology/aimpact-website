import { Search, Cpu, LifeBuoy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Map the Work',
    description:
      'We start with a deep-dive discovery call. We map your workflows, identify the manual tasks and disconnected tools slowing your team down, and define exactly what platform your business needs.',
    details: ['Workflow mapping & interviews', 'Bottleneck and gap analysis', 'Tool inventory review', 'Custom project proposal'],
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Build the Platform',
    description:
      'We design and deploy a custom system around your real workflow — not a generic template. Clear milestones, transparent progress, and full documentation along the way.',
    details: ['Custom platform development', 'System integrations & data migration', 'Full documentation', 'Deployed on your infrastructure'],
  },
  {
    number: '03',
    icon: LifeBuoy,
    title: 'Improve Over Time',
    description:
      'We deploy, train your team, and stay involved. Your business changes — your platform should too. We provide structured onboarding and ongoing support to keep your systems aligned with how your team works.',
    details: ['Team onboarding & training', 'Ongoing platform updates', 'Workflow refinement', 'Direct support access'],
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
            A Simple Plan to Get Your
            <br />
            <span className="text-gradient">Operations Under Control.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Three steps. A proven process. No surprises.
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
            { title: 'Ongoing Partnership', desc: 'We stay involved as your platform evolves — not just at launch.' },
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
