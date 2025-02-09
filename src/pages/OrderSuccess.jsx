import React from "react";

const OrderSuccessPage = () => {
  return (
    <div className="h-auto p-10 flex flex-col justify-center items-center bg-gray-50">
      {/* Success Icon */}

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex justify-center items-center bg-green-100 rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-3 text-center">
          Your order is successfully placed
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-center max-w-md">
          Pellentesque sed lectus nec tortor tristique accumsan quis dictum
          risus. Donec volutpat mollis nulla non facilisis.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="flex items-center justify-center border border-[#FFE7D6] text-[#FA8232] px-6 py-3 rounded-md text-sm font-semibold hover:bg-orange-200 transition">
            <img src="/support/Stack.png" />
            GO TO DASHBOARD
          </button>
          <button className="flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-orange-600 transition">
            VIEW ORDER {"\u2192"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
