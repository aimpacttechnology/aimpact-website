import { ArrowRight } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

export default function OrganizingPrinciple() {
  return (
    <section className="py-28 bg-[#0D0D10] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: 'url(/blueprint-flow.jpg)' }}
      />
      <div className="absolute inset-0 bg-[#0D0D10]/60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-6">
          The Core Idea
        </p>
        <p className="text-2xl md:text-3xl text-zinc-300 leading-snug mb-4">
          Do not organize around software. Do not organize around AI. Do not organize around
          industries.
        </p>
        <p className="text-2xl md:text-3xl leading-snug mb-10">
          Organize around one idea:{' '}
          <span className="text-gradient font-semibold">Designing How Work Works.</span>
        </p>

        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
          One conversation, no pitch deck. We&apos;ll ask about your workflows, not sell you a
          package.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  )
}
