import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className=" fixed top-0 left-0 z-50 w-full items-center  mx-auto">
        {/* Middle Section */}
        <div className="bg-[#1B6392] text-white py-3 px-4 text-center text-sm md:text-left flex justify-between flex-col md:flex-row">
          <h2 className="my-3 md:my-0">
            Welcome to Helloshop online Employee eCommerce store.
          </h2>
          <div className="flex items-center space-x-5">
            <div className="flex space-x-2 md:space-x-4 items-center">
              <p className="mr-3">Follow us: </p>
              <i class="fa-solid fa-x"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>

            <div>
              <h2>|</h2>
            </div>
            <div className="space-x-3">
              <a href="">
                Eng <i class="fa-solid fa-angle-down"></i>{" "}
              </a>
              <a href="">
                IND <i class="fa-solid fa-angle-down"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-[#1B6392] py-4 px-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-500">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="/home/logo.png" // Replace with your logo path
                alt="HelloShop Logo"
                className="h-8"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-grow justify-center items-center mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full max-w-2xl py-2 px-3 rounded-l-lg focus:outline-none text-[#5F6C72] "
            />
            <button className="bg-white px-4 py-2 rounded-r-lg font-medium hover:bg-gray-200">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-gray-300">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i class="fa-regular fa-heart"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i class="fa-regular fa-user"></i>
            </a>
            {/* Toggle Button for Mobile */}
            <i
              className={`md:hidden fa-solid ${
                isOpen ? "fa-xmark" : "fa-bars"
              } text-white hover:text-gray-300`}
              onClick={toggleNavbar}
            ></i>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          {/* Bottom Section */}
          <div
            className={`py-3 px-4 border-b bg-[#FFFFFF] border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            {/* Left Links */}
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 items-center">
              <button className="bg-[#F2F4F5] p-3 font-medium hover:text-blue-700">
                <Link to="shop-page">
                  All Category <i className="fa-solid fa-angle-down"></i>
                </Link>
              </button>
              <Link
                to="/track-order"
                className="text-[#5F6C72] text-[14px] font-[400] hover:text-blue-700 flex items-center space-x-1"
              >
                <img src="/home/location.png" alt="track" />
                <p> Track Order</p>
              </Link>
              <Link
                to="/compare-product"
                className="text-[#5F6C72] text-[14px] font-[400] hover:text-blue-700 flex items-center space-x-1"
              >
                <img src="/home/compare.png" alt="track" />
                <p>Compare</p>
              </Link>
              <Link
                to="/customer-support"
                className="text-[#5F6C72] text-[14px] font-[400] hover:text-blue-700 flex items-center space-x-1"
              >
                <img src="/home/support.png" alt="track" />
                <p> Customer Support</p>
              </Link>
              <Link
                to="/need-support"
                className="text-[#5F6C72] text-[14px] font-[400] hover:text-blue-700 flex items-center space-x-1"
              >
                <img src="/home/Info.png" alt="help" />
                <p> Need Help</p>
              </Link>
            </div>

            {/* Right Contact */}
            <div className="flex space-x-3 items-center mt-3 md:mt-0">
              <img src="/home/phone.png" alt="help" />

              <span className="text[#191C1F] text-[18px] font-[400] font-poppins">
                +1-202-555-0104
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-[180px]"></div>

      {/* Top Banner */}
      {/* <div className="bg-black text-white py-2 px-4">
        <div className=" flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <button className="bg-[#F3DE6D] text-black py-1 px-3">Black</button>
            <p>Friday</p>
          </div>
          <div>
            <p>
              Up to{" "}
              <span className="text-[30px] text-[#EBC80C] font-[600]">70%</span>{" "}
              OFF
            </p>
          </div>
          <button className="bg-yellow-400 text-black text-sm font-medium py-1 px-4 rounded hover:bg-yellow-500">
            SHOP NOW
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Header;
