import { Hero } from '@/components/hero'
import { FeaturedCollection } from '@/components/sections/FeaturedCollection'
import { WatchesSection } from '@/components/sections/WatchesSection'
import { PerfumesSection } from '@/components/sections/PerfumesSection'
import { AccessoriesSection } from '@/components/sections/AccessoriesSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { BrandBenefitsSection } from '@/components/sections/BrandBenefitsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <FeaturedCollection />
        <WatchesSection />
        <PerfumesSection />
        <AccessoriesSection />
        <FeaturedProductsSection />
        <BrandBenefitsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
