import React from "react";

export default function CustomerSupport() {
  return (
    <div>
      <div className=" min-h-screen">
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
            <span className="text-[#2DA5F3]">Customer Support</span>
          </div>
        </div>
        {/* Header Section */}
        <header className="text-center py-10 bg-white shadow-sm pt-28 md:pt-6">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="text-left">
                <span className="bg-[#EFD33D] text-[#191C1F] text-sm font-[600] font-poppins px-4 py-2 uppercase">
                  Help Center
                </span>
                <h1 className="text-[32px] font-[600] font-poppins text-[#191C1F] mt-4">
                  How we can help you!
                </h1>
                <div className="flex flex-col sm:flex-row items-center mt-6 border justify-between p-2 md:w-[534px]">
                  <img
                    src="/support/search-icon.png"
                    alt="search-icon"
                    className="hidden md:block"
                  />

                  <div className="relative w-full flex items-center">
                    <input
                      type="text"
                      placeholder="Enter your question or keyword"
                      className="px-2 w-full outline-none "
                    />
                    <button className="bg-[#FA8232] p-2 text-white text-[14px] font-[700] font-poppins h-[48px] w-full sm:w-auto rounded-[2px]">
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block mt-8 lg:mt-0">
                <img
                  src="/support.png"
                  alt="Support agent"
                  className="max-w-[1200px]"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="py-10">
          <div className="container mx-auto px-6 lg:px-16 border-b border-[#E4E7E9] pb-16">
            <h2 className="text-[32px] font-[600] font-poppins text-[#191C1F] text-center mb-6">
              What can we assist you with today?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "/support/Truck.png", label: "Track Order" },
                { icon: "/support/LockOpen.png", label: "Reset Password" },
                { icon: "/support/CreditCard.png", label: "Payment Option" },
                { icon: "/support/User.png", label: "User & Account" },
                { icon: "/support/Stack.png", label: "Wishlist & Compare" },
                { icon: "/support/Notepad.png", label: "Shipping & Billing" },
                {
                  icon: "/support/CreditCard.png",
                  label: "Shopping Cart & Wallet",
                },
                { icon: "/support/Storefront.png", label: "Sell on Clicon" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 border-2 border-[#FFE7D6] rounded-md hover:border-[#FA8232] bg-white hover:shadow-[0px_8px_40px_0px_#FA82321F] transition-all duration-500"
                >
                  {/* box-shadow: 0px 8px 40px 0px #FA82321F; */}

                  {/* Icon (Image Placeholder) */}
                  <div className="text-orange-500 text-3xl flex-shrink-0">
                    <img src={item.icon} />
                  </div>
                  {/* Text */}
                  <div className="ml-4">
                    <span className="text-gray-800 font-medium text-lg">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Topics Section */}
        <section className="bg-white py-8">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
            <h3 className="text-[24px] font-[600] text-[#191C1F] font-poppins mb-4 text-center">
              Popular Topics
            </h3>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc pl-4 space-y-2">
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  How do I return my item?
                </li>
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  What is Clicons Returns Policy?
                </li>
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  How long is the refund process?
                </li>
              </ul>
              <ul className="list-disc pl-4 space-y-2">
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  What are the 'Delivery Timelines'?
                </li>
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  What is 'Discover Your Dance Campaign 2022'?
                </li>
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  What is the Voucher & Gift Offer in this Campaign?
                </li>
              </ul>
              <ul className="list-disc pl-4 space-y-2">
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  How to cancel Clicon Order?
                </li>
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  Ask the Digital and Device Community
                </li>
                <li className="text-[#191C1F] text-[16px] font-[400] font-publicSans hover:text-[#FA8232] cursor-pointer">
                  How to change my shop name?
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#F2F4F5] py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <button className="px-6 py-2 bg-[#2DA5F3] text-white text-sm font-semibold rounded-[2px] hover:bg-blue-600">
            CONTACT US
          </button>
          <h2 className="text-[32px] font-[600] font-poppins text-[#191C1F] mt-4">
            Don't find your answer? <br /> Contact with us
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-6xl mx-auto px-6">
          {/* Call Us Now Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center w-full md:w-1/2">
            {/* Icon Section */}
            <div className="mr-4 mt-[-50px] flex-shrink-0 flex items-center justify-center">
              <img src="/phone.png" alt="Chat Icon" className="w-15 h-15" />
            </div>
            {/* Content Section */}
            <div>
              <h3 className="text-[18px] font-semibold font-poppins text-[#191C1F] mb-2">
                Call us now
              </h3>
              <p className="text-[14px] font-[400] font-poppins text-[#5F6C72] mb-4">
                We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk
                with us now.
              </p>
              <p className="text-[24px] font-[400] font-poppins text-[#191C1F] mb-4">
                +1-202-555-0126
              </p>
              <button className="px-4 py-2 bg-[#2DA5F3] text-white rounded-[2px] hover:bg-blue-600 text-[14px] font-[700] font-poppins flex justify-center items-center space-x-2">
                <p>CALL NOW </p>
                <img src="/home/right-arrow.png" alt="right-arrow" />
              </button>
            </div>
          </div>

          {/* Chat With Us Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center w-full md:w-1/2">
            {/* Icon Section */}
            <div className="mr-4 mt-[-50px] flex-shrink-0 flex items-center justify-center">
              <img src="/what.png" alt="Chat Icon" className="w-15 h-15" />
            </div>
            {/* Content Section */}
            <div>
              <h3 className="text-[18px] font-semibold font-poppins text-[#191C1F] mb-2">
                Chat with us
              </h3>
              <p className="text-[14px] font-[400] font-poppins text-[#5F6C72] mb-4">
                we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
                with use now
              </p>
              <p className="text-[24px] font-[400] font-poppins text-[#191C1F] mb-4">
                +1-202-555-0126
              </p>
              <button className="px-4 py-2 bg-[#2DB224] text-white rounded-[2px] hover:bg-green-600 text-[14px] font-[700] font-poppins flex justify-center items-center space-x-2">
                <p>CONTACT US </p>
                <img src="/home/right-arrow.png" alt="right-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
