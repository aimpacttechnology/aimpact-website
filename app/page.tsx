import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SelfCheck from '@/components/SelfCheck'
import Problem from '@/components/Problem'
import Discipline from '@/components/Discipline'
import Capabilities from '@/components/Capabilities'
import Methodology from '@/components/Methodology'
import BeforeAfter from '@/components/BeforeAfter'
import TrackRecord from '@/components/TrackRecord'
import OrganizingPrinciple from '@/components/OrganizingPrinciple'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SelfCheck />
        <Problem />
        <Discipline />
        <Capabilities />
        <Methodology />
        <BeforeAfter />
        <TrackRecord />
        <OrganizingPrinciple />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
