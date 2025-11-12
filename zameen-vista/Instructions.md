Instructions.md — Step-by-step instructions for the agent (Next.js + Tailwind + TypeScript, use Context7 MCP)

Important: The agent must use Context7 MCP (Model Context Protocol) for accurate, high-quality code generation by referencing official docs (Next.js App Router, Tailwind CSS, TypeScript, Lenis, Unsplash, Google Fonts, and any other chosen libraries) at every step. For each code snippet or dependency added, consult the official docs and follow recommended usage and configuration. Explicitly record in commit messages or PR notes the official doc URLs used for each library (e.g., Next.js docs, Tailwind CSS docs, Lenis docs).

Overview of steps (Next.js + Tailwind + TypeScript)

Project scaffolding with Next.js App Router (TypeScript, Tailwind, pnpm)

Design tokens & assets (fonts, colors) in Tailwind config and globals.css

Layout and section structure via Next.js App Router components

Styling with Tailwind utility classes

Integrate Lenis for smooth scroll and curtain effect via a Next.js client component

Add Unsplash image placeholders with lazy loading and image load animations

Implement contact form with validation, optional reCAPTCHA placeholder, and analytics hooks

Add testimonials carousel (accessible, keyboard and screen reader friendly)

Accessibility, SEO, and performance optimizations using Next.js features

Testing, QA, and delivery

Detailed step-by-step instructions (agent workflow)

1) Project scaffolding (Next.js + Tailwind + TypeScript + pnpm)

- Use pnpm and Next.js App Router with TypeScript and Tailwind CSS (match existing project where already set up).
- If scaffolding from scratch, run:
  - pnpm create next-app zameenvista-landing --typescript --tailwind --eslint
- Ensure the following:
  - App Router enabled with src/app directory (layout and pages under src/app).
  - TypeScript configured via tsconfig.json.
  - Tailwind CSS configured with content paths including src/app and src/components.
  - PostCSS and Tailwind configs follow official Tailwind CSS Next.js guide.

Context7 MCP step:
- Before adding or updating dependencies (Next.js, Tailwind CSS, Lenis, analytics libs), fetch official instructions via:
  - Next.js docs: /vercel/next.js
  - Tailwind CSS docs: /tailwindlabs/tailwindcss.com
  - Lenis docs (smooth scrolling): official @studio-freight/lenis documentation
- Record commands and URLs used in development notes and commit messages.

2) Design tokens & assets

- Choose fonts: one display (e.g., Playfair Display or Cormorant Garamond) and one UI sans (e.g., Inter, Manrope).
  - Add via:
    - Next.js font optimization (next/font) where suitable, or
    - Google Fonts link tag in src/app/layout.tsx metadata or head.
- Define core colors in Tailwind config instead of :root only:
  - curtainDark, curtainLight, accent, neutrals.
- Curate 6–8 Unsplash images as placeholders (hero, featured listings, testimonial avatars).
  - Follow Unsplash official guidelines for hotlinking, attribution, and query params.
  - Example pattern:

https://images.unsplash.com/photo-XXXXXXXXX?auto=format&fit=crop&w=1600&q=80

Context7 MCP step:
- Use Unsplash docs via Context7 MCP to confirm best practices for URLs, caching, attribution, and query params.

3) Layout & structure with Next.js App Router

- Use semantic HTML within React components, rendered via App Router:
  - src/app/layout.tsx: shared HTML shell, metadata, fonts, and global providers.
  - src/app/page.tsx: main landing page composition.
- Define sections as React components (e.g., src/app/_components or src/components):
  - HeroSection (id="hero")
  - ServicesSection (id="services")
  - FeaturedListingsSection (id="featured")
  - TestimonialsSection (id="testimonials")
  - ContactSection (id="contact")
- Compose in page.tsx:
  - <main>
    <HeroSection />
    <ServicesSection />
    <FeaturedListingsSection />
    <TestimonialsSection />
    <ContactSection />
  </main>

Context7 MCP step:
- Verify semantic HTML and landmark usage via MDN docs.
- Ensure Next.js layout/page structure follows official Next.js App Router documentation.

4) Styling with Tailwind CSS

- Tailwind is required for this project.
- Follow official Tailwind + Next.js App Router guide:
  - Configure content to include:
    - "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    - "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
- Extend theme with brand tokens:
  - colors: curtainDark, curtainLight, accent
  - fontFamily: display, sans
- Use Tailwind utilities in JSX (no plain CSS unless necessary).
- Implement two background color blocks with utilities:
  - bg-curtainDark text-white
  - bg-curtainLight text-slate-900
  - Alternate these across sections to create curtain effect.
- Use fluid type via clamp in Tailwind (e.g., text-[clamp(2.5rem,6vw,5rem)]) or via Tailwind plugins if desired.

Context7 MCP step:
- Reference Tailwind CSS official docs for configuration, theme extension, and usage with Next.js.
- Reference MDN for clamp and responsive typography patterns where needed.

💅 4.1. Styling & Animations (Next.js + Tailwind)

Tailwind Configuration (example):

- In tailwind.config.(js|ts):

theme: {
  extend: {
    colors: {
      curtainDark: '#0f172a',
      curtainLight: '#fff9f1',
      accent: '#06b6d4',
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
}

- Apply via classNames directly in React components.
Typography:
h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-family: 'Playfair Display', serif;
  line-height: 1.1;
}
Section Alternation:

Alternate using Tailwind utilities:

<section className="bg-curtainDark text-white">...</section>
<section className="bg-curtainLight text-slate-900">...</section>
🌀 5. Smooth Scrolling with Lenis (Next.js client component)

- Install Lenis using pnpm after confirming official docs via Context7 MCP.
- Implement Lenis in a dedicated client component to avoid SSR issues, for example:

"Use a file like"
- src/app/_components/smooth-scroll-provider.tsx

Use pattern:

"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  return children;
}

- Wrap the main layout content with this provider in layout.tsx.

Context7 MCP Action:
- Verify correct Lenis setup and React usage via the official @studio-freight/lenis documentation.

🖼️ 6. Lazy Loading & Image Animations (Next.js Image)

- Use Next.js Image component for optimized loading by default.
- For reveal animations, use IntersectionObserver in a small client component hook (e.g., useReveal) that:
  - Observes elements and toggles a Tailwind class (e.g., opacity-0 translate-y-2 to opacity-100 translate-y-0).
- Keep animations using transform and opacity only for performance.

Context7 MCP Action:
- Cross-check IntersectionObserver and performance best practices on MDN.
- Verify Next.js Image usage in the official Next.js documentation.

🧾 7. Contact Form Integration (Next.js)

- Implement the contact form as a Client Component (e.g., ContactSection).
- Fields:
  - Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Message (required)
  - Service interest (select or radio; Buy/Sell/Rent/Consultation)
- Submission:
  - Post to a configurable endpoint:
    - Option A: Next.js API Route (e.g., /api/contact).
    - Option B: External serverless function URL.
  - Show success and error states in-UI (no alert).
- Validation:
  - Basic client-side validation using TypeScript-safe form handlers.
  - Placeholder hook for reCAPTCHA v3 or similar (do not hard-code keys).

Context7 MCP Action:
- Reference Next.js official API routes / Route Handlers docs.
- Review official reCAPTCHA docs if/when integrating spam protection.

💬 8. Testimonials Section

- Implement as:
  - A simple grid or minimal carousel.
  - Keyboard-navigable and screen reader friendly.
- Each testimonial:
  - Quote, name, city; optional avatar from Unsplash.
- If using a carousel:
  - Follow WAI-ARIA Authoring Practices (roles, aria-live where appropriate).
  - Keep JS lightweight and encapsulated in a Client Component.

Context7 MCP Action:
- Consult WAI-ARIA Authoring Practices for carousels via official resources.

🧠 9. Accessibility, SEO & Analytics (Next.js)

- Accessibility:
  - Use semantic landmarks (header, main, section, footer).
  - Ensure focus styles, color contrast, and ARIA where needed.
- SEO & Metadata:
  - Use Next.js Metadata API in layout.tsx for:
    - title, description, Open Graph, Twitter cards, canonical URL.
  - Add JSON-LD via Next.js head if needed (Organization, WebPage).
- Analytics:
  - Integrate GA4 or equivalent via Next.js (e.g., script in layout or a dedicated Analytics component).
  - Track:
    - Hero CTA clicks
    - Contact form submissions
    - Listing card clicks
    - Phone tap-to-call
    - WhatsApp link taps

Context7 MCP Action:
- Reference Next.js official docs for Metadata, Script, and analytics integration.
- Validate SEO and accessibility via Lighthouse or axe DevTools.