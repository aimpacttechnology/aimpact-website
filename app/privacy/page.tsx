import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#09090B] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm mb-12">Last updated: May 2026</p>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-400 text-sm leading-relaxed">
            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Information We Collect</h2>
              <p>We collect information you provide directly to us — including your name, email address, company name, and any details you share through our contact form, assessment tool, or discovery call booking.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">How We Use Your Information</h2>
              <p>We use your information to respond to inquiries, deliver services, and communicate about your project. We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">SMS Communications</h2>
              <p>If you provide your phone number to interact with an AiMpact AI Front Desk, you may receive automated SMS messages related to your inquiry. You can opt out at any time by replying STOP. Message and data rates may apply.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Data Storage</h2>
              <p>Contact and lead information is stored in our secure database (Supabase/PostgreSQL). We take reasonable precautions to protect your data.</p>
            </section>

            <section>
              <h2 className="text-white text-lg font-semibold mb-3">Contact</h2>
              <p>Questions about this policy? Email <a href="mailto:landon@aimpacttechnology.com" className="text-indigo-400 underline">landon@aimpacttechnology.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
