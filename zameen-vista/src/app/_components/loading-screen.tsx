
"use client";

import { useEffect, useState } from "react";
import { useLoading } from "../_context/loading-context";

export function LoadingScreen() {
  const { isLoading, setIsLoading } = useLoading();
  const [show, setShow] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    // Start entry animations
    const textTimer = setTimeout(() => setTextVisible(true), 100);
    const lineTimer = setTimeout(() => setLineVisible(true), 800);

    // End loading state after 2.5s (simulating load)
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    // Remove component from DOM after exit animation
    /* 
       If isLoading becomes false, we wait for the exit animation (e.g. 1s)
       before unmounting. But here we can just keep it mounted and control
       opacity/pointer-events via CSS for smoother orchestration.
    */

    return () => {
      clearTimeout(textTimer);
      clearTimeout(lineTimer);
      clearTimeout(completeTimer);
    };
  }, [setIsLoading]);

  // Handle exit delay visually
  useEffect(() => {
    if (!isLoading) {
      const unmountTimer = setTimeout(() => setShow(false), 1000);
      return () => clearTimeout(unmountTimer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-curtain-dark transition-opacity duration-1000 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative overflow-hidden p-4">
        {/* Main Logo Text */}
        <h1
          className={`font-display text-4xl md:text-6xl text-white tracking-wider transition-all duration-1000 ease-out transform ${
            textVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Zameen Vista
        </h1>

        {/* Golden Line Animation */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-1000 ease-in-out ${
            lineVisible ? "w-full" : "w-0"
          }`}
        />
      </div>

      {/* Subtext */}
      <p
        className={`mt-4 font-sans text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] transition-all duration-1000 delay-500 ${
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Premium Real Estate
      </p>
    </div>
  );
}
