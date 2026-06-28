import { ArrowRight, FileSpreadsheet } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

export default function RescueHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#09090B] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/25 bg-amber-500/8 mb-8">
          <FileSpreadsheet className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 text-sm font-medium">Spreadsheet Rescue &amp; Business Modernization</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
          Your Business Should Not{' '}
          <br className="hidden md:block" />
          <span className="text-amber-400">Retire With Your Spreadsheet.</span>
        </h1>

        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-4">
          AiMpact Technology rescues business-critical spreadsheets before they break,
          disappear, or walk out the door with the person who built them.
        </p>
        <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          We turn fragile Excel workbooks into secure, simple systems — without losing
          the process that made your business work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-amber-600/20"
          >
            Book a $497 Health Check
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-lg rounded-xl transition-all duration-200"
          >
            Describe Your Situation
          </a>
        </div>

        <p className="mt-6 text-sm text-zinc-600">
          No tech pitch. No jargon. Just a clear look at what&apos;s at risk and what to do about it.
        </p>
      </div>
    </section>
  )
}
