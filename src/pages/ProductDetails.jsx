import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function ProductDetails() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [pathname]);

  const images = [
    "/ProductDetails/main.png",
    "/ProductDetails/img2.png",
    "/ProductDetails/img3.png",
    "/ProductDetails/img4.png",
    "/ProductDetails/img5.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const categories2 = [
    {
      title: "FLASH SALE TODAY",
      products: [
        {
          image: "/category/image1.png",
          name: "Bose Sport Earbuds - Wireless Earphones",
          price: "1,500",
        },
        {
          image: "/category/image2.png",
          name: "Simple Mobile 4G LTE Prepaid Smartphone",
          price: "1,500",
        },
        {
          image: "/category/image3.png",
          name: "4K UHD LED Smart TV with Chromecast Built-in",
          price: "1,500",
        },
      ],
    },
    {
      title: "BEST SELLERS",
      products: [
        {
          image: "/category/image4.png",
          name: "Samsung Galaxy S21 5G",
          price: "1,500",
        },
        {
          image: "/category/image5.png",
          name: "Simple Mobile 5G LTE Galaxy 12 Mini",
          price: "1,500",
        },
        {
          image: "/category/image6.png",
          name: "Sony DSCHX8 High Zoom Camera",
          price: "1,500",
        },
      ],
    },
    {
      title: "TOP RATED",
      products: [
        {
          image: "/category/image7.png",
          name: "Portable Washing Machine",
          price: "1,500",
        },
        {
          image: "/category/image8.png",
          name: "Sony DSCHX8 High Zoom Camera",
          price: "1,500",
        },
        {
          image: "/category/image9.png",
          name: "Dell Optiplex All-in-One Monitor",
          price: "1,500",
        },
      ],
    },
    {
      title: "NEW ARRIVAL",
      products: [
        {
          image: "/category/image10.png",
          name: "TOZO T6 Wireless Earbuds",
          price: "1,500",
        },
        {
          image: "/category/image11.png",
          name: "JBL FLIP 4 - Bluetooth Speaker",
          price: "1,500",
        },
        {
          image: "/category/image12.png",
          name: "Wyze Cam Pan v2",
          price: "1,500",
        },
      ],
    },
  ];

  const ProductCard = ({ image, name, price }) => (
    <div className="flex items-center font-publicSans p-4 bg-white border">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={image}
          alt={name}
          className="w-full h-24 object-cover rounded"
        />
      </div>
      {/* Text Section */}
      <div className="w-2/3 pl-4">
        <h3 className="text-sm font-[400] text-[#191C1F]">{name}</h3>
        <p className="mt-2 text-[#2DA5F3] font-[600] font-inter">  {"\u20B9"}{price}</p>
      </div>
    </div>
  );

  return (
    <div class="max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row items-start p-6 justify-between">
        {/* Left Section: Image Viewer */}
        <div>
          {/* Large Image */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected"
              className="md:w-[500px] h-auto object-contain"
            />
          </div>

          {/* Thumbnail Slider */}
          <div className="flex space-x-4 mt-4 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`border ${
                  selectedImage === image
                    ? "border-blue-500"
                    : "border-gray-200"
                } rounded-lg overflow-hidden`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-1/2 md:ml-6 mt-6 md:mt-0">
          <div className="mb-6">
            {/* Star Rating */}
            <div className="flex items-center mb-2">
              <div className="flex space-x-1 text-[#FA8232]">
                {/* Star Icons */}
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
              </div>
              <span className="text-[#5F6C72] font-[400] font-poppins ml-2 text-sm">
               <span className="text-[#191C1F] font-[600] font-poppins">4.7 Star Rating</span> (21,671 User feedback)
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-[400] text-[#191C1F] font-poppins mb-4 leading-tight">
              2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
              SSD Storage) - Space Gray
            </h1>

            {/* Additional Details */}
            <div className="space-y-4 text-sm ">
              {/* SKU and Availability in Two Columns */}
              <div className="grid md:grid-cols-2 gap-4">
                <p className="text-[#191C1F] font-[600] font-poppins">
                  <span className="font-[600] font-poppins text-[#5F6C72]">SKU:</span> A264671
                </p>
                <p className="text-[#2DB224] font-[600] font-poppins">
                  <span className="font-[600] font-poppins text-[#5F6C72]">
                    Availability:
                  </span>{" "}
                  In Stock
                </p>
              </div>

              {/* Brand and Category in Two Columns */}
              <div className="grid md:grid-cols-2 gap-4">
                <p className="text-[#191C1F] font-[600] font-poppins">
                  <span className="font-[600] font-poppins text-[#5F6C72]">Brand:</span> Apple
                </p>
                <p className="text-[#191C1F] font-[600] font-poppins">
                  <span className="font-[600] font-poppins text-[#5F6C72]">Category:</span> Electronics
                  Devices
                </p>
              </div>
            </div>
          </div>

          <div className="text-3xl text-[#2DA5F3] font-bold mb-4 flex items-center">
            ₹1,47,098{" "}
            <span className="line-through text-gray-500 text-xl ml-4">
              ₹1,73,072
            </span>
            <span className="text-[#191C1F] bg-[#EFD33D] p-2 text-xl ml-4">
              21% OFF
            </span>
          </div>

          {/* Color Options */}
          {/* Flex Container for Two Columns */}
          <div className="max-w-3xl ml-0">
            <div className="flex flex-wrap -mx-4">
              {/* Left Column */}
              <div className="w-full md:w-1/2 px-4">
                {/* Color Options */}
                <div className="mb-6">
                  <p className="font-semibold text-gray-700 mb-2">Color:</p>
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-gray-500 rounded-full border-4 border-orange-500 focus:outline-none"></button>
                    <button className="w-12 h-12 bg-gray-200 rounded-full border border-gray-300 focus:outline-none"></button>
                  </div>
                </div>

                {/* Memory Options */}
                <div className="mb-6">
                  <label className="font-semibold text-gray-700 block mb-2">
                    Memory:
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring focus:ring-orange-300 focus:outline-none">
                    <option>16GB unified memory</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 px-4">
                {/* Size Options */}
                <div className="mb-6">
                  <label className="font-semibold text-gray-700 block mb-2">
                    Size:
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring focus:ring-orange-300 focus:outline-none">
                    <option>14-inch Liquid Retina XDR display</option>
                  </select>
                </div>

                {/* Storage Options */}
                <div className="mb-6">
                  <label className="font-semibold text-gray-700 block mb-2">
                    Storage:
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring focus:ring-orange-300 focus:outline-none">
                    <option>1TB SSD Storage</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Quantity Selector and Buttons */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-3 py-2 text-gray-600">-</button>
              <input
                type="text"
                value="1"
                readOnly
                className="w-12 text-center border-l border-r border-gray-300"
              />
              <button className="px-3 py-2 text-gray-600">+</button>
            </div>
            <div className="space-x-2">
              <button className="px-6 py-2 bg-[#FA8232] text-white rounded hover:bg-orange-600">
                <Link to="/add-Cart" className="flex items-center gap-2">
                  Add to Cart
                  <img src="/addCart.png" className="w-5 h-5" alt="Cart Icon" />
                </Link>
              </button>

              <button className="px-6 py-2 border bg-white border-[#FA8232] text-[#FA8232] rounded ">
                <Link to="/check-out">
                Buy Now
                </Link>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            {/* Left Section: Add to Wishlist/Compare */}
            <div className="flex space-x-4">
              <button className="text-[#475156] hover:underline flex items-center space-x-2">
                <img
                  src="/ProductDetails/wish.png"
                  alt="Pinterest"
                  className="w-4 h-4"
                />
                <span>Add to Wishlist</span>
              </button>
              <button className="text-[#475156] hover:underline flex items-center space-x-2">
                <img
                  src="/ProductDetails/compair.png"
                  alt="Pinterest"
                  className="w-4 h-4"
                />
                <span>Add to Compare</span>
              </button>
            </div>

            {/* Right Section: Share Product */}
            <div className="flex items-center space-x-2">
              <p className="text-gray-500">Share product:</p>
              <button className="text-gray-500 hover:text-gray-700 flex items-center space-x-1">
                <img
                  src="/ProductDetails/Facebook.png"
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </button>
              <button className="text-gray-500 hover:text-gray-700 flex items-center space-x-1">
                <img
                  src="/ProductDetails/twiter.png"
                  alt="Twitter"
                  className="w-4 h-4"
                />
              </button>
              <button className="text-gray-500 hover:text-gray-700 flex items-center space-x-1">
                <img
                  src="/ProductDetails/pint.png"
                  alt="Pinterest"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
          <div class="text-center border border-gray-300 text-gray-600 text-sm mt-4 p-4">
            <p class="mb-4 font-medium text-left">
              100% Guarantee Safe Checkout
            </p>
            <div class="flex justify-center space-x-4">
              <img
                src="/ProductDetails/checkout.png"
                alt="Visa"
                class="w-full h-auto  rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border max-w-[1400px] mx-auto">
        {/* Tabs */}
        <div className="border-b w-full">
          {" "}
          {/* Ensure Full Width Border */}
          <div className="flex justify-around max-w-[900px] text-[#5F6C72] text-[17px] font-[500] font-publicSans mx-auto w-full">
            <button className="px-4 py-2 font-semibold  hover:text-[#191C1F]  w-full text-center border-b-4 border-transparent hover:border-[#FA8232]">
              DESCRIPTION
            </button>
            <button className="px-2 py-2 font-semibold hover:text-[#191C1F] w-full text-center border-b-4 border-transparent hover:border-[#FA8232] whitespace-nowrap">
              ADDITIONAL INFORMATION
            </button>

            <button className="px-4 py-2 font-semibold hover:text-[#191C1F] w-full text-center border-b-4 border-transparent hover:border-[#FA8232]">
              SPECIFICATION
            </button>
            <button className="px-4 py-2 font-semibold  hover:text-[#191C1F] w-full text-center border-b-4 border-transparent hover:border-[#FA8232]">
              REVIEW
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:flex md:space-x-6 mt-6 w-full">
          {/* Description Section */}
          <div className="md:w-1/2 mb-6  font-publicSans md:mb-0">
            <h2 className="text-[20px] font-[600] text-[#191C1F] mb-4">
              Description
            </h2>
            <p className=" text-[#5F6C72] font-[400] mb-4">
              The most powerful MacBook Pro ever is here. With the blazing-fast
              M1 Pro or M1 Max chip — the first Apple silicon designed for pros
              — you get groundbreaking performance and amazing battery life. Add
              to that a stunning Liquid Retina XDR display, the best camera and
              audio ever in a Mac notebook, and all the ports you need.
            </p>
            <p className=" text-[#5F6C72] font-[400]">
              Even the most ambitious projects are easily handled with up to 10
              CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and
              dedicated encode and decode media engines that support H.264,
              HEVC, and ProRes codecs.
            </p>
          </div>

          {/* Feature Section */}
          <div className="md:w-1/4 text-[#191C1F] font-publicSans mb-6 md:mb-0">
            <h2 className="text-[20px] font-[600] text-[#191C1F] font-publicSans  mb-4">
              Feature
            </h2>
            <ul className="space-y-2 text-[#191C1F] font-[400] text-[17px] ">
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <img src="/ProductDetails/warranty.png" />
                </span>
                Free 1 Year Warranty
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <img src="/ProductDetails/delivery.png" />
                </span>
                Free Shipping & Fastest Delivery
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <img src="/ProductDetails/money-back.png" />
                </span>
                100% Money-back guarantee
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <img src="/ProductDetails/support.png" />
                </span>
                24/7 Customer Support
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <img src="/ProductDetails/payment.png" />
                </span>
                Secure Payment Method
              </li>
            </ul>
          </div>

          {/* Shipping Information Section */}
          <div className="md:w-1/4">
            <h2 className="text-[20px] font-[600] text-[#191C1F] font-publicSans mb-4">
              Shipping Information
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="text-[#191C1F] font-[500]">
                Courier:{" "}
                <span className="text-[#5F6C72] font-[400]">
                  2-4 days, free shipping
                </span>
              </li>
              <li className="text-[#191C1F] font-[500]">
                Local Shipping:{" "}
                <span className="text-[#5F6C72] font-[400]">
                  up to one week, $19.00
                </span>
              </li>
              <li className="text-[#191C1F] font-[500]">
                UPS Ground Shipping:{" "}
                <span className="text-[#5F6C72] font-[400]">
                  4-6 days, $29.00
                </span>
              </li>
              <li className="text-[#191C1F] font-[500]">
                Unishop Global Export:{" "}
                <span className="text-[#5F6C72] font-[400]">
                  3-4 days, $39.00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* start Cateries2 section */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories2.map((category) => (
            <div key={category.title}>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <div className="grid gap-4">
                {category.products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
