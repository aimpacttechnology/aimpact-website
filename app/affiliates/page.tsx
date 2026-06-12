import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AffiliateApplyForm from '@/components/AffiliateApplyForm'
import { ArrowRight, DollarSign, Users, Share2, Shield, Check, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner Program — AiMpact Technology',
  description:
    'Become a PaaS dev partner with AiMpact Technology. Refer businesses and agencies that need custom AI agents, automations, and platforms — earn commission on every deal that closes.',
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const howItWorks = [
  {
    icon: Share2,
    title: 'Refer a Business or Agency',
    desc: "Share your unique referral link or make a direct introduction. Anyone running a business buried in disconnected tools — or an agency/consultant who needs a dev team — is a great fit.",
  },
  {
    icon: Users,
    title: 'We Handle the Rest',
    desc: "We'll run discovery, scope the right build — an AI agent, automation, custom app, or full AiMpact OS platform — and close the deal. You don't need to sell anything — just make the introduction.",
  },
  {
    icon: DollarSign,
    title: 'You Get Paid',
    desc: "Earn a commission on every engagement that closes from your referral, plus recurring commission on any ongoing retainer. Paid net-30 after the client's payment clears.",
  },
]

const whoFits = [
  {
    title: 'Aspiring entrepreneurs',
    desc: "Ever looked at buying a franchise or starting a business and balked at the $20,000–$100,000+ price tag? Get your own branded landing page and ownership-style upside for a small fraction of that cost.",
  },
  {
    title: 'Parents',
    desc: 'Build real income around school drop-offs, naptime, or evenings — on a schedule that works for your family, not the other way around.',
  },
  {
    title: 'Retirees',
    desc: "Stay sharp, stay connected to your network, and add income — without going back to a 9-to-5.",
  },
  {
    title: 'Students',
    desc: 'High school or college — build real business skills and real income, instead of (or alongside) a minimum-wage job.',
  },
  {
    title: 'Active duty & veterans',
    desc: "Run it around deployments, drills, or odd hours. It doesn't require being home, holding inventory, or punching a clock.",
  },
  {
    title: 'Anyone done trading hours for minimum wage',
    desc: "You're not selling another supplement, juice, or 'opportunity.' You're earning commission on custom solutions real businesses already need.",
  },
]

const comparisonRows = [
  {
    label: 'Cost to join',
    aimpact: 'A small one-time setup fee + low monthly fee for your own branded AiMpact OS landing page — a real asset you own',
    mlm: 'Often $100s–$1,000s for a starter kit or "license" — and you own nothing',
  },
  {
    label: 'What you offer',
    aimpact: 'Custom software & automation — a real project a business actually needs',
    mlm: 'The same supplements, skincare, insurance policies, or books as every other rep',
  },
  {
    label: 'Inventory',
    aimpact: 'None — you never buy, hold, or resell anything',
    mlm: 'Often required to buy product monthly to stay "active"',
  },
  {
    label: 'How you earn',
    aimpact: 'Commission on real, closed engagements with paying clients',
    mlm: 'Often driven more by recruiting reps than by product sales',
  },
  {
    label: 'Recruiting',
    aimpact: 'Optional — you can earn without ever recruiting anyone',
    mlm: 'Central to the model — your income depends on your downline',
  },
  {
    label: 'Commission structure',
    aimpact: 'Published, flat tiers (12% / 15% / 18%) — same rules for everyone',
    mlm: 'Multi-level overrides that mostly flow upward to the top of the pyramid',
  },
  {
    label: 'Who pays whom',
    aimpact: 'AiMpact pays you, from revenue on a project a client already paid for',
    mlm: 'New reps often pay the company or their upline first',
  },
]

const faqs = [
  {
    q: 'How much do I earn per referral?',
    a: "Partners start at 12% commission on closed deals, with tiers up to 18% as you close more business — plus 10% on ongoing retainers for 12 months and 5% on renewals. Full details are covered in our partner training once you're onboarded.",
  },
  {
    q: 'How do I track my referrals?',
    a: "Once you're approved, you get access to your own partner portal — referral links, deal registration, commission tracking, and training, all in one place.",
  },
  {
    q: 'What kinds of clients are the best fit?',
    a: "Any business owner running their company across a pile of disconnected tools, or any agency/consultant who wants to offer clients custom software and automation without hiring developers. AiMpact builds custom AI agents, automations, full applications, and AiMpact OS — our own operations platform.",
  },
  {
    q: 'Is there a cost to join?',
    a: "There's a small one-time setup fee plus a low monthly fee to launch your own branded AiMpact OS landing page — your personal storefront for referrals, and a real business asset with your name on it. Partners also get a discounted rate on their AiMpact OS monthly fee. Beyond that, we only make money when a referred engagement closes — so we're aligned with your success.",
  },
  {
    q: 'What if my referral already knows AiMpact?',
    a: "If they haven't had a conversation with us yet, your referral still counts. We go by first contact — if your introduction is what starts the conversation, you get credit.",
  },
  {
    q: 'Do you offer white-label or agency partnerships?',
    a: "Yes — if you run a dev shop, agency, or consultancy and want to offer AiMpact OS and our build services under your own brand, we offer a higher-tier white-label partnership. These are scoped individually, so book a call to discuss fit and terms.",
  },
]

export default function AffiliatesPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-[#09090B]">
          <div className="absolute inset-0 bg-grid opacity-100" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090B] to-transparent" />

          <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Partner Program
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              Become a PaaS
              <br />
              <span className="text-gradient">Dev Partner.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              You know businesses drowning in disconnected tools, and agencies who promise more than
              they can build. Introduce them to AiMpact — we scope, build, and deliver custom AI agents,
              automations, and full platforms — and you earn commission on every deal that closes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                Apply to Join
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                Book a Call First
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-500">
              Already a partner?{' '}
              <Link href="/affiliates/login" className="text-indigo-400 hover:text-indigo-300">
                Log in to your portal
              </Link>
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Simple by Design
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {howItWorks.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 relative">
                  <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO'S A GOOD FIT ─────────────────────────────────────────── */}
        <section className="py-24 bg-[#09090B]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Who This Is For
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
                An Opportunity,
                <br />
                <span className="text-gradient">At a Fraction of the Cost.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                No franchise fee, no inventory, no business degree required. For a small one-time
                setup fee and low monthly cost, you get your own branded AiMpact OS landing page —
                a real business, plus commission on custom solutions for real problems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoFits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5"
                >
                  <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOT AN MLM ───────────────────────────────────────────────── */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                A Different Model
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
                This Is Not
                <br />
                <span className="text-gradient">An MLM.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                We get it — "affiliate program" can sound like health, beauty, home care products,
                life insurance, or a book-club multi-level marketing pitch. Here&apos;s how this is
                actually different.
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden sm:block rounded-2xl border border-zinc-800 bg-zinc-900/20 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-zinc-800 bg-zinc-900/40">
                <div className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  &nbsp;
                </div>
                <div className="px-5 py-4 text-sm font-semibold text-indigo-400 border-l border-zinc-800">
                  AiMpact Partner Program
                </div>
                <div className="px-5 py-4 text-sm font-semibold text-zinc-500 border-l border-zinc-800">
                  Typical MLM
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? 'border-b border-zinc-800' : ''}`}
                >
                  <div className="px-5 py-4 text-sm font-medium text-white flex items-center">
                    {row.label}
                  </div>
                  <div className="px-5 py-4 text-sm text-zinc-300 border-l border-zinc-800 flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{row.aimpact}</span>
                  </div>
                  <div className="px-5 py-4 text-sm text-zinc-500 border-l border-zinc-800 flex items-start gap-2">
                    <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                    <span>{row.mlm}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-4">
              {comparisonRows.map((row) => (
                <div key={row.label} className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-5">
                  <h3 className="text-sm font-semibold text-white mb-3">{row.label}</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300">{row.aimpact}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-500">{row.mlm}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-zinc-500 text-sm mt-6 max-w-2xl mx-auto text-center">
              Every business is different, so this is a general comparison, not a description of any
              specific company&apos;s current program.
            </p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Questions
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Straight Answers.
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 hover:border-zinc-700 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLY FORM ───────────────────────────────────────────────── */}
        <section id="apply" className="py-24 bg-[#09090B] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to Start Referring?
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                Fill out the form below and we'll follow up within 1–2 business days to walk
                you through the program and get you set up.
              </p>
            </div>
            <AffiliateApplyForm />
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-zinc-600 text-sm">
                <Shield className="w-3.5 h-3.5" />
                Low-cost setup · Discounted AiMpact OS rate · Paid within 30 days of project kickoff
              </div>
              <span className="hidden sm:block text-zinc-700">·</span>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
              >
                Prefer to talk first? Book a call
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
