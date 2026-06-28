import { Lock, Shield, UserCheck, Trash2, FileX, Eye } from 'lucide-react'

const commitments = [
  {
    icon: UserCheck,
    title: 'Reviewed by our team. Not passed around.',
    body: 'Your file stays within AiMpact Technology. It is not shared with outside contractors, third-party vendors, or AI systems for processing. A small team. A clear commitment.',
  },
  {
    icon: Shield,
    title: 'NDA available before you send us anything.',
    body: 'Just ask. We will sign a Non-Disclosure Agreement before you share a single tab. Your business is not our case study.',
  },
  {
    icon: FileX,
    title: 'Never shared. Never trained on.',
    body: 'Your data is never shared with third parties. It is never used to train AI models. It exists for one purpose: your Health Check.',
  },
  {
    icon: Eye,
    title: 'You can send a redacted version.',
    body: "Not comfortable sending the real file? Replace customer names with codes. Blur sensitive columns. We can work with a sanitized copy and still give you an accurate assessment.",
  },
  {
    icon: Trash2,
    title: 'Deleted or returned when we\'re done.',
    body: 'At the end of the engagement, your file is returned to you or permanently deleted — your choice. We do not keep copies.',
  },
  {
    icon: Lock,
    title: 'Your findings belong to you alone.',
    body: 'The Health Check report is yours. We do not publish findings, reference your business, or use your situation as an example without your explicit written permission.',
  },
]

export default function RescuePrivacy() {
  return (
    <section className="py-28 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Your Data Is Safe
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]">
            We Know What We&apos;re Asking You{' '}
            <span className="text-teal-400">to Trust Us With.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            That spreadsheet is not just a file. It is years of decisions, hard-won
            processes, and institutional knowledge that exists nowhere else. Handing it
            to someone you just met is a significant act of trust.
          </p>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mt-4">
            We take that seriously. Here is exactly what we do — and do not do — with it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {commitments.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 flex gap-4 hover:border-teal-900/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1.5">{c.title}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{c.body}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8 text-center">
          <p className="font-playfair text-white text-xl font-semibold mb-3">
            Not ready to send the real file? That is fine.
          </p>
          <p className="text-zinc-400 text-base leading-relaxed max-w-2xl mx-auto">
            Start by describing what your spreadsheet does in the form below.
            We will be in touch to discuss what you are comfortable sharing
            before anything changes hands.
          </p>
        </div>
      </div>
    </section>
  )
}
