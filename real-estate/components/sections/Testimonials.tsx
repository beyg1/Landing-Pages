"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const testimonials = [
  {
    quote:
      "Arcadia brought us an off‑market penthouse we never would’ve found. White‑glove service from day one.",
    name: "Sofia & Daniel R.",
  },
  {
    quote:
      "They handled staging, media, and launch flawlessly. We accepted an offer in 5 days above asking.",
    name: "Michael T.",
  },
  {
    quote:
      "Negotiation was masterful. We saved significantly and closed in under 30 days.",
    name: "Priya K.",
  },
  {
    quote:
      "Professional, calm, and deeply informed. The best real estate experience we’ve had.",
    name: "Ethan & Aria L.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="flex items-center">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl tracking-tight text-[var(--foreground)] md:text-4xl">Client words</h2>
          <p className="mt-3 text-base text-muted md:text-lg">Stories from buyers and sellers who trusted our process.</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-10 overflow-hidden"
        >
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="snap-start shrink-0 basis-[85%] rounded-2xl border border-black/5 bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-white/5 sm:basis-[50%] lg:basis-[32%]"
              >
                <blockquote className="text-[0.98rem] text-[var(--foreground)]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
