import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="py-20 sm:py-18 bg-gradient-to-b from-white via-[#FFF5F2]/50 to-background" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full border-2 border-orange-500 bg-white px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-6 text-lg text-[#783610]/80">Choose the plan that's right for your hotel</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Quickgick Discover Pricing */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary">Quickgick Discover</h3>
              <p className="mt-2 text-gray-600">For small-to-medium hotels</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-primary">₹699</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">Starting price for up to 15 rooms</p>
            </div>

            <div className="overflow-hidden rounded-lg mb-8">
              <div className="bg-orange-50 px-4 py-2 border-b border-orange-100">
                <h4 className="text-sm font-semibold text-secondary">India Pricing (₹ INR)</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-orange-100">
                  <thead className="bg-orange-50">
                    <tr>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-secondary">
                        Hotel Size
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-secondary">
                        Monthly
                      </th>
                      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-secondary">
                        Annual (Save ~17%)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-orange-100">
                    <tr>
                      <td className="px-4 py-2 text-xs text-gray-700">Up to 15 rooms</td>
                      <td className="px-4 py-2 text-xs font-medium text-gray-900">₹699/month</td>
                      <td className="px-4 py-2 text-xs text-gray-700">₹6,999/year (save ₹1,389)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-xs text-gray-700">16–30 rooms</td>
                      <td className="px-4 py-2 text-xs font-medium text-gray-900">₹999/month</td>
                      <td className="px-4 py-2 text-xs text-gray-700">₹9,999/year (save ₹1,989)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-xs text-gray-700">31–50 rooms</td>
                      <td className="px-4 py-2 text-xs font-medium text-gray-900">₹1499/month</td>
                      <td className="px-4 py-2 text-xs text-gray-700">₹14,999/year (save ₹2,989)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-xs text-gray-700">50+ rooms</td>
                      <td className="px-4 py-2 text-xs font-medium text-gray-900">Custom Pricing</td>
                      <td className="px-4 py-2 text-xs text-gray-700">Custom Plan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">QR code generation for each room</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Digital menu management dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">WhatsApp & call integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Email & chat support</span>
                </li>
              </ul>
            </div>

            <Button className="w-full group" size="lg" asChild>
              <a href="/#contact">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Quickgick Engage Pricing */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary">
            <div className="absolute -mt-12 ml-3">
              <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-xs font-medium text-primary">
                Most Popular
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary">Quickgick Engage</h3>
              <p className="mt-2 text-gray-600">For premium hotels and resorts</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-primary">Custom</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">Tailored to your specific needs</p>
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                <span className="ml-3 text-gray-700">Contact us for a personalized quote</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                <span className="ml-3 text-gray-700">Based on hotel size and feature requirements</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                <span className="ml-3 text-gray-700">Flexible payment options available</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">All Discover features, plus:</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Direct digital ordering system</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Integrated payment processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Real-time order tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">PMS & CRM integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Guest loyalty program & promotions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                  <span className="ml-3 text-gray-700">Priority support with dedicated account manager</span>
                </li>
              </ul>
            </div>

            <Button className="w-full group mt-10" variant="default" size="lg" asChild>
              <a href="/#contact">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All prices are in Indian Rupees (INR) and exclusive of applicable taxes.
            <br />
            Need a custom solution?{" "}
            <a href="/#contact" className="text-primary font-medium hover:underline">
              Contact our sales team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

