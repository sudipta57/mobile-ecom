import React from "react";

export default function OTPSection() {
  return (
    <div>
      <div className="pt-28 md:pt-10 px-7 py-10 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold text-center mb-2">
            Verify Your Email Address
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu,
            tristique a eu in diam.
          </p>
          <form>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="verificationCode"
                  className="text-sm font-medium text-gray-700"
                >
                  Verification Code
                </label>
                <button
                  type="button"
                  className="text-blue-500 text-sm hover:underline"
                >
                  Resend Code
                </button>
              </div>
              <input
                type="text"
                id="verificationCode"
                placeholder="Enter code"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 flex items-center justify-center"
            >
              VERIFY ME →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
