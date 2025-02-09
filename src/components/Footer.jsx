import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 font-PublicSans py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Section - Logo and Contact Info */}
          <div>
            <img
              src="/home/footerLogo.png"
              alt="Hello Shop Logo"
              className="h-12 mb-4"
            />
            <p className="font-semibold text-[#929FA5]">Customer Supports:</p>
            <p className="text-white text-[18px] font-[500]">(629) 555-XXXX</p>
            <p className="text-gray-400">4517 Washington Ave.</p>
            <p className="text-gray-400">Manchester, Kentucky 39495</p>
            <p className="text-white mt-2">info@helloshop.com</p>
          </div>

          {/* Top Category */}
          <div>
            <h4 className="font-semibold text-white mb-4">TOP CATEGORY</h4>
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
                  className="group flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-4"
                >
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="text-yellow-400 mt-2 inline-block">
              Browse All Product {"\u2192"}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-[#929FA5]">
              <li>Shop Product</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Track Order</li>
              <li>Customer Help</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-semibold text-white mb-4">DOWNLOAD APP</h4>
            <div className="space-y-4 ">
              <a href="#">
                <img
                  src="/home/googlePlay.png"
                  alt="Google Play"
                  className="h-12 mb-1"
                />
              </a>
              <a href="#">
                <img
                  src="/home/appStore.png"
                  alt="App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          {/* Popular Tags */}
          <div>
            <h4 className="font-semibold text-white mb-4">POPULAR TAG</h4>
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
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
            Copyright @ E-Comm | Developed By SECWEBXPERTS PVT. LTD.
         </div>
      </footer>
    </div>
  );
}
