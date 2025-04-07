"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logo from "@/public/QG_black.png"

const navigation = [
  { name: "Workflow", href: "/#how-it-works" },
  { name: "Features", href: "/#features" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
]

export default function Header({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getContactLink = () => {
    // If we're on the homepage, use the anchor link
    /*if (typeof window !== "undefined" && window.location.pathname === "/") {
      return "/#contact"
    }*/
    // Otherwise, go to the contact page
    return "/#contact"
  }

  const openMenu = () => {
    document.body.style.overflow = "hidden"
    setMobileMenuOpen(true)
  }

  const closeMenu = () => {
    document.body.style.overflow = ""
    setMobileMenuOpen(false)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the homepage
    if (href.startsWith("/#") && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        closeMenu()
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header height
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 bg-white/60 shadow-md backdrop-blur",
          className,
        )}
        suppressHydrationWarning
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Quickgick</span>
              <Image
                src={logo || "/placeholder.svg"}
                alt="Quickgick Logo"
                width={150}
                height={40}
                priority
                className="h-8 w-auto sm:h-10"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={openMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-sm font-medium leading-6 text-gray-900 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button size="lg" variant="default" asChild>
              <a href={getContactLink()}>Get Started</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu with CSS animations - moved outside header */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            ref={backdropRef}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm animate-fade-in"
            onClick={closeMenu}
          />

          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-full" onClick={(e) => e.stopPropagation()}>
            <div ref={menuRef} className="w-screen max-w-sm bg-white shadow-xl animate-slide-in">
              <div className="flex items-center justify-between px-6 pt-6">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Quickgick</span>
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt="Quickgick Logo"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 px-6">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50`}
                        style={{ animationDelay: `${150 + index * 75}ms` }}
                        onClick={(e) => {
                          handleLinkClick(e, item.href)
                          closeMenu()
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 px-6">
                    <Button
                      className="w-full"
                      style={{ animationDelay: "400ms" }}
                      size="lg"
                      asChild
                    >
                      <a href={getContactLink()} onClick={closeMenu}>
                        Get Started
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

