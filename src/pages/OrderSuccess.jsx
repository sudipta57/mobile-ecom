import React from "react";

const OrderSuccessPage = () => {
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
          <p className="flex items-center">
            Add To Card
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>
          {/* Electronics Devices */}
          <span className="text-[#2DA5F3]">Checkout</span>
        </div>
      </div>
      <div className="h-auto pt-28 md:pt-10 p-10 flex flex-col justify-center items-center bg-gray-50">
        {/* Success Icon */}

        <div className="flex flex-col items-center">
          <img src="/home/success-tick.png" alt="success-tick" />

          {/* Heading */}
          <h1 className="text-[#191C1F] text-[30px] font-semibold font-poppins mb-3 text-center">
            Your order is successfully placed
          </h1>

          {/* Description */}
          <p className="text-[#5F6C72] text-[18px] font-[400] font-poppins text-center max-w-lg">
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum
            risus. Donec volutpat mollis nulla non facilisis.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-4">
            <button className="flex items-center justify-center border-2 border-[#FFE7D6] text-[#FA8232] px-6 py-2 rounded-md text-[18px] font-bold font-poppins hover:bg-orange-200 transition">
              <img src="/support/Stack.png" />
              GO TO DASHBOARD
            </button>
            <button className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-6 py-2 rounded-md  text-[18px] font-bold font-poppins hover:bg-orange-600 transition">
              <p>View Order</p>
              <img src="/home/right-arrow.png" alt="view order" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccessPage;
