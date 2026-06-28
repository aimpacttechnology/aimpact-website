import { ArrowRight } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

export default function RescueFinalCTA() {
  return (
    <section className="py-28 bg-[#09090B] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-teal-500 text-sm font-semibold uppercase tracking-widest mb-5">
          One Decision
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Before You Rebuild Your Business,{' '}
          <br className="hidden md:block" />
          <span className="text-teal-400">Understand the Spreadsheet Running It.</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-3 leading-relaxed">
          The Health Check is not a commitment to change everything. It is a commitment
          to finally know what you have — so you can decide what to do about it with
          clear information instead of uncertainty.
        </p>
        <p className="text-zinc-500 text-base max-w-xl mx-auto mb-10">
          Most clients tell us they wish they had done it sooner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/20"
          >
            Schedule a Health Check — $200
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-lg rounded-xl transition-all duration-200"
          >
            Tell Us Your Situation First
          </a>
        </div>

        <p className="text-zinc-600 text-sm">
          Not ready to book? Fill out the form below and we will be in touch.
        </p>
      </div>
    </section>
  )
}
