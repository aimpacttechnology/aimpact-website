import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Demos — AiMpact Technology',
  description:
    'See AiMpact OS in action. Watch real walkthroughs of the custom platforms we build — quotes, invoices, expenses, AI assistant, and more.',
  openGraph: {
    title: 'Product Demos — AiMpact Technology',
    description:
      'Real walkthroughs of the custom business operating systems we build for our clients.',
    url: 'https://aimpacttechnology.com/demos',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const demos = [
  {
    title: 'AiMpact OS — Carpet Cleaning Business',
    description:
      'A full walkthrough of a custom AiMpact OS deployment for a carpet cleaning company. See how quotes, invoices, expense tracking, payment recording, and the AI voice assistant all live in one platform — no spreadsheets, no app switching.',
    src: '/carpet_demo_v4.mp4',
    tags: ['Quotes', 'Invoicing', 'Expense Tracking', 'AI Assistant', 'Revenue Reports'],
  },
  {
    title: 'AiMpact OS — AI Audio Tool & Campaign Dashboard',
    description:
      'A walkthrough of AiMpact OS\'s AI Audio Tool — script generation, voice cloning, and audio recording built directly into the platform. Combined with the campaigns dashboard and command center, this shows how AI-powered outreach lives inside the same system as your leads, contacts, and projects.',
    src: '/final_ad_v5.mp4',
    tags: ['AI Audio Tool', 'Voice Cloning', 'Campaigns', 'Command Center', 'Dashboard'],
  },
]

export default function DemosPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden bg-[#09090B]">
          <div className="absolute inset-0 bg-grid opacity-100" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090B] to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
              <Play className="w-3 h-3" />
              Real Platforms. Real Businesses.
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
              See What We Build
              <br />
              <span className="text-gradient">Before You Commit to Anything.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Every demo below is a real deployment walkthrough — not a sales deck, not a mockup.
              This is what your business looks like inside AiMpact OS.
            </p>
          </div>
        </section>

        {/* ── DEMOS ────────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#09090B]">
          <div className="max-w-5xl mx-auto px-6 space-y-20">
            {demos.map((demo) => (
              <div key={demo.title} className="space-y-6">
                {/* Video */}
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 shadow-2xl shadow-black/40">
                  <video
                    controls
                    preload="metadata"
                    className="w-full aspect-video"
                    poster=""
                  >
                    <source src={demo.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Meta */}
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {demo.title}
                  </h2>
                  <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">
                    {demo.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/25 bg-indigo-500/10 text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-28 bg-[#0D0D10] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Want one built
              <br />
              <span className="text-gradient">for your business?</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Book a free discovery call. We&apos;ll map your workflows and show you exactly what
              your version would look like.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
