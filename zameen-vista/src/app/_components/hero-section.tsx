"use client";

import Image from "next/image";
import { useReveal } from "./use-reveal";
import { useLenisInstance } from "./smooth-scroll-provider";

export function HeroSection() {
  const { ref, isVisible } = useReveal();
  const { scrollTo } = useLenisInstance();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-curtain-dark text-white overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Pakistani architecture"
          fill
          priority
          className={`object-cover transition-transform duration-2000 ease-out ${
            isVisible ? "scale-100" : "scale-[2]"
          }`}
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-br from-curtain-dark/95 via-curtain-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-curtain-dark via-transparent to-transparent" />
      </div>

      {/* Animated gradient orbs for visual interest */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Asymmetric Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow Text */}
              <div
                className={`transition-all duration-500 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full text-accent text-sm font-medium tracking-wide">
                  🏡 Pakistan's Premier Real Estate Platform
                </span>
              </div>

              {/* Main Heading - Extra Large */}
              <h1
                className={`transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight mb-4">
                  Find Your
                </span>
                <span className="block font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight bg-linear-to-r from-white via-gray-100 to-accent bg-clip-text text-transparent">
                  Dream Home
                </span>
                <span className="block font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] tracking-tight text-gray-300 mt-2">
                  in Pakistan
                </span>
              </h1>

              {/* Subheading - Large and Readable */}
              <p
                className={`text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed text-gray-300 max-w-2xl transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Buy, sell, or rent properties with{" "}
                <span className="text-accent font-semibold">verified listings</span>,{" "}
                <span className="text-white font-semibold">expert support</span>, and{" "}
                <span className="text-white font-semibold">trusted service</span>.
              </p>

              {/* Trust Indicators */}
              <div
                className={`flex flex-wrap gap-6 text-sm transition-all duration-700 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-gray-300">10,000+ Properties</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200" />
                  <span className="text-gray-300">Verified Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500" />
                  <span className="text-gray-300">Expert Agents</span>
                </div>
              </div>

              {/* CTAs - Prominent Placement */}
              <div
                className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href="#featured"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#featured", { offset: 0 });
                  }}
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold bg-accent text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50"
                  aria-label="Search properties"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Search Properties
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-accent to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contact", { offset: 0 });
                  }}
                  className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  aria-label="List a property"
                >
                  <span className="flex items-center gap-2">
                    List a Property
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Visual Element - Right Side */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div
                className={`transition-all duration-1000 ease-out delay-600 ${
                  isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                }`}
                style={{
                  transformOrigin: 'center center',
                }}
              >
                {/* Floating Stats Card */}
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white">10K+</p>
                          <p className="text-sm text-gray-300">Active Listings</p>
                        </div>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white">500+</p>
                          <p className="text-sm text-gray-300">Expert Agents</p>
                        </div>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white">100%</p>
                          <p className="text-sm text-gray-300">Verified</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}