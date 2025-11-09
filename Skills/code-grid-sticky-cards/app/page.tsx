"use client";

import { ReactLenis } from "lenis/react";
import { StickyCards } from "../src/components/sticky-cards/StickyCards";
import { stickyCardsData } from "../src/components/sticky-cards/data";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="min-h-screen bg-zinc-950 text-white">
        {/* Intro Section */}
        <section className="flex min-h-screen items-center justify-center px-4">
          <div className="max-w-4xl text-center space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Scroll-crafted narrative system
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Sticky cards that feel like an award-winning launch page.
            </h1>
            <p className="text-sm text-zinc-400 sm:text-base">
              Each story block pins, stacks, and fades with cinematic precision. Powered by
              GSAP + ScrollTrigger, Lenis smooth scroll, and a fully data-driven API so you
              can drop it into any product narrative.
            </p>
          </div>
        </section>

        {/* Sticky Cards Section */}
        <StickyCards cards={stickyCardsData} className="border-y border-zinc-900" />

        {/* Outro Section */}
        <section className="flex min-h-screen items-center justify-center px-4">
          <div className="max-w-3xl text-center space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Out of the box. Into your story.
            </h2>
            <p className="text-sm text-zinc-400 sm:text-base">
              Feed it your own data and visuals, and this sticky stack becomes a plug-and-play
              hero section for product launches, case studies, or AI-native experiences.
            </p>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
