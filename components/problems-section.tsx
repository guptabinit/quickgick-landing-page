import { AlertTriangle, MessageCircleX, Users } from "lucide-react"

export default function ProblemsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-[#FFF5F2]/50 to-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-block rounded-full border-2 border-orange-600 bg-white px-4 py-1.5 text-xs font-semibold text-orange-500">
            Pain Points
          </div>
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#783610]">The Problems We Solve</h2>
          <p className="mx-auto mt-2 max-w-2xl text-[#783610]/80 text-lg">
            Traditional room service faces significant challenges that impact both guest satisfaction and hotel
            operations
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Problem 1 */}
          <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg problems-card">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <MessageCircleX className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary">Inefficient Communication</h3>
            <p className="mt-4 text-gray-700">
              Traditional phone-based room service leads to miscommunication, long wait times, and order errors.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20v-6"></path>
                  <path d="M12 14l-2-2 2-2 2 2-2 2Z"></path>
                  <path d="M15.45 11.55L20 8"></path>
                  <path d="M8.55 11.55L4 8"></path>
                  <path d="M9 4L3.5 7 12 12l8.5-5L15 4"></path>
                </svg>
                <span>60% of hotels report order accuracy issues</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                <span>Decreased guest satisfaction and revenue loss</span>
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg problems-card">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary">Operational Bottlenecks</h3>
            <p className="mt-4 text-gray-700">
              Manual order processing creates staff overwhelm, delayed service, and poor resource allocation.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20v-6"></path>
                  <path d="M12 14l-2-2 2-2 2 2-2 2Z"></path>
                  <path d="M15.45 11.55L20 8"></path>
                  <path d="M8.55 11.55L4 8"></path>
                  <path d="M9 4L3.5 7 12 12l8.5-5L15 4"></path>
                </svg>
                <span>40% of staff time spent on administrative tasks</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                <span>Reduced efficiency and higher operational costs</span>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg problems-card">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary">Limited Guest Engagement</h3>
            <p className="mt-4 text-gray-700">
              Paper menus and traditional systems fail to capture guest preferences and limit upselling opportunities.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 20v-6"></path>
                  <path d="M12 14l-2-2 2-2 2 2-2 2Z"></path>
                  <path d="M15.45 11.55L20 8"></path>
                  <path d="M8.55 11.55L4 8"></path>
                  <path d="M9 4L3.5 7 12 12l8.5-5L15 4"></path>
                </svg>
                <span>30% lower average order value</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                <span>Missed revenue opportunities and lower guest satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

