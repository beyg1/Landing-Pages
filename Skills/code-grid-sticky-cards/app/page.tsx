"use client";

import { ReactLenis } from "lenis/react";
import { StickyCards } from "../src/components/sticky-cards/StickyCards";
import { stickyCardsData } from "../src/components/sticky-cards/data";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="min-h-screen bg-black text-white">
        {/* Intro Section */}
        <section className="flex min-h-screen items-center justify-center px-4">
          <div className="max-w-3xl text-center space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Experience
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              The Foundations of Intelligent Sticky Interactions
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              Scroll to explore how each layer pins, stacks, and transitions with precision.
              Built with GSAP, ScrollTrigger, Lenis, and Tailwind in a reusable Next.js pattern.
            </p>
          </div>
        </section>

        {/* Sticky Cards Section */}
        <StickyCards cards={stickyCardsData} className="border-y border-white/5" />

        {/* Outro Section */}
        <section className="flex min-h-screen items-center justify-center px-4">
          <div className="max-w-2xl text-center space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Conclusion
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ends in Form, Ready for Your Story
            </h2>
            <p className="text-sm text-white/70 sm:text-base">
              Drop this component into any experience, feed it data, and let the scroll tell
              the narrative with cinematic, GPU-accelerated motion.
            </p>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
