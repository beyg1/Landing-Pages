"use client";

import React, { useRef } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { StickyCardData } from "./data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface StickyCardsProps {
  cards: StickyCardData[];
  className?: string;
}

/**
 * StickyCards
 *
 * - Data-driven stacked sticky cards powered by GSAP + ScrollTrigger.
 * - Each card:
 *   - Pins when reaching top.
 *   - Previous cards scale down, rotate slightly, and darken via CSS variable.
 * - Last card is not pinned (prevents layout freeze).
 *
 * Integration:
 *   <StickyCards cards={stickyCardsData} />
 */
export const StickyCards: React.FC<StickyCardsProps> = ({ cards, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || !cards.length) return;

      const cardElements = gsap.utils.toArray<HTMLDivElement>("[data-sticky-card]");

      // baseline: ensure all cards start as clear foreground
      cardElements.forEach((card, index) => {
        gsap.set(card, {
          zIndex: cards.length - index,
          scale: 1,
          rotate: 0,
          opacity: 1,
          "--overlay-opacity": 0,
        });
      });

      // for each card except the last, create a trigger that:
      // - pins the current card
      // - as you scroll through its height, pushes it into the background
      // - lets the next card come in clean as full foreground
      cardElements.forEach((card, index) => {
        const isLast = index === cardElements.length - 1;
        const rotationDirection = index % 2 === 0 ? -6 : 6; // stronger for clearer effect

        if (isLast) return;

        const nextCard = cardElements[index + 1];

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress; // 0 -> 1 while scrolling this card range

            // Current card: fade/scale/rotate into background
            gsap.set(card, {
              scale: gsap.utils.mapRange(0, 1, 1, 0.78, p),
              rotate: rotationDirection * p,
              opacity: gsap.utils.mapRange(0, 1, 1, 0.0, p), // fully faded by end
              "--overlay-opacity": p, // fully dark by end
              zIndex: cards.length - index - 1, // always behind upcoming card
            });

            // Next card: ensure it feels like the clear foreground as it enters
            // We don't fully control its scroll position here, but we can guarantee:
            // - no dark overlay
            // - full opacity
            // - above the previous card
            gsap.set(nextCard, {
              opacity: 1,
              scale: 1,
              rotate: 0,
              "--overlay-opacity": 0,
              zIndex: cards.length - index,
            });
          },
        });
      });

      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    },
    {
      scope: containerRef,
      dependencies: [cards.length],
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={containerRef}
      className={`relative bg-zinc-950 text-white ${className ?? ""}`}
    >
      {/* full-viewport stack, no width constraint so cards can occupy entire screen */}
      <div className="flex flex-col">
        {cards.map((card) => (
          <article
            key={card.index}
            data-sticky-card
            style={
              {
                "--overlay-opacity": 0,
              } as CSSProperties
            }
            className="sticky-card relative flex h-screen w-screen items-stretch gap-0 border-b border-zinc-900/80 will-change-transform last:border-b-0 overflow-hidden"
          >
            {/* Full-viewport light card surface */}
            <div className="pointer-events-none absolute inset-0 bg-zinc-50 shadow-[0_24px_120px_rgba(0,0,0,0.9)]" />

            {/* Overlay for darkening/stacking (driven by GSAP) */}
            <div
              className="card-overlay pointer-events-none absolute inset-0 bg-black"
              style={{
                mixBlendMode: "multiply",
                opacity: "var(--overlay-opacity, 0)",
                transition: "opacity 0.3s linear",
              }}
            />

            {/* Left column: index, label, and hero text */}
            <div className="relative z-10 flex w-7/12 flex-col justify-center gap-8 px-14 py-14">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {card.label ?? "Overview"}
              </div>
              <div className="space-y-5">
                <div className="text-8xl font-semibold leading-none tracking-tight text-zinc-800 sm:text-9xl">
                  {String(card.index).padStart(2, "0")}
                </div>
                <h2 className="text-balance text-6xl font-semibold tracking-tight text-zinc-950 sm:text-7xl md:text-8xl">
                  {card.title}
                </h2>
              </div>
              <p className="mt-10 max-w-3xl text-[2.75rem] leading-relaxed text-zinc-700">
                {card.description}
              </p>
            </div>

            {/* Right column: supporting image */}
            <div className="relative z-10 flex w-5/12 items-center px-10 py-10">
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-[0_18px_70px_rgba(15,23,42,0.22)] w-full">
                <div className="relative aspect-5/3 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    priority={card.index === 1}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};