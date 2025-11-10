🧭 Product Requirement Document (PRD)
Component: StickyCards
📘 Overview

The goal is to build a reusable, data-driven “Sticky Cards” scroll effect component inspired by award-winning interactive landing pages.
As the user scrolls, each card pins to the viewport, slightly scales down, rotates, and fades behind the next one using GSAP + ScrollTrigger animations.
Smooth scrolling should be handled via Lenis for a refined, fluid experience.

This component should be framework-agnostic within Next.js, fully reusable, and styled with Tailwind CSS (no plain CSS files).

We’re building a reusable, data-driven Sticky Cards scroll effect component in a Next.js + TypeScript + Tailwind CSS environment, using GSAP + ScrollTrigger for animations, and Lenis for smooth scrolling.

Two key issues to address explicitly:

Contrast & background visibility — Cards must visually stand out against the page background so animations (pinning, scaling, rotation, fade) are clearly perceivable.

Animation flow & correct exit/presence behaviour — When one card transitions out and the next transitions in:

The previous card must fade out / disappear (or fade to the background) so it does not linger.

The next card must reach full opacity and become the primary visual focus.

The stacking/pinning logic must avoid overlap artifacts where both cards remain partially visible in undesirable states.

Tech Stack

Next.js 16 (App Router)

TypeScript

Tailwind CSS

GSAP + ScrollTrigger

Lenis (React wrapper)

Component runs on client ("use client" directive if in app directory)

Component Architecture & Folder Structure
src/
  components/
    sticky-cards/
      StickyCards.tsx
      data.ts

Data Interface
export interface StickyCardData {
  index: number;
  title: string;
  image: string;
  description: string;
  label?: string; // Optional label for categorization
}
export const stickyCardsData: StickyCardData[] = [
  {
    index: 1,
    title: "Intelligent Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    description: "AI-driven systems that learn, adapt, and optimize mission-critical workflows in real time across your entire organization.",
    label: "Overview",
  },
  {
    index: 2,
    title: "Human + Machine Collaboration",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    description: "Orchestrate seamless collaboration between teams and autonomous agents to ship better ideas to production faster.",
    label: "Collaboration",
  },
  {
    index: 3,
    title: "Predictive Intelligence",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    description: "Continuously forecast risk, demand, and opportunity using streaming data and resilient ML pipelines.",
    label: "Signal",
  },
  {
    index: 4,
    title: "Real-Time Visibility",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    description: "Unify fragmented data into a single live surface so every decision is informed, auditable, and aligned.",
    label: "Clarity",
  },
];

UI / Layout Requirements
Section Structure

Intro Section — full screen, centered H1 (pre-cards)

Sticky Cards Section — this component sits here

Outro Section — full screen, centered H1 (post-cards)

Card Layout — Desktop

Each “card” occupies 100vh (full viewport height) inside the StickyCards section.

Two columns:

Left side: 7/12 width - large index number, title, description

Right side: 5/12 width - image container with 5:3 aspect ratio

Background / card container background must differ sufficiently from page background to ensure card visuals are readable and animations visible (see contrast section).

Card Layout — Mobile

On screens below 1024px width (lg breakpoint): stack left & right sections vertically.

- Left section (content): full width, centered content
- Right section (image): full width below content
- Image maintains 5:3 aspect ratio with responsive scaling
- Text sizes scale down appropriately for mobile readability

Responsive Breakpoints:
- Desktop (≥1024px): 7/12 + 5/12 layout
- Tablet/Mobile (≥768px <1024px): stacked layout with adjusted padding
- Mobile (<768px): stacked layout with compact spacing

Image Specifications:
- Aspect ratio: exactly 5:3 (1.6667:1)
- Container: rounded-3xl with border and shadow
- Responsive scaling: maintains aspect ratio across all screen sizes

Visual Styling (Tailwind)
Page & Cards Background / Contrast

Page background: bg-zinc-950 (dark theme).

Each card container: light background (bg-zinc-50) with subtle shadow effects to create high contrast against the dark page background, ensuring card boundary is clearly visible and animations are perceivable.

Within the card container:

Overlay pseudo-element (or Tailwind custom css variable) .card‐overlay with background: rgba(0,0,0,var(--overlay-opacity)). This overlay will increase opacity to fade the card out as it transitions.

Use utility classes: text-white, rounded-2xl, overflow-hidden, object-cover for images.

Use will-change: transform, opacity (via Tailwind will-change-transform or custom) for smoother animations.

Example Tailwind snippet:
<div class="sticky-card relative bg-zinc-50 text-zinc-950 flex h-screen will-change-transform">
  <div class="absolute inset-0 bg-zinc-50 shadow-[0_24px_120px_rgba(0,0,0,0.9)]" />
  <div class="card-overlay absolute inset-0 bg-black pointer-events-none"
       style="opacity: var(--overlay-opacity, 0); mix-blend-mode: multiply;" />
  <div class="relative z-10 flex w-7/12 flex-col justify-center gap-8 px-14 py-14">
    <div class="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
      <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      Overview
    </div>
    <div class="space-y-5">
      <div class="text-8xl font-semibold leading-none tracking-tight text-zinc-800">01</div>
      <h2 class="text-balance text-6xl font-semibold tracking-tight text-zinc-950">Title</h2>
    </div>
    <p class="mt-10 max-w-3xl text-3xl leading-relaxed text-zinc-700">Description text…</p>
  </div>
  <div class="relative z-10 flex w-5/12 items-center px-10 py-10">
    <div class="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-[0_18px_70px_rgba(15,23,42,0.22)] w-full">
      <div class="relative aspect-5/3 w-full">
        <img class="h-full w-full object-cover" src="/…" alt="Title" />
      </div>
    </div>
  </div>
</div>

Animation Requirements
Pinning & Sequence Logic

For each card (except the last one):

Use ScrollTrigger.create({ trigger: cardElement, start: "top top", end: "bottom top", pin: true, pinSpacing: false }).

This ensures the card pins when it reaches the top of the viewport and remains fixed until the pinned region ends, then unpins.

The last card should not be pinned (so scrolling continues naturally).

Within each pinned card’s lifetime, we trigger overlap/fade/exit behaviour when the next card begins to scroll into view (so we sync previous card’s exit with next card’s entry).

Fade-out + Transition Behaviour

For the exit of a card (as next enters): use a ScrollTrigger attached to the next card as the trigger element; within it animate the previous card’s properties.

Example logic:

const cards = gsap.utils.toArray(".sticky-card");
cards.forEach((card, i) => {
  if (i < cards.length-1) {
    const nextCard = cards[i+1];
    ScrollTrigger.create({
      trigger: nextCard,
      start: "top bottom", // when next enters from bottom
      end: "top top",
      scrub: true,
      onUpdate: self => {
        const progress = self.progress;
        gsap.set(card, {
          scale: gsap.utils.mapRange(0, 1, 1, 0.78, progress), // scales down to 0.78
          rotate: (i % 2 === 0 ? -6 : 6) * progress, // stronger alternate tilt (±6°)
        });
        gsap.set(card, {
          css: { "--overlay-opacity": progress }  // overlay fades in
        });
      }
    });
  }
});


The overlay CSS variable --overlay-opacity should animate from 0 → 1 as the card transitions out. At progress = 1, the overlay should be fully opaque (card effectively dark/hidden).

Meanwhile, the next card should be positioned at full opacity / scale until it becomes active, then gradually take over. Make sure initial state of next card is scale:1, rotate:0, --overlay-opacity:0.

Ensuring Previous Card Fully Exits & Next Card Fully Enters

Explicitly set previous card’s opacity (or overlay opacity to 1) at the end of the exit timeline to avoid lingering visuals.

Ensure next card has its own timeline or initial CSS such that at the start of its pinned period: opacity:1, scale:1, rotate:0, overlay = 0.

From GSAP forum threads: mixing pinning and fade timelines can be tricky; often it’s easier to separate concerns (one ScrollTrigger for pinning, another for fade/out) to avoid unintended “both cards visible” states. 
GSAP
+2
GSAP
+2

Use z-index stacking if needed: each card container should have z-index: X so that next card comes above previous when its pin begins.

Example Pin + Fade Setup
cards.forEach((card, i) => {
  const next = cards[i+1];
  if (!next) return;
  ScrollTrigger.create({
    trigger: next,
    start: "top bottom",
    end: "top top",
    scrub: true,
    pin: false,
    onUpdate: (self) => {
      const p = self.progress;
      gsap.set(card, {
        scale: gsap.utils.mapRange(0, 1, 1, 0.78, p),
        rotate: (i % 2 === 0 ? -6 : 6) * p,
      });
      gsap.set(card, {
        css: { "--overlay-opacity": p }
      });
    }
  });
});


And for pin:

cards.forEach((card, i) => {
  if (i < cards.length-1) {
    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      endTrigger: cards[i+1],
      end: "top top",
      pin: true,
      pinSpacing: false
    });
  }
});

Functional Requirements Summary
Feature	Requirement
Contrast & Visual Distinction	Cards have background that differs from page background; overlay mechanism ensures previous card fully fades.
Pinning & Flow	Each card (except last) pins when reaching viewport top, stays pinned until next card takeover, then unpins and fades.
Exit Animation	Previous card scales down, rotates (alternating), overlay fades in → full opacity in overlay = card visually hidden.
Entry Animation	Next card appears at full scale/opacity, no overlay, ready to become pinned.
Responsive	Layout adjusts for mobile; animations remain smooth.
Tailwind Styling	All styling via Tailwind (no external CSS files).
Reusable Component	Accepts data array, auto-renders N cards without per-card config.
Developer Notes & Tips

Use will-change: transform, opacity on card containers for smoother GPU animations.

For the overlay fade, managing via CSS variable ensures underlying content remains hidden (rather than simply setting opacity:0 which can cause underlying cards to show through).

Carefully manage z-index stacking: e.g., each card container z-10, z-20, etc so next card visually covers previous once pinned/unpinned sequence transitions.

Ensure ScrollTrigger’s start and end positions are well configured so that the fade animation covers exactly the period when next card enters — see docs regarding "top bottom", "top top" etc for accurate timing. 
GSAP
+1

Isolate the animation logic in useEffect or useGSAP() hook inside the StickyCards component, scoped via container useRef, to avoid multiple triggers across re-renders.

✅ Acceptance Criteria

 Page background and card backgrounds are visually distinct; cards clearly visible when static.

 On scroll through the cards section:

First card pins, then as next card enters: the first card scales down, rotates, overlay fades to full → it’s visually “gone”.

The second card reaches full scale/opacity, pins, becomes main card.

No ghosting or half-visible previous cards remain when they should have exited.

 The last card is not pinned, and on finishing the card sequence, normal scroll resumes.

 Works smoothly with Lenis smooth scrolling.

 Layout is fully responsive.

 TypeScript passes, no errors.

 All styling done via Tailwind CSS utilities or minimal custom CSS variables where needed.