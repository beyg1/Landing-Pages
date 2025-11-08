🧭 Product Requirement Document (PRD)
Component: StickyCards
📘 Overview

The goal is to build a reusable, data-driven “Sticky Cards” scroll effect component inspired by award-winning interactive landing pages.
As the user scrolls, each card pins to the viewport, slightly scales down, rotates, and fades behind the next one using GSAP + ScrollTrigger animations.
Smooth scrolling should be handled via Lenis for a refined, fluid experience.

This component should be framework-agnostic within Next.js, fully reusable, and styled with Tailwind CSS (no plain CSS files).

🧩 Tech Stack

Framework: Next.js 16 (App Router)

Language: TypeScript

Styling: Tailwind CSS

Animations: GSAP + ScrollTrigger

Smooth Scroll: Lenis (React wrapper)

Rendering: Client-side (must include "use client" directive)

🏗️ Component Architecture
1. Folder Structure
src/
  components/
    sticky-cards/
      StickyCards.tsx
      data.ts

2. Data-Driven Design

The component should map directly from a data array to automatically render multiple cards without manual setup.

Each card object should include:

export interface StickyCardData {
  index: number
  title: string
  image: string
  description: string
}


Example dataset (data.ts):

export const stickyCardsData: StickyCardData[] = [
  {
    index: 1,
    title: "Intelligent Automation",
    image: "/sticky-cards/automation.jpg",
    description: "AI-driven systems that learn, adapt, and optimize workflows in real time."
  },
  {
    index: 2,
    title: "Human + Machine Collaboration",
    image: "/sticky-cards/collaboration.jpg",
    description: "Seamless synergy between people and autonomous agents for faster innovation."
  },
  // ... more cards
]

🎨 UI / Layout Requirements
Section Structure

Three full-screen sections:

Intro Section (simple centered H1)

Sticky Cards Section (animated cards)

Outro Section (simple centered H1)

Card Layout (Desktop)

Each card takes up 100vh (full viewport height).

Left column: large index number (index)

Right column: contains

Title (h1)

Image (aspect ratio ~5:3, object-cover)

Description block split into:

Label (e.g., “Overview”)

Description text (from data)

Mobile Layout

Stack columns vertically

Reduce padding, gaps, and text sizes

Maintain readability and consistent rhythm

Visual Styling (Tailwind)

Dark background: bg-black

Foreground text: text-white

Strong contrast headings

Smooth spacing: space-y-*, gap-*, p-*

Rounded image corners: rounded-2xl

Overlay effect for fade-out handled via a Tailwind inline style using CSS variable (controlled by GSAP)

⚙️ Animation Requirements
ScrollTrigger Logic

Pin each card as it reaches the top of the viewport.

Do not pin the last card (to avoid layout freeze).

As the next card scrolls into view:

The previous card:

Scales down (to ~0.75)

Rotates slightly (odd/even alternating ±3°)

Dark overlay opacity increases (using CSS variable)

Use pinSpacing: false for tight stacking.

GSAP Setup

Register ScrollTrigger

Use useRef for container scope

Use useGSAP() hook for scoped animations

Use gsap.set() within onUpdate callback to modify:

scale

rotate

--overlay-opacity (CSS variable)

🧠 Smooth Scrolling Integration

On the home page (or layout), wrap content in <ReactLenis root> for global smooth scrolling.

Must not interfere with ScrollTrigger pinning.

Example:

import { ReactLenis } from 'lenis/react'

export default function HomePage() {
  return (
    <ReactLenis root>
      <main>
        <IntroSection />
        <StickyCards />
        <OutroSection />
      </main>
    </ReactLenis>
  )
}

🧩 Functional Requirements
Feature	Description
Dynamic Mapping	Automatically renders cards based on stickyCardsData
Pinning	Each card pins in place as you scroll
Scaling + Rotation	Active card scales down & rotates as next card enters
Dark Overlay Fade	Smooth fade-out effect using a black overlay layer
Responsive Layout	Fully adapts to mobile and tablet
Reusable Component	Plug-and-play ready for any project section
🧪 Developer Notes

The animation logic should be isolated within the StickyCards component.

Avoid direct DOM queries; use React refs and GSAP selectors scoped via context.

Avoid hard-coded color values — use Tailwind’s color variables or CSS custom properties.

The component must be SSR-safe ("use client" at top).

✅ Acceptance Criteria

 Component displays intro, sticky card section, and outro.

 Cards are pinned sequentially during scroll.

 Previous card scales down, rotates, and darkens as next enters.

 Animations are smooth and GPU-accelerated (use will-change: transform).

 Works seamlessly with Lenis smooth scrolling.

 Layout adapts perfectly across all screen sizes.

 All styles use Tailwind (no external CSS files).

 TypeScript passes without errors.

🧱 Example File Imports
import { stickyCardsData } from './data'
import { StickyCards } from './StickyCards'

<StickyCards cards={stickyCardsData} />