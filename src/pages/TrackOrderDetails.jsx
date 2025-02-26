import React from "react";
export default function TrackOrderDetails() {
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

          {/* Shop */}
          <p className="flex items-center">
            Pages
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>
          <p className="flex items-center">
            Track Order
            <i class="fa-solid fa-chevron-right mx-2"></i>
          </p>
          {/* Electronics Devices */}
          <span className="text-[#2DA5F3]">Details</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="border rounded-lg p-4 md:p-6">
          {/* Header Section */}
          <div className="flex flex-col font-poppins md:flex-row justify-between bg-[#FDFAE7] p-4 items-start md:items-center mb-6">
            <div className="mb-4 md:mb-0">
              <h1 className="text-[#191C1F] text-[34px] font-[400] font-poppins mb-2">
                #96459761
              </h1>
              <p className="text-[24px] font-[400] font-poppins text-[#475156]">
                4 Products • Order Placed on 17 Jan, 2021 at 7:32 PM
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[48px] font-[600] font-poppins text-[#2DA5F3]">
                ₹1,03,809
              </p>
            </div>
          </div>

          <p className="mb-5 text-[24px] font-[400] font-poppins text-[#475156]">
            Order expected arrival{" "}
            <strong className="text-[#191C1F]">23 Jan, 2021</strong>
          </p>

          {/* Progress Section */}
          <div className="mb-6 font-poppins">
            <div className="relative flex flex-col space-y-10 md:space-y-0 md:flex-row items-center justify-between">
              {/* Order Placed */}
              <div className="flex flex-col items-center z-10">
                <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg">
                  ✓
                </div>
                <img
                  src="/Notebook.png"
                  alt="notebook"
                  className="w-8 md:w-10 mt-2"
                />
                <span className="text-[#191C1F] text-[20px] font-[500]">
                  Order Placed
                </span>
              </div>

              {/* Orange Line - Active */}
              <div className="hidden md:block absolute top-3 left-[6%] w-[28%] h-1 bg-orange-500"></div>

              {/* Packaging */}
              <div className="flex flex-col items-center z-10">
                <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg">
                  ✓
                </div>
                <img
                  src="/Package.png"
                  alt="package"
                  className="w-8 md:w-10 mt-2"
                />
                <span className="text-[#191C1F] text-[20px] font-[500]">
                  Packaging
                </span>
              </div>

              {/* Orange Line - Active */}
              <div className="hidden md:block absolute top-3 left-[37%] w-[28%] h-1 bg-orange-500"></div>

              {/* On The Road - Inactive */}
              <div className="flex flex-col items-center z-10">
                <div className="w-7 h-7 border-2 border-orange-500 rounded-full"></div>
                <img
                  src="/Truck.png"
                  alt="onway"
                  className="w-8 md:w-10 mt-2"
                />
                <span className="text-[#191C1F] text-[20px] font-[500]">
                  On The Road
                </span>
              </div>

              {/* Gray Line - Inactive */}
              <div className="hidden md:block absolute top-3 left-[68%] w-[28%] h-1 bg-gray-300"></div>

              {/* Delivered - Inactive */}
              <div className="flex flex-col items-center z-10">
                <div className="w-7 h-7 border-2 border-gray-300 rounded-full"></div>
                <img
                  src="/Handshake.png"
                  alt="delivered"
                  className="w-8 md:w-10 mt-2"
                />
                <span className="text-[#191C1F] text-[20px] font-[500]">
                  Delivered
                </span>
              </div>
            </div>
          </div>

          {/* Order Activity */}
          <div>
            <h2 className="text-[30px] text-[#191C1F] font-[500] font-publicSans mb-14">
              Order Activity
            </h2>
            <div className="space-y-10 font-publicSans text-[#191C1F]">
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:items-start items-center space-x-4">
                <img src="/tick.png" alt="img" />
                <div>
                  <p className="text-[#191C1F] text-[23.9px] font-[400] font-publicSans">
                    Your order has been delivered. Thank you for shopping at
                    Clicon!
                  </p>
                  <p className="text-[23.9px] font-[400] mt-1 text-[#77878F]">
                    23 Jan, 2021 at 7:32 PM
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:items-start items-center space-x-4">
                <img src="/user.png" alt="img" />
                <div>
                  <p className="text-[#191C1F] text-[23.9px] font-[400] font-publicSans">
                    Our delivery man (John Wick) has picked up your order for
                    delivery.
                  </p>
                  <p className="text-[23.9px] font-[400] mt-1 text-[#77878F]">
                    23 Jan, 2021 at 2:00 PM
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:items-start items-center space-x-4">
                <img src="/location.png" alt="img" />
                <div>
                  <p className="text-[#191C1F] text-[23.9px] font-[400] font-publicSans">
                    Your order has reached the last-mile hub.
                  </p>
                  <p className="text-[23.9px] font-[400] mt-1 text-[#77878F]">
                    22 Jan, 2021 at 8:00 AM
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:items-start items-center space-x-4">
                <img src="/book.png" alt="img" />
                <div>
                  <p className="text-[#191C1F] text-[23.9px] font-[400] font-publicSans">
                    Your order is on the way to the last-mile hub.
                  </p>
                  <p className="text-[23.9px] font-[400] mt-1 text-[#77878F]">
                    21 Jan, 2021 at 5:32 AM
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:items-start items-center space-x-4">
                <img src="/tick2.png" alt="img" />

                <div>
                  <p className="text-[#191C1F] text-[23.9px] font-[400] font-publicSans">
                    Your order is successfully verified.
                  </p>
                  <p className="text-[23.9px] font-[400] mt-1 text-[#77878F]">
                    20 Jan, 2021 at 7:32 PM
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:items-start items-center space-x-4">
                <img src="/book2.png" alt="img" />

                <div>
                  <p className="text-[#191C1F] text-[23.9px] font-[400] font-publicSans">
                    Your order has been confirmed.
                  </p>
                  <p className="text-[23.9px] font-[400] mt-1 text-[#77878F]">
                    19 Jan, 2021 at 2:61 PM
                  </p>
                </div>
              </div>
              {/* Repeat similar structure for remaining activities */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
