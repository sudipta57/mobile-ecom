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
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Cart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h1 className="text-xl font-bold mb-4">Add To Cart</h1>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-gray-500 text-sm">
                      <th className="text-left py-2">PRODUCTS</th>
                      <th className="text-left py-2">PRICE</th>
                      <th className="text-left py-2">QUANTITY</th>
                      <th className="text-left py-2">SUB-TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-t">
                        <td className="py-3 flex flex-col md:flex-row items-center">
                          <button
                            className="text-red-500 p-1"
                            onClick={() => handleRemove(item.id)}
                          >
                            <i class="fa-solid fa-x"></i>
                          </button>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded object-cover ml-4"
                          />
                          <span className="ml-4 text-sm text-gray-800">
                            {item.name}
                          </span>
                        </td>
                        <td className="py-3 text-sm text-gray-800">
                          {item.originalPrice && (
                            <span className="text-gray-400 line-through">
                              ${item.originalPrice}
                            </span>
                          )}{" "}
                          <span className="font-medium">${item.price}</span>
                        </td>
                        <td className="py-3 flex items-center">
                          <button
                            className="px-2 py-1 text-gray-500 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={() =>
                              handleQuantityChange(item.id, "decrement")
                            }
                          >
                            -
                          </button>
                          <span className="mx-2 text-sm text-gray-800">
                            {item.quantity.toString().padStart(2, "0")}
                          </span>
                          <button
                            className="px-2 py-1 text-gray-500 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={() =>
                              handleQuantityChange(item.id, "increment")
                            }
                          >
                            +
                          </button>
                        </td>
                        <td className="py-3 text-sm text-gray-800">
                          ${item.price * item.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col md:flex-row space-y-3 md:space-x-0 justify-between mt-6">
                <button className="  text-[#2DA5F3] border-2 border-[#2DA5F3] p-2 font-bold">
                  <Link to="/shop-page">
                    {" "}
                    <i class="fa-solid fa-arrow-left me-2"></i>
                    RETURN TO SHOP
                  </Link>
                </button>
                <button className="  text-[#2DA5F3] border-2 border-[#2DA5F3] p-2 font-bold">
                  UPDATE CART
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white rounded-lg font-poppins shadow p-6">
              {/* Card Totals */}
              <h2 className="text-xl text-[#191C1F] font-poppins font-[500] mb-4">Card Totals</h2>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <p>Sub-total</p>
                  <p>$320</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Discount</p>
                  <p>$24</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Tax</p>
                  <p>$61.99</p>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <p>Total</p>
                  <p>$357.99 USD</p>
                </div>
                <button className="w-full bg-[#FA8232] text-white py-2 mt-4 rounded hover:bg-orange-600">
                  PROCEED TO CHECKOUT {"\u2192"}
                </button>
              </div>

              <div className="p-4 bg-white border w-full max-w-md mx-auto mt-6">
                {/* Coupon Code Header */}
                <h2 className="text-xl font-semibold mb-2 text-[#191C1F] font-poppins">
                  Coupon Code
                </h2>
                <hr className="mb-2"></hr>
                {/* Input Field */}
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Apply Coupon Button */}
                <button className="w-[150px] bg-[#2DA5F3] text-white px-4 py-2 text-sm font-medium  hover:bg-blue-600">
                  APPLY COUPON
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
