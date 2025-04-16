import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import BackendTag from "./backend-by"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-tertiary py-14">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block rounded-full border-2 border-orange-400 bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-3">
              Transforming Hotel Guest Experiences
            </div>
            <h1 className="text-4xl mb-6 font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl">
              Maximizing Hotel Revenue by <span className="text-primary">Connecting Guests</span>
            </h1>
            <p className="text-xl mb-8 text-orange-700 max-w-xl">
              Quickgick's smart QR-based platform revolutionizes how hotels deliver services. Streamline dining,
              laundry, spa bookings, and more while enhancing guest satisfaction and boosting revenue.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8 py-6" asChild>
                <a href="#contact">
                Try It Out
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <br/>
              <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
                <Link href="#products">Explore Solutions</Link>
              </Button>

              {/* Product Hunt Badge */}
              <div className="flex items-center mt-4 lg:mt-0">
                <a
                  href="https://www.producthunt.com/posts/quickgick?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-quickgick"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=944159&theme=light&t=1743597073247"
                    alt="Quickgick - Smart menu for smart hotels | Product Hunt"
                    className="w-[250px] h-[54px]"
                    width="250"
                    height="54"
                  />
                </a>
              </div>
              <BackendTag/>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000"
                alt="Luxury hotel pool"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

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
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-primary">30% More Engagement</p>
                  <p className="text-sm text-gray-600">Among hotel guests</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 rounded-xl bg-white p-4 shadow-lg md:max-w-xs">
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
                  <p className="text-lg font-semibold text-primary">20% Revenue Boost</p>
                  <p className="text-sm text-gray-600">For hotel services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

