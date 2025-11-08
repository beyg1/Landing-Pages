'use client'

import { ReactLenis } from 'lenis/react'
import { StickyCards } from '../src/components/sticky-cards/StickyCards'
import { stickyCardsData } from '../src/components/sticky-cards/data'

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        {/* Intro Section */}
        <section className="h-screen flex items-center justify-center bg-black">
          <h1 className="text-6xl lg:text-8xl font-bold text-white text-center">
            The Foundations!
          </h1>
        </section>
        
        {/* Sticky Cards Section */}
        <StickyCards cards={stickyCardsData} />
        
        {/* Outro Section */}
        <section className="h-screen flex items-center justify-center bg-black">
          <h1 className="text-6xl lg:text-8xl font-bold text-white text-center">
            Ends in Form
          </h1>
        </section>
      </main>
    </ReactLenis>
  )
}
