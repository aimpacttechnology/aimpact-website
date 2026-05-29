import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AffiliateApplyForm from '@/components/AffiliateApplyForm'
import { ArrowRight, DollarSign, Users, Share2, Shield, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Affiliate Program — AiMpact Technology',
  description:
    'Earn commissions by referring business owners to AiMpact Technology. Join our affiliate program and get paid for every client you send our way.',
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const howItWorks = [
  {
    icon: Share2,
    title: 'Refer a Business Owner',
    desc: "Share your unique referral link or make a direct introduction. Anyone who runs a business and wants to improve their operations or prepare for an exit is a great fit.",
  },
  {
    icon: Users,
    title: 'We Handle the Rest',
    desc: "We'll have a conversation with your referral, scope the engagement, and close the deal. You don't need to sell anything — just make the introduction.",
  },
  {
    icon: DollarSign,
    title: 'You Get Paid',
    desc: "Earn a commission on every engagement that closes from your referral. Commissions are paid within 30 days of project kickoff.",
  },
]

const whoFits = [
  'Business brokers and M&A advisors',
  'CPAs, accountants, and financial planners',
  'Business coaches and consultants',
  'Estate planning and retirement advisors',
  'Commercial real estate professionals',
  'Anyone with a network of business owners',
]

const faqs = [
  {
    q: 'How much do I earn per referral?',
    a: "Commission rates are discussed during onboarding and depend on the type of engagement. Reach out to us directly and we'll walk you through the structure — we keep it simple and pay generously for quality introductions.",
  },
  {
    q: 'How do I track my referrals?',
    a: "Once you're in the program, we set you up with a unique referral link and provide visibility into where your referrals stand. We're a small team — you'll always be able to reach us directly if you have questions.",
  },
  {
    q: 'What kinds of clients are the best fit?',
    a: "Business owners who are thinking about selling in the next 1–5 years, want to reduce their workload, or are frustrated that their business can't run without them. Revenue range $500k–$10M+ is the sweet spot, though we work outside that range too.",
  },
  {
    q: 'Is there a cost to join?',
    a: "No. The affiliate program is free to join. We only make money when a referred engagement closes — so we're aligned with your success.",
  },
  {
    q: 'What if my referral already knows AiMpact?',
    a: "If they haven't had a conversation with us yet, your referral still counts. We go by first contact — if your introduction is what starts the conversation, you get credit.",
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
              Affiliate Program
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              Get Paid for Introductions
              <br />
              <span className="text-gradient">That Change Businesses.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              If you work with business owners — as an advisor, broker, accountant, or coach — you
              already know people who need what we do. Refer them, and earn a commission every time
              we close.
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
                Best Affiliates Already Have
                <br />
                <span className="text-gradient">a Network of Business Owners.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                You don&apos;t need a big audience. You need the right relationships.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {whoFits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/20 px-5 py-4"
                >
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
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
                Free to join · No minimums · Paid within 30 days of project kickoff
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
