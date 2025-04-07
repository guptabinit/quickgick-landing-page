import HeroSection from "@/components/hero-section"
import ProductsOverview from "@/components/products-overview"
import ProblemsSection from "@/components/problems-section"
import HowItWorks from "@/components/how-it-works"
import FeatureComparison from "@/components/feature-comparison"
import DetailedFeatures from "@/components/detailed-features"
import Testimonials from "@/components/testimonials"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CTASection from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <ProductsOverview />
      <HowItWorks />
      <FeatureComparison />
      <DetailedFeatures />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  )
}

