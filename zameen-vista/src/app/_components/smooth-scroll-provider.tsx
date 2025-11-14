"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import Lenis, { type LenisOptions } from "lenis";

type LenisAPI = {
  lenis: Lenis | null;
  scrollTo: (
    target: Parameters<Lenis["scrollTo"]>[0],
    options?: Parameters<Lenis["scrollTo"]>[1]
  ) => void;
  start: () => void;
  stop: () => void;
};

const LenisContext = createContext<LenisAPI | null>(null);

type SmoothScrollProviderProps = PropsWithChildren<{
  options?: LenisOptions;
}>;

/**
 * SmoothScrollProvider
 *
 * - Initializes a single Lenis instance on the client.
 * - Manages a manual requestAnimationFrame loop with proper cleanup.
 * - Exposes Lenis via context:
 *    - lenis: raw instance (for advanced integrations)
 *    - scrollTo(target, options): programmatic smooth scrolling
 *    - start()/stop(): control scroll when needed (e.g. modals)
 * - Accepts Lenis options with sensible defaults tailored for a landing page.
 * - Ready for anchors, offsets, and data-lenis-prevent usage per official docs.
 */
export function SmoothScrollProvider({
  children,
  options,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Defer Lenis initialization to avoid blocking initial render
    const initializeLenis = () => {
      const lenis = new Lenis({
        // Defaults tuned for this landing page; can be overridden via `options`
        smoothWheel: true,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        autoRaf: false, // manual raf for full control
        autoResize: true,
        ...options,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        if (!lenisRef.current) return;
        lenisRef.current.raf(time);
        rafIdRef.current = requestAnimationFrame(raf);
      };

      rafIdRef.current = requestAnimationFrame(raf);
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(initializeLenis);
    } else {
      setTimeout(initializeLenis, 100);
    }

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
    // Intentionally not including `options` in deps to avoid re-instantiation on every render.
    // If dynamic options are needed later, handle them explicitly.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const api: LenisAPI = {
    lenis: lenisRef.current,
    scrollTo: (target, scrollOptions) => {
      if (!lenisRef.current) return;
      // Types from Lenis cover numbers, selectors, elements, and keywords.
      lenisRef.current.scrollTo(
        target as Parameters<Lenis["scrollTo"]>[0],
        scrollOptions as Parameters<Lenis["scrollTo"]>[1]
      );
    },
    start: () => {
      lenisRef.current?.start();
    },
    stop: () => {
      lenisRef.current?.stop();
    },
  };

  return (
    <LenisContext.Provider value={api}>{children}</LenisContext.Provider>
  );
}

export function useLenisInstance() {
  const ctx = useContext(LenisContext);
  if (!ctx) {
    throw new Error("useLenisInstance must be used within SmoothScrollProvider");
  }
  return ctx;
}
