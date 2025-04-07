"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Globe, Clock, BarChart3, ShieldCheck, Smartphone, MessageCircle } from "lucide-react"

export default function DetailedFeatures() {
  const [activeTab, setActiveTab] = useState("discover")
  const [direction, setDirection] = useState<"left" | "right">("right")

  const handleTabChange = (value: string) => {
    if (value === activeTab) return

    // Determine animation direction based on tab order
    const tabOrder = ["discover", "engage"]
    const currentIndex = tabOrder.indexOf(activeTab)
    const newIndex = tabOrder.indexOf(value)
    setDirection(newIndex > currentIndex ? "right" : "left")

    setActiveTab(value)
  }

  return (
    <section className="py-16 sm:py-18 bg-gradient-to-b from-white via-[#FFF5F2]/50 to-background" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Detailed Features</h2>
          <p className="mt-4 text-lg text-[#783610]/80">Explore the comprehensive feature set of each Quickgick solution</p>
        </div>

        <Tabs defaultValue="discover" value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="discover" className="text-base py-3">
                Quickgick Discover
              </TabsTrigger>
              <TabsTrigger value="engage" className="text-base py-3">
                Quickgick Engage
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="relative overflow-hidden">
            <div className={`tab-animation-container ${direction}`}>
              <TabsContent value="discover" className="tab-content w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Multi-language Support</h3>
                    <p className="text-gray-600">
                      Present your menu in multiple languages to accommodate international guests.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md feature-card">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">WhatsApp Integration</h3>
                    <p className="text-gray-600">
                      Allow guests to place orders directly via WhatsApp with pre-filled message templates.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md feature-card">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Quick Setup</h3>
                    <p className="text-gray-600">
                      Get your digital menu system up and running within hours with our assisted onboarding.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md feature-card">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Basic Analytics</h3>
                    <p className="text-gray-600">
                      Track menu views and identify the most popular items with simple analytics.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md feature-card">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">No App Download</h3>
                    <p className="text-gray-600">
                      Guests access your services via their browser with no app installation required.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="engage" className="tab-content w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-gray-600">
                      Build guest loyalty with points, rewards, and personalized promotions.
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
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <a href="#pricing">View Pricing</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

