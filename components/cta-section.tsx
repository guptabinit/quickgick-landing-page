import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-20">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to Revolutionize Your Hotel Experience?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white opacity-90">
            Join the growing number of hotels that are streamlining their operations, delighting guests, and boosting
            revenue with Quickgick's smart solutions.
          </p>
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="mt-6 relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 
                            shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,165,0,0.7)] 
                            transition duration-300 ease-in-out 
                            before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] 
                            before:bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_0%,_transparent_70%)] 
                            before:opacity-60 before:blur-xl before:z-[-1]"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
        </div>
      </div>
    </section>
  )
}

