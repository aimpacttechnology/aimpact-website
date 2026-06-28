import type { Metadata } from 'next'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import ContactForm from './ContactForm'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorkDontChud — Stop Doomscrolling. Start Paychecking.',
  description:
    "Your first job doesn't have to be complicated. Build your resume, prep for interviews, and find local jobs that are actually hiring — all in one place.",
}

const G = '#1a5c3a'
const GBTN = '#1a5c3a'
const MINT = '#cfe8dd'
const TEAL = '#3dd9c2'
const GRAY = '#5a5a5a'

function Label({ children }: { children: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        border: `1px solid ${G}`,
        color: G,
        padding: '4px 14px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        marginBottom: '20px',
      }}
    >
      {children}
    </span>
  )
}

function PrimaryBtn({ children }: { children: string }) {
  return (
    <button
      style={{
        backgroundColor: GBTN,
        color: 'white',
        padding: '14px 32px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  )
}

function OutlineBtn({ children }: { children: string }) {
  return (
    <button
      style={{
        backgroundColor: 'transparent',
        color: G,
        padding: '14px 32px',
        borderRadius: '10px',
        border: `2px solid ${G}`,
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  )
}

export default function KaileyPage() {
  return (
    <div
      style={{
        backgroundColor: MINT,
        color: '#333',
        fontFamily: 'Inter, system-ui, sans-serif',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          padding: '20px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <span className={playfair.className} style={{ fontSize: '22px', fontWeight: 700, color: G }}>
          WorkDontChud
        </span>
        <div style={{ display: 'flex', gap: '28px', fontSize: '14px', flexWrap: 'wrap' }}>
          {['#features', '#how', '#pricing', '#employers', '#contact'].map((href, i) => (
            <a key={href} href={href} style={{ color: G, textDecoration: 'none', fontWeight: 500 }}>
              {['Features', 'How It Works', 'Pricing', 'For Employers', 'Contact'][i]}
            </a>
          ))}
        </div>
        <a href="#contact">
          <PrimaryBtn>Get Started</PrimaryBtn>
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '60px 48px',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            pointerEvents: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            padding: '40px',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          {['💵', '💰', '🚀', '💵', '💰', '🚀', '💵', '💰', '🚀', '💵', '💰', '🚀'].map((c, i) => (
            <span
              key={i}
              style={{ fontSize: '80px', display: 'block', transform: `rotate(${(i * 37) % 60 - 30}deg)` }}
            >
              {c}
            </span>
          ))}
        </div>

        <div style={{ maxWidth: '680px', position: 'relative', zIndex: 1 }}>
          <h1
            className={playfair.className}
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, color: G, lineHeight: 1.1, marginBottom: '24px' }}
          >
            Stop Doomscrolling.
            <br />
            Start Paychecking. 💸
          </h1>
          <p style={{ fontSize: '18px', color: GRAY, marginBottom: '40px', lineHeight: 1.7, maxWidth: '540px' }}>
            Your first job doesn&apos;t have to be complicated. Build your resume, prep for
            interviews, and find local jobs that are actually hiring — all in one place.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#contact"><PrimaryBtn>Build My Resume</PrimaryBtn></a>
            <a href="#contact"><OutlineBtn>Find Jobs Near Me</OutlineBtn></a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <Label>WHY WORKDONTCHUD?</Label>
        <h2
          className={playfair.className}
          style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 700, color: G, marginBottom: '16px' }}
        >
          Everything You Need To Get Hired
        </h2>
        <p style={{ color: GRAY, marginBottom: '56px', fontSize: '16px', maxWidth: '600px' }}>
          One platform. Zero confusion. All the tools first-time job seekers actually need —
          without the corporate jargon.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '40px 32px' }}>
          {[
            { icon: '🤖', title: 'Resume Builder', desc: 'No experience? No problem. We help you build a real resume in minutes.' },
            { icon: '🎤', title: 'Interview Practice', desc: "Practice common questions and get instant feedback so you don't freeze up IRL." },
            { icon: '✉️', title: 'Cover Letter Generator', desc: 'Stand out from the pile with a cover letter that actually sounds like you.' },
            { icon: '📍', title: 'Local Job Board', desc: 'Find businesses near you that are actively hiring — no ghost listings here.' },
            { icon: '📋', title: 'Application Tracker', desc: "Keep tabs on every job you've applied to so nothing slips through the cracks." },
            { icon: '🤝', title: 'Employer Connections', desc: 'Get directly matched with local businesses looking for motivated young workers.' },
          ].map(({ icon, title, desc }) => (
            <div key={title}>
              <div style={{ fontSize: '42px', marginBottom: '18px' }}>{icon}</div>
              <h3 className={playfair.className} style={{ fontSize: '20px', fontWeight: 700, color: G, marginBottom: '10px' }}>
                {title}
              </h3>
              <p style={{ color: GRAY, fontSize: '15px', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <Label>THE PLAYBOOK</Label>
        <h2
          className={playfair.className}
          style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}
        >
          How It Works 🚀
        </h2>
        <p style={{ color: GRAY, marginBottom: '56px', fontSize: '16px' }}>
          Five simple steps from zero experience to first paycheck. You&apos;ve got this.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '40px' }}>
          {[
            { icon: '📄', title: 'Build Your Resume', desc: 'Use our builder to create a polished resume in under 10 minutes.' },
            { icon: '🔍', title: 'Apply to Jobs', desc: 'Browse the local job board and apply to real positions near you.' },
            { icon: '🎤', title: 'Practice Interviewing', desc: 'Run through mock interviews until you feel confident and ready.' },
            { icon: '🏆', title: 'Get Hired', desc: 'Land the job and show up on day one ready to crush it.' },
            { icon: '💸', title: 'Celebrate Your First Paycheck', desc: 'That first direct deposit hits different. You earned it. 🎉' },
          ].map(({ icon, title, desc }) => (
            <div key={title}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: `1px solid ${G}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '12px', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                {icon}
              </div>
              <div style={{ width: '72px', height: '3px', backgroundColor: `${G}35`, borderRadius: '2px', marginBottom: '16px' }} />
              <h3 className={playfair.className} style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                {title}
              </h3>
              <p style={{ color: GRAY, fontSize: '14px', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          className={playfair.className}
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}
        >
          Unlock Achievements Along the Way 🏆
        </h2>
        <p style={{ color: GRAY, marginBottom: '48px', fontSize: '16px' }}>
          Getting hired is a journey — and every milestone deserves a moment. Earn badges as
          you level up your job search game.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            { bg: '⭐', title: 'First Resume', desc: 'You created your very first resume. The grind begins.' },
            { bg: '📋', title: 'First Interview', desc: 'Walked in, answered questions, and walked out with experience.' },
            { bg: '✉️', title: 'First Offer', desc: 'Someone said yes. That "yes" is just the beginning.' },
            { bg: '👜', title: 'First Paycheck', desc: 'You worked for it, you earned it. Legend status unlocked.' },
          ].map(({ bg, title, desc }) => (
            <div
              key={title}
              style={{ backgroundColor: 'rgba(255,255,255,0.45)', border: '1px solid rgba(26,92,58,0.18)', borderRadius: '16px', padding: '28px' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: G, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>
                {bg}
              </div>
              <p style={{ fontWeight: 700, color: '#222', marginBottom: '8px', fontSize: '15px' }}>🏆 {title}</p>
              <p style={{ color: GRAY, fontSize: '14px', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOR PARENTS ── */}
      <section style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <Label>FOR PARENTS</Label>
        <h2
          className={playfair.className}
          style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 700, color: G, marginBottom: '24px', maxWidth: '680px' }}
        >
          Helping Your Teen Become Independent 💪
        </h2>
        <p style={{ color: GRAY, fontSize: '17px', lineHeight: 1.8, maxWidth: '660px', marginBottom: '40px' }}>
          WorkDontChud helps students build real confidence, prep for interviews, and connect
          with local employers who are actually looking for motivated young workers. You can guide
          them through the process — or just share the link and let them fly.
        </p>
        <a href="#contact"><PrimaryBtn>Help My Teen</PrimaryBtn></a>
      </section>

      {/* ── FOR BUSINESSES ── */}
      <section id="employers" style={{ padding: '0 48px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{ backgroundColor: G, borderRadius: '24px', padding: '64px', display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <div style={{ flex: 1, minWidth: '260px' }}>
            <span
              style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.85)', padding: '4px 14px', borderRadius: '999px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '20px' }}
            >
              FOR LOCAL BUSINESSES
            </span>
            <h2
              className={playfair.className}
              style={{ fontSize: 'clamp(26px, 3vw, 44px)', fontWeight: 700, color: 'white', marginBottom: '24px', lineHeight: 1.2 }}
            >
              Need Dependable Young Employees?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.8, marginBottom: '36px' }}>
              Create an employer account and get connected with motivated students in your
              community who are ready to work. Stop sifting through unqualified applications —
              find the right hire faster.
            </p>
            <a href="#contact">
              <button
                style={{ backgroundColor: TEAL, color: '#0a3a28', padding: '14px 32px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '15px', fontWeight: 700 }}
              >
                Post a Job
              </button>
            </a>
          </div>
          <div style={{ flex: 1, minWidth: '180px', display: 'flex', justifyContent: 'center', fontSize: '100px' }}>
            🤝
          </div>
        </div>
      </section>

      {/* ── ABOUT KAILEY ── */}
      <section style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <Label>THE ORIGIN STORY</Label>
        <h2
          className={playfair.className}
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: G, marginBottom: '48px' }}
        >
          Hi, I&apos;m Kailey. 👋
        </h2>
        <div style={{ display: 'flex', gap: '64px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: '280px', height: '340px', borderRadius: '20px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
            <Image
              src="/kailey-headshot.png"
              alt="Kailey McDuff, Founder of WorkDontChud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority
            />
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{ color: GRAY, fontSize: '17px', lineHeight: 1.9, marginBottom: '22px' }}>
              I started WorkDontChud because I watched my friends struggle to find jobs — even
              though businesses all around town were hiring. The disconnect was wild.
            </p>
            <p style={{ color: GRAY, fontSize: '17px', lineHeight: 1.9, marginBottom: '32px' }}>
              Finding your first job shouldn&apos;t feel impossible. I built this to make getting
              hired faster, less stressful, and maybe even a little fun. Because why be a Discord
              mod when you could be out here earning a paycheck?
            </p>
            <p style={{ color: '#222', fontSize: '17px' }}>
              — <strong>Kailey McDuff</strong>, Founder
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <Label>FAQ</Label>
        <h2
          className={playfair.className}
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#1a1a1a', marginBottom: '48px' }}
        >
          Got Questions? We Got You. 🙋
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { q: 'Do I need experience?', a: 'Nope! WorkDontChud is built specifically for first-time job seekers. Our tools help you show off your skills and personality even without work history.' },
            { q: 'Can parents help?', a: 'Absolutely. Parents can create an account alongside their student and help guide the process, review applications, or just cheer from the sidelines.' },
            { q: 'Can businesses post jobs?', a: 'Yes! Local businesses can create an employer account and start posting jobs directly to motivated students in their area.' },
            { q: "What if I don't have a resume?", a: "That's literally what we're here for. Our Resume Builder walks you through everything from scratch. You'll have a resume ready before you finish your lunch break." },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{ backgroundColor: 'rgba(255,255,255,0.4)', borderLeft: `4px solid ${G}`, borderRadius: '12px', padding: '28px 28px 28px 24px' }}
            >
              <h3 className={playfair.className} style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>
                {q}
              </h3>
              <p style={{ color: GRAY, fontSize: '15px', lineHeight: 1.8 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <Label>PRICING</Label>
        <h2
          className={playfair.className}
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}
        >
          Simple, Honest Pricing
        </h2>
        <p style={{ color: GRAY, marginBottom: '56px', fontSize: '16px' }}>
          No subscriptions. No hidden fees. Just what you need to get hired.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px', alignItems: 'start' }}>
          {[
            { badge: null, name: 'Job Search', desc: 'Resume Builder & Cover Letter Template', price: '$50', cta: 'Get Started' },
            { badge: null, name: 'Interview Prep', desc: 'Mock Interview & Basic Interview Prep by Kailey', price: '$50', cta: 'Get Started' },
            { badge: 'BEST VALUE', name: 'First Job Success Kit', desc: 'Everything — all tools bundled together', price: '$85', cta: 'Get Everything' },
          ].map(({ badge, name, desc, price, cta }) => (
            <div key={name} style={{ position: 'relative', paddingTop: badge ? '20px' : '0' }}>
              {badge && (
                <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: '#e3f5ec', border: `1px solid ${G}`, color: G, padding: '2px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em' }}>
                  {badge}
                </div>
              )}
              <h3 className={playfair.className} style={{ fontSize: '22px', fontWeight: 700, color: G, marginBottom: '8px' }}>{name}</h3>
              <p style={{ color: GRAY, fontSize: '14px', marginBottom: '20px', lineHeight: 1.6 }}>{desc}</p>
              <div style={{ fontSize: '52px', fontWeight: 800, color: G, marginBottom: '28px', lineHeight: 1 }}>{price}</div>
              <a href="#contact"><OutlineBtn>{cta}</OutlineBtn></a>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <Label>GET IN TOUCH</Label>
        <h2
          className={playfair.className}
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: G, marginBottom: '12px' }}
        >
          Reach Out to Kailey 📬
        </h2>
        <p style={{ color: GRAY, fontSize: '16px', lineHeight: 1.7, maxWidth: '560px', marginBottom: '48px' }}>
          Whether you&apos;re a student ready to get hired, a parent looking to help your teen, or
          a business wanting to post a job — Kailey would love to hear from you.
        </p>
        <ContactForm />
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '64px', alignItems: 'center', flexWrap: 'wrap' }}
      >
        <div style={{ flex: 1, minWidth: '180px', display: 'flex', gap: '4px', justifyContent: 'center', fontSize: '80px' }}>
          🎓🎓🎓
        </div>
        <div style={{ flex: 2, minWidth: '260px', textAlign: 'center' }}>
          <h2
            className={playfair.className}
            style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 700, color: G, marginBottom: '20px' }}
          >
            Ready to Earn Your First Paycheck? 💸
          </h2>
          <p style={{ color: GRAY, fontSize: '17px', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 36px' }}>
            Stop waiting for opportunity. It&apos;s time to go get it. Students just like you
            have already taken the first step — your turn.
          </p>
          <a href="#contact"><PrimaryBtn>Let&apos;s Get Hired</PrimaryBtn></a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${G}25`, padding: '60px 48px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '28px', marginBottom: '48px' }}>
          {[
            { icon: '🎓', title: 'For Students', desc: 'Build a resume, practice interviews, and find real local jobs.', cta: 'Get Started' },
            { icon: '👪', title: 'For Parents', desc: 'Help your teen build confidence and land their first job with the right tools.', cta: 'Learn More' },
            { icon: '🏢', title: 'For Employers', desc: 'Connect with motivated young workers in your community.', cta: 'Post a Job' },
          ].map(({ icon, title, desc, cta }) => (
            <div
              key={title}
              style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: `1px solid ${G}22`, borderRadius: '16px', padding: '28px' }}
            >
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{icon}</div>
              <h3 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', fontSize: '16px' }}>{title}</h3>
              <p style={{ color: GRAY, fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>
              <a href="#contact"><OutlineBtn>{cta}</OutlineBtn></a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: GRAY, fontSize: '14px' }}>
          © WorkDontChud.com — <em>Built by students. For students.</em>
        </p>
      </footer>
    </div>
  )
}
