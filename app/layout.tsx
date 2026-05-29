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
  title: 'AiMpact Technology — Custom Operational Platforms for Small Businesses',
  description:
    'AiMpact Technology builds custom operational platforms for small businesses, helping owners centralize workflows, automate reporting, reduce admin work, and scale without vendor lock-in.',
  keywords: [
    'custom business platform',
    'operational systems',
    'workflow automation',
    'small business platform',
    'custom PaaS',
    'business process automation',
    'operations dashboard',
    'field reporting platform',
    'custom business portal',
  ],
  openGraph: {
    title: 'AiMpact Technology — Custom Operational Platforms for Small Businesses',
    description:
      'We build the operational platform your small business has been missing — centralized workflows, automated reporting, and systems your team actually owns.',
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
