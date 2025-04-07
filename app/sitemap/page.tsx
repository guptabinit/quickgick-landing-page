import Link from "next/link"

export default function SitemapPage() {
  return (
    <div className="py-32 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-8">Sitemap</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-secondary mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-primary hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-primary hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-primary hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-primary hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-secondary mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/discover" className="text-primary hover:underline">
                  Quickgick Discover
                </Link>
              </li>
              <li>
                <Link href="/engage" className="text-primary hover:underline">
                  Quickgick Engage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-secondary mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-primary hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

