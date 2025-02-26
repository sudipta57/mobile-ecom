import React from "react";

export default function PageNotFound() {
  return (
    <div>
      <div className="flex items-center justify-center h-auto">
        <div className="rounded-lg p-8 text-center max-w-2xl mx-auto w-full">
          {/* Top Image */}
          <div className="mb-6">
            <img
              src="/notFound.png"
              alt="Error Illustration"
              className="w-full mx-auto"
            />
          </div>

          {/* Error Text */}
          <h1 className="text-[36px] font-[600] text-[#191C1F] font-poppins mb-4">
            404, Page not found
          </h1>
          <p className="text-[16px] font-[400] text-[#475156] font-poppins mb-6">
            Something went wrong. It looks like the page you’re looking for
            could not be found. It’s likely the link is broken or the page has
            been removed.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-[#FA8232] text-white rounded-[2px] text-[14px] font-[700] font-poppins flex justify-center items-center space-x-2 uppercase">
              <img src="/home/left-arrow.png" alt="left-arrow" />
              <p>Go Back</p>
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="border-2 border-[#FFE7D6] text-[#FA8232] px-4 py-2 text-[14px] font-[700] font-poppins flex justify-center items-center space-x-2 uppercase transition"
            >
              <img src="/House.png" alt="home" />
              GO TO HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
