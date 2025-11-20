"use client";

import Image from "next/image";
import { useReveal } from "./use-reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Zameen Vista made finding my dream home in Islamabad incredibly easy. Professional service and verified listings!",
    name: "Ahmed Khan",
    role: "Property Buyer",
    city: "Islamabad",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Sold my property in just 3 weeks! Their marketing team is exceptional and the process was transparent throughout.",
    name: "Fatima Malik",
    role: "Property Seller",
    city: "Lahore",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
  },
  {
    id: 3,
    quote:
      "Best real estate platform in Pakistan. Found the perfect rental for my business within my budget.",
    name: "Usman Ali",
    role: "Business Owner",
    city: "Karachi",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The property valuation service was accurate and helped me make an informed decision. Highly recommended!",
    name: "Sara Ahmed",
    role: "Investor",
    city: "Rawalpindi",
    avatar:
      "https://images.unsplash.com/photo-1639323949180-772f1932c225?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb",
    rating: 4.5,
  },
  {
    id: 5,
    quote:
      "Outstanding experience from start to finish. The agent was knowledgeable and helped us negotiate a great deal.",
    name: "Hassan Raza",
    role: "First-time Buyer",
    city: "Faisalabad",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
  },
  {
    id: 6,
    quote:
      "Found my perfect apartment in the heart of Karachi. The search filters and virtual tours were incredibly helpful!",
    name: "Ayesha Siddiqui",
    role: "Young Professional",
    city: "Karachi",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "Excellent customer support and genuine listings. They made the entire buying process stress-free for my family.",
    name: "Bilal Ahmed",
    role: "Family Home Buyer",
    city: "Multan",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
  },
  {
    id: 8,
    quote:
      "Impressed by the professionalism and market knowledge. Got the best price for my commercial property.",
    name: "Nadia Hussain",
    role: "Commercial Seller",
    city: "Peshawar",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
  },
  {
    id: 9,
    quote:
      "The rental process was seamless. Found a great property with all amenities and the documentation was handled perfectly.",
    name: "Imran Malik",
    role: "Tenant",
    city: "Sialkot",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
  },
  {
    id: 10,
    quote:
      "As an investor, I appreciate the detailed market insights and property analytics. Made smart investment decisions!",
    name: "Zainab Khan",
    role: "Real Estate Investor",
    city: "Gujranwala",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-curtain-light overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-accent/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium tracking-wide mb-6">
              💬 Client Testimonials
            </span>
          </div>

          <h2
            className={`font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Loved by Thousands
            <span className="block bg-linear-to-r from-accent text-[#aa272e] bg-clip-text">
              Across Pakistan
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Real stories from real people who found their dream properties with
            us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Desktop: Auto-scrolling carousel */}
          <div className="hidden md:block">
            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-curtain-light to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-curtain-light to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 animate-scroll-rtl w-max"
                style={{ animationDuration: "60s" }}
              >
                {/* First set of testimonials */}
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`first-${testimonial.id}`}
                    testimonial={testimonial}
                  />
                ))}
                {/* Duplicate set for seamless loop */}
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`second-${testimonial.id}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Horizontal scrollable container */}
          <div className="md:hidden">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 w-max px-6">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`mobile-${testimonial.id}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-3 text-slate-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-slate-300 rounded-full" />
                  <div className="w-2 h-2 bg-slate-300 rounded-full" />
                </div>
                <span className="text-sm font-medium">
                  Swipe horizontally for more testimonials
                </span>
                <svg
                  className="w-4 h-4 text-accent animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { label: "Happy Clients", value: "10,000+" },
            { label: "Properties Sold", value: "5,000+" },
            { label: "5-Star Reviews", value: "8,500+" },
            { label: "Cities Covered", value: "50+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold bg-linear-to-r text-[#aa272e] bg-clip-text  mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  const fullStars = Math.floor(testimonial.rating);
  const hasHalfStar = testimonial.rating % 1 !== 0;

  return (
    <div className="group relative shrink-0 w-[350px]">
      {/* Card */}
      <div className="relative h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quote Icon */}
        <div className="relative z-10 mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
            <Quote className="w-6 h-6 text-accent" />
          </div>
        </div>

        {/* Quote Text */}
        <blockquote className="relative z-10 mb-6">
          <p className="text-slate-700 leading-relaxed text-base lg:text-lg min-h-[120px]">
            "{testimonial.quote}"
          </p>
        </blockquote>

        {/* Rating */}
        <div
          className="relative z-10 flex gap-1 mb-6"
          role="img"
          aria-label={`${testimonial.rating} star rating`}
        >
          {[...Array(fullStars)].map((_, i) => (
            <Star
              key={`full-${i}`}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
          ))}
          {hasHalfStar && (
            <div className="relative w-5 h-5">
              <Star
                className="absolute w-5 h-5 text-yellow-400"
                aria-hidden="true"
              />
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
          {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => (
            <Star
              key={`empty-${i}`}
              className="w-5 h-5 text-yellow-400"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Author Info */}
        <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-gray-200">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name} profile picture`}
              fill
              sizes="56px"
              loading="eager"
              quality={75}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 text-lg">
              {testimonial.name}
            </h3>
            <p className="text-sm text-slate-900">{testimonial.role}</p>
            <p className="text-xs text-[#aa272e]">{testimonial.city}</p>
          </div>
        </div>

        {/* Decorative Corner Element */}
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-linear-to-br from-accent/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}
