"use client";

import Image from "next/image";
import { useReveal } from "./use-reveal";

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
  },
];

export function FeaturedListingsSection() {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  return (
    <section
      id="featured"
      ref={ref}
      className="py-24 md:py-32 bg-curtain-dark text-white"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Featured Properties
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Handpicked premium properties from across Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <div
              key={listing.id}
              className={`group bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent px-4 py-1 rounded-full text-sm font-semibold">
                  {listing.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">{listing.title}</h3>
                <p className="text-gray-400 mb-4 flex items-center">
                  <span className="mr-2" aria-hidden="true">
                    📍
                  </span>
                  {listing.location}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  {listing.beds && (
                    <span>
                      <span aria-hidden="true">🛏️</span> {listing.beds} Beds
                    </span>
                  )}
                  {listing.baths && (
                    <span>
                      <span aria-hidden="true">🚿</span> {listing.baths} Baths
                    </span>
                  )}
                  <span>
                    <span aria-hidden="true">📐</span> {listing.area}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">
                    {listing.price}
                  </span>
                  <button
                    type="button"
                    className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                    aria-label={`View details for ${listing.title}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            aria-label="View all properties"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}
