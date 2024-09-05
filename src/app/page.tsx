import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Footer from '@/components/footer'
import About from '@/components/about'
import Services from '@/components/services'
import CTA from '@/components/cta'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'

import type { Metadata } from 'next'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CTA />
      {/* <Newsletter/> */}
      <Testimonials />
      <Footer />
    </>
  )
}
