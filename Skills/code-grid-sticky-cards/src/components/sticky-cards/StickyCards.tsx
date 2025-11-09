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
      className={`relative bg-neutral-100 text-neutral-900 ${className ?? ""}`}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 py-24 sm:px-6 lg:px-8">
        {cards.map((card) => (
          <article
            key={card.index}
            data-sticky-card
            style={
              {
                "--overlay-opacity": 0,
              } as CSSProperties
            }
            className="relative flex min-h-screen items-center gap-10 border-b border-neutral-200 pb-24 will-change-transform last:border-b-0 bg-white"
          >
            {/* Overlay for darkening/stacking */}
            <div
              className="pointer-events-none absolute inset-4 rounded-3xl bg-black"
              style={{
                mixBlendMode: "multiply",
                opacity: "var(--overlay-opacity, 0)",
                transition: "opacity 0.2s linear",
              }}
            />

            {/* Index column */}
            <div className="relative flex-1 select-none text-5xl font-semibold tracking-tight text-neutral-300 sm:text-6xl md:text-7xl lg:text-8xl">
              {String(card.index).padStart(2, "0")}
            </div>

            {/* Content column */}
            <div className="relative flex-[2] space-y-6">
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                {card.title}
              </h2>

              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <div className="relative aspect-[5/3] w-full bg-neutral-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    priority={card.index === 1}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      const target = event.target as HTMLImageElement;
                      target.style.opacity = "0";
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                    Placeholder Imagery
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[120px,1fr]">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {card.label ?? "Overview"}
                </div>
                <p className="text-sm leading-relaxed text-neutral-800 md:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};