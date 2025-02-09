import React from "react";

export default function ForgotPassword() {
  return (
    <div>
      <div className="h-auto p-6 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold text-center mb-2">
            Forget Password
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Enter the email address or mobile phone number associated with your
            account.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 flex items-center justify-center"
            >
              SEND CODE →
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
            <p className="text-sm">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
          <p className="text-sm text-center text-gray-600 mt-6">
            You may contact{" "}
            <a
              href="/customer-service"
              className="text-orange-500 hover:underline"
            >
              Customer Service
            </a>{" "}
            for help restoring access to your account.
          </p>
        </div>
      </div>
    </div>
  );
}
