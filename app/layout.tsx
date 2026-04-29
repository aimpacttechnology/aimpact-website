import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AiMpact Technology — AI Consulting & Automation',
  description:
    'We assess your workflows, identify automation opportunities, and implement AI solutions that save your team 15–30 hours every week. No commitment required.',
  keywords: ['AI consulting', 'automation', 'workflow automation', 'AI solutions', 'business automation'],
  openGraph: {
    title: 'AiMpact Technology — AI Consulting & Automation',
    description: "Not sure where AI can help your business? We\u2019ll show you.",
    url: 'https://aimpacttechnology.com',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
