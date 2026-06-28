import type { Metadata } from 'next'
import { CheckCircle, FileText, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Health Check Confirmed | AiMpact Technology',
  robots: { index: false },
}

export default function RescueSuccessPage() {
  return (
    <main className="min-h-screen bg-[#09090B] flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-teal-400" />
          </div>
        </div>

        <h1 className="font-playfair text-4xl font-bold text-white mb-3">
          You&apos;re in. Payment received.
        </h1>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Check your email for a confirmation. Here&apos;s what happens next.
        </p>

        <div className="space-y-4 text-left mb-10">
          {[
            {
              icon: Mail,
              step: '1',
              title: 'We reach out within 1–2 business days',
              body: 'To confirm how you want to share your file and whether you'd like an NDA signed first.',
            },
            {
              icon: FileText,
              step: '2',
              title: 'You share your spreadsheet',
              body: 'The real file, a redacted version, or a described copy — whatever you\'re comfortable with.',
            },
            {
              icon: CheckCircle,
              step: '3',
              title: 'Your PDF report in 5 business days',
              body: 'Risk assessment, formula audit findings, and a build cost estimate if one is warranted.',
            },
          ].map(({ icon: Icon, step, title, body }) => (
            <div key={step} className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-teal-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">{title}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 text-left mb-8">
          <p className="text-zinc-400 text-sm font-semibold mb-3 uppercase tracking-wider text-xs">Questions?</p>
          <div className="space-y-2">
            <a href="tel:18883354979" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm transition-colors">
              <Phone className="w-4 h-4" /> (888) 335-4979
            </a>
            <a href="mailto:landon@aimpacttechnology.com" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm transition-colors">
              <Mail className="w-4 h-4" /> landon@aimpacttechnology.com
            </a>
          </div>
        </div>

        <Link
          href="/rescue"
          className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors"
        >
          ← Back to the rescue page
        </Link>
      </div>
    </main>
  )
}
