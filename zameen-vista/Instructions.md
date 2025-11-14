Instructions.md — Step-by-step instructions for the agent (Next.js + Tailwind + TypeScript, use Context7 MCP)

Important: The agent must use Context7 MCP (Model Context Protocol) for accurate, high-quality code generation by referencing official docs (Next.js 16 App Router, Tailwind CSS v4, TypeScript 5, Lenis v1.3+, Lucide React, and any other chosen libraries) at every step. For each code snippet or dependency added, consult the official docs and follow recommended usage and configuration. Explicitly record in commit messages or PR notes the official doc URLs used for each library (e.g., Next.js docs, Tailwind CSS docs, Lenis docs).

Overview of steps (Next.js 16 + Tailwind v4 + TypeScript)

Project scaffolding with Next.js 16 App Router (React 19, TypeScript 5, Tailwind v4, pnpm)

Advanced design system with fluid typography, custom color tokens, and animation utilities

Component architecture with reusable sections, custom hooks (useReveal, useLenisInstance), and context providers

Sophisticated styling with Tailwind v4 inline theme, clamp-based responsive typography, and advanced animations

Lenis smooth scrolling integration with manual RAF control and programmatic navigation

Next.js Image optimization with Unsplash placeholders, parallax effects, and reveal animations

Contact form with API routes, form validation, state management, and multiple contact methods

Auto-scrolling testimonials carousel with star ratings, hover effects, and accessibility features

Comprehensive SEO, accessibility (WCAG 2.1 AA), and performance optimizations

Testing, QA, and production deployment

Detailed step-by-step instructions (agent workflow)

1) Project scaffolding (Next.js 16 + Tailwind v4 + TypeScript + pnpm)

- Use pnpm and Next.js 16 App Router with React 19, TypeScript 5, and Tailwind CSS v4 (match existing project structure).
- If scaffolding from scratch, run:
  - pnpm create next-app zameen-vista --typescript --tailwind --eslint --app
- Ensure the following:
  - App Router enabled with src/app directory (layout.tsx, page.tsx, components in _components/).
  - TypeScript configured via tsconfig.json with strict settings.
  - Tailwind CSS v4 with inline @theme configuration in globals.css and PostCSS v4 setup.
  - Package.json dependencies: next@16.0.2, react@19.2.0, tailwindcss@^4, lenis@^1.3.15, lucide-react@^0.553.0.

Context7 MCP step:
- Before adding dependencies, fetch official instructions via:
  - Next.js docs: /vercel/next.js (App Router, Image, Metadata APIs)
  - Tailwind CSS docs: /tailwindlabs/tailwindcss.com (v4 inline theme configuration)
  - Lenis docs: /studio-freight/lenis (React integration, manual RAF control)
- Record commands and URLs used in development notes and commit messages.

2) Advanced design system setup

- Font setup: Use Next.js font optimization for Playfair Display (display) and Inter (sans).
  - In layout.tsx: import { Playfair_Display, Inter } from 'next/font/google'
  - Configure with variable names and apply via CSS variables.
- Color tokens: Define in globals.css using Tailwind v4 inline @theme configuration:
  - --color-curtain-dark: #0f172a
  - --color-curtain-light: #fff9f1
  - --color-accent: #06b6d4
- Curate 10+ Unsplash images with optimized parameters:
  - Hero: Pakistani architecture/modern buildings (https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=2000&q=80)
  - Listings: Residential/commercial properties (?auto=format&fit=crop&w=800&q=80)
  - Testimonials: Professional avatars (?auto=format&fit=crop&w=150&q=80)
  - Query params: ?auto=format&fit=crop&w=800&q=80 for listings, w=2000 for hero, w=150 for avatars

Context7 MCP step:
- Verify Next.js font optimization via /vercel/next.js
- Confirm Tailwind v4 theme configuration via /tailwindlabs/tailwindcss.com
- Check Unsplash API guidelines and optimization parameters.

3) Component architecture & layout structure

- Create src/app/_components/ directory for all section components
- Implement custom hooks: useReveal, useLenisInstance
- Set up layout.tsx with fonts, metadata, JSON-LD, and SmoothScrollProvider
- Structure page.tsx with all section components in logical order
- Use semantic HTML landmarks: main, section with descriptive IDs
- Ensure TypeScript strict typing across all components

Context7 MCP step:
- Verify Next.js App Router patterns and component organization via /vercel/next.js
- Confirm semantic HTML accessibility standards

4) Advanced Tailwind v4 styling implementation

- Configure inline @theme in globals.css with CSS custom properties
- Implement fluid typography using clamp() for responsive text scaling
- Create custom animations: scroll-rtl carousel, fadeInUp, float orbs
- Use advanced gradients: linear-to-r, linear-to-br with multiple color stops
- Apply backdrop-blur and glass morphism effects
- Implement hover micro-interactions: scale, border changes, glow effects

Context7 MCP step:
- Reference Tailwind CSS v4 documentation for inline theme configuration
- Verify clamp() and advanced animation patterns

💅 4.1. Advanced styling & animations (Tailwind v4 + Next.js)

Tailwind v4 Configuration (inline theme):

- In globals.css, use @theme inline:

:root {
  --curtain-dark: #0f172a;
  --curtain-light: #fff9f1;
  --accent: #06b6d4;
}

@theme inline {
  --color-curtain-dark: var(--curtain-dark);
  --color-curtain-light: var(--curtain-light);
  --color-accent: var(--accent);
  --font-display: var(--font-playfair);
  --font-sans: var(--font-inter);
}

- Fluid typography using clamp(): text-[clamp(3rem,8vw,7rem)] for hero headings
- Custom animations in globals.css: @keyframes scroll-rtl, fadeInUp, float
- Advanced gradients: bg-linear-to-r from-accent to-blue-400
- Section alternation: bg-curtain-dark text-white / bg-curtain-light text-slate-900
🌀 5. Lenis smooth scrolling with manual RAF control

- Create src/app/_components/smooth-scroll-provider.tsx as a client component
- Implement context API for programmatic scrolling access
- Use manual requestAnimationFrame loop for full control
- Configure Lenis with tuned options: duration: 1.2, custom easing function
- Export useLenisInstance hook for component access
- Wrap layout content with SmoothScrollProvider
- Enable anchor-based smooth scrolling to sections

Context7 MCP Action:
- Verify Lenis React integration and manual RAF pattern via /studio-freight/lenis

🖼️ 6. Next.js Image optimization & reveal animations

- Create src/app/_components/use-reveal.tsx hook using IntersectionObserver with configurable threshold (default 0.1)
- Configure threshold: 0.1 for hero (immediate reveal), 0.2 for sections (staggered reveal)
- Implement parallax scaling for hero background image (scale-[2] to scale-100 on reveal)
- Use Next.js Image with priority={true} for hero, responsive sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" for listings
- Apply reveal animations: opacity-0 translate-y-8/translate-x-16 to opacity-100 translate-y-0/translate-x-0
- Stagger animations with configurable delays (200-500ms) and transitionDelay for cards

Context7 MCP Action:
- Verify Next.js Image optimization patterns via /vercel/next.js
- Confirm IntersectionObserver API usage and performance best practices

🧾 7. Contact form with API integration

- Create src/app/api/contact/route.ts with POST handler and TypeScript types
- Implement form validation: required fields, email regex, phone pattern, TypeScript FormState interface
- Add contact section with form fields: name (autocomplete="name"), email (autocomplete="email"), phone (autocomplete="tel"), service select (buy/sell/rent/valuation), message (textarea)
- Include multiple contact methods: phone (+92 300 1234567 tap-to-call), WhatsApp (wa.me/923001234567), email (info@zameenvista.com), office address (Blue Area, Islamabad)
- Add business hours display (Mon-Fri 9AM-6PM, Sat 10AM-4PM, Sun Closed) and success/error state management
- Use form state with loading states ("Sending..."), user feedback, and form reset on success

Context7 MCP Action:
- Verify Next.js Route Handlers API via /vercel/next.js

💬 8. Auto-scrolling testimonials carousel

- Create testimonials section with 10 testimonials (real names, cities, professional roles) including ratings (4.5-5 stars)
- Implement auto-scrolling horizontal carousel with CSS animations (animate-scroll-rtl 15s linear infinite)
- Add hover pause functionality (animation-play-state: paused) and seamless loop with duplicate slides
- Include star ratings with half-star support using Star icons and aria-label for accessibility
- Add bottom stats section with animated counters (10,000+ Happy Clients, 5,000+ Properties Sold, etc.)
- Ensure keyboard navigation (focusable cards) and screen reader support (aria-label, role="img")

Context7 MCP Action:
- Verify WAI-ARIA carousel patterns for accessibility compliance

🧠 9. Comprehensive SEO, accessibility & performance

- SEO: Complete metadata setup with title, description, keywords, OpenGraph, Twitter cards
- Structured data: JSON-LD for Organization schema with contact details
- Accessibility: WCAG 2.1 AA compliance with semantic landmarks, ARIA labels, color contrast (>=4.5:1), keyboard navigation
- Performance: Next.js Image optimization, Tailwind v4, App Router streaming, Lighthouse >=90 targets
- Analytics: GA4 placeholder integration with environment variables

Context7 MCP Action:
- Verify Next.js Metadata API and structured data implementation via /vercel/next.js
- Confirm accessibility patterns and Lighthouse optimization techniques