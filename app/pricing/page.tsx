import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"

export default function PricingPage() {
  return (
    <>
      <div className="py-16 sm:py-24 bg-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">Pricing</h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">Transparent pricing plans for hotels of all sizes</p>
          </div>
        </div>
      </div>
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

