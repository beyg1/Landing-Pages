PRD.md — Product Requirements Document
Project Overview

Project name: Zameen Vista (placeholder)

Technology stack:
- Next.js 16 App Router (React 19, TypeScript 5) with src/app structure
- Tailwind CSS v4 with inline theme configuration and PostCSS v4
- Lenis v1.3+ for smooth scrolling with manual raf control
- Lucide React icons for consistent iconography
- pnpm for dependency management
- Next.js Image and Metadata APIs for performance and SEO
- Custom TypeScript utilities (useReveal hook, SmoothScrollProvider)
- JSON-LD structured data and comprehensive meta tags

Purpose: Create a modern, high-converting landing page for a Pakistani real-estate website offering: Buying & Selling (Plots, Houses, Flats, Shops) and Renting (Plots, Houses, Flats, Shops). The page must be visually striking, fast, accessible, and easy to maintain. It is implemented as a Next.js single-scroll landing experience using App Router, composed from modular React components, with smooth scrolling via Lenis and a curtain effect achieved by alternating contrasting background colors on adjacent sections.

Target audience: Home buyers, sellers, landlords, tenants, and real-estate agents in Pakistan (urban and suburban). Primary languages: English (primary deliverable) with later i18n for Urdu.

Primary goals:

Convert visitors into leads (contact forms, phone calls, WhatsApp links).

Present service categories clearly (Buy, Sell, Rent).

Showcase featured listings or properties to generate trust.

Capture testimonials to build credibility.

Provide frictionless contact options.

Page Structure (sections)

The page is a single Next.js App Router page (src/app/page.tsx) structured as 5 major sections arranged vertically, implemented as reusable React components with advanced animations and interactions:

Hero — Ultra-modern hero with parallax background image, floating stats card, animated gradient orbs, asymmetric layout with complex typography scaling (clamp-based responsive text), trust indicators with animated pulses, dual CTAs with hover effects, and staggered entrance animations.

Services — Sophisticated bento-style grid layout with 5 service cards (Buying, Selling, Renting, Valuation, Agent Services) featuring hover gradient backgrounds, feature lists with check icons, prominent CTAs, and a bottom custom solutions CTA banner. Each card has unique gradient themes and corner decorative elements.

Featured Listings — Premium property showcase with 6 featured listings in a responsive grid, decorative background orbs, featured/type badges, detailed property cards with hover effects, price formatting, property details (beds/baths/area) with icons, view buttons, and corner glow effects on hover.

Testimonials — Auto-scrolling horizontal carousel with 10 testimonials, star ratings (including half-stars), author profiles with avatars, animated cards with hover effects, gradient overlays, and bottom stats section with animated counters.

Contact Us — Comprehensive contact section with form validation, contact information cards (phone/WhatsApp/email/office), business hours, success/error states, smooth animations, and multiple contact methods.

Note on section backgrounds: Sections should alternate between two contrasting background colors (e.g., deep indigo and off-white / cream) to create a curtain-like effect on scroll with Lenis smoothing.

Functional Requirements

Smooth scroll on all devices through Lenis with natural easing and section snap feel (but not forced snap). Lenis is integrated via a dedicated SmoothScrollProvider client component that manages a manual requestAnimationFrame loop for full control, with proper cleanup and context API for programmatic scrolling.

Section background contrast: alternating curtain-dark (#0f172a) and curtain-light (#fff9f1) backgrounds create a curtain effect with decorative gradient orbs and blur effects for visual depth.

Responsive design (desktop/tablet/mobile) with fluid typography using clamp() functions for scalable text (e.g., text-[clamp(3rem,8vw,7rem)]), cards adapt to grid layouts, and mobile-first approach with progressive enhancement.

Images are high-quality Unsplash placeholders with optimized query params (?auto=format&fit=crop&w=...&q=...); Next.js Image component handles lazy loading, responsive sizing, and performance optimizations automatically.

Advanced animations: intersection observer-based reveal animations with staggered delays, parallax effects on hero background, floating gradient orbs, hover micro-interactions on cards (scale, border color, glow effects), auto-scrolling testimonials carousel (15s duration, pauses on hover), and smooth scroll-to navigation.

Hero CTAs: "Search Properties" and "List a Property" with Lenis-powered smooth scrolling to sections, hover gradient effects, and SVG icons with transition animations.

Contact form: POST to /api/contact endpoint with TypeScript validation, form state management, success/error displays, and structured data handling; includes WhatsApp, phone, and email contact methods with tap-to-call links.

SEO & Performance: Comprehensive metadata (title, description, keywords, OpenGraph, Twitter cards), JSON-LD structured data for Organization schema, semantic HTML landmarks, Lighthouse target >= 90 (achieved through Next.js Image optimization, App Router streaming, Tailwind v4, and minimal client-side JS).

Accessibility: WCAG 2.1 AA compliance with proper ARIA labels, keyboard navigation, color contrast ratios (>=4.5:1), focus states, alt text, semantic landmarks, and screen reader support.

Non-Functional Requirements

Code quality: follow Context7 MCP for accurate and high-quality code generation (see Instructions.md). All generated code must be referenced against official library docs before inclusion. Use TypeScript across all Next.js components for type safety (including props and shared types).

Maintainability: Tailwind CSS utility-first approach for styling via globals.css and component-level classNames. Use modular React components for hero, services, featured listing cards, testimonials, and contact form, grouped under src/app and/or src/components for clear separation of concerns.

Browser support: evergreen browsers + Safari iOS (last 2 major versions). Progressive enhancement for JS features. Ensure smooth behavior with Next.js hydration and Lenis integration on both desktop and mobile.

Analytics: Google Analytics / GA4 or Matomo placeholder, Hotjar / FullStory optional.

Security: sanitize inputs server-side; use HTTPS for all endpoints.

Visual & UX Requirements

Typography: Ultra-responsive fluid typography using clamp() functions for scalable headings (e.g., clamp(3rem, 8vw, 7rem)), Playfair Display for display text (serif) and Inter for body text (sans-serif), loaded via Next.js font optimization.

Advanced Animations: IntersectionObserver-powered reveal animations with configurable thresholds and staggered delays, parallax background scaling on hero, floating animated orbs with blur effects, auto-scrolling testimonials carousel with hover pause, card hover effects (scale, border changes, glow effects), and smooth Lenis-powered navigation. All animations use transform/opacity only for 60fps performance.

Color System: Two contrasting curtain backgrounds - curtain-dark (#0f172a, indigo-900) for dark sections and curtain-light (#fff9f1, warm cream) for light sections, with accent color (#06b6d4, cyan-500) for CTAs and highlights. Decorative gradients use cyan, blue, purple, and green variations.

Imagery: Curated Unsplash photos optimized with Next.js Image component, responsive sizing with priority loading for hero, optimized query parameters for performance, and gradient overlays for text contrast and depth effects.

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