import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { StructuredData } from "@/components/StructuredData";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaFormSection } from "@/components/sections/CtaFormSection";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/**
 * The OdontoPrime landing page, composed from independent section
 * components. Each section owns its own content and interaction logic;
 * this component is only responsible for layout order and page-wide
 * concerns (scroll-reveal wiring, structured data, chrome).
 */
export function OdontoPrimeLandingPage() {
  useScrollReveal();

  return (
    <div id="top">
      <StructuredData />
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <SpecialtiesSection />
        <DifferentialsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ResultsSection />
        <TeamSection />
        <FaqSection />
        <CtaFormSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
