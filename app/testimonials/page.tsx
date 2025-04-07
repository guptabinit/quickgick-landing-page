import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"

export default function TestimonialsPage() {
  return (
    <>
      <div className="py-16 sm:py-24 bg-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">Testimonials</h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">See what our customers are saying about Quickgick</p>
          </div>
        </div>
      </div>
      <Testimonials />
      <CTASection />
    </>
  )
}

