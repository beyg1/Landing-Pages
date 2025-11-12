"use client";

import Image from "next/image";
import { useReveal } from "./use-reveal";

const testimonials = [
  {
    id: 1,
    quote:
      "Zameen Vista made finding my dream home in Islamabad incredibly easy. Professional service and verified listings!",
    name: "Ahmed Khan",
    city: "Islamabad",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    quote:
      "Sold my property in just 3 weeks! Their marketing team is exceptional and the process was transparent throughout.",
    name: "Fatima Malik",
    city: "Lahore",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    quote:
      "Best real estate platform in Pakistan. Found the perfect rental for my business within my budget.",
    name: "Usman Ali",
    city: "Karachi",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    quote:
      "The property valuation service was accurate and helped me make an informed decision. Highly recommended!",
    name: "Sara Ahmed",
    city: "Rawalpindi",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-32 bg-curtain-light"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted by thousands of satisfied customers across Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profile picture`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-500">{testimonial.city}</p>
                </div>
              </div>

              <blockquote>
                <p className="text-slate-600 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="mt-4 flex text-accent" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
