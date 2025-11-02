import Section from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section id="cta" className="flex items-center">
      <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-[radial-gradient(1200px_400px_at_10%_-10%,color-mix(in_oklab,var(--accent)_35%,transparent),transparent),radial-gradient(1000px_300px_at_110%_110%,color-mix(in_oklab,var(--accent)_25%,transparent),transparent)] bg-white p-10 shadow-[0_2px_24px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(--font-display) text-3xl tracking-tight text-foreground md:text-4xl">
            Ready to tour your next home?
          </h2>
          <p className="mt-3 text-base text-muted md:text-lg">
            Tell us what you’re dreaming of—our team will curate a shortlist and arrange private viewings.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <LinkButton href="mailto:hello@arcadia.example?subject=Consultation" className="shadow-lg">Book a consultation</LinkButton>
            <LinkButton href="#featured" variant="secondary">See listings</LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
