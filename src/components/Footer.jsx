import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#191C1F] font-PublicSans py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Section - Logo and Contact Info */}
          <div>
            <img
              src="/home/footerLogo.png"
              alt="Hello Shop Logo"
              className="h-12 mb-4"
            />
            <p className="text-[14px] font-publicSans font-[400] text-[#929FA5]">
              Customer Supports:
            </p>
            <p className="text-white text-[18px] font-[500] font-publicSans my-2">
              (629) 555-XXXX
            </p>
            <p className="text-[16px] font-publicSans font-[500] text-[#929FA5]">
              4517 Washington Ave.
            </p>
            <p className="text-[16px] font-publicSans font-[500] text-[#929FA5]">
              Manchester, Kentucky 39495
            </p>
            <p className="text-white mt-2">info@helloshop.com</p>
          </div>

          {/* Top Category */}
          <div>
            <h4 className="text-white text-[18px] font-[500] font-publicSans mb-4">
              TOP CATEGORY
            </h4>
            <ul className="space-y-2 text-[#929FA5]">
              {[
                "Computer & Laptop",
                "SmartPhone",
                "Headphone",
                "Accessories",
                "Camera & Photo",
                "TV & Homes",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-4 text-[14px] font-[500] font-publicSans cursor-pointer"
                >
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="text-[#EBC80C] mt-2 inline-block">
              Browse All Product {"\u2192"}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[500] text-[16px] font-publicSans text-white mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-[#929FA5]">
              {[
                "Shop Product",
                "Shopping Cart",
                "Wishlist",
                "Compare",
                "Customer Help",
                "About Us",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-4 text-[14px] font-[500] font-publicSans cursor-pointer"
                >
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-[500] text-[16px] font-publicSans text-white mb-4">
              DOWNLOAD APP
            </h4>
            <div className="space-y-4 ">
              <a href="#">
                <img
                  src="/home/googlePlay.png"
                  alt="Google Play"
                  className="mb-2"
                />
              </a>
              <a href="#">
                <img src="/home/appStore.png" alt="App Store" />
              </a>
            </div>
          </div>

          {/* Popular Tags */}
          <div>
            <h4 className="font-[500] text-[16px] font-publicSans text-white mb-4">
              POPULAR TAG
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Game",
                "iPhone",
                "Macbook",
                "SSD",
                "Graphics Card",
                "Power Bank",
                "Smart TV",
                "Speaker",
                "Tablet",
                "Microwave",
                "Samsung",
                "Asus Laptops",
                "TV",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-sm text-white  hover:bg-gray-700 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-[14px] text-[400] text-[#ADB7BC]">
          Helloshop - eCommerce Website © 2025. Design by Jahan
        </div>
      </footer>
    </div>
  );
}
