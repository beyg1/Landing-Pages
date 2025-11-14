"use client";

import Image from "next/image";
import { useReveal } from "./use-reveal";
import { MapPin, Bed, Bath, Maximize2, ArrowRight, Sparkles } from "lucide-react";

const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    title: "Modern Villa in Islamabad",
    location: "F-8, Islamabad",
    type: "For Sale",
    price: "PKR 12.5 Crore",
    beds: 5,
    baths: 6,
    area: "500 sq yards",
    featured: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Apartment in Karachi",
    location: "DHA Phase 8, Karachi",
    type: "For Sale",
    price: "PKR 4.2 Crore",
    beds: 3,
    baths: 3,
    area: "2,500 sq ft",
    featured: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    title: "Commercial Plaza in Lahore",
    location: "Gulberg, Lahore",
    type: "For Rent",
    price: "PKR 8 Lac/month",
    beds: null,
    baths: null,
    area: "5,000 sq ft",
    featured: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    title: "Farmhouse in Bahria Town",
    location: "Bahria Town, Rawalpindi",
    type: "For Sale",
    price: "PKR 8 Crore",
    beds: 6,
    baths: 7,
    area: "2 Kanal",
    featured: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    title: "Sea View Apartment",
    location: "Clifton, Karachi",
    type: "For Rent",
    price: "PKR 3.5 Lac/month",
    beds: 4,
    baths: 4,
    area: "3,000 sq ft",
    featured: false,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    title: "Corner Plot in DHA",
    location: "DHA Phase 6, Lahore",
    type: "For Sale",
    price: "PKR 5.8 Crore",
    beds: null,
    baths: null,
    area: "1 Kanal",
    featured: false,
  },
];

export function FeaturedListingsSection() {
  const { ref, isVisible } = useReveal({ threshold: 0.2 });

  return (
    <section
      id="featured"
      ref={ref}
      className="relative py-24 md:py-32 bg-curtain-dark text-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full text-accent text-sm font-medium tracking-wide mb-6">
              🏠 Featured Properties
            </span>
          </div>

          <h2
            className={`font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Premium Properties
            <span className="block bg-linear-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Across Pakistan
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Handpicked luxury properties in prime locations
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {listings.map((listing, index) => (
            <div
              key={listing.id}
              className={`group transition-all duration-2000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 350}ms` : "0ms",
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2">
                {/* Featured Badge */}
                {listing.featured && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-linear-to-r from-yellow-500 to-orange-500 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Type Badge */}
                <div className={`absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg ${
                  listing.type === "For Sale" 
                    ? "bg-accent text-white" 
                    : "bg-purple-500 text-white"
                }`}>
                  {listing.type}
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 5}
                    quality={85}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Title & Location */}
                  <h3 className="font-display text-2xl mb-3 text-white group-hover:text-accent transition-colors duration-300">
                    {listing.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-6">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm">{listing.location}</span>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400 flex-wrap">
                    {listing.beds && (
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-accent" />
                        <span>{listing.beds} Beds</span>
                      </div>
                    )}
                    {listing.baths && (
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-accent" />
                        <span>{listing.baths} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-accent" />
                      <span>{listing.area}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Price</p>
                      <p className="text-2xl font-bold bg-linear-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                        {listing.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-xl hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                      aria-label={`View details for ${listing.title}`}
                    >
                      <span className="font-semibold">View</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Decorative Corner Glow */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br from-accent/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold bg-linear-to-r from-accent to-blue-500 text-white rounded-xl hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            aria-label="View all properties"
          >
            View All Properties
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}