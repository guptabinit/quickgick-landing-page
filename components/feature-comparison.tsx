import { Check, X } from "lucide-react"

export default function FeatureComparison() {
  return (
    <section className="py-16 sm:py-18 bg-tertiary" id="comparison">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">Feature Comparison</h2>
          <p className="mt-4 text-lg text-[#783610]/80">Choose the right solution based on your hotel's specific needs</p>
        </div>

        <div className="mx-auto overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full min-w-[640px] border-collapse text-left bg-white">
            <thead>
              <tr className="bg-orange-100">
                <th className="border-b border-orange-100 py-4 px-6 text-sm font-semibold text-secondary">Features</th>
                <th className="border-b border-orange-100 px-6 py-4 text-sm font-semibold text-secondary">
                  Traditional Hotel Service
                </th>
                <th className="border-b border-orange-100 px-6 py-4 text-sm font-semibold text-primary">
                  Quickgick Discover
                </th>
                <th className="border-b border-orange-100 px-6 py-4 text-sm font-semibold text-primary">
                  Quickgick Engage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Guest Convenience
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Limited to phone calls</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  Digital menu with call/WhatsApp ordering
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  Complete digital ordering with tracking
                </td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Ordering Method
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Phone or paper form</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  QR menu with call/WhatsApp
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  Digital ordering, payment, tracking
                </td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Digital Menu Access
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <X className="h-5 w-5 text-red-500" />
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <Check className="h-5 w-5 text-green-500" />
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <Check className="h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Real-time Tracking
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <X className="h-5 w-5 text-red-500" />
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <X className="h-5 w-5 text-red-500" />
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <Check className="h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  PMS Integration
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <X className="h-5 w-5 text-red-500" />
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <X className="h-5 w-5 text-red-500" />
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <Check className="h-5 w-5 text-green-500" />
                </td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Upselling Capabilities
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Limited</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Basic</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  Advanced with recommendations
                </td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Guest Data & Analytics
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  <X className="h-5 w-5 text-red-500" />
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Basic</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Comprehensive insights</td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Multi-service Integration
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Manual</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Basic menu display</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  Full integration across services
                </td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Implementation Time
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">N/A</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">1-3 days</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">7-14 days</td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="border-b border-orange-100 py-4 px-6 text-sm font-medium text-secondary">
                  Hotel Size Suitability
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">Any</td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  Small to medium (up to 50 rooms)
                </td>
                <td className="border-b border-orange-100 px-6 py-4 text-sm text-gray-700">
                  Medium to luxury (30+ rooms)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

