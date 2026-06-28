import type { Metadata } from 'next'
import RescueNav from './_components/RescueNav'
import RescueHero from './_components/RescueHero'
import RescueProblem from './_components/RescueProblem'
import RescueConsequences from './_components/RescueConsequences'
import RescueStory from './_components/RescueStory'
import RescueHealthCheck from './_components/RescueHealthCheck'
import RescueMeetSpreadsheet from './_components/RescueMeetSpreadsheet'
import RescueOffers from './_components/RescueOffers'
import RescueIndustries from './_components/RescueIndustries'
import RescueFinalCTA from './_components/RescueFinalCTA'
import RescueContact from './_components/RescueContact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Spreadsheet Rescue | AiMpact Technology',
  description:
    'We rescue business-critical spreadsheets before they break, disappear, or retire with the person who built them. Spreadsheet Health Checks starting at $497.',
  openGraph: {
    title: 'Spreadsheet Rescue | AiMpact Technology',
    description:
      'Your business should not retire with your spreadsheet. We help owners understand, protect, and preserve the systems their operations depend on.',
    url: 'https://aimpacttechnology.com/rescue',
    siteName: 'AiMpact Technology',
    type: 'website',
  },
}

export default function RescuePage() {
  return (
    <>
      <RescueNav />
      <main>
        <RescueHero />
        <RescueProblem />
        <RescueConsequences />
        <RescueStory />
        <RescueHealthCheck />
        <RescueMeetSpreadsheet />
        <RescueOffers />
        <RescueIndustries />
        <RescueFinalCTA />
        <RescueContact />
      </main>
      <Footer />
    </>
  )
}
