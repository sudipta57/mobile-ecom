import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function WishList() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [pathname]);

  const products = [
    {
      image: "/home/category1.png",
      name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
      originalPrice: "1,12,467",
      price: "86,493",
      stockStatus: "IN STOCK",
      inStock: true,
    },
    {
      image: "/home/category2.png",
      name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
      originalPrice: null,
      price: "1,99,133",
      stockStatus: "IN STOCK",
      inStock: true,
    },
    {
      image: "/home/category3.png",
      name: "Portable Washing Machine, 11lbs capacity Model 18NMFIAM",
      originalPrice: null,
      price: "6,060",
      stockStatus: "IN STOCK",
      inStock: true,
    },
    {
      image: "/home/category4.png",
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones In-Ear",
      originalPrice: "₹21,644",
      price: "19,047",
      stockStatus: "OUT OF STOCK",
      inStock: false,
    },
    {
      image: "/home/category5.png",
      name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Color Night Vision, 2-Way Audio",
      originalPrice: null,
      price: "1,29,782",
      stockStatus: "IN STOCK",
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb Section */}
      <div className="bg-gray-50 py-3 px-6">
        <nav className="flex text-gray-600 text-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
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
                  Wishlist
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Wishlist Table */}
      <div className="bg-white max-w-7xl mx-auto mt-6 border border-gray-200 p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-[500] font-poppins text-[#191C1F] mb-6">
          Wishlist
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#E4E7E9] text-[14px] text-[#475156] font-[300] font-poppins">
                <th className="py-3 px-2">PRODUCTS</th>
                <th className="py-3 px-2">PRICE</th>
                <th className="py-3 px-2">STOCK STATUS</th>
                <th className="py-3 px-2">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-t font-poppins hover:bg-gray-50"
                >
                  <td className="py-3 px-4 flex items-center">
                    <div className="flex flex-col md:flex-row items-center">
                      <img
                        src={product.image}
                        
                        alt={product.name}
                        className="w-16 h-16 rounded object-cover mr-4"
                      />
                      <span className="text-[#475156] max-w-[500px] text-sm">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-x-2">
                      {product.originalPrice && (
                        <span className="text-[#929FA5] line-through font-[400] text-sm">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-[#191C1F] font-[500]">
                        {product.price}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <span
                      className={`${
                        product.inStock ? "text-[#2DB224]" : "text-[#EE5858]"
                      } font-[600]`}
                    >
                      {product.stockStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex space-x-3">
                    <button
                      className={`${
                        product.inStock
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-gray-400"
                      } text-white text-sm font-medium py-2 px-4 rounded`}
                      disabled={!product.inStock}
                    >
                      Add to Cart
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i class="fa-solid fa-x"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
