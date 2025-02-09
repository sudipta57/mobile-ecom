import React from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
  const paymentMethods = [
    {
      id: "cash",
      label: "Cash on Delivery",
      icon: "/cash-icon.png", // Replace with actual image path
    },
    {
      id: "venmo",
      label: "Venmo",
      icon: "/venomo-icon.png", // Replace with actual image path
    },
    {
      id: "paypal",
      label: "Paypal",
      icon: "/paypal-icon.png", // Replace with actual image path
    },
    {
      id: "amazon",
      label: "Amazon Pay",
      icon: "/amazon-icon.png", // Replace with actual image path
    },
    {
      id: "card",
      label: "Debit/Credit Card",
      icon: "/debit-icon.png", // Replace with actual image path
    },
  ];
  return (
    <>
      <div className="flex space-x-4 bg-[#F2F4F5] p-5 ps-10 text-[#5F6C72] text-[14px] font-[400]">
        <p>
          home <i class="fa-solid fa-greater-than"></i>{" "}
        </p>
        <p>
          {" "}
          Add to cart <i class="fa-solid fa-greater-than"></i>
        </p>{" "}
        <span className="text-[#2DA5F3]">Checkout</span>
      </div>
      <div className="max-w-[1500px] mx-auto p-6 grid grid-cols-1 md:grid-cols-7 gap-6">
        {/* Left Section */}
        <div className="md:col-span-5 p-6 ">
          {/* Billing Information */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  User name
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company Name <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country
                </label>
                <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Region/State
                </label>
                <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <select className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Ship into different address
              </label>
            </div>
          </div>

          {/* Payment Option */}
          <div className="bg-white p-6 border">
            <h2 className="text-lg font-semibold mb-4">Payment Option</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 md:space-x-4 text-center items-center">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex flex-col items-center space-y-2 w-1/5"
                >
                  <img
                    src={method.icon}
                    alt={method.label}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="text-sm font-medium">{method.label}</p>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id={method.id}
                    className="w-5 h-5 text-orange-500 focus:ring-orange-500"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Name On Card
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expire Date
                </label>
                <input
                  type="email"
                  placeholder="DD/YY"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVC</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-4">
              Additional Information
            </h2>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Order Notes (Optional)
              </label>
              <textarea
                type="text"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </div>
          </div>
        </div>
        {/* right section */}

        <div className="bg-white p-6 md:col-span-2">
          <div className="border p-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {/* Product Details */}
              <div className="flex items-center">
                <img
                  src="/addToCart/img1.png"
                  alt="Product 1"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-sm font-medium">
                    Canon EOS 1500D DSLR Camera Body + Lens
                  </h3>
                  <p className="text-sm text-gray-500">1 x ₹6,060</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/addToCart/img2.png"
                  alt="Product 2"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-sm font-medium">
                    Wired Over-Ear Gaming Headphones with USB
                  </h3>
                  <p className="text-sm text-gray-500">3 x ₹21,644</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              {/* Subtotal */}
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Sub-total</p>
                <p className="font-medium">₹27,705</p>
              </div>
              {/* Shipping */}
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Shipping</p>
                <p className="font-medium">Free</p>
              </div>
              {/* Discount */}
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Discount</p>
                <p className="font-medium">₹2,077</p>
              </div>
              {/* Tax */}
              <div className="flex justify-between text-sm">
                <p className="text-gray-500">Tax</p>
                <p className="font-medium">₹5,280.50</p>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              {/* Total */}
              <div className="flex justify-between text-lg font-semibold">
                <p>Total</p>
                <p>₹30,994.67</p>
              </div>
            </div>
            <button className="w-full bg-[#FA8232] text-white text-sm font-medium py-3 rounded-md mt-4 hover:bg-orange-600">
              <Link to="/Order-success">
              PLACE ORDER {"\u2192"}</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
