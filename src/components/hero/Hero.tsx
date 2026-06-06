import React from 'react'
import { HeroNavigation } from './HeroNavigation'
import { HeroContent } from './HeroContent'

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroNavigation />
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <HeroContent />
      </div>
    </section>
  )
}