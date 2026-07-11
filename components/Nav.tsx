'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const CAL_URL = 'https://cal.com/landon-aimpacttechnology.com'

const links = [
  { label: 'What We Design', href: '#capabilities' },
  { label: 'Our Methodology', href: '#methodology' },
  { label: 'Product Demos', href: '/demos', external: false },
  { label: 'Partner Program', href: 'https://www.aimpacttechnology.com/affiliates', external: true },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/aimpact-logo.png" alt="AiMpact Technology" width={48} height={48} className="h-12 w-12" priority />
          <span className="font-bold text-white tracking-tight text-lg">
            AiMpact<span className="text-indigo-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`text-sm whitespace-nowrap transition-colors ${
                link.label === 'Partner Program'
                  ? 'text-indigo-400 hover:text-indigo-300 font-medium'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block flex-shrink-0">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg whitespace-nowrap transition-colors"
          >
            Start a Conversation
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-zinc-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#09090B]/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setOpen(false)}
                className={`py-1 transition-colors ${
                  link.label === 'Partner Program'
                    ? 'text-indigo-400 hover:text-indigo-300 font-medium'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg text-center transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
