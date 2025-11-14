# Implementation Instructions for Smooth Parallax Animation

## Table of Contents
1. [Project Setup](#project-setup)
2. [Dependencies Installation](#dependencies-installation)
3. [Project Structure](#project-structure)
4. [Core Implementation](#core-implementation)
5. [Component Development](#component-development)
6. [Styling and Layout](#styling-and-layout)
7. [Testing and Validation](#testing-and-validation)
8. [Deployment](#deployment)

---

## Project Setup

### Step 1: Initialize Next.js Project

### Step 2: Install Required Dependencies

### Step 3: Configure TypeScript
Update `tsconfig.json` to ensure proper path mapping:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Project Structure

### Step 4: Create Directory Structure
```
smooth-parallax-animations/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── index.ts
│   └── smoth-scroll/
│       ├── Home.tsx
│       ├── Parallax.tsx
│       └── Column.tsx
├── constants/
│   └── index.ts
├── types/
│   └── index.ts
├── public/
│   ├── 1.jpg through 12.jpg
│   ├── favicon.ico
│   └── vercel.svg
├── styles/
│   └── globals.css
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

### Step 5: Create Type Definitions
Create `types/index.ts`:
```typescript
import { MotionValue } from "framer-motion";

export interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
}

export interface TparallaxProps {
  y: MotionValue;
  images: string[];
}

export interface ColumnProps {
  index: number;
  images: string[];
  speed: number;
}

export interface ImageProps {
  src: string;
  alt: string;
  speed: number;
}
```

### Step 6: Create Constants
Create `constants/index.ts`:
```typescript
export const images = [
   "1.jpg",
   "2.jpg",
   "3.jpg",
   "4.jpg",
   "5.jpg",
   "6.jpg",
   "7.jpg",
   "8.jpg",
   "9.jpg",
   "10.jpg",
   "11.jpg",
   "12.jpg",
];
```

---

## Core Implementation

### Step 7: Configure Next.js App Router
Update `app/layout.tsx`:
```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smooth Parallax Animations",
  description: "A showcase of smooth parallax scrolling animations using Framer Motion and Lenis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### Step 8: Configure Global Styles
Update `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #000000; /* Black hero section */
  color: #ffffff; /* White text */
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

/* Hide scrollbars for clean appearance */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #666;
}

/* Image loading optimization */
img {
  max-width: 100%;
  height: auto;
}

/* Smooth transitions for hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
```

### Step 9: Configure Tailwind CSS
Update `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f1f1f1",
        secondary: "#212121"
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Component Development

### Step 10: Create Component Exports
Update `components/index.ts`:
```typescript
export { default as SMHome } from './smoth-scroll/Home';
```

### Step 11: Implement Main App Page
Update `app/page.tsx`:
```typescript
import Home from '../components/smoth-scroll/Home';

export default function Page() {
  return <Home />;
}
```

⚠️ **CRITICAL**: Simple Home component import - NO Lenis integration needed here as it's handled in Home.tsx

### Step 12: Create Home Component
Create `components/smoth-scroll/Home.tsx`:
```typescript
'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { images } from '../../constants';
import Column from './Column';

export default function Home() {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    // Initialize Lenis smooth scrolling (like original - no options)
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    function resize() {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen w-full flex items-center justify-center bg-black">
        <h1 className="text-[30px] uppercase font-bold">
          scroll down for happiness
        </h1>
      </section>

      {/* Parallax Gallery Section - Original height */}
      <section
        ref={gallery}
        className="h-[175vh] bg-[#2d2d2d] relative flex gap-[2vw] p-[2vw] overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </section>

      {/* Footer Section */}
      <section className="h-screen bg-[#ededee]"></section>
    </main>
  );
}
```

⚠️ **CRITICAL GALLERY HEIGHT**: Must be `h-[175vh]` (not 100vh) for proper parallax effect
⚠️ **CRITICAL LENIS CONFIG**: Must use `new Lenis()` without options for optimal parallax feel
⚠️ **CRITICAL MOTION SYSTEM**: Direct MotionValue propagation from Home to Column components

### Step 13: Create Column Component
Create `components/smoth-scroll/Column.tsx`:
```typescript
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TparallaxProps } from "@/types";

export default function Column({ y, images }: TparallaxProps) {
  return (
    <motion.div
      className="relative h-full w-[25%] min-w-[250px] flex flex-col gap-[2vw] odd:top-[-45%] even:top-[-95%] last:top-[-75%]"
      style={{ y }}
    >
      {images.map((src: string, i: number) => {
        return (
          <div
            key={i}
            className="h-full w-full relative rounded-[1vw] overflow-hidden"
          >
            <Image
              className="object-cover"
              src={`/${src}`}
              alt="image"
              fill
              sizes="true"
            />
          </div>
        );
      })}
    </motion.div>
  );
}
```

⚠️ **CRITICAL COLUMN POSITIONING**:
- Use NEGATIVE values for `top` positioning (-45%, -95%, -75%)
- These create the staggered, organic layout effect
- Do NOT use positive values or translateY positioning
- The motion.div handles the parallax movement via the `y` prop

---

## Styling and Layout

### Step 14: Configure Image Assets
1. **Source 12 High-Quality Images**:
   - 12 high-resolution images already provided in public directory.
   - Ensure visual diversity but cohesive style
   - Save as JPG format with sequential naming (1.jpg, 2.jpg, etc.)


### Step 15: Verify Responsive Design
Test the following breakpoints:
- **Desktop** (1920px+): Full 4-column layout
- **Laptop** (1024px-1919px): Maintained spacing
- **Tablet** (768px-1023px): Adjust column sizing
- **Mobile** (320px-767px): Ensure images remain visible

---

## Testing and Validation

### Step 16: Development Testing
```bash
# Start development server
pnpm run dev



### Step 17: Performance Validation
Use Browser Automation MCP's available at your disposal for this:
1. **Lighthouse Audit**:
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Ensure >90 scores for Performance, Accessibility, Best Practices, SEO

2. **Frame Rate Testing**:
   - Open Chrome DevTools Performance tab
   - Record scroll interactions
   - Verify consistent 60fps performance

3. **Memory Usage**:
   - Monitor memory in Chrome DevTools
   - Ensure no memory leaks during extended scrolling


## Deployment

### Step 18: Production Build
```bash
# Create production build
pnpm run build


### Step 19: Optimization Checklist
- ✅ Image optimization (Next.js automatic)
- ✅ Code splitting (automatic with Next.js)
- ✅ Minification (automatic with Next.js)
- ✅ Bundle size analysis (run `pnpm run build` and check output)
- ✅ Performance metrics (Lighthouse scores)


---

## Critical Implementation Guide

### Exact Match Requirements for Perfect Parallax

#### Gallery Height Specification
- **MUST be**: `h-[175vh]` (175% of viewport height)
- **NOT**: `h-[100vh]` or any other value
- **Purpose**: Extended scroll area enables smooth, long-duration parallax effect

#### Lenis Configuration
- **MUST use**: `new Lenis()` (no configuration options)
- **NOT**: `new Lenis({ duration: 1.2, ... })` or any custom settings
- **Purpose**: Basic configuration provides optimal parallax scrolling feel

#### Column Positioning System
- **MUST use**: Negative `top` values in Tailwind classes
  - `odd:top-[-45%]` (columns 1 & 3)
  - `even:top-[-95%]` (column 2)
  - `last:top-[-75%]` (column 4)
- **NOT**: Positive positioning or translateY values
- **Purpose**: Creates organic, staggered column layout for visual depth

#### MotionValue Architecture
- **MUST use**: Direct MotionValue propagation from Home to Column
- **Structure**: `useScroll` → `useTransform` → MotionValue → Column `style={{ y }}`
- **NOT**: Custom speed props or intermediate parallax components
- **Purpose**: Direct integration provides best performance and smoothness

#### Section Flow Requirements
1. **Hero**: `h-screen` with `bg-black`
2. **Gallery**: `h-[175vh]` with `bg-[#2d2d2d]`
3. **Footer**: `h-screen` with `bg-[#ededee]`
- **Critical**: This exact flow prevents section overlapping

---

## Troubleshooting Guide

### Common Issues and Solutions

#### Issue 1: Parallax Too Fast/Slow
**Problem**: Animation speed doesn't match original
**Solution**:
- Verify gallery height is exactly `h-[175vh]`
- Ensure Lenis uses `new Lenis()` without options
- Check MotionValue multipliers: [2, 3.3, 1.25, 3]

#### Issue 2: Images Not Visible
**Problem**: First images don't appear or columns overlap
**Solution**:
- Use negative `top` positioning: `-45%`, `-95%`, `-75%`
- Remove any `paddingTop: '100vh'` from column containers
- Verify motion.div has proper `style={{ y }}` prop

#### Issue 3: Janky Scroll Performance
**Problem**: Poor frame rate during scroll
**Solution**:
- Confirm basic Lenis configuration (no duration/easing options)
- Check requestAnimationFrame integration in useEffect
- Verify no console errors during scroll

#### Issue 4: Layout Overlapping
**Problem**: Sections overlap or flow incorrectly
**Solution**:
- Follow exact section structure: Hero (black) → Gallery (175vh gray) → Footer (light gray)
- Remove any custom z-index management
- Ensure natural document flow without forced positioning

#### Issue 5: TypeScript Errors
**Problem**: MotionValue or type mismatches
**Solution**:
- Add `TparallaxProps` interface with `y: MotionValue` and `images: string[]`
- Import `MotionValue` from "framer-motion" in types file
- Use proper TypeScript annotations for callback parameters
- Ensure all component props match the exact interface definitions

---

## Success Validation Checklist

Before considering the project complete, ensure all requirements are met:

- ✅ Smooth scrolling with Lenis integration (basic configuration)
- ✅ Multi-layer parallax effect (4 different speeds: 2x, 3.3x, 1.25x, 3x)
- ✅ Extended gallery height (175vh) for optimal parallax duration
- ✅ Responsive image gallery (12 images in 4 columns)
- ✅ Negative column positioning (-45%, -95%, -75%) for organic layout
- ✅ Professional visual design and styling
- ✅ 60fps performance across devices
- ✅ Cross-browser compatibility
- ✅ Accessibility compliance
- ✅ TypeScript type safety with TparallaxProps
- ✅ Production-ready deployment
- ✅ Performance optimizations
- ✅ Exact match to original smooth-parallax-animations behavior

This implementation guide provides a complete roadmap for recreating the smooth parallax animation project exactly as specified in the PRD, with critical notes to achieve the "perfect" parallax speed and feel & curtain rolling like animation for different sections like hero section and images gallery section. possibly made through lenis