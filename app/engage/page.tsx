import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Activity, Clock, BarChart3, Smartphone, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"
import room from "@/public/RoomService.avif"
import engageImg from "@/public/engageImage1.avif"

export default function EngagePage() {
  return (
    <>
      <section className="relative overflow-hidden py-32 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-block rounded-lg bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
                For Premium Hotels
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">Quickgick Engage</h1>
              <p className="mt-6 text-lg text-gray-700">
                Comprehensive digital ordering and guest management suite enabling guests to scan QR codes, browse
                digital menus, directly place orders, and track them in real-time.
              </p>
              <div className="mt-10 flex flex-wrap gap-6">
                <Button size="lg" className="px-8 py-6 text-base group" asChild>
                  <a href="/#contact">
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-base" asChild>
                  <Link href="/#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={room}
                alt="Quickgick Engage Demo"
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />

              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-4 shadow-lg md:max-w-xs">
                <div className="flex items-center">
                  <div className="flex-shrink-0 rounded-full bg-orange-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-primary">Premium Solution</p>
                    <p className="text-sm text-gray-600">For luxury hotels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Features
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Advanced Features</h2>
            <p className="mt-6 text-lg text-gray-700">
              Explore the premium features that make Quickgick Engage the ultimate guest management solution
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Direct Digital Ordering</h3>
              <p className="text-gray-600">
                Allow guests to browse, order, and pay directly through a digital interface.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Provide guests with live updates on the status of their orders.</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Integrated Payments</h3>
              <p className="text-gray-600">
                Accept payments through multiple methods including room charge and online payments.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Multi-service Platform</h3>
              <p className="text-gray-600">
                Integrate dining, spa, laundry, and other services into a single platform.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">
                Gain deep insights into guest preferences, ordering patterns, and revenue opportunities.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">PMS & CRM Integration</h3>
              <p className="text-gray-600">
                Connect with your existing property management and customer relationship systems.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Guest Loyalty Program</h3>
              <p className="text-gray-600">Build guest loyalty with points, rewards, and personalized promotions.</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44"></path>
                  <path d="M20 12h2"></path>
                  <path d="M2 12h2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Customizable Interface</h3>
              <p className="text-gray-600">
                Fully brand the guest experience with your hotel's colors, logo, and unique style.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Performance Optimization</h3>
              <p className="text-gray-600">
                Streamline operations with AI-driven insights and staff performance metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-32 bg-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Process
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">How Quickgick Engage Works</h2>
            <p className="mt-6 text-lg text-gray-700">
              A comprehensive five-step process for premium guest experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                  <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                  <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                  <rect width="5" height="5" x="16" y="16" rx="1"></rect>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">1. Scan QR</h3>
              <p className="text-sm text-gray-600">Guests scan QR code from any location in hotel</p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">2. Browse & Select</h3>
              <p className="text-sm text-gray-600">Explore interactive menus with rich details</p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">3. Place & Pay</h3>
              <p className="text-sm text-gray-600">Submit order and pay directly through the platform</p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">4. Track Order</h3>
              <p className="text-sm text-gray-600">Monitor real-time status updates of the order</p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">5. Receive Service</h3>
              <p className="text-sm text-gray-600">Enjoy seamless service delivery and rate experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div className="relative order-last lg:order-first">
              <Image
                src={engageImg}
                alt="Hotel staff using Quickgick Engage"
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                Benefits
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                Benefits for Premium Hotels
              </h2>
              <p className="mt-6 text-lg text-gray-700">
                Discover the transformative advantages of implementing Quickgick Engage at your property
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Complete Digital Transformation</h3>
                    <p className="mt-1 text-gray-600">
                      Fully digitize your guest service experience from browsing to ordering to delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Operational Efficiency</h3>
                    <p className="mt-1 text-gray-600">
                      Reduce staff workload by up to 40% through automated ordering and processing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Revenue Enhancement</h3>
                    <p className="mt-1 text-gray-600">
                      Increase average order value by 25% with personalized recommendations and promotions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Enterprise-grade Analytics</h3>
                    <p className="mt-1 text-gray-600">
                      Make data-driven decisions with comprehensive analytics and reporting dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Seamless System Integration</h3>
                    <p className="mt-1 text-gray-600">
                      Connect with your existing PMS, POS, and CRM systems for unified operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

