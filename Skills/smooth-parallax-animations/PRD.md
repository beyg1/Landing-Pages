# Smooth Parallax Animations – Product Requirements Document (PRD)

## 1. Overview

This document defines the complete requirements for the `smooth-parallax-animations` project.

Goal: Enable any competent engineer or AI coding agent to recreate/clone this project using ONLY this PRD, without needing to inspect the existing implementation.

The final result is a reusable, production-ready smooth scrolling + parallax landing experience built with Next.js 16, TypeScript, Tailwind CSS, Framer Motion, and Lenis. It should feel cinematic, fluid, and modern, suitable as a hero/portfolio/landing page section or full page.

The implementation MUST:

- Match the architecture, aesthetics, and behavior defined here.
- Be fully typed, composable, and data-driven.
- Be easy to integrate into other Next.js projects.

---

## 2. Tech Stack (Locked)

The implementation MUST use the following stack and constraints:

- Framework: Next.js `16.x` (App Router).
- Language: TypeScript (strict, no `any` where avoidable).
- UI Library: React `19.x`.
- Styling: Tailwind CSS `3.x`.
- Animations: Framer Motion `12.x`.
- Smooth Scrolling: Lenis `1.x`.
- Compiler: React Compiler enabled.
- Tooling:
  - Biome for linting and formatting.
  - PostCSS + Tailwind pipeline as standard for Next.js.

Constraints:

- Use Tailwind for all styling (layout, spacing, colors, typography, etc.).
- Avoid additional styling frameworks (no MUI/Chakra/Bootstrap).
- No jQuery or DOM-manipulation libraries.
- Animations must be implemented with Framer Motion (and, where necessary, its scroll utilities).
- Lenis must be used for smooth scrolling (not CSS-only smooth scroll).

---

## 3. High-Level Experience

The page is a vertically scrolling, smooth, parallax-rich experience composed of multiple sections.

Key characteristics:

- Global smooth scroll via Lenis.
- Parallax behavior: foreground and background layers move at different speeds relative to scroll, creating depth.
- Sections showcase imagery and content in a cinematic way:
  - Hero with strong headline and subtle parallax background.
  - Two-column sections where text and visuals move at different speeds.
  - Mosaic / gallery section with multiple parallax layers and staggered animations.
- Responsive:
  - Desktop: immersive, multi-column, large visuals.
  - Tablet: adjusted layout but parallax preserved.
  - Mobile: simplified layout and reduced motion to maintain clarity and performance.

This is not a generic template; it is a specific, opinionated implementation that can be reused, customized via configuration, and trusted in production.

---

## 4. Project Structure

The project root should contain (relevant parts):

- `app/`
  - `layout.tsx`
  - `page.tsx`
- `components/`
  - `smoth-scroll/` (keep this exact folder name if mirroring existing repo; otherwise `smooth-scroll/` is acceptable but must be consistent)
    - `ParallaxPage.tsx` (or `Home.tsx`): top-level page composition.
    - `ParallaxSection.tsx`
    - `ParallaxColumns.tsx` (or `Column.tsx`)
    - `ParallaxMediaItem.tsx` (for images/blocks)
- `constants/`
  - `parallax.ts`
- `types/`
  - `parallax.ts`
- `styles/`
  - `globals.css`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `tsconfig.json`
- `package.json`

The exact filenames can vary slightly, but:

- There MUST be a clear separation of:
  - Page composition.
  - Section layout.
  - Column layout.
  - Media/layer rendering.
  - Configuration/data.

---

## 5. Data Model (Typed Configuration)

All content and parallax behavior MUST be driven by configuration objects, not hard-coded magic numbers in JSX.

Create `types/parallax.ts`:

```ts
export type ParallaxLayoutType = "full-bleed" | "two-column" | "mosaic";

export interface ParallaxLayerConfig {
  id: string;
  type: "image" | "block" | "text";
  src?: string;          // required if type === "image"
  content?: string;      // required if type === "text" or block label
  speed: number;         // parallax intensity multiplier (positive or negative)
  className?: string;    // Tailwind classes for sizing/positioning
  initialOpacity?: number;
  maxTranslate?: number; // optional cap for translateY
}

export interface ParallaxSectionConfig {
  id: string;
  layout: ParallaxLayoutType;
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string; // Tailwind-compatible (e.g. "bg-secondry")
  textColor?: string;       // e.g. "text-primary"
  align?: "left" | "right" | "center";
  layers: ParallaxLayerConfig[];
}
```

Create `constants/parallax.ts` with example sections:

- Hero section:
  - Large title and subtitle.
  - 1–2 background image layers with slow parallax.
- Two or more feature sections:
  - Two-column layout: text column + parallax image column.
  - Different `speed` values to showcase depth.
- Mosaic/gallery:
  - Multiple image tiles each with their own `speed`.
  - Visually rich, cinematic.

Example configuration:

```ts
import { ParallaxSectionConfig } from "@/types/parallax";

export const PARALLAX_SECTIONS: ParallaxSectionConfig[] = [
  {
    id: "hero",
    layout: "full-bleed",
    title: "Smooth Parallax Experience",
    subtitle: "Cinematic scroll, effortless depth.",
    backgroundColor: "bg-secondry",
    textColor: "text-primary",
    align: "center",
    layers: [
      {
        id: "hero-bg",
        type: "image",
        src: "/1.jpg",
        speed: 0.15,
        className: "absolute inset-0 object-cover opacity-60",
      },
      {
        id: "hero-fg",
        type: "text",
        content: "Scroll to explore",
        speed: 0.4,
        className: "text-sm uppercase tracking-[0.2em] mt-6 opacity-80",
      },
    ],
  },
  {
    id: "feature-1",
    layout: "two-column",
    title: "Feature One",
    subtitle: "Discover the power of smooth animations",
    description: "Our parallax effects create depth and engagement, making your content come alive as users scroll.",
    backgroundColor: "bg-secondry",
    textColor: "text-primary",
    align: "left",
    layers: [
      {
        id: "feature-1-img",
        type: "image",
        src: "/2.jpg",
        speed: -0.2,
        className: "w-full h-96 object-cover rounded-lg",
      },
    ],
  },
  {
    id: "feature-2",
    layout: "two-column",
    title: "Feature Two",
    subtitle: "Optimized for performance",
    description: "Built with modern web technologies to ensure smooth scrolling and animations across all devices.",
    backgroundColor: "bg-secondry",
    textColor: "text-primary",
    align: "right",
    layers: [
      {
        id: "feature-2-img",
        type: "image",
        src: "/3.jpg",
        speed: 0.25,
        className: "w-full h-96 object-cover rounded-lg",
      },
    ],
  },
  {
    id: "gallery",
    layout: "mosaic",
    title: "Gallery",
    subtitle: "A collection of moments",
    backgroundColor: "bg-secondry",
    textColor: "text-primary",
    align: "center",
    layers: [
      {
        id: "gallery-1",
        type: "image",
        src: "/4.jpg",
        speed: 0.1,
        className: "w-full h-64 object-cover rounded-xl",
      },
      {
        id: "gallery-2",
        type: "image",
        src: "/5.jpg",
        speed: -0.15,
        className: "w-full h-64 object-cover rounded-xl",
      },
      {
        id: "gallery-3",
        type: "image",
        src: "/6.jpg",
        speed: 0.2,
        className: "w-full h-64 object-cover rounded-xl",
      },
      {
        id: "gallery-4",
        type: "image",
        src: "/7.jpg",
        speed: -0.1,
        className: "w-full h-64 object-cover rounded-xl",
      },
      {
        id: "gallery-5",
        type: "image",
        src: "/8.jpg",
        speed: 0.18,
        className: "w-full h-64 object-cover rounded-xl",
      },
      {
        id: "gallery-6",
        type: "image",
        src: "/9.jpg",
        speed: -0.12,
        className: "w-full h-64 object-cover rounded-xl",
      },
    ],
  },
];
```

The actual implementation MUST follow these patterns.

---

## 6. Components and Responsibilities

### 6.1 `app/page.tsx`

- Minimal.
- Imports and renders the top-level parallax page component.

Example:

```tsx
import ParallaxPage from "@/components/smoth-scroll/ParallaxPage";

export default function Page() {
  return <ParallaxPage />;
}
```

### 6.2 `ParallaxPage.tsx`

Responsibilities:

- Compose the entire page.
- Wrap content in a container that:
  - Applies global background and text colors.
  - Handles padding and max-width if desired.
- Map over `PARALLAX_SECTIONS` to render each via `ParallaxSection`.

Key requirements:

- No hard-coded section markup; use configuration.
- Provide consistent vertical spacing between sections.

### 6.3 `ParallaxSection.tsx`

Responsibilities:

- Render a section based on `ParallaxSectionConfig`.
- Handle different layouts:
  - `full-bleed`:
    - Content centered.
    - Background layers parallax behind.
  - `two-column`:
    - Text column (title/subtitle/description).
    - Visual column with parallax media items.
  - `mosaic`:
    - Grid of `ParallaxMediaItem`s each with independent parallax.
- Internally:
  - Use Framer Motion and a scroll-based hook to:
    - Compute scroll progress for this section.
    - Pass progress & config to each `ParallaxMediaItem`.

### 6.4 `ParallaxColumns.tsx` / `Column.tsx`

- Provide layout primitives for two-column sections.
- Encapsulate Tailwind grid/flex classes for consistent responsive behavior:
  - Desktop: `grid grid-cols-12 gap-6`
    - Text: `col-span-5`
    - Media: `col-span-7`
  - Tablet: stack or `grid-cols-6`.
  - Mobile: `grid-cols-1`, stack vertically.

### 6.5 `ParallaxMediaItem.tsx`

Responsibilities:

- Render image/text/block layers that move with parallax.
- Use Framer Motion `motion.div` or `motion.img`.
- Inputs:
  - `ParallaxLayerConfig`
  - `scrollProgress` or `sectionProgress`
- Behavior:
  - Compute `translateY` based on `speed` and progress.
  - Clamp movement if `maxTranslate` defined.
  - Apply `initialOpacity` and fade in if needed.

Example behavior (conceptual):

- `translateY = (scrollProgress - 0.5) * 2 * baseDistance * speed`
- `baseDistance` can be a fixed value (e.g., 80–160px) tuned for visuals.

---

## 7. Smooth Scroll Integration (Lenis)

Lenis MUST be wired globally so that:

- All scroll-driven animations (Framer Motion) are based on Lenis-controlled scroll values.
- Do not break Next.js rendering.

Implementation guidelines:

- Initialize Lenis in a client-only layout or provider.
- Use `requestAnimationFrame` loop to drive `lenis.raf(time)`.
- Ensure that scroll position used by Framer Motion reflects Lenis updates (for example, by using `useScroll` on a container that Lenis scrolls, or bridging values through a custom hook).

Example Lenis setup (in a client component or provider):

```tsx
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

Requirements:

- Scrolling feels:
  - Smooth, with easing.
  - Responsive to user input without noticeable lag.
- No infinite loops or memory leaks on route changes.

---

## 8. Animation Requirements (Framer Motion)

Use Framer Motion for:

- Section entrance animations:
  - Fade/slide in titles, subtitles, and key media.
- Parallax transforms:
  - Map scroll progress to `translateY`, `opacity`, and subtle `scale` when appropriate.
- Staggered reveals:
  - For mosaic/gallery items, animate them in sequence on enter.

Scroll Integration with Lenis:

To ensure Framer Motion animations are synchronized with Lenis smooth scrolling, create a custom hook that bridges the scroll values:

```tsx
import { useMotionValue, useEffect } from 'framer-motion';

export function useLenisScroll(lenis: any) { // lenis instance passed in
  const scrollY = useMotionValue(0);
  
  useEffect(() => {
    if (!lenis) return;
    
    const updateScroll = () => {
      scrollY.set(lenis.scroll);
    };
    
    lenis.on('scroll', updateScroll);
    return () => lenis.off('scroll', updateScroll);
  }, [lenis, scrollY]);
  
  return { scrollY };
}
```

Use this hook in components to get scroll-based transforms that work with Lenis.

Constraints:

- Avoid extreme transforms that break readability.
- Favor subtle, refined motion:
  - E.g., parallax range of ±40–120px on desktop.
- Respect performance:
  - Use `will-change: transform`.
  - Prefer transforms over expensive layout changes.

---

## 9. Styling System

Tailwind + design constraints:

- Colors:
  - Background: `#212121` (`bg-secondry`).
  - Foreground Text: `#f1f1f1` (`text-primary`).
- Layout:
  - Full-height hero: `min-h-screen flex items-center`.
  - Sections: `min-h-[80vh]` or `min-h-screen` with vertical padding.
- Examples:
  - Page wrapper:
    - `className="bg-secondry text-primary min-h-screen antialiased"`
  - Section container:
    - `className="relative max-w-6xl mx-auto px-4 py-24"`
  - Mosaic items:
    - `rounded-2xl overflow-hidden shadow-lg`

Typography:

- Hero title: large, bold.
- Subtitles: medium weight, muted.
- Body text: consistent and legible.

Hover/Interaction (if elements clickable):

- Use Tailwind transitions (`transition-transform`, `duration-300`, `hover:scale-[1.02]`, etc.).

---

## 10. Responsiveness & Motion Tuning

Desktop:

- Full expression of parallax effects.
- Multi-column layouts.

Tablet:

- Reduce intensity of parallax to avoid overwhelming smaller screens.
- Allow some layouts to collapse into more vertical structures.

Mobile:

- Single-column stacking.
- Reduced parallax range to minimize motion sickness and performance issues.
- Ensure text overlays do not overlap illegibly with imagery.

Optional (good practice):

- Support `prefers-reduced-motion`:
  - If detected, dramatically reduce or disable parallax and heavy animations.

---

## 11. Accessibility & SEO

Accessibility:

- Sufficient contrast (light text on dark background).
- Do not rely solely on motion to convey meaning.
- Avoid excessive motion; keep it smooth and controlled.
- Alt attributes on images where meaningful.

SEO / Semantics:

- Use semantic sections:
  - `<main>`, `<section>`, `<header>` where appropriate.
- Meaningful `<h1>` on hero, descending heading levels for sections.
- Ensure page renders meaningful content without JS animations.

---

## 12. Reusability & Configuration

The system MUST be reusable:

- All visible sections defined in `PARALLAX_SECTIONS`.
- To create a new page variant:
  - Edit/add section configs.
  - Do not change components’ internal logic.

Components API expectations:

- `ParallaxPage`:
  - Reads `PARALLAX_SECTIONS` and renders sections in order.
- `ParallaxSection`:
  - Accepts `section: ParallaxSectionConfig`.
- `ParallaxMediaItem`:
  - Accepts `layer: ParallaxLayerConfig` and `progress`/`scrollY` mapping.

---

## 13. Acceptance Criteria (Clone-Ready)

A solution is considered successful if a coding agent, using only this PRD, can produce:

1. Functional Parallax Landing:
   - Next.js 16 App Router with React Compiler enabled.
   - TypeScript with no type errors.
   - Tailwind correctly configured.
   - Biome for linting and formatting.
   - Lenis integrated for smooth scrolling.
   - Framer Motion used for:
     - Scroll-linked parallax on layers.
     - Entrance/staggered animations.
   - Sections and layouts as described (hero, feature/two-column, mosaic/gallery).

2. Visual & UX:
   - Dark background (#212121) with light text (#f1f1f1).
   - Cinematic, modern aesthetic.
   - Clear hierarchy: hero → content sections → gallery/mosaic.
   - Smooth, fluid parallax; no jittery behavior.

3. Responsiveness:
   - Desktop: multi-column, rich parallax.
   - Tablet: balanced layout; no broken grids.
   - Mobile: stacked, readable, reduced motion.

4. Code Quality:
   - No runtime errors in the console.
   - No TypeScript build errors.
   - No broken imports or missing assets (when using documented paths).
   - Clean separation of concerns:
     - Config vs. layout vs. animation logic.

5. Reusability:
   - New parallax experiences can be defined solely by editing/adding `ParallaxSectionConfig` entries.
   - No need to alter core components for typical content changes.

If these criteria are met, this PRD has successfully enabled a faithful clone of the `smooth-parallax-animations` project.
