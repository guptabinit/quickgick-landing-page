import { RotateCcw, AlertTriangle, CreditCard, HelpCircle } from "lucide-react"

export default function CancellationRefundPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-tertiary to-white">
      {/* Header */}
      <div className="py-16 sm:py-18 bg-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
              Cancellation & Refund Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">Our policies regarding cancellations and refunds</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 ">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
              <RotateCcw className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="font-medium text-secondary">April 8, 2024</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              This Cancellation & Refund Policy outlines how hotel partners and clients can cancel or request a refund
              for products or services purchased through Quickgick.
            </p>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <RotateCcw className="h-5 w-5 text-primary" />
              </span>
              Cancellations & Refunds
            </h2>
            <div className="bg-tertiary rounded-lg p-6 my-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Refunds will only be entertained if the request is raised within 24 hours of purchase or activation.
                </li>
                <li>
                  After the 24-hour window, no refunds will be processed, except under special circumstances at the sole
                  discretion of the Quickgick team.
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-3">Special refund considerations may be reviewed in cases such as:</p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Duplicate payments or billing errors.</li>
              <li>Failure of service due to a proven technical issue from Quickgick's end.</li>
              <li>A clearly demonstrated failure to deliver what was promised during onboarding or setup.</li>
            </ul>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </span>
              Non-Refundable Cases
            </h2>
            <p className="text-gray-700 mb-3">Refunds will not be issued under the following conditions:</p>
            <div className="bg-tertiary rounded-lg p-6 my-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Change of mind after the 24-hour window.</li>
                <li>Misunderstanding of features without prior clarification.</li>
                <li>
                  Delay or failure due to hotel-side configuration, internal policies, or third-party integrations not
                  managed by Quickgick.
                </li>
                <li>Services that have already been delivered, customized, or partially/fully used.</li>
              </ul>
            </div>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <CreditCard className="h-5 w-5 text-primary" />
              </span>
              Refund Processing
            </h2>
            <div className="bg-tertiary rounded-lg p-6 my-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>If approved, refunds will be processed within 7 business days to the original payment method.</li>
                <li>You will receive an email confirmation once the refund has been initiated.</li>
              </ul>
            </div>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <HelpCircle className="h-5 w-5 text-primary" />
              </span>
              Need Help?
            </h2>
            <p className="text-gray-700">
              For refund requests or queries, please reach out to our support team at{" "}
              <a href="mailto:info@quickgick.com" className="text-primary hover:underline">
                info@quickgick.com
              </a>{" "}
              within 24 hours of your purchase.
            </p>

            <div className="bg-tertiary rounded-lg p-6 mt-6">
              <p className="font-semibold text-secondary">Quickgick</p>
              <p>
                Email:{" "}
                <a href="mailto:info@quickgick.com" className="text-primary hover:underline">
                  info@quickgick.com
                </a>
              </p>
              <p>Phone: +91 22 6962 1024</p>
              <p>
                Address: Room 411, NSUT IIF, NSUT,
                <br />
                Dwarka Sector 3, Delhi, IN - 110078
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

