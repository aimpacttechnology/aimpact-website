import { ArrowRight } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const steps = [
  {
    verb: 'We listen.',
    description:
      'Tell us what your spreadsheet does — who built it, who uses it, how often, and what you are worried about losing. No judgment on how it was built. These files do what they need to do.',
  },
  {
    verb: 'We investigate.',
    description:
      'Jaclyn traces your formulas, workflows, reports, hidden dependencies, and manual processes. She looks for what the spreadsheet is actually doing versus what everyone thinks it is doing.',
  },
  {
    verb: 'We identify risks.',
    description:
      'Single points of failure. Audit risks. Manual bottlenecks. Broken formulas. Duplicate or inconsistent data. Retirement risk — what would be lost if the person who built this left tomorrow.',
  },
  {
    verb: 'We give you a roadmap.',
    description:
      'You receive a clear PDF report with our full findings, a risk assessment, and a plain-language explanation of your options. No sales pitch. No obligation to do anything else.',
  },
]

export default function RescueHealthCheck() {
  return (
    <section id="health-check" className="py-28 bg-[#09090B]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-500 text-sm font-semibold uppercase tracking-widest mb-3">
            The Health Check
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]">
            What Happens During a{' '}
            <span className="text-teal-400">Spreadsheet Health Check?</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Most people do not know what to expect, so they put it off. Here is exactly
            what happens — start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {steps.map((step, i) => (
            <div
              key={step.verb}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-playfair text-4xl font-bold text-teal-500/20 leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-playfair text-xl font-bold text-white">{step.verb}</h3>
              </div>
              <p className="text-zinc-400 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* The trust-builder */}
        <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-8 text-center">
          <p className="font-playfair text-white text-2xl font-semibold mb-3">
            Sometimes the answer is software.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-2">
            Sometimes it is simply documenting what already exists and training someone
            new to run it. A good backup system. A cleaner file structure. A written
            explanation of how the formulas work.
          </p>
          <p className="text-teal-300 text-base font-medium">
            You will know which one you need after the Health Check. That is the point.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/20"
          >
            Book a Health Check — $200
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <p className="mt-3 text-zinc-600 text-sm">
            Delivered within 5 business days. Includes a PDF report and optional video walkthrough.
          </p>
        </div>
      </div>
    </section>
  )
}
