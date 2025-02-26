import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function AddToCart() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [pathname]);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/addToCart/img1.png",
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      originalPrice: 99,
      price: 70,
      quantity: 1,
    },
    {
      id: 2,
      image: "/addToCart/img2.png",
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 250,
      quantity: 3,
    },
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Cart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section */}
            <div className="lg:col-span-2 bg-white rounded-lg  border border-[#E4E7E9] self-start pb-6">
              <h1 className="text-xl font-bold p-6">Add To Cart</h1>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px] text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#F2F4F5] text-[16px] text-[#475156] font-[500] font-poppins">
                      <th className="text-left py-2 px-4">PRODUCTS</th>
                      <th className="text-left py-2 px-4">PRICE</th>
                      <th className="text-left py-2 px-4">QUANTITY</th>
                      <th className="text-left py-2 px-4">SUB-TOTAL</th>
                    </tr>
                  </thead>
                  <tbody className=" p-6">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-3 flex flex-col md:flex-row items-center px-4">
                          <button onClick={() => handleRemove(item.id)}>
                            <img src="/compare/x.png" alt="x" />
                          </button>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded object-cover md:ml-4"
                          />
                          <span className="mt-2 md:mt-0 md:ml-4 text-[18px] font-[400] font-poppins text-[#191C1F]">
                            {item.name}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[#475156] text-[18px] font-[400] font-poppins">
                          {item.originalPrice && (
                            <span className="text-[#929FA5] text-[18px] font-[400] font-poppins line-through">
                              ${item.originalPrice}
                            </span>
                          )}{" "}
                          <span className="font-medium">${item.price}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-center border border-gray-300 w-fit">
                            <button
                              className="w-8 h-8 flex items-center justify-center text-gray-600"
                              onClick={() =>
                                handleQuantityChange(item.id, "decrement")
                              }
                            >
                              -
                            </button>
                            <span className="w-12 text-center text-lg font-semibold text-gray-800">
                              {item.quantity.toString().padStart(2, "0")}
                            </span>
                            <button
                              className="w-8 h-8 flex items-center justify-center text-gray-600 "
                              onClick={() =>
                                handleQuantityChange(item.id, "increment")
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td className="py-3 px-4 text-gray-800">
                          ${item.price * item.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col md:flex-row justify-between mt-6 px-6">
                <button className="text-[#2DA5F3] border-2 border-[#2DA5F3] p-2 font-bold w-full md:w-auto">
                  <Link to="/shop-page">
                    <i className="fa-solid fa-arrow-left mr-2"></i> RETURN TO
                    SHOP
                  </Link>
                </button>
                <button className="text-[#2DA5F3] border-2 border-[#2DA5F3] p-2 font-bold w-full md:w-auto mt-3 md:mt-0">
                  UPDATE CART
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <div className="bg-white rounded-lg border border-[#E4E7E9] p-6">
                <h2 className="text-[22px] text-[#191C1F] font-[500] mb-4">
                  Cart Totals
                </h2>
                <div className="pt-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-[#5F6C72] text-[18px] font-[400] font-poppins">
                      Sub-total
                    </p>
                    <p className="text-[#191C1F] text-[18px] font-[500] font-poppins">
                      $320
                    </p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-[#5F6C72] text-[18px] font-[400] font-poppins">
                      Shipping
                    </p>
                    <p className="text-[#191C1F] text-[18px] font-[500] font-poppins">
                      Free
                    </p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-[#5F6C72] text-[18px] font-[400] font-poppins">
                      Discount
                    </p>
                    <p className="text-[#191C1F] text-[18px] font-[500] font-poppins">
                      $24
                    </p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-[#5F6C72] text-[18px] font-[400] font-poppins">
                      Tax
                    </p>
                    <p className="text-[#191C1F] text-[18px] font-[500] font-poppins">
                      $61.99
                    </p>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t mt-4 pt-4">
                    <p className="text-[#191C1F] text-[20px] font-[400] font-poppins">
                      Total
                    </p>
                    <p className="text-[#191C1F] text-[18px] font-[500] font-poppins">
                      $357.99 USD
                    </p>
                  </div>
                  <button className="w-full bg-[#FA8232] text-[20.36px] font-[700] font-publicSans text-white py-2 mt-4 rounded hover:bg-orange-600 flex items-center justify-center space-x-2">
                    <p>PROCEED TO CHECKOUT</p>{" "}
                    <img src="/home/right-arrow.png" alt="" />
                  </button>
                </div>
              </div>
              <div className=" bg-white border border-[#E4E7E9] mt-6">
                <h2 className="text-[22px] font-[500] font-poppins mb-2 text-[#191C1F] p-4">
                  Coupon Code
                </h2>
                <hr className="mb-2"></hr>
                <div className="p-4">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className=" bg-[#2DA5F3] text-white px-4 py-2 text-[17.82px] font-[700] font-publicSans mt-3 hover:bg-blue-600">
                    APPLY COUPON
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
