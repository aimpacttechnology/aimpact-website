import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SmsTermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#09090B] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
          <h1 className="text-4xl font-bold text-white mb-2">SMS Terms of Service</h1>
          <p className="text-zinc-500 text-sm mb-12">Last updated: May 2026</p>

          <div className="space-y-8 text-zinc-400 text-sm leading-relaxed">
            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Program Description</h2>
              <p>AiMpact Technology may send automated SMS messages in response to inbound inquiries, appointment reminders, and follow-up communications related to your business inquiry or project.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Opt-In</h2>
              <p>By providing your phone number and initiating contact with an AiMpact AI Front Desk or contact form, you consent to receive automated SMS messages from AiMpact Technology.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Opt-Out</h2>
              <p>You can opt out at any time by replying <strong className="text-white">STOP</strong> to any message. After opting out, you will receive one final confirmation message and then no further SMS communications.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Message Frequency</h2>
              <p>Message frequency varies depending on your inquiry and the stage of your project. Typically 1–5 messages per inquiry.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Rates</h2>
              <p>Message and data rates may apply. AiMpact Technology does not charge for SMS messages, but your mobile carrier may charge standard messaging rates.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Support</h2>
              <p>For help, reply <strong className="text-white">HELP</strong> or email <a href="mailto:landon@aimpacttechnology.com" className="text-indigo-400 underline">landon@aimpacttechnology.com</a>.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Privacy</h2>
              <p>Your phone number is never sold or shared with third parties. See our <a href="/privacy" className="text-indigo-400 underline">Privacy Policy</a> for details.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
