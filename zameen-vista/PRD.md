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

Hero — Ultra-modern hero with parallax background image (Pakistani architecture from Unsplash), floating stats card showing 10K+ Active Listings, 500+ Expert Agents, and 100% Verified properties, animated gradient orbs, asymmetric layout with complex typography scaling (clamp-based responsive text), trust indicators with animated pulses, dual CTAs ("Search Properties" and "List a Property") with Lenis-powered smooth scrolling, hover gradient effects, and staggered entrance animations.

Services — Sophisticated bento-style grid layout with 5 service cards (Property Buying, Property Selling, Rental Services, Property Valuation, Agent Services) featuring hover gradient backgrounds with unique themes (blue-cyan, emerald-green, purple-pink, orange-red, indigo-violet), feature lists with CheckCircle2 icons ("Verified Listings", "Expert Marketing", etc.), prominent CTAs ("Browse Listings", "List Property", etc.), and a bottom custom solutions CTA banner. Each card has corner decorative elements with gradient orbs and backdrop-blur effects.

Featured Listings — Premium property showcase with 6 featured listings (Modern Villa in Islamabad, Luxury Apartment in Karachi, Commercial Plaza in Lahore, Farmhouse in Bahria Town, Sea View Apartment in Clifton, Corner Plot in DHA) in a responsive grid (md:2 cols, lg:3 cols), decorative background orbs with blur effects, featured/type badges ("Featured", "For Sale"/"For Rent"), detailed property cards with hover scale effects, price formatting (PKR format), property details (beds/baths/area) with Lucide icons (Bed, Bath, Maximize2), view buttons with ArrowRight icons, and corner glow effects on hover.

Testimonials — Auto-scrolling horizontal carousel (15s duration, pauses on hover) with 10 testimonials featuring star ratings (4.5-5 stars with half-star support), author profiles with Unsplash avatars, animated cards with hover effects (scale, border changes), gradient overlays, bottom stats section with animated counters (10,000+ Happy Clients, 5,000+ Properties Sold, 8,500+ 5-Star Reviews, 50+ Cities Covered), and seamless loop with duplicate slides for continuous scrolling.

Contact Us — Comprehensive contact section with form validation (required fields, email regex), contact information cards (phone tap-to-call +92 300 1234567, WhatsApp wa.me/923001234567, email info@zameenvista.com, office Blue Area Islamabad), business hours (Mon-Fri 9AM-6PM, Sat 10AM-4PM, Sun Closed), success/error states with user feedback, smooth animations, and multiple contact methods.

Note on section backgrounds: Sections should alternate between two contrasting background colors (e.g., deep indigo and off-white / cream) to create a curtain-like effect on scroll with Lenis smoothing.

Functional Requirements

Smooth scroll on all devices through Lenis with natural easing and section snap feel (but not forced snap). Lenis is integrated via a dedicated SmoothScrollProvider client component that manages a manual requestAnimationFrame loop for full control, with proper cleanup and context API for programmatic scrolling.

Section background contrast: alternating curtain-dark (#0f172a) and curtain-light (#fff9f1) backgrounds create a curtain effect with decorative gradient orbs and blur effects for visual depth.

Responsive design (desktop/tablet/mobile) with fluid typography using clamp() functions for scalable text (e.g., text-[clamp(3rem,8vw,7rem)]), cards adapt to grid layouts, and mobile-first approach with progressive enhancement.

Images are high-quality Unsplash placeholders with optimized query params (?auto=format&fit=crop&w=800&q=80 for listings, w=2000&q=80 for hero); Next.js Image component handles lazy loading, responsive sizing (sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"), priority loading for hero, and performance optimizations automatically.

Advanced animations: intersection observer-based reveal animations (useReveal hook with configurable thresholds 0.1-0.2) with staggered delays (200-500ms), parallax scaling effects on hero background (scale-100 to scale-[2]), floating gradient orbs with animate-pulse, hover micro-interactions on cards (hover:-translate-y-2, border-accent/30, glow effects), auto-scrolling testimonials carousel (animate-scroll-rtl 15s linear infinite, pauses on hover), and Lenis-powered smooth scroll-to navigation.

Hero CTAs: "Search Properties" (scrolls to #featured) and "List a Property" (scrolls to #contact) with Lenis-powered smooth scrolling, hover gradient effects (from-accent to-cyan-500), and custom SVG icons with transition animations.

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

Typography: Ultra-responsive fluid typography using clamp() functions for scalable headings (e.g., text-[clamp(3rem,8vw,7rem)]), Playfair Display (--font-playfair) for display text (serif) and Inter (--font-inter) for body text (sans-serif), loaded via Next.js font optimization with variable names.

Advanced Animations: IntersectionObserver-powered reveal animations (useReveal hook) with configurable thresholds (0.1-0.2) and staggered delays, parallax background scaling on hero (scale-[2] to scale-100), floating animated orbs with blur-3xl effects, auto-scrolling testimonials carousel (scroll-rtl 15s linear infinite) with hover pause, card hover effects (hover:-translate-y-2, border-accent/30, bg-accent/20), corner glow effects, and smooth Lenis-powered navigation. All animations use transform/opacity only for 60fps performance.

Color System: Two contrasting curtain backgrounds - curtain-dark (--color-curtain-dark: #0f172a, indigo-900) for dark sections and curtain-light (--color-curtain-light: #fff9f1, warm cream) for light sections, with accent color (--color-accent: #06b6d4, cyan-500) for CTAs and highlights. Decorative gradients use cyan, blue, purple, green, and orange-red variations.

Imagery: Curated Unsplash photos (hero: Pakistani architecture, listings: residential/commercial properties, testimonials: professional avatars) optimized with Next.js Image component, responsive sizing with priority loading for hero (priority={true}), optimized query parameters (?auto=format&fit=crop&w=800&q=80), sizes attributes for responsive loading, and multi-layer gradient overlays for text contrast and depth effects.

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