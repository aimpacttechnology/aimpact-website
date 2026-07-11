import { ArrowRight, Search, Workflow, Database, Compass, Share2, Target, LayoutGrid } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const left = [
  {
    icon: Search,
    title: 'Operational Assessments',
    description: 'You get a clear, honest picture of how work actually happens — before anyone recommends a fix.',
  },
  {
    icon: Workflow,
    title: 'Workflow Design',
    description: 'Work moves between people and systems the way it should — not just the way it happens to today.',
  },
  {
    icon: Database,
    title: 'Information Architecture',
    description: 'Everyone knows where information lives and can trust what they find — on purpose, not by accident.',
  },
]

const right = [
  {
    icon: Compass,
    title: 'Technology Strategy',
    description: 'The technology you invest in fits how you actually operate — never the other way around.',
  },
  {
    icon: Share2,
    title: 'Systems Integration & Custom Platforms',
    description: "What already works stays connected. What's broken gets replaced. Nothing gets built unless it earns its place.",
  },
  {
    icon: Target,
    title: 'Decision Support Systems',
    description: 'The right person has the full picture in front of them before a decision has to be made.',
  },
]

const indigo = '#818CF8'

function Card({ icon: Icon, title, description, align }: { icon: typeof Search; title: string; description: string; align: 'left' | 'right' }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-700 transition-colors" style={{ width: 330 }}>
      <div className={`flex items-start gap-4 ${align === 'right' ? '' : ''}`}>
        <div className="w-11 h-11 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-28 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Design
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Capabilities Applied.
            <br />
            <span className="text-gradient">Impact Delivered.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Each one exists to move your organization toward one coherent operating system — not
            to sell you a standalone product.
          </p>
        </div>

        {/* Hub and spoke — desktop */}
        <div className="hidden lg:block mb-10">
          <div className="relative mx-auto" style={{ width: 1100, height: 470 }}>
            <svg className="absolute inset-0 pointer-events-none" width={1100} height={470} viewBox="0 0 1100 470" fill="none">
              <line x1="330" y1="70" x2="440" y2="185" stroke={indigo} strokeOpacity="0.35" strokeWidth="1.5" />
              <line x1="330" y1="235" x2="410" y2="235" stroke={indigo} strokeOpacity="0.35" strokeWidth="1.5" />
              <line x1="330" y1="400" x2="440" y2="285" stroke={indigo} strokeOpacity="0.35" strokeWidth="1.5" />
              <line x1="770" y1="70" x2="660" y2="185" stroke={indigo} strokeOpacity="0.35" strokeWidth="1.5" />
              <line x1="770" y1="235" x2="690" y2="235" stroke={indigo} strokeOpacity="0.35" strokeWidth="1.5" />
              <line x1="770" y1="400" x2="660" y2="285" stroke={indigo} strokeOpacity="0.35" strokeWidth="1.5" />
              <circle cx="550" cy="235" r="145" stroke={indigo} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
              <circle cx="550" cy="235" r="160" stroke={indigo} strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 5" fill="none" />
            </svg>

            {/* Left column */}
            <div className="absolute flex flex-col gap-[27px]" style={{ left: 0, top: 25 }}>
              {left.map((c) => <Card key={c.title} {...c} align="left" />)}
            </div>

            {/* Right column */}
            <div className="absolute flex flex-col gap-[27px]" style={{ left: 770, top: 25 }}>
              {right.map((c) => <Card key={c.title} {...c} align="right" />)}
            </div>

            {/* Center hub */}
            <div
              className="absolute rounded-full border border-indigo-500/40 bg-[#0D0D10] flex flex-col items-center justify-center text-center px-10"
              style={{ left: 405, top: 90, width: 290, height: 290 }}
            >
              <LayoutGrid className="w-6 h-6 text-indigo-400 mb-4" />
              <p className="text-sm text-zinc-300 leading-relaxed">
                Capabilities become powerful when they work together inside a designed operating system.
              </p>
            </div>
          </div>
        </div>

        {/* Simple grid fallback — mobile/tablet */}
        <div className="grid md:grid-cols-2 gap-5 mb-10 lg:hidden">
          {[...left, ...right].map((c) => {
            const Icon = c.icon
            return (
              <div key={c.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{c.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{c.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Every engagement starts with observation.</h3>
            <p className="text-zinc-400 text-sm max-w-2xl">
              We don&apos;t sell packages — no two organizations run the same way. Start with a
              conversation and we&apos;ll figure out together what your operation actually needs.
            </p>
          </div>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all duration-200"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
