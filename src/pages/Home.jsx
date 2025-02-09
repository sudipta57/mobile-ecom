import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const bestDealsItems = [
    {
      id: 1,
      title: "Bose Sport Earbuds",
      price: "2,300",
      image: "/home/item5.png",
      label: "SOLD OUT",
      labelColor: "bg-gray-400",
    },
    {
      id: 2,
      title: "Simple Mobile 4G Smartphone",
      price: "220",
      image: "/home/item6.png",
    },
    {
      id: 3,
      title: "4K UHD LED Smart TV",
      price: "1,50",
      discount: "19% OFF",
      image: "/home/item9.png",
    },
    {
      id: 4,
      title: "Sony DSCHX8 High Zoom Camera",
      price: "1,200",
      image: "/home/item7.png",
    },
    {
      id: 5,
      title: "Dell Optiplex Monitor",
      price: "299",
      image: "/home/item8.png",
    },
    {
      id: 6,
      title: "Portable Washing Machine",
      price: "70",
      discount: "32% OFF",
      image: "/home/item9.png",
    },
    {
      id: 7,
      title: "2-Barrel Carburetor",
      price: "160",
      image: "/home/item10.png",

      label: "HOT",
      labelColor: "bg-red-500",
    },
    {
      id: 8,
      title: "JBL Flip 4 Speaker",
      price: "250",
      discount: "32% OFF",
      image: "/home/item11.png",
    },
  ];
  const categories = [
    { title: "Computer & Laptop", image: "/home/category1.png" },
    { title: "Smartphone", image: "/home/category2.png" },
    { title: "Headphones", image: "/home/category3.png" },
    { title: "Accessories", image: "/home/category4.png" },
    { title: "Camera & Photo", image: "/home/category5.png" },
    { title: "TV & Homes", image: "/home/category6.png" },
    { title: "Accessories", image: "/home/category4.png" },
  ];
  const fetureItems = [
    {
      id: 1,
      title: "Bose Sport Earbuds",
      price: "2,300",
      image: "/home/item5.png",
      label: "SOLD OUT",
      labelColor: "bg-gray-400",
      rating: 5,
    },
    {
      id: 2,
      title: "Simple Mobile 4G Smartphone",
      price: "220",
      image: "/home/item6.png",
      rating: 4,
    },
    {
      id: 3,
      title: "4K UHD LED Smart TV",
      price: "1,50",
      discount: "19% OFF",
      image: "/home/item9.png",
      rating: 5,
    },
    {
      id: 4,
      title: "Sony DSCHX8 High Zoom Camera",
      price: "1,200",
      image: "/home/item7.png",
      rating: 5,
    },
    {
      id: 5,
      title: "Dell Optiplex Monitor",
      price: "299",
      image: "/home/item8.png",
      rating: 5,
    },
    {
      id: 6,
      title: "Portable Washing Machine",
      price: "70",
      discount: "32% OFF",
      image: "/home/item9.png",
      rating: 5,
    },
    {
      id: 7,
      title: "2-Barrel Carburetor",
      price: "160",
      image: "/home/item10.png",

      label: "HOT",
      labelColor: "bg-red-500",
      rating: 5,
    },
    {
      id: 8,
      title: "JBL Flip 4 Speaker",
      price: "250",
      discount: "32% OFF",
      image: "/home/item11.png",
      rating: 5,
    },
  ];
  const computerItems = [
    {
      id: 1,
      title: "Bose Sport Earbuds",
      price: "$2,300",
      image: "/computer/Image1.png",
      label: "SOLD OUT",
      labelColor: "bg-gray-400",
      rating: 5,
    },
    {
      id: 2,
      title: "Simple Mobile 4G Smartphone",
      price: "$220",
      image: "/computer/Image2.png",
      rating: 4,
    },
    {
      id: 3,
      title: "4K UHD LED Smart TV",
      price: "$1,50",
      discount: "19% OFF",
      image: "/computer/Image3.png",
    },
    {
      id: 4,
      title: "Sony DSCHX8 High Zoom Camera",
      price: "$1,200",
      image: "/computer/Image4.png",
    },
    {
      id: 5,
      title: "Dell Optiplex Monitor",
      price: "$299",
      image: "/computer/Image5.png",
    },
    {
      id: 6,
      title: "Portable Washing Machine",
      price: "$70",
      discount: "32% OFF",
      image: "/computer/Image6.png",
    },
    {
      id: 7,
      title: "2-Barrel Carburetor",
      price: "$160",
      image: "/home/item10.png",

      label: "HOT",
      labelColor: "bg-red-500",
    },
    {
      id: 8,
      title: "JBL Flip 4 Speaker",
      price: "$250",
      discount: "32% OFF",
      image: "/home/item11.png",
    },
  ];
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
    <div className="flex items-center p-4 bg-white border">
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
        <h3 className="text-sm font-medium text-gray-700">{name}</h3>
        <p className="mt-2 text-blue-600 font-semibold">
          {"\u20B9"}
          {price}
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      {/* Top Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {/* Left Column - Slider */}
        <div className="rounded-lg md:col-span-2 h-full flex">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper w-full h-full"
            loop={true}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative flex flex-col md:flex-row items-center justify-center h-full bg-[#F2F4F5] rounded-lg shadow-md p-6">
                {/* Price Badge - Positioned at Top Right */}
                <div className="absolute top-12 right-8 bg-[#2DA5F3] font-inter text-white w-20 h-20 flex items-center justify-center rounded-full shadow-white shadow-lg text-lg font-bold">
                  {"\u20B9"}2,599
                </div>

                <div>
                  <h4 className="text-sm text-[#2484C2] font-medium">
                    THE BEST PLACE TO PLAY
                  </h4>
                  <h2 className="md:text-[50px] md:font-[600] mb-2 text-[#191C1F]">
                    Xbox Consoles
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Save up to 50% on select Xbox games. Get 3 months of PC Game
                    Pass for {"\u20B9"}172.
                  </p>
                  <button className="bg-[#FA8232] text-white py-2 px-4  text-sm font-medium hover:bg-orange-600">
                    SHOP NOW {"\u2192"}
                  </button>
                </div>
                <img src="/home/item1.png" alt="item" />
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="flex flex-col justify-center items-start h-full bg-[#F2F4F5] rounded-lg shadow-md p-6">
                <h4 className="text-sm text-green-500 font-medium">
                  BIG DISCOUNTS
                </h4>
                <h2 className="text-3xl font-bold mb-2">PlayStation 5</h2>
                <p className="text-gray-600 mb-4">
                  Enjoy your favorite games at the best price!
                </p>
                <button className="bg-[#FA8232] text-white py-2 px-4  text-sm font-medium hover:bg-orange-600">
                  SHOP NOW {"\u2192"}
                </button>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="flex flex-col justify-center items-start h-full bg-[#F2F4F5] rounded-lg shadow-md p-6">
                <h4 className="text-sm text-red-500 font-medium">
                  NEW ARRIVALS
                </h4>
                <h2 className="text-3xl font-bold mb-2">Gaming Accessories</h2>
                <p className="text-gray-600 mb-4">
                  Upgrade your gaming setup with the latest gear!
                </p>
                <button className="bg-[#FA8232] text-white py-2 px-4  text-sm font-medium hover:bg-orange-600">
                  SHOP NOW {"\u2192"}
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Column - Two Cards */}
        <div className="flex flex-col space-y-6 md:col-span-1 h-full">
          <div className="bg-black text-white rounded-lg shadow-md flex flex-1">
            <div className="p-6">
              <h4 className="text-[#EBC80C] text-sm font-medium uppercase">
                Summer Sales
              </h4>
              <h2 className="text-xl font-bold">New Google Pixel 6 Pro</h2>
              <p className="text-sm text-gray-300 mb-4">29% OFF</p>
              <button className="bg-[#FA8232] text-white py-2 px-4  text-sm font-medium hover:bg-orange-600">
                SHOP NOW {"\u2192"}
              </button>
            </div>
            <div className="relative">
              <img
                src="/home/item2.png"
                alt="item2"
                className="w-[200px] h-[200px]"
              />
              <div className="absolute right-4 top-4">
                <button className="bg-[#EFD33D] text-black px-2 py-1">
                  29% OFF
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#F2F4F5] rounded-lg shadow-md flex flex-row-reverse flex-1">
            <div className="p-6">
              <h2 className="text-xl font-bold">Xiaomi FlipBuds Pro</h2>
              <p className="text-[22px] font-[600] text-[#2DA5F3] my-4">
                {"\u20B9"}1,299
              </p>

              <button className="bg-[#FA8232] text-white py-2 px-4  text-sm font-medium hover:bg-orange-600">
                SHOP NOW {"\u2192"}
              </button>
            </div>
            <div>
              <img
                src="/home/item3.png"
                alt="item2"
                className="w-[200px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 border">
        <div className="flex items-center space-x-2 p-4 bg-white border-r">
          <img
            src="/home/icon1.png"
            alt="Delivery"
            className="w-10 h-10 mb-2"
          />
          <div>
            <h4 className="text-sm font-bold">Fasted Delivery</h4>
            <p className="text-gray-600 text-sm">Delivery in 24/H</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-white border-r">
          <img src="/home/icon2.png" alt="Return" className="w-10 h-10 mb-2" />
          <div>
            <h4 className="text-sm font-bold">24 Hours Return</h4>
            <p className="text-gray-600 text-sm">100% money-back guarantee</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-white border-r">
          <img src="/home/icon3.png" alt="Payment" className="w-10 h-10 mb-2" />
          <div>
            <h4 className="text-sm font-bold">Secure Payment</h4>
            <p className="text-gray-600 text-sm">Your money is safe</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-white border-r">
          <img src="/home/icon4.png" alt="Support" className="w-10 h-10 mb-2" />
          <div>
            <h4 className="text-sm font-bold">Support 24/7</h4>
            <p className="text-gray-600 text-sm">Live contact/message</p>
          </div>
        </div>
      </div>

      {/* best deals */}
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex font-publicSans items-center">
            <h2 className="md:me-10 text-[#191C1F] md:text-[30px] font-[600]">
              Best Deals
            </h2>
            <p>Deals ends in</p>
            <h2 className="bg-[#F3DE6D] md:p-1 ms-5">16d : 21h : 57m : 23s</h2>
          </div>
          <p className="text-[#2DA5F3] my-5 md:my-0">
            Browse All Product <i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 p-6">
          {/* Left Column */}
          <div className="bg-white p-6  border  md:col-span-1 h-full flex flex-col">
            <div className="relative">
              <div className="absolute top-0 left-0 flex flex-col space-y-1">
                <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                  32% OFF
                </span>
                <span className="bg-red-500 w-[33px] text-white text-xs font-bold px-1 py-1 rounded">
                  HOT
                </span>
              </div>
              <img
                src="/home/item4.png"
                alt="Xbox Series"
                className="w-full h-auto rounded"
              />
            </div>

            <div className="mt-4 flex-1">
              <div className="flex items-center space-x-2 mt-2 mb-2">
                <span className="text-yellow-500">★ ★ ★ ★ ★</span>
                <span className="text-gray-600 text-sm">(52,677)</span>
              </div>
              <h3 className="text-lg leading-[1.2] font-publicSans font-[400]">
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Version
              </h3>
              <div className="flex items-center font-inter mb-3 space-x-2 mt-2">
                <span className="text-gray-400 line-through">
                  {"\u20B9"}865.99
                </span>
                <span className="text-blue-500 font-bold">
                  {"\u20B9"}442.12
                </span>
              </div>
              <p className="text-sm font-publicSans text-[#5F6C72] mb-4">
                Games built using the Xbox Series X|S development kit showcase
                unparalleled load times, visuals.
              </p>

              <div className="flex items-center space-x-1">
                <img src="/wish.png" alt="Left Icon" className="w-9 h-9" />
                <button className="bg-orange-500 text-white py-2 px-2 p-2  text-[12px] font-medium hover:bg-orange-600 flex items-center">
                  <img
                    src="/cart.png"
                    alt="Cart Icon"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="whitespace-nowrap">ADD TO CARD</span>
                </button>

                <img src="/view.png" alt="Right Icon" className="w-9 h-9" />
              </div>
            </div>
          </div>

          {/* Right Column (No Gap) */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-4 h-full">
            {/* Product Cards */}
            {bestDealsItems.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 border relative group"
              >
                {/* Label */}
                {product.label && (
                  <span
                    className={`z-10 absolute top-2 left-2 text-xs font-bold px-2 py-1  ${
                      product.labelColor || "bg-[#EFD33D]"
                    } text-white`}
                  >
                    {product.label}
                  </span>
                )}
                {/* Discount */}
                {product.discount && (
                  <span className="z-10 absolute top-2 right-2 bg-[#EFD33D] text-xs font-bold px-2 py-1  text-white ">
                    {product.discount}
                  </span>
                )}
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto rounded"
                  />
                  {/* Hover Icons */}
                  <div className="bg-[#00000033] absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to="/wish-list">
                      <img
                        src="/home/heart-icon.png"
                        alt="like"
                        className="w-6 h-6 md:w-auto md:h-auto"
                      />
                    </Link>
                    <Link to="/add-Cart">
                      <img
                        src="/home/cart-icon.png"
                        alt="cart"
                        className="w-6 h-6 md:w-auto md:h-auto"
                      />
                    </Link>
                    <Link to="/product-details">
                      <img
                        src="/home/view-icon.png"
                        alt="view"
                        className="w-6 h-6 md:w-auto md:h-auto"
                      />
                    </Link>
                  </div>
                </div>
                {/* Product Info */}
                <div className="mt-4">
                  <h3 className="text-sm font-bold">{product.title}</h3>
                  <p className="text-blue-500 font-bold">
                    {"\u20B9"}
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* shop with categories */}
      <div className="my-10  font-poppins">
        <h2 className="text-center text-2xl font-bold mb-6">
          Shop with Categorys
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          // slidesPerView={6}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
          className="relative"
          loop={true}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 border text-center">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom Navigation Arrows */}
          <button className="z-50 custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button className="z-40 custom-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Swiper>
      </div>

      {/* fetured product */}
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
          {/* Left Column */}
          <div className="bg-[#F3DE6D] p-6 rounded-lg font-publicSans shadow-md">
            {/* Heading */}
            <div className="text-center">
              <p className="text-xs text-red-600 font-bold uppercase tracking-wide">
                Computer & Accessories
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                32% Discount
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                For all electronics products
              </p>
              <p className="text-sm flex text-gray-600 mt-2">
                Offers end in:
                <span className="bg-white px-1 py-1  text-[9px] leading-[1] font-medium text-gray-900 rounded">
                  ENDS OF CHRISTMAS
                </span>
              </p>
            </div>

            {/* Call-to-Action Button */}
            <div className="text-center mt-6">
              <button className="bg-[#FA8232] text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-orange-600">
                Shop Now {"\u2192"}
              </button>
            </div>

            {/* Image Section */}
            <div className="mt-8">
              <img
                src="/feature.png" // Replace this with the correct image path
                alt="Computer Accessories"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className=" md:col-span-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-7">
              <h2 className="md:me-10 text-[#191C1F] text-[30px] font-[600]">
                Featured Products
              </h2>
              <div className="flex flex-col md:flex-row justify-between items-center space-x-5">
                <div className="my-3 md:my-0 flex flex-wrap items-center space-x-4 whitespace-nowrap">
                  <p className="text-[#191C1F] font-[600] border-b border-[#FA8232]">
                    All Product
                  </p>
                  <p>Smart Phone</p>
                  <p>Laptop</p>
                  <p>Headphone</p>
                  <p>TV</p>
                </div>
                <p className="text-[#FA8232]">
                  Browse All Product <i className="fa-solid fa-arrow-right"></i>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {/* Product Cards */}
              {fetureItems.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 border relative group"
                >
                  {/* Label */}
                  {product.label && (
                    <span
                      className={`z-10 absolute top-2 left-2 text-xs font-bold px-2 py-1  ${
                        product.labelColor || "bg-[#EFD33D]"
                      } text-white`}
                    >
                      {product.label}
                    </span>
                  )}
                  {/* Discount */}
                  {product.discount && (
                    <span className="z-10 absolute top-2 right-2 bg-[#EFD33D] text-xs font-bold px-2 py-1  text-white">
                      {product.discount}
                    </span>
                  )}
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto rounded"
                    />
                    {/* Hover Icons */}
                    <div className="bg-[#00000033] absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to="/wish-list">
                        <img
                          src="/home/heart-icon.png"
                          alt="like"
                          className="w-6 h-6 md:w-auto md:h-auto"
                        />
                      </Link>
                      <Link to="/add-Cart">
                        <img
                          src="/home/cart-icon.png"
                          alt="cart"
                          className="w-6 h-6 md:w-auto md:h-auto"
                        />
                      </Link>
                      <Link to="/product-details">
                        <img
                          src="/home/view-icon.png"
                          alt="view"
                          className="w-6 h-6 md:w-auto md:h-auto"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="mt-4">
                    <div className="flex space-x-1 items-center">
                      {product.rating > 0 &&
                        Array(product.rating)
                          .fill()
                          .map((_, index) => (
                            <i
                              className="fa-solid fa-star text-[#FA8232]"
                              key={index}
                            ></i>
                          ))}
                      {product.rating && (
                        <p className="text-[#77878F]">({product.rating})</p>
                      )}
                    </div>
                    <h3 className="text-sm font-bold">{product.title}</h3>
                    <p className="text-blue-500 font-bold">
                      {"\u20B9"}
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand section */}

      <div className="flex flex-col font-publicSans md:flex-row gap-6 p-4">
        {/* Apple HomePod Mini Section */}
        <div className="flex-1 bg-gray-200 p-6 rounded-lg shadow-md flex items-center">
          <div className="flex-1">
            <div className="mb-4">
              <h5 className="bg-[#2DA5F3] inline-block px-2 py-1">
                <span className="text-sm font-semibold text-white uppercase">
                  Introducing
                </span>
              </h5>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              New Apple Homepod Mini
            </h2>
            <p className="text-gray-600 mb-4">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
            <button className="bg-[#FA8232] text-white py-2 px-4 rounded-lg hover:bg-orange-600">
              Shop Now {"\u2192"}
            </button>
          </div>
          <div className="flex-1 h-auto rounded-lg overflow-hidden ml-6">
            <img
              src="/branding/music.png"
              alt="Apple HomePod Mini"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Xiaomi Mi 11 Ultra Section */}
        <div className="flex-1 bg-black p-6 rounded-lg shadow-md flex items-center text-white">
          <div className="flex-1">
            <div className="mb-4">
              <h5 className="bg-[#EFD33D] inline-block px-2 py-1">
                <span className="text-sm font-semibold text-[#191C1F] uppercase">
                  Introducing New
                </span>
              </h5>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Xiaomi Mi 11 Ultra 12GB+256GB
            </h2>
            <p className="text-gray-400 mb-4">
              *Data provided by internal laboratories. Industry measurement.
            </p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
              Shop Now {"\u2192"}
            </button>
          </div>
          <div className="flex-1 h-auto rounded-lg ml-6">
            <div className="absolute bg-[#2DA5F3] text-white flex items-center shadow-lg  justify-center py-1 px-3 rounded-full h-20 w-20 text-lg z-30 mr-0">
              {"\u20B9"}51,065
            </div>

            <img
              src="/branding/phone.png"
              alt="Xiaomi Mi 11 Ultra"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* end brand section */}

      {/* start Computer Accessories */}

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between font-poppins items-center mb-8">
          <h1 className="text-2xl font-bold">Computer Accessories</h1>
          <div className="flex flex-wrap space-y-3 md:space-y-0 space-x-4 text-gray-600">
            <span className="cursor-pointer">All Product</span>
            <span className="cursor-pointer">Keyboard & Mouse</span>
            <span className="cursor-pointer">Headphone</span>
            <span className="cursor-pointer">Webcam</span>
            <span className="cursor-pointer">Printer</span>
            <span className="text-orange-500 font-semibold cursor-pointer">
              Browse All Product {"\u2192"}
            </span>
          </div>
        </div>

        {/* Content Section */}
        {/* Content Section */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          {/* Left Section: Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {Array(8)
              .fill("")
              .map((_, index) => {
                const images = [
                  "/computer/Image1.png", // Replace with your actual image URLs
                  "/computer/Image2.png",
                  "/computer/Image3.png",
                  "/computer/Image4.png",
                  "/computer/Image5.png",
                  "/computer/Image6.png",
                  "/computer/Image2.png",
                  "/computer/Image3.png",
                ];

                const titles = [
                  "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
                  "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
                  "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
                  "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
                  "Samsung Electronics Samsung Galexy S21 5G",
                  "4K UHD LED Smart TV with Chromecast Built-in",
                  "Wired Over-Ear Gaming Headphones with USB",
                  "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
                ];

                const prices = [80, 120, 200, 1500, 60, 300, 120, 200];

                const reviews = [4, 3, 5, 4, 2, 5, 3, 4]; // Ratings (out of 5)
                const totalReviews = [798, 450, 120, 230, 500, 600, 450, 120]; // Total number of reviews

                return (
                  <div key={index} className="bg-white border p-3 ">
                    {/* Badge */}
                    <div className="mb-4">
                      <span
                        className={`${
                          index % 3 === 0
                            ? "bg-blue-500"
                            : index % 3 === 1
                            ? "bg-red-500"
                            : "bg-green-500"
                        } text-white text-xs font-semibold py-1 px-3 `}
                      >
                        {index % 3 === 0
                          ? "BEST DEALS"
                          : index % 3 === 1
                          ? "HOT"
                          : "SALE"}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="w-full h-325  overflow-hidden">
                      <img
                        src={images[index]} // Set the image dynamically
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Review Section */}
                    <div className="flex items-center mb-2">
                      {/* Render filled stars */}
                      {Array(reviews[index])
                        .fill()
                        .map((_, i) => (
                          <i
                            key={i}
                            className="fa-solid fa-star text-[#FA8232] text-sm mr-1"
                          ></i>
                        ))}

                      {/* Render empty stars to make it always show 5 stars */}
                      {Array(5 - reviews[index])
                        .fill()
                        .map((_, i) => (
                          <i
                            key={i + reviews[index]}
                            className="fa-regular fa-star text-gray-400 text-sm mr-1"
                          ></i>
                        ))}

                      <span className="text-gray-600 text-sm ml-2">{`(${totalReviews[index]})`}</span>
                    </div>

                    {/* Product Info */}
                    <h3 className="text-base font-semibold text-gray-800 mb-1">
                      {titles[index]}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-[16px] font-[600] text-[#2DA5F3]">
                        {"\u20B9"}
                        {prices[index]}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/4 space-y-6">
            {/* Earbuds Section */}
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
              <div className="w-full h-30 rounded-lg mb-4">
                <img src="/computer/rightImage.png" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Xiaomi True Wireless Earbuds
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Escape the noise, It’s time to hear the magic with Xiaomi
                Earbuds.
              </p>
              <div className="text-[15px] space-x-2 font-PublicSans text-gray-800 mb-4">
                Only for:{" "}
                <span className="bg-[#FFFFFF] font-[600] p-2">
                  {"\u20B9"}25,879
                </span>
              </div>
              <button className="bg-[#FA8232] text-white py-2 px-4 hover:bg-orange-600">
                Shop Now {"\u2192"}
              </button>
            </div>

            {/* Discount Section */}
            <div className="bg-[#124261] p-6 rounded-lg shadow-md text-center text-white">
              <p className="text-[15px] bg-gray-500 px-2 mb-2">SUMMER SALES</p>
              <p className="text-[18px] font-[600] mb-4">37% DISCOUNT</p>
              <p className="text-sm mb-6">
                Only for <span className="text-[#EBC80C]">Smartphone</span>{" "}
                product.
              </p>
              <button className="bg-[#2DA5F3] text-white py-2 px-4  hover:bg-blue-600">
                Shop Now {"\u2192"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end Computer Accessories */}
      {/* Add section */}
      <div className="bg-orange-50 flex flex-col lg:flex-row items-center justify-between px-6 py-8 lg:py-12 rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center font-[publicSans] lg:text-left">
          <span className="bg-[#2DA5F3] text-white text-xs font-semibold py-1 px-2 ">
            SAVE UP TO {"\u20B9"}2000.00
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-[#191C1F] mt-4">
            MacBook Pro
          </h2>
          <p className="text-[#191C1F] mt-2">
            Apple M1 Max Chip, 32GB Unified Memory, 1TB SSD Storage
          </p>
          <button className="bg-[#FA8232] text-white text-sm font-medium py-2 px-4  mt-6 hover:bg-orange-600">
            SHOP NOW {"\u2192"}
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
          {/* Price Badge */}
          <div className="absolute top-10 left-12 bg-[#FFCEAD] text-[#191C1F] text-sm font-inter flex items-center justify-center h-20 w-20 rounded-full shadow-md border-4 border-white z-10">
            {"\u20B9"}1999
          </div>

          {/* Product Image */}
          <img
            src="/computer/add.png"
            alt="MacBook Pro"
            className="w-3/4 lg:w-4/5 rounded-lg"
          />
        </div>
      </div>
      {/* end add section */}

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

      {/* Newsleter */}
      <div className="bg-[#1B6392] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Header Text */}
          <h2 className="text-2xl md:text-3xl font-[600] font-publicSans mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-[15px] md:text-base text-gray-200 font-[400] mb-8 max-w-[500px] mx-auto">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          {/* Subscription Form */}
          <div className="relative max-w-xl mx-auto">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-4 pr-30 text-gray-800 focus:outline-none"
            />
            {/* Subscribe Button */}
            <button className="absolute right-2 top-2 bottom-1 bg-[#FA8232] hover:bg-orange-600 text-white px-6  font-semibold">
              SUBSCRIBE {"\u2192"}
            </button>
          </div>

          {/* Brand Logos */}
          <div className="flex justify-center items-center gap-6 mt-8 text-gray-300">
            <img
              src="/newsletter/google.png"
              alt="Google"
              className="h-6 md:h-8"
            />
            <img
              src="/newsletter/amazone.png"
              alt="Amazon"
              className="h-14 md:h-14"
            />
            <img
              src="/newsletter/philips.png"
              alt="Philips"
              className="h-14 md:h-14"
            />
            <img
              src="/newsletter/toshiba.png"
              alt="Toshiba"
              className="h-14 md:h-14"
            />
            <img
              src="/newsletter/samsung.png"
              alt="Samsung"
              className="h-14 md:h-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
