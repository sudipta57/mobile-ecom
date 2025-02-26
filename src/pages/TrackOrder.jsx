import React from "react";
import { Link } from "react-router-dom";
const TrackOrder = () => {
  return (
    <>
      <div className="flex items-center bg-[#F2F4F5] p-5 ps-10 text-[#5F6C72] ">
        {/* Home */}
        <div className="flex justify-center font-poppins text-[14px] font-[400] ">
          {/* Home */}
          <p className="flex items-center">
            <img src="/home.png" alt="Home Icon" className="mr-2" />
            Home
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>

          {/* Shop */}
          <p className="flex items-center">
            Pages
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>

          {/* Electronics Devices */}
          <span className="text-[#2DA5F3]">Track Order</span>
        </div>
      </div>

      <div className="max-w-4xl font-poppins p-8 bg-white rounded-md pt-28 md:pt-8">
        <h1 className="text-[40px] text-[#191C1F] font-[600] mb-4">
          Track Order
        </h1>
        <p className="text-[#5F6C72] text-[20px] font-[400] font-poppins mb-6">
          To track your order please enter your order ID in the input field
          below and press the “Track Order” button. This was given to you on
          your receipt and in the confirmation email you should have received.
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="orderId"
              className="block text-gray-700 font-medium mb-2"
            >
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              placeholder="ID..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label
              htmlFor="billingEmail"
              className="block text-gray-700 font-medium mb-2"
            >
              Billing Email
            </label>
            <input
              type="email"
              id="billingEmail"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </form>

        <div className="flex items-start text-gray-500 mb-6">
          <span className="mr-2 text-lg">&#9432;</span>
          <p>Order ID that we sent to you in your email address.</p>
        </div>

        <button className="w-full sm:w-auto px-6 py-3 bg-[#FA8232] text-white  font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center space-x-1 justify-center">
          <Link to="/track-details">TRACK ORDER</Link>{" "}
          <img src="/home/right-arrow.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default TrackOrder;
