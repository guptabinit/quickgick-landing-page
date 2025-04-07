import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Phone, MessageSquare, QrCode, Smartphone, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"
import qr from "@/public/QR_scan.avif"
import room from "@/public/discoverImg1.avif"

export default function DiscoverPage() {
  return (
    <>
      <section className="relative overflow-hidden py-32 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-block rounded-lg bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
                For Small-to-Medium Hotels
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">Quickgick Discover</h1>
              <p className="mt-6 text-lg text-gray-700">
                A simplified digital QR menu platform enabling guests to view available services digitally. Generate
                orders through direct calls or WhatsApp messages to hotel staff.
              </p>
              <div className="mt-10 flex flex-wrap gap-6">
                <Button size="lg" className="px-8 py-6 text-base group" asChild>
                  <a href="/#contact">
                    Get Started
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
                src={qr}
                alt="Quickgick Discover Demo"
                width={800}
                height={600}
                 className="h-[500px] w-full object-cover rounded-xl shadow-xl"
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
                    <p className="text-lg font-semibold text-primary">Quick Setup</p>
                    <p className="text-sm text-gray-600">Ready in 1-3 days</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Key Features</h2>
            <p className="mt-6 text-lg text-gray-700">
              Explore the features that make Quickgick Discover perfect for your hotel
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Dynamic QR Menus</h3>
              <p className="text-gray-600">
                Easily generate and update QR codes for each room to display your hotel's services digitally.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">One-Click Calling</h3>
              <p className="text-gray-600">
                Allow guests to place orders with a simple tap to call hotel staff directly.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">WhatsApp Integration</h3>
              <p className="text-gray-600">
                Enable guests to send order details through WhatsApp with pre-filled message templates.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md feature-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">No App Download</h3>
              <p className="text-gray-600">
                Guests access your services via their browser with no app installation required.
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
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Easy Setup</h3>
              <p className="text-gray-600">
                Get your digital menu system up and running within hours with our assisted onboarding.
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Multi-language Support</h3>
              <p className="text-gray-600">
                Present your menu in multiple languages to accommodate international guests.
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
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              How Quickgick Discover Works
            </h2>
            <p className="mt-6 text-lg text-gray-700">A simple four-step process designed for maximum convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <QrCode className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">1. Scan QR</h3>
              <p className="text-sm text-gray-600">Guests scan the QR code placed in their room</p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">2. View Menu</h3>
              <p className="text-sm text-gray-600">Browse available services and offerings digitally</p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <div className="flex items-center justify-center space-x-1">
                  <Phone className="h-6 w-6 text-primary" />
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">3. Order via Call/WhatsApp</h3>
              <p className="text-sm text-gray-600">Request service through call or message to staff</p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">4. Delivery & Service</h3>
              <p className="text-sm text-gray-600">Staff prepares and delivers the requested service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                Benefits
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Benefits for Your Hotel</h2>
              <p className="mt-6 text-lg text-gray-700">
                Discover the advantages of implementing Quickgick Discover at your property
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Improved Guest Communication</h3>
                    <p className="mt-1 text-gray-600">
                      Reduce miscommunication and order errors with digital menus and clear ordering process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Enhanced Service Discovery</h3>
                    <p className="mt-1 text-gray-600">
                      Increase awareness of all available hotel services, boosting utilization and revenue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Minimal Staff Training</h3>
                    <p className="mt-1 text-gray-600">
                      Easy to implement with minimal changes to existing operations and staff workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Cost-Effective Solution</h3>
                    <p className="mt-1 text-gray-600">
                      Affordable pricing model designed specifically for smaller hotels with limited budgets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={room}
                alt="Hotel staff using Quickgick Discover"
                width={800}
                height={600}
                className="h-[500px] w-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

