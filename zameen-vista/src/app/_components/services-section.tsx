"use client";

import { useReveal } from "./use-reveal";

const services = [
  {
    icon: "🏡",
    title: "Buying",
    description:
      "Discover verified properties across Pakistan with transparent pricing and complete documentation support.",
    cta: "Browse Listings",
    href: "#featured",
  },
  {
    icon: "💰",
    title: "Selling",
    description:
      "List your property with professional photography, expert marketing, and reach thousands of buyers.",
    cta: "List Property",
    href: "#contact",
  },
  {
    icon: "🔑",
    title: "Renting",
    description:
      "Find or list rental properties with flexible terms, verified landlords, and secure agreements.",
    cta: "Explore Rentals",
    href: "#featured",
  },
  {
    icon: "📊",
    title: "Valuation",
    description:
      "Get accurate property valuations and expert consultation from our experienced real estate professionals.",
    cta: "Get Valuation",
    href: "#contact",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useReveal({ threshold: 0.2 });

  return (
    <section
      id="services"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-curtain-light"
    >
      <div className="container mx-auto px-6 py-16">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need for your real estate journey in Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="text-5xl mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <a
                href={service.href}
                className="inline-flex items-center text-accent font-semibold hover:underline"
                aria-label={`${service.cta} - ${service.title}`}
              >
                {service.cta}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
