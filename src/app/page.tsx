import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { Features } from '@/components/landing/Features'
import { Budget } from '@/components/landing/Budget'
import { Integrations } from '@/components/landing/Integrations'
import { Pricing } from '@/components/landing/Pricing'
import { Faq } from '@/components/landing/Faq'
import { Footer } from '@/components/landing/Footer'


export default function Home() {
  return (
       <div className="min-h-screen bg-gradient-to-b from-blue-50 via-slate-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <Budget />
      <Integrations />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}