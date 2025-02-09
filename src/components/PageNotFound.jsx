import React from 'react'

export default function PageNotFound() {
  return (
    <div>
      <div className="flex items-center justify-center h-auto p-12 bg-gray-100">
      <div className="rounded-lg p-8 text-center max-w-md w-full">
        {/* Top Image */}
        <div className="mb-6">
          <img
            src="/notFound.png"
            alt="Error Illustration"
            className="w-3/4 mx-auto"
          />
        </div>

        {/* Error Text */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">404, Page not found</h1>
        <p className="text-gray-600 mb-6">
          Something went wrong. It looks like the page you’re looking for could
          not be found. It’s likely the link is broken or the page has been
          removed.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => window.history.back()}
            className="bg-[#FA8232] text-white px-4 py-2  hover:bg-orange-600 transition"
          >
            GO BACK
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-red-500 text-white px-4 py-2  hover:bg-red-600 transition"
          >
            GO TO HOME
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
