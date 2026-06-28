import { ArrowRight, CheckCircle } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const offers = [
  {
    name: 'Spreadsheet Health Check',
    price: '$497',
    priceNote: '– $1,500 depending on complexity',
    description:
      'The right starting point for any business that depends on a spreadsheet they cannot afford to lose.',
    featured: true,
    cta: 'Book a Health Check',
    ctaHref: CAL_URL,
    external: true,
    deliverables: [
      'Full review of your spreadsheet and workflow',
      'Risk assessment — what happens if this file breaks',
      'Broken formula and logic audit',
      'Data structure and integrity review',
      'Modernization roadmap with options and ballparks',
      'PDF report delivered within 5 business days',
      'Optional Loom video walkthrough',
    ],
  },
  {
    name: 'Spreadsheet Rescue Build',
    price: '$3,000',
    priceNote: '– $15,000+ depending on scope',
    description:
      'For businesses ready to move off the spreadsheet and into something that will not break, get lost, or walk out the door.',
    featured: false,
    cta: 'Schedule a Scoping Call',
    ctaHref: CAL_URL,
    external: true,
    deliverables: [
      'Your workbook converted into a secure web application',
      'User login and role-based permissions',
      'Database with proper backup and recovery',
      'Import and export tools for existing data',
      'Dashboard, reporting, and filtering',
      'Clean UI designed around your existing workflow',
      'Training and handoff documentation',
    ],
  },
  {
    name: 'Monthly Support',
    price: '$99',
    priceNote: '– $500/month depending on scope',
    description:
      'Ongoing maintenance, minor updates, and peace of mind for businesses that want someone watching their back.',
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
      'Ongoing modernization as your business evolves',
    ],
  },
]

export default function RescueOffers() {
  return (
    <section id="services" className="py-28 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
            How We Help
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Start With a Health Check.{' '}
            <span className="text-amber-400">Build From There.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            You do not have to commit to a full rebuild to find out what you have.
            Most clients start with the Health Check — and make a clear-eyed decision from there.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`rounded-2xl border p-8 flex flex-col relative ${
                offer.featured
                  ? 'border-amber-500/40 bg-amber-500/5 shadow-lg shadow-amber-600/10'
                  : 'border-zinc-800 bg-zinc-900/20'
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-amber-600 text-white text-xs font-bold rounded-full tracking-wider uppercase">
                    Start Here
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-2">{offer.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-3xl font-bold ${offer.featured ? 'text-amber-400' : 'text-white'}`}>
                    {offer.price}
                  </span>
                  <span className="text-zinc-500 text-sm">{offer.priceNote}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{offer.description}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {offer.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${offer.featured ? 'text-amber-400' : 'text-zinc-500'}`} />
                    <span className="text-zinc-400 text-sm leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>

              <a
                href={offer.ctaHref}
                target={offer.external ? '_blank' : undefined}
                rel={offer.external ? 'noopener noreferrer' : undefined}
                className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-sm rounded-xl transition-all duration-200 ${
                  offer.featured
                    ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-600/20'
                    : 'border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white'
                }`}
              >
                {offer.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
