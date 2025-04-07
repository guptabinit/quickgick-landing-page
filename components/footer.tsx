"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Youtube, Instagram, Linkedin, ArrowUp, X } from "lucide-react"
import logo from "@/public/QG_black.png"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showRefundModal, setShowRefundModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle modal interactions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowRefundModal(false)
      }
    }

    // Handle escape key to close modal
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowRefundModal(false)
      }
    }

    if (showRefundModal) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = ""
    }
  }, [showRefundModal])

  // Handle navigation like the header does
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the homepage
    if (href.startsWith("/#") && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header height
          behavior: "smooth",
        })
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Company info and social */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Quickgick Logo"
                width={180}
                height={50}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-center md:text-left text-gray-300 mb-8">
                Quickgick simplifies hotel services with a smart QR-based platform for dining, laundry, cabs, spa, and
                more. Streamline operations and enhance guest experiences effortlessly.
              </p>
              <div className="flex space-x-5">
                <a
                  href="https://www.youtube.com/@Quickgick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/quickgick/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/quick-gick/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Products
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#products"
                  onClick={(e) => handleLinkClick(e, "/#products")}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Quickgick Discover
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  onClick={(e) => handleLinkClick(e, "/#products")}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Quickgick Engage
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  onClick={(e) => handleLinkClick(e, "/#features")}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  onClick={(e) => handleLinkClick(e, "/#pricing")}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#how-it-works"
                  onClick={(e) => handleLinkClick(e, "/#how-it-works")}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Workflow
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  onClick={(e) => handleLinkClick(e, "/#testimonials")}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  onClick={(e) => handleLinkClick(e, "/#faq")}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <span className="block font-medium text-primary mb-1">Email:</span>
                <a href="mailto:info@quickgick.com" className="hover:text-white transition-colors">
                  info@quickgick.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block font-medium text-primary mb-1">Call us at:</span>
                <div>+91 22 6962 1024</div>
                <div>+91 89207 96562</div>
              </li>
              <li className="text-gray-300">
                <span className="block font-medium text-primary mb-1">Address:</span>
                Room 411, NSUT IIF, NSUT,
                <br />
                Dwarka Sector 3, Delhi, IN - 110078
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Quickgick. All rights reserved. | Powered by Brevity Technologies Private
            Limited
          </p>
          <div className="mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            <a
              href="/#privacy"
              onClick={(e) => handleLinkClick(e, "/#privacy")}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/#terms"
              onClick={(e) => handleLinkClick(e, "/#terms")}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <button
              onClick={() => setShowRefundModal(true)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Cancellation & Refund Policy
            </button>
            <a
              href="/#sitemap"
              onClick={(e) => handleLinkClick(e, "/#sitemap")}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Refund Policy Modal */}
      {showRefundModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            ref={modalRef}
            className="bg-white text-gray-900 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-slide-up"
          >
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-secondary">Cancellation & Refund Policy – Quickgick</h2>
              <button
                onClick={() => setShowRefundModal(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-6">
                This Cancellation & Refund Policy outlines how hotel partners and clients can cancel or request a refund
                for products or services purchased through Quickgick.
              </p>

              <h3 className="text-xl font-semibold text-secondary mb-3">Cancellations & Refunds</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>
                  Refunds will only be entertained if the request is raised within 24 hours of purchase or activation.
                </li>
                <li>
                  After the 24-hour window, no refunds will be processed, except under special circumstances at the sole
                  discretion of the Quickgick team.
                </li>
              </ul>

              <p className="text-gray-700 mb-3">Special refund considerations may be reviewed in cases such as:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>Duplicate payments or billing errors.</li>
                <li>Failure of service due to a proven technical issue from Quickgick's end.</li>
                <li>A clearly demonstrated failure to deliver what was promised during onboarding or setup.</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary mb-3">Non-Refundable Cases</h3>
              <p className="text-gray-700 mb-3">Refunds will not be issued under the following conditions:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>Change of mind after the 24-hour window.</li>
                <li>Misunderstanding of features without prior clarification.</li>
                <li>
                  Delay or failure due to hotel-side configuration, internal policies, or third-party integrations not
                  managed by Quickgick.
                </li>
                <li>Services that have already been delivered, customized, or partially/fully used.</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary mb-3">Refund Processing</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>If approved, refunds will be processed within 7 business days to the original payment method.</li>
                <li>You will receive an email confirmation once the refund has been initiated.</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary mb-3">Need Help?</h3>
              <p className="text-gray-700">
                For refund requests or queries, please reach out to our support team at{" "}
                <a href="mailto:info@quickgick.com" className="text-primary hover:underline">
                  info@quickgick.com
                </a>{" "}
                within 24 hours of your purchase.
              </p>
            </div>

            <div className="border-t p-6 flex justify-end">
              <button
                onClick={() => setShowRefundModal(false)}
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

