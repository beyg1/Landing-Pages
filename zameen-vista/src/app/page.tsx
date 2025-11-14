import { HeroSection } from "./_components/hero-section";
import { ServicesSection } from "./_components/services-section";
import { FeaturedListingsSection } from "./_components/featured-listings-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { ContactSection } from "./_components/contact-section";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedListingsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
