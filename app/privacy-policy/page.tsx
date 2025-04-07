import { Shield, Eye, Database, Scale, Bell, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-tertiary to-white">
      {/* Header */}
      <div className="py-16 sm:py-18 bg-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">Privacy Policy</h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">How we collect, use, and protect your information</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="font-medium text-secondary">April 8, 2024</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <FileText className="h-5 w-5 text-primary" />
              </span>
              Introduction
            </h2>
            <p className="mt-4">
              Quickgick ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <Database className="h-5 w-5 text-primary" />
              </span>
              Information We Collect
            </h2>
            <p className="mt-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>

            <h3 className="text-xl font-semibold text-secondary mt-6">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and demographic
              information that you voluntarily give to us when you register with us or when you choose to participate in
              various activities related to our services. You are under no obligation to provide us with personal
              information of any kind, however your refusal to do so may prevent you from using certain features of our
              service.
            </p>

            <h3 className="text-xl font-semibold text-secondary mt-6">Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access our services, such as your IP address,
              browser type, operating system, access times, and the pages you have viewed directly before and after
              accessing our services.
            </p>

            <h3 className="text-xl font-semibold text-secondary mt-6">Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card
              brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
              information about our services.
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <Eye className="h-5 w-5 text-primary" />
              </span>
              Use of Your Information
            </h2>
            <p className="mt-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via our services to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your transactions.</li>
              <li>Send you email newsletters, if you have opted in to receive them.</li>
              <li>Respond to your inquiries and customer service requests.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding promotions.</li>
              <li>Monitor and analyze usage and trends to improve your experience with our services.</li>
              <li>Notify you of updates to our services.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <Scale className="h-5 w-5 text-primary" />
              </span>
              Disclosure of Your Information
            </h2>
            <p className="mt-4">
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>

            <h3 className="text-xl font-semibold text-secondary mt-6">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation.
            </p>

            <h3 className="text-xl font-semibold text-secondary mt-6">Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including
              payment processing, data analysis, email delivery, hosting services, customer service, and marketing
              assistance.
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <Shield className="h-5 w-5 text-primary" />
              </span>
              Security of Your Information
            </h2>
            <p className="mt-4">
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <Bell className="h-5 w-5 text-primary" />
              </span>
              Contact Us
            </h2>
            <p className="mt-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>

            <div className="bg-tertiary rounded-lg p-6 mt-4">
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

