import { Hero, Services, Featured, Testimonials, CTA } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-screen">
        <Hero />
      </section>
      <section className="h-screen w-screen">
        <Services />
      </section>
      <section className="h-screen w-screen">
        <Featured />
      </section>
      <section className="h-screen w-screen">
        <Testimonials />
      </section>
      <section className="h-screen w-screen">
        <CTA />
      </section>
    </main>
  );
}
