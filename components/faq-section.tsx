"use client"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

export default function FAQSection() {
  return (
    <section className="py-20 sm:py-14 bg-tertiary" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
        <span className="inline-block rounded-full border-2 border-orange-500 bg-white px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-6 text-lg text-[#783610]/80">Find answers to the most common questions about Quickgick</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How long does it take to set up Quickgick for my hotel?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Quickgick Discover can be set up within 1-3 days, while Quickgick Engage typically takes 7-14 days for
                  full implementation, depending on your hotel's complexity and integration requirements. Our team
                  provides guided onboarding to ensure a smooth transition.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Can Quickgick integrate with my existing hotel management system?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Yes, Quickgick Engage offers integration with popular PMS and CRM systems. We support integrations
                  with major providers like Opera, Cloudbeds, RezNext, and more. Quickgick Discover is a standalone
                  system that works alongside your existing setup without requiring direct integration.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How customizable is the guest-facing interface?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Both solutions offer customization options. You can add your hotel logo, colors, and branding.
                  Quickgick Engage offers more extensive customization, including unique layouts, content organization,
                  and custom promotional elements to match your hotel's brand identity perfectly.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">How are payments handled in Quickgick?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  With Quickgick Discover, payments happen outside the platform through your existing methods, since
                  guests call or WhatsApp to place orders. Quickgick Engage includes integrated payment processing with
                  options for room charges, online payments, and can connect with your existing payment gateway.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Do I need any special hardware to use Quickgick?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  No specialized hardware is required. You'll only need printed QR codes placed in guest rooms and
                  common areas, and standard computers/tablets for staff to manage the system. For Quickgick Engage, you
                  might want tablets for staff to process orders, but this can also be done with existing devices.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                What training and support does Quickgick provide?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  All Quickgick plans include comprehensive onboarding and training for your staff. We provide
                  documentation, video tutorials, and live training sessions. Ongoing support is available via email and
                  chat for all users, while Quickgick Engage customers also receive priority support with a dedicated
                  account manager.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Can I upgrade from Quickgick Discover to Engage later?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  We've designed our platform with scalability in mind. You can start with Quickgick Discover and easily
                  upgrade to Engage as your needs evolve. The transition is smooth, and your existing setup and data
                  will transfer to the enhanced platform.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">Is there a free trial available?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Yes, we offer a 14-day free trial for Quickgick Discover so you can experience the platform firsthand.
                  For Quickgick Engage, we provide a personalized demo tailored to your hotel's specific needs. Contact
                  our sales team to schedule your demo or start your free trial today.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-700">Still have questions?</p>
          <Button size="lg" className="px-8 py-6 text-base group" asChild>
            <a href="/#contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

