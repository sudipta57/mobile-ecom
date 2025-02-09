import React from "react";

export default function CustomerSupport() {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <header className="text-center py-10 bg-white shadow-sm">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="text-left">
                <span className="bg-[#EFD33D] text-white text-sm font-[600] font-poppins px-4 py-2 uppercase">
                  Help Center
                </span>
                <h1 className="text-[32px] font-[600] font-poppins text-[#191C1F] mt-4">
                  How we can help you!
                </h1>
                <div className="flex items-center mt-6">
                  <div className="relative w-[300px]">
                    <input
                      type="text"
                      placeholder="Enter your question or keyword"
                      className="border border-gray-300 rounded-md px-4 py-2 w-[350px] h-[60px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                     <button className="absolute right-[-40px] top-2 bottom-0 bg-[#FA8232] p-2 text-white text-[14px] font-[700] font-poppins h-[40px]  hover:bg-orange-600">
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
          <div className="container mx-auto px-6 lg:px-16">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
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
                  className="flex items-center p-4 border rounded-md hover:shadow-lg bg-white"
                >
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
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Popular Topics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-sm text-gray-600">
              <ul className="list-disc pl-4 space-y-2">
                <li>How do I return my item?</li>
                <li>
                  <a href="#" className="text-orange-500 underline">
                    What is Clicons Returns Policy?
                  </a>
                </li>
                <li>How long is the refund process?</li>
              </ul>
              <ul className="list-disc pl-4 space-y-2">
                <li>What are the 'Delivery Timelines'?</li>
                <li>What is 'Discover Your Dance Campaign 2022'?</li>
                <li>What is the Voucher & Gift Offer in this Campaign?</li>
              </ul>
              <ul className="list-disc pl-4 space-y-2">
                <li>How to cancel Clicon Order?</li>
                <li>Ask the Digital and Device Community</li>
                <li>How to change my shop name?</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#F5F9F8] py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <button className="px-6 py-2 bg-[#2DA5F3] text-white text-sm font-semibold rounded hover:bg-blue-600">
            CONTACT US
          </button>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Call us now
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk
                with us now.
              </p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                +1-202-555-0126
              </p>
              <button className="px-4 py-2 bg-[#2DA5F3] text-white text-sm font-semibold rounded hover:bg-blue-600">
                CALL NOW →
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
            <div className="flex-1">
              {/* Title and Image in Same Line */}
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Chat with us
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk
                with us now.
              </p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                Support@clicon.com
              </p>
              <button className="px-4 py-2 bg-[#2DB224] text-white text-sm font-semibold rounded hover:bg-green-600">
                CONTACT US →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
