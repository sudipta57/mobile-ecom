import React, { useState } from "react";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="flex items-center bg-[#F2F4F5] p-5 ps-10 text-[#5F6C72] ">
        {/* Home */}
        <div className="flex justify-center font-poppins text-[14px] font-[400] ">
          {/* Home */}
          <p className="flex items-center">
            <img src="/home.png" alt="Home Icon" className="mr-2" />
            Home
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>
          {/* Electronics Devices */}
          <span className="text-[#2DA5F3]">Wishlist</span>
        </div>
      </div>
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div
          className="bg-white rounded-lg w-full max-w-sm p-8"
          style={{
            boxShadow: "0px 8px 40px 0px #0000001F",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 w-full">
            <button
              className={`w-1/2 pb-2 text-[#191C1F] text-[20px] font-[600] font-poppins ${
                !isSignUp
                  ? "border-b-2 border-[#FA8232] font-semibold"
                  : "text-[#77878F]"
              } focus:outline-none`}
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
            <button
              className={`w-1/2 pb-2 text-[#191C1F] text-[20px] font-[600] font-poppins ${
                isSignUp
                  ? "border-b-2 border-[#FA8232] font-semibold"
                  : "text-[#77878F]"
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
                  className="block text-[14px] font-[400] text-[#191C1F] font-poppins"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 p-3 border border-[#E4E7E9] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[14px] font-[400] text-[#191C1F] font-poppins"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 border border-[#E4E7E9] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Password */}
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-[14px] font-[400] text-[#191C1F] font-poppins"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 p-3 border border-[#E4E7E9] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4 relative">
                <label
                  htmlFor="confirm-password"
                  className="block text-[14px] font-[400] text-[#191C1F] font-poppins"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full mt-2 p-3 border border-[#E4E7E9] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="mb-6 flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-5 w-5 text-orange-500 focus:ring-orange-500"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 text-[14px] text-[500] text-[#475156] font-poppins leading-5"
                >
                  Are you agree to Clicon{" "}
                  <a href="#" className="text-[#2DA5F3]">
                    Terms of Condition
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#2DA5F3]">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FA8232] hover:bg-orange-600 text-white text-[14px] font-bold font-poppins py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="block text-[14px] font-[400] text-[#191C1F] font-poppins"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 border border-[#E4E7E9] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Password */}
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-[14px] font-[400] text-[#191C1F] font-poppins"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 p-3 border border-[#E4E7E9] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Forgot Password */}
              <div className="mb-6 text-right">
                <a
                  href="#"
                  className="text-[14px] font-[500] font-poppins text-[#2DA5F3]"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FA8232] hover:bg-orange-600 text-white text-sm font-medium py-3 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              <span className="bg-white px-4 text-[14px] font-[400] font-poppins text-[#77878F]">
                or
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <button className="w-full flex items-center justify-center mb-3 border border-[#E4E7E9] py-2 rounded-[2px] focus:outline-none hover:bg-gray-50">
            <img src="/home/google-icon.png" alt="Google" className="mr-2" />
            <span className="text-[14px] font-[400] font-poppins text-[#475156]">
              {isSignUp ? "Sign up with Google" : "Login with Google"}
            </span>
          </button>
          <button className="w-full flex items-center justify-center mb-3 border border-[#E4E7E9] py-2 rounded-[2px] focus:outline-none hover:bg-gray-50">
            <img src="/home/apple-icon.png" alt="apple" className="mr-2" />

            <span className="text-[14px] font-[400] font-poppins text-[#475156]">
              {isSignUp ? "Sign up with Apple" : "Login with Apple"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
