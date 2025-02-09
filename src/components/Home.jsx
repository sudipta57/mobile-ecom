import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import NewArrivalMen from "./NewArrivalMen";
import NewArrivalWomen from "./NewArrivalWomen";
import BrowesMen from "./BrowesMen";
import BrowesWomen from "./BrowesWomen";
import Login from "./Login";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Banner Section */}
      <div className="flex items-center rounded-md shadow-md bg-[url('/home/banner.png')] bg-cover min-h-[500px] bg-no-repeat">
        <div className="px-20">
          <h1 className="text-[55px] font-[700] text-[#B3EBE1] max-w-xl">
            Welcome To Our{" "}
          </h1>
          <h1 className="text-[55px] font-[700] text-[#FFFFFF] max-w-xl">
            Hello Shop World
          </h1>
          <div className="mt-10">
            <button className="text-[20px] bg-[#FFFFFF] text-[#013F47] p-2 ml-5 mr-5 w-[162px] font-poppins">
              By Now
            </button>
          </div>
        </div>
      </div>
      <Products />
      <NewArrivalMen />
      <NewArrivalWomen />
      <BrowesMen />
      <BrowesWomen />
      {/* add banner section */}
      <div
        className="relative text-black bg-cover bg-center bg-no-repeat ml-10 mr-10 "
        style={{
          backgroundImage: `url('/home/addImage.png')`, // Replace with your image path or URL
          backgroundPosition: "right center",
          padding: "20 px",
        }}
      >
        <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto py-10 px-4">
          <div className="flex-1 mb-6 md:mb-0 md:mr-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Unbeatable <br /> Deals On Fashion!
            </h2>
            <p className="text-lg mb-6">Hurry, shop now and save!</p>
            <button className="bg-black text-white px-6 py-2 text-lg font-medium hover:bg-gray-800">
              Shop Now <span className="ml-2">→</span>
            </button>
          </div>
          <div className="flex-1 flex justify-center md:justify-start ml-0">
            <img
              src="/home/addLogo.png" // Replace with your badge image path or URL
              alt="Black Friday Super Sales"
              className="w-100 md:w-50 h-100 md:h-50"
            />
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-black text-white py-10 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright Section */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              HELLO <span className="font-normal">SHOP</span>
            </h2>
            <p className="text-sm text-gray-400">
              © HelloShop™ Ltd. All rights reserved
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT ZENIN</h3>
            <ul className="space-y-2">
              <li>
                <a href="#who" className="text-gray-300 hover:text-white">
                  Who are we
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-300 hover:text-white">
                  Work with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK ZENIN</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#men" className="text-gray-300 hover:text-white">
                  Men
                </a>
              </li>
              <li>
                <a href="#women" className="text-gray-300 hover:text-white">
                  Women
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SOCIAL LINKS</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#linkedin" className="text-gray-300 hover:text-white">
                <img src="/footer/linkendin.png" />
              </a>
              <a href="#instagram" className="text-gray-300 hover:text-white">
                <img src="/footer/insta.png" />
              </a>
              <a href="#twitter" className="text-gray-300 hover:text-white">
                <img src="/footer/twiter.png" />
              </a>
              <a href="#youtube" className="text-gray-300 hover:text-white">
                <img src="/footer/youtube.png" />
              </a>
              <a href="#facebook" className="text-gray-300 hover:text-white">
                <img src="/footer/facebook.png" />
              </a>
            </div>
            <div className="space-y-2">
              <a href="#appstore" className="block">
                <img
                  src="/footer/apple.png" // Replace with the path to your App Store badge
                  alt="Download on the App Store"
                  className="w-40"
                />
              </a>
              <a href="#googleplay" className="block">
                <img
                  src="/footer/google.png" // Replace with the path to your Google Play badge
                  alt="Get it on Google Play"
                  className="w-40"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
