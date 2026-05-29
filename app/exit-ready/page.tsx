import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  ArrowRight,
  CheckCircle,
  Check,
  Search,
  Cpu,
  LifeBuoy,
  FileText,
  Shield,
  TrendingUp,
  DollarSign,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Exit Planning — AiMpact Technology',
  description:
    'Turn your business into a sellable asset. We build the systems, documentation, and workflows that reduce owner-dependency and maximize your valuation before you sell.',
  openGraph: {
    title: "Your Life's Work Is Worth More — If Your Business Can Run Without You",
    description:
      'We build the systems that make your business buyer-ready. Exit on your terms, at a premium.',
    url: 'https://aimpacttechnology.com/exit-ready',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const painPoints = [
  'Your business would struggle if you took two weeks off',
  'Critical decisions and processes live in your head, not in documented systems',
  "You want to retire or step back within the next 3–5 years",
  "You've been saying 'I'll plan my exit soon' for longer than you'd like to admit",
  'You suspect buyers would offer far less than what your business is actually worth',
  'Your team handles the day-to-day — but not the decisions only you make',
]

const deliverables = [
  {
    icon: Search,
    title: 'Owner-Dependency Audit',
    desc: "We map every process, decision, and relationship that currently depends on you being in the room. You'll see exactly what's holding your valuation down — and what to fix first.",
  },
  {
    icon: FileText,
    title: 'Systems Documentation',
    desc: 'We convert your institutional knowledge into documented SOPs, playbooks, and process maps — so your team and future buyers can operate without you.',
  },
  {
    icon: Cpu,
    title: 'Custom Platform Build',
    desc: 'We build the workflows, automations, and custom software that replace you in the day-to-day. Your team gets tools they can run independently. You get your time back.',
  },
  {
    icon: LifeBuoy,
    title: 'Transition Roadmap',
    desc: 'A phased 90-day plan for stepping back — with clear milestones, handoff checkpoints, and support to make sure the transition actually sticks.',
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Exit Readiness Assessment',
    description:
      "A deep-dive into your operations — identifying owner-dependencies, documentation gaps, and exactly what a buyer would flag as risk. You walk away knowing precisely where you stand and what to fix.",
    details: ['Owner-dependency mapping', 'Valuation gap analysis', 'Documentation audit', 'Priority roadmap'],
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Systems & Documentation Build',
    description:
      "We build everything that's missing — documented SOPs, automated workflows, and a custom platform — so your business runs on repeatable systems instead of institutional knowledge.",
    details: ['SOP & playbook creation', 'Custom workflow automation', 'Platform development', 'Deployed on your infrastructure'],
  },
  {
    number: '03',
    icon: LifeBuoy,
    title: 'Handoff & Transition Support',
    description:
      "We train your team, test the systems, and support you through the transition until your business runs without you in the room. Then you decide what's next — sell, step back, or simply breathe.",
    details: ['Team training & onboarding', 'Transition milestone tracking', 'Buyer-readiness review', 'Ongoing support'],
  },
]

const assessmentIncludes = [
  'Full owner-dependency mapping',
  "Valuation gap analysis — what it's worth now vs. what it could be",
  'Documentation audit across all key workflows',
  'Top 5 highest-impact fixes ranked by valuation impact',
  '90-day priority roadmap',
  'Strategy call with our team',
]

const buildIncludes = [
  'Everything in the Assessment',
  'Custom SOP and playbook creation',
  'Workflow automation & platform build',
  'System integrations with your existing tools',
  'Team onboarding and training',
  'Buyer-readiness review',
  'Support through the transition',
  'Ongoing support through transition',
]

const faqs = [
  {
    q: 'When should I start preparing to exit?',
    a: "The best time is 3–5 years before you want to sell or step back. That window gives you time to build real systems, let them run without you, and demonstrate to buyers that the business doesn't depend on your presence. If you're inside that window — or past it — we can still help. We just focus on what matters most first.",
  },
  {
    q: "What does 'owner-dependent' mean to a buyer?",
    a: "To a buyer, owner-dependency is risk. If you leave and revenue drops, they overpaid. That risk shows up as a lower multiple — often 1–2x revenue instead of 3–5x. Every relationship, process, or decision that only you can handle is a discount on your asking price. Our job is to close that gap.",
  },
  {
    q: 'How much could this actually increase my valuation?',
    a: "It depends on your business and how owner-dependent you currently are. The gap between a 'runs without the owner' business and an 'owner-dependent' business often represents hundreds of thousands — sometimes millions — of dollars at the closing table. The assessment gives you a specific picture of your situation before you commit to anything.",
  },
  {
    q: "Do I need to be actively planning to sell right now?",
    a: "No. Many of our clients aren't selling for 3–5 years — they're starting now so they're ready when the time comes. Others just want to step back from the day-to-day without selling at all. Building systems makes your business better regardless of what you eventually decide to do with it.",
  },
  {
    q: "What if I'm not sure I want to sell?",
    a: "That's completely fine. You don't need to know the answer right now. What we do is build you options. A business that runs without you gives you the freedom to sell if you want to, step back if you want to, or simply stop being the bottleneck. The goal is your flexibility — not a specific exit.",
  },
  {
    q: 'How is this different from hiring a business broker?',
    a: "A broker helps you sell. We help you become sellable — and more valuable before you ever talk to a broker. Most brokers will tell you what your business is worth today. We help you change what it's worth over the next 6–18 months. You'll get a better price, better terms, and more options.",
  },
]

export default function ExitReadyPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#09090B]">
          <div className="absolute inset-0 bg-grid opacity-100" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Business Exit Planning
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              Your Life&apos;s Work Is Worth More
              <br />
              <span className="text-gradient">Than Any Buyer Will Offer You Right Now.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Most business owners leave 40–60% of their company&apos;s value on the table because
              their business can&apos;t run without them. We fix that — so you exit on your terms,
              at the price you&apos;ve earned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
              >
                Book a Free Exit Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                See How It Works
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {[
                { icon: TrendingUp, label: '3–5x higher valuation multiples' },
                { icon: Clock, label: '90-day transition timeline' },
                { icon: Shield, label: 'Ongoing partnership & support' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-zinc-400">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE VALUATION GAP ────────────────────────────────────────── */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
                The Real Problem
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                Owner-Dependent Businesses
                <br />
                <span className="text-gradient">Sell for a Fraction of What They Should.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8">
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Typical Owner-Dependent Business</p>
                <div className="text-5xl font-bold text-zinc-400 mb-3">1–2x</div>
                <p className="text-zinc-500 text-sm leading-relaxed">annual revenue at exit. Buyers see risk everywhere — in your relationships, your institutional knowledge, your decision-making. They price in the chance that you leave and revenue follows.</p>
              </div>
              <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/5 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">Where You Want to Be</span>
                </div>
                <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">Systematized, Exit-Ready Business</p>
                <div className="text-5xl font-bold text-white mb-3">3–5x</div>
                <p className="text-zinc-400 text-sm leading-relaxed">annual revenue at exit. Documented processes, automated workflows, and a team that operates independently signal low risk to buyers — and buyers pay a premium for certainty.</p>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 text-center">
              <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mx-auto">
                On a business doing{' '}
                <span className="text-white font-semibold">$500k/year in revenue</span>, that gap is
                the difference between a{' '}
                <span className="text-zinc-500 font-semibold">$750k exit</span> and a{' '}
                <span className="text-white font-semibold">$2M exit</span>. The systems are the difference.
              </p>
            </div>
          </div>
        </section>

        {/* ── IS THIS YOU? ─────────────────────────────────────────────── */}
        <section className="py-24 bg-[#09090B]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Sound Familiar?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                This Is Who We Built This For.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full border border-indigo-500/40 bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-zinc-400 text-base">
              If two or more of those landed,{' '}
              <span className="text-white font-semibold">you&apos;re exactly who we built this for.</span>
            </p>
          </div>
        </section>

        {/* ── WHAT WE DELIVER ──────────────────────────────────────────── */}
        <section className="py-28 bg-[#0D0D10]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                We Build the Systems That
                <br />
                <span className="text-gradient">Close the Valuation Gap.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Everything we build is custom to your business — scoped around your exact workflows and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {deliverables.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 hover:border-indigo-500/20 transition-colors"
                >
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

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-28 bg-[#09090B]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                The Process
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Three Phases. One Outcome.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                A business that commands the price you&apos;ve earned — and options you can actually choose from.
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
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────────────── */}
        <section id="pricing" className="py-28 bg-[#0D0D10]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Two Ways to Start
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Start with Clarity.
                <br />
                <span className="text-gradient">Then Build for the Exit.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                Most clients start with the assessment so they know exactly what to fix — then move into the build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Assessment */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Exit Readiness Assessment</h3>
                  <p className="text-zinc-500 text-sm mb-6">Know exactly where you stand before committing to anything</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-bold text-white">$3,500</span>
                  </div>
                  <p className="text-zinc-500 text-sm">one-time · delivered within 5 business days</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {assessmentIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 hover:border-indigo-500/50 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
                >
                  Get the Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Build */}
              <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/5 p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                    Most Impactful
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Exit Preparation Build</h3>
                  <p className="text-zinc-400 text-sm mb-6">Full systems buildout for owners serious about exit</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-bold text-white">$15,000</span>
                    <span className="text-zinc-400 mb-2">+</span>
                  </div>
                  <p className="text-zinc-500 text-sm">scoped to your business after the assessment</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {buildIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
                >
                  Talk to Us About the Build
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">The Assessment Fee Applies to the Build</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  If you move forward with the Exit Preparation Build after your assessment, the $3,500
                  assessment fee is credited toward the total. You&apos;re not paying twice — you&apos;re buying certainty first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-[#09090B]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Common Questions
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

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="py-28 bg-[#0D0D10] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
              You&apos;ve built something worth protecting
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Don&apos;t Leave Hundreds of Thousands
              <br />
              <span className="text-gradient">on the Table at the Closing.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              Book a free 30-minute strategy call. We&apos;ll walk through where your business stands
              today, what a buyer would see, and what it would take to close the gap. No pressure.
              No pitch deck. Just a real conversation about your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                See Pricing First
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm">
              <Shield className="w-3.5 h-3.5" />
              Free call · No commitment · We only take on clients we know we can help
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
