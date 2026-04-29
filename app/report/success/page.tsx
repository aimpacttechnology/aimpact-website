import { CheckCircle2, Mail, Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ReportSuccessPage() {
  return (
    <div className="min-h-screen bg-[#0D0D10] text-white flex flex-col">
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center max-w-6xl mx-auto w-full">
        <Link href="/">
          <Image src="/aimpact-logo.png" alt="AiMpact Technology" width={120} height={36} className="h-9 w-auto" />
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
          </div>

          <h1 className="text-3xl font-bold mb-3">You're all set!</h1>
          <p className="text-zinc-400 text-lg mb-8">
            Your AI Opportunity Report is being generated right now. It'll hit your inbox within the next few minutes.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-8 text-left space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Check your inbox</p>
                <p className="text-sm text-zinc-500">Your personalized report is on its way. Check your spam folder if it doesn't arrive within 5 minutes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Want to walk through it together?</p>
                <p className="text-sm text-zinc-500">Book a free 30-minute call with Landon to go through your report and map out next steps.</p>
              </div>
            </div>
          </div>

          <a
            href="https://cal.com/landon-aimpacttechnology.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors mb-4"
          >
            Book Free Strategy Call <ArrowRight className="w-4 h-4" />
          </a>

          <div>
            <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors">
              Back to homepage →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
