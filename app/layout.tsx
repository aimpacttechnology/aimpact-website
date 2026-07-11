import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'AiMpact Technology — Designing How Work Works',
  description:
    'AiMpact Technology is an Operational Architecture practice. We study how your organization actually works — people, processes, information, technology, and decisions — before recommending any technology.',
  keywords: [
    'operational architecture',
    'operational intelligence',
    'workflow design',
    'information architecture',
    'technology strategy',
    'systems integration',
    'decision support systems',
    'operational assessment',
    'business process design',
  ],
  openGraph: {
    title: 'AiMpact Technology — Designing How Work Works',
    description:
      'Every organization has people, processes, information, technology, and decisions. Few were intentionally designed to work together. We design the operating system first — technology follows.',
    url: 'https://aimpacttechnology.com',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
