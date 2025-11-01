import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury living room interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--accent)]/30 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-screen-xl px-6 md:px-8">
        <div className="max-w-2xl text-white">
          <div>
            <p
              className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm opacity-0 animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Arcadia Real Estate
            </p>
            <h1
              className="font-[var(--font-display)] text-4xl leading-tight tracking-tight md:text-6xl opacity-0 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Bespoke homes for refined living
            </h1>
            <p
              className="mt-5 max-w-xl text-base/7 text-white/80 md:text-lg/8 opacity-0 animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Discover hand‑picked properties and a concierge‑style experience, tailored to how you want to buy or sell.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-3 opacity-0 animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <LinkButton href="#featured" className="shadow-xl">Browse listings</LinkButton>
              <LinkButton href="#cta" variant="secondary">Book a consultation</LinkButton>
            </div>

            <dl
              className="mt-10 grid max-w-xl grid-cols-3 gap-6 text-sm/6 text-white/80 opacity-0 animate-slide-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div>
                <dt className="text-white">15+ years</dt>
                <dd className="text-white/70">of neighborhood expertise</dd>
              </div>
              <div>
                <dt className="text-white">98% satisfaction</dt>
                <dd className="text-white/70">client‑rated service</dd>
              </div>
              <div>
                <dt className="text-white">200+ homes</dt>
                <dd className="text-white/70">sold and counting</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-10 w-6 rounded-full border-2 border-white/60 p-1">
          <div className="h-full w-full animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </Section>
  );
}
