"use client";

import Image from "next/image";
import { useReveal } from "./use-reveal";

export function HeroSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-curtain-dark text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Pakistani architecture"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-curtain-dark/80 via-curtain-dark/60 to-curtain-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-6 max-w-5xl mx-auto">
            Find Your Next Home in Pakistan — Fast, Secure, Trusted
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Buy, sell or rent properties with verified listings and expert
            support.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#featured"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="Search properties"
            >
              Search Properties
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-curtain-dark rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="List a property"
            >
              List a Property
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
