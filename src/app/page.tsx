import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-rose-50 to-white">
      <Navbar />
      <Hero />
    </div>
  )
}