import React from "react";
import { Link } from "react-router-dom";
export default function TrackOrderDetails() {
  return (
    <div>
      {/* Option Section */}
      <div className="bg-gray-50 py-3 px-4">
        <nav className="flex text-gray-600 text-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="flex items-center text-gray-600 hover:text-blue-500"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a1 1 0 011 1v5h5a1 1 0 01.8 1.6l-6 7a1 1 0 01-1.6 0l-6-7A1 1 0 015 8h5V3a1 1 0 011-1z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l4.707 4.707a1 1 0 010 1.414l-4.707 4.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="/pages" className="text-gray-600 hover:text-blue-500">
                  Pages
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l4.707 4.707a1 1 0 010 1.414l-4.707 4.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  to="/track-order"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Track Order
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l4.707 4.707a1 1 0 010 1.414l-4.707 4.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-500">Details</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="border rounded-lg shadow p-4 md:p-6">
          {/* Header Section */}
          <div className="flex flex-col font-poppins md:flex-row justify-between bg-[#FDFAE7] p-4 items-start md:items-center mb-6">
            <div className="mb-4 md:mb-0">
              <h1 className="text-lg font-[400]">#96459761</h1>
              <p className="text-sm text-gray-600">
                4 Products • Order Placed on 17 Jan, 2021 at 7:32 PM
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-2xl font-bold text-blue-600">₹1,03,809</p>
            </div>
          </div>

          <p className="mb-5 font-poppins text-sm text-gray-600">
            Order expected arrival <strong>23 Jan, 2021</strong>
          </p>

          {/* Progress Section */}
          <div className="mb-6 font-poppins">
            <div className="flex items-center justify-between text-xs md:text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <img
                  src="/Notebook.png"
                  alt="notebook"
                  className="w-8 md:w-10"
                />
                <span>Order Placed</span>
              </div>
              <div className="flex-1 border-t-2 border-orange-400"></div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <img src="/Package.png" alt="package" className="w-8 md:w-10" />
                <span>Packaging</span>
              </div>
              <div className="flex-1 border-t-2 border-orange-400"></div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 border-2 border-orange-400 rounded-full"></div>
                <img src="/Truck.png" alt="onway" className="w-8 md:w-10" />
                <span>On The Road</span>
              </div>
              <div className="flex-1 border-t-2 border-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                <img
                  src="/Handshake.png"
                  alt="delivered"
                  className="w-8 md:w-10"
                />
                <span>Delivered</span>
              </div>
            </div>
          </div>

          {/* Order Activity */}
          <div>
            <h2 className="text-lg text-[#191C1F] font-[500] mb-4">Order Activity</h2>
            <div className="space-y-4 font-publicSans text-[#191C1F]">
              <div className="flex items-start space-x-4">
                <img src="/tick.png" alt="img" />
                <div>
                  <p className="text- font-medium">
                    Your order has been delivered. Thank you for shopping at
                    Clicon!
                  </p>
                  <p className="text-sm text-[#77878F]">
                    23 Jan, 2021 at 7:32 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="/user.png" alt="img" />
                <div>
                  <p className="text-gray-800 font-medium">
                    Our delivery man (John Wick) has picked up your order for
                    delivery.
                  </p>
                  <p className="text-sm text-[#77878F]">
                    23 Jan, 2021 at 2:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="/location.png" alt="img" />
                <div>
                  <p className="text-gray-800 font-medium">
                    Your order has reached the last-mile hub.
                  </p>
                  <p className="text-sm text-[#77878F]">
                    22 Jan, 2021 at 8:00 AM
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="/book.png" alt="img" />
                <div>
                  <p className="text-gray-800 font-medium">
                    Your order is on the way to the last-mile hub.
                  </p>
                  <p className="text-sm text-[#77878F]">
                    21 Jan, 2021 at 5:32 AM
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="/tick2.png" alt="img" />

                <div>
                  <p className="text-gray-800 font-medium">
                    Your order is successfully verified.
                  </p>
                  <p className="text-sm text-[#77878F]">
                    20 Jan, 2021 at 7:32 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="/book2.png" alt="img" />

                <div>
                  <p className="text-gray-800 font-medium">
                    Your order has been confirmed.
                  </p>
                  <p className="text-sm text-[#77878F]">
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
