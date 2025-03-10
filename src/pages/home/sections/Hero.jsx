import React from "react";
import bgImage from "../../../assets/images/eko.webp"; // Add your background image

export const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover py-10 md:py-20"
      style={{
        backgroundImage: `url(${bgImage})`, // Fixed Background Image
      }}
    >
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md backdrop-filter"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left">
        {/* Left Column (Text) */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            <span className="block text-yellow-400">Welcome to</span>
            {/* <span className="block text-red-600">to</span> */}
            <span className="block text-white">Brown & Brown Foods</span>
          </h1>
          <p className="text-lg mb-6">
            Healthy, delicious, and convenient breakfast cereals
          </p>
          <a
            href="https://paystack.shop/brown-and-brown-food"
            target="_blank"
            className="bg-yellow-400 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
          >
            ORDER NOW
          </a>
        </div>
      </div>

      {/* Wavy Line Separator */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        height="100"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,100 600,0 900,0 C1200,0 1440,100 1440,100 L0,100 Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Hero;
