"use client"

import type React from "react"

import { useState } from "react"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, CheckCircle } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    hotel: "",
    rooms: "",
    interest: "",
    message: "",
    submitted: false,
    loading: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true }))

    try {
      // Prepare data for EmailJS
      const data = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        company: formState.hotel, // Map hotel name to company field in the template
        product: formState.interest?.toUpperCase() || "",
        rooms: formState.rooms,
        message: formState.message,
        timestamp: new Date().toLocaleString(),
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "",
      )

      console.log("Email sent successfully:", result.text)

      // Show success state
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
      }))
    } catch (error) {
      console.error("Error sending email:", error)
      setFormState((prev) => ({ ...prev, loading: false }))

      // Show error message
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      })
    }
  }

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      phone: "",
      hotel: "",
      rooms: "",
      interest: "",
      message: "",
      submitted: false,
      loading: false,
    })
  }

  return (
    <section className="py-16 sm:py-18 bg-gradient-to-b from-white via-[#FFF5F2]/50 to-background" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full border-2 border-orange-500 bg-white px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Get in Touch with Quickgick</h2>
          <p className="mt-4 text-lg text-[#783610]/80">
            Ready to transform your hotel's guest experience? Our team is here to help you choose the right solution for
            your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="bg-primary p-6 text-white">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="mt-2 text-white/80">Reach out to us directly or fill out the form</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">Call Us</h4>
                    <p className="mt-1 text-sm text-gray-600">Binit Gupta (CEO): +91 89207 96562</p>
                    <p className="mt-1 text-sm text-gray-600">Devansh Kumar Padhi (CMO): +91 88607 01320</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">Email Us</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      <a href="mailto:info@quickgick.com" className="text-primary hover:underline">
                        info@quickgick.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">WhatsApp</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      <a href="https://wa.me/918920796562" className="text-primary hover:underline">
                        Send us a message
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-secondary mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Get a personalized demo of our platform</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Discuss custom requirements for your hotel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Learn about special pricing and offers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Get answers to your specific questions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8">
                {!formState.submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name*
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="rounded-md"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address*
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="rounded-md"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number*
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="rounded-md"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="hotel" className="text-sm font-medium">
                          Hotel/Property Name*
                        </Label>
                        <Input
                          id="hotel"
                          name="hotel"
                          placeholder="Your hotel name"
                          value={formState.hotel}
                          onChange={(e) => setFormState({ ...formState, hotel: e.target.value })}
                          className="rounded-md"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="rooms" className="text-sm font-medium">
                          Number of Rooms
                        </Label>
                        <Select
                          name="rooms"
                          value={formState.rooms}
                          onValueChange={(value) => setFormState({ ...formState, rooms: value })}
                        >
                          <SelectTrigger id="rooms" className="rounded-md">
                            <SelectValue placeholder="Select room count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-15">1-15 rooms</SelectItem>
                            <SelectItem value="16-30">16-30 rooms</SelectItem>
                            <SelectItem value="31-50">31-50 rooms</SelectItem>
                            <SelectItem value="51-100">51-100 rooms</SelectItem>
                            <SelectItem value="100+">100+ rooms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest" className="text-sm font-medium">
                          Product Interest*
                        </Label>
                        <Select
                          name="interest"
                          value={formState.interest}
                          onValueChange={(value) => setFormState({ ...formState, interest: value })}
                          required
                        >
                          <SelectTrigger id="interest" className="rounded-md">
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="discover">Quickgick Discover</SelectItem>
                            <SelectItem value="engage">Quickgick Engage</SelectItem>
                            <SelectItem value="both">Both Solutions</SelectItem>
                            <SelectItem value="unsure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="message" className="text-sm font-medium">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your requirements or questions"
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="rounded-md resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">* Required fields</p>
                      <Button type="submit" size="lg" className="px-8" disabled={formState.loading}>
                        {formState.loading ? "Submitting..." : "Submit"}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4">Thank You!</h3>
                    <p className="text-gray-700 mb-6">
                      Your message has been successfully submitted. One of our team members will get back to you within
                      24 hours.
                    </p>
                    <Button onClick={resetForm} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

