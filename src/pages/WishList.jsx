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
    <div className="min-h-screen">
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
          {/* Electronics Devices */}
          <span className="text-[#2DA5F3]">Wishlist</span>
        </div>
      </div>
      {/* Wishlist Table */}
      <div className="bg-white max-w-7xl mx-auto my-16 border border-gray-200 rounded-lg shadow-sm">
        <h1 className="text-2xl font-[500] font-poppins text-[#191C1F] p-6">
          Wishlist
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F2F4F5] text-[16px] text-[#475156] font-[500] font-poppins">
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
                      <span className="text-[#475156] max-w-[400px] text-[18px] font-poppins">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-x-2">
                      {product.originalPrice && (
                        <span className="text-[#929FA5] line-through font-[400] text-[18px]">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-[#191C1F] font-[500] text-[18px]">
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

                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center space-x-3">
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
                        <img src="/compare/x.png" alt="x" />
                      </button>
                    </div>
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
