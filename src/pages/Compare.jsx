import React from "react";

const Compare = () => {
  const products = [
    {
      id: 1,
      image: "/compare/img1.png", // Replace with actual image paths
      name: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
      feedback: 51746385,
      rating: 5,
      price: "₹77,835.15",
      soldBy: "Clicon",
      brand: "StarTech",
      model: "ARES M2 and ZEUS E2",
      stock: "IN STOCK",
      size: "6.71 inches, 110.5 cm",
      weight: "650 g (7.41 oz)",
    },
    {
      id: 2,
      image: "/compare/img2.png",
      name: "Apple iMac 24' 4K Retina Display M1 8 Core CPU, 8 Core GPU, 256GB SSD, Blue (MGPK3ZP/A) 2021",
      feedback: 673971743,
      rating: 5,
      price: "₹1,47,098.91",
      soldBy: "Apple",
      brand: "Apple",
      model: "Apple iMac 24' M1 Blue 2021",
      stock: "IN STOCK",
      size: "6.7 inches, 109.8 cm",
      weight: "240 g (8.47 oz)",
    },
    {
      id: 3,
      image: "/compare/img3.png",
      name: "Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display",
      feedback: 96459761,
      rating: 4,
      price: "₹60,604.92",
      soldBy: "Samsung",
      brand: "Samsung",
      model: "S21 FE",
      stock: "OUT OF STOCK",
      size: "6.4 inches, 98.9 cm",
      weight: "177 g (6.24 oz)",
    },
  ];

  return (
    <>
      <div className="flex space-x-4 bg-[#F2F4F5] p-5 ps-10 text-[#5F6C72] text-[14px] font-[400]">
        <p>
          home <i className="fa-solid fa-greater-than"></i>{" "}
        </p>
        <span className="text-[#2DA5F3]">Compare</span>
      </div>

      <div className="my-10 max-w-[1500px] mx-auto p-6 shadow-md">
        <div className="grid md:grid-cols-4 border overflow-hidden">
          {/* Feature Labels */}
          <div className="col-span-1 hidden md:flex flex-col justify-end pb-[35px]">
            <div className="space-y-1">
              <p className="font-semibold text-gray-700 p-3 bg-[#F2F4F5]">
                Customer Feedback:
              </p>
              <p className="font-semibold text-gray-700 p-3">Price:</p>
              <p className="font-semibold text-gray-700 p-3 bg-[#F2F4F5]">
                Sold By:
              </p>
              <p className="font-semibold text-gray-700 p-3">Brand:</p>
              <p className="font-semibold text-gray-700 p-3 bg-[#F2F4F5]">
                Model:
              </p>
              <p className="font-semibold text-gray-700 p-3">Stock Status:</p>
              <p className="font-semibold text-gray-700 p-3 bg-[#F2F4F5]">
                Size:
              </p>
              <p className="font-semibold text-gray-700 p-3">Weight:</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="col-span-3 overflow-x-auto">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 min-w-[700px]">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 bg-white shadow-md p-4"
                >
                  {/* Product Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-contain"
                    />
                  </div>

                  {/* Product Name */}
                  <h2 className="text-sm font-medium text-gray-800 text-center mb-4">
                    {product.name}
                  </h2>

                  {/* Add to Cart and Wishlist */}
                  <div className="flex justify-center items-center space-x-2 mb-6">
                    <button className="bg-[#FA8232] text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                      ADD TO CART <i className="fa-solid fa-cart-plus ml-2"></i>
                    </button>
                    <button className="px-4 py-2 border border-[#FFE7D6] text-[#FA8232] rounded-full hover:bg-[#FFE7D6] transition">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2 text-sm">
                    {/* Ratings */}
                    <div className="flex items-center space-x-2 bg-[#F2F4F5] p-3">
                      {Array(product.rating)
                        .fill()
                        .map((_, i) => (
                          <i
                            key={i}
                            className="fa-solid fa-star text-[#FA8232] text-sm"
                          ></i>
                        ))}
                      <span className="text-gray-500 text-sm">
                        ({product.feedback.toLocaleString()})
                      </span>
                    </div>

                    <p className="p-3">
                      <span className="text-blue-600 font-semibold">
                        {product.price}
                      </span>
                    </p>
                    <p className="bg-[#F2F4F5] p-3">{product.soldBy}</p>
                    <p className="p-3">{product.brand}</p>
                    <p className="bg-[#F2F4F5] p-3">{product.model}</p>
                    <p
                      className={`font-semibold p-3 ${
                        product.stock === "IN STOCK"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {product.stock}
                    </p>
                    <p className="bg-[#F2F4F5] p-3">Size: {product.size}</p>
                    <p className="p-3">{product.weight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compare;
