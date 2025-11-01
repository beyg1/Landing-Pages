"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { MapPin, Bath, Bed, Square } from "lucide-react";

const listings = [
  {
    title: "Modern hillside villa",
    location: "Bel Air, Los Angeles",
    price: "$6,450,000",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
    beds: 5,
    baths: 6,
    area: 7200,
  },
  {
    title: "Glass lakefront retreat",
    location: "Lake Como, Italy",
    price: "$4,180,000",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
    beds: 4,
    baths: 4,
    area: 5100,
  },
  {
    title: "Penthouse with skyline view",
    location: "Manhattan, New York",
    price: "$8,950,000",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
    beds: 3,
    baths: 3,
    area: 3800,
  },
];

export default function Featured() {
  return (
    <Section id="featured" className="flex items-center bg-gradient-to-b from-transparent to-white/60 dark:to-white/5">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl tracking-tight text-[var(--foreground)] md:text-4xl">Featured listings</h2>
            <p className="mt-3 text-base text-muted md:text-lg">Meticulously curated properties you won’t see everywhere.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l, i) => (
            <motion.article
              key={l.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={l.image} alt={l.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0" />
                <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">{l.price}</div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{l.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                  <MapPin className="h-4 w-4 opacity-70" /> {l.location}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1"><Bed className="h-4 w-4" /> {l.beds} bd</span>
                  <span className="inline-flex items-center gap-1"><Bath className="h-4 w-4" /> {l.baths} ba</span>
                  <span className="inline-flex items-center gap-1"><Square className="h-4 w-4" /> {l.area.toLocaleString()} sqft</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
