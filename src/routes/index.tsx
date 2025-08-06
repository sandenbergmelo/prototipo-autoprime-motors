import { ContactSection } from '@/components/contact-section'
import { FeaturedVehicles } from '@/components/featured-vehicles'
import { HeroSection } from '@/components/hero-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedVehicles />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
