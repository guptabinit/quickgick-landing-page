import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Activity, ChevronRight, ArrowRight } from "lucide-react"

export default function ProductsOverview() {
  return (
    <section className="py-20 sm:py-20" id="products">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="border-2 border-orange-600 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Two Powerful Solutions Tailored for Your Hotel
          </h2>
          <p className="text-[#783610]/80 text-lg mt-4 ">
            Choose the perfect solution based on your hotel size, guest service requirements, and operational goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Quickgick Discover */}
          <div className="rounded-2xl bg-white p-8 shadow-lg product-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24">
              <div className="absolute transform rotate-45 bg-orange-100 text-primary text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                Most Affordable
              </div>
            </div>
            <div className="mb-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 mb-4">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Quickgick Discover</h3>
              <p className="mt-2 text-sm text-gray-600">Ideal for small-to-medium hotels (up to 50 rooms)</p>
            </div>

            <div className="mb-8">
              <p className="text-gray-700">
                A simplified digital QR menu platform enabling guests to view available services digitally. Generate
                orders through direct calls or WhatsApp messages to hotel staff.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Easy-to-scan QR codes for service discovery</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Direct call or WhatsApp message to staff</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Simplified menu management dashboard</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No guest app download required</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-language support for international guests</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="flex-1 text-sm sm:text-base py-2 px-3 h-auto sm:py-3 sm:px-4"
                asChild
              >
                <Link href="/discover">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button className="flex-1 text-sm sm:text-base py-2 px-3 h-auto sm:py-3 sm:px-4" asChild>
                <a href="#contact">Contact Sales</a>
              </Button>
            </div>
          </div>

          {/* Quickgick Engage */}
          <div className="rounded-2xl bg-white p-8 shadow-lg product-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24">
              <div className="absolute transform rotate-45 bg-orange-100 text-primary text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                Most Popular
              </div>
            </div>
            <div className="mb-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 mb-4">
                <Activity className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">Quickgick Engage</h3>
              <p className="mt-2 text-sm text-gray-600">Premium solution for luxury hotels (30+ rooms)</p>
            </div>

            <div className="mb-8">
              <p className="text-gray-700">
                Comprehensive digital ordering and guest management suite enabling guests to scan QR codes, browse
                digital menus, directly place orders, and track them in real-time.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete multi-service integration (dining, spa, laundry)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time order tracking and management</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Guest loyalty programs and promotions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced analytics and PMS/CRM integrations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customizable branding and interface</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="flex-1 text-sm sm:text-base py-2 px-3 h-auto sm:py-3 sm:px-4"
                asChild
              >
                <Link href="/engage">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button className="flex-1 text-sm sm:text-base py-2 px-3 h-auto sm:py-3 sm:px-4" asChild>
                <a href="#contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

