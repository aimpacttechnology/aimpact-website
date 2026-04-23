import { Search, Cpu, LifeBuoy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Analysis',
    description:
      'We start by understanding your operations. Deep-dive interviews, process mapping, and bottleneck identification to find your highest-impact automation opportunities.',
    details: ['Workflow interviews', 'Process mapping', 'Bottleneck identification', 'ROI analysis'],
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Implementation',
    description:
      'We build and deploy tailored AI solutions — custom integrations, automated workflows, and AI models — all with full documentation. You own everything we create.',
    details: ['Custom AI development', 'System integrations', 'Data migration', 'You own all IP'],
  },
  {
    number: '03',
    icon: LifeBuoy,
    title: 'Training & Ongoing Support',
    description:
      'Automation only works if your team adopts it. We provide structured training, change management, and ongoing support to ensure maximum impact across your organization.',
    details: ['Team onboarding', 'Change management', 'Documentation', 'Ongoing support'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#0D0D10]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How We Work
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            A proven process that delivers measurable results — whether you're exploring
            opportunities or ready to implement.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Step indicator */}
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

                  {/* Content */}
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

        {/* Value props */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'No Vendor Lock-In', desc: 'You own everything we create — code, docs, and systems.' },
            { title: 'Custom Integrations', desc: 'We connect your existing tools into a unified workflow.' },
            { title: 'Milestone Delivery', desc: 'Clear milestones and transparent progress at every step.' },
            { title: 'Measurable Results', desc: 'Clients typically save 15–30 hours per week on manual work.' },
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
