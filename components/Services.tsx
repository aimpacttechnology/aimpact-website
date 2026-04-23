import { Check, ArrowRight } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const services = [
  {
    name: 'AI Opportunity Assessment',
    price: '$2,500',
    billing: 'one-time',
    description:
      "Not sure where AI can help? We\u2019ll show you. A 2\u20133 day deep-dive analysis of your workflows with ROI projections and a clear implementation roadmap.",
    features: [
      'Full workflow analysis & mapping',
      'Automation opportunity identification',
      'Bottleneck analysis',
      'ROI projections per opportunity',
      'Implementation roadmap',
      'Email & chat support',
    ],
    cta: 'Get Assessment',
    href: CAL_URL,
    popular: false,
  },
  {
    name: 'Guided Implementation',
    price: '$9,500',
    billing: 'one-time',
    description:
      'Ready to automate? We build your highest-impact workflows end-to-end — includes the full assessment plus implementation, training, and 30 days of free support.',
    features: [
      'Everything in Assessment',
      'Full workflow implementation',
      'System integrations',
      'Data migration',
      'Team onboarding & training',
      'Process documentation',
      '30 days free support',
    ],
    cta: 'Start Project',
    href: CAL_URL,
    popular: true,
  },
  {
    name: 'Complete Transformation',
    price: '$25,000',
    billing: 'one-time',
    description:
      'Full operational buildout with custom AI solutions. For businesses needing comprehensive transformation across multiple workflows and departments.',
    features: [
      'Everything in Guided Implementation',
      'Custom AI model development',
      'Advanced analytics dashboard',
      'Multi-department automation',
      'Workflow monitoring',
      'Priority support',
      'Quarterly strategy reviews',
    ],
    cta: 'Contact Us',
    href: '#contact',
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Start with an assessment or jump straight to implementation. Every engagement delivers
            measurable results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-200 ${
                service.popular
                  ? 'border-indigo-500/60 bg-indigo-950/20 shadow-xl shadow-indigo-950/20'
                  : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">{service.price}</span>
                  <span className="text-zinc-500 text-sm">{service.billing}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={service.href}
                target={service.href.startsWith('http') ? '_blank' : undefined}
                rel={service.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  service.popular
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                    : 'border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white'
                }`}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise row */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-white">Enterprise</h3>
              <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs rounded-md">
                Custom Pricing
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-2xl">
              For organizations with 10+ employees needing adoption support, dedicated account
              management, custom training programs, onsite workshops, SLA options, and ongoing
              monthly optimization.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-white font-semibold text-sm rounded-xl transition-all duration-200"
          >
            Inquire
          </a>
        </div>
      </div>
    </section>
  )
}
