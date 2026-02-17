"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal(options: IntersectionObserverInit & { enabled?: boolean } = { threshold: 0.1, enabled: true }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If not enabled yet (e.g., loading), do not observe
    if (options.enabled === false) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer once element is visible to prevent further checks
          observer.disconnect();
        }
      },
      options
    );

    observerRef.current = observer;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options.threshold, options.root, options.rootMargin, options.enabled]);

  return { ref, isVisible };
}
