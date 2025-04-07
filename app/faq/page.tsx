import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"

export default function FAQPage() {
  return (
    <>
      <div className="py-16 sm:py-24 bg-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">Find answers to common questions about Quickgick</p>
          </div>
        </div>
      </div>
      <FAQSection />
      <CTASection />
    </>
  )
}

