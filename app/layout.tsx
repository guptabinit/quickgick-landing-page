import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] })

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Quickgick - Smart Menu for Smart Hotels",
  description: "Transform guest experiences with digital ordering solutions for hotels.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16 bg-tertiary">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'