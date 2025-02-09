import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { useNavigate,Link } from "react-router-dom";
const Vegetables = [
  {
    id: 1,
    img: "/shop-filter/products/p-1.png",
    name: "Big Potato's",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 2,
    img: "/shop-filter/products/p-2.png",
    name: "Chanise Cabbage",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 3,
    img: "/shop-filter/products/p-3.png",
    name: "Corn",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 4,
    img: "/shop-filter/products/p-4.png",
    name: "Brinjal",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 5,
    img: "/shop-filter/products/p-5.png",
    name: "Fresh Cauliflower",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 6,
    img: "/shop-filter/products/p-6.png",
    name: "Onion",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 7,
    img: "/shop-filter/products/p-7.png",
    name: "Green Capsicum",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 8,
    img: "/shop-filter/products/p-8.png",
    name: "Green Chili",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 9,
    img: "/shop-filter/products/p-9.png",
    name: "Green Cucumber",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 10,
    img: "/shop-filter/products/p-10.png",
    name: "Green Lettuce",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 11,
    img: "/shop-filter/products/p-11.png",
    name: "Ladies Finger",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 12,
    img: "/shop-filter/products/p-12.png",
    name: "Red Capsicum",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 13,
    img: "/shop-filter/products/p-13.png",
    name: "Red Chili",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 14,
    img: "/shop-filter/products/p-14.png",
    name: "Red Tomato",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 15,
    img: "/shop-filter/products/p-15.png",
    name: "Red Cabbage",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 16,
    img: "/shop-filter/products/p-1.png",
    name: "Big Potato's",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  // Add the rest of the products
];
const FreshFruits = [
  {
    id: 1,
    img: "/shop-filter/fruits/fr-1.png",
    name: "Orange",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 2,
    img: "/shop-filter/fruits/fr-2.png",
    name: "Apple",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 3,
    img: "/shop-filter/fruits/fr-3.png",
    name: "Banana",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 4,
    img: "/shop-filter/fruits/fr-4.png",
    name: "Kiwi",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 5,
    img: "/shop-filter/fruits/fr-5.png",
    name: "Mango",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 6,
    img: "/shop-filter/fruits/fr-6.png",
    name: "PineApple",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 7,
    img: "/shop-filter/fruits/fr-7.png",
    name: "Grapes",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 8,
    img: "/shop-filter/fruits/fr-8.png",
    name: "Green Apple",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 9,
    img: "/shop-filter/fruits/fr-9.png",
    name: "StrawBerry",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 10,
    img: "/shop-filter/fruits/fr-10.png",
    name: "Avocado",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 11,
    img: "/shop-filter/fruits/fr-11.png",
    name: "Pomegrante",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 12,
    img: "/shop-filter/fruits/fr-12.png",
    name: "Dragon Fruit",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 13,
    img: "/shop-filter/fruits/fr-13.png",
    name: "Pear",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 14,
    img: "/shop-filter/fruits/fr-14.png",
    name: "Papaya",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  {
    id: 15,
    img: "/shop-filter/fruits/fr-15.png",
    name: "Pine Apple",
    price: 180.99,
    image: "path-to-image",
    rating: 4.5,
    outOfStock: true,
  },
  {
    id: 16,
    img: "/shop-filter/fruits/fr-1.png",
    name: "Big Potato's",
    price: 140.99,
    image: "path-to-image",
    rating: 4.5,
  },
  // Add the rest of the products
];
const fetureItems = [
  {
    id: 1,
    title: "Bose Sport Earbuds",
    price: "2,300",
    image: "/home/item5.png",

    label: "HOT",
    labelColor: "bg-red-500",
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
    // discount: "19% OFF",
    image: "/home/item9.png",

    label: "BEST DEALS",
    labelColor: "bg-[#2DA5F3]",
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
    rating: 4,
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
  {
    id: 9,
    title: "Bose Sport Earbuds",
    price: "2,300",
    image: "/home/item5.png",

    rating: 5,
  },
  {
    id: 10,
    title: "Simple Mobile 4G Smartphone",
    price: "220",
    image: "/home/item6.png",
    rating: 4,
  },
  {
    id: 11,
    title: "4K UHD LED Smart TV",
    price: "1,50",
    discount: "19% OFF",
    image: "/home/item9.png",
    rating: 5,
  },
  {
    id: 12,
    title: "Sony DSCHX8 High Zoom Camera",
    price: "1,200",
    image: "/home/item7.png",
    rating: 5,
  },
  {
    id: 13,
    title: "Dell Optiplex Monitor",
    price: "299",
    image: "/home/item8.png",
    rating: 4,
  },
  {
    id: 14,
    title: "Portable Washing Machine",
    price: "70",
    discount: "32% OFF",
    image: "/home/item9.png",
    rating: 5,
  },
  {
    id: 15,
    title: "2-Barrel Carburetor",
    price: "160",
    image: "/home/item10.png",

    label: "HOT",
    labelColor: "bg-red-500",
    rating: 5,
  },
  {
    id: 16,
    title: "JBL Flip 4 Speaker",
    price: "250",
    discount: "32% OFF",
    image: "/home/item11.png",
    rating: 5,
  },
  {
    id: 17,
    title: "Dell Optiplex Monitor",
    price: "299",
    image: "/home/item8.png",
    rating: 4,
  },
  {
    id: 18,
    title: "Portable Washing Machine",
    price: "70",
    discount: "32% OFF",
    image: "/home/item9.png",
    rating: 5,
  },
  {
    id: 19,
    title: "2-Barrel Carburetor",
    price: "160",
    image: "/home/item10.png",

    label: "HOT",
    labelColor: "bg-red-500",
    rating: 5,
  },
  {
    id: 20,
    title: "JBL Flip 4 Speaker",
    price: "250",
    discount: "32% OFF",
    image: "/home/item11.png",
    rating: 5,
  },
];
export default function ShopPage() {
  const pages = [1, 2, 3, 4, 5, 6];
  const currentPage = 1; // Set the current active page
  // State to track the selected category and corresponding products
  const [category, setCategory] = useState("Vegetables"); // Default is "Vegetables"
  const [products, setProducts] = useState(Vegetables); // Default products

  // Handler for radio button change
  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory); // Update selected category

    // Update products based on the selected category
    if (selectedCategory === "Vegetables") {
      setProducts(Vegetables);
    } else if (selectedCategory === "Fresh Fruit") {
      setProducts(FreshFruits);
    }
  };
  const [brands, setBrands] = useState({
    Apple: true,
    Microsoft: true,
    Dell: false,
    Symphony: false,
    Sony: false,
    LG: true,
    "One Plus": false,
    Google: true,
    Samsung: false,
    HP: true,
    Xiaomi: false,
    Panasonic: true,
    Intel: false,
  });

  const toggleBrand = (brand) => {
    setBrands((prevState) => ({
      ...prevState,
      [brand]: !prevState[brand],
    }));
  };
  const [minValue, setMinValue] = useState(50); // Min value
  const [maxValue, setMaxValue] = useState(1500); // Max value

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    // Update minValue only if it's less than maxValue
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    // Update maxValue only if it's greater than minValue
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    // <div className="bg-[#C5EAD9C7] max-w-[1500px] mx-auto">
    <div>
      <div className="flex items-center mx-auto bg-[#F2F4F5] max-w-[1400px] p-5 ps-10 text-[#5F6C72] ">
        {/* Home */}
        <div className="flex justify-center font-poppins text-[14px] font-[400] ">
          {/* Home */}
          <p className="flex items-center">
            <img src="/home.png" alt="Home Icon" className="mr-2" />
            Home
            <i className="fa-solid fa-greater-than mx-2"></i>
          </p>

          {/* Shop */}
          <p className="flex items-center">
            Shop
            <i className="fa-solid fa-greater-than mx-2"></i>
          </p>

          {/* Shop Grid */}
          <p className="flex items-center">
            Shop Grid
            <i className="fa-solid fa-greater-than mx-2"></i>
          </p>

          {/* Electronics Devices */}
          <span className="text-[#2DA5F3]">Electronics Devices</span>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen grid max-w-[1400px] grid-cols-1 mx-auto md:grid-cols-4">
        {/* Left Section */}
        <div className="bg-white px-6 py-8 md:col-span-1">
          {/* Categories Section */}
          <div className="mb-8 font-poppins text-[#475156]">
            <h4 className="text-[#191C1F] font-[500] mb-4">Category</h4>
            <ul className="space-y-2">
              {[
                { name: "Electronics Devices" },
                { name: "Computer & Laptop" },
                { name: "Computer Accessories" },
                { name: "SmartPhone" },
                { name: "Headphone" },
                { name: "Mobile Accessories" },
                { name: "Gaming Console" },
                { name: "Camera & Photo" },
                { name: "TV & Homes Appliances" },
                { name: "Watchs & Accessories" },
                { name: "GPS & Navigation" },
                { name: "Warable Technology" },
              ].map((prod, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-[#475156] text-[18px]"
                >
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="category"
                      className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:border-white checked:bg-[#FA8232] checked:ring-2 checked:ring-[#FA8232]"
                      value={prod.name}
                      checked={prod.name === category} // Make the radio selected
                      onChange={handleCategory} // Trigger handler on change
                    />
                    {prod.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Section */}
          <div className="mb-8">
            <h4 className="text-[20px] font-[500] font-poppins mb-4 uppercase">
              Price Range
            </h4>

            {/* Range Slider */}
            <div className="flex flex-col items-center gap-4">
              {/* Range Slider Container */}
              <div className="relative w-full max-w-lg">
                {/* Background Track */}
                <div className="absolute inset-0 h-1 bg-gray-300 rounded"></div>

                {/* Active Range Highlight */}
                <div
                  className="absolute h-1 bg-[#FA8232] rounded"
                  style={{
                    left: `${((minValue - 50) / 1450) * 100}%`,
                    right: `${100 - ((maxValue - 50) / 1450) * 100}%`,
                  }}
                ></div>

                {/* Min Slider */}
                <input
                  type="range"
                  min="50"
                  max="1500"
                  value={minValue}
                  onChange={handleMinChange}
                  className="absolute w-full appearance-none pointer-events-auto h-1 bg-transparent accent-[#FA8232]"
                />

                {/* Max Slider */}
                <input
                  type="range"
                  min="50"
                  max="1500"
                  value={maxValue}
                  onChange={handleMaxChange}
                  className="absolute w-full appearance-none pointer-events-auto h-1 bg-transparent accent-[#FA8232]"
                />
              </div>

              {/* Display Values */}
              <div className="flex justify-between w-full text-sm text-gray-700 max-w-lg">
                <span>Min: ${minValue}</span>
                <span>Max: ${maxValue}</span>
              </div>
            </div>
            {/* Input Fields for Min & Max Price */}
            <div className="flex flex-wrap gap-4 mt-4">
              <input
                type="text"
                name="minprice"
                placeholder="Min Price"
                className="flex-1 min-w-[120px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA8232] focus:border-transparent"
              />
              <input
                type="text"
                name="maxprice"
                placeholder="Max Price"
                className="flex-1 min-w-[120px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FA8232] focus:border-transparent"
              />
            </div>
            <ul className="space-y-4 mt-5">
              {[
                { name: "All Price" },
                { name: "Under ₹1,000" },
                { name: "₹1,100 to ₹2,000" },
                { name: "₹2,100 to ₹3,000" },
                { name: "₹3,100 to ₹4,000" },
                { name: "₹4,100 to ₹5,000" },
                { name: "₹5,000 to ₹10,000" },
              ].map((prod, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-[#475156] text-[18px]"
                >
                  <label className="flex items-center font-publicSans gap-2 ">
                    <input
                      type="radio"
                      name="category"
                      className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:border-white checked:bg-[#FA8232] checked:ring-2 checked:ring-[#FA8232] form-radio"
                      value={prod.name}
                      checked={prod.name === category} // Make the radio selected
                      onChange={handleCategory} // Trigger handler on change
                    />
                    {prod.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* popular brands */}
          <div className="my-3">
            <h4 className="text-lg font-[500] font-poppins text-[20px] mb-4 uppercase">
              Popular Brands
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(brands).map((brand) => (
                <label
                  key={brand}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={brands[brand]}
                    onChange={() => toggleBrand(brand)}
                    className="w-4 h-4 accent-[#FA8232] cursor-pointer"
                  />
                  <span className="text-[18px] font-[400] font-poppins text-[#475156]">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Popular Tag Section */}
          <div className="my-8">
            <h4 className="text-[20px] font-[500] font-poppins mb-4 uppercase">
              Popular Tag
            </h4>

            <div className="flex flex-wrap font-[500] text-[18px] font-publicSans gap-2">
              {[
                "Game",
                "iPhone",
                "TV",
                "Asus Laptops",
                "Macbook",
                "SSD",
                "Graphics Card ",
                "Power Bank ",
                "Smart TV",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-[#E4E7E9] text-sm cursor-pointer transition-colors duration-200 hover:border-[#FA8232] hover:bg-[#FFF3EB] hover:text-[#FA8232]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="items-center flex justify-center font-publicSans flex-col border-4 border-[#FFE7D6] p-3">
            <img src="/shop/img1.png" alt="img" />
            <h2 className="text-[#191C1F] text-[30px] font-[600] text-center">
              Heavy on Features. Light on Price.
            </h2>
            <div className="my-5">
              Only for:{" "}
              <button className="bg-[#F3DE6D] font-[600] font-inter px-3 p-1">
                ₹25,899
              </button>
            </div>
            <button className="bg-[#FA8232] text-white w-full py-3 text-[18px] font-[700] uppercase mt-5">
              <i class="fa-solid fa-cart-shopping me-4"></i>
              Add to Cart
            </button>
            <button className="border border-[#FA8232] text-[#FA8232] w-full py-3 text-[18px] font-[700] uppercase mt-5">
              View Details
              <i class="fa-solid fa-arrow-right ms-3"></i>
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-gray-50 p-6 md:col-span-3 flex-grow">
          {/* Sort and Results */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between items-center mb-6">
            <div className="border">
              <input
                type="text"
                placeholder="Search for anything..."
                className="px-4 p-2 outline-none bg-gray-50"
              />
              <i class="fa-solid fa-magnifying-glass p-3"></i>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="sort" className="text-gray-600 font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                className="border border-gray-300 rounded-md p-2 text-sm text-gray-700"
              >
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <div className="bg-[#00000033] absolute  inset-0 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/wish-list">
                    <img
                      src="/home/heart-icon.png"
                      alt="like"
                      className="w-2 h-2 md:w-auto md:h-auto"
                    />
                    </Link>
                    <Link to="/add-Cart">
                    <img
                      src="/home/cart-icon.png"
                      alt="cart"
                      className="w-4 h-4 md:w-auto md:h-auto"
                    />
                    </Link>
                    <Link to="/product-details">
                    <img
                      src="/home/view-icon.png"
                      alt="view"
                      className="w-4 h-4 md:w-auto md:h-auto"
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
                  <h3 className="text-[#191C1F] text-[14px] font-[400] font-poppins">
                    {product.title}
                  </h3>
                  <p className="text-[#2DA5F3] font-[600]">
                    {" "}
                    {"\u20B9"}
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-3 mt-6">
            {/* Left Arrow */}
            <button className="w-10 h-10 flex justify-center items-center border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-100">
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            {/* Page Numbers */}
            {pages.map((page, index) => (
              <button
                key={index}
                className={`w-10 h-10 flex justify-center items-center rounded-full font-semibold ${
                  page === currentPage
                    ? "bg-orange-500 text-white"
                    : "border-2 border-orange-500 text-black hover:bg-orange-100"
                }`}
              >
                {page < 10 ? `0${page}` : page}
              </button>
            ))}

            {/* Right Arrow */}
            <button className="w-10 h-10 flex justify-center items-center border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-100">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
