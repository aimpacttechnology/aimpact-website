import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  ArrowRight,
  Play,
  CheckCircle,
  MessageSquare,
  CalendarCheck,
  FileText,
  Share2,
  LayoutDashboard,
  Shield,
  Dumbbell,
  Heart,
  Leaf,
  Video,
  Star,
  Zap,
  Clock,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AiMpact OS — AI Business Operating System for Independent Professionals',
  description:
    'Capture leads, book clients, and run your business automatically. The AI-powered operating system built for fitness trainers, coaches, dieticians, and solo professionals. Starting at $97/month.',
  openGraph: {
    title: 'AiMpact OS — Your Business Runs 24/7. You Shouldn\'t Have To.',
    description:
      'AI Front Desk, lead qualification, proposals, and social content — all automated. Starting at $97/month.',
    url: 'https://aimpacttechnology.com/aimpact-os',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const personas = [
  { icon: Dumbbell, label: 'Fitness Trainers' },
  { icon: Heart, label: 'Health Coaches' },
  { icon: Leaf, label: 'Yoga Instructors' },
  { icon: Users, label: 'Dieticians' },
  { icon: Video, label: 'Content Creators' },
  { icon: Star, label: 'Solo Professionals' },
]

const features = [
  {
    icon: MessageSquare,
    title: 'AI Front Desk',
    subtitle: 'Always on. Always responsive.',
    description:
      'The moment someone texts or fills out your contact form, your AI Front Desk responds instantly — day or night. It has a real conversation, qualifies the lead, and books them directly onto your calendar. While you\'re with a client. In a session. Asleep.',
    highlight: 'No missed messages. No manual follow-up. No leads going cold.',
  },
  {
    icon: CalendarCheck,
    title: 'Discovery Prep & Summaries',
    subtitle: 'Walk in prepared. Walk out with the notes done.',
    description:
      'Before every discovery call, AiMpact OS builds a prep brief — their goals, hesitations, and the questions to ask. After the call, it writes the summary and captures everything you need to move forward.',
    highlight: 'Two hours of prep and follow-up becomes two minutes.',
  },
  {
    icon: FileText,
    title: 'Proposals Written For You',
    subtitle: 'In your voice. Scoped to their situation.',
    description:
      'Based on your discovery session, AiMpact OS drafts a custom proposal for each client — professional, persuasive, and ready to send in one click. No starting from a blank page ever again.',
    highlight: 'More proposals sent means more clients closed.',
  },
  {
    icon: Share2,
    title: 'Daily Social Media Content',
    subtitle: 'Consistent presence without the grind.',
    description:
      'Every day, your AI agent finds relevant articles in your industry and drafts a LinkedIn post in your voice — ready to review and publish in one click. Stay visible without burning hours on content.',
    highlight: 'Zero extra time. Real engagement.',
  },
  {
    icon: LayoutDashboard,
    title: 'One Dashboard for Everything',
    subtitle: 'Your entire business in one screen.',
    description:
      'Leads, discovery sessions, proposals, active clients, and conversations — all in one place, all talking to each other. No spreadsheets. No jumping between five apps. Just clarity.',
    highlight: 'Run your whole business from a single screen.',
  },
]

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Lead Reaches Out',
    description:
      'Someone texts your number or fills out your web form. AiMpact OS responds within seconds — even at 2am.',
    details: ['SMS & web form capture', 'Instant AI response', 'Real conversation, not a bot script'],
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'AI Qualifies & Books',
    description:
      'The AI asks the right questions, scores the lead, and books qualified prospects directly onto your calendar.',
    details: ['Custom qualification criteria', 'Lead scoring', 'Automatic calendar booking'],
  },
  {
    number: '03',
    icon: FileText,
    title: 'You Show Up Ready',
    description:
      'Your prep brief is waiting. After the call, the summary writes itself. Proposal drafted and ready to send.',
    details: ['Pre-call discovery brief', 'Post-call AI summary', 'One-click proposal generation'],
  },
]

const pricingStarter = [
  '200 AI conversations/month',
  'AI Front Desk (SMS + web form)',
  'Lead capture & qualification',
  'Basic CRM & contact management',
  'Done-for-you onboarding call',
  'Email support',
]

const pricingGrowth = [
  'Unlimited AI conversations',
  'Everything in Starter',
  'Discovery prep briefs & summaries',
  'AI-drafted proposals',
  'Daily social media content agent',
  'White-glove onboarding session',
  'Priority support + 30-day check-in',
]

const faqs = [
  {
    q: 'Is this hard to set up?',
    a: "No. That's what the onboarding session is for. We build your AI front desk with you — your name, your voice, your services — and we have it live within a week. You don't touch any code.",
  },
  {
    q: 'Will it sound like a robot texting my leads?',
    a: "It sounds like you — because we write it to sound like you. We spend time in onboarding capturing your tone, your services, and how you talk to clients. Your leads won't know it's automated unless you tell them.",
  },
  {
    q: 'What if I already use other tools?',
    a: 'AiMpact OS works alongside your existing tools — your calendar, your booking system, your phone number. We sort out integrations during onboarding so you don\'t have to throw anything away.',
  },
  {
    q: "What's the difference between this and a chatbot?",
    a: "A chatbot answers questions. AiMpact OS runs a process — it qualifies the lead, scores them, books the call, preps your brief, drafts your proposal, and logs everything in your CRM. It's a system, not a widget.",
  },
  {
    q: "What if it doesn't work for my business?",
    a: "That's what the 30-day guarantee is for. If you don't get a qualified lead booked in your first 30 days, we refund your setup fee. No questions asked. We're not in the business of charging people for something that isn't delivering.",
  },
]

export default function AiMpactOSPage() {
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
              AI Business Operating System
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              Your Business Runs 24/7.
              <br />
              <span className="text-gradient">You Shouldn&apos;t Have To.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              AiMpact OS is the AI-powered operating system for independent professionals — built to
              capture leads, book clients, and run your business while you focus on your craft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
              >
                Book Your Free Demo
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
                { icon: Zap, label: 'Responds in under 60 seconds' },
                { icon: Clock, label: '10+ hours saved per week' },
                { icon: Shield, label: '30-day lead guarantee' },
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

        {/* ── PROBLEM ──────────────────────────────────────────────────── */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
              The Real Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
              You&apos;re Losing Clients
              <br />
              <span className="text-gradient">You Never Knew You Had.</span>
            </h2>
            <div className="space-y-5 text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Every day, people search for exactly what you offer. Some find you. Some reach out.
                And then — because you&apos;re in a session, or on a call, or just living your life
                — they don&apos;t hear back fast enough.
              </p>
              <p>
                So they go with someone else. <em className="text-white not-italic">Not because that person is better.</em> Because they
                replied first.
              </p>
              <p className="text-white font-medium">
                That&apos;s not a lead problem. That&apos;s a systems problem. And it&apos;s costing
                you thousands of dollars a month in revenue you don&apos;t even know you&apos;re
                missing.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ─────────────────────────────────────────────── */}
        <section className="py-20 bg-[#09090B]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Built For
            </p>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
              Independent Professionals Who Are Done
              <br />
              <span className="text-zinc-400 font-normal">Running Their Business From Their Inbox</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {personas.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-zinc-300 text-sm font-medium text-center leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIDEO ────────────────────────────────────────────────────── */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                See It In Action
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                From First Text to Signed Client.
                <br />
                <span className="text-gradient">Automatically.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Watch how AiMpact OS handles your entire client journey — from the first inquiry to
                a booked discovery call to a sent proposal — without you lifting a finger.
              </p>
            </div>

            {/* Video placeholder */}
            <div className="relative aspect-video rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-cyan-900/10" />
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors backdrop-blur-sm">
                  <Play className="w-8 h-8 text-indigo-400 ml-1" fill="currentColor" />
                </div>
                <p className="text-zinc-400 text-sm">Watch the 3-minute demo</p>
              </div>
              {/* Replace the div above with an actual video embed or iframe when ready */}
            </div>

            <div className="mt-8 text-center">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Book a Live Demo Instead
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section id="features" className="py-28 bg-[#09090B]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                What&apos;s Inside
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                One System. Every Step of
                <br />
                <span className="text-gradient">Your Client Journey.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={feature.title}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900/20 hover:border-zinc-700 transition-colors`}
                  >
                    {/* Text */}
                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                          <p className="text-indigo-400 text-sm">{feature.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-zinc-400 leading-relaxed mb-4">{feature.description}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <p className="text-white text-sm font-medium">{feature.highlight}</p>
                      </div>
                    </div>

                    {/* Visual panel */}
                    <div className="lg:w-80 xl:w-96 min-h-[180px] lg:min-h-0 bg-gradient-to-br from-indigo-900/20 to-zinc-900/40 border-t lg:border-t-0 border-zinc-800 flex items-center justify-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-indigo-400/60" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-28 bg-[#0D0D10]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                How It Works
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Three Steps. Zero Manual Work.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                From first inquiry to signed client — AiMpact OS handles every step between the cracks.
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
        <section id="pricing" className="py-28 bg-[#09090B]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Pricing
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Less Than the Cost of
                <br />
                <span className="text-gradient">One Missed Client.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                No long-term contracts. No bloated enterprise pricing. Cancel anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Starter */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Starter</h3>
                  <p className="text-zinc-500 text-sm mb-6">For solo professionals just getting started with AI</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-bold text-white">$97</span>
                    <span className="text-zinc-400 mb-2">/month</span>
                  </div>
                  <p className="text-zinc-500 text-sm">+ $497 one-time onboarding</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pricingStarter.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 hover:border-indigo-500/50 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Growth */}
              <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/5 p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Growth</h3>
                  <p className="text-zinc-400 text-sm mb-6">Full automation for coaches ready to scale</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-bold text-white">$197</span>
                    <span className="text-zinc-400 mb-2">/month</span>
                  </div>
                  <p className="text-zinc-500 text-sm">+ $997 one-time white-glove onboarding</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pricingGrowth.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
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
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Guarantee banner */}
            <div className="mt-8 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">30-Day Qualified Lead Guarantee</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  If AiMpact OS doesn&apos;t book you a qualified lead in your first 30 days, we
                  refund your setup fee. No questions asked. We&apos;re confident it will — but we
                  want you to be too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Common Questions
              </p>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Honest Answers.
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
        <section className="py-28 bg-[#09090B] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Ready to stop losing leads?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              The Leads Are Already Out There.
              <br />
              <span className="text-gradient">Let&apos;s Make Sure None of Them Slip Through.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              Book a free 30-minute demo. We&apos;ll walk through the system, show you exactly how
              it would work for your specific business, and answer every question you have. No
              pressure. No pitch deck. Just a real conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                Book Your Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <p className="text-zinc-600 text-sm">
              Spots are limited — we only onboard a small number of clients each month to ensure quality setup.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
