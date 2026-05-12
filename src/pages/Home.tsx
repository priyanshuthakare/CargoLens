import HeroSection from '@/sections/HeroSection';
import ProblemSection from '@/sections/ProblemSection';
import HowItWorksSection from '@/sections/HowItWorksSection';
import FeaturesSection from '@/sections/FeaturesSection';
import ROISection from '@/sections/ROISection';
import PricingPreviewSection from '@/sections/PricingPreviewSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import IntegrationsSection from '@/sections/IntegrationsSection';
import SecurityTrustSection from '@/sections/SecurityTrustSection';
import FinalCTASection from '@/sections/FinalCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ROISection />
      <PricingPreviewSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <SecurityTrustSection />
      <FinalCTASection />
    </main>
  );
}
