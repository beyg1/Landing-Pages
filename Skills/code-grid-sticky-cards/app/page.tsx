"use client";

import { ReactLenis } from "lenis/react";
import { StickyCards } from "../src/components/sticky-cards/StickyCards";
import { stickyCardsData } from "../src/components/sticky-cards/data";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
        {/* Intro Section */}
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-6xl text-left space-y-10">
            <p className="inline-flex items-center gap-3 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sticky narrative framework
            </p>
            <div className="space-y-4">
              <h1 className="text-balance text-6xl font-semibold tracking-tight text-zinc-50 sm:text-7xl md:text-8xl">
                Build cinematic sticky stories.
              </h1>
              <p className="max-w-3xl text-2xl leading-relaxed text-zinc-400">
                A full-screen, data-first card system where each frame pins, scales, and
                slips behind the next with GSAP precision and Lenis-smooth scroll. 
              </p>
            </div>
          </div>
        </section>

        {/* Sticky Cards Section */}
        <StickyCards cards={stickyCardsData} className="border-y border-zinc-900" />

        {/* Outro Section */}
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-6xl text-left space-y-8">
            <h2 className="text-balance text-5xl font-semibold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
              Out of the box. Perfectly on brand.
            </h2>
            <p className="max-w-3xl text-2xl leading-relaxed text-zinc-500">
              Connect your own data model, imagery, and copy. The StickyCards stack handles
              the pinning, stacking, and motion language so your team can focus purely on
              story, not scaffolding.
            </p>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
