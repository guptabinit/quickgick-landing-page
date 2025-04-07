import { FileCheck, AlertTriangle, CreditCard, UserCheck, ShieldCheck, HelpCircle } from "lucide-react"

export default function TermsConditionsPage() {
  return (
    <div className="bg-gradient-to-b from-tertiary to-white">
      {/* Header */}
      <div className="py-16 sm:py-18 bg-tertiary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">Terms & Conditions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">The legal agreement between you and Quickgick</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="font-medium text-secondary">April 8, 2024</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <FileCheck className="h-5 w-5 text-primary" />
              </span>
              Agreement to Terms
            </h2>
            <p className="mt-4">
              These Terms of Service constitute a legally binding agreement made between you and Quickgick ("we," "us,"
              or "our"), concerning your access to and use of our website and services.
            </p>
            <p>
              You agree that by accessing our services, you have read, understood, and agree to be bound by all of these
              Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from
              using our services and must discontinue use immediately.
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </span>
              Intellectual Property Rights
            </h2>
            <p className="mt-4">
              Unless otherwise indicated, our services and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics (collectively, the "Content") and the trademarks,
              service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us,
              and are protected by copyright and trademark laws.
            </p>
            <p>
              The Content and the Marks are provided "AS IS" for your information and personal use only. Except as
              expressly provided in these Terms of Service, no part of our services and no Content or Marks may be
              copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated,
              transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever,
              without our express prior written permission.
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <UserCheck className="h-5 w-5 text-primary" />
              </span>
              User Representations
            </h2>
            <p className="mt-4">By using our services, you represent and warrant that:</p>
            <div className="bg-tertiary rounded-lg p-6 my-4">
              <ol className="list-decimal pl-6 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>
                  You will maintain the accuracy of such information and promptly update such registration information
                  as necessary.
                </li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
                <li>
                  You will not access our services through automated or non-human means, whether through a bot, script,
                  or otherwise.
                </li>
                <li>You will not use our services for any illegal or unauthorized purpose.</li>
                <li>Your use of our services will not violate any applicable law or regulation.</li>
              </ol>
            </div>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <CreditCard className="h-5 w-5 text-primary" />
              </span>
              Fees and Payment
            </h2>
            <p className="mt-4">We accept the following forms of payment:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Credit Card</li>
              <li>PayPal</li>
              <li>Bank Transfer</li>
            </ul>
            <p>
              You agree to provide current, complete, and accurate purchase and account information for all purchases
              made via our services. You further agree to promptly update account and payment information, including
              email address, payment method, and payment card expiration date, so that we can complete your transactions
              and contact you as needed.
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </span>
              Cancellation
            </h2>
            <p className="mt-4">
              You can cancel your subscription at any time by contacting us. Your cancellation will take effect at the
              end of the current paid term.
            </p>
            <p>
              If you are unsatisfied with our services, please email us at{" "}
              <a href="mailto:info@quickgick.com" className="text-primary hover:underline">
                info@quickgick.com
              </a>
              .
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <AlertTriangle className="h-5 w-5 text-primary" />
              </span>
              Prohibited Activities
            </h2>
            <p className="mt-4">
              You may not access or use our services for any purpose other than that for which we make them available.
              Our services may not be used in connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>

            <div className="my-8 border-t border-gray-200"></div>

            <h2 className="flex items-center text-2xl font-bold text-secondary">
              <span className="bg-orange-100 p-2 rounded-full mr-3">
                <HelpCircle className="h-5 w-5 text-primary" />
              </span>
              Contact Us
            </h2>
            <p className="mt-4">
              In order to resolve a complaint regarding our services or to receive further information regarding use of
              our services, please contact us at:
            </p>

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

