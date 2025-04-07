"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Smartphone, Phone, MessageSquare, Clock, CheckCircle2 } from "lucide-react"
import qr from "@/public/QR_scan.avif"
import room from "@/public/RoomService.avif"

export default function HowItWorks() {
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
    <section className="py-20 sm:py-20 bg-gradient-to-b from-white via-[#FFF5F2]/50 to-background" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full bg-white border-2 border-orange-400 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">How Quickgick Works</h2>
          <p className="mt-4 text-[#783610]/80 text-lg">
            Simple, efficient processes designed to enhance guest experiences and streamline operations
          </p>
        </div>

        <Tabs defaultValue="discover" value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-12">
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
              {/* Discover Tab Content */}
              <TabsContent value="discover" className="tab-content w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-6">Simplified Digital Menu System</h3>
                    <p className="text-gray-700 mb-8">
                      Quickgick Discover offers a streamlined approach to digital menus, perfect for small to medium
                      hotels looking to enhance guest services without complex implementation.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <QrCode className="h-5 w-5 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900">Easy QR Code Scanning</h4>
                          <p className="mt-1 text-gray-600">
                            Guests simply scan QR codes placed in their rooms to access your digital menu.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900">Direct Communication</h4>
                          <p className="mt-1 text-gray-600">
                            After browsing the menu, guests place orders via direct call or WhatsApp message.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900">Minimal Implementation</h4>
                          <p className="mt-1 text-gray-600">
                            Quick setup with minimal changes to your existing operational workflow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={qr || "/placeholder.svg"}
                      alt="Quickgick Discover Process"
                      width={800}
                      height={600}
                      className="h-[500px] w-full object-cover rounded-xl shadow-xl"
                    />
                  </div>
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
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">4. Delivery & Service</h3>
                    <p className="text-sm text-gray-600">Staff prepares and delivers the requested service</p>
                  </div>
                </div>
              </TabsContent>

              {/* Engage Tab Content */}
              <TabsContent value="engage" className="tab-content w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  <div className="order-2 lg:order-1">
                    <Image
                      src={room || "/placeholder.svg"}
                      alt="Quickgick Engage Process"
                      width={800}
                      height={600}
                      className="h-[500px] w-full object-cover rounded-xl shadow-xl"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-secondary mb-6">Complete Digital Ordering System</h3>
                    <p className="text-gray-700 mb-8">
                      Quickgick Engage provides a comprehensive end-to-end solution for premium hotels seeking to fully
                      digitize their guest service experience.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900">Direct Digital Ordering</h4>
                          <p className="mt-1 text-gray-600">
                            Guests browse, select, and pay for services directly through the digital interface.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900">Real-time Tracking</h4>
                          <p className="mt-1 text-gray-600">
                            Guests can monitor their order status in real-time from placement to delivery.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
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
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900">Multi-service Integration</h4>
                          <p className="mt-1 text-gray-600">
                            Seamlessly connect dining, spa, laundry, and other services in one platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="rounded-xl bg-white p-6 text-center shadow feature-card">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                      <QrCode className="h-8 w-8 text-primary" />
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
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">5. Receive Service</h3>
                    <p className="text-sm text-gray-600">Enjoy seamless service delivery and rate experience</p>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>

        <div className="mt-16 text-center">
          <Button size="lg" className="px-8 py-6 text-base" asChild>
            <a href="#comparison">Compare Features</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

