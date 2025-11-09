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
}
export const stickyCardsData: StickyCardData[] = [ /* … */ ];

UI / Layout Requirements
Section Structure

Intro Section — full screen, centered H1 (pre-cards)

Sticky Cards Section — this component sits here

Outro Section — full screen, centered H1 (post-cards)

Card Layout — Desktop

Each “card” occupies 100vh (full viewport height) inside the StickyCards section.

Two columns:

Left side: large index number

Right side: content column: title, image (5:3 aspect ratio), description block (label + text)

Background / card container background must differ sufficiently from page background to ensure card visuals are readable and animations visible (see contrast section).

Card Layout — Mobile

On screens below ~1000px width: stack left & right sections vertically.

Ensure text and image scale accordingly (Tailwind responsive classes) and maintain readability.

Visual Styling (Tailwind)
Page & Cards Background / Contrast

Page background: bg-zinc-900 (or bg-black) or other dark theme.

Each card container: distinct background from page background, e.g., a shade of white , to ensure card boundary is visible.

Within the card container:

Overlay pseudo-element (or Tailwind custom css variable) .card‐overlay with background: rgba(0,0,0,var(--overlay-opacity)). This overlay will increase opacity to fade the card out as it transitions.

Use utility classes: text-white, rounded-2xl, overflow-hidden, object-cover for images.

Use will-change: transform, opacity (via Tailwind will-change-transform or custom) for smoother animations.

Example Tailwind snippet:
<div class="sticky-card relative bg-zinc-800 text-white flex h-screen">
  <div class="absolute inset-0 pointer-events-none"
       style="--overlay-opacity:0; background:rgba(0,0,0,var(--overlay-opacity)); transition:opacity .3s;">
  </div>
  <div class="flex-none w-1/4 p-8 text-6xl font-bold">01</div>
  <div class="flex-1 p-8 space-y-8">
    <h2 class="text-4xl font-bold">Title</h2>
    <img class="w-full aspect-5/3 object-cover rounded-2xl" src="/…"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="uppercase font-bold">Overview</div>
      <div>Description text…</div>
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
          scale: 1 - 0.25*progress,               // scales down to ~0.75
          rotate: (i % 2 === 0 ? 3 : -3) * progress, // alternate tilt
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
        scale: 1 - 0.25*p,
        rotate: (i % 2 === 0 ? 3 : -3) * p,
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

