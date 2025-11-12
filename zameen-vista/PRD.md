PRD.md — Product Requirements Document
Project Overview

Project name: Zameen Vista (placeholder)

Technology stack:
- Next.js App Router (React, TypeScript) with src/app structure
- Tailwind CSS for utility-first styling
- Lenis for smooth scrolling
- pnpm for dependency management
- Next.js Image and Metadata APIs for performance and SEO
- Optional: MDX support and analytics integrations as needed

Purpose: Create a modern, high-converting landing page for a Pakistani real-estate website offering: Buying & Selling (Plots, Houses, Flats, Shops) and Renting (Plots, Houses, Flats, Shops). The page must be visually striking, fast, accessible, and easy to maintain. It is implemented as a Next.js single-scroll landing experience using App Router, composed from modular React components, with smooth scrolling via Lenis and a curtain effect achieved by alternating contrasting background colors on adjacent sections.

Target audience: Home buyers, sellers, landlords, tenants, and real-estate agents in Pakistan (urban and suburban). Primary languages: English (primary deliverable) with later i18n for Urdu.

Primary goals:

Convert visitors into leads (contact forms, phone calls, WhatsApp links).

Present service categories clearly (Buy, Sell, Rent).

Showcase featured listings or properties to generate trust.

Capture testimonials to build credibility.

Provide frictionless contact options.

Page Structure (sections)

The page is a single Next.js App Router page (src/app/page.tsx) structured as 5 major sections arranged vertically, implemented as reusable React components:

Hero — Bold headline, large background image, quick service filter, primary CTA (Search/List Property), animated entrance.

Services — Four clear service cards (Buying, Selling, Renting, Valuation/Consultation) with icons, brief copy, and CTAs.

Featured Listings (professional extra section) — Carousel or grid of high-quality property cards (image, short meta, price, CTA). Images are Unsplash placeholders until real images are provided.

Testimonials — Rotating/revealing quotes from satisfied customers (with photos or initials), with subtle micro-animations.

Contact Us — Short contact form (Name, Phone, Email, Message, Service interest), WhatsApp quick link, phone tap-to-call on mobile, office address and map embed placeholder.

Note on section backgrounds: Sections should alternate between two contrasting background colors (e.g., deep indigo and off-white / cream) to create a curtain-like effect on scroll with Lenis smoothing.

Functional Requirements

Smooth scroll on all devices through Lenis with natural easing and section snap feel (but not forced snap). Lenis must be integrated following official documentation in a dedicated Next.js client component (e.g., SmoothScrollProvider) used in layout.tsx or page.tsx.

Section background contrast: adjacent sections use contrasting colors to produce a curtain/striped effect when scrolling.

Responsive design (desktop/tablet/mobile). Hero hero copy scales up on desktop; cards stack on mobile.

Images are high-quality Unsplash placeholders; use ?auto=format&fit=crop&w=...&q=... query params for optimized delivery.

Lazy loading + image load animations (fade + scale) using IntersectionObserver.

Two CTAs in Hero: "Search properties" and "List a property". Sticky header with CTA on scroll.

Contact form posts to a configurable endpoint (Netlify Functions / serverless or API URL). Include client-side validation and reCAPTCHA v3 support placeholder.

SEO friendly: semantic HTML, meta tags, Open Graph tags, structured data (JSON-LD for Organization and WebPage). Social preview image placeholder.

Performance: Lighthouse target >= 90 mobile & desktop; leverage Next.js optimizations (Next/Image for responsive images, App Router streaming where appropriate, automatic code splitting, Tailwind JIT utilities). Avoid unnecessary client-side JS; prefer Server Components where possible and use Client Components only where interactivity is required.

Accessibility: WCAG 2.1 AA (keyboard focus states, alt text, ARIA labels, color contrast >= 4.5:1 for body text).

Non-Functional Requirements

Code quality: follow Context7 MCP for accurate and high-quality code generation (see Instructions.md). All generated code must be referenced against official library docs before inclusion. Use TypeScript across all Next.js components for type safety (including props and shared types).

Maintainability: Tailwind CSS utility-first approach for styling via globals.css and component-level classNames. Use modular React components for hero, services, featured listing cards, testimonials, and contact form, grouped under src/app and/or src/components for clear separation of concerns.

Browser support: evergreen browsers + Safari iOS (last 2 major versions). Progressive enhancement for JS features. Ensure smooth behavior with Next.js hydration and Lenis integration on both desktop and mobile.

Analytics: Google Analytics / GA4 or Matomo placeholder, Hotjar / FullStory optional.

Security: sanitize inputs server-side; use HTTPS for all endpoints.

Visual & UX Requirements

Typography: large, eye-catching headings (display scale), stylish font pair (one display font + one readable sans-serif). Use Google Fonts.

Animations: entrance animations for sections (staggered), image load animations, subtle hover micro-interactions for cards. Keep animations performant (use transform and opacity only).

Colors: two contrasting background palettes. Example palettes (replaceable):

Palette A (Dark curtain): Indigo 900 (#0f172a) or Deep Navy.

Palette B (Light curtain): Warm Cream (#FFF9F1) or Off-white.

Accent: Vibrant Teal (#06B6D4) or Marigold (#F59E0B) for CTAs.

Imagery: Unsplash curated photos for Pakistani architecture / urban scenes; overlay gradients where text sits on images for contrast.

Content Requirements

High-quality placeholder copy for headings and CTAs. Copy should feel premium and trustworthy. Example hero headline: "Find Your Next Home in Pakistan — Fast, Secure, Trusted." Subhead: "Buy, sell or rent properties with verified listings and expert support."

Service descriptions should be short (1–2 sentences) and benefit-led.

Testimonials must include attribution (name, city) and short 1–2 sentence quotes.

Analytics & Tracking

Add GA4 measurement ID placeholder via Next.js integration (e.g., script in layout.tsx or a dedicated analytics component).

Add events for: CTA clicks, contact submissions, listing clicks, phone taps, WhatsApp link taps, implemented using type-safe event helpers in a small analytics utility.

Testing & Acceptance Criteria

Page renders responsively on common breakpoints: 320px, 375px, 768px, 1024px, 1440px.

Lighthouse score >= 90 (mobile & desktop) for performance, accessibility, best practices, SEO.

Forms validate and submit to the configured endpoint; success state triggers an analytics event.

Smooth scroll via Lenis works on desktop and mobile without jank.

Curtain effect is visible: alternating backgrounds produce a clear contrast while scrolling.