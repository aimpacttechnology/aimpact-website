import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operations FactFinder — AiMpact Technology',
  description: 'Free 43-question assessment that maps your business operations and delivers a personalized AI automation roadmap. See exactly where to invest and in what order.',
  openGraph: {
    title: 'Free Operations FactFinder — Get Your Automation Roadmap',
    description: '43 questions. 15 minutes. A personalized roadmap showing exactly where AI can save you time and grow your revenue.',
    url: 'https://www.aimpacttechnology.com/factfinder',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

export default function FactFinderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
