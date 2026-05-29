import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  CalendarCheck,
  FileText,
  LayoutDashboard,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Settings,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AiMpact OS — The Operating System We Built For Our Business',
  description:
    'AiMpact OS is the internal operating system AiMpact Technology built to run its own operations — and now deploys as a custom platform for every client it serves.',
  openGraph: {
    title: 'AiMpact OS — Built In-House. Deployed for Your Business.',
    description:
      'AI Front Desk, lead pipeline, client management, and team operations — one unified platform configured to how your business actually works.',
    url: 'https://aimpacttechnology.com/aimpact-os',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'
const ASSESSMENT_URL = 'https://aimpactos.vercel.app/assessment'

const capabilities = [
  {
    icon: MessageSquare,
    title: 'AI Front Desk',
    description:
      'Every inbound inquiry — text, web form, or email — gets an immediate, intelligent response. The system qualifies the lead, gathers context, and books directly onto your calendar. No missed messages, no manual follow-up.',
  },
  {
    icon: CalendarCheck,
    title: 'Lead Pipeline & CRM',
    description:
      'A full lead pipeline built around your sales process. Leads are captured, scored, and tracked from first contact through close. No spreadsheets. No separate CRM subscription.',
  },
  {
    icon: FileText,
    title: 'Client Management',
    description:
      'Active clients, project status, check-ins, and notes — all in one place. The system tracks health scores, flags overdue follow-ups, and keeps your team aligned without a daily standup.',
  },
  {
    icon: LayoutDashboard,
    title: 'Operations Dashboard',
    description:
      'One dashboard that shows you the full state of your business — leads, clients, revenue, and team activity. Built around your KPIs, not generic metrics that don\'t apply to your business.',
  },
  {
    icon: Settings,
    title: 'Workflow Automation',
    description:
      'Manual handoffs, reminder sequences, follow-up emails, proposal drafting — the repetitive work that eats your team\'s time. AiMpact OS automates it so your people work on what requires a human.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Role-based access, shared activity feeds, task assignment, and internal notes — all tied to the client record. Everyone knows what\'s happening without a 10-person group text.',
  },
]

const differentiators = [
  {
    icon: Zap,
    title: 'We built this for ourselves first.',
    desc: 'AiMpact OS runs AiMpact Technology\'s daily operations. Every feature was built because we needed it — not because a product manager thought someone might want it.',
  },
  {
    icon: Settings,
    title: 'Every deployment is custom.',
    desc: 'We don\'t drop a generic SaaS login in your inbox. We configure AiMpact OS to your workflows, your team structure, and your clients — then train your team on day one.',
  },
  {
    icon: Shield,
    title: 'You own the data. We own the support.',
    desc: 'Your business data lives in your Supabase instance. We handle maintenance, updates, and support. No vendor lock-in. No data hostage situations.',
  },
  {
    icon: TrendingUp,
    title: 'It grows with your business.',
    desc: 'Need a new module? A new integration? A new workflow? AiMpact OS is built to extend. We add to it as your business grows — because we\'re already inside the codebase.',
  },
]

export default function AiMpactOSPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-[#09090B]">
          <div className="absolute inset-0 bg-grid opacity-100" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Built In-House. Deployed for Clients.
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              The Operating System
              <br />
              <span className="text-gradient">We Built For Ourselves.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              AiMpact OS is what runs AiMpact Technology&apos;s daily operations — lead pipeline,
              client management, AI Front Desk, and team workflows in one custom-built platform.
              We now deploy a version of it for every client we serve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                See It In Action
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={ASSESSMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                Take the Free Exit Assessment
              </a>
            </div>
          </div>
        </section>

        {/* ── CONTEXT ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#0D0D10]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Why We Built It
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Most small businesses run on duct tape.
            </h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                A CRM they don&apos;t fully use. A scheduling tool that doesn&apos;t talk to anything.
                A billing system in one tab. Leads in a spreadsheet. Follow-ups in someone&apos;s head.
              </p>
              <p>
                We built AiMpact OS because we needed a platform that actually ran our business — not
                five tools pretending to work together. We&apos;ve been running on it for over a year.
              </p>
              <p className="text-white font-medium">
                Now we deploy a custom version for every client we build for. It&apos;s not generic
                SaaS. It&apos;s your business, automated.
              </p>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ─────────────────────────────────────────────── */}
        <section className="py-28 bg-[#09090B]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                What&apos;s Inside
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                One Platform. Every Part
                <br />
                <span className="text-gradient">of How You Operate.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap) => {
                const Icon = cap.icon
                return (
                  <div
                    key={cap.title}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 hover:border-zinc-700 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{cap.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{cap.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── DIFFERENTIATORS ──────────────────────────────────────────── */}
        <section className="py-24 bg-[#0D0D10]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Why This Is Different
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Not another SaaS subscription.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((d) => {
                const Icon = d.icon
                return (
                  <div
                    key={d.title}
                    className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 hover:border-zinc-700 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{d.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT'S DEPLOYED ────────────────────────────────────────── */}
        <section className="py-24 bg-[#09090B]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
                The Deployment Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Your version. Live in 4–6 weeks.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { n: '01', title: 'Discovery call', desc: 'We map your workflows, your team structure, and what the platform needs to do for your specific business.' },
                { n: '02', title: 'Custom configuration', desc: 'We configure AiMpact OS to your processes — AI Front Desk scripted in your voice, pipeline stages mapped to your sales process, client stages matching how you work.' },
                { n: '03', title: 'Integration & migration', desc: 'We connect your existing tools and migrate your data. Your calendar, your phone number, your CRM history — all pulled in.' },
                { n: '04', title: 'Team onboarding', desc: 'We train your team on day one and stay available for questions during the first 30 days.' },
                { n: '05', title: 'Ongoing support', desc: 'Monthly check-ins, platform updates, and a direct line to us when something needs adjusting. We\'re a build partner, not a ticket queue.' },
              ].map((step) => (
                <div
                  key={step.n}
                  className="flex items-start gap-5 rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 hover:border-zinc-700 transition-colors"
                >
                  <span className="text-indigo-400/60 text-xs font-mono font-bold tracking-widest mt-0.5 flex-shrink-0">{step.n}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="py-28 bg-[#0D0D10] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to see it
              <br />
              <span className="text-gradient">built for your business?</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Book a free discovery call. We&apos;ll walk through your operations and show you
              exactly what an AiMpact OS deployment would look like for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={ASSESSMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                Take the Free Exit Assessment
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {[
                { icon: CheckCircle, label: 'Custom configured for your team' },
                { icon: CheckCircle, label: 'You own your data' },
                { icon: CheckCircle, label: 'No vendor lock-in' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-zinc-500 text-sm">
                  <Icon className="w-4 h-4 text-indigo-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
