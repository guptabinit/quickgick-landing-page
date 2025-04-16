import Image from "next/image"

export default function BackendTag() {
  return (
    <div className="inline-flex items-center gap-6 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-6 py-3 border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <span className="text-base font-semibold text-primary dark:text-gray-100">Backend By</span>
      <div className="flex items-center gap-8 pl-4 border-l border-gray-300/50 dark:border-gray-700/50">
        <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/images/microsoft-azure.png"
            alt="Microsoft Azure"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 40px, 40px"
          />
        </div>
        <div className="relative h-10 w-40 transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/images/startup-india.png"
            alt="Startup India"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 160px, 160px"
          />
        </div>
        <div className="relative h-10 w-20 transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/images/aws-startups.png"
            alt="AWS Startups"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80px, 80px"
          />
        </div>
      </div>
    </div>
  )
}
