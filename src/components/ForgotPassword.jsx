import React from "react";

export default function ForgotPassword() {
  return (
    <div>
      <div className="flex items-center bg-[#F2F4F5] p-5 ps-10 text-[#5F6C72] ">
        {/* Home */}
        <div className="flex justify-center font-poppins text-[14px] font-[400] ">
          {/* Home */}
          <p className="flex items-center">
            <img src="/home.png" alt="Home Icon" className="mr-2" />
            Home
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>
          <p className="flex items-center">
            User Account
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>
          <p className="flex items-center">
            Sign In
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>
          {/* Electronics Devices */}
          <span className="text-[#2DA5F3]">Forget Password</span>
        </div>
      </div>
      <div className="h-auto p-6 flex items-center justify-center pt-28 md:pt-6">
        <div
          className="bg-white p-6 rounded-lg w-full max-w-md"
          style={{
            boxShadow: "0px 8px 40px 0px #0000001F",
          }}
        >
          <h2 className="text-[#191C1F] text-[20px] font-semibold font-poppins text-center mb-2">
            Forget Password
          </h2>
          <p className="text-[#5F6C72] text-[14px] font-[400] font-poppins leading-[20px] text-center mb-6">
            Enter the email address or mobile phone number associated with your
            account.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="emailAddress"
                className="block text-[#191C1F] text-[14px] font-[400] font-poppins mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                className="w-full border border-[#E4E7E9] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FA8232] text-[14px] font-bold font-poppins text-white py-2 rounded hover:bg-orange-600 flex items-center justify-center space-x-2 mt-8"
            >
              <p>SEND CODE </p>
              <img src="/home/right-arrow.png" alt="right-arrow" />
            </button>
          </form>
          <div className="mt-4 border-b border-[#E4E7E9] pb-5">
            <p className="text-[#5F6C72] text-[14px] font-[400] font-poppins">
              Already have an account?{" "}
              <a href="/signin" className="text-[#2DA5F3] font-[500]">
                Sign In
              </a>
            </p>
            <p className="text-[#5F6C72] text-[14px] font-[400] font-poppins mt-3">
              Don’t have an account?{" "}
              <a href="/signin" className="text-[#2DA5F3] font-[500]">
                Sign Up
              </a>
            </p>
          </div>
          <p className="text-[14px] font-[500] font-poppins text-center text-[#475156] mt-6">
            You may contact{" "}
            <a
              href="/customer-service"
              className="text-[#FA8232] hover:underline"
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
