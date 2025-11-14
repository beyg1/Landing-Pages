"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal(options = { threshold: 0.1 }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
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
  }, [options]);

  return { ref, isVisible };
}
