"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Youtube, Instagram, Linkedin, ArrowUp } from "lucide-react"
import logo from "@/public/QG_black.png"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
                <a href="mailto:quickgick@gmail.com" className="hover:text-white transition-colors">
                  quickgick@gmail.com
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
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/cancellation-refund-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Cancellation & Refund Policy
            </Link>
            <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
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
    </footer>
  )
}

