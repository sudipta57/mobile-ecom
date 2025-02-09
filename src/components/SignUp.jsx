import React, { useState } from "react";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-sm p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <button
            className={`text-lg font-medium ${
              !isSignUp
                ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                : "text-gray-400"
            } focus:outline-none`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
          <button
            className={`text-lg font-medium ${
              isSignUp
                ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                : "text-gray-400"
            } focus:outline-none`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>

        {/* Form Content */}
        {isSignUp ? (
          <form>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="8+ characters"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4 relative">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm your password"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="mb-6 flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-600 leading-5"
              >
                Are you agree to Clicon{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms of Condition
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              SIGN UP <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </form>
        ) : (
          <form>
            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password */}
            <div className="mb-6 text-right">
              <a href="#" className="text-sm text-blue-500 underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              SIGN IN <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </form>
        )}

        {/* OR Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">or</span>
          </div>
        </div>

        {/* Social Buttons */}
        <button className="w-full flex items-center justify-center mb-3 border border-gray-300 py-2 rounded-lg focus:outline-none hover:bg-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          <span className="text-sm font-medium text-gray-600">
            {isSignUp ? "Sign up with Google" : "Sign in with Google"}
          </span>
        </button>
        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg focus:outline-none hover:bg-gray-50">
          <i className="fa-brands fa-apple text-lg mr-2"></i>
          <span className="text-sm font-medium text-gray-600">
            {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
