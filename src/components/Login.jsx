import React from 'react'

export default function Login() {
  return (
    <div>
<div className="flex h-screen items-center justify-center bg-gray-100">
  {/* Container for equal height */}
  <div className="flex w-full max-w-6xl h-[80%] bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Left Section */}
    <div className="w-1/2 flex items-center justify-center bg-gray-50">
      <img
        src="/home/login.png"
        alt="Fashion Model"
        className="h-full w-auto object-contain"
      />
    </div>

    {/* Right Section */}
    <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="max-w-md w-full">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-green-600 mb-8">
          HELLO <span className="text-black">SHOP</span>
        </h1>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold mb-2">Welcome 👋</h2>
        <p className="text-gray-500 mb-6">Please login here</p>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="robertfox@example.com"
              className="w-full border-gray-300 rounded-md p-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full border-gray-300 rounded-md p-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-600"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a href="#!" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
