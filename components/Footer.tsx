import { Zap } from 'lucide-react'

const ASSESSMENT_URL = 'https://aimpactos.vercel.app/assessment'

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/aimpacttechnology',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/aimpacttechnology',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

const footerLinks = [
  { label: 'What We Build', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'AiMpact OS', href: '/aimpact-os' },
  { label: 'FactFinder', href: '/factfinder' },
  { label: 'Exit Assessment', href: ASSESSMENT_URL, external: true },
  { label: 'Partner Program', href: 'https://www.aimpacttechnology.com/affiliates', external: true },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-white tracking-tight">
                AiMpact<span className="text-indigo-400">.</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              Build the platform your business runs on.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={'external' in link && link.external ? '_blank' : undefined}
                rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-zinc-300 flex items-center justify-center transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} AiMpact Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:18883354979" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              (888) 335-4979
            </a>
            <span className="text-zinc-800">·</span>
            <a href="mailto:landon@aimpacttechnology.com" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              landon@aimpacttechnology.com
            </a>
            <span className="text-zinc-800">·</span>
            <a href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-zinc-800">·</span>
            <a href="/sms-terms" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              SMS Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
