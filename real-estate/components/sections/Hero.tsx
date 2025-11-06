import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section width="full" height="screen" className="flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury living room interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
        <div className="pointer-events-none absolute -top-40 right-20 h-[500px] w-[500px] rounded-full bg-(--accent)/20 blur-[100px]" />
      </div>

      <div className="w-full">
        <div className="ml-auto max-w-3xl px-6 md:px-8">
          <div className="text-right text-white">
            <div className="space-y-8">
              <div
                className="inline-block rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-medium backdrop-blur-sm opacity-0 animate-slide-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="text-accent font-semibold">EST. 2009</span> •
                Arcadia
              </div>

              <div className="space-y-6">
                <h1
                  className="font-(--font-display) text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter opacity-0 animate-slide-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="text-white">Bespoke</span>
                  <br />
                  <span className="text-accent">Homes</span>
                  <span className="text-white"> for</span>
                  <br />
                  <span className="text-white">Refined</span>
                  <span className="text-accent"> Living</span>
                </h1>
              </div>
              <div>
                <p
                  className="text-lg md:text-xl text-white/90 max-w-xl opacity-0 animate-slide-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  Exclusive properties curated for the most discerning clients,
                  with unparalleled service and attention to detail.
                </p>
              </div>

              <div
                className="flex flex-wrap gap-5 opacity-0 animate-slide-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <LinkButton
                  href="#featured"
                  className="px-9 py-4 text-base font-medium shadow-2xl"
                >
                  View Collection
                </LinkButton>
                <LinkButton
                  href="#cta"
                  variant="secondary"
                  className="px-9 py-4 text-base font-medium"
                >
                  Exclusive Access
                </LinkButton>
              </div>

              <div
                className="flex flex-wrap gap-8 pt-8 border-t border-white/10 opacity-0 animate-slide-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                <div>
                  <dt className="text-3xl font-bold text-accent">15+ Years</dt>
                  <dd className="mt-2 text-sm text-white/70">of Excellence</dd>
                </div>
                <div>
                  <dt className="text-3xl font-bold text-accent">98%</dt>
                  <dd className="mt-2 text-sm text-white/70">Satisfaction</dd>
                </div>
                <div>
                  <dt className="text-3xl font-bold text-accent">200+</dt>
                  <dd className="mt-2 text-sm text-white/70">Homes Sold</dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-6 hidden md:block">
        <div className="h-10 w-6 rounded-full border-2 border-white/60 p-1">
          <div className="h-full w-full animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </Section>
  );
}
