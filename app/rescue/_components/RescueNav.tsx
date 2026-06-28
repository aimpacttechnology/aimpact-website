import { ArrowRight, Zap } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

export default function RescueNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-[#09090B]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-white tracking-tight">
            AiMpact<span className="text-teal-400">.</span>
          </span>
        </a>

        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-xl transition-all duration-200"
        >
          Book a $497 Health Check
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </nav>
  )
}
