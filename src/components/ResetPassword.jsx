import React, { useState } from "react";

export default function ResetPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  return (
    <div>
      <div className="h-auto p-10 pt-28 md:pt-10 flex items-center justify-center">
        <div
          className="bg-white p-6 rounded-lg w-full max-w-md"
          style={{
            boxShadow: "0px 8px 40px 0px #0000001F",
          }}
        >
          <h2 className="text-[#191C1F] text-[20px] font-semibold font-poppins text-center mb-2">
            Reset Password
          </h2>
          <p className="text-[#5F6C72] text-[14px] font-[400] font-poppins leading-[20px] text-center mb-6">
            Duis sagittis molestie tellus, at eleifend sapien pellentesque quis.
            Fusce lorem nunc, fringilla sit amet nunc.
          </p>

          <form>
            {/* Password Field */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-[#191C1F] text-[14px] font-[400] font-poppins mb-2"
              >
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="8+ characters"
                className="w-full border border-[#E4E7E9] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {passwordVisible ? (
                  <i class="fa-solid fa-eye"></i>
                ) : (
                  <i class="fa-solid fa-eye-slash"></i>
                )}
              </button>
            </div>
            {/* Confirm Password Field */}
            <div className="mb-6 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-[#191C1F] text-[14px] font-[400] font-poppins mb-2"
              >
                Confirm Password
              </label>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full border border-[#E4E7E9] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {confirmPasswordVisible ? (
                  <i class="fa-solid fa-eye"></i>
                ) : (
                  <i class="fa-solid fa-eye-slash"></i>
                )}
              </button>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FA8232] text-[14px] font-bold font-poppins text-white py-2 rounded hover:bg-orange-600 flex items-center justify-center space-x-2 mt-8 uppercase"
            >
              <p>Reset Password</p>
              <img src="/home/right-arrow.png" alt="right-arrow" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
