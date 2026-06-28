import { FileSpreadsheet } from 'lucide-react'
import RescueCTAButton from './RescueCTAButton'

export default function RescueHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#09090B] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/25 bg-teal-500/8 mb-8">
          <FileSpreadsheet className="w-4 h-4 text-teal-400" />
          <span className="text-teal-400 text-sm font-medium">Spreadsheet Health Check &amp; Business Continuity</span>
        </div>

        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-7">
          Your Business Should Not{' '}
          <br className="hidden md:block" />
          <span className="text-teal-400">Retire With Your Spreadsheet.</span>
        </h1>

        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10">
          We help business owners understand, protect, and preserve the spreadsheets
          their operations depend on — before retirement, turnover, or a single bad day
          puts everything at risk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://cal.com/landon-aimpacttechnology.com/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-teal-600 hover:bg-teal-600/10 text-teal-400 hover:text-teal-300 font-semibold text-lg rounded-xl transition-all duration-200"
          >
            Schedule a Free Call
          </a>
          <RescueCTAButton
            label="Get Started — $200"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/20"
          />
        </div>

        <p className="mt-6 text-sm text-zinc-600">
          Not sure yet? The call is free. The Health Check is $200 flat with a full written report.
        </p>
      </div>
    </section>
  )
}
