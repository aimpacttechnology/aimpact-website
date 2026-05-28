import { ShieldCheck } from 'lucide-react'

const points = [
  'Clients own the custom deliverables built for their operation — once the agreed project balance is paid in full.',
  'AiMpact may continue using reusable frameworks, templates, internal tools, and implementation methods. Your business-specific workflows, data structure, and custom deliverables remain yours.',
  'Ongoing hosting, support, integrations, automations, and optimization are available through a monthly systems support agreement.',
  'No vendor lock-in means you are not trapped. But ongoing value comes from having AiMpact as your long-term systems partner.',
]

export default function Ownership() {
  return (
    <section className="py-24 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-10 md:p-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
            </div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Ownership & IP
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Built for Your Business.
            <br />
            <span className="text-gradient">Owned by Your Business.</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl">
            Your platform should belong to your business — not trap you inside another vendor&apos;s
            black box. Here is how it works, plainly stated.
          </p>

          <div className="space-y-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-zinc-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800">
            <p className="text-zinc-400 text-sm leading-relaxed">
              <span className="text-white font-medium">We do not just launch your platform and disappear.</span>{' '}
              As your business changes, we help refine workflows, add features, improve automations,
              and keep your systems aligned with how your team actually works.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
