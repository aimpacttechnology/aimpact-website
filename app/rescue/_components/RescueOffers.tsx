import { ArrowRight, CheckCircle } from 'lucide-react'
import RescueCTAButton from './RescueCTAButton'

const offers = [
  {
    name: 'Spreadsheet Health Check',
    price: '$200',
    priceNote: 'flat fee',
    description:
      'The right first step — and the best $200 you will spend on your business this year. Before anything else, you need to know exactly what you have.',
    featured: true,
    cta: null,
    ctaHref: null,
    external: false,
    deliverables: [
      'Full review of your spreadsheet and workflow',
      'Risk assessment — what happens if this file breaks or walks out',
      'Formula and logic audit by Jaclyn personally',
      'Identification of manual bottlenecks and single points of failure',
      'Clear PDF report with findings',
      'Estimated hours and scope for a Rescue Build, if needed',
      'Delivered within 5 business days',
      'Optional video walkthrough included',
    ],
    footnote: 'Sometimes the report is all you need. We will tell you honestly. The build estimate is included either way.',
  },
  {
    name: 'Spreadsheet Rescue Build',
    price: 'Hourly',
    priceNote: '— rate & estimated hours quoted after your Health Check',
    description:
      'When the Health Check shows your operation needs more than a patch. We build the replacement system — without losing what made the original work.',
    featured: false,
    cta: 'Schedule a Scoping Call',
    ctaHref: CAL_URL,
    external: true,
    deliverables: [
      'Scope, rate, and timeline defined in your Health Check report',
      'Your workbook converted into a secure, web-based system',
      'User access with role-based permissions',
      'Reliable database with backup and recovery',
      'Dashboard and reporting built around your existing workflow',
      'Training and written documentation',
      'No ongoing platform fees — you own it outright',
    ],
    footnote: null,
  },
  {
    name: 'Monthly Support',
    price: '$99',
    priceNote: '– $500/month depending on scope',
    description:
      'Ongoing maintenance and peace of mind. Someone watching your back so you are not alone when something breaks or needs updating.',
    featured: false,
    cta: 'Ask About Support',
    ctaHref: '#contact',
    external: false,
    deliverables: [
      'Regular data backups and integrity checks',
      'Minor updates and formula corrections',
      'Monthly reporting assistance',
      'Data cleanup and normalization',
      'Priority response on issues',
      'Ongoing improvements as your needs evolve',
    ],
    footnote: null,
  },
]

export default function RescueOffers() {
  return (
    <section id="services" className="py-28 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3">
            How We Help
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Start With the Health Check.{' '}
            <span className="text-teal-400">Everything Else Follows From There.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The Health Check tells you what you have, what is at risk, and what a fix
            would cost. You make every decision from there with full information.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`rounded-2xl border p-8 flex flex-col relative ${
                offer.featured
                  ? 'border-teal-500/40 bg-teal-500/5 shadow-lg shadow-teal-600/10'
                  : 'border-zinc-800 bg-zinc-900/20'
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-teal-600 text-white text-xs font-bold rounded-full tracking-wider uppercase">
                    Start Here
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-playfair text-lg font-bold text-white mb-2">{offer.name}</h3>
                <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                  <span className={`text-3xl font-bold ${offer.featured ? 'text-teal-400' : 'text-white'}`}>
                    {offer.price}
                  </span>
                  <span className="text-zinc-500 text-sm leading-snug">{offer.priceNote}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{offer.description}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {offer.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${offer.featured ? 'text-teal-400' : 'text-zinc-500'}`} />
                    <span className="text-zinc-400 text-sm leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>

              {offer.footnote && (
                <p className="text-teal-400/70 text-xs italic mb-5 text-center">{offer.footnote}</p>
              )}

              {offer.featured ? (
                <RescueCTAButton
                  label="Book a Health Check"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-sm rounded-xl transition-all duration-200 bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-600/20"
                />
              ) : (
                <a
                  href={offer.ctaHref ?? '#contact'}
                  target={offer.external ? '_blank' : undefined}
                  rel={offer.external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-sm rounded-xl transition-all duration-200 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white"
                >
                  {offer.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
