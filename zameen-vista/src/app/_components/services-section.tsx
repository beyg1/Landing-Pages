"use client";

import { useReveal } from "./use-reveal";
import { Home, DollarSign, Key, TrendingUp, CheckCircle2, ArrowRight, Users } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description:
      "Discover verified properties across Pakistan with transparent pricing and complete documentation support.",
    features: ["Verified Listings", "Legal Support", "Price Transparency"],
    cta: "Browse Listings",
    href: "#featured",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
    featured: true,
  },
  {
    icon: DollarSign,
    title: "Property Selling",
    description:
      "List your property with professional photography, expert marketing, and reach thousands of buyers.",
    features: ["Pro Photography", "Expert Marketing", "Wide Reach"],
    cta: "List Property",
    href: "#contact",
    gradient: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-500",
    featured: false,
  },
  {
    icon: Key,
    title: "Rental Services",
    description:
      "Find or list rental properties with flexible terms, verified landlords, and secure agreements.",
    features: ["Flexible Terms", "Verified Landlords", "Secure Deals"],
    cta: "Explore Rentals",
    href: "#featured",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Property Valuation",
    description:
      "Get accurate property valuations and expert consultation from our experienced real estate professionals.",
    features: ["Market Analysis", "Expert Advice", "Accurate Pricing"],
    cta: "Get Valuation",
    href: "#contact",
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-500",
    featured: false,
  },
  {
    icon: Users,
    title: "Agent Services",
    description:
      "Connect with experienced real estate agents who provide personalized guidance throughout your property journey.",
    features: ["Expert Agents", "Personalized Service", "Local Knowledge"],
    cta: "Find an Agent",
    href: "#contact",
    gradient: "from-indigo-500/10 to-violet-500/10",
    iconColor: "text-indigo-500",
    featured: false,
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useReveal({ threshold: 0.2 });

  return (
    <section
      id="services"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-curtain-light via-white to-gray-50 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-accent/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium tracking-wide mb-6">
              ✨ What We Offer
            </span>
          </div>
          
          <h2
            className={`font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight text-slate-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Complete Real Estate
            <span className="block bg-linear-to-r from-accent text-[#aa272e] bg-clip-text">
              Solutions
            </span>
          </h2>
          
          <p
            className={`text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Everything you need for your real estate journey in Pakistan, backed by expert support
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = service.featured;
            
            return (
              <div
                key={service.title}
                className={`group relative ${
                  isFeatured ? "lg:col-span-2 lg:row-span-1" : ""
                } transition-all duration-1500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 450}ms` : "0ms",
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-linear-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-8 h-8 lg:w-10 lg:h-10 ${service.iconColor}`} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl lg:text-3xl text-slate-900 mb-4 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-base lg:text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm lg:text-base"
                        >
                          <CheckCircle2 className={`w-5 h-5 ${service.iconColor} shrink-0`} />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={service.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r ${service.gradient} border-2 border-transparent group-hover:border-current rounded-xl font-semibold ${service.iconColor} transition-all duration-300 hover:gap-4`}
                      aria-label={`${service.cta} - ${service.title}`}
                    >
                      {service.cta}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-linear-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-linear-to-r from-accent/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 shadow-xl">
            <div className="text-left">
              <h3 className="font-display text-2xl text-slate-900 mb-2">
                Need Custom Solutions?
              </h3>
              <p className="text-slate-600">
                Our experts are ready to help with your unique requirements
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}