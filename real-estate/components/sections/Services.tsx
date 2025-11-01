import Section from "@/components/ui/Section";
import { Building2, Handshake, KeyRound } from "lucide-react";

const services = [
  {
    title: "Buyer representation",
    icon: KeyRound,
    desc: "End‑to‑end guidance—from tours and comps to sharp negotiation and closing.",
  },
  {
    title: "Seller strategy",
    icon: Handshake,
    desc: "Staging, elite photography, and multi‑channel campaigns that maximize ROI.",
  },
  {
    title: "New developments",
    icon: Building2,
    desc: "Access upcoming projects and exclusive inventory before they hit the market.",
  },
];

export default function Services() {
  return (
    <Section id="services" className="flex items-center bg-white/60 dark:bg-white/5">
      <div className="mx-auto max-w-screen-xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-3xl tracking-tight md:text-4xl text-[var(--foreground)]">What we do best</h2>
          <p className="mt-3 text-base text-muted md:text-lg">
            A boutique approach that blends local expertise with modern marketing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-black/5 bg-white/90 p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5 opacity-0 animate-slide-in-up"
              style={{ animationDelay: `${0.05 + i * 0.05}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[var(--foreground)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
