import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import BeforeAfter from '@/components/BeforeAfter'
import Ownership from '@/components/Ownership'
import Examples from '@/components/Examples'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <BeforeAfter />
        <Ownership />
        <Examples />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
