'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { StickyCardData } from './data'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

interface StickyCardsProps {
  cards: StickyCardData[]
}

export function StickyCards({ cards }: StickyCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Set up ScrollTrigger for each card
    const setupAnimations = () => {
      const allCards = cardsRef.current
      if (allCards.length === 0) return

      allCards.forEach((card, index) => {
        if (!card) return

        // Create ScrollTrigger for each card with onUpdate callback
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: 'bottom top',
          pin: index < allCards.length - 1, // Don't pin the last card
          pinSpacing: false,
          onUpdate: (self: ScrollTrigger) => {
            const progress = self.progress
            
            // Get the next card
            const nextCard = allCards[index + 1]
            if (!nextCard) return

            // Calculate animation values based on scroll progress
            const scale = 1 - (progress * 0.25) // Scale down to 0.75
            const rotation = (index % 2 === 0 ? 1 : -1) * progress * 3 // ±3° rotation
            const overlayOpacity = progress * 0.7 // Dark overlay fade

            // Apply transformations to current card
            gsap.set(card, {
              scale: scale,
              rotation: rotation,
            })

            // Apply overlay opacity using CSS custom property
            gsap.set(card, {
              '--overlay-opacity': overlayOpacity.toString()
            })
          }
        })
      })

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh()
    }

    // Initialize animations after a short delay
    const timer = setTimeout(setupAnimations, 100)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      ScrollTrigger.killAll()
    }
  }, [cards])

  // Function to add card refs
  const addCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-gray-50"
      role="region"
      aria-label="Sticky Cards Section"
    >
      {cards.map((card, index) => (
        <div
          key={card.index}
          ref={(el) => addCardRef(el, index)}
          className="sticky-card h-screen flex items-center justify-center relative overflow-hidden will-change-transform bg-gray-50"
          style={{
            zIndex: cards.length - index
          }}
        >
          {/* Dark overlay for fade effect */}
          <div
            className="absolute inset-0 bg-black pointer-events-none"
            style={{
              opacity: 'var(--overlay-opacity, 0)'
            }}
          />
          
          <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left column: Index number */}
            <div className="order-2 lg:order-1">
              <div className="text-8xl lg:text-9xl font-bold text-gray-300 leading-none">
                {card.index}
              </div>
            </div>
            
            {/* Right column: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {card.title}
              </h1>
              
              <div className="aspect-[5/3] overflow-hidden rounded-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Overview
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}